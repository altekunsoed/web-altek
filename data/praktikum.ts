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
        pdf: "/praktikum/ModulPemrograman.pdf",
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
        pdf: "/ModulFisika.pdf",
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
        pdf: "/ModulRangkaianListrik.pdf",
      },
      {
        title: "Konsep Telekomunikasi",
        slug: "konsep-telekomunikasi",
        description: "Modul praktikum konsep telekomunikasi.",
        pdf: "/ModulTelekomunikasi.pdf",
      },
      {
        title: "Teknik Digital",
        slug: "teknik-digital",
        description: "Modul praktikum teknik digital.",
        pdf: "/ModulTeknikDigital.pdf",
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
        pdf: "/ModulElektronika.pdf",
      },
      {
        title: "Konversi Energi",
        slug: "konversi-energi",
        description: "Modul praktikum konversi energi.",
        pdf: "/ModulKonversiEnergi.pdf",
      },
      {
        title: "Instrumentasi",
        slug: "instrumentasi",
        description: "Modul praktikum instrumentasi.",
        pdf: "/ModulInstrumentasi.pdf",
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
        pdf: "/ModulSistemKendali.pdf",
      },
      {
        title: "Sistem Mikroprosesor",
        slug: "sistem-mikroprosesor",
        description: "Modul praktikum sistem mikroprosesor.",
        pdf: "/ModulSistemMikroprosesor.pdf",
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
        pdf: "/ModulOtomasiIndustri.pdf",
      },
      {
        title: "Tenaga Listrik",
        slug: "tenaga-listrik",
        description: "Modul praktikum tenaga listrik.",
        pdf: "/ModulTenagaListrik.pdf",
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
