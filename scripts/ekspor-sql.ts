import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";
import { getAllCourseModules, getCourses } from "../data/courses";
import { getArchive2025, getMembers2026 } from "../data/members";
import { getInformasi } from "../data/informasi";

/**
 * Mengekspor data statis (data/*.ts) menjadi satu berkas SQL PostgreSQL.
 * Jalankan dari akar proyek:  bun run scripts/ekspor-sql.ts
 * Keluaran: arsip/altek_data_2026.sql (dihasilkan otomatis, jangan diedit manual).
 */

const OUTPUT_PATH = "arsip/altek_data_2026.sql";

type Cell = string | number | null | undefined;

function q(value: Cell): string {
  if (value === null || value === undefined) return "NULL";
  if (typeof value === "number") return String(value);
  return `'${value.replace(/'/g, "''")}'`;
}

function insert(table: string, columns: string[], rows: Cell[][]): string {
  if (rows.length === 0) return "";
  const values = rows.map((row) => `  (${row.map(q).join(", ")})`).join(",\n");
  return `INSERT INTO ${table} (${columns.join(", ")}) VALUES\n${values};\n`;
}

const SCHEMA_SQL = `DROP SCHEMA IF EXISTS altek CASCADE;
CREATE SCHEMA altek;
SET search_path TO altek;

CREATE TABLE course (
  slug TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  semester INTEGER NOT NULL,
  description TEXT NOT NULL,
  edition TEXT,
  icon TEXT,
  tone TEXT,
  pdf_url TEXT
);

CREATE TABLE course_module (
  id INTEGER PRIMARY KEY,
  course_slug TEXT NOT NULL REFERENCES course (slug),
  sort_order INTEGER NOT NULL,
  title TEXT NOT NULL,
  pdf_url TEXT NOT NULL
);

CREATE TABLE management_period (
  year INTEGER PRIMARY KEY
);

CREATE TABLE board_member (
  id INTEGER PRIMARY KEY,
  period_year INTEGER NOT NULL REFERENCES management_period (year),
  sort_order INTEGER NOT NULL,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  photo TEXT
);

CREATE TABLE division (
  period_year INTEGER NOT NULL REFERENCES management_period (year),
  id TEXT NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  head TEXT NOT NULL,
  head_photo TEXT,
  PRIMARY KEY (period_year, id)
);

CREATE TABLE division_field (
  id INTEGER PRIMARY KEY,
  period_year INTEGER NOT NULL,
  division_id TEXT NOT NULL,
  sort_order INTEGER NOT NULL,
  name TEXT NOT NULL,
  FOREIGN KEY (period_year, division_id) REFERENCES division (period_year, id)
);

CREATE TABLE division_member (
  id INTEGER PRIMARY KEY,
  field_id INTEGER NOT NULL REFERENCES division_field (id),
  sort_order INTEGER NOT NULL,
  name TEXT NOT NULL,
  photo TEXT
);

CREATE TABLE info_item (
  id TEXT PRIMARY KEY,
  category TEXT NOT NULL,
  date_label TEXT NOT NULL,
  short_date TEXT NOT NULL,
  title TEXT NOT NULL,
  image TEXT,
  excerpt TEXT,
  intro TEXT,
  note TEXT
);

CREATE TABLE info_detail (
  info_id TEXT NOT NULL REFERENCES info_item (id),
  sort_order INTEGER NOT NULL,
  label TEXT NOT NULL,
  value TEXT NOT NULL,
  PRIMARY KEY (info_id, sort_order)
);

CREATE TABLE info_link (
  info_id TEXT NOT NULL REFERENCES info_item (id),
  sort_order INTEGER NOT NULL,
  label TEXT NOT NULL,
  url TEXT NOT NULL,
  PRIMARY KEY (info_id, sort_order)
);
`;

function buildSql(): { sql: string; counts: Record<string, number> } {
  const parts: string[] = [
    "-- Dihasilkan otomatis oleh scripts/ekspor-sql.ts dari data/*.ts.\n-- Jangan diedit manual: ubah data/*.ts lalu jalankan ulang skrip.\n-- Situs ALTEK tidak membaca berkas ini; ini hanya arsip/bahan impor.\n",
    "BEGIN;\n",
    SCHEMA_SQL,
  ];
  const counts: Record<string, number> = {};

  const courses = getCourses();
  parts.push(
    insert(
      "course",
      ["slug", "name", "semester", "description", "edition", "icon", "tone", "pdf_url"],
      courses.map((c) => [c.slug, c.name, c.semester, c.description, c.edition, c.icon, c.tone, c.pdfUrl]),
    ),
  );
  counts.course = courses.length;

  const perCourseOrder = new Map<string, number>();
  const moduleRows: Cell[][] = getAllCourseModules().map((mod, index) => {
    const order = perCourseOrder.get(mod.courseSlug) ?? 0;
    perCourseOrder.set(mod.courseSlug, order + 1);
    return [index + 1, mod.courseSlug, order + 1, mod.title, mod.pdfUrl];
  });
  parts.push(insert("course_module", ["id", "course_slug", "sort_order", "title", "pdf_url"], moduleRows));
  counts.course_module = moduleRows.length;

  const periods = [getArchive2025(), getMembers2026()];
  parts.push(insert("management_period", ["year"], periods.map((p) => [p.year])));
  counts.management_period = periods.length;

  const boardRows: Cell[][] = [];
  const divisionRows: Cell[][] = [];
  const fieldRows: Cell[][] = [];
  const memberRows: Cell[][] = [];
  let boardId = 0;
  let fieldId = 0;
  let memberId = 0;

  for (const period of periods) {
    period.board.forEach((member, idx) => {
      boardId += 1;
      boardRows.push([boardId, period.year, idx + 1, member.name, member.role, member.photo]);
    });
    for (const division of period.divisions) {
      divisionRows.push([period.year, division.id, division.name, division.description, division.head, division.headPhoto]);
      division.fields.forEach((field, fIdx) => {
        fieldId += 1;
        fieldRows.push([fieldId, period.year, division.id, fIdx + 1, field.name]);
        field.members.forEach((member, mIdx) => {
          memberId += 1;
          memberRows.push([memberId, fieldId, mIdx + 1, member.name, member.photo]);
        });
      });
    }
  }
  parts.push(insert("board_member", ["id", "period_year", "sort_order", "name", "role", "photo"], boardRows));
  parts.push(insert("division", ["period_year", "id", "name", "description", "head", "head_photo"], divisionRows));
  parts.push(insert("division_field", ["id", "period_year", "division_id", "sort_order", "name"], fieldRows));
  parts.push(insert("division_member", ["id", "field_id", "sort_order", "name", "photo"], memberRows));
  counts.board_member = boardRows.length;
  counts.division = divisionRows.length;
  counts.division_field = fieldRows.length;
  counts.division_member = memberRows.length;

  const infos = getInformasi();
  parts.push(
    insert(
      "info_item",
      ["id", "category", "date_label", "short_date", "title", "image", "excerpt", "intro", "note"],
      infos.map((i) => [i.id, i.category, i.date, i.shortDate, i.title, i.image, i.excerpt, i.intro, i.note]),
    ),
  );
  const detailRows: Cell[][] = infos.flatMap((i) =>
    i.details.map(([label, value], idx): Cell[] => [i.id, idx + 1, label, value]),
  );
  const linkRows: Cell[][] = infos.flatMap((i) =>
    i.links.map((link, idx): Cell[] => [i.id, idx + 1, link.label, link.url]),
  );
  parts.push(insert("info_detail", ["info_id", "sort_order", "label", "value"], detailRows));
  parts.push(insert("info_link", ["info_id", "sort_order", "label", "url"], linkRows));
  counts.info_item = infos.length;
  counts.info_detail = detailRows.length;
  counts.info_link = linkRows.length;

  parts.push("COMMIT;\n");
  return { sql: parts.filter(Boolean).join("\n"), counts };
}

const { sql, counts } = buildSql();
mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, sql, "utf8");

console.log(`Berhasil menulis ${OUTPUT_PATH} (${sql.length} karakter)`);
for (const [table, total] of Object.entries(counts)) {
  console.log(`  ${table}: ${total} baris`);
}
