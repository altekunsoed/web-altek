import { Suspense } from "react";
import type { Metadata } from "next";
import Image from "next/image";
import {
  getAllCourseModules,
  getCourses,
  getCurrentSemester,
  getPolicies,
} from "@/data/courses";
import { getTutorials } from "@/data/tutorials";
import {
  PraktikumTabs,
  type PraktikumTabKey,
} from "@/components/altek/PraktikumTabs";

export const metadata: Metadata = {
  title: "Informasi Praktikum",
  description:
    "Praktikum semester aktif, mata kuliah praktikum, modul, aturan, dan tutorial dalam satu tempat.",
};

interface PraktikumPageProps {
  searchParams: Promise<{ tab?: string }>;
}

const VALID_TABS: readonly PraktikumTabKey[] = [
  "semester-ini",
  "daftar",
  "modul",
  "tutorial",
];

function normalizeTab(tab?: string): PraktikumTabKey {
  if (tab && (VALID_TABS as readonly string[]).includes(tab)) {
    return tab as PraktikumTabKey;
  }
  return "semester-ini";
}

export default async function PraktikumPage({
  searchParams,
}: PraktikumPageProps) {
  const resolvedParams = await searchParams;
  const initialTab = normalizeTab(resolvedParams.tab);

  const courses = getCourses();
  const currentSemester = getCurrentSemester();
  const allModules = getAllCourseModules();
  const policies = getPolicies();
  const tutorials = getTutorials();

  return (
    <div className="altek-praktikum-page" id="page-praktikum">
      <section className="altek-hero altek-page-hero" data-model="praktikum">
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
                id="altekPrakWedge"
                x1="0"
                y1="0"
                x2="1"
                y2="1"
              >
                <stop offset="0%" stopColor="#0E8F9E" stopOpacity="0.28" />
                <stop offset="100%" stopColor="#0B1624" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="altekPrakWaveA"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#5EE0DF" stopOpacity="0.24" />
                <stop offset="100%" stopColor="#5EE0DF" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="altekPrakWaveB"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#F5C15D" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#F5C15D" stopOpacity="0" />
              </linearGradient>
              <pattern
                id="altekPrakDots"
                width="24"
                height="24"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="1.1" fill="#8CD7F4" opacity="0.24" />
              </pattern>
            </defs>
            <polygon
              points="688,0 742,0 648,540 592,540"
              fill="url(#altekPrakWedge)"
            />
            <polygon
              points="706,0 714,0 620,540 612,540"
              fill="#5EE0DF"
              fillOpacity="0.26"
            />
            <rect
              x="40"
              y="340"
              width="420"
              height="160"
              fill="url(#altekPrakDots)"
              opacity="0.55"
            />
            <g className="h2-wave">
              <path
                d="M360 456 C460 398, 560 492, 670 436 S880 388, 995 442 S1140 468, 1240 426 L1240 540 L360 540 Z"
                fill="url(#altekPrakWaveA)"
              />
            </g>
            <g className="h2-wave-b">
              <path
                d="M430 476 C530 436, 625 504, 735 462 S940 424, 1060 470 S1180 494, 1250 458 L1250 540 L430 540 Z"
                fill="url(#altekPrakWaveB)"
              />
            </g>
            <g transform="translate(1042 28)">
              <rect className="h2-bar" x="0" y="12" width="10" height="24" rx="5" fill="#5EE0DF" />
              <rect className="h2-bar-2" x="18" y="4" width="10" height="32" rx="5" fill="#6AC8F4" />
              <rect
                className="h2-bar-3"
                x="36"
                y="16"
                width="10"
                height="20"
                rx="5"
                fill="#F5C15D"
              />
              <rect className="h2-bar" x="54" y="8" width="10" height="28" rx="5" fill="#5EE0DF" />
              <rect className="h2-bar-2" x="72" y="0" width="10" height="36" rx="5" fill="#8CD7F4" />
              <rect
                className="h2-bar-3"
                x="90"
                y="14"
                width="10"
                height="22"
                rx="5"
                fill="#5EE0DF"
              />
            </g>
            <rect
              x="656"
              y="464"
              width="46"
              height="8"
              rx="4"
              fill="#5EE0DF"
              fillOpacity="0.5"
            />
            <circle cx="716" cy="468" r="4" fill="#F5C15D" fillOpacity="0.8" />
          </svg>
        </div>

        <div className="altek-container altek-hero-inner altek-page-hero-flex">
          <div className="altek-hero-copy">
            <div className="altek-hero-eyebrow">
              <i aria-hidden="true" />
              <span>INFORMASI PRAKTIKUM · SEMESTER 1–5</span>
            </div>
            <h1>
              Informasi <span>Praktikum</span>
            </h1>
            <p>
              Praktikum semester aktif, mata kuliah praktikum, modul, aturan,
              dan tutorial dalam satu tempat.
            </p>
          </div>
          <div className="altek-page-hero-chip">
            <i aria-hidden="true" />
            <span>{courses.length} Mata Kuliah · Pedoman 2026</span>
          </div>
        </div>
      </section>

      <section className="altek-container altek-page-content">
        <Suspense
          fallback={
            <div className="altek-info-note">Memuat konten praktikum...</div>
          }
        >
          <PraktikumTabs
            initialTab={initialTab}
            currentSemester={currentSemester}
            courses={courses}
            allModules={allModules}
            policies={policies}
            tutorials={tutorials}
          />
        </Suspense>
      </section>
    </div>
  );
}
