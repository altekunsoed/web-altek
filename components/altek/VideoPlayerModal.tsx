"use client";

import { useEffect, useId, useMemo, useRef } from "react";
import type { TutorialVideo } from "@/data/tutorials";
import {
  getTutorialsByCourse,
  getYoutubeEmbedUrl,
  getYoutubeWatchUrl,
} from "@/data/tutorials";
import { trapFocusInContainer } from "@/components/altek/focusTrap";

export interface VideoPlayerModalProps {
  video: TutorialVideo | null;
  onClose: () => void;
  onSelectVideo: (video: TutorialVideo) => void;
  triggerElement?: HTMLElement | null;
}

/**
 * Modal pemutar video YouTube tersemat (youtube-nocookie.com, rasio 16:9)
 * dengan playlist mini untuk video lain pada mata kuliah yang sama.
 */
export function VideoPlayerModal({
  video,
  onClose,
  onSelectVideo,
  triggerElement,
}: VideoPlayerModalProps) {
  const titleId = useId();
  const dialogRef = useRef<HTMLElement | null>(null);
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  const lastTriggerRef = useRef<HTMLElement | null>(null);

  const siblings = useMemo(() => {
    if (!video) return [];
    return getTutorialsByCourse(video.courseKey);
  }, [video]);

  const isOpen = video !== null;

  // Kunci scroll body, arahkan fokus ke tombol tutup saat dibuka, dan kembalikan saat ditutup
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

  // Tutup lewat tombol Esc dan trap Tab di dalam dialog
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      trapFocusInContainer(event, dialogRef.current);
    };

    document.addEventListener("keydown", onKeyDown, true);
    return () => document.removeEventListener("keydown", onKeyDown, true);
  }, [isOpen, onClose]);

  if (!video) return null;

  return (
    <div
      className="altek-video-backdrop"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <section
        ref={dialogRef}
        className="altek-video-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
      >
        <div className="altek-video-head">
          <div className="altek-video-head-copy">
            <div className="altek-video-head-meta">
              {video.courseName} · {video.software} · {video.duration} ·{" "}
              {video.year}
            </div>
            <h3 id={titleId}>{video.title}</h3>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            className="altek-video-close"
            aria-label="Tutup pemutar video"
            onClick={onClose}
          >
            &times;
          </button>
        </div>

        <div className="altek-video-stage">
          <iframe
            key={video.id}
            src={getYoutubeEmbedUrl(video.id)}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>

        <div className="altek-video-body">
          <div className="altek-video-desc-row">
            <p>
              {video.desc} ({video.unitNote}).
            </p>
            <a
              className="altek-video-yt-btn"
              href={getYoutubeWatchUrl(video.id)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Tonton di YouTube &#8599;
            </a>
          </div>

          {siblings.length > 1 ? (
            <div className="altek-video-related">
              <div className="altek-video-related-label">
                Daftar video Praktikum {video.courseName} ({siblings.length})
              </div>
              <div className="altek-video-related-list">
                {siblings.map((sibling) => {
                  const isCurrent = sibling.id === video.id;
                  return (
                    <button
                      key={sibling.id}
                      type="button"
                      className={
                        isCurrent
                          ? "altek-video-related-chip is-current"
                          : "altek-video-related-chip"
                      }
                      aria-current={isCurrent ? "true" : undefined}
                      onClick={() => onSelectVideo(sibling)}
                    >
                      {sibling.title} ({sibling.duration})
                    </button>
                  );
                })}
              </div>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}
