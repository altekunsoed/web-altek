"use client";

import { useState } from "react";
import type { InfoItem } from "@/data/informasi";

export interface InfoCardProps {
  item: InfoItem;
  onSelect: (item: InfoItem, triggerEl: HTMLElement | null) => void;
}

/**
 * Kartu informasi resmi ALTEK (poster, kategori, tanggal, judul, ringkasan).
 */
export function InfoCard({ item, onSelect }: InfoCardProps) {
  const [imageFailed, setImageFailed] = useState(false);
  const hasLinks = item.links && item.links.length > 0;

  return (
    <article
      className="card altek-info-card"
      data-category={item.category}
    >
      <button
        type="button"
        className="altek-info-card-trigger"
        aria-label={`Buka informasi: ${item.title}`}
        onClick={(event) => onSelect(item, event.currentTarget)}
      />

      <div className="altek-info-poster">
        {imageFailed ? (
          <div className="altek-info-poster-fallback">{item.title}</div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.image}
            alt={`Poster ${item.title}`}
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
          />
        )}
      </div>

      <div className="altek-info-body">
        <div className="altek-info-meta-row">
          <span className="altek-info-cat" data-cat={item.category}>
            {item.category}
          </span>
          <span className="altek-info-date">{item.shortDate}</span>
        </div>

        <h3>{item.title}</h3>
        <p>{item.excerpt}</p>

        <div className="altek-info-foot">
          <span>Baca rincian &rarr;</span>
          {hasLinks ? (
            <span className="altek-info-link-badge">Tersedia tautan</span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
