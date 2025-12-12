import { 
  Users, 
  Zap, 
  Monitor, 
  Radio, 
  Gauge,
  ShieldCheck,
  LucideIcon
} from "lucide-react";

export interface TeamMember {
  name: string;
  role: string;
}

export interface Division {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  members: TeamMember[];
}

export const aboutContent = {
  title: "Tentang ALTEK",
  description: "ALTEK (Aliansi Laboratorium Teknik Elektro) merupakan pusat koordinasi seluruh kegiatan laboratorium di Teknik Elektro Universitas Jenderal Soedirman. Kami hadir untuk memastikan kelancaran operasional praktikum serta memajukan kompetensi teknis melalui pendampingan yang profesional.",
};

export const boardMembers: TeamMember[] = [
  { name: "Rizki Anugrah Putra", role: "Ketua" },
  { name: "Pia Kusuma Wardani", role: "Sekretaris" },
  { name: "Riz'q Amelia", role: "Bendahara" },
];

export const divisions: Division[] = [
  {
    id: "bph",
    name: "BPH",
    description: "Badan Pengurus Harian",
    icon: ShieldCheck,
    members: boardMembers,
  },
  {
    id: "humkominfo",
    name: "Humkominfo",
    description: "Komunikasi dan Media",
    icon: Users,
    members: [
      { name: "Afan Nurwalidaen", role: "Kadiv" },
      { name: "Dika A", role: "Medsos dan Humas" },
      { name: "Satria Army Putra", role: "Medsos dan Humas" },
      { name: "M. Rivqi Al Varras", role: "Web" },
      { name: "Bagus Satria Bima", role: "Web" },
    ],
  },
  {
    id: "ttl",
    name: "TTL",
    description: "Teknik Tenaga Listrik",
    icon: Zap,
    members: [
      { name: "M. Arya Tsani", role: "Kadiv" },
      { name: "Kevin Jonathan", role: "Konversi Energi" },
      { name: "M. Rafi Hasbi", role: "Konversi Energi" },
      { name: "Divia Permatasari", role: "Tenaga Listrik" },
      { name: "M. Rasyid Ridho", role: "Rangkaian Listrik" },
      { name: "Dinar O", role: "Rangkaian Listrik" },
    ],
  },
  {
    id: "tki",
    name: "TKI",
    description: "Teknik Komputer & Informasi",
    icon: Monitor,
    members: [
      { name: "Tasha Maulia S", role: "Kadiv" },
      { name: "Rafi Azhar S", role: "Pemrograman" },
      { name: "Tsania Laeli A", role: "Jaringan Komputer" },
      { name: "Briliant Arfe K", role: "Sistem Mikroprosesor" },
      { name: "Ikhsan Budi N", role: "Sistem Mikroprosesor" },
    ],
  },
  {
    id: "ttk",
    name: "TTK",
    description: "Teknik Telekomunikasi",
    icon: Radio,
    members: [
      { name: "Akha Faza S", role: "Kadiv" },
      { name: "Raymondria W", role: "Fisika" },
      { name: "Ramania Nur Alifa", role: "Fisika" },
      { name: "A.M Chandra", role: "Teknik Digital" },
      { name: "Galih Zufar M", role: "Konsep Telekomunikasi" },
      { name: "Erland R.P", role: "Konsep Telekomunikasi" },
    ],
  },
  {
    id: "tik",
    name: "TIK",
    description: "Teknik Instrumentasi Kendali",
    icon: Gauge,
    members: [
      { name: "Aulia Rahma P", role: "Kadiv" },
      { name: "Tegar Dwi Agung S", role: "Instrumentasi" },
      { name: "Belva Surya B", role: "Elektronika" },
      { name: "Nadaa M.S", role: "Elektronika" },
      { name: "M. Ikhsan F", role: "Otomasi Industri" },
      { name: "Arifin Ilham", role: "Sistem Kendali" },
      { name: "M. Syhamsudin", role: "Sistem Kendali" },
    ],
  },
];
