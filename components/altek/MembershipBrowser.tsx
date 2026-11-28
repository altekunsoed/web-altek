"use client";

import { useEffect, useRef, useState } from "react";
import type { ManagementPeriodData, OrgDivision } from "@/data/members";
import { AltekIcon } from "@/components/altek/AltekIcon";
import { trapFocusInContainer } from "@/components/altek/focusTrap";

interface MembershipBrowserProps {
  data2026: ManagementPeriodData;
  archive2025: ManagementPeriodData;
}

interface LightboxPhoto {
  src: string;
  name: string;
  role: string;
  year: 2025 | 2026;
}

function getInitials(name: string): string {
  const parts = String(name || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean);
  if (parts.length === 0) return "AL";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0] ?? ""}${parts[1][0] ?? ""}`.toUpperCase();
}

function countDivisionMembers(division: OrgDivision): number {
  return division.fields.reduce(
    (sum, field) => sum + field.members.length,
    1,
  );
}

function countPeriodMembers(period: ManagementPeriodData): number {
  const divTotal = period.divisions.reduce(
    (sum, div) => sum + countDivisionMembers(div),
    0,
  );
  return period.board.length + divTotal;
}

interface MemberAvatarProps {
  name: string;
  photo?: string;
  size: number;
  lazy?: boolean;
}

function MemberAvatar({ name, photo, size, lazy = false }: MemberAvatarProps) {
  const [failed, setFailed] = useState(false);

  if (photo && !failed) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={encodeURI(photo)}
        alt={name}
        width={size}
        height={size}
        loading={lazy ? "lazy" : undefined}
        decoding="async"
        onError={() => setFailed(true)}
      />
    );
  }

  return (
    <span className="altek-photo-initials" aria-label={name}>
      {getInitials(name)}
    </span>
  );
}

interface DivisionAccordionListProps {
  year: 2025 | 2026;
  divisions: OrgDivision[];
  openKeys: Record<string, boolean>;
  onToggle: (key: string) => void;
  onZoomPhoto: (photo: LightboxPhoto, triggerEl: HTMLElement | null) => void;
}

function DivisionAccordionList({
  year,
  divisions,
  openKeys,
  onToggle,
  onZoomPhoto,
}: DivisionAccordionListProps) {
  return (
    <div className="altek-division-list">
      {divisions.map((division) => {
        const key = `${year}:${division.id}`;
        const isOpen = Boolean(openKeys[key]);
        const domBase = `div-${year}-${division.id}`;
        const panelId = `panel-${year}-${division.id}`;
        const btnId = `btn-${year}-${division.id}`;
        const totalMembers = countDivisionMembers(division);

        return (
          <article
            key={domBase}
            id={domBase}
            className={`altek-division-item reveal${isOpen ? " is-open" : ""}`}
          >
            <button
              type="button"
              id={btnId}
              className="altek-division-trigger"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => onToggle(key)}
            >
              <span
                className={`altek-division-badge tone-${division.tone}`}
                aria-hidden="true"
              >
                <AltekIcon name={division.icon} variant="icon" />
              </span>
              <span className="altek-division-meta">
                <span className="altek-accordion-kicker">
                  DIVISI · {year}
                </span>
                <strong>{division.name}</strong>
                <small>{division.description}</small>
              </span>
              <span
                className="altek-summary-chips"
                aria-label={`${division.fields.length} bidang kerja dan ${totalMembers} anggota`}
              >
                <span>{division.fields.length} bidang</span>
                <span>{totalMembers} anggota</span>
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
              className="altek-division-body"
            >
              <div className="altek-lead-photo-card">
                {division.headPhoto ? (
                  <button
                    type="button"
                    className="altek-lead-avatar is-zoomable"
                    aria-label={`Perbesar foto ${division.head}`}
                    onClick={(event) =>
                      onZoomPhoto(
                        {
                          src: encodeURI(division.headPhoto!),
                          name: division.head,
                          role: `Kepala Divisi · ${division.name}`,
                          year,
                        },
                        event.currentTarget,
                      )
                    }
                  >
                    <MemberAvatar
                      name={division.head}
                      photo={division.headPhoto}
                      size={104}
                      lazy
                    />
                  </button>
                ) : (
                  <div className="altek-lead-avatar" aria-hidden="true">
                    <MemberAvatar name={division.head} size={104} />
                  </div>
                )}
                <div className="altek-lead-meta">
                  <small>Kepala Divisi</small>
                  <strong>{division.head}</strong>
                </div>
              </div>

              <div className="altek-division-fields">
                {division.fields.map((field, fIdx) => (
                  <section
                    key={`${domBase}-field-${fIdx}`}
                    className="altek-division-field-compact"
                  >
                    <div className="altek-field-heading">
                      <span>{String(fIdx + 1).padStart(2, "0")}</span>
                      <h4>{field.name}</h4>
                      <small>{field.members.length} anggota</small>
                    </div>
                    <ul className="altek-member-photo-grid">
                      {field.members.map((member, mIdx) => (
                        <li
                          key={`${domBase}-${fIdx}-${mIdx}`}
                          className="altek-member-photo-card"
                        >
                          {member.photo ? (
                            <button
                              type="button"
                              className="altek-member-photo-box is-zoomable"
                              aria-label={`Perbesar foto ${member.name}`}
                              onClick={(event) =>
                                onZoomPhoto(
                                  {
                                    src: encodeURI(member.photo!),
                                    name: member.name,
                                    role: `${field.name} · ${division.name}`,
                                    year,
                                  },
                                  event.currentTarget,
                                )
                              }
                            >
                              <MemberAvatar
                                name={member.name}
                                photo={member.photo}
                                size={60}
                                lazy
                              />
                            </button>
                          ) : (
                            <div
                              className="altek-member-photo-box"
                              aria-hidden="true"
                            >
                              <MemberAvatar name={member.name} size={60} />
                            </div>
                          )}
                          <span className="altek-member-photo-name">
                            {member.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}

export function MembershipBrowser({
  data2026,
  archive2025,
}: MembershipBrowserProps) {
  const [openDivisions, setOpenDivisions] = useState<Record<string, boolean>>(
    {},
  );
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [zoomedPhoto, setZoomedPhoto] = useState<LightboxPhoto | null>(null);
  const [zoomTriggerEl, setZoomTriggerEl] = useState<HTMLElement | null>(null);

  const archivePanelRef = useRef<HTMLDivElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const lightboxCloseRef = useRef<HTMLButtonElement>(null);

  const total2026 = countPeriodMembers(data2026);
  const total2025 = countPeriodMembers(archive2025);

  const toggleDivision = (key: string) => {
    setOpenDivisions((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleOpenArchiveFromBanner = () => {
    setArchiveOpen(true);
    requestAnimationFrame(() => {
      const reduced = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      archivePanelRef.current?.scrollIntoView({
        behavior: reduced ? "auto" : "smooth",
        block: "nearest",
      });
    });
  };

  const handleToggleArchive = (nextState?: boolean) => {
    const target = typeof nextState === "boolean" ? nextState : !archiveOpen;
    setArchiveOpen(target);
    if (target) {
      requestAnimationFrame(() => {
        const reduced = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        archivePanelRef.current?.scrollIntoView({
          behavior: reduced ? "auto" : "smooth",
          block: "nearest",
        });
      });
    }
  };

  const handleOpenZoom = (
    photo: LightboxPhoto,
    triggerEl: HTMLElement | null,
  ) => {
    setZoomTriggerEl(triggerEl);
    setZoomedPhoto(photo);
  };

  useEffect(() => {
    if (!zoomedPhoto) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    lightboxCloseRef.current?.focus();

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setZoomedPhoto(null);
        return;
      }
      if (lightboxRef.current) {
        trapFocusInContainer(event, lightboxRef.current);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
      if (zoomTriggerEl && typeof zoomTriggerEl.focus === "function") {
        zoomTriggerEl.focus();
      }
    };
  }, [zoomedPhoto, zoomTriggerEl]);

  return (
    <div className="altek-container altek-page-content">
      {/* 1. Panel Tahun Aktif 2026 (Tenang & Datar) */}
      <div className="altek-active-year-panel reveal">
        <div className="altek-active-year-copy">
          <div className="altek-active-status">
            <span className="altek-live-dot" aria-hidden="true" />
            <span>PERIODE AKTIF</span>
            <span className="altek-active-status-year">2026</span>
          </div>
          <h2>
            Kepengurusan <span>2026</span>
          </h2>
          <p>
            Susunan Badan Pengurus Harian dan lima divisi ALTEK periode 2026.
          </p>
          <div className="altek-mgmt-quick-stats">
            <div>
              <strong>{data2026.board.length}</strong>
              <small>Pengurus Harian</small>
            </div>
            <div>
              <strong>{data2026.divisions.length}</strong>
              <small>Divisi</small>
            </div>
            <div>
              <strong>{total2026}</strong>
              <small>Nama tercatat</small>
            </div>
          </div>
          <button
            type="button"
            className="altek-active-year-btn"
            onClick={handleOpenArchiveFromBanner}
          >
            <span>Lihat arsip kepengurusan 2025</span>
            <AltekIcon name="arrow-right" variant="mini" />
          </button>
        </div>

        <div className="altek-active-year-art" aria-hidden="true">
          <div className="altek-year-number">2026</div>
          <div className="altek-year-caption">PERIODE AKTIF</div>
        </div>
      </div>

      {/* 2. Badan Pengurus Harian 2026 */}
      <section className="altek-org-section">
        <div className="altek-section-head">
          <div>
            <div className="altek-kicker">PENGURUS HARIAN · 2026</div>
            <h2>Badan Pengurus Harian</h2>
            <p className="altek-section-desc">
              Pengurus inti ALTEK periode 2026.
            </p>
          </div>
          <span className="altek-pill">{data2026.board.length} pengurus</span>
        </div>

        <div className="altek-bph-grid" id="currentBoardGrid">
          {data2026.board.map((member) => (
            <article
              key={`bph-2026-${member.name}`}
              className="altek-bph-photo-card reveal"
            >
              {member.photo ? (
                <button
                  type="button"
                  className="altek-bph-photo-frame is-zoomable"
                  aria-label={`Perbesar foto ${member.name}`}
                  onClick={(event) =>
                    handleOpenZoom(
                      {
                        src: encodeURI(member.photo!),
                        name: member.name,
                        role: `${member.role} · BPH`,
                        year: 2026,
                      },
                      event.currentTarget,
                    )
                  }
                >
                  <MemberAvatar
                    name={member.name}
                    photo={member.photo}
                    size={210}
                  />
                </button>
              ) : (
                <div className="altek-bph-photo-frame" aria-hidden="true">
                  <MemberAvatar name={member.name} size={210} />
                </div>
              )}

              <span className="altek-member-role-tag">{member.role}</span>
              <h3>{member.name}</h3>
              <p>Badan Pengurus Harian · 2026</p>
              <span className="altek-member-static-tag">Pengurus harian</span>
            </article>
          ))}
        </div>
      </section>

      {/* 3. Accordion 5 Divisi 2026 */}
      <section className="altek-org-section">
        <div className="altek-section-head">
          <div>
            <div className="altek-kicker">DIVISI &amp; BIDANG KERJA · 2026</div>
            <h2>Divisi dan Bidang Kerja</h2>
            <p className="altek-section-desc">
              Buka tiap divisi untuk melihat kepala divisi, bidang, dan daftar
              anggotanya.
            </p>
          </div>
          <span className="altek-pill">{data2026.divisions.length} divisi</span>
        </div>

        <div id="currentDivisionGrid">
          <DivisionAccordionList
            year={2026}
            divisions={data2026.divisions}
            openKeys={openDivisions}
            onToggle={toggleDivision}
            onZoomPhoto={handleOpenZoom}
          />
        </div>
      </section>

      {/* 4. Riwayat / Arsip Kepengurusan 2025 */}
      <section className="altek-org-section altek-history-section">
        <div className="altek-section-head">
          <div>
            <div className="altek-kicker">ARSIP KEPENGURUSAN</div>
            <h2>Riwayat Kepengurusan</h2>
            <p className="altek-section-desc">
              Buka susunan nama pengurus dan anggota yang tersedia untuk periode
              2025.
            </p>
          </div>
          <span className="altek-pill">Arsip pertama</span>
        </div>

        <button
          type="button"
          id="altekArchiveTrigger"
          className="altek-archive-card-compact reveal"
          aria-controls="altekArchivePanel"
          aria-expanded={archiveOpen}
          onClick={() => handleToggleArchive()}
        >
          <span className="altek-archive-symbol">2025</span>
          <div className="altek-archive-card-copy">
            <h3>Arsip Kepengurusan 2025</h3>
            <p>
              Pengurus harian, divisi, dan daftar anggota periode sebelumnya.
            </p>
            <small>
              {archive2025.board.length} pengurus harian ·{" "}
              {archive2025.divisions.length} divisi · {total2025} nama tercatat
            </small>
          </div>
          <span className="altek-archive-action">
            {archiveOpen ? (
              <span>Tutup arsip ↑</span>
            ) : (
              <>
                <span>Lihat nama anggota</span>
                <AltekIcon name="chevron" variant="mini" />
              </>
            )}
          </span>
        </button>

        <div
          ref={archivePanelRef}
          id="altekArchivePanel"
          className="altek-archive-panel"
          hidden={!archiveOpen}
        >
          <div className="altek-archive-head">
            <div>
              <h3>Kepengurusan 2025</h3>
              <p>
                Daftar nama pengurus, bidang, dan anggota yang tercatat pada
                arsip.
              </p>
            </div>
            <button
              type="button"
              className="altek-inline-close"
              onClick={() => handleToggleArchive(false)}
            >
              Tutup
            </button>
          </div>

          <div className="altek-archive-bph-grid">
            {archive2025.board.map((member) => (
              <div
                key={`bph-2025-${member.name}`}
                className="altek-archive-person"
              >
                <div
                  className="altek-archive-person-avatar"
                  aria-hidden="true"
                >
                  <MemberAvatar
                    name={member.name}
                    photo={member.photo}
                    size={44}
                    lazy
                  />
                </div>
                <div>
                  <span>{member.role}</span>
                  <strong>{member.name}</strong>
                </div>
              </div>
            ))}
          </div>

          <DivisionAccordionList
            year={2025}
            divisions={archive2025.divisions}
            openKeys={openDivisions}
            onToggle={toggleDivision}
            onZoomPhoto={handleOpenZoom}
          />
        </div>
      </section>

      {/* Lightbox Perbesar Foto Pengurus */}
      {zoomedPhoto && (
        <div
          className="altek-lightbox-backdrop"
          role="presentation"
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setZoomedPhoto(null);
            }
          }}
        >
          <div
            ref={lightboxRef}
            className="altek-lightbox-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="altekMemberLightboxName"
          >
            <button
              ref={lightboxCloseRef}
              type="button"
              className="altek-lightbox-close"
              aria-label="Tutup foto pengurus"
              onClick={() => setZoomedPhoto(null)}
            >
              &times;
            </button>

            <div className="altek-lightbox-stage">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={zoomedPhoto.src} alt={zoomedPhoto.name} />
            </div>

            <div className="altek-lightbox-caption">
              <div className="altek-lightbox-meta">
                <strong id="altekMemberLightboxName">
                  {zoomedPhoto.name}
                </strong>
                <small>{zoomedPhoto.role}</small>
              </div>
              <span className="altek-lightbox-pill">
                ALTEK {zoomedPhoto.year}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
