"use client";

import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  getPolicyById,
  type CourseItem,
  type CourseModule,
  type CurrentSemesterInfo,
  type PolicyDocument,
} from "@/data/courses";
import type { TutorialVideo } from "@/data/tutorials";
import { AltekIcon } from "@/components/altek/AltekIcon";
import { CourseCard } from "@/components/altek/CourseCard";
import { TutorialGrid } from "@/components/altek/TutorialGrid";
import { PolicyDetailModal } from "@/components/altek/PolicyDetailModal";

export type PraktikumTabKey = "semester-ini" | "daftar" | "modul" | "tutorial";

export interface CatalogModuleEntry extends CourseModule {
  semester: CourseItem["semester"];
  courseName: string;
  courseSlug: string;
  isExtra: boolean;
}

interface PraktikumTabsProps {
  initialTab: PraktikumTabKey;
  currentSemester: CurrentSemesterInfo;
  courses: CourseItem[];
  allModules: CatalogModuleEntry[];
  policies: PolicyDocument[];
  tutorials: TutorialVideo[];
}

const VALID_TABS: readonly PraktikumTabKey[] = [
  "semester-ini",
  "daftar",
  "modul",
  "tutorial",
];

const TAB_ITEMS: readonly { key: PraktikumTabKey; label: string }[] = [
  { key: "semester-ini", label: "Semester Ini" },
  { key: "daftar", label: "Daftar Praktikum" },
  { key: "modul", label: "Modul & Aturan" },
  { key: "tutorial", label: "Tutorial" },
];

const SEMESTERS: readonly CourseItem["semester"][] = [1, 2, 3, 4, 5];

function parseTabParam(raw: string | null): PraktikumTabKey {
  if (raw && (VALID_TABS as readonly string[]).includes(raw)) {
    return raw as PraktikumTabKey;
  }
  return "semester-ini";
}

export function PraktikumTabs({
  initialTab,
  currentSemester,
  courses,
  allModules,
  policies,
  tutorials,
}: PraktikumTabsProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [activeTab, setActiveTab] = useState<PraktikumTabKey>(initialTab);
  const tabRefs = useRef<Partial<Record<PraktikumTabKey, HTMLButtonElement | null>>>({});

  // Tab Daftar state
  const [courseSearch, setCourseSearch] = useState<string>("");
  const [semesterFilter, setSemesterFilter] = useState<"all" | number>("all");

  // Tab Modul state
  const [moduleSemester, setModuleSemester] = useState<"all" | number>("all");
  const [selectedPolicy, setSelectedPolicy] = useState<PolicyDocument | null>(
    null,
  );
  const [policyTriggerEl, setPolicyTriggerEl] = useState<HTMLElement | null>(
    null,
  );

  // Sync URL ?tab= changes (e.g. navigating from Home Quick Access)
  useEffect(() => {
    const param = searchParams.get("tab");
    setActiveTab(parseTabParam(param));
  }, [searchParams]);

  const handleSelectTab = (tab: PraktikumTabKey) => {
    setActiveTab(tab);
    router.replace(`/praktikum?tab=${tab}`, { scroll: false });
  };

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const idx = TAB_ITEMS.findIndex((t) => t.key === activeTab);
    if (idx === -1) return;
    let next = -1;
    if (event.key === "ArrowRight") next = (idx + 1) % TAB_ITEMS.length;
    else if (event.key === "ArrowLeft")
      next = (idx - 1 + TAB_ITEMS.length) % TAB_ITEMS.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = TAB_ITEMS.length - 1;
    if (next !== -1) {
      event.preventDefault();
      const nextKey = TAB_ITEMS[next].key;
      handleSelectTab(nextKey);
      tabRefs.current[nextKey]?.focus();
    }
  };

  // Tab Daftar filtered courses
  const filteredCourses = useMemo(() => {
    const q = courseSearch.trim().toLowerCase();
    return courses.filter((item) => {
      if (semesterFilter !== "all" && item.semester !== semesterFilter) {
        return false;
      }
      if (!q) return true;
      const haystack = `praktikum ${item.name} ${item.description} semester ${item.semester} ${item.labs.join(" ")} ${item.tools.join(" ")} ${item.topics.join(" ")}`.toLowerCase();
      return haystack.includes(q);
    });
  }, [courses, courseSearch, semesterFilter]);

  const groupedCourses = useMemo(() => {
    const sems = Array.from(
      new Set(filteredCourses.map((c) => c.semester)),
    ).sort((a, b) => a - b);
    return sems.map((semester) => ({
      semester,
      items: filteredCourses.filter((c) => c.semester === semester),
    }));
  }, [filteredCourses]);

  // Tab Modul filtered list
  const moduleSemesters = useMemo(
    () =>
      Array.from(new Set(allModules.map((m) => m.semester))).sort(
        (a, b) => a - b,
      ),
    [allModules],
  );

  const visibleModules = useMemo(() => {
    if (moduleSemester === "all") return allModules;
    return allModules.filter((m) => m.semester === moduleSemester);
  }, [allModules, moduleSemester]);

  const moduleCountByCourse = useMemo(() => {
    const counts = new Map<string, number>();
    for (const mod of allModules) {
      counts.set(mod.courseSlug, (counts.get(mod.courseSlug) ?? 0) + 1);
    }
    return counts;
  }, [allModules]);

  const handleOpenPolicy = (id: PolicyDocument["id"], triggerEl: HTMLElement) => {
    const resolved =
      getPolicyById(id) ?? policies.find((item) => item.id === id) ?? null;
    setPolicyTriggerEl(triggerEl);
    setSelectedPolicy(resolved);
  };

  return (
    <div>
      {/* 4 Main Tabs */}
      <div
        className="altek-tabs"
        id="practicumTabs"
        role="tablist"
        aria-label="Navigasi halaman praktikum"
      >
        {TAB_ITEMS.map((tab) => {
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              ref={(el) => {
                tabRefs.current[tab.key] = el;
              }}
              type="button"
              role="tab"
              id={`practicumTab-${tab.key}`}
              aria-selected={isActive}
              aria-controls={isActive ? `tab-${tab.key}` : undefined}
              tabIndex={isActive ? 0 : -1}
              className={`altek-tab-btn${isActive ? " active" : ""}`}
              onClick={() => handleSelectTab(tab.key)}
              onKeyDown={handleTabKeyDown}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* 1. TAB SEMESTER INI */}
      {activeTab === "semester-ini" && (
        <div
          id="tab-semester-ini"
          role="tabpanel"
          aria-labelledby="practicumTab-semester-ini"
        >
          <div className="altek-section-head">
            <div>
              <div className="altek-kicker">SEMESTER AKTIF</div>
              <h2>Praktikum Semester Ini</h2>
              <p className="altek-section-desc">
                Daftar mata kuliah praktikum Teknik Elektro UNSOED yang
                berjalan pada periode ini.
              </p>
            </div>
          </div>

          <div className="altek-module-summary-row" aria-live="polite">
            <div>
              <strong>{currentSemester.period}</strong>
              <small>
                {currentSemester.courses.length} mata kuliah praktikum berjalan
                semester ini
              </small>
            </div>
            <span className="altek-pill live">
              {currentSemester.courses.length} praktikum
            </span>
          </div>

          <div className="altek-course-grid">
            {currentSemester.courses.map((course) => (
              <CourseCard
                key={course.slug}
                course={course}
                moduleCount={moduleCountByCourse.get(course.slug) ?? 0}
              />
            ))}
          </div>

          <div className="altek-info-note">
            Pilih kartu mata kuliah untuk membuka halaman detail, laboratorium,
            modul PDF, Starterpack, serta tutorial.
          </div>
        </div>
      )}

      {/* 2. TAB DAFTAR PRAKTIKUM (13 Mata Kuliah) */}
      {activeTab === "daftar" && (
        <div
          id="tab-daftar"
          role="tabpanel"
          aria-labelledby="practicumTab-daftar"
        >
          <div className="altek-section-head">
            <div>
              <div className="altek-kicker">KATALOG PRAKTIKUM</div>
              <h2>Daftar Mata Kuliah Praktikum</h2>
              <p className="altek-section-desc">
                Pilih mata kuliah untuk melihat laboratorium, modul,
                Starterpack, dan tutorial.
              </p>
            </div>
          </div>

          <div className="altek-catalog-toolbar">
            <label className="altek-catalog-search">
              <AltekIcon name="search" variant="mini" />
              <input
                type="search"
                value={courseSearch}
                onChange={(event) => setCourseSearch(event.target.value)}
                placeholder="Cari mata kuliah praktikum..."
                aria-label="Cari mata kuliah praktikum"
              />
            </label>

            <div
              className="altek-semester-filter"
              role="group"
              aria-label="Filter semester"
            >
              <button
                type="button"
                className={`altek-filter-btn${semesterFilter === "all" ? " active" : ""}`}
                aria-pressed={semesterFilter === "all"}
                onClick={() => setSemesterFilter("all")}
              >
                Semua
              </button>
              {SEMESTERS.map((sem) => (
                <button
                  key={sem}
                  type="button"
                  className={`altek-filter-btn${semesterFilter === sem ? " active" : ""}`}
                  aria-pressed={semesterFilter === sem}
                  onClick={() => setSemesterFilter(sem)}
                >
                  Semester {sem}
                </button>
              ))}
            </div>
          </div>

          <div aria-live="polite">
            {groupedCourses.length > 0 ? (
              groupedCourses.map((group) => (
                <section
                  key={group.semester}
                  className="altek-semester-group"
                >
                  <div className="altek-semester-group-head">
                    <div>
                      <span className="altek-kicker">DAFTAR MATA KULIAH</span>
                      <h3>Semester {group.semester}</h3>
                    </div>
                    <span className="altek-pill">
                      {group.items.length} mata kuliah
                    </span>
                  </div>

                  <div className="altek-course-grid">
                    {group.items.map((course) => (
                      <CourseCard
                        key={course.slug}
                        course={course}
                        moduleCount={moduleCountByCourse.get(course.slug) ?? 0}
                      />
                    ))}
                  </div>
                </section>
              ))
            ) : (
              <article className="altek-rich-empty altek-rich-empty--search">
                <div className="altek-empty-art" aria-hidden="true">
                  <div className="altek-empty-core">
                    <AltekIcon name="search" variant="icon" />
                  </div>
                </div>
                <div className="altek-empty-copy">
                  <strong>Tidak ada hasil yang sesuai</strong>
                  <p>
                    Coba nama mata kuliah, laboratorium, atau perangkat lain,
                    atau ubah filter semester.
                  </p>
                  <button
                    type="button"
                    className="altek-empty-reset-btn"
                    onClick={() => {
                      setCourseSearch("");
                      setSemesterFilter("all");
                    }}
                  >
                    Tampilkan semua mata kuliah
                  </button>
                </div>
              </article>
            )}
          </div>

          <div className="altek-info-note">
            Pilih kartu mata kuliah untuk membuka halaman detail, laboratorium,
            modul, Starterpack, serta tutorial.
          </div>
        </div>
      )}

      {/* 3. TAB MODUL & ATURAN */}
      {activeTab === "modul" && (
        <div
          id="tab-modul"
          role="tabpanel"
          aria-labelledby="practicumTab-modul"
        >
          <div className="altek-section-head">
            <div>
              <div className="altek-kicker">DOKUMEN</div>
              <h2>Modul &amp; Aturan</h2>
              <p className="altek-section-desc">
                Dokumen praktikum dikelompokkan berdasarkan mata kuliah agar
                mudah ditemukan.
              </p>
            </div>
          </div>

          <div className="altek-module-summary-row">
            <div>
              <strong>Modul praktikum tersedia</strong>
              <small>
                {allModules.length} dokumen PDF resmi untuk {courses.length}{" "}
                mata kuliah praktikum
              </small>
            </div>
            <span className="altek-pill live">{allModules.length} PDF</span>
          </div>

          <div
            className="altek-module-toolbar"
            aria-label="Filter semester modul"
          >
            <button
              type="button"
              className="altek-module-filter"
              aria-pressed={moduleSemester === "all"}
              onClick={() => setModuleSemester("all")}
            >
              Semua ({allModules.length})
            </button>
            {moduleSemesters.map((sem) => (
              <button
                key={sem}
                type="button"
                className="altek-module-filter"
                aria-pressed={moduleSemester === sem}
                onClick={() => setModuleSemester(sem)}
              >
                Semester {sem}
              </button>
            ))}
          </div>

          <div className="altek-module-grid" aria-live="polite">
            {visibleModules.map((mod) => {
              const labelText =
                mod.isExtra && mod.badge
                  ? `SEMESTER ${mod.semester} · ${mod.badge}`
                  : `SEMESTER ${mod.semester}`;
              return (
                <article
                  key={`${mod.courseSlug}-${mod.file}`}
                  className="altek-module-card reveal"
                >
                  <span className="altek-module-icon tone-blue" aria-hidden="true">
                    <AltekIcon name="file-pdf" variant="icon" />
                  </span>
                  <div>
                    <span className="altek-module-label">{labelText}</span>
                    <strong>{mod.title}</strong>
                    <small>{mod.file}</small>
                  </div>
                  <div className="altek-module-actions">
                    <a
                      href={mod.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Buka PDF
                    </a>
                    <a href={mod.pdfUrl} download={mod.file}>
                      Unduh
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          {/* 3 Pedoman Praktikum 2026 */}
          <section
            className="altek-policy-section"
            aria-labelledby="policyHeading"
          >
            <div className="altek-section-head">
              <div>
                <div className="altek-kicker">PEDOMAN PRAKTIKUM · 2026</div>
                <h2 id="policyHeading">Aturan &amp; Pedoman Praktikum</h2>
                <p className="altek-section-desc">
                  Dokumen panduan pelaksanaan, struktur laporan, dan template
                  unit praktikum.
                </p>
              </div>
              <span className="altek-pill">{policies.length} dokumen</span>
            </div>

            <div className="altek-policy-grid">
              {policies.map((policy) => (
                <button
                  key={policy.id}
                  type="button"
                  className="altek-policy-card reveal"
                  onClick={(event) =>
                    handleOpenPolicy(policy.id, event.currentTarget)
                  }
                >
                  <span
                    className={`policy-icon tone-${policy.tone}`}
                    aria-hidden="true"
                  >
                    <AltekIcon name={policy.icon} variant="icon" />
                  </span>
                  <div className="altek-policy-card-copy">
                    <small>{policy.orderLabel}</small>
                    <h3>{policy.title}</h3>
                    <p>{policy.shortDesc}</p>
                  </div>
                  <span className="altek-policy-card-arrow" aria-hidden="true">
                    <AltekIcon name="external-link" variant="mini" />
                  </span>
                </button>
              ))}
            </div>

            <div className="altek-policy-official-note">
              <span className="altek-policy-note-mark" aria-hidden="true">
                i
              </span>
              <div>
                <strong>Dokumen pedoman ALTEK 2026</strong>
                <p>
                  Aturan praktikum dan struktur laporan tercantum berlaku per 25
                  Januari 2026. Perubahan skala minor dapat dilakukan melalui
                  rapat dan koordinasi pengurus ALTEK.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* 4. TAB TUTORIAL */}
      {activeTab === "tutorial" && (
        <div
          id="tab-tutorial"
          role="tabpanel"
          aria-labelledby="practicumTab-tutorial"
        >
          <div className="altek-section-head">
            <div>
              <div className="altek-kicker">PANDUAN</div>
              <h2>Tutorial Instalasi &amp; Penggunaan</h2>
              <p className="altek-section-desc">
                Panduan software, perangkat, dan kebutuhan pendukung praktikum.
              </p>
            </div>
          </div>

          <TutorialGrid tutorials={tutorials} />
        </div>
      )}

      <PolicyDetailModal
        policy={selectedPolicy}
        onClose={() => setSelectedPolicy(null)}
        triggerElement={policyTriggerEl}
      />
    </div>
  );
}
