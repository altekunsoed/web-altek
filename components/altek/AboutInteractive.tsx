"use client";

import { useState } from "react";
import Link from "next/link";
import type { AboutExploreContent, RoleResponsibility } from "@/data/aboutPage";
import { AltekIcon } from "@/components/altek/AltekIcon";

interface AboutInteractiveProps {
  explore: AboutExploreContent;
  roles: RoleResponsibility[];
  activeYear: number;
}

type ExploreTopicKey = "sejarah" | "peran-praktikum" | null;

export function AboutInteractive({
  explore,
  roles,
  activeYear,
}: AboutInteractiveProps) {
  const [activeTopic, setActiveTopic] = useState<ExploreTopicKey>(null);
  const [openRoleId, setOpenRoleId] = useState<string | null>(null);

  const toggleTopic = (topic: Exclude<ExploreTopicKey, null>) => {
    setActiveTopic((prev) => (prev === topic ? null : topic));
  };

  const toggleRole = (roleId: string) => {
    setOpenRoleId((prev) => (prev === roleId ? null : roleId));
  };

  return (
    <>
      {/* Profil, Sejarah, & Peran */}
      <section
        className="altek-about-section"
        aria-labelledby="aboutExploreHeading"
      >
        <div className="altek-section-head">
          <div>
            <div className="altek-kicker">{explore.kicker}</div>
            <h2 id="aboutExploreHeading">{explore.heading}</h2>
            <p className="altek-section-desc">{explore.description}</p>
          </div>
        </div>

        <div className="altek-about-topics">
          <button
            type="button"
            className="altek-about-feature reveal"
            aria-expanded={activeTopic === "sejarah"}
            aria-controls="aboutExtraPanel"
            onClick={() => toggleTopic("sejarah")}
          >
            <div className="altek-about-topic-top">
              <span className="altek-about-topic-index">02 / PERJALANAN</span>
              <span className="altek-about-topic-tag">2011</span>
            </div>
            <div className="course-icon tone-sky" aria-hidden="true">
              <AltekIcon name="history" variant="icon" />
            </div>
            <h3>Sejarah ALTEK</h3>
            <p>Mengenal awal keberadaan ALTEK dan perjalanan organisasinya.</p>
            <div className="altek-about-feature-meta">
              <span>Baca ringkasan</span>
              <AltekIcon name="chevron" variant="mini" />
            </div>
          </button>

          <button
            type="button"
            className="altek-about-feature reveal"
            aria-expanded={activeTopic === "peran-praktikum"}
            aria-controls="aboutExtraPanel"
            onClick={() => toggleTopic("peran-praktikum")}
          >
            <div className="altek-about-topic-top">
              <span className="altek-about-topic-index">03 / KEGIATAN</span>
              <span className="altek-about-topic-tag">PRAKTIKUM</span>
            </div>
            <div className="course-icon tone-mint" aria-hidden="true">
              <AltekIcon name="praktikum" variant="icon" />
            </div>
            <h3>ALTEK dan Praktikum</h3>
            <p>
              Alur dukungan, koordinasi asisten, dan kerja sama dengan dosen
              serta laboran.
            </p>
            <div className="altek-about-feature-meta">
              <span>Lihat alur</span>
              <AltekIcon name="chevron" variant="mini" />
            </div>
          </button>

          <Link className="altek-about-feature reveal" href="/keanggotaan">
            <div className="altek-about-topic-top">
              <span className="altek-about-topic-index">04 / KEPENGURUSAN</span>
              <span className="altek-about-topic-tag">{activeYear}</span>
            </div>
            <div className="course-icon tone-rose" aria-hidden="true">
              <AltekIcon name="users" variant="icon" />
            </div>
            <h3>Struktur Organisasi</h3>
            <p>
              Lihat pengurus, divisi, bidang kerja, dan daftar anggota ALTEK.
            </p>
            <div className="altek-about-feature-meta">
              <span>Buka Keanggotaan</span>
              <AltekIcon name="arrow-right" variant="mini" />
            </div>
          </Link>
        </div>

        <div
          id="aboutExtraPanel"
          className="altek-about-inline-panel"
          hidden={activeTopic === null}
          aria-live="polite"
        >
          {activeTopic === "sejarah" && (
            <>
              <div className="altek-inline-header">
                <h3>Sejarah Singkat ALTEK</h3>
                <button
                  type="button"
                  className="altek-inline-close"
                  onClick={() => setActiveTopic(null)}
                >
                  Tutup
                </button>
              </div>
              <p>{explore.sejarahSummary}</p>
            </>
          )}

          {activeTopic === "peran-praktikum" && (
            <>
              <div className="altek-inline-header">
                <h3>ALTEK dan Praktikum</h3>
                <button
                  type="button"
                  className="altek-inline-close"
                  onClick={() => setActiveTopic(null)}
                >
                  Tutup
                </button>
              </div>
              <div className="altek-about-process">
                {explore.processSteps.map((step) => (
                  <div key={step.number} className="altek-about-process-item">
                    <span>{step.number}</span>
                    <div>
                      <h4>{step.title}</h4>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      {/* Tugas Pengurus ALTEK (Daftar bernomor editorial dengan pemisah 1px) */}
      <section
        className="altek-about-section"
        aria-labelledby="jobdeskHeading"
      >
        <div className="altek-section-head">
          <div>
            <div className="altek-kicker">PENGURUS · PERIODE {activeYear}</div>
            <h2 id="jobdeskHeading">Tugas Pengurus ALTEK</h2>
            <p className="altek-section-desc">
              Buka jabatan untuk membaca daftar tanggung jawabnya.
            </p>
          </div>
          <span className="altek-pill">{roles.length} peran</span>
        </div>

        <div className="altek-role-accordion">
          {roles.map((role, idx) => {
            const isOpen = openRoleId === role.id;
            const btnId = `role-btn-${role.id}`;
            const panelId = `role-panel-${role.id}`;
            return (
              <article
                key={role.id}
                className={`altek-role-item reveal${isOpen ? " is-open" : ""}`}
              >
                <button
                  type="button"
                  id={btnId}
                  className="altek-role-trigger"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => toggleRole(role.id)}
                >
                  <span
                    className={`altek-role-symbol tone-${role.tone}`}
                    aria-hidden="true"
                  >
                    <AltekIcon name={role.icon} variant="icon" />
                  </span>
                  <span className="altek-role-meta">
                    <span className="altek-accordion-kicker">
                      PERAN PENGURUS · {String(idx + 1).padStart(2, "0")}
                    </span>
                    <strong>{role.title}</strong>
                    <small>{role.summary}</small>
                  </span>
                  <span className="altek-summary-chips">
                    <span>{role.tasks.length} tanggung jawab</span>
                  </span>
                  <span className="altek-caret-holder" aria-hidden="true">
                    <AltekIcon name="chevron" variant="mini" />
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  hidden={!isOpen}
                  className="altek-role-body"
                >
                  <div className="altek-role-heading">Ruang lingkup tugas</div>
                  <ol>
                    {role.tasks.map((task, tIdx) => (
                      <li key={tIdx}>{task}</li>
                    ))}
                  </ol>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </>
  );
}
