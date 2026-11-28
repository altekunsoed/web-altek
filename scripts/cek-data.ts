import fs from "node:fs";
import path from "node:path";
import { getInformasi } from "../data/informasi";
import {
  getTutorials,
  TUTORIAL_COURSE_FILTERS,
  type TutorialCourseKey,
} from "../data/tutorials";
import {
  getCourses,
  getCourseModules,
  getCourseStarterpack,
  getPolicies,
} from "../data/courses";
import { getMembers2026, getArchive2025 } from "../data/members";

const publicDir = path.join(process.cwd(), "public");

const informasi = getInformasi();
const tutorials = getTutorials();
const courses = getCourses();
const policies = getPolicies();
const members2026 = getMembers2026();
const archive2025 = getArchive2025();

const tutorialCounts: Record<string, number> = {};
for (const filter of TUTORIAL_COURSE_FILTERS) {
  if (filter.key === "all") continue;
  const key: TutorialCourseKey = filter.key;
  tutorialCounts[key] = tutorials.filter((t) => t.courseKey === key).length;
}

const assetPaths: string[] = [];

for (const item of informasi) {
  assetPaths.push(item.image);
}

for (const course of courses) {
  assetPaths.push(course.pdfUrl);
  for (const mod of getCourseModules(course)) {
    assetPaths.push(mod.pdfUrl);
  }
  for (const sp of getCourseStarterpack(course.slug)) {
    if (sp.url.startsWith("/assets/")) assetPaths.push(sp.url);
    if (sp.downloadUrl?.startsWith("/assets/")) assetPaths.push(sp.downloadUrl);
    if (sp.previewUrl?.startsWith("/assets/")) assetPaths.push(sp.previewUrl);
  }
}

for (const policy of policies) {
  assetPaths.push(policy.pdfUrl);
  assetPaths.push(policy.docxUrl);
}

for (const bph of members2026.board) {
  if (bph.photo) assetPaths.push(bph.photo);
}
for (const div of members2026.divisions) {
  if (div.headPhoto) assetPaths.push(div.headPhoto);
  for (const field of div.fields) {
    for (const member of field.members) {
      if (member.photo) assetPaths.push(member.photo);
    }
  }
}

const uniqueAssetPaths = Array.from(new Set(assetPaths));
const missingAssets: string[] = [];
const invalidPrefixAssets: string[] = [];

for (const assetPath of uniqueAssetPaths) {
  if (!assetPath.startsWith("/assets/")) {
    invalidPrefixAssets.push(assetPath);
    continue;
  }
  const diskPath = path.join(publicDir, assetPath.slice(1));
  if (!fs.existsSync(diskPath)) {
    missingAssets.push(assetPath);
  }
}

const count2026 =
  members2026.board.length +
  members2026.divisions.reduce(
    (sum, div) =>
      sum +
      1 +
      div.fields.reduce((fSum, field) => fSum + field.members.length, 0),
    0,
  );

const count2025 =
  archive2025.board.length +
  archive2025.divisions.reduce(
    (sum, div) =>
      sum +
      1 +
      div.fields.reduce((fSum, field) => fSum + field.members.length, 0),
    0,
  );

console.log("=== CEK DATA ALTEK ===");
console.log(`Informasi          : ${informasi.length}`);
console.log(`Tutorial           : ${tutorials.length}`);
for (const filter of TUTORIAL_COURSE_FILTERS) {
  if (filter.key === "all") continue;
  console.log(`  - ${filter.label.padEnd(21)}: ${tutorialCounts[filter.key]}`);
}
console.log(`Mata Kuliah        : ${courses.length}`);
console.log(`Pedoman / Aturan   : ${policies.length}`);
console.log(
  `Pengurus 2026      : ${count2026} (${members2026.board.length} BPH, ${members2026.divisions.length} divisi)`,
);
console.log(
  `Arsip 2025         : ${count2025} (${archive2025.board.length} BPH, ${archive2025.divisions.length} divisi)`,
);
console.log(`Total Path Aset    : ${uniqueAssetPaths.length}`);
console.log(`Path Tanpa /assets : ${invalidPrefixAssets.length}`);
console.log(`Path Aset Hilang   : ${missingAssets.length}`);

if (invalidPrefixAssets.length > 0) {
  console.error("Path aset tidak diawali /assets/:", invalidPrefixAssets);
}
if (missingAssets.length > 0) {
  console.error("Path aset hilang di public/:", missingAssets);
}

if (invalidPrefixAssets.length > 0 || missingAssets.length > 0) {
  process.exit(1);
}
