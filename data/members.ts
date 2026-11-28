export type MemberTone = "sky" | "amber" | "cyan" | "blue" | "mint";

export interface BoardMember {
  name: string;
  role: string;
  photo?: string;
}

export interface DivisionMember {
  name: string;
  photo?: string;
}

export interface DivisionField {
  name: string;
  members: DivisionMember[];
}

export interface OrgDivision {
  id: string;
  name: string;
  description: string;
  icon: string;
  tone: MemberTone;
  head: string;
  headPhoto?: string;
  fields: DivisionField[];
}

export interface ManagementPeriodData {
  year: 2025 | 2026;
  board: BoardMember[];
  divisions: OrgDivision[];
}

export const MANAGEMENT_2026_DATA: ManagementPeriodData = {
  year: 2026,
  board: [
    {
      name: "Dinar Oktaviano",
      role: "Ketua Umum",
      photo: "/assets/members/BPH/Dinar Oktaviano_BPH.png",
    },
    {
      name: "Ramania Nur Alifa",
      role: "Sekretaris",
      photo: "/assets/members/BPH/Ramania Nur Alifa_BPH.jpg",
    },
    {
      name: "Khaerani Julieta F.",
      role: "Bendahara",
      photo: "/assets/members/BPH/Khaerani Julieta F_BPH.png",
    },
  ],
  divisions: [
    {
      id: "tik",
      name: "TIK",
      description: "Teknik Instrumentasi Kendali",
      icon: "sliders",
      tone: "mint",
      head: "Ikhsan Budi Nugroho",
      headPhoto: "/assets/members/Divisi TIK/Ikhsan Budi_TIK.jpeg",
      fields: [
        {
          name: "Instrumentasi",
          members: [
            {
              name: "Raul Abrar Palmawanto",
              photo: "/assets/members/Divisi TIK/Raul_TIK.JPG",
            },
            {
              name: "Henkel Raditya",
              photo: "/assets/members/Divisi TIK/Henkel Raditya_TIK.png",
            },
          ],
        },
        {
          name: "Elektronika",
          members: [
            {
              name: "Noor Huda Ramadhani",
              photo: "/assets/members/Divisi TIK/Dani_TIK.jpg",
            },
            {
              name: "Julius Alfadi Mordrigo",
              photo: "/assets/members/Divisi TIK/Julius Alfadi M_TIK.jpg",
            },
          ],
        },
        {
          name: "Otomasi Industri",
          members: [
            {
              name: "Denis Fajar Wicaksono",
              photo: "/assets/members/Divisi TIK/Denis_TIK.jpg",
            },
          ],
        },
        {
          name: "Sistem Kendali",
          members: [
            {
              name: "Bayu Sugianda",
              photo: "/assets/members/Divisi TIK/Bayu_TIK.jpg",
            },
          ],
        },
      ],
    },
    {
      id: "ttl",
      name: "TTL",
      description: "Teknik Tenaga Listrik",
      icon: "power",
      tone: "amber",
      head: "Raymondria Willy S.",
      headPhoto: "/assets/members/Divisi TTL/Raymondria_TTL.jpg",
      fields: [
        {
          name: "Konversi Energi",
          members: [
            {
              name: "Klara Rosalia Imelda",
              photo: "/assets/members/Divisi TTL/klara_TTL.jpg",
            },
          ],
        },
        {
          name: "Rangkaian Listrik",
          members: [
            {
              name: "M. Fakhrul Arifin",
              photo: "/assets/members/Divisi TTL/M. Fakhrul Arifin_TTL.jpg",
            },
            {
              name: "M. Akbar Firmansyah",
              photo: "/assets/members/Divisi TTL/M. Akbar_TTL.png",
            },
          ],
        },
        {
          name: "Tenaga Listrik",
          members: [
            {
              name: "Naufal Dwi A.",
              photo: "/assets/members/Divisi TTL/Naufal_dwi_TTL.png",
            },
          ],
        },
      ],
    },
    {
      id: "ttk",
      name: "TTK",
      description: "Teknik Telekomunikasi",
      icon: "antenna",
      tone: "blue",
      head: "Erland Rachman Putra",
      headPhoto: "/assets/members/Divisi TTK/Erland Rachman Putra_TTK.png",
      fields: [
        {
          name: "Fisika",
          members: [
            {
              name: "Nabilla Putri Andini",
              photo: "/assets/members/Divisi TTK/Nabilla Putri Andini_TTK.jpg",
            },
            {
              name: "Hifayatun Anin",
              photo: "/assets/members/Divisi TTK/Hifayatun Anin_TTK.jpg",
            },
          ],
        },
        {
          name: "Teknik Digital",
          members: [
            {
              name: "Chandra Salim",
              photo: "/assets/members/Divisi TTK/Chandra Salim_TTK.jpg",
            },
          ],
        },
        {
          name: "Konsep Telekomunikasi",
          members: [
            {
              name: "Alfin Yusril Husna",
              photo: "/assets/members/Divisi TTK/Alfin Yusril Husna_TTK.png",
            },
            {
              name: "Nashr Ardy Wahyono",
              photo: "/assets/members/Divisi TTK/Nashr Ardy Wahyono_TTK.jpg",
            },
          ],
        },
      ],
    },
    {
      id: "tki",
      name: "TKI",
      description: "Teknik Komputer dan Informasi",
      icon: "cpu",
      tone: "cyan",
      head: "Tiara Dwiaryani Adila",
      headPhoto: "/assets/members/Divisi TKI/Tiara_TKI.jpg",
      fields: [
        {
          name: "Pemrograman",
          members: [
            {
              name: "Probo Dwi Yulastono",
              photo: "/assets/members/Divisi TKI/Probo Dwi Yulastono_TKI.png",
            },
            {
              name: "Riyan",
              photo: "/assets/members/Divisi TKI/Riyan_TKI.png",
            },
          ],
        },
        {
          name: "Jaringan Komputer",
          members: [
            {
              name: "Dewi Sita Agustin",
              photo: "/assets/members/Divisi TKI/Dewi_TKI.jpg",
            },
          ],
        },
        {
          name: "Sistem Mikroprosesor",
          members: [
            {
              name: "Helga Ramania H.",
              photo: "/assets/members/Divisi TKI/Helga_TKI.jpg",
            },
            {
              name: "Miko Renanda",
              photo: "/assets/members/Divisi TKI/Miko_TKI.png",
            },
          ],
        },
      ],
    },
    {
      id: "humkominfo",
      name: "Humkominfo",
      description: "Komunikasi dan Media",
      icon: "megaphone",
      tone: "sky",
      head: "Dika Aditya Saputra",
      headPhoto: "/assets/members/HUMKOMINFO/Dika Aditya S_Humkominfo.png",
      fields: [
        {
          name: "Humas",
          members: [
            {
              name: "Dimas Raihan Anhar",
              photo: "/assets/members/HUMKOMINFO/Dimas Raihan A_humkominfo.jpg",
            },
            {
              name: "Kia Shadra Afiqa B.",
              photo: "/assets/members/HUMKOMINFO/Kia Shadra_Humkominfo.jpg",
            },
          ],
        },
        {
          name: "Media Kreatif",
          members: [
            {
              name: "Septi Aisya",
              photo: "/assets/members/HUMKOMINFO/Septi_Humkominfo.JPG",
            },
            {
              name: "Aprilia Tri Hapsari",
              photo: "/assets/members/HUMKOMINFO/Aprilia_humkominfo.png",
            },
          ],
        },
        {
          name: "WEB",
          members: [
            {
              name: "Fhalah Arinda Putra",
              photo: "/assets/members/HUMKOMINFO/Fhalah Arinda Putra_HUMKOMINFO.jpg",
            },
            {
              name: "Fadhilah Setyo",
              photo: "/assets/members/HUMKOMINFO/Fadhilah S. Wibowo_Humkominfo.jpg",
            },
          ],
        },
      ],
    },
  ],
};

export const ARCHIVE_2025_DATA: ManagementPeriodData = {
  year: 2025,
  board: [
    { name: "Rizki Anugrah Putra", role: "Ketua" },
    { name: "Pia Kusuma Wardani", role: "Sekretaris" },
    { name: "Riz'q Amelia", role: "Bendahara" },
  ],
  divisions: [
    {
      id: "humkominfo",
      name: "Humkominfo",
      description: "Komunikasi dan Media",
      icon: "megaphone",
      tone: "sky",
      head: "Afan Nurwalidaen",
      fields: [
        {
          name: "Medsos dan Humas",
          members: [{ name: "Dika A" }, { name: "Satria Army Putra" }],
        },
        {
          name: "Web",
          members: [
            { name: "M. Rivqi Al Varras" },
            { name: "Bagus Satria Bima" },
          ],
        },
      ],
    },
    {
      id: "ttl",
      name: "TTL",
      description: "Teknik Tenaga Listrik",
      icon: "power",
      tone: "amber",
      head: "M. Arya Tsani",
      fields: [
        {
          name: "Konversi Energi",
          members: [{ name: "Kevin Jonathan" }, { name: "M. Rafi Hasbi" }],
        },
        {
          name: "Tenaga Listrik",
          members: [{ name: "Divia Permatasari" }],
        },
        {
          name: "Rangkaian Listrik",
          members: [{ name: "M. Rasyid Ridho" }, { name: "Dinar O" }],
        },
      ],
    },
    {
      id: "tki",
      name: "TKI",
      description: "Teknik Komputer dan Informasi",
      icon: "cpu",
      tone: "cyan",
      head: "Tasha Maulia S",
      fields: [
        {
          name: "Pemrograman",
          members: [{ name: "Rafi Azhar S" }],
        },
        {
          name: "Jaringan Komputer",
          members: [{ name: "Tsania Laeli A" }],
        },
        {
          name: "Sistem Mikroprosesor",
          members: [{ name: "Briliant Arfe K" }, { name: "Ikhsan Budi N" }],
        },
      ],
    },
    {
      id: "ttk",
      name: "TTK",
      description: "Teknik Telekomunikasi",
      icon: "antenna",
      tone: "blue",
      head: "Akha Faza S",
      fields: [
        {
          name: "Fisika",
          members: [{ name: "Raymondria W" }, { name: "Ramania Nur Alifa" }],
        },
        {
          name: "Teknik Digital",
          members: [{ name: "A.M Chandra" }],
        },
        {
          name: "Konsep Telekomunikasi",
          members: [{ name: "Galih Zufar M" }, { name: "Erland R.P" }],
        },
      ],
    },
    {
      id: "tik",
      name: "TIK",
      description: "Teknik Instrumentasi Kendali",
      icon: "sliders",
      tone: "mint",
      head: "Aulia Rahma P",
      fields: [
        {
          name: "Instrumentasi",
          members: [{ name: "Tegar Dwi Agung S" }],
        },
        {
          name: "Elektronika",
          members: [{ name: "Belva Surya B" }, { name: "Nadaa M.S" }],
        },
        {
          name: "Otomasi Industri",
          members: [{ name: "M. Ikhsan F" }],
        },
        {
          name: "Sistem Kendali",
          members: [{ name: "Arifin Ilham" }, { name: "M. Syhamsudin" }],
        },
      ],
    },
  ],
};

export function getMembers(): ManagementPeriodData {
  return MANAGEMENT_2026_DATA;
}

export function getMembers2026(): ManagementPeriodData {
  return MANAGEMENT_2026_DATA;
}

export function getArchive2025(): ManagementPeriodData {
  return ARCHIVE_2025_DATA;
}

export function getDivisionById(
  year: 2025 | 2026,
  id: string,
): OrgDivision | undefined {
  const source = year === 2025 ? ARCHIVE_2025_DATA : MANAGEMENT_2026_DATA;
  return source.divisions.find((division) => division.id === id);
}
