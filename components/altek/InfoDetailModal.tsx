"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { InfoItem } from "@/data/informasi";
import { AltekIcon } from "@/components/altek/AltekIcon";
import { trapFocusInContainer } from "@/components/altek/focusTrap";

export interface InfoDetailModalProps {
  item: InfoItem | null;
  onClose: () => void;
  triggerElement?: HTMLElement | null;
}

/**
 * Modal detail informasi (poster utuh, rincian key-value, catatan, tautan eksternal)
 * beserta lightbox pratinjau ukuran penuh poster.
 */
export function InfoDetailModal({
  item,
  onClose,
  triggerElement,
}: InfoDetailModalProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const titleId = useId();
  const lightboxTitleId = useId();
  const sheetRef = useRef<HTMLElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const posterZoomBtnRef = useRef<HTMLButtonElement | null>(null);
  const lightboxDialogRef = useRef<HTMLDivElement | null>(null);
  const lightboxCloseBtnRef = useRef<HTMLButtonElement | null>(null);
  const lastTriggerRef = useRef<HTMLElement | null>(null);

  const isOpen = item !== null;

  // Kunci scroll body dan kelola pengembalian fokus saat modal terbuka/tertutup
  useEffect(() => {
    if (!isOpen) return;

    const capturedTrigger =
      triggerElement ??
      (document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null);
    lastTriggerRef.current = capturedTrigger;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.requestAnimationFrame(() => {
      closeBtnRef.current?.focus({ preventScroll: true });
    });

    return () => {
      window.cancelAnimationFrame(focusTimer);
      document.body.style.overflow = prevOverflow;
      const returnTarget = lastTriggerRef.current;
      lastTriggerRef.current = null;
      if (returnTarget && returnTarget.isConnected) {
        returnTarget.focus({ preventScroll: true });
      }
    };
  }, [isOpen, triggerElement]);

  // Fokus ke lightbox saat dibuka dan kembalikan ke tombol poster saat ditutup
  const wasLightboxOpenRef = useRef(false);
  useEffect(() => {
    if (lightboxOpen) {
      wasLightboxOpenRef.current = true;
      const timer = window.requestAnimationFrame(() => {
        lightboxCloseBtnRef.current?.focus({ preventScroll: true });
      });
      return () => window.cancelAnimationFrame(timer);
    }

    if (wasLightboxOpenRef.current) {
      wasLightboxOpenRef.current = false;
      if (isOpen) {
        posterZoomBtnRef.current?.focus({ preventScroll: true });
      }
    }
  }, [lightboxOpen, isOpen]);

  // Tutup dengan tombol Esc & perangkap Tab di modal/lightbox aktif
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        if (lightboxOpen) {
          setLightboxOpen(false);
        } else {
          setLightboxOpen(false);
          onClose();
        }
        return;
      }

      if (event.key !== "Tab") return;

      const activeContainer = lightboxOpen
        ? lightboxDialogRef.current
        : sheetRef.current;
      trapFocusInContainer(event, activeContainer);
    };

    document.addEventListener("keydown", onKeyDown, true);
    return () => document.removeEventListener("keydown", onKeyDown, true);
  }, [isOpen, lightboxOpen, onClose]);

  if (!item) return null;

  const handleClose = () => {
    setLightboxOpen(false);
    onClose();
  };

  return (
    <>
      <div
        className="modal-backdrop"
        onClick={(event) => {
          if (event.target === event.currentTarget) handleClose();
        }}
      >
        <section
          ref={sheetRef}
          className="modal-sheet"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          tabIndex={-1}
        >
          <div className="sheet-header">
            <div className="sheet-heading">
              <span className="modal-kicker">
                {item.category.toUpperCase()} · INFORMASI ALTEK
              </span>
              <h3 id={titleId}>{item.title}</h3>
            </div>
            <button
              ref={closeBtnRef}
              className="close-modal"
              type="button"
              aria-label="Tutup detail"
              onClick={handleClose}
            >
              <AltekIcon name="close" variant="mini" />
            </button>
          </div>

          <div className="modal-meta">
            <span>{item.date}</span>
            <span>{item.category}</span>
          </div>

          <div className="modal-body">
            <p>{item.intro}</p>

            <div className="altek-info-detail-grid">
              <button
                ref={posterZoomBtnRef}
                type="button"
                className="altek-info-poster-stage"
                aria-label={`Perbesar poster ${item.title}`}
                onClick={() => setLightboxOpen(true)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={item.image}
                  alt={`Poster ${item.title}`}
                  decoding="async"
                />
                <span className="altek-info-poster-hint">
                  Klik poster untuk melihat ukuran penuh
                </span>
              </button>

              <div className="altek-info-detail-box">
                <ul className="altek-info-kv">
                  {item.details.map(([label, value], idx) => (
                    <li key={`${label}-${idx}`}>
                      <small>{label}</small>
                      <strong>{value}</strong>
                    </li>
                  ))}
                </ul>

                {item.note ? (
                  <div className="altek-info-note-box">{item.note}</div>
                ) : null}

                {item.links && item.links.length > 0 ? (
                  <div className="altek-info-ext-links">
                    {item.links.map((link) => (
                      <a
                        key={`${link.label}-${link.url}`}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label} ↗
                      </a>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      </div>

      {lightboxOpen ? (
        <div
          className="altek-lightbox-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby={lightboxTitleId}
          onClick={(event) => {
            if (event.target === event.currentTarget) {
              setLightboxOpen(false);
            }
          }}
        >
          <div
            ref={lightboxDialogRef}
            className="altek-lightbox-dialog"
            tabIndex={-1}
          >
            <div className="altek-lightbox-stage">
              <button
                ref={lightboxCloseBtnRef}
                type="button"
                className="altek-lightbox-close"
                aria-label="Tutup pratinjau poster"
                onClick={() => setLightboxOpen(false)}
              >
                &times;
              </button>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.image} alt={`Poster ${item.title}`} />
            </div>
            <div className="altek-lightbox-caption">
              <div className="altek-lightbox-meta">
                <strong id={lightboxTitleId}>{item.title}</strong>
                <small>
                  {item.date} · {item.category}
                </small>
              </div>
              <span className="altek-lightbox-pill">Poster Resmi</span>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
