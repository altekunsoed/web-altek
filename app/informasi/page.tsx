import type { Metadata } from "next";
import Image from "next/image";
import { getInformasi } from "@/data/informasi";
import { InformasiBrowser } from "@/components/altek/InformasiBrowser";

export const metadata: Metadata = {
  title: "Informasi & Berita — ALTEK UNSOED",
  description:
    "Pengumuman praktikum, jadwal kegiatan, dan kabar terbaru ALTEK UNSOED.",
};

export default function InformasiPage() {
  const items = getInformasi();

  return (
    <div className="altek-info-page" id="page-informasi">
      <section className="altek-hero altek-page-hero" data-model="informasi">
        <div className="altek-hero-photo-layer" aria-hidden="true">
          <Image
            src="/assets/custom/gedung-lab-ft.jpg"
            alt=""
            fill
            sizes="100vw"
          />
        </div>

        <div className="altek-hero-svg-layer" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 540"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <linearGradient
                id="altekInfoCurveSweep"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop offset="0%" stopColor="#0B1624" stopOpacity="0.88" />
                <stop offset="56%" stopColor="#14263D" stopOpacity="0.62" />
                <stop offset="100%" stopColor="#1D3C5C" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="altekInfoGoldRibbon"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop offset="0%" stopColor="#F5C15D" stopOpacity="0.34" />
                <stop offset="65%" stopColor="#D98F28" stopOpacity="0.14" />
                <stop offset="100%" stopColor="#D98F28" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="altekInfoTealRibbon"
                x1="0"
                y1="1"
                x2="1"
                y2="0"
              >
                <stop offset="0%" stopColor="#5EE0DF" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#5EE0DF" stopOpacity="0" />
              </linearGradient>
              <pattern
                id="altekInfoDots"
                width="22"
                height="22"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1.2" fill="#FFE19C" opacity="0.28" />
              </pattern>
            </defs>
            <path
              d="M0 0 L670 0 C595 155, 610 360, 725 540 L0 540 Z"
              fill="url(#altekInfoCurveSweep)"
            />
            <g className="h4-drift">
              <path
                d="M648 0 L688 0 C618 158, 636 356, 756 540 L712 540 C596 356, 580 158, 648 0 Z"
                fill="url(#altekInfoGoldRibbon)"
              />
              <path
                d="M694 0 L716 0 C654 156, 670 352, 784 540 L764 540 C652 352, 636 156, 694 0 Z"
                fill="url(#altekInfoTealRibbon)"
              />
            </g>
            <rect
              x="34"
              y="424"
              width="240"
              height="84"
              rx="12"
              fill="url(#altekInfoDots)"
              opacity="0.55"
            />
            <g transform="translate(1058 34)">
              <rect
                x="0"
                y="0"
                width="96"
                height="26"
                rx="13"
                fill="#0B1624"
                fillOpacity="0.56"
              />
              <circle className="h4-pulse" cx="16" cy="13" r="4.5" fill="#F5C15D" />
              <rect
                x="29"
                y="10"
                width="52"
                height="6"
                rx="3"
                fill="#FFE19C"
                fillOpacity="0.72"
              />
            </g>
          </svg>
        </div>

        <div className="altek-container altek-hero-inner altek-page-hero-flex">
          <div className="altek-hero-copy">
            <div className="altek-hero-eyebrow">
              <i aria-hidden="true" />
              <span>ALTEK UNSOED</span>
            </div>
            <h1>
              Informasi <span>&amp;</span> Berita
            </h1>
            <p>
              Pengumuman praktikum, jadwal kegiatan, dan kabar terbaru ALTEK
              UNSOED.
            </p>
          </div>
          <div className="altek-page-hero-chip">
            <i aria-hidden="true" />
            <span>{items.length} Publikasi Resmi · 2026</span>
          </div>
        </div>
      </section>

      <section className="altek-container altek-page-content">
        <InformasiBrowser items={items} />
      </section>
    </div>
  );
}
