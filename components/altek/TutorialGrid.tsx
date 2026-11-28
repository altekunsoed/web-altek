"use client";

import { useMemo, useState, type KeyboardEvent } from "react";
import Image from "next/image";
import type { TutorialCourseKey, TutorialVideo } from "@/data/tutorials";
import {
  getTutorials,
  getYoutubeThumbnailUrl,
  TUTORIAL_COURSE_FILTERS,
} from "@/data/tutorials";
import { VideoPlayerModal } from "@/components/altek/VideoPlayerModal";

export interface TutorialGridProps {
  tutorials?: TutorialVideo[];
  initialFilter?: "all" | TutorialCourseKey;
  showToolbar?: boolean;
  showChannelBar?: boolean;
  compactColumns?: boolean;
  onSelectVideo?: (video: TutorialVideo, triggerEl: HTMLElement | null) => void;
}

/**
 * Grid daftar tutorial YouTube ALTEK dengan filter mata kuliah,
 * pencarian cepat, thumbnail lazy dari i.ytimg.com, dan modal pemutar 16:9.
 */
export function TutorialGrid({
  tutorials,
  initialFilter = "all",
  showToolbar = true,
  showChannelBar = true,
  compactColumns = false,
  onSelectVideo,
}: TutorialGridProps) {
  const allTutorials = useMemo(
    () => tutorials ?? getTutorials(),
    [tutorials],
  );
  const [activeFilter, setActiveFilter] = useState<"all" | TutorialCourseKey>(
    initialFilter,
  );
  const [query, setQuery] = useState("");
  const [selectedVideo, setSelectedVideo] = useState<TutorialVideo | null>(
    null,
  );
  const [triggerElement, setTriggerElement] = useState<HTMLElement | null>(
    null,
  );

  const countByCourse = useMemo(() => {
    const counts: Record<string, number> = { all: allTutorials.length };
    for (const item of allTutorials) {
      counts[item.courseKey] = (counts[item.courseKey] ?? 0) + 1;
    }
    return counts;
  }, [allTutorials]);

  const filteredTutorials = useMemo(() => {
    const q = query.trim().toLowerCase();
    return allTutorials.filter((video) => {
      if (activeFilter !== "all" && video.courseKey !== activeFilter) {
        return false;
      }
      if (!q) return true;
      const hay = `${video.title} ${video.courseName} ${video.software} ${video.unitNote} ${video.desc}`.toLowerCase();
      return hay.includes(q);
    });
  }, [allTutorials, activeFilter, query]);

  const handleOpenVideo = (
    video: TutorialVideo,
    triggerEl: HTMLElement | null,
  ) => {
    if (onSelectVideo) {
      onSelectVideo(video, triggerEl);
      return;
    }
    setTriggerElement(triggerEl);
    setSelectedVideo(video);
  };

  const handleCardKeyDown = (
    event: KeyboardEvent<HTMLElement>,
    video: TutorialVideo,
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleOpenVideo(video, event.currentTarget);
    }
  };

  return (
    <div>
      {showToolbar ? (
        <div className="altek-tut-toolbar">
          <div
            className="altek-tut-filter-group"
            role="group"
            aria-label="Filter tutorial per mata kuliah"
          >
            {TUTORIAL_COURSE_FILTERS.map((filter) => {
              const count = countByCourse[filter.key] ?? 0;
              const isActive = activeFilter === filter.key;
              return (
                <button
                  key={filter.key}
                  type="button"
                  className={
                    isActive
                      ? "altek-tut-filter-btn active"
                      : "altek-tut-filter-btn"
                  }
                  aria-pressed={isActive}
                  onClick={() => setActiveFilter(filter.key)}
                >
                  {filter.label} <span>{count}</span>
                </button>
              );
            })}
          </div>

          <div className="altek-tut-search">
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Cari ETAP, PSIM, Python, PLC..."
              aria-label="Cari video tutorial"
            />
          </div>
        </div>
      ) : null}

      {filteredTutorials.length > 0 ? (
        <div
          className={
            compactColumns
              ? "altek-tut-grid altek-tut-grid--compact"
              : "altek-tut-grid"
          }
        >
          {filteredTutorials.map((video) => {
            const yearLabel = video.isNew
              ? `Terbaru · ${video.year}`
              : `Arsip · ${video.year}`;

            return (
              <article
                key={video.id}
                className="card altek-tut-card"
                role="button"
                tabIndex={0}
                aria-label={`Putar video: ${video.title}`}
                onClick={(event) =>
                  handleOpenVideo(video, event.currentTarget)
                }
                onKeyDown={(event) => handleCardKeyDown(event, video)}
              >
                <div className="altek-tut-thumb">
                  <Image
                    src={getYoutubeThumbnailUrl(video.id)}
                    alt={`Thumbnail ${video.title}`}
                    fill
                    unoptimized
                    sizes={
                      compactColumns
                        ? "(max-width: 640px) 100vw, 50vw"
                        : "(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw"
                    }
                    loading="lazy"
                  />
                  <span
                    className={
                      video.isNew
                        ? "altek-tut-year-tag is-new"
                        : "altek-tut-year-tag"
                    }
                  >
                    {yearLabel}
                  </span>
                  <span className="altek-tut-play-badge" aria-hidden="true">
                    <svg viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                  <span className="altek-tut-duration">{video.duration}</span>
                </div>

                <div className="altek-tut-body">
                  <div className="altek-tut-meta-row">
                    <span className="altek-tut-course-pill">
                      {video.courseName}
                    </span>
                    <span className="altek-tut-software-pill">
                      {video.software}
                    </span>
                  </div>

                  <h3>{video.title}</h3>
                  <p>{video.desc}</p>

                  <div className="altek-tut-foot">
                    <small>{video.unitNote}</small>
                    <span>Tonton video</span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <div className="altek-info-empty-search">
          Tidak ada video tutorial yang cocok dengan kata kunci tersebut.
        </div>
      )}

      {showChannelBar ? (
        <div className="altek-tut-channel-bar">
          <p>
            <strong>Kanal Resmi YouTube ALTEK UNSOED</strong> — Menampilkan{" "}
            {allTutorials.length} video tutorial terkurasi yang relevan dengan
            modul praktikum aktif.
          </p>
          <a
            className="altek-tut-channel-link"
            href="https://www.youtube.com/results?search_query=altek+unsoed"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jelajahi YouTube ALTEK &#8599;
          </a>
        </div>
      ) : null}

      {!onSelectVideo ? (
        <VideoPlayerModal
          video={selectedVideo}
          triggerElement={triggerElement}
          onClose={() => setSelectedVideo(null)}
          onSelectVideo={(nextVideo) => setSelectedVideo(nextVideo)}
        />
      ) : null}
    </div>
  );
}
