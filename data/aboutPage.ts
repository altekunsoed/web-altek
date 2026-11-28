export type AboutTone = "blue" | "sky" | "mint" | "rose" | "amber" | "cyan";

export interface AboutHeroContent {
  eyebrow: string;
  titlePrefix: string;
  titleHighlight: string;
  titleSuffix: string;
  description: string;
  buildingTitle: string;
  buildingSubtitle: string;
  estBadge: string;
  buildingImage: string;
  buildingAlt: string;
}

export interface AboutIntroContent {
  kicker: string;
  heading: string;
  paragraphs: string[];
  foundedYear: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface AboutProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface AboutExploreContent {
  kicker: string;
  heading: string;
  description: string;
  sejarahSummary: string;
  processSteps: AboutProcessStep[];
}

export interface AboutPageContent {
  hero: AboutHeroContent;
  intro: AboutIntroContent;
  explore: AboutExploreContent;
}

export interface RoleResponsibility {
  id: string;
  title: string;
  summary: string;
  icon: string;
  tone: AboutTone;
  tasks: string[];
}

export interface ContactChannel {
  id: string;
  platform: string;
  value: string;
  description: string;
  href: string;
  icon: string;
  tone: AboutTone;
  external: boolean;
}

export interface CampusMapInfo {
  kicker: string;
  title: string;
  description: string;
  campusName: string;
  address: string;
  iframeTitle: string;
  embedUrl: string;
}

const ABOUT_PAGE_CONTENT: AboutPageContent = {
  hero: {
    eyebrow: "MENGENAL ALTEK · BERDIRI SEJAK 2011",
    titlePrefix: "Tentang ",
    titleHighlight: "ALTEK",
    titleSuffix: " UNSOED",
    description:
      "Organisasi, pengurus, dan peran ALTEK dalam mendukung kegiatan praktikum Teknik Elektro Universitas Jenderal Soedirman.",
    buildingTitle: "Gedung Laboratorium FT UNSOED",
    buildingSubtitle: "Kampus Teknik Blater, Purbalingga",
    estBadge: "EST. 2011",
    buildingImage: "/assets/custom/gedung-lab-ft.jpg",
    buildingAlt: "Gedung Laboratorium Fakultas Teknik UNSOED",
  },
  intro: {
    kicker: "SIAPA KAMI",
    heading: "Aliansi Laboratorium Teknik Elektro",
    paragraphs: [
      "ALTEK memfasilitasi kegiatan praktikum di Jurusan Teknik Elektro UNSOED dan membantu menghubungkan mahasiswa, dosen, serta laboran.",
      "Selain mendukung pelaksanaan praktikum, ALTEK menjadi ruang bagi aspirasi dan kreativitas mahasiswa di bidang perpraktikuman.",
    ],
    foundedYear: "2011",
    ctaLabel: "Lihat Pengurus ALTEK",
    ctaHref: "/keanggotaan",
  },
  explore: {
    kicker: "PROFIL & SEJARAH",
    heading: "Profil, Sejarah, & Peran",
    description:
      "Temukan sejarah singkat, peran ALTEK dalam praktikum, dan struktur pengurus.",
    sejarahSummary:
      "ALTEK tercatat telah hadir sejak tahun 2011 di lingkungan Teknik Elektro UNSOED. Kronologi yang lebih rinci belum dipublikasikan.",
    processSteps: [
      {
        number: "01",
        title: "Koordinasi",
        description:
          "ALTEK membantu menghubungkan PJ praktikum, asisten, dosen pengampu, dan laboran.",
      },
      {
        number: "02",
        title: "Panduan",
        description:
          "Informasi modul, aturan, dan daftar praktikum tersedia melalui halaman praktikum.",
      },
      {
        number: "03",
        title: "Pelaksanaan",
        description:
          "Kegiatan praktikum berlangsung sesuai koordinasi penanggung jawab terkait.",
      },
    ],
  },
};

const ROLE_RESPONSIBILITIES: RoleResponsibility[] = [
  {
    id: "ketua",
    title: "Ketua Umum",
    summary: "Kepemimpinan organisasi",
    icon: "crown",
    tone: "amber",
    tasks: [
      "Mengawasi keseluruhan kinerja anggota.",
      "Menjalankan visi dan misi organisasi.",
      "Menentukan waktu rapat dan musyawarah.",
      "Memimpin setiap rapat.",
      "Berkomunikasi dengan dosen dalam ranah organisasi ALTEK secara keseluruhan.",
    ],
  },
  {
    id: "sekretaris",
    title: "Sekretaris",
    summary: "Administrasi dan dokumentasi",
    icon: "clipboard",
    tone: "blue",
    tasks: [
      "Membuat dan mengurus surat-surat resmi ALTEK.",
      "Mencatat poin-poin penting dalam rapat (notulensi).",
      "Menggantikan peran ketua dalam rapat atau musyawarah apabila berhalangan.",
      "Mengorganisir file-file penting ALTEK pada Google Drive.",
      "Menyimpan dokumentasi rapat dan menyusun LPJ pada akhir masa jabatan.",
    ],
  },
  {
    id: "bendahara",
    title: "Bendahara",
    summary: "Pengelolaan keuangan",
    icon: "wallet",
    tone: "mint",
    tasks: [
      "Mencatat pengeluaran dan pemasukan.",
      "Menarik uang kas.",
      "Mengelola keuangan ALTEK.",
      "Mengorganisir file-file penting ALTEK pada Google Drive.",
      "Menggantikan peran ketua atau sekretaris dalam rapat atau musyawarah apabila berhalangan.",
    ],
  },
  {
    id: "kadiv",
    title: "Kepala Divisi",
    summary: "Koordinasi antarbidang",
    icon: "users",
    tone: "sky",
    tasks: [
      "Menjadi jembatan komunikasi antara ketua ALTEK dengan anggota per divisi.",
      "Membagi tugas per anggota divisi.",
      "Mengawasi kinerja PJ praktikum per divisi.",
      "Menggabungkan laporan setiap PJ praktikum divisinya untuk LPJ pada akhir masa jabatan.",
      "Siap menggantikan tugas anggota divisinya apabila ada yang berhalangan.",
    ],
  },
  {
    id: "pj",
    title: "PJ Praktikum",
    summary: "Pelaksanaan praktikum",
    icon: "circuit",
    tone: "cyan",
    tasks: [
      "Memilih koordinator praktikum.",
      "Melakukan seleksi asisten praktikum.",
      "Membuat timeline praktikum.",
      "Memastikan asisten praktikum melakukan tugasnya.",
      "Mencatat kendala dan masalah selama praktikum sebagai evaluasi.",
      "Memastikan seluruh asisten mendapatkan honor.",
      "Memberikan sertifikat kepada setiap asisten yang sudah selesai.",
      "Menyimpan dokumentasi praktikum berupa foto dan/atau video.",
      "Berkoordinasi dengan dosen dan laboran.",
    ],
  },
  {
    id: "humkominfo",
    title: "Humkominfo",
    summary: "Publikasi dan media",
    icon: "megaphone",
    tone: "rose",
    tasks: [
      "Membuat konten kreatif di YouTube dan Instagram dengan bekerja sama dengan divisi praktikum yang bersangkutan.",
      "Mengurus akun media sosial ALTEK.",
      "Membuat pamflet dan poster sebagai ilustrasi pengumuman atau pemberitahuan.",
      "Membuat desain sertifikat asisten praktikum.",
      "Mengelola website ALTEK.",
      "Menyebarkan informasi praktikum dan program kerja melalui WhatsApp, Instagram, GitHub, LinkedIn, dan TikTok.",
      "Meminjam ruangan untuk rapat.",
    ],
  },
];

const CONTACT_CHANNELS: ContactChannel[] = [
  {
    id: "instagram",
    platform: "INSTAGRAM",
    value: "@altek_unsoed",
    description: "Aktivitas dan informasi ALTEK",
    href: "https://instagram.com/altek_unsoed",
    icon: "instagram",
    tone: "rose",
    external: true,
  },
  {
    id: "linkedin",
    platform: "LINKEDIN",
    value: "ALTEK UNSOED",
    description: "Profil dan jejaring profesional",
    href: "https://linkedin.com/in/altek-unsoed",
    icon: "linkedin",
    tone: "blue",
    external: true,
  },
  {
    id: "github",
    platform: "GITHUB",
    value: "altekunsoed",
    description: "Repositori digital ALTEK",
    href: "https://github.com/altekunsoed",
    icon: "github",
    tone: "sky",
    external: true,
  },
  {
    id: "email",
    platform: "EMAIL",
    value: "aliansilaborat@gmail.com",
    description: "Hubungi ALTEK melalui email",
    href: "mailto:aliansilaborat@gmail.com",
    icon: "mail",
    tone: "mint",
    external: false,
  },
];

const CAMPUS_MAP_INFO: CampusMapInfo = {
  kicker: "LOKASI KAMPUS",
  title: "Lokasi Laboratorium FT UNSOED",
  description:
    "Seluruh laboratorium praktikum Teknik Elektro berada di kompleks Kampus Blater, Purbalingga.",
  campusName: "Fakultas Teknik — Universitas Jenderal Soedirman",
  address:
    "Jl. Raya Mayjen Sungkono No.KM 5, Dusun 2, Blater, Kec. Kalimanah, Kabupaten Purbalingga, Jawa Tengah 53371.",
  iframeTitle: "Lokasi Laboratorium Teknik Elektro UNSOED",
  embedUrl:
    "https://maps.google.com/maps?q=Fakultas%20Teknik%20Universitas%20Jenderal%20Soedirman%20Blater,%20Purbalingga&t=&z=16&ie=UTF8&iwloc=&output=embed",
};

export function getAboutContent(): AboutPageContent {
  return ABOUT_PAGE_CONTENT;
}

export function getRoleResponsibilities(): RoleResponsibility[] {
  return ROLE_RESPONSIBILITIES;
}

export function getContactChannels(): ContactChannel[] {
  return CONTACT_CHANNELS;
}

export function getMapInfo(): CampusMapInfo {
  return CAMPUS_MAP_INFO;
}
