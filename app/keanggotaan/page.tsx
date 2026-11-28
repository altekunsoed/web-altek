import type { Metadata } from "next";
import {
  getArchive2025,
  getDivisionById,
  getMembers2026,
} from "@/data/members";
import { MembershipBrowser } from "@/components/altek/MembershipBrowser";

export const metadata: Metadata = {
  title: "Keanggotaan & Kepengurusan",
  description:
    "Daftar Badan Pengurus Harian, lima divisi, dan penanggung jawab praktikum ALTEK periode 2026.",
};

export default function KeanggotaanPage() {
  const raw2026 = getMembers2026();
  const raw2025 = getArchive2025();

  const data2026 = {
    ...raw2026,
    divisions: raw2026.divisions.map(
      (div) => getDivisionById(2026, div.id) ?? div,
    ),
  };

  const archive2025 = {
    ...raw2025,
    divisions: raw2025.divisions.map(
      (div) => getDivisionById(2025, div.id) ?? div,
    ),
  };

  return (
    <div className="altek-keanggotaan-page" id="page-keanggotaan">
      <section className="altek-hero altek-page-hero" data-model="keanggotaan">
        <div className="altek-hero-photo-layer" aria-hidden="true">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/custom/gedung-lab-ft.jpg"
            alt=""
            decoding="async"
          />
        </div>

        <div className="altek-hero-svg-layer" aria-hidden="true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 540"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <radialGradient
                id="altekOrgGlowSky"
                cx="50%"
                cy="50%"
                r="50%"
              >
                <stop offset="0%" stopColor="#6AC8F4" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#6AC8F4" stopOpacity="0" />
              </radialGradient>
              <linearGradient
                id="altekOrgHexGold"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop offset="0%" stopColor="#F5C15D" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#D98F28" stopOpacity="0.06" />
              </linearGradient>
              <linearGradient
                id="altekOrgHexSky"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop offset="0%" stopColor="#6AC8F4" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#1D3C5C" stopOpacity="0.04" />
              </linearGradient>
              <linearGradient
                id="altekOrgHexTeal"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop offset="0%" stopColor="#5EE0DF" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#0E8F9E" stopOpacity="0.03" />
              </linearGradient>
            </defs>
            <circle className="h3-orb" cx="950" cy="180" r="260" fill="url(#altekOrgGlowSky)" />
            <g className="h3-tile-a">
              <polygon
                points="940,126 992,156 992,216 940,246 888,216 888,156"
                fill="url(#altekOrgHexGold)"
                stroke="#F5C15D"
                strokeOpacity="0.34"
                strokeWidth="1.2"
              />
              <circle cx="940" cy="186" r="14" fill="#F5C15D" fillOpacity="0.22" />
              <circle cx="940" cy="186" r="5" fill="#F5C15D" fillOpacity="0.88" />
              <polygon
                points="824,62 876,92 876,152 824,182 772,152 772,92"
                fill="url(#altekOrgHexSky)"
                stroke="#8ED1F5"
                strokeOpacity="0.22"
                strokeWidth="1"
              />
              <polygon
                points="1056,62 1108,92 1108,152 1056,182 1004,152 1004,92"
                fill="url(#altekOrgHexTeal)"
                stroke="#5EE0DF"
                strokeOpacity="0.24"
                strokeWidth="1"
              />
            </g>
            <g className="h3-tile-b">
              <polygon
                points="824,194 876,224 876,284 824,314 772,284 772,224"
                fill="url(#altekOrgHexTeal)"
                stroke="#5EE0DF"
                strokeOpacity="0.2"
                strokeWidth="1"
              />
              <polygon
                points="1056,194 1108,224 1108,284 1056,314 1004,284 1004,224"
                fill="url(#altekOrgHexSky)"
                stroke="#6AC8F4"
                strokeOpacity="0.22"
                strokeWidth="1"
              />
              <polygon
                points="940,262 992,292 992,352 940,382 888,352 888,292"
                fill="url(#altekOrgHexSky)"
                stroke="#8ED1F5"
                strokeOpacity="0.16"
                strokeWidth="1"
              />
            </g>
            <g fill="#6AC8F4">
              <circle cx="660" cy="96" r="18" fillOpacity="0.08" />
              <circle cx="660" cy="96" r="5" fillOpacity="0.45" />
              <rect
                x="692"
                y="92"
                width="44"
                height="8"
                rx="4"
                fillOpacity="0.22"
              />
              <circle cx="1148" cy="186" r="26" fill="#5EE0DF" fillOpacity="0.09" />
            </g>
          </svg>
        </div>

        <div className="altek-container altek-hero-inner altek-page-hero-flex">
          <div className="altek-hero-copy">
            <div className="altek-hero-eyebrow">
              <i aria-hidden="true" />
              <span>KEPENGURUSAN · 2026</span>
            </div>
            <h1>
              Keanggotaan <span>ALTEK</span>
            </h1>
            <p>
              Daftar Badan Pengurus Harian, lima divisi, dan penanggung jawab
              praktikum ALTEK periode 2026.
            </p>
          </div>
          <div className="altek-page-hero-chip">
            <i aria-hidden="true" />
            <span>BPH + {data2026.divisions.length} Divisi Aktif</span>
          </div>
        </div>
      </section>

      <MembershipBrowser data2026={data2026} archive2025={archive2025} />
    </div>
  );
}
