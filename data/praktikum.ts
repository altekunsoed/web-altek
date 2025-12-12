export interface Praktikum {
  title: string;
  slug: string;
  description: string;
  pdf: string;
}

export const praktikumBySemester: {
  semester: number;
  praktikum: Praktikum[];
}[] = [
  {
    semester: 1,
    praktikum: [
      {
        title: "Praktikum Pemrograman",
        slug: "pemrograman",
        description: "Modul praktikum pemrograman untuk semester 1.",
        pdf: "https://cdn.jsdelivr.net/gh/altekunsoed/web-altek@main/public/praktikum/ModulPemrograman.pdf",
      },
    ],
  },
  {
    semester: 2,
    praktikum: [
      {
        title: "Praktikum Fisika",
        slug: "fisika",
        description: "Modul praktikum fisika untuk semester 2.",
        pdf: "https://cdn.jsdelivr.net/gh/altekunsoed/web-altek@main/public/praktikum/ModulFisika.pdf",
      },
    ],
  },
  {
    semester: 3,
    praktikum: [
      {
        title: "Rangkaian Listrik",
        slug: "rangkaian-listrik",
        description: "Modul praktikum rangkaian listrik.",
        pdf: "https://cdn.jsdelivr.net/gh/altekunsoed/web-altek@main/public/praktikum/ModulRangkaianListrik.pdf",
      },
      {
        title: "Konsep Telekomunikasi",
        slug: "konsep-telekomunikasi",
        description: "Modul praktikum konsep telekomunikasi.",
        pdf: "https://cdn.jsdelivr.net/gh/altekunsoed/web-altek@main/public/praktikum/ModulKonsepTelekomunikasi.pdf",
      },
      {
        title: "Teknik Digital",
        slug: "teknik-digital",
        description: "Modul praktikum teknik digital.",
        pdf: "https://cdn.jsdelivr.net/gh/altekunsoed/web-altek@main/public/praktikum/ModulTeknikDigital.pdf",
      },
    ],
  },
  {
    semester: 4,
    praktikum: [
      {
        title: "Elektronika",
        slug: "elektronika",
        description: "Modul praktikum elektronika.",
        pdf: "https://cdn.jsdelivr.net/gh/altekunsoed/web-altek@main/public/praktikum/ModulElektronika.pdf",
      },
      {
        title: "Konversi Energi",
        slug: "konversi-energi",
        description: "Modul praktikum konversi energi.",
        pdf: "https://cdn.jsdelivr.net/gh/altekunsoed/web-altek@main/public/praktikum/ModulKonversiEnergi.pdf",
      },
      {
        title: "Instrumentasi",
        slug: "instrumentasi",
        description: "Modul praktikum instrumentasi.",
        pdf: "https://cdn.jsdelivr.net/gh/altekunsoed/web-altek@main/public/praktikum/ModulPraktikumInstrumentasi.pdf",
      },
    ],
  },
  {
    semester: 5,
    praktikum: [
      {
        title: "Sistem Kendali",
        slug: "sistem-kendali",
        description: "Modul praktikum sistem kendali.",
        pdf: "https://cdn.jsdelivr.net/gh/altekunsoed/web-altek@main/public/praktikum/ModulSistemKendali.pdf",
      },
      {
        title: "Sistem Mikroprosesor",
        slug: "sistem-mikroprosesor",
        description: "Modul praktikum sistem mikroprosesor.",
        pdf: "https://cdn.jsdelivr.net/gh/altekunsoed/web-altek@main/public/praktikum/ModulSistemMikroprosesor.pdf",
      },
      {
        title: "Jaringan Komputer",
        slug: "jaringan-komputer",
        description: "Modul praktikum jaringan komputer.",
        pdf: "/ModulJaringanKomputer.pdf",
      },
      {
        title: "Otomasi Industri",
        slug: "otomasi-industri",
        description: "Modul praktikum otomasi industri.",
        pdf: "https://cdn.jsdelivr.net/gh/altekunsoed/web-altek@main/public/praktikum/ModulOtomasiIndustri.pdf",
      },
      {
        title: "Tenaga Listrik",
        slug: "tenaga-listrik",
        description: "Modul praktikum tenaga listrik.",
        pdf: "https://cdn.jsdelivr.net/gh/altekunsoed/web-altek@main/public/praktikum/ModulTenagaListrik.pdf",
      },
    ],
  },
];


// export const praktikumList = [
//   {
//     slug: "pemrograman",
//     title: "Praktikum Pemrograman",
//     description:
//       "Modul Praktikum Pemrograman Sebagai Berikut",
//     pdf: "/praktikum/ModulPemrograman.pdf",
//   },
//   {
//     slug: "fisika",
//     title: "Praktikum Fisika",
//     description:
//       "Modul Praktikum Fisika Sebagai Berikut",
//     pdf: "/praktikum/ModulPemrograman.pdf",
//   },
//   {
//     slug: "rangkaianlistrik",
//     title: "Praktikum Rangkaian Listrik",
//     description:
//       "Modul Praktikum Fisika Sebagai Berikut",
//     pdf: "/praktikum/ModulPemrograman.pdf",
//   },
//   {
//     slug: "konseptelekomunikasi",
//     title: "Praktikum Konsep Telekomunikasi",
//     description:
//       "Modul Praktikum Fisika Sebagai Berikut",
//     pdf: "/praktikum/ModulPemrograman.pdf",
//   },
//   {
//     slug: "teknikdigital",
//     title: "Praktikum Teknik Digital",
//     description:
//       "Modul Praktikum Fisika Sebagai Berikut",
//     pdf: "/praktikum/ModulPemrograman.pdf",
//   },
//   {
//     slug: "elka",
//     title: "Praktikum Elektronika",
//     description:
//       "Modul Praktikum Fisika Sebagai Berikut",
//     pdf: "/praktikum/ModulPemrograman.pdf",
//   },
//   {
//     slug: "konvers",
//     title: "Praktikum Konversi Energi",
//     description:
//       "Modul Praktikum Fisika Sebagai Berikut",
//     pdf: "/praktikum/ModulPemrograman.pdf",
//   },
//   {
//     slug: "instru",
//     title: "Praktikum Instrumentasi",
//     description:
//       "Modul Praktikum Fisika Sebagai Berikut",
//     pdf: "/praktikum/ModulPemrograman.pdf",
//   },
//   {
//     slug: "sisken",
//     title: "Praktikum Sistem Kendali",
//     description:
//       "Modul Praktikum Fisika Sebagai Berikut",
//     pdf: "/praktikum/ModulPemrograman.pdf",
//   },
//   {
//     slug: "sismik",
//     title: "Praktikum Sistem Mikroprosesor",
//     description:
//       "Modul Praktikum Fisika Sebagai Berikut",
//     pdf: "/praktikum/ModulPemrograman.pdf",
//   },
//   {
//     slug: "jarkom",
//     title: "Praktikum Jaringan Komputer",
//     description:
//       "Modul Praktikum Fisika Sebagai Berikut",
//     pdf: "/praktikum/ModulPemrograman.pdf",
//   },
//   {
//     slug: "otomasiindustri",
//     title: "Praktikum Otomasi Industri",
//     description:
//       "Modul Praktikum Fisika Sebagai Berikut",
//     pdf: "/praktikum/ModulPemrograman.pdf",
//   },
//   {
//     slug: "tenagalistrik",
//     title: "Praktikum Tenaga Listrik",
//     description:
//       "Modul Praktikum Fisika Sebagai Berikut",
//     pdf: "/praktikum/ModulPemrograman.pdf",
//   },
// ];
