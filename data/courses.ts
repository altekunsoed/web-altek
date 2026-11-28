export type CourseTone = "blue" | "sky" | "amber" | "cyan" | "mint" | "rose";

export interface CourseModule {
  title: string;
  file: string;
  pdfUrl: string;
  badge?: string;
  subtitle?: string;
}

export interface CourseItem {
  semester: 1 | 2 | 3 | 4 | 5;
  name: string;
  slug: string;
  description: string;
  edition: string;
  labs: string[];
  tools: string[];
  topics: string[];
  icon: string;
  tone: CourseTone;
  file: string;
  pdfUrl: string;
  modules?: CourseModule[];
}

export type StarterpackType =
  | "drive"
  | "pdf"
  | "word"
  | "image"
  | "spreadsheet"
  | "slides"
  | "archive"
  | "video"
  | "website"
  | "other";

export interface StarterpackItem {
  title: string;
  type: StarterpackType;
  url: string;
  downloadUrl?: string;
  previewUrl?: string;
  fileName?: string;
  description?: string;
}

export interface CurrentSemesterInfo {
  period: string;
  courses: CourseItem[];
}

export interface PolicySection {
  title: string;
  items: string[];
  rows?: [string, string][];
}

export type PolicyId = "praktikum" | "struktur-laporan" | "template-laporan";

export interface PolicyDocument {
  id: PolicyId;
  orderLabel: string;
  shortDesc: string;
  icon: string;
  tone: CourseTone;
  title: string;
  eyebrow: string;
  file: string;
  docxUrl: string;
  pdf: string;
  pdfUrl: string;
  intro: string;
  sections: PolicySection[];
  note: string;
}

export const COURSES_DATA: CourseItem[] = [
  {
    semester: 1,
    name: "Pemrograman",
    slug: "pemrograman",
    description:
      "Dasar pemrograman prosedural, struktur data, dan OOP lintas bahasa (C/C++, Python 3, MATLAB/Octave, dan R) untuk menyelesaikan persoalan komputasi teknik.",
    edition: "Edisi 2025/2026 · 9 Unit",
    labs: ["Lab Komputer"],
    tools: ["C/C++", "Python 3", "MATLAB/Octave", "R"],
    topics: [
      "Unit 1–2: Tipe data, operator, ekspresi, serta percabangan (if, switch) di C/C++, Python, MATLAB/Octave, dan R.",
      "Unit 3–4: Perulangan (for, while), array, matriks, dan tipe data terstruktur (struct).",
      "Unit 5: Perancangan fungsi, prosedur, dan Abstract Data Type (ADT).",
      "Unit 6–7: Struktur data Python (list, tuple, set), rekursif, dan pemrograman berorientasi objek (OOP).",
      "Unit 8–9: Implementasi double linked list serta studi kasus Class Gerbong dan struktur data kereta api (lampiran kode C++ Unit 7 & 8 tersedia di tab Starterpack).",
    ],
    icon: "code",
    tone: "blue",
    file: "ModulPemrograman.pdf",
    pdfUrl: "/assets/praktikum/ModulPemrograman.pdf",
  },
  {
    semester: 2,
    name: "Fisika",
    slug: "fisika",
    description:
      "Eksperimen dasar fisika elektro meliputi pengukuran besaran listrik DC/AC, rangkaian seri-paralel, Hukum Faraday, transformator, motor DC, serta mekanika gaya dan usaha.",
    edition: "Edisi Februari 2026 · 8 Unit",
    labs: ["Lab Elektronika", "Lab Komputer"],
    tools: [
      "Alat Ukur DC/AC",
      "Transformator & Motor DC",
      "Simulasi Komputer",
    ],
    topics: [
      "Unit 1–2: Pengukuran tegangan, hambatan, arus listrik DC, dan pengukuran tegangan AC.",
      "Unit 3: Analisis karakteristik rangkaian listrik seri dan paralel.",
      "Unit 4–5: Induksi elektromagnetik (Hukum Faraday) dan prinsip kerja transformator.",
      "Unit 6: Pengujian prinsip kerja dan karakteristik motor DC.",
      "Unit 7–8: Eksperimen Force and motion serta Work done by a variable force.",
    ],
    icon: "atom",
    tone: "sky",
    file: "ModulFisika.pdf",
    pdfUrl: "/assets/praktikum/ModulFisika.pdf",
  },
  {
    semester: 3,
    name: "Rangkaian Listrik",
    slug: "rangkaian-listrik",
    description:
      "Eksperimen dan simulasi analisis rangkaian DC serta AC, mulai dari Hukum Ohm, Kirchhoff, teorema jaringan, respon transien, hingga resonansi dan filter RC.",
    edition: "Edisi 2019",
    labs: ["Lab Elektronika"],
    tools: [
      "Catu Daya DC/AC",
      "Multimeter & Osiloskop",
      "Komponen R, L, C & Trafo",
    ],
    topics: [
      "Rangkaian DC: Hukum Ohm, seri-paralel, Hukum Kirchhoff, superposisi, Thevenin & Norton, dan transfer energi maksimum.",
      "Respon transien rangkaian DC serta pengukuran tegangan AC.",
      "Analisis rangkaian AC: rangkaian RC, RL, RLC, energi AC, dan karakteristik transformator.",
      "Pengujian resonansi seri-paralel serta karakteristik dasar filter RC.",
    ],
    icon: "resistor",
    tone: "amber",
    file: "ModulRangkaianListrik.pdf",
    pdfUrl: "/assets/praktikum/ModulRangkaianListrik.pdf",
  },
  {
    semester: 3,
    name: "Konsep Telekomunikasi",
    slug: "konsep-telekomunikasi",
    description:
      "Simulasi sistem komunikasi analog, digital, serat optik, antena gelombang mikro, dan propagasi saluran radio berbasis komputasi numerik GNU Octave.",
    edition: "Edisi 2026 · 5 Unit",
    labs: ["Lab Komputer"],
    tools: [
      "GNU Octave",
      "Analisis Spektrum FFT",
      "Simulasi Eye Diagram & BER",
    ],
    topics: [
      "Unit 1: Modulasi dan demodulasi analog (AM, FM, PM) serta analisis spektrum FFT.",
      "Unit 2: Modulasi dan demodulasi digital (ASK, FSK, BPSK).",
      "Unit 3: Komunikasi serat optik (NA, V-number, LED vs laser, power budget, dispersi, PIN/APD, bending loss, eye diagram & BER).",
      "Unit 4: Antena dan polarisasi gelombang mikro (dipol λ/2, array antena, dan beam steering).",
      "Unit 5: Propagasi radio (FSPL, redaman hujan ITU-R, interferensi, zona Fresnel, dan multipath fading).",
    ],
    icon: "antenna",
    tone: "cyan",
    file: "ModulKonsepTelekomunikasi.pdf",
    pdfUrl: "/assets/praktikum/ModulKonsepTelekomunikasi.pdf",
  },
  {
    semester: 3,
    name: "Teknik Digital",
    slug: "teknik-digital",
    description:
      "Perancangan, pengujian hardware, dan simulasi sistem digital menggunakan IC TTL/CMOS, gerbang logika, rangkaian kombinasional, flip-flop, counter, dan ALU.",
    edition: "Edisi 2022 · 4 Unit",
    labs: ["Lab Sistem Kendali"],
    tools: [
      "Trainer ADT-103 YK / KL300",
      "IC TTL/CMOS (74LS190, 74181)",
      "Proteus",
    ],
    topics: [
      "Unit 1: Pengenalan IC TTL/CMOS, logika dasar, sistem bilangan, threshold tegangan, dan delay transmisi.",
      "Unit 2: Rangkaian enkoder, dekoder, multiplexer (MUX), dan demultiplexer (DEMUX).",
      "Unit 3: Rangkaian sekuensial — flip-flop (NAND/NOR, D, JK) dan counter 4-bit / BCD 74LS190.",
      "Unit 4: Rangkaian kombinasional aritmetika (komparator, half/full adder, subtractor, ALU 74181) serta simulasi Proteus.",
    ],
    icon: "binary",
    tone: "sky",
    file: "ModulTeknikDigital.pdf",
    pdfUrl: "/assets/praktikum/ModulTeknikDigital.pdf",
  },
  {
    semester: 4,
    name: "Elektronika",
    slug: "elektronika",
    description:
      "Pengujian komponen semikonduktor dan rangkaian analog menggunakan osiloskop digital serta trainer KL-200, mencakup transistor BJT, FET, hingga aplikasi op-amp.",
    edition: "Edisi 2020 · 5 Unit",
    labs: ["Lab Elektronika"],
    tools: ["Osiloskop Digital", "Trainer KL-200", "Transistor BJT, FET & Op-Amp"],
    topics: [
      "Unit 1: Pengoperasian osiloskop digital, trainer KL-200, serta pengenalan komponen dan alat ukur.",
      "Unit 2: Karakteristik dan aplikasi transistor sebagai penguat (amplifier) dan saklar.",
      "Unit 3: Perancangan dan pengujian rangkaian FET amplifier.",
      "Unit 4: Pengukuran karakteristik dasar operational amplifier (op-amp).",
      "Unit 5: Implementasi dan pengujian berbagai aplikasi rangkaian op-amp.",
    ],
    icon: "opamp",
    tone: "blue",
    file: "ModulElektronika.pdf",
    pdfUrl: "/assets/praktikum/ModulElektronika.pdf",
  },
  {
    semester: 4,
    name: "Konversi Energi",
    slug: "konversi-energi",
    description:
      "Pengujian karakteristik mesin-mesin listrik dan transformator, mencakup generator sinkron, motor induksi 1 fasa dan 3 fasa, serta pengujian dan hubungan trafo 1 & 3 fasa.",
    edition: "Edisi 2026 · 9 Unit",
    labs: ["Lab Konversi Energi"],
    tools: [
      "Generator Sinkron",
      "Motor Induksi 1 & 3 Fasa",
      "Transformator 1 & 3 Fasa",
      "PSIM",
    ],
    topics: [
      "Karakteristik generator sinkron (beban linear/nonlinear serta hubungan torsi, kecepatan, dan daya).",
      "Motor induksi 1 fasa capacitor start (operasi forward/reverse) dan motor induksi 3 fasa sangkar tupai (bintang/segitiga).",
      "Pengujian transformator 1 fasa: beban nol, hubung singkat, pembebanan, dan polaritas (termasuk simulasi PSIM).",
      "Konfigurasi hubungan transformator 3 fasa: Y-Y, Y-Δ, Δ-Y, dan Δ-Δ.",
    ],
    icon: "battery",
    tone: "mint",
    file: "ModulKonversiEnergi.pdf",
    pdfUrl: "/assets/praktikum/ModulKonversiEnergi.pdf",
  },
  {
    semester: 4,
    name: "Instrumentasi",
    slug: "instrumentasi",
    description:
      "Akuisisi data sensor, konversi sinyal ADC/DAC, kendali aktuator, antarmuka tampilan, hingga pemantauan IoT berbasis Arduino UNO dan NodeMCU ESP8266.",
    edition: "Edisi 2020 · 10 Unit",
    labs: ["Lab Sistem Kendali"],
    tools: ["Arduino UNO", "NodeMCU ESP8266", "Blynk IoT", "Sensor & Aktuator"],
    topics: [
      "Unit 1–3: I/O analog-digital, ADC/DAC (R-2R), sensor air/api/gas MQ2, serta sensor suhu & kelembapan (DS18B20, DHT11, LM35).",
      "Unit 4–6: Switch mekanik & joystick, sensor optik (LDR, IR), sensor ultrasonik, dan mikrofon.",
      "Unit 7–8: Kendali motor servo & stepper, serta antarmuka LCD 16×2 I2C dan seven segment.",
      "Unit 9–10: Modul RFID & relay, hingga pemantauan IoT berbasis NodeMCU ESP8266 dan Blynk.",
    ],
    icon: "gauge",
    tone: "cyan",
    file: "ModulPraktikumInstrumentasi.pdf",
    pdfUrl: "/assets/praktikum/ModulPraktikumInstrumentasi.pdf",
  },
  {
    semester: 5,
    name: "Sistem Kendali",
    slug: "sistem-kendali",
    description:
      "Pemodelan sistem fisik dan analisis respon kendali menggunakan perangkat Analog Control System ACS-1000 serta simulasi kontrol proses pada MATLAB Simulink.",
    edition: "Edisi 2013 · 5 Eksperimen",
    labs: ["Lab Sistem Kendali", "Lab Konversi Energi", "Lab Komputer"],
    tools: [
      "Analog Control System ACS-1000",
      "MATLAB Simulink",
      "Model Pegas-Massa-Damper",
    ],
    topics: [
      "Eksperimen 1: Pemodelan sistem fisik (pegas-massa-damper) dan simulasi respon sistem.",
      "Eksperimen 2: Analisis kesalahan keadaan tunak (steady-state error).",
      "Eksperimen 3: Pengamatan ragam kontrol dasar pada sistem kendali analog.",
      "Eksperimen 4: Pengujian konfigurasi kontrol grid.",
      "Eksperimen 5: Simulasi sistem kontrol proses menggunakan MATLAB Simulink.",
    ],
    icon: "sliders",
    tone: "blue",
    file: "ModulSistemKendali.pdf",
    pdfUrl: "/assets/praktikum/ModulSistemKendali.pdf",
  },
  {
    semester: 5,
    name: "Sistem Mikroprosesor",
    slug: "sistem-mikroprosesor",
    description:
      "Pemrograman bahasa Assembly pada mikrokontroler AVR dan 8051 untuk antarmuka perangkat input/output digital, keypad, tampilan seven segment, serta timer dan counter.",
    edition: "Edisi 2014",
    labs: ["Lab Telekomunikasi"],
    tools: [
      "Bahasa Assembly",
      "Mikrokontroler AVR & 8051",
      "Downloader USB ASP",
    ],
    topics: [
      "Dasar arsitektur dan pemrograman bahasa Assembly mikrokontroler (AVR & 8051) dengan downloader USB ASP.",
      "Antarmuka output digital: kendali deret LED dan tampilan seven segment.",
      "Antarmuka input digital: pembacaan saklar push button dan pemindaian keypad matriks 4×4.",
      "Konfigurasi dan aplikasi timer serta counter internal mikrokontroler.",
    ],
    icon: "cpu",
    tone: "sky",
    file: "ModulSistemMikroprosesor.pdf",
    pdfUrl: "/assets/praktikum/ModulSistemMikroprosesor.pdf",
  },
  {
    semester: 5,
    name: "Jaringan Komputer",
    slug: "jaringan-komputer",
    description:
      "Instalasi, konfigurasi, dan pengujian jaringan kabel serta nirkabel berbasis Linux, mencakup pengalamatan IP, DHCP, routing, NAT, firewall, hingga SDN.",
    edition: "Edisi Oktober 2024 (v8.3)",
    labs: ["Lab Komputer"],
    tools: [
      "Sistem Operasi Linux",
      "Router & Access Point",
      "DHCP, NAT, Firewall & SDN",
    ],
    topics: [
      "Instalasi dan pengujian jaringan kabel (IP dinamik/statik) serta nirkabel (wireless + DHCP).",
      "Pengoperasian dan administrasi jaringan menggunakan sistem operasi Linux.",
      "Pembangunan dan pengujian perutean (routing) antarsegmen jaringan.",
      "Konfigurasi Network Address Translation (NAT), firewall, dan pengenalan Software-Defined Networking (SDN).",
    ],
    icon: "network",
    tone: "cyan",
    file: "ModulJaringanKomputer.pdf",
    pdfUrl: "/assets/praktikum/ModulJaringanKomputer.pdf",
  },
  {
    semester: 5,
    name: "Otomasi Industri",
    slug: "otomasi-industri",
    description:
      "Perancangan dan pemrograman sistem otomasi industri mencakup PLC Siemens S7-300 (Simatic Manager), PLC Omron CP1E-N20 (CX-Programmer), antarmuka HMI Haiwell (C7S & B7H), protokol Modbus, hingga monitoring CloudSCADA.",
    edition: "3 Berkas Modul (2014 & Terbaru)",
    labs: ["Lab Otomasi Industri"],
    tools: [
      "PLC Siemens S7-300 & Simatic Manager",
      "PLC Omron CP1E-N20 & CX-Programmer",
      "HMI Haiwell C7S & B7H",
      "Haiwell Cloud SCADA & Modbus RTU/ASCII",
    ],
    topics: [
      "Modul Induk (Edisi 2014 · Unit 1–5): Pengenalan Simatic Manager, aplikasi & pemrograman PLC Siemens S7-300, discrete I/O handshaking, logika start/stop sistem, dan FMS Programming.",
      "Unit 2 Terbaru: Aplikasi dan pemrograman PLC Omron CP1E-N20 menggunakan CX-Programmer & CX-Simulator (studi kasus Lampu Lalu Lintas otomatis dengan timer TIM).",
      "Unit 3 Terbaru: Aplikasi dan pemrograman HMI Haiwell C7S menggunakan Haiwell Cloud Scada Develop terhubung ke PLC Omron CP1E (studi kasus Lampu Lalu Lintas 2 Simpang).",
      "Unit 4 Terbaru: Monitoring suhu dan kelembapan berbasis HMI Haiwell B7H & CloudSCADA memakai protokol Modbus Master (RTU/ASCII), sinkronisasi cloud.haiwell.com / Haiwell Link, serta kendali switch fisik dan virtual.",
    ],
    icon: "factory",
    tone: "amber",
    file: "ModulOtomasiIndustri.pdf",
    pdfUrl: "/assets/praktikum/ModulOtomasiIndustri.pdf",
    modules: [
      {
        title: "Modul Praktikum Otomasi Industri (Unit 1–5 · PLC S7-300)",
        file: "ModulOtomasiIndustri.pdf",
        pdfUrl: "/assets/praktikum/ModulOtomasiIndustri.pdf",
        badge: "MODUL UTAMA · EDISI 2014",
        subtitle:
          "Simatic Manager Step 7, PLC Siemens S7-300, discrete I/O handshaking, start/stop system, dan FMS Programming.",
      },
      {
        title:
          "Modul Otomasi Industri — Unit 2 & 3 Terbaru (PLC Omron CP1E & HMI Haiwell C7S)",
        file: "ModulOtomasiIndustri_Unit2dan3.pdf",
        pdfUrl: "/assets/praktikum/ModulOtomasiIndustri_Unit2dan3.pdf",
        badge: "MODUL TAMBAHAN · UNIT 2 & 3",
        subtitle:
          "Pemrograman PLC Omron CP1E-N20 (CX-Programmer/CX-Simulator) & HMI Haiwell C7S untuk sistem Lampu Lalu Lintas 2 Simpang.",
      },
      {
        title:
          "Modul Otomasi Industri — Unit 4 Terbaru (HMI Haiwell B7H & CloudSCADA)",
        file: "ModulOtomasiIndustri_Unit4.pdf",
        pdfUrl: "/assets/praktikum/ModulOtomasiIndustri_Unit4.pdf",
        badge: "MODUL TAMBAHAN · UNIT 4",
        subtitle:
          "Monitoring suhu & kelembapan berbasis HMI Haiwell B7H, CloudSCADA, protokol Modbus Master (RTU/ASCII), dan Haiwell Link.",
      },
    ],
  },
  {
    semester: 5,
    name: "Tenaga Listrik",
    slug: "tenaga-listrik",
    description:
      "Eksperimen elektronika daya dan analisis sistem tenaga listrik, mulai dari penyearah dioda/thyristor, kendali TRIAC, aliran daya, gangguan hubung singkat, hingga inverter.",
    edition: "9 Unit",
    labs: ["Lab Konversi Energi"],
    tools: [
      "Dioda, Thyristor & TRIAC",
      "Inverter 1 Fasa",
      "Analisis Aliran Daya & Hubung Singkat",
    ],
    topics: [
      "Penyearah 1 fasa: penyearah dioda, penyearah thyristor setengah gelombang, dan jembatan gelombang penuh.",
      "Pengontrolan tegangan AC menggunakan TRIAC dan thyristor antiparalel.",
      "Analisis sistem tenaga: aliran daya (load flow 1–3) dan analisis hubung singkat (short circuit analysis).",
      "Konversi DC-AC: pengujian rangkaian inverter 1 fasa half-bridge dan full-bridge.",
    ],
    icon: "plug",
    tone: "rose",
    file: "ModulTenagaListrik.pdf",
    pdfUrl: "/assets/praktikum/ModulTenagaListrik.pdf",
  },
];

export const STARTERPACK_RESOURCES: Record<string, StarterpackItem[]> = {
  pemrograman: [
    {
      title:
        "Lampiran Kode Sumber C++ — Unit 7 & 8 (Struktur Data Kereta Api)",
      type: "pdf",
      url: "/assets/starterpack/Pemrograman_KodeUnit7dan8.pdf",
      downloadUrl: "/assets/starterpack/Pemrograman_KodeUnit7dan8.pdf",
      fileName: "Pemrograman_KodeUnit7dan8.pdf",
      description:
        "Kode sumber resmi C++ untuk Unit 7 (Driverkereta.cpp, Gerbong.cpp, Gerbong.h) dan Unit 8 (Driverkereta.cpp, Gerbong.cpp, Gerbong.h, InfoKursi.h, Keretaapi.h, Lokomotif.h).",
    },
  ],
};

const CURRENT_SEMESTER_CONFIG = {
  period: "Semester Gasal 2026/2027",
  courseSlugs: [
    "pemrograman",
    "rangkaian-listrik",
    "konsep-telekomunikasi",
    "teknik-digital",
    "sistem-kendali",
    "sistem-mikroprosesor",
    "otomasi-industri",
    "tenaga-listrik",
  ],
} as const;

export const POLICY_DOCUMENTS: PolicyDocument[] = [
  {
    id: "praktikum",
    orderLabel: "01 · TATA TERTIB",
    shortDesc:
      "Kehadiran, perizinan, pretest, pelaksanaan, laporan, asistensi, post-test, dan laporan akhir.",
    icon: "clipboard",
    tone: "amber",
    title: "Aturan Praktikum Teknik Elektro",
    eyebrow: "TATA TERTIB · PELAKSANAAN PRAKTIKUM",
    file: "ATURAN PRAKTIKUM TEKNIK ELEKTRO 2026.docx",
    docxUrl: "/assets/aturan/ATURAN PRAKTIKUM TEKNIK ELEKTRO 2026.docx",
    pdf: "aturan-praktikum-teknik-elektro-2026.pdf",
    pdfUrl: "/assets/aturan/aturan-praktikum-teknik-elektro-2026.pdf",
    intro:
      "Pedoman ALTEK 2026 mengenai kehadiran, perizinan, pretest, kegiatan praktikum, laporan, asistensi, post-test, responsi tugas besar, dan laporan akhir.",
    sections: [
      {
        title: "Kehadiran",
        items: [
          "Hadir tepat waktu, maksimal 5 menit sebelum praktikum dimulai; berpakaian sopan dan rapi.",
          "Tidak membawa makanan/minuman atau merokok, kecuali bila menjadi komponen praktikum.",
          "Jurnal wajib dibuat sesuai ketentuan sebagai syarat mengikuti praktikum. Mulai pertemuan kedua, bawa laporan pertemuan sebelumnya yang telah di-ACC asisten kelompok.",
          "Tidak hadir tanpa keterangan mengakibatkan nilai seluruh komponen unit pada hari tersebut (pretest, praktikum, kedisiplinan, progress materi, laporan, dan asistensi) menjadi 0. Tanda tangani presensi asisten jaga dan jaga perilaku tetap kondusif.",
          "Untuk keterlambatan lebih dari 15 menit, nilai pretest unit menjadi 0. Dokumen juga menyebut praktikan masih dapat mengikuti praktikum, tetapi tidak mendapat nilai praktikum (0) dan tetap mengerjakan laporan serta asistensi. Untuk keterlambatan lebih dari 20 menit, praktikan tidak dapat mengikuti unit.",
        ],
      },
      {
        title: "Perizinan",
        items: [
          "Izin tidak dianjurkan kecuali mendesak. Bagian Perizinan menyebut kondisi: sakit yang mengharuskan rawat inap, acara keluarga, atau dispensasi UKM/lomba. Bagian Kehadiran juga menyebut sakit dengan surat dokter/izin orang tua dan kondisi keluarga atau kerabat meninggal.",
          "Minta izin kepada asisten dan koordinator asisten, lalu isi formulir perizinan dengan mengunggah surat pendukung.",
          "Surat sakit maksimal H+3 dan ditandatangani dokter/rumah sakit; surat izin keluarga maksimal H-1 dan ditandatangani mahasiswa serta orang tua; surat dispensasi maksimal H+3 dan ditandatangani pembina UKM atau dosen.",
          "Izin anggota keluarga inti yang meninggal tidak wajib disertai surat. Izin yang tidak memenuhi kriteria tetap dianggap absen dengan nilai 0.",
        ],
      },
      {
        title: "Pretest",
        items: [
          "Skema A: pretest tertulis sebelum praktikum, mencakup seluruh unit, durasi 60 menit.",
          "Skema B: pretest tertulis/lisan per unit, dilakukan 15 menit sebelum unit dimulai.",
          "Skema dan jumlah/bentuk soal mengikuti kebijakan asisten. Nilai maksimal 90; menyontek atau membuka HP/modul mendapat nilai minimum 0.",
          "Jawaban salah dan kosong dapat terkena pengurangan nilai berkelipatan sesuai pembobotan pretest.",
        ],
      },
      {
        title: "Praktikum dan laporan",
        items: [
          "Keaktifan: aktif bertanya dan terlibat; nilai acuan 85 untuk aktif dan 70 untuk pasif.",
          "Kedisiplinan dan progress materi dinilai dengan acuan 85 jika sesuai ketentuan dan 70 jika tidak sesuai.",
          "Laporan ditulis tangan sendiri, mengikuti format/outline, menyelesaikan note asisten, dan tidak menggunakan scan/fotokopi di luar lampiran.",
          "Pengurangan laporan: kesalahan format/struktur, analisis tidak lengkap atau note yang belum dikerjakan, dan jawaban tugas yang tidak sesuai masing-masing dapat mengurangi 7 poin dan berlaku kelipatan.",
          "Scan/fotokopi di luar lampiran, plagiasi lebih dari 80%, atau pemalsuan note berakibat nilai E pada unit terkait.",
        ],
      },
      {
        title: "Asistensi, post-test, dan tugas besar",
        items: [
          "Asistensi dilaksanakan H+5 setelah praktikum; waktu/tempat disepakati asisten dan praktikan. Progress laporan minimal 80%.",
          "Praktikan wajib hadir kecuali berhalangan, aktif menjawab/bertanya, dan membawa laporan unit sebelumnya untuk dimasukkan nilainya. Nilai asistensi: sesuai ketentuan 85; lebih dari H+5 mendapat 70; tidak asistensi mendapat 0 dan laporan tidak dapat dinilai pada praktikum berikutnya.",
          "Post-test mengikuti ketentuan asisten, nilai maksimal 100. Menyontek mendapat 0; jawaban salah/kosong dan perilaku tidak kondusif dapat mengurangi nilai.",
          "Jika ada responsi tugas besar: nilai maksimal 85; pertanyaan dapat berupa 2–5 soal tertulis/lisan. Tidak dapat menjelaskan atau menjawab mengurangi 10 poin per kejadian sesuai ketentuan.",
        ],
      },
      {
        title: "Laporan akhir",
        items: [
          "Laporan akhir dijilid dengan cover dan ketentuan yang disediakan ALTEK.",
          "Pengumpulan mengikuti waktu dan tempat yang ditetapkan koordinator praktikum.",
          "Jika terdapat kesalahan, praktikan wajib memperbaiki dan mengumpulkan kembali dalam batas waktu yang ditentukan; pengurangan nilai tetap berlaku.",
        ],
      },
    ],
    note: "Dokumen ditetapkan sebagai pedoman ALTEK 2026 per 25 Januari 2026. Ada dua bagian dengan redaksi izin yang berbeda serta ketentuan keterlambatan >15 menit dan >20 menit yang bertumpang tindih; konfirmasi kepada koordinator/PJ diperlukan untuk memastikan penerapan aturan.",
  },
  {
    id: "struktur-laporan",
    orderLabel: "02 · PEDOMAN PENULISAN",
    shortDesc:
      "Format jurnal, teori, data pengamatan, assessment, kesimpulan, referensi, dan lampiran.",
    icon: "file",
    tone: "blue",
    title: "Aturan Struktur Laporan Praktikum",
    eyebrow: "FORMAT PENULISAN · LAPORAN",
    file: "ATURAN LAPORAN TEKNIK ELEKTRO 2026.docx",
    docxUrl: "/assets/aturan/ATURAN LAPORAN TEKNIK ELEKTRO 2026.docx",
    pdf: "aturan-struktur-laporan-praktikum-2026.pdf",
    pdfUrl: "/assets/aturan/aturan-struktur-laporan-praktikum-2026.pdf",
    intro:
      "Pedoman struktur laporan praktikum Teknik Elektro UNSOED yang ditetapkan ALTEK 2026.",
    sections: [
      {
        title: "Format umum dan jurnal",
        items: [
          "Gunakan kertas A4S dengan keterangan margin (3322) sesuai dokumen.",
          "Jurnal memuat Sub-Unit I.1 sampai I.2. Setiap pergantian sub-unit menggunakan lembar baru, kecuali pergantian subbagian pada I.1 Dasar Teori boleh dilanjutkan di bawahnya.",
          "Laporan mencakup jurnal sampai lampiran. Bagian jurnal ditulis dengan tinta biru; penomoran tidak menggunakan simbol/bullet.",
          "Judul unit ditulis di tengah dan menggunakan huruf kapital.",
        ],
      },
      {
        title: "I.1 Dasar Teori dan I.2 Alat dan Bahan",
        items: [
          "Dasar teori umum mengikuti outline dan berisi minimal 2 halaman penuh, maksimal 3 halaman. Subdasar teori khusus ditulis pada I.1.1 dan seterusnya.",
          "Gambar teori diletakkan di tengah, caption di bawah dan di tengah, serta diberi nomor menurut unit dan urutan gambar.",
          "Rumus ditulis di tengah dengan nomor unit dan urutan rumus; keterangan rumus ditulis di kiri. Dasar teori, gambar, dan rumus teori menggunakan tinta biru.",
          "Alat dan bahan mencakup seluruh percobaan dalam unit, diurutkan menggunakan nomor dan ditulis dengan tinta biru.",
        ],
      },
      {
        title: "I.3 Data Pengamatan",
        items: [
          "Data/informasi/tabel/gambar hasil pengamatan ditulis dengan tinta hitam, kecuali gambar/grafik/sinyal yang mengikuti ketentuan tinta biru.",
          "Caption tabel berada di atas sebelah kiri; tabel diletakkan di sebelah kiri dan penomorannya mengikuti unit serta urutan tabel.",
          "Gambar diletakkan di tengah dengan caption di bawah dan di tengah. Grafik atau sinyal digambar menggunakan milimeter blok.",
          "Gambar atau rumus yang sudah tercantum di subbab sebelumnya tidak wajib diulang; gunakan nomor yang sama. Hasil scan/fotokopi tidak diperbolehkan.",
        ],
      },
      {
        title: "I.4 Assessment dan I.5 Kesimpulan",
        items: [
          "Assessment ditulis dengan tinta hitam dan merepresentasikan seluruh percobaan. Jelaskan data pengamatan, bandingkan dengan teori, sertakan perhitungan manual dan persentase kesalahan bila ada.",
          "Subbab assessment minimal ¾ halaman. Pertanyaan assessment berikutnya dilanjutkan pada halaman berbeda; detail spesifik disampaikan asisten.",
          "Kesimpulan berisi minimal 3 dan maksimal 5 poin, bukan paragraf atau definisi, dan mengacu pada tujuan praktikum. Gunakan tinta hitam.",
        ],
      },
      {
        title: "Daftar pustaka dan lampiran",
        items: [
          "Daftar pustaka mengikuti format IEEE, dapat menggunakan Mendeley/Zotero, minimal 3 sumber, selain Wikipedia dan Blogspot.",
          "Lampiran diurutkan dengan gambar percobaan terlebih dahulu, lalu datasheet. Setiap gambar diberi caption.",
          "Caption lampiran ditulis di kiri atas gambar menggunakan tinta hitam. Datasheet harus terbaca jelas.",
        ],
      },
    ],
    note: "Dokumen ditetapkan ALTEK 2026 per 25 Januari 2026 dan ditandatangani Ketua Aliansi Laboratorium Teknik Elektro, Dinar Oktaviano.",
  },
  {
    id: "template-laporan",
    orderLabel: "03 · TEMPLATE",
    shortDesc:
      "Contoh cover, identitas praktikan, susunan unit, daftar pustaka, dan lampiran.",
    icon: "file-pdf",
    tone: "sky",
    title: "Template Laporan Unit Praktikum",
    eyebrow: "TEMPLATE · JURNAL & ASSESSMENT",
    file: "Format Laporan Assessment 2026.docx",
    docxUrl: "/assets/aturan/Format Laporan Assessment 2026.docx",
    pdf: "template-laporan-unit-praktikum-2026.pdf",
    pdfUrl: "/assets/aturan/template-laporan-unit-praktikum-2026.pdf",
    intro:
      "Contoh susunan halaman laporan unit praktikum, mulai dari cover, isi unit, daftar pustaka, hingga lampiran.",
    sections: [
      {
        title: "Identitas pada cover",
        items: [
          "Nama dan NIM praktikan.",
          "Unit praktikum.",
          "Hari/tanggal dan jam pelaksanaan.",
          "Asisten kelompok dan asisten jaga.",
          "Identitas institusi: Universitas Jenderal Soedirman, Fakultas Teknik, Jurusan/Program Studi Teknik Elektro, Purbalingga, 2026.",
        ],
      },
      {
        title: "Susunan isi laporan",
        items: [
          "UNIT I dan judul praktikum.",
          "I.1 Dasar Teori beserta subbagian I.1.1 dan seterusnya.",
          "I.2 Alat dan Bahan.",
          "I.3 Data Pengamatan beserta tabel dan gambar.",
          "I.4 Assessment berisi pertanyaan dan jawaban.",
          "I.5 Kesimpulan, Daftar Pustaka, dan Lampiran.",
        ],
      },
      {
        title: "Daftar pustaka dan lampiran",
        items: [
          "Template mencantumkan minimal 3 daftar pustaka selain Wikipedia dengan format IEEE.",
          "Lampiran memuat foto rangkaian/percobaan dan datasheet.",
          "Lampiran diurutkan berdasarkan gambar percobaan, kemudian gambar datasheet; datasheet harus terbaca jelas.",
        ],
      },
    ],
    note: "Template laporan dapat disesuaikan dengan mata kuliah dan unit praktikum.",
  },
];

export function getCourses(): CourseItem[] {
  return COURSES_DATA;
}

export function getCourseBySlug(slug: string): CourseItem | undefined {
  return COURSES_DATA.find((course) => course.slug === slug);
}

export function getCoursesBySemester(
  semester: number | "all",
): CourseItem[] {
  if (semester === "all") return COURSES_DATA;
  return COURSES_DATA.filter((course) => course.semester === semester);
}

export function getCourseModules(course: CourseItem): CourseModule[] {
  if (Array.isArray(course.modules) && course.modules.length > 0) {
    return course.modules;
  }
  if (course.file) {
    return [
      {
        title: `Modul Praktikum ${course.name}`,
        file: course.file,
        pdfUrl: course.pdfUrl,
        badge: `SEMESTER ${course.semester} · PDF RESMI${course.edition ? ` · ${course.edition}` : ""}`,
        subtitle: "",
      },
    ];
  }
  return [];
}

export function getAllCourseModules(): Array<
  CourseModule & {
    semester: CourseItem["semester"];
    courseName: string;
    courseSlug: string;
    isExtra: boolean;
  }
> {
  return COURSES_DATA.flatMap((course) =>
    getCourseModules(course).map((mod, idx) => ({
      ...mod,
      semester: course.semester,
      courseName: course.name,
      courseSlug: course.slug,
      isExtra: idx > 0,
    })),
  );
}

export function getCourseStarterpack(slug: string): StarterpackItem[] {
  return STARTERPACK_RESOURCES[slug] ?? [];
}

export function getCurrentSemester(): CurrentSemesterInfo {
  const bySlug = new Map(getCourses().map((course) => [course.slug, course]));
  const courses = CURRENT_SEMESTER_CONFIG.courseSlugs
    .map((slug) => bySlug.get(slug))
    .filter((course): course is CourseItem => course !== undefined);

  return {
    period: CURRENT_SEMESTER_CONFIG.period,
    courses,
  };
}

export function getPolicies(): PolicyDocument[] {
  return POLICY_DOCUMENTS;
}

export function getPolicyById(id: string): PolicyDocument | undefined {
  return POLICY_DOCUMENTS.find((policy) => policy.id === id);
}
