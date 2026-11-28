"use client";

import { useState, type KeyboardEvent } from "react";
import Link from "next/link";
import type {
  CourseItem,
  CourseModule,
  StarterpackItem,
} from "@/data/courses";
import type { TutorialVideo } from "@/data/tutorials";
import { AltekIcon } from "@/components/altek/AltekIcon";
import { TutorialGrid } from "@/components/altek/TutorialGrid";

export type CourseSubTabKey = "modul" | "kelas" | "starterpack" | "tutorial";

interface CourseDetailTabsProps {
  course: CourseItem;
  modules: CourseModule[];
  starterpack: StarterpackItem[];
  currentPeriod: string;
  isCurrentSemester: boolean;
  courseTutorials: TutorialVideo[];
  totalTutorialsCount: number;
}

const STARTERPACK_META: Record<
  StarterpackItem["type"],
  { label: string; icon: string; tone: CourseItem["tone"]; primary: string }
> = {
  drive: {
    label: "Google Drive",
    icon: "folder",
    tone: "sky",
    primary: "Buka Drive",
  },
  pdf: { label: "Dokumen PDF", icon: "file-pdf", tone: "rose", primary: "Buka PDF" },
  word: {
    label: "Dokumen Word",
    icon: "file-docx",
    tone: "blue",
    primary: "Buka Dokumen",
  },
  image: {
    label: "Gambar",
    icon: "image",
    tone: "mint",
    primary: "Lihat Gambar",
  },
  spreadsheet: {
    label: "Spreadsheet",
    icon: "file",
    tone: "mint",
    primary: "Buka Spreadsheet",
  },
  slides: {
    label: "Presentasi",
    icon: "monitor",
    tone: "amber",
    primary: "Buka Presentasi",
  },
  archive: {
    label: "Arsip ZIP",
    icon: "download",
    tone: "amber",
    primary: "Unduh",
  },
  video: { label: "Video", icon: "play", tone: "rose", primary: "Buka Video" },
  website: {
    label: "Tautan Web",
    icon: "external-link",
    tone: "cyan",
    primary: "Kunjungi Tautan",
  },
  other: { label: "Berkas", icon: "file", tone: "blue", primary: "Buka Berkas" },
};

export function CourseDetailTabs({
  course,
  modules,
  starterpack,
  currentPeriod,
  isCurrentSemester,
  courseTutorials,
  totalTutorialsCount,
}: CourseDetailTabsProps) {
  const [activeSub, setActiveSub] = useState<CourseSubTabKey>("modul");

  const uniqueLabs = Array.from(new Set(course.labs)).filter(Boolean);

  const modSummaryText =
    modules.length > 0
      ? modules.length > 1
        ? `Tersedia · ${modules.length} berkas PDF`
        : `Tersedia${course.edition ? ` · ${course.edition}` : ""}`
      : "Belum tersedia";

  const subTabs: readonly { key: CourseSubTabKey; label: string }[] = [
    { key: "modul", label: "Modul" },
    { key: "kelas", label: "Laboratorium" },
    { key: "starterpack", label: "Starterpack" },
    {
      key: "tutorial",
      label:
        courseTutorials.length > 0
          ? `Tutorial (${courseTutorials.length})`
          : "Tutorial",
    },
  ];

  const handleSubTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const idx = subTabs.findIndex((t) => t.key === activeSub);
    if (idx === -1) return;
    let next = -1;
    if (event.key === "ArrowRight") next = (idx + 1) % subTabs.length;
    else if (event.key === "ArrowLeft")
      next = (idx - 1 + subTabs.length) % subTabs.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = subTabs.length - 1;
    if (next !== -1) {
      event.preventDefault();
      setActiveSub(subTabs[next].key);
    }
  };

  return (
    <div className="altek-container altek-page-content">
      {/* Banner Detail Mata Kuliah */}
      <header className="altek-course-detail-banner">
        <div className="altek-detail-back-row">
          <Link
            href="/praktikum?tab=daftar"
            className="altek-detail-back-btn"
          >
            <AltekIcon name="arrow-left" variant="mini" />
            <span>Kembali ke Daftar Praktikum</span>
          </Link>
          {isCurrentSemester && (
            <span className="altek-course-status-pill is-started">
              <i aria-hidden="true" />
              <span>Berjalan · {currentPeriod}</span>
            </span>
          )}
        </div>

        <div className="altek-course-banner-main">
          <div className="altek-course-banner-icon" aria-hidden="true">
            <AltekIcon name={course.icon} variant="icon" />
          </div>
          <div className="altek-course-banner-copy">
            <div className="altek-course-banner-badges">
              <span className="altek-course-kicker-pill">
                <i aria-hidden="true" />
                <span>
                  MATA KULIAH PRAKTIKUM · SEMESTER {course.semester}
                </span>
              </span>
            </div>
            <h1>Praktikum {course.name}</h1>
            <p>{course.description}</p>
          </div>
        </div>

        <div
          className="altek-course-banner-summary"
          aria-label="Ringkasan status mata kuliah"
        >
          <span className="altek-banner-meta-chip">
            <small>Laboratorium</small>
            <strong>
              {uniqueLabs.length > 0
                ? uniqueLabs.join(" · ")
                : "Belum ditetapkan"}
            </strong>
          </span>
          <span className="altek-banner-meta-chip">
            <small>Modul PDF</small>
            <strong>{modSummaryText}</strong>
          </span>
          <span className="altek-banner-meta-chip">
            <small>Status Semester</small>
            <strong>
              {isCurrentSemester ? currentPeriod : "Katalog Mata Kuliah"}
            </strong>
          </span>
          <span className="altek-banner-meta-chip">
            <small>Starterpack</small>
            <strong>
              {starterpack.length > 0
                ? `${starterpack.length} berkas`
                : "Belum dipublikasikan"}
            </strong>
          </span>
        </div>
      </header>

      {/* 4 Subtab Mata Kuliah */}
      <div
        className="altek-tabs"
        id="courseSubTabs"
        role="tablist"
        aria-label="Subtab detail mata kuliah"
      >
        {subTabs.map((sub) => {
          const isActive = activeSub === sub.key;
          return (
            <button
              key={sub.key}
              type="button"
              id={`courseTab-${sub.key}`}
              role="tab"
              aria-selected={isActive}
              aria-controls={`courseSub-${sub.key}`}
              tabIndex={isActive ? 0 : -1}
              className={`altek-tab-btn${isActive ? " active" : ""}`}
              onClick={() => setActiveSub(sub.key)}
              onKeyDown={handleSubTabKeyDown}
            >
              {sub.label}
            </button>
          );
        })}
      </div>

      {/* 1. Subtab Modul */}
      {activeSub === "modul" && (
        <div
          id="courseSub-modul"
          role="tabpanel"
          aria-labelledby="courseTab-modul"
        >
          {modules.length > 0 ? (
            <div className="altek-course-module-stack">
              {modules.map((mod, idx) => {
                const isExtra = idx > 0;
                return (
                  <section
                    key={mod.file}
                    className="altek-course-detail-section"
                  >
                    <div className="altek-course-module-action-card">
                      <div className="altek-course-module-file">
                        <span
                          className={`module-card-icon tone-${course.tone}`}
                          aria-hidden="true"
                        >
                          <AltekIcon name="file-pdf" variant="icon" />
                        </span>
                        <div style={{ minWidth: 0 }}>
                          {isExtra ? (
                            <span className="altek-module-badge-alt">
                              {mod.badge || "MODUL TAMBAHAN"}
                            </span>
                          ) : (
                            <span className="altek-module-semester-label">
                              {mod.badge ||
                                `SEMESTER ${course.semester} · PDF RESMI`}
                            </span>
                          )}
                          <strong>{mod.title}</strong>
                          <small>{mod.file}</small>
                          {mod.subtitle && (
                            <p className="altek-module-subdesc">
                              {mod.subtitle}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="altek-course-resource-actions">
                        <a
                          className="altek-btn-doc-primary"
                          href={mod.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Buka PDF ${mod.title}`}
                        >
                          <span>Buka PDF</span>
                          <AltekIcon name="external-link" variant="mini" />
                        </a>
                        <a
                          className="altek-btn-doc-download"
                          href={mod.pdfUrl}
                          download={mod.file}
                          aria-label={`Unduh ${mod.title}`}
                        >
                          <span>Unduh</span>
                          <AltekIcon name="download" variant="mini" />
                        </a>
                      </div>
                    </div>
                  </section>
                );
              })}
            </div>
          ) : (
            <section className="altek-course-detail-section">
              <article className="altek-rich-empty altek-rich-empty--starterpack">
                <div className="altek-empty-art" aria-hidden="true">
                  <div className="altek-empty-core">
                    <AltekIcon name="file-pdf" variant="icon" />
                  </div>
                </div>
                <div className="altek-empty-copy">
                  <strong>Modul belum dipublikasikan</strong>
                  <p>
                    File modul PDF untuk mata kuliah ini belum tersedia.
                  </p>
                </div>
              </article>
            </section>
          )}

          {course.topics.length > 0 && (
            <section className="altek-course-syllabus-card">
              <div className="altek-syllabus-head">
                <div>
                  <span className="altek-kicker">CAKUPAN MATERI MODUL</span>
                  <h3>Pokok Bahasan &amp; Unit Praktikum</h3>
                </div>
                {course.edition && (
                  <span className="altek-syllabus-edition">
                    {course.edition}
                  </span>
                )}
              </div>

              <ol className="altek-syllabus-list">
                {course.topics.map((topic, idx) => (
                  <li key={idx}>{topic}</li>
                ))}
              </ol>

              {course.tools.length > 0 && (
                <div className="altek-syllabus-tools-wrap">
                  <span className="altek-syllabus-tools-label">
                    Perangkat &amp; Software Utama
                  </span>
                  <div className="altek-tool-chips">
                    {course.tools.map((tool) => (
                      <span key={tool}>{tool}</span>
                    ))}
                  </div>
                </div>
              )}
            </section>
          )}
        </div>
      )}

      {/* 2. Subtab Laboratorium */}
      {activeSub === "kelas" && (
        <div
          id="courseSub-kelas"
          role="tabpanel"
          aria-labelledby="courseTab-kelas"
        >
          <section
            className="altek-official-labs-panel"
            aria-label="Laboratorium Pelaksanaan"
          >
            <div className="altek-official-labs-head">
              <span className="altek-official-labs-icon" aria-hidden="true">
                <AltekIcon name="lab" variant="icon" />
              </span>
              <div>
                <h3>Laboratorium Pelaksanaan</h3>
                <small>
                  Lokasi laboratorium resmi Praktikum {course.name} Teknik
                  Elektro UNSOED
                </small>
              </div>
            </div>
            {uniqueLabs.length > 0 ? (
              <div className="altek-official-lab-list">
                {uniqueLabs.map((lab) => (
                  <span key={lab} className="altek-official-lab-pill">
                    <i aria-hidden="true" />
                    <span>{lab}</span>
                  </span>
                ))}
              </div>
            ) : (
              <p className="altek-module-subdesc">
                Informasi laboratorium belum tersedia.
              </p>
            )}
          </section>
        </div>
      )}

      {/* 3. Subtab Starterpack */}
      {activeSub === "starterpack" && (
        <div
          id="courseSub-starterpack"
          role="tabpanel"
          aria-labelledby="courseTab-starterpack"
          aria-live="polite"
        >
          <section className="altek-course-detail-section">
            <div className="altek-starterpack-head">
              <div>
                <h3>Starterpack Praktikum {course.name}</h3>
                <p className="altek-starterpack-intro">
                  Berkas dan tautan pendukung persiapan praktikum (Google Drive,
                  PDF, Word, Spreadsheet, Presentasi, ZIP, gambar, video, atau
                  tautan web).
                </p>
              </div>
              <span className="altek-starterpack-count">
                {starterpack.length} item
              </span>
            </div>

            {starterpack.length > 0 ? (
              <div className="altek-starterpack-grid">
                {starterpack.map((resource, idx) => {
                  const meta =
                    STARTERPACK_META[resource.type] ?? STARTERPACK_META.other;
                  const isExternal = /^https?:\/\//i.test(resource.url);
                  const dlUrl =
                    resource.downloadUrl || (!isExternal ? resource.url : "");
                  const isLocalDl = Boolean(
                    dlUrl && !/^https?:\/\//i.test(dlUrl),
                  );
                  const showDownload =
                    (resource.type === "pdf" ||
                      resource.type === "word" ||
                      resource.type === "spreadsheet" ||
                      resource.type === "slides" ||
                      resource.type === "other") &&
                    Boolean(dlUrl);

                  return (
                    <article
                      key={`${resource.title}-${idx}`}
                      className="altek-starterpack-card"
                    >
                      <div>
                        <div className="altek-starterpack-card-head">
                          <span
                            className={`starterpack-icon tone-${meta.tone}`}
                            aria-hidden="true"
                          >
                            <AltekIcon name={meta.icon} variant="icon" />
                          </span>
                          <div style={{ minWidth: 0 }}>
                            <small className="altek-starterpack-type">
                              {meta.label}
                            </small>
                            <strong className="altek-starterpack-title">
                              {resource.title}
                            </strong>
                          </div>
                        </div>
                        {resource.description && (
                          <p className="altek-starterpack-description">
                            {resource.description}
                          </p>
                        )}
                        {resource.fileName && (
                          <p className="altek-starterpack-file">
                            {resource.fileName}
                          </p>
                        )}
                      </div>

                      <div className="altek-starterpack-actions">
                        {resource.type === "archive" ? (
                          <a
                            className="altek-btn-doc-primary"
                            href={dlUrl || resource.url}
                            download={isLocalDl ? true : undefined}
                            target={isLocalDl ? undefined : "_blank"}
                            rel={
                              isLocalDl ? undefined : "noopener noreferrer"
                            }
                            aria-label={`Unduh ${resource.title}`}
                          >
                            <span>Unduh</span>
                            <AltekIcon name="download" variant="mini" />
                          </a>
                        ) : (
                          <>
                            <a
                              className="altek-btn-doc-primary"
                              href={resource.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Buka ${resource.title}`}
                            >
                              <span>{meta.primary}</span>
                              <AltekIcon name="external-link" variant="mini" />
                            </a>
                            {showDownload && dlUrl && (
                              <a
                                className="altek-btn-doc-download"
                                href={dlUrl}
                                download={isLocalDl ? true : undefined}
                                target={isLocalDl ? undefined : "_blank"}
                                rel={
                                  isLocalDl
                                    ? undefined
                                    : "noopener noreferrer"
                                }
                                aria-label={`Unduh ${resource.title}`}
                              >
                                <span>Unduh</span>
                                <AltekIcon name="download" variant="mini" />
                              </a>
                            )}
                          </>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              <article className="altek-rich-empty altek-rich-empty--starterpack">
                <div className="altek-empty-art" aria-hidden="true">
                  <div className="altek-empty-core">
                    <AltekIcon name="folder" variant="icon" />
                  </div>
                </div>
                <div className="altek-empty-copy">
                  <strong>Starterpack belum dipublikasikan</strong>
                  <p>
                    Belum ada berkas pendukung untuk mata kuliah ini. Modul PDF
                    utama tetap dapat dibuka melalui tab Modul.
                  </p>
                  {modules.length > 0 && (
                    <button
                      type="button"
                      className="altek-empty-reset-btn"
                      onClick={() => setActiveSub("modul")}
                    >
                      <span>Buka Tab Modul</span>
                      <AltekIcon name="arrow-right" variant="mini" />
                    </button>
                  )}
                </div>
              </article>
            )}
          </section>
        </div>
      )}

      {/* 4. Subtab Tutorial (N) */}
      {activeSub === "tutorial" && (
        <div
          id="courseSub-tutorial"
          role="tabpanel"
          aria-labelledby="courseTab-tutorial"
        >
          {courseTutorials.length > 0 ? (
            <>
              <div className="altek-course-tut-head">
                <div>
                  <h3>Video Tutorial Terkait</h3>
                  <p>
                    Klik kartu untuk memutar video langsung di halaman ini.
                  </p>
                </div>
                <span className="altek-pill live">
                  {courseTutorials.length} Video
                </span>
              </div>
              <TutorialGrid
                tutorials={courseTutorials}
                showToolbar={false}
                showChannelBar={false}
                compactColumns={false}
              />
            </>
          ) : (
            <div className="altek-course-tut-empty">
              <div>
                <strong>
                  Belum ada video tutorial khusus untuk mata kuliah ini
                </strong>
                <p>
                  Video YouTube ALTEK UNSOED yang saat ini tersedia mencakup
                  Tenaga Listrik, Pemrograman, Otomasi Industri, Sistem
                  Kendali, Sistem Mikroprosesor, Instrumentasi, dan
                  Elektronika.
                </p>
              </div>
              <Link
                href="/praktikum?tab=tutorial"
                className="altek-btn-doc-primary"
              >
                Lihat Semua Tutorial ({totalTutorialsCount})
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
