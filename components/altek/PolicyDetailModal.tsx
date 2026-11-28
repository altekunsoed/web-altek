"use client";

import { useEffect, useRef } from "react";
import type { PolicyDocument } from "@/data/courses";
import { AltekIcon } from "@/components/altek/AltekIcon";
import { trapFocusInContainer } from "@/components/altek/focusTrap";

interface PolicyDetailModalProps {
  policy: PolicyDocument | null;
  onClose: () => void;
  triggerElement?: HTMLElement | null;
}

/**
 * Modal detail aturan dan pedoman praktikum (Tata Tertib, Struktur Laporan, Template Laporan).
 */
export function PolicyDetailModal({
  policy,
  onClose,
  triggerElement = null,
}: PolicyDetailModalProps) {
  const sheetRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!policy) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (sheetRef.current) {
        trapFocusInContainer(event, sheetRef.current);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
      if (triggerElement && typeof triggerElement.focus === "function") {
        triggerElement.focus();
      }
    };
  }, [policy, onClose, triggerElement]);

  if (!policy) return null;

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={sheetRef}
        className="modal-sheet"
        role="dialog"
        aria-modal="true"
        aria-labelledby="altekPolicyModalTitle"
      >
        <div className="sheet-header">
          <div className="sheet-title-wrap">
            <div className="sheet-category">{policy.eyebrow}</div>
            <h3 id="altekPolicyModalTitle" className="sheet-title">
              {policy.title}
            </h3>
            <p className="sheet-intro">{policy.intro}</p>
            <div className="sheet-meta-pills">
              <span className="sheet-meta-pill">ALTEK 2026</span>
              <span className="sheet-meta-pill">Dokumen resmi</span>
            </div>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            className="modal-close-btn"
            aria-label="Tutup pedoman praktikum"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        <div className="altek-policy-sections">
          {policy.sections.map((section) => (
            <section
              key={section.title}
              className="altek-policy-section-panel"
            >
              <small>PEDOMAN PRAKTIKUM</small>
              <h4>{section.title}</h4>
              {section.items && section.items.length > 0 && (
                <ul className="altek-policy-sheet-list">
                  {section.items.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              )}
              {section.rows && section.rows.length > 0 && (
                <div className="altek-policy-grade-wrap">
                  <table className="altek-policy-grade-table">
                    <thead>
                      <tr>
                        <th>Rentang Skor</th>
                        <th>Nilai Huruf</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.rows.map(([range, grade]) => (
                        <tr key={range}>
                          <td>{range}</td>
                          <td>{grade}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          ))}
        </div>

        {policy.note && (
          <div className="altek-policy-sheet-note">
            <span className="altek-policy-note-mark" aria-hidden="true">
              i
            </span>
            <div>
              <strong>Catatan dokumen</strong>
              <p>{policy.note}</p>
            </div>
          </div>
        )}

        <div className="altek-policy-doc-actions">
          <a
            className="altek-btn-doc-primary"
            href={policy.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Buka PDF</span>
            <AltekIcon name="external-link" variant="mini" />
          </a>
          <a
            className="altek-btn-doc-download"
            href={policy.docxUrl}
            download={policy.file}
          >
            <span>Unduh DOCX</span>
            <AltekIcon name="download" variant="mini" />
          </a>
          <a
            className="altek-btn-doc-download"
            href={policy.pdfUrl}
            download={policy.pdf}
          >
            <span>Unduh PDF</span>
            <AltekIcon name="download" variant="mini" />
          </a>
        </div>
      </div>
    </div>
  );
}
