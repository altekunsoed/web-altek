export type TutorialCourseKey =
  | "tenaga-listrik"
  | "sistem-kendali"
  | "otomasi-industri"
  | "instrumentasi"
  | "sistem-mikroprosesor"
  | "pemrograman"
  | "elektronika";

export interface TutorialVideo {
  id: string;
  title: string;
  courseKey: TutorialCourseKey;
  courseName: string;
  software: string;
  unitNote: string;
  duration: string;
  year: number;
  isNew: boolean;
  desc: string;
}

export interface TutorialCourseFilter {
  key: "all" | TutorialCourseKey;
  label: string;
}

export const TUTORIAL_COURSE_FILTERS: TutorialCourseFilter[] = [
  { key: "all", label: "Semua" },
  { key: "tenaga-listrik", label: "Tenaga Listrik" },
  { key: "sistem-kendali", label: "Sistem Kendali" },
  { key: "otomasi-industri", label: "Otomasi Industri" },
  { key: "instrumentasi", label: "Instrumentasi" },
  { key: "sistem-mikroprosesor", label: "Sistem Mikroprosesor" },
  { key: "pemrograman", label: "Pemrograman" },
  { key: "elektronika", label: "Elektronika" },
];

export const ALTEK_YT_TUTORIALS: TutorialVideo[] = [
  // 1. Praktikum Tenaga Listrik (8 video — ETAP & PSIM)
  {
    id: "r-wQIPaOB6w",
    title: "Tutorial Install ETAP 12.6.0",
    courseKey: "tenaga-listrik",
    courseName: "Tenaga Listrik",
    software: "ETAP 12.6.0",
    unitNote: "Unit 5–8 · Analisa Aliran Daya & Short Circuit",
    duration: "05:03",
    year: 2025,
    isNew: true,
    desc: "Langkah instalasi perangkat lunak ETAP 12.6.0 untuk simulasi analisa aliran daya dan hubung singkat pada Praktikum Tenaga Listrik.",
  },
  {
    id: "LFb7GWNEkiA",
    title: "Tutorial Instalasi PSIM",
    courseKey: "tenaga-listrik",
    courseName: "Tenaga Listrik",
    software: "PSIM",
    unitNote: "Unit 1–4 & 9 · Penyearah & Inverter",
    duration: "04:09",
    year: 2024,
    isNew: true,
    desc: "Panduan mengunduh dan memasang software simulasi elektronika daya PSIM beserta tautan file pada deskripsi video.",
  },
  {
    id: "P_jtzu7Y0Tg",
    title: "Tutorial Dasar Menggunakan PSIM",
    courseKey: "tenaga-listrik",
    courseName: "Tenaga Listrik",
    software: "PSIM",
    unitNote: "Unit 1–4 & 9 · Elektronika Daya",
    duration: "14:02",
    year: 2024,
    isNew: true,
    desc: "Pengenalan antarmuka PSIM, cara merangkai komponen penyearah/inverter, mengatur probe, dan membaca grafik gelombang.",
  },
  {
    id: "lWoO63rtemQ",
    title: "Tutorial Project Praktikum Tenaga Listrik",
    courseKey: "tenaga-listrik",
    courseName: "Tenaga Listrik",
    software: "ETAP & PSIM",
    unitNote: "Panduan Project Akhir Praktikum TL",
    duration: "34:37",
    year: 2021,
    isNew: false,
    desc: "Pembahasan lengkap penyusunan rangkaian simulasi dan langkah pengerjaan project Praktikum Tenaga Listrik.",
  },
  {
    id: "gFu0FZWnk4E",
    title: "Tutorial Teknik Tenaga Listrik (ETAP) #1",
    courseKey: "tenaga-listrik",
    courseName: "Tenaga Listrik",
    software: "ETAP",
    unitNote: "Unit 5 · Pengenalan & Single Line Diagram",
    duration: "05:54",
    year: 2018,
    isNew: false,
    desc: "Bagian 1 simulasi sistem tenaga listrik menggunakan ETAP: persiapan proyek dan penyusunan komponen dasar.",
  },
  {
    id: "fonLXEAttQw",
    title: "Tutorial Teknik Tenaga Listrik (ETAP) #2",
    courseKey: "tenaga-listrik",
    courseName: "Tenaga Listrik",
    software: "ETAP",
    unitNote: "Unit 6 · Analisa Aliran Daya Lanjutan",
    duration: "09:02",
    year: 2018,
    isNew: false,
    desc: "Bagian 2 simulasi ETAP: konfigurasi parameter komponen dan pengamatan aliran daya pada jaringan.",
  },
  {
    id: "J_dn8V4bYus",
    title: "Tutorial Teknik Tenaga Listrik (ETAP) #3",
    courseKey: "tenaga-listrik",
    courseName: "Tenaga Listrik",
    software: "ETAP",
    unitNote: "Unit 7–8 · Analisa Aliran Daya & Gangguan",
    duration: "11:07",
    year: 2018,
    isNew: false,
    desc: "Bagian 3 simulasi ETAP: pengujian skenario jaringan dan pembacaan hasil analisa sistem tenaga.",
  },
  {
    id: "od2W49jY-T8",
    title: "Tutorial Dasar Teknik Elektro (ETAP) #4",
    courseKey: "tenaga-listrik",
    courseName: "Tenaga Listrik",
    software: "ETAP",
    unitNote: "Dasar Pemodelan ETAP",
    duration: "06:22",
    year: 2018,
    isNew: false,
    desc: "Pengenalan dasar fitur utama ETAP sebagai bekal awal sebelum menjalankan simulasi modul Tenaga Listrik.",
  },

  // 2. Praktikum Pemrograman (2 video — C/C++ & Python)
  {
    id: "97nsEtO3oXY",
    title: "Tutorial Download & Install C dan C++ (VS Code, CodeBlocks, Dev-C++)",
    courseKey: "pemrograman",
    courseName: "Pemrograman",
    software: "C / C++ IDE",
    unitNote: "Unit 1–3 · Pemrograman Bahasa C",
    duration: "19:19",
    year: 2024,
    isNew: true,
    desc: "Panduan lengkap mengunduh dan mengatur compiler C/C++ di Visual Studio Code, Code::Blocks, dan Dev-C++ sesuai Modul Pemrograman.",
  },
  {
    id: "6jLZmrmZP8w",
    title: "Tutorial Download dan Instalasi Python",
    courseKey: "pemrograman",
    courseName: "Pemrograman",
    software: "Python",
    unitNote: "Unit 2+ · Pemrograman Python",
    duration: "08:22",
    year: 2024,
    isNew: true,
    desc: "Cara mengunduh dan menginstal Python beserta pengaturan PATH agar siap dipakai untuk percobaan Bahasa Python di Modul Pemrograman.",
  },

  // 3. Praktikum Otomasi Industri (4 video — CX-Programmer Omron)
  {
    id: "-7WiffTyY8U",
    title: "Tutorial CX-Programmer #1 (Direct Online)",
    courseKey: "otomasi-industri",
    courseName: "Otomasi Industri",
    software: "CX-Programmer",
    unitNote: "Unit 2 · Ladder Diagram PLC Omron CP1E",
    duration: "01:13",
    year: 2018,
    isNew: false,
    desc: "Dasar pembuatan rangkaian pengunci Direct Online (DOL) pada diagram ladder PLC Omron menggunakan CX-Programmer.",
  },
  {
    id: "-V3N4vODxOw",
    title: "Tutorial CX-Programmer #2 (Timer)",
    courseKey: "otomasi-industri",
    courseName: "Otomasi Industri",
    software: "CX-Programmer",
    unitNote: "Unit 2 · Instruksi TIM & Lampu Lalu Lintas",
    duration: "03:03",
    year: 2018,
    isNew: false,
    desc: "Penggunaan instruksi Timer (TIM) di CX-Programmer untuk kendali waktu tunda, langsung dipakai pada studi kasus lampu lalu lintas.",
  },
  {
    id: "ceRJ5huCy64",
    title: "Tutorial CX-Programmer #3 (Counter)",
    courseKey: "otomasi-industri",
    courseName: "Otomasi Industri",
    software: "CX-Programmer",
    unitNote: "Unit 2 · Instruksi Counter PLC Omron",
    duration: "02:03",
    year: 2018,
    isNew: false,
    desc: "Cara menyusun dan mensimulasikan instruksi pencacah (Counter) pada diagram ladder CX-Programmer.",
  },
  {
    id: "KGoXhBYlJWk",
    title: "Tutorial CX-Programmer #4 (Compare)",
    courseKey: "otomasi-industri",
    courseName: "Otomasi Industri",
    software: "CX-Programmer",
    unitNote: "Unit 2 · Instruksi Pembanding PLC Omron",
    duration: "03:12",
    year: 2018,
    isNew: false,
    desc: "Implementasi instruksi pembanding (Compare) pada PLC Omron untuk logika kendali berurutan di CX-Programmer.",
  },

  // 4. Praktikum Sistem Kendali (5 video — MATLAB Simulink & Circuit Maker)
  {
    id: "1d89Lt6xkMo",
    title: "Tutorial Sistem Kontrol (MATLAB Simulink) #5",
    courseKey: "sistem-kendali",
    courseName: "Sistem Kendali",
    software: "MATLAB Simulink",
    unitNote: "Eksperimen 5 · Simulasi Kontrol P & PID",
    duration: "05:09",
    year: 2018,
    isNew: false,
    desc: "Panduan menyusun blok diagram sistem kendali di MATLAB Simulink dan mengamati respon keluaran melalui Scope.",
  },
  {
    id: "VQ2PDE7TyBA",
    title: "Tutorial Dasar Teknik Elektro (MATLAB) #1",
    courseKey: "sistem-kendali",
    courseName: "Sistem Kendali",
    software: "MATLAB",
    unitNote: "Eksperimen 5 · Pengenalan MATLAB & M-File",
    duration: "05:02",
    year: 2018,
    isNew: false,
    desc: "Pengenalan dasar lingkungan kerja MATLAB dan penulisan skrip dasar pendukung simulasi kontrol proses.",
  },
  {
    id: "DN_IKBEMxm4",
    title: "Tutorial Dasar Teknik Elektro (MATLAB) #2",
    courseKey: "sistem-kendali",
    courseName: "Sistem Kendali",
    software: "MATLAB",
    unitNote: "Eksperimen 5 · Operasi & Plotting MATLAB",
    duration: "04:05",
    year: 2018,
    isNew: false,
    desc: "Lanjutan dasar penggunaan MATLAB untuk pengolahan data dan visualisasi grafik respon sistem.",
  },
  {
    id: "AP08NEjPXmI",
    title: "Tutorial Sistem Kontrol (Circuit Maker) #3",
    courseKey: "sistem-kendali",
    courseName: "Sistem Kendali",
    software: "Circuit Maker",
    unitNote: "Eksperimen 3 · Ragam Kontrol Dasar P, I, D",
    duration: "01:30",
    year: 2018,
    isNew: false,
    desc: "Simulasi rangkaian pengendali Op-Amp proporsional, integral, dan diferensial menggunakan Circuit Maker sesuai Eksperimen 3.",
  },
  {
    id: "qmpRDg4esrs",
    title: "Tutorial Sistem Kontrol (Circuit Maker) #4",
    courseKey: "sistem-kendali",
    courseName: "Sistem Kendali",
    software: "Circuit Maker",
    unitNote: "Eksperimen 4 · Kontrol PI, PD, dan PID",
    duration: "07:30",
    year: 2018,
    isNew: false,
    desc: "Langkah simulasi kontrol gabungan PI, PD, dan PID pada software Circuit Maker sesuai Eksperimen 4 Modul Sistem Kendali.",
  },

  // 5. Praktikum Sistem Mikroprosesor dan Arsitektur Komputer (3 video — MIDE-51 & ProgISP)
  {
    id: "h70t0UXpkyY",
    title: "Pelatihan Praktikum Sistem Mikroprosesor",
    courseKey: "sistem-mikroprosesor",
    courseName: "Sistem Mikroprosesor",
    software: "MIDE-51 & ProgISP",
    unitNote: "Pengantar Praktikum & Downloader 8051",
    duration: "03:17",
    year: 2020,
    isNew: false,
    desc: "Ringkasan pelatihan alur Praktikum Sistem Mikroprosesor dan Arsitektur Komputer dari kompilasi kode hingga unggah ke IC.",
  },
  {
    id: "b0WPPtHF_L0",
    title: "Tutorial Sistem Mikroprosesor & Arsikom (MIDE51 & ProgISP) #1",
    courseKey: "sistem-mikroprosesor",
    courseName: "Sistem Mikroprosesor",
    software: "MIDE-51 & ProgISP",
    unitNote: "Persiapan Aplikasi & Kompilasi Assembly (.hex)",
    duration: "02:33",
    year: 2018,
    isNew: false,
    desc: "Bagian 1: penulisan kode bahasa assembly 8051 di MIDE-51 dan pembentukan file hexa (.hex) untuk downloader USB ASP.",
  },
  {
    id: "54kmuwEz3Ng",
    title: "Tutorial Sistem Mikroprosesor & Arsikom (MIDE & ProgISP) #2",
    courseKey: "sistem-mikroprosesor",
    courseName: "Sistem Mikroprosesor",
    software: "MIDE-51 & ProgISP",
    unitNote: "Menuliskan File Hexa ke IC via ProgISP",
    duration: "02:43",
    year: 2018,
    isNew: false,
    desc: "Bagian 2: tata cara mengunggah file .hex ke mikrokontroler menggunakan perangkat lunak ProgISP.",
  },

  // 6. Praktikum Instrumentasi (3 video — Arduino IDE & Proteus)
  {
    id: "pzyjky2Bn90",
    title: "Tutorial Proteus + Arduino IDE #1 (Lampu Kedip)",
    courseKey: "instrumentasi",
    courseName: "Instrumentasi",
    software: "Arduino IDE & Proteus",
    unitNote: "Unit 1 · Pengenalan Arduino & Digital I/O",
    duration: "03:59",
    year: 2018,
    isNew: false,
    desc: "Simulasi dasar Arduino UNO di Proteus dan pemrograman output digital LED menggunakan Arduino IDE.",
  },
  {
    id: "rOotQqAc0Qk",
    title: "Tutorial Proteus + Arduino IDE #2 (Sensor Cahaya / LDR)",
    courseKey: "instrumentasi",
    courseName: "Instrumentasi",
    software: "Arduino IDE & Proteus",
    unitNote: "Unit 5 & 10 · Akuisisi Sensor Optik LDR",
    duration: "09:25",
    year: 2018,
    isNew: false,
    desc: "Simulasi pembacaan sensor cahaya LDR berbasis Arduino IDE di Proteus yang relevan dengan Unit 5 dan Unit 10 Modul Instrumentasi.",
  },
  {
    id: "f6cvoGvjqNA",
    title: "Tutorial Dasar Teknik Elektro (Proteus) #3",
    courseKey: "instrumentasi",
    courseName: "Instrumentasi",
    software: "Proteus",
    unitNote: "Dasar Simulasi Rangkaian Proteus",
    duration: "02:29",
    year: 2018,
    isNew: false,
    desc: "Pengenalan dasar menggambar skematik dan menjalankan simulasi rangkaian elektronik di Proteus.",
  },

  // 7. Praktikum Elektronika (1 video — KL-200)
  {
    id: "n6Eedcl2eNY",
    title: "Tutorial Elektronika #3 (3-2-1 Percobaan untuk Zi)",
    courseKey: "elektronika",
    courseName: "Elektronika",
    software: "KL-200 & Osiloskop",
    unitNote: "Bab 3 · Pengukuran Impedansi Input (Zi)",
    duration: "01:27",
    year: 2018,
    isNew: false,
    desc: "Demonstrasi penyusunan jumper dan langkah pengukuran impedansi input (Zi) pada percobaan 3-2-1 Modul Praktikum Elektronika.",
  },
];

export function resolveCourseKeyFromText(text: string): TutorialCourseKey | "" {
  const s = String(text || "").toLowerCase();
  if (s.includes("tenaga listrik")) return "tenaga-listrik";
  if (s.includes("pemrograman")) return "pemrograman";
  if (s.includes("otomasi")) return "otomasi-industri";
  if (s.includes("kendali") || s.includes("kontrol")) return "sistem-kendali";
  if (
    s.includes("mikroprosesor") ||
    s.includes("arsikom") ||
    s.includes("arsitektur")
  ) {
    return "sistem-mikroprosesor";
  }
  if (s.includes("instrumentasi")) return "instrumentasi";
  if (s.includes("elektronika")) return "elektronika";
  return "";
}

export function getYoutubeThumbnailUrl(id: string): string {
  return `https://i.ytimg.com/vi/${encodeURIComponent(id)}/hqdefault.jpg`;
}

export function getYoutubeWatchUrl(id: string): string {
  return `https://www.youtube.com/watch?v=${encodeURIComponent(id)}`;
}

export function getYoutubeEmbedUrl(id: string): string {
  return `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}?rel=0&modestbranding=1`;
}

export function getTutorials(): TutorialVideo[] {
  return ALTEK_YT_TUTORIALS;
}

export function getTutorialsByCourse(
  courseKey: "all" | TutorialCourseKey | string,
): TutorialVideo[] {
  if (courseKey === "all") return ALTEK_YT_TUTORIALS;
  return ALTEK_YT_TUTORIALS.filter((video) => video.courseKey === courseKey);
}

export function getTutorialsForCourseText(text: string): TutorialVideo[] {
  const key = resolveCourseKeyFromText(text);
  if (!key) return [];
  return ALTEK_YT_TUTORIALS.filter((video) => video.courseKey === key);
}

export function getTutorialById(id: string): TutorialVideo | undefined {
  return ALTEK_YT_TUTORIALS.find((video) => video.id === id);
}

export function getTutorialCountByCourse(
  courseKey: TutorialCourseKey,
): number {
  return ALTEK_YT_TUTORIALS.filter((video) => video.courseKey === courseKey)
    .length;
}
