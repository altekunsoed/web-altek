import Image from "next/image";
import Link from "next/link";
import { getInformasiTerbaru } from "@/data/informasi";
import {
  getAllCourseModules,
  getCourses,
  getCurrentSemester,
} from "@/data/courses";
import { getMembers2026 } from "@/data/members";
import { getAboutContent } from "@/data/aboutPage";
import { AltekBrandLogo } from "@/components/altek/AltekBrandLogo";
import { AltekIcon } from "@/components/altek/AltekIcon";
import { CourseCard } from "@/components/altek/CourseCard";
import { HomeInfoSection } from "@/components/altek/HomeInfoSection";

const QUICK_ACCESS_ITEMS = [
  {
    href: "/praktikum?tab=daftar",
    icon: "praktikum",
    tone: "tone-blue",
    title: "Daftar Praktikum",
    desc: "Jelajahi mata kuliah praktikum.",
  },
  {
    href: "/praktikum?tab=modul",
    icon: "book",
    tone: "tone-sky",
    title: "Modul & Aturan",
    desc: "Akses dokumen praktikum.",
  },
  {
    href: "/praktikum?tab=tutorial",
    icon: "play",
    tone: "tone-cyan",
    title: "Tutorial",
    desc: "Panduan instalasi dan penggunaan.",
  },
  {
    href: "/praktikum?tab=semester-ini",
    icon: "calendar",
    tone: "tone-amber",
    title: "Semester Ini",
    desc: "Lihat praktikum semester aktif.",
  },
] as const;

export default function HomePage() {
  const latestInfo = getInformasiTerbaru(3);
  const courses = getCourses();
  const currentSemester = getCurrentSemester();
  const allModules = getAllCourseModules();
  const moduleCountByCourse = new Map<string, number>();
  for (const mod of allModules) {
    moduleCountByCourse.set(
      mod.courseSlug,
      (moduleCountByCourse.get(mod.courseSlug) ?? 0) + 1,
    );
  }
  const members2026 = getMembers2026();
  const aboutContent = getAboutContent();

  return (
    <div className="altek-home-page">
      {/* 1. Hero Bersih */}
      <section className="altek-hero" data-model="home-clean">
        <div className="altek-hero-photo-layer" aria-hidden="true">
          <Image
            src="/assets/custom/gedung-lab-ft.jpg"
            alt=""
            fill
            sizes="100vw"
            priority
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
                id="altekHomeCurveSweep"
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
                id="altekHomeGoldRibbon"
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
                id="altekHomeTealRibbon"
                x1="0"
                y1="1"
                x2="1"
                y2="0"
              >
                <stop offset="0%" stopColor="#5EE0DF" stopOpacity="0.22" />
                <stop offset="100%" stopColor="#5EE0DF" stopOpacity="0" />
              </linearGradient>
              <pattern
                id="altekHomeDots"
                width="22"
                height="22"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1.2" fill="#FFE19C" opacity="0.28" />
              </pattern>
            </defs>
            <path
              d="M0 0 L670 0 C595 155, 610 360, 725 540 L0 540 Z"
              fill="url(#altekHomeCurveSweep)"
            />
            <g className="h4-drift">
              <path
                d="M648 0 L688 0 C618 158, 636 356, 756 540 L712 540 C596 356, 580 158, 648 0 Z"
                fill="url(#altekHomeGoldRibbon)"
              />
              <path
                d="M694 0 L716 0 C654 156, 670 352, 784 540 L764 540 C652 352, 636 156, 694 0 Z"
                fill="url(#altekHomeTealRibbon)"
              />
            </g>
            <rect
              x="34"
              y="424"
              width="240"
              height="84"
              rx="12"
              fill="url(#altekHomeDots)"
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

        <div className="altek-container altek-hero-inner altek-home-open-grid">
          <div className="altek-hero-copy">
            <div className="altek-hero-eyebrow">
              <i aria-hidden="true" />
              <span>Aliansi Laboratorium Teknik Elektro · UNSOED</span>
            </div>
            <h1>
              Informasi Praktikum <span>&amp;</span> Organisasi.
            </h1>
            <p>
              Akses modul resmi, daftar praktikum, aturan pelaksanaan, dan
              pengumuman terbaru Teknik Elektro UNSOED.
            </p>
            <div className="altek-hero-actions">
              <Link className="altek-btn altek-btn-primary" href="/praktikum">
                <span>Lihat Praktikum</span>
                <AltekIcon name="arrow-right" variant="mini" />
              </Link>
              <Link className="altek-btn altek-btn-ghost" href="/about">
                <span>Tentang ALTEK</span>
              </Link>
            </div>
            <div
              className="altek-hero-meta-strip"
              aria-label="Ringkasan informasi ALTEK"
            >
              <div className="altek-hero-stat">
                <strong>{courses.length} Modul</strong>
                <small>Praktikum PDF</small>
              </div>
              <div className="altek-hero-stat">
                <strong>{members2026.divisions.length} Divisi</strong>
                <small>Aktif 2026</small>
              </div>
              <div className="altek-hero-stat">
                <strong>Est. {aboutContent.intro.foundedYear}</strong>
                <small>Teknik Elektro</small>
              </div>
            </div>
          </div>

          <div
            className="altek-hero-right-dock"
            aria-label="Identitas Gedung Laboratorium FT UNSOED"
          >
            <div className="altek-hero-identity-pill">
              <AltekBrandLogo size={40} />
              <div>
                <strong>ALTEK UNSOED</strong>
                <small>Gedung Lab FT · Kampus Blater</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Praktikum Semester Ini */}
      <section className="altek-home-section">
        <div className="altek-container">
          <div className="altek-section-head">
            <div>
              <div className="altek-kicker">SEMESTER AKTIF</div>
              <h2>Praktikum Semester Ini</h2>
              <p className="altek-section-desc">
                {currentSemester.period} · {currentSemester.courses.length}{" "}
                praktikum berjalan semester ini.
              </p>
            </div>
            <Link
              className="altek-text-link"
              href="/praktikum?tab=semester-ini"
            >
              <span>
                Lihat semua {currentSemester.courses.length} praktikum
              </span>
              <AltekIcon name="arrow-right" variant="mini" />
            </Link>
          </div>
          <div className="altek-course-grid">
            {currentSemester.courses.slice(0, 3).map((course) => (
              <CourseCard
                key={course.slug}
                course={course}
                moduleCount={moduleCountByCourse.get(course.slug) ?? 0}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Informasi Terbaru (3 item terbaru + InfoDetailModal) */}
      <section className="altek-home-section altek-home-section--compact">
        <div className="altek-container">
          <div className="altek-section-head">
            <div>
              <div className="altek-kicker">INFORMASI TERBARU</div>
              <h2>Informasi Terbaru</h2>
              <p className="altek-section-desc">
                Pengumuman praktikum dan agenda kegiatan ALTEK.
              </p>
            </div>
            <Link className="altek-text-link" href="/informasi">
              <span>Semua informasi</span>
              <AltekIcon name="arrow-right" variant="mini" />
            </Link>
          </div>
          <HomeInfoSection items={latestInfo} />
        </div>
      </section>

      {/* 4. Akses Cepat */}
      <section className="altek-home-section altek-home-section--quick">
        <div className="altek-container">
          <div className="altek-section-head">
            <div>
              <div className="altek-kicker">AKSES CEPAT</div>
              <h2>Akses Praktikum</h2>
              <p className="altek-section-desc">
                Unduh modul, cek semester aktif, dan lihat panduan praktikum.
              </p>
            </div>
          </div>
          <div className="altek-quick-grid">
            {QUICK_ACCESS_ITEMS.map((item) => (
              <Link
                key={item.href}
                className="altek-quick-card"
                href={item.href}
              >
                <div
                  className={`quick-icon ${item.tone}`}
                  aria-hidden="true"
                >
                  <AltekIcon name={item.icon} variant="icon" />
                </div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Strip Profil */}
      <section className="altek-home-section altek-home-section--about">
        <div className="altek-container">
          <div className="altek-about-strip">
            <div>
              <div className="altek-kicker">About ALTEK</div>
              <h2>Mengenal ALTEK UNSOED</h2>
              <p>
                ALTEK mengelola koordinasi asisten dan pelaksanaan praktikum di
                enam laboratorium Teknik Elektro UNSOED.
              </p>
            </div>
            <Link className="altek-btn altek-about-strip-btn" href="/about">
              <span>Profil ALTEK</span>
              <AltekIcon name="arrow-right" variant="mini" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
