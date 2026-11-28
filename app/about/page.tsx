import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  getAboutContent,
  getContactChannels,
  getMapInfo,
  getRoleResponsibilities,
} from "@/data/aboutPage";
import { getMembers2026 } from "@/data/members";
import { AltekBrandLogo } from "@/components/altek/AltekBrandLogo";
import { AltekIcon } from "@/components/altek/AltekIcon";
import { AboutInteractive } from "@/components/altek/AboutInteractive";

export const metadata: Metadata = {
  title: "Tentang ALTEK UNSOED — ALTEK UNSOED",
  description:
    "Organisasi, pengurus, peran, kanal kontak resmi, dan lokasi laboratorium ALTEK Teknik Elektro Universitas Jenderal Soedirman.",
};

export default function AboutPage() {
  const about = getAboutContent();
  const roles = getRoleResponsibilities();
  const channels = getContactChannels();
  const mapInfo = getMapInfo();
  const members2026 = getMembers2026();

  return (
    <div className="altek-about-page" id="page-about">
      {/* 1. Hero About Model 5 */}
      <section className="altek-hero altek-page-hero" data-model="about">
        <div className="altek-hero-photo-layer" aria-hidden="true">
          <Image
            src={about.hero.buildingImage}
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
              <radialGradient
                id="altekAboutBgOrb"
                cx="50%"
                cy="50%"
                r="50%"
              >
                <stop offset="0%" stopColor="#0E8F9E" stopOpacity="0.34" />
                <stop offset="100%" stopColor="#0E8F9E" stopOpacity="0" />
              </radialGradient>
              <linearGradient
                id="altekAboutPlateA"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop offset="0%" stopColor="#5EE0DF" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#1D3C5C" stopOpacity="0.04" />
              </linearGradient>
              <linearGradient
                id="altekAboutPlateB"
                x1="1"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#F5C15D" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#0D1B2C" stopOpacity="0" />
              </linearGradient>
              <pattern
                id="altekAboutDots"
                width="24"
                height="24"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1.25" fill="#9FD7F0" opacity="0.3" />
              </pattern>
            </defs>
            <circle cx="885" cy="270" r="295" fill="url(#altekAboutBgOrb)" />
            <g className="h5-drift">
              <path
                d="M724 58 C652 58, 608 106, 608 178 L608 454 L1068 454 L1148 374 L1148 58 Z"
                fill="url(#altekAboutPlateA)"
              />
              <path
                d="M776 34 C710 34, 672 72, 672 138 L672 486 L1096 486 L1172 410 L1172 34 Z"
                fill="url(#altekAboutPlateB)"
              />
            </g>
            <rect
              x="572"
              y="42"
              width="180"
              height="164"
              rx="22"
              fill="url(#altekAboutDots)"
              opacity="0.72"
            />
            <rect
              x="48"
              y="486"
              width="136"
              height="8"
              rx="4"
              fill="#F5C15D"
              fillOpacity="0.52"
            />
            <rect
              x="196"
              y="486"
              width="84"
              height="8"
              rx="4"
              fill="#5EE0DF"
              fillOpacity="0.38"
            />
            <rect
              x="292"
              y="486"
              width="42"
              height="8"
              rx="4"
              fill="#6AC8F4"
              fillOpacity="0.3"
            />
            <circle className="h5-pulse" cx="628" cy="430" r="9" fill="#5EE0DF" fillOpacity="0.32" />
            <circle cx="628" cy="430" r="4" fill="#5EE0DF" />
            <polygon
              points="1096,492 1168,420 1168,450 1126,492"
              fill="#F5C15D"
              fillOpacity="0.46"
            />
          </svg>
        </div>

        <div className="altek-container altek-hero-inner altek-about-hero-split">
          <div className="altek-hero-copy">
            <div className="altek-hero-eyebrow">
              <i aria-hidden="true" />
              <span>{about.hero.eyebrow}</span>
            </div>
            <h1>
              {about.hero.titlePrefix}
              <span>{about.hero.titleHighlight}</span>
              {about.hero.titleSuffix}
            </h1>
            <p>{about.hero.description}</p>
          </div>

          <div className="altek-about-sculpted-stage">
            <svg
              className="altek-about-sculpted-svg"
              viewBox="0 0 500 356"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label={about.hero.buildingAlt}
            >
              <defs>
                <clipPath id="altekAboutPortalClip">
                  <path d="M126 24 L444 24 Q464 24 464 44 L464 256 L396 324 L42 324 Q24 324 24 306 L24 126 C24 68 68 24 126 24 Z" />
                </clipPath>
                <linearGradient
                  id="altekAboutBackPlate"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#5EE0DF" stopOpacity="0.34" />
                  <stop offset="100%" stopColor="#1D3C5C" stopOpacity="0.16" />
                </linearGradient>
                <linearGradient
                  id="altekAboutGoldEdge"
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#5EE0DF" stopOpacity="0.72" />
                  <stop offset="100%" stopColor="#F5C15D" stopOpacity="0.82" />
                </linearGradient>
                <linearGradient
                  id="altekAboutPhotoFade"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="52%" stopColor="#0B1624" stopOpacity="0" />
                  <stop offset="100%" stopColor="#0B1624" stopOpacity="0.8" />
                </linearGradient>
              </defs>
              <path
                d="M140 10 L460 10 Q482 10 482 32 L482 248 L412 318 L58 318 L58 112 C58 54 96 10 140 10 Z"
                fill="url(#altekAboutBackPlate)"
              />
              <polygon
                points="410,338 480,268 480,294 436,338"
                fill="#F5C15D"
                fillOpacity="0.82"
              />
              <circle cx="48" cy="48" r="22" fill="#5EE0DF" fillOpacity="0.18" />
              <circle cx="48" cy="48" r="8" fill="#5EE0DF" fillOpacity="0.85" />
              <g clipPath="url(#altekAboutPortalClip)">
                <image
                  href={about.hero.buildingImage}
                  x="-112"
                  y="-16"
                  width="612"
                  height="458"
                  preserveAspectRatio="xMidYMid slice"
                />
                <rect
                  x="0"
                  y="0"
                  width="500"
                  height="356"
                  fill="url(#altekAboutPhotoFade)"
                />
              </g>
              <path
                d="M126 24 L444 24 Q464 24 464 44 L464 256 L396 324 L42 324 Q24 324 24 306 L24 126 C24 68 68 24 126 24 Z"
                fill="none"
                stroke="url(#altekAboutGoldEdge)"
                strokeWidth="2.2"
              />
              <g>
                <text
                  x="44"
                  y="286"
                  fill="#FFFFFF"
                  fontSize="14"
                  fontWeight="800"
                  fontFamily="system-ui, sans-serif"
                >
                  {about.hero.buildingTitle}
                </text>
                <text
                  x="44"
                  y="305"
                  fill="#C4D9EE"
                  fontSize="11.5"
                  fontWeight="500"
                  fontFamily="system-ui, sans-serif"
                >
                  {about.hero.buildingSubtitle}
                </text>
                <rect
                  x="358"
                  y="38"
                  width="88"
                  height="26"
                  rx="13"
                  fill="#0B1624"
                  fillOpacity="0.78"
                  stroke="#F5C15D"
                  strokeOpacity="0.58"
                  strokeWidth="1.2"
                />
                <text
                  x="402"
                  y="55"
                  textAnchor="middle"
                  fill="#FFE19C"
                  fontSize="10.5"
                  fontWeight="800"
                  letterSpacing="1"
                  fontFamily="system-ui, sans-serif"
                >
                  {about.hero.estBadge}
                </text>
              </g>
            </svg>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="altek-container altek-page-content">
        {/* 2. Siapa Kami */}
        <section className="altek-about-intro">
          <div>
            <div className="altek-kicker">{about.intro.kicker}</div>
            <h2>{about.intro.heading}</h2>
            {about.intro.paragraphs.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
            <div
              className="altek-about-facts"
              aria-label="Informasi singkat ALTEK"
            >
              <span>
                <strong>{about.intro.foundedYear}</strong>
                <small>Tahun berdiri</small>
              </span>
              <span>
                <strong>{members2026.divisions.length}</strong>
                <small>Divisi</small>
              </span>
              <span>
                <strong>{members2026.year}</strong>
                <small>Periode aktif</small>
              </span>
            </div>
            <Link
              className="altek-about-intro-action"
              href={about.intro.ctaHref}
            >
              <span>{about.intro.ctaLabel}</span>
              <AltekIcon name="arrow-right" variant="mini" />
            </Link>
          </div>

          <div
            className="altek-about-visual"
            role="img"
            aria-label="Logo ALTEK UNSOED"
          >
            <AltekBrandLogo size={172} />
          </div>
        </section>

        {/* 3 & 4. Profil, Sejarah, & Peran + Tugas Pengurus (Interactive Client Component) */}
        <AboutInteractive
          explore={about.explore}
          roles={roles}
          activeYear={members2026.year}
        />

        {/* 5. Kontak & Peta Lokasi (#kontak) */}
        <section
          id="kontak"
          className="altek-about-section altek-about-connect"
          aria-labelledby="socialHeading"
        >
          <div className="altek-section-head">
            <div>
              <div className="altek-kicker">TERHUBUNG DENGAN ALTEK</div>
              <h2 id="socialHeading">Kanal Informasi &amp; Kontak</h2>
              <p className="altek-section-desc">
                Hubungi ALTEK lewat kanal resmi atau kunjungi laboratorium di
                Kampus Blater.
              </p>
            </div>
          </div>

          <div className="altek-social-grid">
            {channels.map((channel) => (
              <a
                key={channel.id}
                className="altek-social-card reveal"
                href={channel.href}
                target={channel.external ? "_blank" : undefined}
                rel={channel.external ? "noopener noreferrer" : undefined}
                aria-label={
                  channel.external
                    ? `Buka ${channel.platform} ALTEK UNSOED`
                    : `Kirim email kepada ALTEK UNSOED`
                }
              >
                <span
                  className={`altek-social-icon tone-${channel.tone}`}
                  aria-hidden="true"
                >
                  <AltekIcon name={channel.icon} variant="icon" />
                </span>
                <span className="altek-social-copy">
                  <small>{channel.platform}</small>
                  <strong>{channel.value}</strong>
                  <em>{channel.description}</em>
                </span>
                <span className="altek-social-arrow" aria-hidden="true">
                  <AltekIcon name="external-link" variant="mini" />
                </span>
              </a>
            ))}
          </div>

          <div className="altek-contact-extras" id="altekContactExtras">
            {/* Peta Lokasi Tunggal (Hanya iframe Google Maps, tanpa tombol ganda) */}
            <div className="altek-contact-panel">
              <div className="altek-contact-panel-head">
                <span className="altek-kicker">{mapInfo.kicker}</span>
                <h3>{mapInfo.title}</h3>
                <p>{mapInfo.description}</p>
              </div>

              <div className="altek-map-address">
                <strong>{mapInfo.campusName}</strong>
                <span>{mapInfo.address}</span>
              </div>

              <div className="altek-map-frame">
                <iframe
                  title={mapInfo.iframeTitle}
                  src={mapInfo.embedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
