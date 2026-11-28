export type InfoCategory = "Praktikum" | "Rekrutmen" | "Evaluasi & Layanan";

export interface InfoLink {
  label: string;
  url: string;
}

export type InfoDetailPair = [string, string];

export interface InfoItem {
  id: string;
  date: string;
  shortDate: string;
  category: InfoCategory;
  title: string;
  image: string;
  excerpt: string;
  intro: string;
  details: InfoDetailPair[];
  note: string;
  links: InfoLink[];
}

export const INFO_CATEGORIES: readonly ("Semua" | InfoCategory)[] = [
  "Semua",
  "Praktikum",
  "Rekrutmen",
  "Evaluasi & Layanan",
];

export const ALTEK_INFO_ITEMS_2026: InfoItem[] = [
  {
    id: "2026-11-26-otomasi",
    date: "Kamis, 26 November 2026",
    shortDate: "26 Nov 2026",
    category: "Praktikum",
    title: "Post-Test & Technical Meeting TUBES Praktikum Otomasi Industri",
    image: "/assets/informasi/2026-11-26_posttest-tm-tubes-otomasi-industri.jpg",
    excerpt:
      "Pelaksanaan Post-Test dan Technical Meeting Tugas Besar (TUBES) Praktikum Otomasi Industri pukul 18.30–21.00 WIB di Ruang E201 dan E202.",
    intro:
      "Diberitahukan kepada seluruh praktikan bahwa akan dilaksanakan kegiatan Post-Test dan Technical Meeting Tugas Besar (TUBES) Praktikum Otomasi Industri.",
    details: [
      ["Hari / Tanggal", "Kamis, 26 November 2026"],
      ["Waktu", "18.30 – 21.00 WIB"],
      ["Tempat", "Ruang E201 dan E202"],
      ["Perlengkapan", "Kertas folio dan alat tulis"],
    ],
    note: "Seluruh praktikan diharapkan hadir tepat waktu dan mempersiapkan diri dengan baik.",
    links: [],
  },
  {
    id: "2026-11-25-tenaga-listrik",
    date: "Rabu, 25 November 2026",
    shortDate: "25 Nov 2026",
    category: "Praktikum",
    title: "Technical Meeting TUBES & Post-Test Praktikum Tenaga Listrik",
    image: "/assets/informasi/2026-11-25_tm-tubes-posttest-tenaga-listrik.jpg",
    excerpt:
      "Technical Meeting TUBES dan Post-Test Praktikum Tenaga Listrik pukul 18.00–21.00 WIB di Ruang E201, E202, dan E203.",
    intro:
      "Diberitahukan kepada seluruh praktikan Praktikum Tenaga Listrik bahwa akan dilaksanakan kegiatan Technical Meeting Tugas Besar (TUBES) dan Post-Test.",
    details: [
      ["Hari / Tanggal", "Rabu, 25 November 2026"],
      ["Waktu", "18.00 – 21.00 WIB"],
      ["Tempat", "Ruang E201, E202, dan E203"],
      ["Perlengkapan", "Kertas folio dan alat tulis"],
    ],
    note: "Praktikan dimohon hadir tepat waktu dan mengikuti kegiatan hingga selesai.",
    links: [],
  },
  {
    id: "2026-11-20-responsi-sismik",
    date: "Jumat, 20 November 2026",
    shortDate: "20 Nov 2026",
    category: "Praktikum",
    title: "Responsi Tugas Besar Praktikum Sistem Mikroprosesor",
    image: "/assets/informasi/2026-11-20_responsi-tubes-sistem-mikroprosesor.jpg",
    excerpt:
      "Pelaksanaan Responsi Tugas Besar (TUBES) Praktikum Sistem Mikroprosesor pukul 19.00–21.00 WIB di Ruang E101–E103.",
    intro:
      "Diberitahukan kepada seluruh praktikan Praktikum Sistem Mikroprosesor bahwa akan dilaksanakan Responsi Tugas Besar (TUBES).",
    details: [
      ["Hari / Tanggal", "Jumat, 20 November 2026"],
      ["Waktu", "19.00 – 21.00 WIB"],
      ["Tempat", "Ruang E101, E102, dan E103"],
      ["Perlengkapan", "Hasil Tugas Besar dan Laporan Tugas Besar"],
    ],
    note: "Seluruh praktikan diharapkan hadir tepat waktu dan membawa kelengkapan Tugas Besar sesuai ketentuan.",
    links: [],
  },
  {
    id: "2026-11-13-posttest-telkom",
    date: "Jumat, 13 November 2026",
    shortDate: "13 Nov 2026",
    category: "Praktikum",
    title: "Post-Test Praktikum Konsep Telekomunikasi",
    image: "/assets/informasi/2026-11-13_posttest-konsep-telekomunikasi.jpg",
    excerpt:
      "Pelaksanaan Post-Test Praktikum Konsep Telekomunikasi mulai pukul 18.30 WIB di Ruang E101–E104.",
    intro:
      "Diberitahukan kepada seluruh praktikan Praktikum Konsep Telekomunikasi bahwa akan dilaksanakan kegiatan Post-Test.",
    details: [
      ["Hari / Tanggal", "Jumat, 13 November 2026"],
      ["Waktu", "18.30 WIB – selesai"],
      ["Tempat", "Ruang E101 – E104"],
      ["Perlengkapan", "Kertas folio dan alat tulis"],
    ],
    note: "Praktikan dimohon hadir tepat waktu dan mempersiapkan diri dengan baik.",
    links: [],
  },
  {
    id: "2026-11-05-sismik",
    date: "Kamis, 5 November 2026",
    shortDate: "5 Nov 2026",
    category: "Praktikum",
    title: "Technical Meeting TUBES & Post-Test Praktikum Sistem Mikroprosesor",
    image: "/assets/informasi/2026-11-05_tm-tubes-posttest-sistem-mikroprosesor.jpg",
    excerpt:
      "Technical Meeting TUBES & Post-Test Praktikum Sistem Mikroprosesor mulai pukul 18.30 WIB di Aula Gedung F.",
    intro:
      "Diberitahukan kepada seluruh praktikan bahwa akan dilaksanakan kegiatan Technical Meeting TUBES dan Post-Test Praktikum Sistem Mikroprosesor.",
    details: [
      ["Hari / Tanggal", "Kamis, 5 November 2026"],
      ["Waktu", "18.30 WIB – selesai"],
      ["Tempat", "Aula Gedung F"],
      ["Perlengkapan", "Kertas folio dan alat tulis"],
    ],
    note: "Seluruh praktikan diharapkan hadir tepat waktu dan mempersiapkan diri dengan baik.",
    links: [],
  },
  {
    id: "2026-10-23-tekdig",
    date: "Jumat, 23 Oktober 2026",
    shortDate: "23 Okt 2026",
    category: "Praktikum",
    title: "Technical Meeting TUBES & Post-Test Praktikum Teknik Digital",
    image: "/assets/informasi/2026-10-23_tm-tubes-posttest-teknik-digital.jpg",
    excerpt:
      "Technical Meeting TUBES & Post-Test Praktikum Teknik Digital pukul 18.30 WIB di Aula Gedung F.",
    intro:
      "Diinformasikan kepada seluruh praktikan bahwa akan dilaksanakan Technical Meeting Tugas Besar (TUBES) dan Post-Test Praktikum Teknik Digital.",
    details: [
      ["Hari / Tanggal", "Jumat, 23 Oktober 2026"],
      ["Waktu", "18.30 WIB – selesai"],
      ["Tempat", "Aula Gedung F"],
      ["Perlengkapan", "Papan jalan, kertas folio, dan alat tulis"],
    ],
    note: "Praktikan dimohon hadir tepat waktu dan mengikuti kegiatan sampai selesai.",
    links: [],
  },
  {
    id: "2026-10-17-tl",
    date: "Sabtu, 17 Oktober 2026",
    shortDate: "17 Okt 2026",
    category: "Praktikum",
    title: "Technical Meeting & Pre-Test Praktikum Tenaga Listrik",
    image: "/assets/informasi/2026-10-17_tm-pretest-tenaga-listrik.jpg",
    excerpt:
      "Technical Meeting & Pre-Test Praktikum Tenaga Listrik mulai pukul 16.00 WIB di Ruang E201, E202, dan E203.",
    intro:
      "Diinformasikan bahwa akan dilaksanakan Technical Meeting dan Pre-Test Praktikum Tenaga Listrik.",
    details: [
      ["Hari / Tanggal", "Sabtu, 17 Oktober 2026"],
      ["Waktu", "16.00 WIB – selesai"],
      ["Tempat", "Ruang E201, E202, dan E203"],
      ["Perlengkapan", "Alat tulis dan kertas folio"],
    ],
    note: "Praktikan dimohon hadir tepat waktu dan mengikuti kegiatan sampai selesai.",
    links: [],
  },
  {
    id: "2026-09-26-otomasi",
    date: "Sabtu, 26 September 2026",
    shortDate: "26 Sep 2026",
    category: "Praktikum",
    title: "Technical Meeting & Pre-Test Praktikum Otomasi Industri",
    image: "/assets/informasi/2026-09-26_tm-pretest-otomasi-industri.jpg",
    excerpt:
      "Technical Meeting & Pre-Test Praktikum Otomasi Industri secara daring via Google Meet pukul 20.00 WIB.",
    intro:
      "Diinformasikan bahwa akan dilaksanakan Technical Meeting dan Pre-Test Praktikum Otomasi Industri secara daring.",
    details: [
      ["Hari / Tanggal", "Sabtu, 26 September 2026"],
      ["Waktu", "20.00 WIB – selesai"],
      ["Tempat", "Online via Google Meet"],
      ["Perlengkapan", "Alat tulis dan kertas folio"],
    ],
    note: "Praktikan dimohon hadir tepat waktu dan mengikuti kegiatan sampai selesai.",
    links: [
      { label: "Buka Google Meet", url: "https://meet.google.com/aev-mmhn-vrw" },
    ],
  },
  {
    id: "2026-09-12-sisken",
    date: "Sabtu, 12 September 2026",
    shortDate: "12 Sep 2026",
    category: "Praktikum",
    title: "Technical Meeting & Pre-Test Praktikum Sistem Kendali",
    image: "/assets/informasi/2026-09-12_tm-pretest-sistem-kendali.jpg",
    excerpt:
      "Kegiatan wajib Technical Meeting & Pre-Test Praktikum Sistem Kendali pukul 17.00–19.00 WIB di Ruang E101–E103.",
    intro:
      "Technical Meeting dan Pre-Test Praktikum Sistem Kendali bersifat WAJIB bagi seluruh mahasiswa peserta praktikum untuk membahas teknis pelaksanaan sekaligus pelaksanaan pre-test.",
    details: [
      ["Hari / Tanggal", "Sabtu, 12 September 2026"],
      ["Waktu", "17.00 – 19.00 WIB"],
      ["Tempat", "Ruang E101, E102, dan E103"],
      ["Perlengkapan", "Alat tulis dan kertas A4/Folio"],
    ],
    note: "Kehadiran bersifat wajib bagi seluruh praktikan Praktikum Sistem Kendali.",
    links: [],
  },
  {
    id: "2026-09-11-sismik",
    date: "Jumat, 11 September 2026",
    shortDate: "11 Sep 2026",
    category: "Praktikum",
    title: "Technical Meeting Praktikum Sistem Mikroprosesor",
    image: "/assets/informasi/2026-09-11_tm-sistem-mikroprosesor.jpg",
    excerpt:
      "Technical Meeting wajib Praktikum Sistem Mikroprosesor secara daring via Google Meet pukul 20.30 WIB.",
    intro:
      "Technical Meeting Praktikum Sistem Mikroprosesor bersifat WAJIB bagi seluruh mahasiswa peserta praktikum untuk membahas informasi dan teknis penting pelaksanaan praktikum.",
    details: [
      ["Hari / Tanggal", "Jumat, 11 September 2026"],
      ["Waktu", "20.30 WIB – selesai"],
      ["Tempat", "Online (Google Meet)"],
      [
        "Persiapan",
        "Menyimak materi yang disampaikan dan memastikan koneksi internet stabil",
      ],
    ],
    note: "Pastikan bergabung tepat waktu sebelum sesi penjelasan teknis dimulai.",
    links: [],
  },
  {
    id: "2026-09-11-telkom",
    date: "Jumat, 11 September 2026",
    shortDate: "11 Sep 2026",
    category: "Praktikum",
    title: "Technical Meeting & Pre-Test Praktikum Konsep Telekomunikasi",
    image: "/assets/informasi/2026-09-11_tm-pretest-konsep-telekomunikasi.jpg",
    excerpt:
      "Technical Meeting & Pre-Test Praktikum Konsep Telekomunikasi mulai pukul 18.00 WIB di Ruang E201–E204.",
    intro:
      "Diinformasikan kepada seluruh praktikan Praktikum Konsep Telekomunikasi bahwa akan dilaksanakan Technical Meeting dan Pre-Test.",
    details: [
      ["Hari / Tanggal", "Jumat, 11 September 2026"],
      ["Waktu", "18.00 WIB – selesai"],
      ["Tempat", "Ruang E201, E202, E203, dan E204"],
      ["Perlengkapan", "Pulpen dan kertas A4/Folio"],
    ],
    note: "Praktikan dimohon hadir tepat waktu dan mengikuti kegiatan sampai selesai.",
    links: [],
  },
  {
    id: "2026-09-05-tekdig",
    date: "Sabtu, 5 September 2026",
    shortDate: "5 Sep 2026",
    category: "Praktikum",
    title: "Technical Meeting & Pre-Test Praktikum Teknik Digital",
    image: "/assets/informasi/2026-09-05_tm-pretest-teknik-digital.jpg",
    excerpt:
      "Technical Meeting & Pre-Test Praktikum Teknik Digital mulai pukul 18.30 WIB di Ruang E303–E305.",
    intro:
      "Diinformasikan kepada seluruh praktikan Praktikum Teknik Digital bahwa akan dilaksanakan Technical Meeting dan Pre-Test.",
    details: [
      ["Hari / Tanggal", "Sabtu, 5 September 2026"],
      ["Waktu", "18.30 WIB – selesai"],
      ["Tempat", "Ruang E303, E304, dan E305"],
      ["Perlengkapan", "Alat tulis dan kertas folio"],
    ],
    note: "Praktikan dimohon hadir tepat waktu dan mempersiapkan diri dengan baik.",
    links: [],
  },
  {
    id: "2026-08-28-pemrograman",
    date: "Jumat, 28 Agustus 2026",
    shortDate: "28 Agu 2026",
    category: "Praktikum",
    title: "Technical Meeting Praktikum Pemrograman",
    image: "/assets/informasi/2026-08-28_tm-pemrograman.jpg",
    excerpt:
      "Technical Meeting Praktikum Pemrograman bagi mahasiswa Teknik Elektro angkatan 2026 secara daring pukul 19.00 WIB.",
    intro:
      "Technical Meeting Praktikum Pemrograman membahas informasi dan teknis penting pelaksanaan praktikum bagi seluruh mahasiswa Teknik Elektro angkatan 2026.",
    details: [
      ["Hari / Tanggal", "Jumat, 28 Agustus 2026"],
      ["Waktu", "19.00 WIB – selesai"],
      ["Tempat", "Online (Google Meet)"],
      ["Perangkat", "Laptop atau Smartphone"],
    ],
    note: "Seluruh peserta praktikum angkatan 2026 diharapkan hadir tepat waktu.",
    links: [],
  },
  {
    id: "2026-08-27-rl",
    date: "Kamis, 27 Agustus 2026",
    shortDate: "27 Agu 2026",
    category: "Praktikum",
    title: "Technical Meeting Praktikum Rangkaian Listrik",
    image: "/assets/informasi/2026-08-27_tm-rangkaian-listrik.jpg",
    excerpt:
      "Technical Meeting Praktikum Rangkaian Listrik bagi mahasiswa angkatan 2025 secara daring via Google Meet pukul 19.00 WIB.",
    intro:
      "Technical Meeting Praktikum Rangkaian Listrik membahas berbagai informasi dan teknis penting pelaksanaan praktikum bagi mahasiswa Teknik Elektro angkatan 2025.",
    details: [
      ["Hari / Tanggal", "Kamis, 27 Agustus 2026"],
      ["Waktu", "19.00 WIB – selesai"],
      ["Tempat", "Online via Google Meet"],
      ["Peserta", "Mahasiswa Teknik Elektro angkatan 2025"],
    ],
    note: "Seluruh praktikan diharapkan hadir dan mengikuti penjelasan teknis sampai selesai.",
    links: [
      { label: "Buka Google Meet", url: "https://meet.google.com/gau-dcdn-mgc" },
    ],
  },
  {
    id: "2026-08-08-oprec-gasal",
    date: "8–10 Agustus 2026",
    shortDate: "8–10 Agu 2026",
    category: "Rekrutmen",
    title: "Open Recruitment Asisten Praktikum Gasal 2026",
    image: "/assets/informasi/2026-08-08_oprec-asprak-gasal-2026.jpg",
    excerpt:
      "Pendaftaran Asisten Praktikum Semester Gasal 2026 dibuka untuk 8 praktikum Teknik Elektro UNSOED pada 8–10 Agustus 2026.",
    intro:
      "Open Recruitment Asisten Praktikum Semester Gasal 2026 dibuka bagi mahasiswa aktif Teknik Elektro UNSOED yang ingin berkontribusi langsung dalam pelaksanaan praktikum laboratorium.",
    details: [
      ["Periode Pendaftaran", "8 – 10 Agustus 2026"],
      [
        "Praktikum Dibuka",
        "Teknik Digital, Rangkaian Listrik, Konsep Telekomunikasi, Tenaga Listrik, Otomasi Industri, Pemrograman, Sistem Mikroprosesor, dan Sistem Kendali",
      ],
      [
        "Persyaratan",
        "Mahasiswa aktif Teknik Elektro UNSOED minimal angkatan 2025, pernah mengikuti praktikum terkait, nilai praktikum baik, berkomitmen dan bertanggung jawab",
      ],
      ["Narahubung", "Dinar Oktaviano (+62 858-0158-6104)"],
    ],
    note: "Pendaftaran juga dapat diakses melalui QR Code yang tertera pada poster.",
    links: [
      {
        label: "Formulir Pendaftaran",
        url: "https://bit.ly/OprecAsprakGanjil2026",
      },
    ],
  },
  {
    id: "2026-06-04-posttest-konversi",
    date: "Kamis, 4 Juni 2026",
    shortDate: "4 Jun 2026",
    category: "Praktikum",
    title: "Post-Test Praktikum Konversi Energi",
    image: "/assets/informasi/2026-06-04_posttest-konversi-energi.jpg",
    excerpt:
      "Pelaksanaan Post-Test Praktikum Konversi Energi mulai pukul 19.00 WIB di Ruang E201–E202.",
    intro:
      "Diberitahukan kepada seluruh praktikan Praktikum Konversi Energi bahwa akan dilaksanakan kegiatan Post-Test.",
    details: [
      ["Hari / Tanggal", "Kamis, 4 Juni 2026"],
      ["Waktu", "19.00 WIB – selesai"],
      ["Tempat", "Ruang E201 – E202"],
      ["Perlengkapan", "Kertas folio, alat tulis, dan kalkulator"],
    ],
    note: "Seluruh praktikan diharapkan hadir tepat waktu dan mempersiapkan diri sebaik-baiknya.",
    links: [],
  },
  {
    id: "2026-05-22-evaluasi-asprak",
    date: "22 Mei 2026",
    shortDate: "22 Mei 2026",
    category: "Evaluasi & Layanan",
    title: "Evaluasi Praktikum: Form Penilaian Asisten & Aspirasi ALTEK",
    image:
      "/assets/informasi/2026-05-22_evaluasi-form-penilaian-asprak-aspirasi.jpg",
    excerpt:
      "ALTEK membuka Form Penilaian Kinerja Asisten Praktikum serta Form Kritik, Saran, dan Aspirasi untuk peningkatan layanan laboratorium.",
    intro:
      "Dalam rangka evaluasi pelaksanaan praktikum dan kinerja asisten praktikum, ALTEK UNSOED membuka dua formulir masukan bagi seluruh praktikan.",
    details: [
      ["Tanggal Publikasi", "22 Mei 2026"],
      ["Form 1", "Penilaian Kinerja Asisten Praktikum"],
      ["Form 2", "Kritik, Saran, dan Aspirasi ALTEK"],
      [
        "Akses Alternatif",
        "Dapat diakses melalui tombol tautan di bawah atau QR Code pada poster",
      ],
    ],
    note: "Masukan dari praktikan menjadi dasar perbaikan kualitas pelaksanaan praktikum dan pelayanan ALTEK ke depannya.",
    links: [
      {
        label: "Form Penilaian Asisten",
        url: "https://forms.gle/m5onAAEuHqmb4QJ27",
      },
      {
        label: "Form Kritik & Aspirasi",
        url: "https://forms.gle/wuUvK2Dy8U6wpEVK7",
      },
    ],
  },
  {
    id: "2026-05-22-posttest-fisika",
    date: "Jumat, 22 Mei 2026",
    shortDate: "22 Mei 2026",
    category: "Praktikum",
    title: "Post-Test Praktikum Fisika",
    image: "/assets/informasi/2026-05-22_posttest-fisika.jpg",
    excerpt:
      "Pelaksanaan Post-Test Praktikum Fisika pukul 18.00 WIB di Ruang E201–E205, lengkap dengan daftar pembagian ruangan.",
    intro:
      "Diberitahukan kepada seluruh praktikan bahwa akan dilaksanakan Post-Test Praktikum Fisika. Cek daftar pembagian ruangan sebelum hadir ke lokasi.",
    details: [
      ["Hari / Tanggal", "Jumat, 22 Mei 2026"],
      ["Waktu", "18.00 WIB – selesai"],
      ["Tempat", "Ruang E201 – E205"],
      ["Perlengkapan", "Kertas folio garis, alat tulis, dan kalkulator"],
    ],
    note: "Seluruh praktikan diharapkan hadir tepat waktu sesuai pembagian ruangan masing-masing.",
    links: [
      {
        label: "Cek Pembagian Ruangan",
        url: "https://docs.google.com/spreadsheets/u/0/d/1A35GrG6dasdRxZlpGhuMe8rPaI4R8Jwj/edit",
      },
    ],
  },
  {
    id: "2026-04-28-elektronika",
    date: "Selasa, 28 April 2026",
    shortDate: "28 Apr 2026",
    category: "Praktikum",
    title: "Technical Meeting & Pre-Test Praktikum Elektronika",
    image: "/assets/informasi/2026-04-28_tm-pretest-elektronika.png",
    excerpt:
      "Kegiatan wajib Technical Meeting & Pre-Test Praktikum Elektronika untuk angkatan 2024 pukul 18.30–21.00 WIB di Aula Gedung F.",
    intro:
      "Technical Meeting dan Pre-Test Praktikum Elektronika bersifat WAJIB bagi seluruh mahasiswa angkatan 2024 yang mengikuti praktikum ini.",
    details: [
      ["Hari / Tanggal", "Selasa, 28 April 2026"],
      ["Waktu", "18.30 – 21.00 WIB"],
      ["Tempat", "Aula Gedung F"],
      ["Perlengkapan", "Kertas folio dan alat tulis"],
    ],
    note: "Kegiatan mencakup penyampaian teknis praktikum dan pelaksanaan pre-test.",
    links: [],
  },
  {
    id: "2026-03-05-instrumentasi",
    date: "Kamis, 5 Maret 2026",
    shortDate: "5 Mar 2026",
    category: "Praktikum",
    title: "Technical Meeting Praktikum Instrumentasi",
    image: "/assets/informasi/2026-03-05_tm-instrumentasi.jpg",
    excerpt:
      "Technical Meeting Praktikum Instrumentasi secara daring melalui Google Meet mulai pukul 20.00 WIB.",
    intro:
      "Diinformasikan kepada seluruh praktikan Praktikum Instrumentasi bahwa akan dilaksanakan Technical Meeting secara daring.",
    details: [
      ["Hari / Tanggal", "Kamis, 5 Maret 2026"],
      ["Waktu", "20.00 WIB – selesai"],
      ["Tempat", "Online via Google Meet"],
      ["Perlengkapan", "Alat tulis"],
    ],
    note: "Praktikan dimohon hadir tepat waktu dan mengikuti penyampaian teknis pelaksanaan praktikum hingga selesai.",
    links: [],
  },
  {
    id: "2026-03-05-konversi",
    date: "Kamis, 5 Maret 2026",
    shortDate: "5 Mar 2026",
    category: "Praktikum",
    title: "Technical Meeting Praktikum Konversi Energi",
    image: "/assets/informasi/2026-03-05_tm-konversi-energi.jpg",
    excerpt:
      "Technical Meeting Praktikum Konversi Energi secara daring melalui Google Meet mulai pukul 16.00 WIB.",
    intro:
      "Diinformasikan kepada seluruh praktikan Praktikum Konversi Energi bahwa akan dilaksanakan Technical Meeting secara daring.",
    details: [
      ["Hari / Tanggal", "Kamis, 5 Maret 2026"],
      ["Waktu", "16.00 WIB – selesai"],
      ["Tempat", "Online via Google Meet"],
      ["Perlengkapan", "Alat tulis"],
    ],
    note: "Praktikan dimohon hadir tepat waktu dan mengikuti penyampaian teknis pelaksanaan praktikum hingga selesai.",
    links: [],
  },
  {
    id: "2026-02-24-fisika",
    date: "Selasa, 24 Februari 2026",
    shortDate: "24 Feb 2026",
    category: "Praktikum",
    title: "Technical Meeting Praktikum Fisika 2026",
    image: "/assets/informasi/2026-02-24_tm-fisika.jpg",
    excerpt:
      "Technical Meeting wajib Praktikum Fisika 2026 bagi praktikan angkatan 2025 pukul 16.00 WIB di Aula Gedung F.",
    intro:
      "Sehubungan dengan dimulainya kegiatan Praktikum Fisika 2026, seluruh praktikan Fisika angkatan 2025 diwajibkan menghadiri Technical Meeting.",
    details: [
      ["Hari / Tanggal", "Selasa, 24 Februari 2026"],
      ["Waktu", "16.00 WIB – selesai"],
      ["Tempat", "Aula Gedung F"],
      [
        "Agenda",
        "Sistem pelaksanaan praktikum, tata tertib, pembagian kelas, dan informasi teknis lainnya",
      ],
    ],
    note: "Seluruh praktikan angkatan 2025 diharapkan hadir tepat waktu.",
    links: [],
  },
  {
    id: "2026-02-10-oprec-genap-ext",
    date: "10–12 Februari 2026",
    shortDate: "10–12 Feb 2026",
    category: "Rekrutmen",
    title: "Open Recruitment Asisten Praktikum Genap 2026 (Extended)",
    image: "/assets/informasi/2026-02-10_oprec-asprak-genap-extended-2026.jpg",
    excerpt:
      "Perpanjangan pendaftaran Asisten Praktikum Semester Genap 2026 untuk Instrumentasi, Konversi Energi, dan Elektronika.",
    intro:
      "Pendaftaran Asisten Praktikum Semester Genap 2026 (Extended) dibuka bagi mahasiswa Teknik Elektro UNSOED yang ingin mengasah kemampuan dan berkontribusi dalam praktikum.",
    details: [
      ["Periode Pendaftaran", "10 – 12 Februari 2026"],
      ["Praktikum Dibuka", "Instrumentasi, Konversi Energi, dan Elektronika"],
      [
        "Persyaratan",
        "Mahasiswa aktif Teknik Elektro UNSOED minimal angkatan 2024, pernah mengikuti praktikum terkait, nilai praktikum baik, berkomitmen dan mampu bekerja dalam tim",
      ],
      ["Narahubung", "Dinar (0858 0158 6104)"],
    ],
    note: "Gunakan tautan pendaftaran resmi di bawah untuk mengisi formulir.",
    links: [
      {
        label: "Formulir Pendaftaran",
        url: "https://bit.ly/OprecAsprakGenap2026",
      },
    ],
  },
  {
    id: "2026-02-08-oprec-genap",
    date: "8–11 Februari 2026",
    shortDate: "8–11 Feb 2026",
    category: "Rekrutmen",
    title: "Open Recruitment Asisten Praktikum Genap 2026 (Gelombang Awal)",
    image: "/assets/informasi/2026-02-08_oprec-asprak-genap-2026.jpg",
    excerpt:
      "Pembukaan pendaftaran Asisten Praktikum Semester Genap 2026 untuk Fisika, Konversi Energi, Elektronika, dan Instrumentasi.",
    intro:
      "Pendaftaran Asisten Praktikum Semester Genap 2026 (Gelombang Awal) dibuka bagi mahasiswa aktif Teknik Elektro UNSOED minimal angkatan 2024.",
    details: [
      ["Periode Pendaftaran", "8 – 11 Februari 2026"],
      [
        "Praktikum Dibuka",
        "Fisika, Konversi Energi, Elektronika, dan Instrumentasi",
      ],
      [
        "Persyaratan",
        "Mahasiswa aktif Teknik Elektro UNSOED minimal angkatan 2024, sudah pernah mengikuti praktikum terkait, nilai praktikum baik, berkomitmen dan bertanggung jawab",
      ],
      ["Narahubung", "Dinar (0858 0158 6104)"],
    ],
    note: "Pendaftaran dapat dilakukan melalui tautan resmi atau QR Code pada poster.",
    links: [
      {
        label: "Formulir Pendaftaran",
        url: "https://bit.ly/OprecAsprakGenap2026",
      },
    ],
  },
];

export function getInformasi(): InfoItem[] {
  return ALTEK_INFO_ITEMS_2026;
}

export function getInformasiTerbaru(limit = 3): InfoItem[] {
  return ALTEK_INFO_ITEMS_2026.slice(0, limit);
}

export function getInformasiByCategory(
  category: "Semua" | InfoCategory,
): InfoItem[] {
  if (category === "Semua") return ALTEK_INFO_ITEMS_2026;
  return ALTEK_INFO_ITEMS_2026.filter((item) => item.category === category);
}

export function getInformasiById(id: string): InfoItem | undefined {
  return ALTEK_INFO_ITEMS_2026.find((item) => item.id === id);
}
