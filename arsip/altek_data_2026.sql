-- Dihasilkan otomatis oleh scripts/ekspor-sql.ts dari data/*.ts.
-- Jangan diedit manual: ubah data/*.ts lalu jalankan ulang skrip.
-- Situs ALTEK tidak membaca berkas ini; ini hanya arsip/bahan impor.

BEGIN;

DROP SCHEMA IF EXISTS altek CASCADE;
CREATE SCHEMA altek;
SET search_path TO altek;

CREATE TABLE course (
  slug TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  semester INTEGER NOT NULL,
  description TEXT NOT NULL,
  edition TEXT,
  icon TEXT,
  tone TEXT,
  pdf_url TEXT
);

CREATE TABLE course_module (
  id INTEGER PRIMARY KEY,
  course_slug TEXT NOT NULL REFERENCES course (slug),
  sort_order INTEGER NOT NULL,
  title TEXT NOT NULL,
  pdf_url TEXT NOT NULL
);

CREATE TABLE management_period (
  year INTEGER PRIMARY KEY
);

CREATE TABLE board_member (
  id INTEGER PRIMARY KEY,
  period_year INTEGER NOT NULL REFERENCES management_period (year),
  sort_order INTEGER NOT NULL,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  photo TEXT
);

CREATE TABLE division (
  period_year INTEGER NOT NULL REFERENCES management_period (year),
  id TEXT NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  head TEXT NOT NULL,
  head_photo TEXT,
  PRIMARY KEY (period_year, id)
);

CREATE TABLE division_field (
  id INTEGER PRIMARY KEY,
  period_year INTEGER NOT NULL,
  division_id TEXT NOT NULL,
  sort_order INTEGER NOT NULL,
  name TEXT NOT NULL,
  FOREIGN KEY (period_year, division_id) REFERENCES division (period_year, id)
);

CREATE TABLE division_member (
  id INTEGER PRIMARY KEY,
  field_id INTEGER NOT NULL REFERENCES division_field (id),
  sort_order INTEGER NOT NULL,
  name TEXT NOT NULL,
  photo TEXT
);

CREATE TABLE info_item (
  id TEXT PRIMARY KEY,
  category TEXT NOT NULL,
  date_label TEXT NOT NULL,
  short_date TEXT NOT NULL,
  title TEXT NOT NULL,
  image TEXT,
  excerpt TEXT,
  intro TEXT,
  note TEXT
);

CREATE TABLE info_detail (
  info_id TEXT NOT NULL REFERENCES info_item (id),
  sort_order INTEGER NOT NULL,
  label TEXT NOT NULL,
  value TEXT NOT NULL,
  PRIMARY KEY (info_id, sort_order)
);

CREATE TABLE info_link (
  info_id TEXT NOT NULL REFERENCES info_item (id),
  sort_order INTEGER NOT NULL,
  label TEXT NOT NULL,
  url TEXT NOT NULL,
  PRIMARY KEY (info_id, sort_order)
);

INSERT INTO course (slug, name, semester, description, edition, icon, tone, pdf_url) VALUES
  ('pemrograman', 'Pemrograman', 1, 'Dasar pemrograman prosedural, struktur data, dan OOP lintas bahasa (C/C++, Python 3, MATLAB/Octave, dan R) untuk menyelesaikan persoalan komputasi teknik.', 'Edisi 2025/2026 · 9 Unit', 'code', 'blue', '/assets/praktikum/ModulPemrograman.pdf'),
  ('fisika', 'Fisika', 2, 'Eksperimen dasar fisika elektro meliputi pengukuran besaran listrik DC/AC, rangkaian seri-paralel, Hukum Faraday, transformator, motor DC, serta mekanika gaya dan usaha.', 'Edisi Februari 2026 · 8 Unit', 'atom', 'sky', '/assets/praktikum/ModulFisika.pdf'),
  ('rangkaian-listrik', 'Rangkaian Listrik', 3, 'Eksperimen dan simulasi analisis rangkaian DC serta AC, mulai dari Hukum Ohm, Kirchhoff, teorema jaringan, respon transien, hingga resonansi dan filter RC.', 'Edisi 2019', 'resistor', 'amber', '/assets/praktikum/ModulRangkaianListrik.pdf'),
  ('konsep-telekomunikasi', 'Konsep Telekomunikasi', 3, 'Simulasi sistem komunikasi analog, digital, serat optik, antena gelombang mikro, dan propagasi saluran radio berbasis komputasi numerik GNU Octave.', 'Edisi 2026 · 5 Unit', 'antenna', 'cyan', '/assets/praktikum/ModulKonsepTelekomunikasi.pdf'),
  ('teknik-digital', 'Teknik Digital', 3, 'Perancangan, pengujian hardware, dan simulasi sistem digital menggunakan IC TTL/CMOS, gerbang logika, rangkaian kombinasional, flip-flop, counter, dan ALU.', 'Edisi 2022 · 4 Unit', 'binary', 'sky', '/assets/praktikum/ModulTeknikDigital.pdf'),
  ('elektronika', 'Elektronika', 4, 'Pengujian komponen semikonduktor dan rangkaian analog menggunakan osiloskop digital serta trainer KL-200, mencakup transistor BJT, FET, hingga aplikasi op-amp.', 'Edisi 2020 · 5 Unit', 'opamp', 'blue', '/assets/praktikum/ModulElektronika.pdf'),
  ('konversi-energi', 'Konversi Energi', 4, 'Pengujian karakteristik mesin-mesin listrik dan transformator, mencakup generator sinkron, motor induksi 1 fasa dan 3 fasa, serta pengujian dan hubungan trafo 1 & 3 fasa.', 'Edisi 2026 · 9 Unit', 'battery', 'mint', '/assets/praktikum/ModulKonversiEnergi.pdf'),
  ('instrumentasi', 'Instrumentasi', 4, 'Akuisisi data sensor, konversi sinyal ADC/DAC, kendali aktuator, antarmuka tampilan, hingga pemantauan IoT berbasis Arduino UNO dan NodeMCU ESP8266.', 'Edisi 2020 · 10 Unit', 'gauge', 'cyan', '/assets/praktikum/ModulPraktikumInstrumentasi.pdf'),
  ('sistem-kendali', 'Sistem Kendali', 5, 'Pemodelan sistem fisik dan analisis respon kendali menggunakan perangkat Analog Control System ACS-1000 serta simulasi kontrol proses pada MATLAB Simulink.', 'Edisi 2013 · 5 Eksperimen', 'sliders', 'blue', '/assets/praktikum/ModulSistemKendali.pdf'),
  ('sistem-mikroprosesor', 'Sistem Mikroprosesor', 5, 'Pemrograman bahasa Assembly pada mikrokontroler AVR dan 8051 untuk antarmuka perangkat input/output digital, keypad, tampilan seven segment, serta timer dan counter.', 'Edisi 2014', 'cpu', 'sky', '/assets/praktikum/ModulSistemMikroprosesor.pdf'),
  ('jaringan-komputer', 'Jaringan Komputer', 5, 'Instalasi, konfigurasi, dan pengujian jaringan kabel serta nirkabel berbasis Linux, mencakup pengalamatan IP, DHCP, routing, NAT, firewall, hingga SDN.', 'Edisi Oktober 2024 (v8.3)', 'network', 'cyan', '/assets/praktikum/ModulJaringanKomputer.pdf'),
  ('otomasi-industri', 'Otomasi Industri', 5, 'Perancangan dan pemrograman sistem otomasi industri mencakup PLC Siemens S7-300 (Simatic Manager), PLC Omron CP1E-N20 (CX-Programmer), antarmuka HMI Haiwell (C7S & B7H), protokol Modbus, hingga monitoring CloudSCADA.', '3 Berkas Modul (2014 & Terbaru)', 'factory', 'amber', '/assets/praktikum/ModulOtomasiIndustri.pdf'),
  ('tenaga-listrik', 'Tenaga Listrik', 5, 'Eksperimen elektronika daya dan analisis sistem tenaga listrik, mulai dari penyearah dioda/thyristor, kendali TRIAC, aliran daya, gangguan hubung singkat, hingga inverter.', '9 Unit', 'plug', 'rose', '/assets/praktikum/ModulTenagaListrik.pdf');

INSERT INTO course_module (id, course_slug, sort_order, title, pdf_url) VALUES
  (1, 'pemrograman', 1, 'Modul Praktikum Pemrograman', '/assets/praktikum/ModulPemrograman.pdf'),
  (2, 'fisika', 1, 'Modul Praktikum Fisika', '/assets/praktikum/ModulFisika.pdf'),
  (3, 'rangkaian-listrik', 1, 'Modul Praktikum Rangkaian Listrik', '/assets/praktikum/ModulRangkaianListrik.pdf'),
  (4, 'konsep-telekomunikasi', 1, 'Modul Praktikum Konsep Telekomunikasi', '/assets/praktikum/ModulKonsepTelekomunikasi.pdf'),
  (5, 'teknik-digital', 1, 'Modul Praktikum Teknik Digital', '/assets/praktikum/ModulTeknikDigital.pdf'),
  (6, 'elektronika', 1, 'Modul Praktikum Elektronika', '/assets/praktikum/ModulElektronika.pdf'),
  (7, 'konversi-energi', 1, 'Modul Praktikum Konversi Energi', '/assets/praktikum/ModulKonversiEnergi.pdf'),
  (8, 'instrumentasi', 1, 'Modul Praktikum Instrumentasi', '/assets/praktikum/ModulPraktikumInstrumentasi.pdf'),
  (9, 'sistem-kendali', 1, 'Modul Praktikum Sistem Kendali', '/assets/praktikum/ModulSistemKendali.pdf'),
  (10, 'sistem-mikroprosesor', 1, 'Modul Praktikum Sistem Mikroprosesor', '/assets/praktikum/ModulSistemMikroprosesor.pdf'),
  (11, 'jaringan-komputer', 1, 'Modul Praktikum Jaringan Komputer', '/assets/praktikum/ModulJaringanKomputer.pdf'),
  (12, 'otomasi-industri', 1, 'Modul Praktikum Otomasi Industri (Unit 1–5 · PLC S7-300)', '/assets/praktikum/ModulOtomasiIndustri.pdf'),
  (13, 'otomasi-industri', 2, 'Modul Otomasi Industri — Unit 2 & 3 Terbaru (PLC Omron CP1E & HMI Haiwell C7S)', '/assets/praktikum/ModulOtomasiIndustri_Unit2dan3.pdf'),
  (14, 'otomasi-industri', 3, 'Modul Otomasi Industri — Unit 4 Terbaru (HMI Haiwell B7H & CloudSCADA)', '/assets/praktikum/ModulOtomasiIndustri_Unit4.pdf'),
  (15, 'tenaga-listrik', 1, 'Modul Praktikum Tenaga Listrik', '/assets/praktikum/ModulTenagaListrik.pdf');

INSERT INTO management_period (year) VALUES
  (2025),
  (2026);

INSERT INTO board_member (id, period_year, sort_order, name, role, photo) VALUES
  (1, 2025, 1, 'Rizki Anugrah Putra', 'Ketua', NULL),
  (2, 2025, 2, 'Pia Kusuma Wardani', 'Sekretaris', NULL),
  (3, 2025, 3, 'Riz''q Amelia', 'Bendahara', NULL),
  (4, 2026, 1, 'Dinar Oktaviano', 'Ketua Umum', '/assets/members/BPH/Dinar Oktaviano_BPH.png'),
  (5, 2026, 2, 'Ramania Nur Alifa', 'Sekretaris', '/assets/members/BPH/Ramania Nur Alifa_BPH.jpg'),
  (6, 2026, 3, 'Khaerani Julieta F.', 'Bendahara', '/assets/members/BPH/Khaerani Julieta F_BPH.png');

INSERT INTO division (period_year, id, name, description, head, head_photo) VALUES
  (2025, 'humkominfo', 'Humkominfo', 'Komunikasi dan Media', 'Afan Nurwalidaen', NULL),
  (2025, 'ttl', 'TTL', 'Teknik Tenaga Listrik', 'M. Arya Tsani', NULL),
  (2025, 'tki', 'TKI', 'Teknik Komputer dan Informasi', 'Tasha Maulia S', NULL),
  (2025, 'ttk', 'TTK', 'Teknik Telekomunikasi', 'Akha Faza S', NULL),
  (2025, 'tik', 'TIK', 'Teknik Instrumentasi Kendali', 'Aulia Rahma P', NULL),
  (2026, 'tik', 'TIK', 'Teknik Instrumentasi Kendali', 'Ikhsan Budi Nugroho', '/assets/members/Divisi TIK/Ikhsan Budi_TIK.jpeg'),
  (2026, 'ttl', 'TTL', 'Teknik Tenaga Listrik', 'Raymondria Willy S.', '/assets/members/Divisi TTL/Raymondria_TTL.jpg'),
  (2026, 'ttk', 'TTK', 'Teknik Telekomunikasi', 'Erland Rachman Putra', '/assets/members/Divisi TTK/Erland Rachman Putra_TTK.png'),
  (2026, 'tki', 'TKI', 'Teknik Komputer dan Informasi', 'Tiara Dwiaryani Adila', '/assets/members/Divisi TKI/Tiara_TKI.jpg'),
  (2026, 'humkominfo', 'Humkominfo', 'Komunikasi dan Media', 'Dika Aditya Saputra', '/assets/members/HUMKOMINFO/Dika Aditya S_Humkominfo.png');

INSERT INTO division_field (id, period_year, division_id, sort_order, name) VALUES
  (1, 2025, 'humkominfo', 1, 'Medsos dan Humas'),
  (2, 2025, 'humkominfo', 2, 'Web'),
  (3, 2025, 'ttl', 1, 'Konversi Energi'),
  (4, 2025, 'ttl', 2, 'Tenaga Listrik'),
  (5, 2025, 'ttl', 3, 'Rangkaian Listrik'),
  (6, 2025, 'tki', 1, 'Pemrograman'),
  (7, 2025, 'tki', 2, 'Jaringan Komputer'),
  (8, 2025, 'tki', 3, 'Sistem Mikroprosesor'),
  (9, 2025, 'ttk', 1, 'Fisika'),
  (10, 2025, 'ttk', 2, 'Teknik Digital'),
  (11, 2025, 'ttk', 3, 'Konsep Telekomunikasi'),
  (12, 2025, 'tik', 1, 'Instrumentasi'),
  (13, 2025, 'tik', 2, 'Elektronika'),
  (14, 2025, 'tik', 3, 'Otomasi Industri'),
  (15, 2025, 'tik', 4, 'Sistem Kendali'),
  (16, 2026, 'tik', 1, 'Instrumentasi'),
  (17, 2026, 'tik', 2, 'Elektronika'),
  (18, 2026, 'tik', 3, 'Otomasi Industri'),
  (19, 2026, 'tik', 4, 'Sistem Kendali'),
  (20, 2026, 'ttl', 1, 'Konversi Energi'),
  (21, 2026, 'ttl', 2, 'Rangkaian Listrik'),
  (22, 2026, 'ttl', 3, 'Tenaga Listrik'),
  (23, 2026, 'ttk', 1, 'Fisika'),
  (24, 2026, 'ttk', 2, 'Teknik Digital'),
  (25, 2026, 'ttk', 3, 'Konsep Telekomunikasi'),
  (26, 2026, 'tki', 1, 'Pemrograman'),
  (27, 2026, 'tki', 2, 'Jaringan Komputer'),
  (28, 2026, 'tki', 3, 'Sistem Mikroprosesor'),
  (29, 2026, 'humkominfo', 1, 'Humas'),
  (30, 2026, 'humkominfo', 2, 'Media Kreatif'),
  (31, 2026, 'humkominfo', 3, 'WEB');

INSERT INTO division_member (id, field_id, sort_order, name, photo) VALUES
  (1, 1, 1, 'Dika A', NULL),
  (2, 1, 2, 'Satria Army Putra', NULL),
  (3, 2, 1, 'M. Rivqi Al Varras', NULL),
  (4, 2, 2, 'Bagus Satria Bima', NULL),
  (5, 3, 1, 'Kevin Jonathan', NULL),
  (6, 3, 2, 'M. Rafi Hasbi', NULL),
  (7, 4, 1, 'Divia Permatasari', NULL),
  (8, 5, 1, 'M. Rasyid Ridho', NULL),
  (9, 5, 2, 'Dinar O', NULL),
  (10, 6, 1, 'Rafi Azhar S', NULL),
  (11, 7, 1, 'Tsania Laeli A', NULL),
  (12, 8, 1, 'Briliant Arfe K', NULL),
  (13, 8, 2, 'Ikhsan Budi N', NULL),
  (14, 9, 1, 'Raymondria W', NULL),
  (15, 9, 2, 'Ramania Nur Alifa', NULL),
  (16, 10, 1, 'A.M Chandra', NULL),
  (17, 11, 1, 'Galih Zufar M', NULL),
  (18, 11, 2, 'Erland R.P', NULL),
  (19, 12, 1, 'Tegar Dwi Agung S', NULL),
  (20, 13, 1, 'Belva Surya B', NULL),
  (21, 13, 2, 'Nadaa M.S', NULL),
  (22, 14, 1, 'M. Ikhsan F', NULL),
  (23, 15, 1, 'Arifin Ilham', NULL),
  (24, 15, 2, 'M. Syhamsudin', NULL),
  (25, 16, 1, 'Raul Abrar Palmawanto', '/assets/members/Divisi TIK/Raul_TIK.JPG'),
  (26, 16, 2, 'Henkel Raditya', '/assets/members/Divisi TIK/Henkel Raditya_TIK.png'),
  (27, 17, 1, 'Noor Huda Ramadhani', '/assets/members/Divisi TIK/Dani_TIK.jpg'),
  (28, 17, 2, 'Julius Alfadi Mordrigo', '/assets/members/Divisi TIK/Julius Alfadi M_TIK.jpg'),
  (29, 18, 1, 'Denis Fajar Wicaksono', '/assets/members/Divisi TIK/Denis_TIK.jpg'),
  (30, 19, 1, 'Bayu Sugianda', '/assets/members/Divisi TIK/Bayu_TIK.jpg'),
  (31, 20, 1, 'Klara Rosalia Imelda', '/assets/members/Divisi TTL/klara_TTL.jpg'),
  (32, 21, 1, 'M. Fakhrul Arifin', '/assets/members/Divisi TTL/M. Fakhrul Arifin_TTL.jpg'),
  (33, 21, 2, 'M. Akbar Firmansyah', '/assets/members/Divisi TTL/M. Akbar_TTL.png'),
  (34, 22, 1, 'Naufal Dwi A.', '/assets/members/Divisi TTL/Naufal_dwi_TTL.png'),
  (35, 23, 1, 'Nabilla Putri Andini', '/assets/members/Divisi TTK/Nabilla Putri Andini_TTK.jpg'),
  (36, 23, 2, 'Hifayatun Anin', '/assets/members/Divisi TTK/Hifayatun Anin_TTK.jpg'),
  (37, 24, 1, 'Chandra Salim', '/assets/members/Divisi TTK/Chandra Salim_TTK.jpg'),
  (38, 25, 1, 'Alfin Yusril Husna', '/assets/members/Divisi TTK/Alfin Yusril Husna_TTK.png'),
  (39, 25, 2, 'Nashr Ardy Wahyono', '/assets/members/Divisi TTK/Nashr Ardy Wahyono_TTK.jpg'),
  (40, 26, 1, 'Probo Dwi Yulastono', '/assets/members/Divisi TKI/Probo Dwi Yulastono_TKI.png'),
  (41, 26, 2, 'Riyan', '/assets/members/Divisi TKI/Riyan_TKI.png'),
  (42, 27, 1, 'Dewi Sita Agustin', '/assets/members/Divisi TKI/Dewi_TKI.jpg'),
  (43, 28, 1, 'Helga Ramania H.', '/assets/members/Divisi TKI/Helga_TKI.jpg'),
  (44, 28, 2, 'Miko Renanda', '/assets/members/Divisi TKI/Miko_TKI.png'),
  (45, 29, 1, 'Dimas Raihan Anhar', '/assets/members/HUMKOMINFO/Dimas Raihan A_humkominfo.jpg'),
  (46, 29, 2, 'Kia Shadra Afiqa B.', '/assets/members/HUMKOMINFO/Kia Shadra_Humkominfo.jpg'),
  (47, 30, 1, 'Septi Aisya', '/assets/members/HUMKOMINFO/Septi_Humkominfo.JPG'),
  (48, 30, 2, 'Aprilia Tri Hapsari', '/assets/members/HUMKOMINFO/Aprilia_humkominfo.png'),
  (49, 31, 1, 'Fhalah Arinda Putra', '/assets/members/HUMKOMINFO/Fhalah Arinda Putra_HUMKOMINFO.jpg'),
  (50, 31, 2, 'Fadhilah Setyo', '/assets/members/HUMKOMINFO/Fadhilah S. Wibowo_Humkominfo.jpg');

INSERT INTO info_item (id, category, date_label, short_date, title, image, excerpt, intro, note) VALUES
  ('2026-11-26-otomasi', 'Praktikum', 'Kamis, 26 November 2026', '26 Nov 2026', 'Post-Test & Technical Meeting TUBES Praktikum Otomasi Industri', '/assets/informasi/2026-11-26_posttest-tm-tubes-otomasi-industri.jpg', 'Pelaksanaan Post-Test dan Technical Meeting Tugas Besar (TUBES) Praktikum Otomasi Industri pukul 18.30–21.00 WIB di Ruang E201 dan E202.', 'Diberitahukan kepada seluruh praktikan bahwa akan dilaksanakan kegiatan Post-Test dan Technical Meeting Tugas Besar (TUBES) Praktikum Otomasi Industri.', 'Seluruh praktikan diharapkan hadir tepat waktu dan mempersiapkan diri dengan baik.'),
  ('2026-11-25-tenaga-listrik', 'Praktikum', 'Rabu, 25 November 2026', '25 Nov 2026', 'Technical Meeting TUBES & Post-Test Praktikum Tenaga Listrik', '/assets/informasi/2026-11-25_tm-tubes-posttest-tenaga-listrik.jpg', 'Technical Meeting TUBES dan Post-Test Praktikum Tenaga Listrik pukul 18.00–21.00 WIB di Ruang E201, E202, dan E203.', 'Diberitahukan kepada seluruh praktikan Praktikum Tenaga Listrik bahwa akan dilaksanakan kegiatan Technical Meeting Tugas Besar (TUBES) dan Post-Test.', 'Praktikan dimohon hadir tepat waktu dan mengikuti kegiatan hingga selesai.'),
  ('2026-11-20-responsi-sismik', 'Praktikum', 'Jumat, 20 November 2026', '20 Nov 2026', 'Responsi Tugas Besar Praktikum Sistem Mikroprosesor', '/assets/informasi/2026-11-20_responsi-tubes-sistem-mikroprosesor.jpg', 'Pelaksanaan Responsi Tugas Besar (TUBES) Praktikum Sistem Mikroprosesor pukul 19.00–21.00 WIB di Ruang E101–E103.', 'Diberitahukan kepada seluruh praktikan Praktikum Sistem Mikroprosesor bahwa akan dilaksanakan Responsi Tugas Besar (TUBES).', 'Seluruh praktikan diharapkan hadir tepat waktu dan membawa kelengkapan Tugas Besar sesuai ketentuan.'),
  ('2026-11-13-posttest-telkom', 'Praktikum', 'Jumat, 13 November 2026', '13 Nov 2026', 'Post-Test Praktikum Konsep Telekomunikasi', '/assets/informasi/2026-11-13_posttest-konsep-telekomunikasi.jpg', 'Pelaksanaan Post-Test Praktikum Konsep Telekomunikasi mulai pukul 18.30 WIB di Ruang E101–E104.', 'Diberitahukan kepada seluruh praktikan Praktikum Konsep Telekomunikasi bahwa akan dilaksanakan kegiatan Post-Test.', 'Praktikan dimohon hadir tepat waktu dan mempersiapkan diri dengan baik.'),
  ('2026-11-05-sismik', 'Praktikum', 'Kamis, 5 November 2026', '5 Nov 2026', 'Technical Meeting TUBES & Post-Test Praktikum Sistem Mikroprosesor', '/assets/informasi/2026-11-05_tm-tubes-posttest-sistem-mikroprosesor.jpg', 'Technical Meeting TUBES & Post-Test Praktikum Sistem Mikroprosesor mulai pukul 18.30 WIB di Aula Gedung F.', 'Diberitahukan kepada seluruh praktikan bahwa akan dilaksanakan kegiatan Technical Meeting TUBES dan Post-Test Praktikum Sistem Mikroprosesor.', 'Seluruh praktikan diharapkan hadir tepat waktu dan mempersiapkan diri dengan baik.'),
  ('2026-10-23-tekdig', 'Praktikum', 'Jumat, 23 Oktober 2026', '23 Okt 2026', 'Technical Meeting TUBES & Post-Test Praktikum Teknik Digital', '/assets/informasi/2026-10-23_tm-tubes-posttest-teknik-digital.jpg', 'Technical Meeting TUBES & Post-Test Praktikum Teknik Digital pukul 18.30 WIB di Aula Gedung F.', 'Diinformasikan kepada seluruh praktikan bahwa akan dilaksanakan Technical Meeting Tugas Besar (TUBES) dan Post-Test Praktikum Teknik Digital.', 'Praktikan dimohon hadir tepat waktu dan mengikuti kegiatan sampai selesai.'),
  ('2026-10-17-tl', 'Praktikum', 'Sabtu, 17 Oktober 2026', '17 Okt 2026', 'Technical Meeting & Pre-Test Praktikum Tenaga Listrik', '/assets/informasi/2026-10-17_tm-pretest-tenaga-listrik.jpg', 'Technical Meeting & Pre-Test Praktikum Tenaga Listrik mulai pukul 16.00 WIB di Ruang E201, E202, dan E203.', 'Diinformasikan bahwa akan dilaksanakan Technical Meeting dan Pre-Test Praktikum Tenaga Listrik.', 'Praktikan dimohon hadir tepat waktu dan mengikuti kegiatan sampai selesai.'),
  ('2026-09-26-otomasi', 'Praktikum', 'Sabtu, 26 September 2026', '26 Sep 2026', 'Technical Meeting & Pre-Test Praktikum Otomasi Industri', '/assets/informasi/2026-09-26_tm-pretest-otomasi-industri.jpg', 'Technical Meeting & Pre-Test Praktikum Otomasi Industri secara daring via Google Meet pukul 20.00 WIB.', 'Diinformasikan bahwa akan dilaksanakan Technical Meeting dan Pre-Test Praktikum Otomasi Industri secara daring.', 'Praktikan dimohon hadir tepat waktu dan mengikuti kegiatan sampai selesai.'),
  ('2026-09-12-sisken', 'Praktikum', 'Sabtu, 12 September 2026', '12 Sep 2026', 'Technical Meeting & Pre-Test Praktikum Sistem Kendali', '/assets/informasi/2026-09-12_tm-pretest-sistem-kendali.jpg', 'Kegiatan wajib Technical Meeting & Pre-Test Praktikum Sistem Kendali pukul 17.00–19.00 WIB di Ruang E101–E103.', 'Technical Meeting dan Pre-Test Praktikum Sistem Kendali bersifat WAJIB bagi seluruh mahasiswa peserta praktikum untuk membahas teknis pelaksanaan sekaligus pelaksanaan pre-test.', 'Kehadiran bersifat wajib bagi seluruh praktikan Praktikum Sistem Kendali.'),
  ('2026-09-11-sismik', 'Praktikum', 'Jumat, 11 September 2026', '11 Sep 2026', 'Technical Meeting Praktikum Sistem Mikroprosesor', '/assets/informasi/2026-09-11_tm-sistem-mikroprosesor.jpg', 'Technical Meeting wajib Praktikum Sistem Mikroprosesor secara daring via Google Meet pukul 20.30 WIB.', 'Technical Meeting Praktikum Sistem Mikroprosesor bersifat WAJIB bagi seluruh mahasiswa peserta praktikum untuk membahas informasi dan teknis penting pelaksanaan praktikum.', 'Pastikan bergabung tepat waktu sebelum sesi penjelasan teknis dimulai.'),
  ('2026-09-11-telkom', 'Praktikum', 'Jumat, 11 September 2026', '11 Sep 2026', 'Technical Meeting & Pre-Test Praktikum Konsep Telekomunikasi', '/assets/informasi/2026-09-11_tm-pretest-konsep-telekomunikasi.jpg', 'Technical Meeting & Pre-Test Praktikum Konsep Telekomunikasi mulai pukul 18.00 WIB di Ruang E201–E204.', 'Diinformasikan kepada seluruh praktikan Praktikum Konsep Telekomunikasi bahwa akan dilaksanakan Technical Meeting dan Pre-Test.', 'Praktikan dimohon hadir tepat waktu dan mengikuti kegiatan sampai selesai.'),
  ('2026-09-05-tekdig', 'Praktikum', 'Sabtu, 5 September 2026', '5 Sep 2026', 'Technical Meeting & Pre-Test Praktikum Teknik Digital', '/assets/informasi/2026-09-05_tm-pretest-teknik-digital.jpg', 'Technical Meeting & Pre-Test Praktikum Teknik Digital mulai pukul 18.30 WIB di Ruang E303–E305.', 'Diinformasikan kepada seluruh praktikan Praktikum Teknik Digital bahwa akan dilaksanakan Technical Meeting dan Pre-Test.', 'Praktikan dimohon hadir tepat waktu dan mempersiapkan diri dengan baik.'),
  ('2026-08-28-pemrograman', 'Praktikum', 'Jumat, 28 Agustus 2026', '28 Agu 2026', 'Technical Meeting Praktikum Pemrograman', '/assets/informasi/2026-08-28_tm-pemrograman.jpg', 'Technical Meeting Praktikum Pemrograman bagi mahasiswa Teknik Elektro angkatan 2026 secara daring pukul 19.00 WIB.', 'Technical Meeting Praktikum Pemrograman membahas informasi dan teknis penting pelaksanaan praktikum bagi seluruh mahasiswa Teknik Elektro angkatan 2026.', 'Seluruh peserta praktikum angkatan 2026 diharapkan hadir tepat waktu.'),
  ('2026-08-27-rl', 'Praktikum', 'Kamis, 27 Agustus 2026', '27 Agu 2026', 'Technical Meeting Praktikum Rangkaian Listrik', '/assets/informasi/2026-08-27_tm-rangkaian-listrik.jpg', 'Technical Meeting Praktikum Rangkaian Listrik bagi mahasiswa angkatan 2025 secara daring via Google Meet pukul 19.00 WIB.', 'Technical Meeting Praktikum Rangkaian Listrik membahas berbagai informasi dan teknis penting pelaksanaan praktikum bagi mahasiswa Teknik Elektro angkatan 2025.', 'Seluruh praktikan diharapkan hadir dan mengikuti penjelasan teknis sampai selesai.'),
  ('2026-08-08-oprec-gasal', 'Rekrutmen', '8–10 Agustus 2026', '8–10 Agu 2026', 'Open Recruitment Asisten Praktikum Gasal 2026', '/assets/informasi/2026-08-08_oprec-asprak-gasal-2026.jpg', 'Pendaftaran Asisten Praktikum Semester Gasal 2026 dibuka untuk 8 praktikum Teknik Elektro UNSOED pada 8–10 Agustus 2026.', 'Open Recruitment Asisten Praktikum Semester Gasal 2026 dibuka bagi mahasiswa aktif Teknik Elektro UNSOED yang ingin berkontribusi langsung dalam pelaksanaan praktikum laboratorium.', 'Pendaftaran juga dapat diakses melalui QR Code yang tertera pada poster.'),
  ('2026-06-04-posttest-konversi', 'Praktikum', 'Kamis, 4 Juni 2026', '4 Jun 2026', 'Post-Test Praktikum Konversi Energi', '/assets/informasi/2026-06-04_posttest-konversi-energi.jpg', 'Pelaksanaan Post-Test Praktikum Konversi Energi mulai pukul 19.00 WIB di Ruang E201–E202.', 'Diberitahukan kepada seluruh praktikan Praktikum Konversi Energi bahwa akan dilaksanakan kegiatan Post-Test.', 'Seluruh praktikan diharapkan hadir tepat waktu dan mempersiapkan diri sebaik-baiknya.'),
  ('2026-05-22-evaluasi-asprak', 'Evaluasi & Layanan', '22 Mei 2026', '22 Mei 2026', 'Evaluasi Praktikum: Form Penilaian Asisten & Aspirasi ALTEK', '/assets/informasi/2026-05-22_evaluasi-form-penilaian-asprak-aspirasi.jpg', 'ALTEK membuka Form Penilaian Kinerja Asisten Praktikum serta Form Kritik, Saran, dan Aspirasi untuk peningkatan layanan laboratorium.', 'Dalam rangka evaluasi pelaksanaan praktikum dan kinerja asisten praktikum, ALTEK UNSOED membuka dua formulir masukan bagi seluruh praktikan.', 'Masukan dari praktikan menjadi dasar perbaikan kualitas pelaksanaan praktikum dan pelayanan ALTEK ke depannya.'),
  ('2026-05-22-posttest-fisika', 'Praktikum', 'Jumat, 22 Mei 2026', '22 Mei 2026', 'Post-Test Praktikum Fisika', '/assets/informasi/2026-05-22_posttest-fisika.jpg', 'Pelaksanaan Post-Test Praktikum Fisika pukul 18.00 WIB di Ruang E201–E205, lengkap dengan daftar pembagian ruangan.', 'Diberitahukan kepada seluruh praktikan bahwa akan dilaksanakan Post-Test Praktikum Fisika. Cek daftar pembagian ruangan sebelum hadir ke lokasi.', 'Seluruh praktikan diharapkan hadir tepat waktu sesuai pembagian ruangan masing-masing.'),
  ('2026-04-28-elektronika', 'Praktikum', 'Selasa, 28 April 2026', '28 Apr 2026', 'Technical Meeting & Pre-Test Praktikum Elektronika', '/assets/informasi/2026-04-28_tm-pretest-elektronika.png', 'Kegiatan wajib Technical Meeting & Pre-Test Praktikum Elektronika untuk angkatan 2024 pukul 18.30–21.00 WIB di Aula Gedung F.', 'Technical Meeting dan Pre-Test Praktikum Elektronika bersifat WAJIB bagi seluruh mahasiswa angkatan 2024 yang mengikuti praktikum ini.', 'Kegiatan mencakup penyampaian teknis praktikum dan pelaksanaan pre-test.'),
  ('2026-03-05-instrumentasi', 'Praktikum', 'Kamis, 5 Maret 2026', '5 Mar 2026', 'Technical Meeting Praktikum Instrumentasi', '/assets/informasi/2026-03-05_tm-instrumentasi.jpg', 'Technical Meeting Praktikum Instrumentasi secara daring melalui Google Meet mulai pukul 20.00 WIB.', 'Diinformasikan kepada seluruh praktikan Praktikum Instrumentasi bahwa akan dilaksanakan Technical Meeting secara daring.', 'Praktikan dimohon hadir tepat waktu dan mengikuti penyampaian teknis pelaksanaan praktikum hingga selesai.'),
  ('2026-03-05-konversi', 'Praktikum', 'Kamis, 5 Maret 2026', '5 Mar 2026', 'Technical Meeting Praktikum Konversi Energi', '/assets/informasi/2026-03-05_tm-konversi-energi.jpg', 'Technical Meeting Praktikum Konversi Energi secara daring melalui Google Meet mulai pukul 16.00 WIB.', 'Diinformasikan kepada seluruh praktikan Praktikum Konversi Energi bahwa akan dilaksanakan Technical Meeting secara daring.', 'Praktikan dimohon hadir tepat waktu dan mengikuti penyampaian teknis pelaksanaan praktikum hingga selesai.'),
  ('2026-02-24-fisika', 'Praktikum', 'Selasa, 24 Februari 2026', '24 Feb 2026', 'Technical Meeting Praktikum Fisika 2026', '/assets/informasi/2026-02-24_tm-fisika.jpg', 'Technical Meeting wajib Praktikum Fisika 2026 bagi praktikan angkatan 2025 pukul 16.00 WIB di Aula Gedung F.', 'Sehubungan dengan dimulainya kegiatan Praktikum Fisika 2026, seluruh praktikan Fisika angkatan 2025 diwajibkan menghadiri Technical Meeting.', 'Seluruh praktikan angkatan 2025 diharapkan hadir tepat waktu.'),
  ('2026-02-10-oprec-genap-ext', 'Rekrutmen', '10–12 Februari 2026', '10–12 Feb 2026', 'Open Recruitment Asisten Praktikum Genap 2026 (Extended)', '/assets/informasi/2026-02-10_oprec-asprak-genap-extended-2026.jpg', 'Perpanjangan pendaftaran Asisten Praktikum Semester Genap 2026 untuk Instrumentasi, Konversi Energi, dan Elektronika.', 'Pendaftaran Asisten Praktikum Semester Genap 2026 (Extended) dibuka bagi mahasiswa Teknik Elektro UNSOED yang ingin mengasah kemampuan dan berkontribusi dalam praktikum.', 'Gunakan tautan pendaftaran resmi di bawah untuk mengisi formulir.'),
  ('2026-02-08-oprec-genap', 'Rekrutmen', '8–11 Februari 2026', '8–11 Feb 2026', 'Open Recruitment Asisten Praktikum Genap 2026 (Gelombang Awal)', '/assets/informasi/2026-02-08_oprec-asprak-genap-2026.jpg', 'Pembukaan pendaftaran Asisten Praktikum Semester Genap 2026 untuk Fisika, Konversi Energi, Elektronika, dan Instrumentasi.', 'Pendaftaran Asisten Praktikum Semester Genap 2026 (Gelombang Awal) dibuka bagi mahasiswa aktif Teknik Elektro UNSOED minimal angkatan 2024.', 'Pendaftaran dapat dilakukan melalui tautan resmi atau QR Code pada poster.');

INSERT INTO info_detail (info_id, sort_order, label, value) VALUES
  ('2026-11-26-otomasi', 1, 'Hari / Tanggal', 'Kamis, 26 November 2026'),
  ('2026-11-26-otomasi', 2, 'Waktu', '18.30 – 21.00 WIB'),
  ('2026-11-26-otomasi', 3, 'Tempat', 'Ruang E201 dan E202'),
  ('2026-11-26-otomasi', 4, 'Perlengkapan', 'Kertas folio dan alat tulis'),
  ('2026-11-25-tenaga-listrik', 1, 'Hari / Tanggal', 'Rabu, 25 November 2026'),
  ('2026-11-25-tenaga-listrik', 2, 'Waktu', '18.00 – 21.00 WIB'),
  ('2026-11-25-tenaga-listrik', 3, 'Tempat', 'Ruang E201, E202, dan E203'),
  ('2026-11-25-tenaga-listrik', 4, 'Perlengkapan', 'Kertas folio dan alat tulis'),
  ('2026-11-20-responsi-sismik', 1, 'Hari / Tanggal', 'Jumat, 20 November 2026'),
  ('2026-11-20-responsi-sismik', 2, 'Waktu', '19.00 – 21.00 WIB'),
  ('2026-11-20-responsi-sismik', 3, 'Tempat', 'Ruang E101, E102, dan E103'),
  ('2026-11-20-responsi-sismik', 4, 'Perlengkapan', 'Hasil Tugas Besar dan Laporan Tugas Besar'),
  ('2026-11-13-posttest-telkom', 1, 'Hari / Tanggal', 'Jumat, 13 November 2026'),
  ('2026-11-13-posttest-telkom', 2, 'Waktu', '18.30 WIB – selesai'),
  ('2026-11-13-posttest-telkom', 3, 'Tempat', 'Ruang E101 – E104'),
  ('2026-11-13-posttest-telkom', 4, 'Perlengkapan', 'Kertas folio dan alat tulis'),
  ('2026-11-05-sismik', 1, 'Hari / Tanggal', 'Kamis, 5 November 2026'),
  ('2026-11-05-sismik', 2, 'Waktu', '18.30 WIB – selesai'),
  ('2026-11-05-sismik', 3, 'Tempat', 'Aula Gedung F'),
  ('2026-11-05-sismik', 4, 'Perlengkapan', 'Kertas folio dan alat tulis'),
  ('2026-10-23-tekdig', 1, 'Hari / Tanggal', 'Jumat, 23 Oktober 2026'),
  ('2026-10-23-tekdig', 2, 'Waktu', '18.30 WIB – selesai'),
  ('2026-10-23-tekdig', 3, 'Tempat', 'Aula Gedung F'),
  ('2026-10-23-tekdig', 4, 'Perlengkapan', 'Papan jalan, kertas folio, dan alat tulis'),
  ('2026-10-17-tl', 1, 'Hari / Tanggal', 'Sabtu, 17 Oktober 2026'),
  ('2026-10-17-tl', 2, 'Waktu', '16.00 WIB – selesai'),
  ('2026-10-17-tl', 3, 'Tempat', 'Ruang E201, E202, dan E203'),
  ('2026-10-17-tl', 4, 'Perlengkapan', 'Alat tulis dan kertas folio'),
  ('2026-09-26-otomasi', 1, 'Hari / Tanggal', 'Sabtu, 26 September 2026'),
  ('2026-09-26-otomasi', 2, 'Waktu', '20.00 WIB – selesai'),
  ('2026-09-26-otomasi', 3, 'Tempat', 'Online via Google Meet'),
  ('2026-09-26-otomasi', 4, 'Perlengkapan', 'Alat tulis dan kertas folio'),
  ('2026-09-12-sisken', 1, 'Hari / Tanggal', 'Sabtu, 12 September 2026'),
  ('2026-09-12-sisken', 2, 'Waktu', '17.00 – 19.00 WIB'),
  ('2026-09-12-sisken', 3, 'Tempat', 'Ruang E101, E102, dan E103'),
  ('2026-09-12-sisken', 4, 'Perlengkapan', 'Alat tulis dan kertas A4/Folio'),
  ('2026-09-11-sismik', 1, 'Hari / Tanggal', 'Jumat, 11 September 2026'),
  ('2026-09-11-sismik', 2, 'Waktu', '20.30 WIB – selesai'),
  ('2026-09-11-sismik', 3, 'Tempat', 'Online (Google Meet)'),
  ('2026-09-11-sismik', 4, 'Persiapan', 'Menyimak materi yang disampaikan dan memastikan koneksi internet stabil'),
  ('2026-09-11-telkom', 1, 'Hari / Tanggal', 'Jumat, 11 September 2026'),
  ('2026-09-11-telkom', 2, 'Waktu', '18.00 WIB – selesai'),
  ('2026-09-11-telkom', 3, 'Tempat', 'Ruang E201, E202, E203, dan E204'),
  ('2026-09-11-telkom', 4, 'Perlengkapan', 'Pulpen dan kertas A4/Folio'),
  ('2026-09-05-tekdig', 1, 'Hari / Tanggal', 'Sabtu, 5 September 2026'),
  ('2026-09-05-tekdig', 2, 'Waktu', '18.30 WIB – selesai'),
  ('2026-09-05-tekdig', 3, 'Tempat', 'Ruang E303, E304, dan E305'),
  ('2026-09-05-tekdig', 4, 'Perlengkapan', 'Alat tulis dan kertas folio'),
  ('2026-08-28-pemrograman', 1, 'Hari / Tanggal', 'Jumat, 28 Agustus 2026'),
  ('2026-08-28-pemrograman', 2, 'Waktu', '19.00 WIB – selesai'),
  ('2026-08-28-pemrograman', 3, 'Tempat', 'Online (Google Meet)'),
  ('2026-08-28-pemrograman', 4, 'Perangkat', 'Laptop atau Smartphone'),
  ('2026-08-27-rl', 1, 'Hari / Tanggal', 'Kamis, 27 Agustus 2026'),
  ('2026-08-27-rl', 2, 'Waktu', '19.00 WIB – selesai'),
  ('2026-08-27-rl', 3, 'Tempat', 'Online via Google Meet'),
  ('2026-08-27-rl', 4, 'Peserta', 'Mahasiswa Teknik Elektro angkatan 2025'),
  ('2026-08-08-oprec-gasal', 1, 'Periode Pendaftaran', '8 – 10 Agustus 2026'),
  ('2026-08-08-oprec-gasal', 2, 'Praktikum Dibuka', 'Teknik Digital, Rangkaian Listrik, Konsep Telekomunikasi, Tenaga Listrik, Otomasi Industri, Pemrograman, Sistem Mikroprosesor, dan Sistem Kendali'),
  ('2026-08-08-oprec-gasal', 3, 'Persyaratan', 'Mahasiswa aktif Teknik Elektro UNSOED minimal angkatan 2025, pernah mengikuti praktikum terkait, nilai praktikum baik, berkomitmen dan bertanggung jawab'),
  ('2026-08-08-oprec-gasal', 4, 'Narahubung', 'Dinar Oktaviano (+62 858-0158-6104)'),
  ('2026-06-04-posttest-konversi', 1, 'Hari / Tanggal', 'Kamis, 4 Juni 2026'),
  ('2026-06-04-posttest-konversi', 2, 'Waktu', '19.00 WIB – selesai'),
  ('2026-06-04-posttest-konversi', 3, 'Tempat', 'Ruang E201 – E202'),
  ('2026-06-04-posttest-konversi', 4, 'Perlengkapan', 'Kertas folio, alat tulis, dan kalkulator'),
  ('2026-05-22-evaluasi-asprak', 1, 'Tanggal Publikasi', '22 Mei 2026'),
  ('2026-05-22-evaluasi-asprak', 2, 'Form 1', 'Penilaian Kinerja Asisten Praktikum'),
  ('2026-05-22-evaluasi-asprak', 3, 'Form 2', 'Kritik, Saran, dan Aspirasi ALTEK'),
  ('2026-05-22-evaluasi-asprak', 4, 'Akses Alternatif', 'Dapat diakses melalui tombol tautan di bawah atau QR Code pada poster'),
  ('2026-05-22-posttest-fisika', 1, 'Hari / Tanggal', 'Jumat, 22 Mei 2026'),
  ('2026-05-22-posttest-fisika', 2, 'Waktu', '18.00 WIB – selesai'),
  ('2026-05-22-posttest-fisika', 3, 'Tempat', 'Ruang E201 – E205'),
  ('2026-05-22-posttest-fisika', 4, 'Perlengkapan', 'Kertas folio garis, alat tulis, dan kalkulator'),
  ('2026-04-28-elektronika', 1, 'Hari / Tanggal', 'Selasa, 28 April 2026'),
  ('2026-04-28-elektronika', 2, 'Waktu', '18.30 – 21.00 WIB'),
  ('2026-04-28-elektronika', 3, 'Tempat', 'Aula Gedung F'),
  ('2026-04-28-elektronika', 4, 'Perlengkapan', 'Kertas folio dan alat tulis'),
  ('2026-03-05-instrumentasi', 1, 'Hari / Tanggal', 'Kamis, 5 Maret 2026'),
  ('2026-03-05-instrumentasi', 2, 'Waktu', '20.00 WIB – selesai'),
  ('2026-03-05-instrumentasi', 3, 'Tempat', 'Online via Google Meet'),
  ('2026-03-05-instrumentasi', 4, 'Perlengkapan', 'Alat tulis'),
  ('2026-03-05-konversi', 1, 'Hari / Tanggal', 'Kamis, 5 Maret 2026'),
  ('2026-03-05-konversi', 2, 'Waktu', '16.00 WIB – selesai'),
  ('2026-03-05-konversi', 3, 'Tempat', 'Online via Google Meet'),
  ('2026-03-05-konversi', 4, 'Perlengkapan', 'Alat tulis'),
  ('2026-02-24-fisika', 1, 'Hari / Tanggal', 'Selasa, 24 Februari 2026'),
  ('2026-02-24-fisika', 2, 'Waktu', '16.00 WIB – selesai'),
  ('2026-02-24-fisika', 3, 'Tempat', 'Aula Gedung F'),
  ('2026-02-24-fisika', 4, 'Agenda', 'Sistem pelaksanaan praktikum, tata tertib, pembagian kelas, dan informasi teknis lainnya'),
  ('2026-02-10-oprec-genap-ext', 1, 'Periode Pendaftaran', '10 – 12 Februari 2026'),
  ('2026-02-10-oprec-genap-ext', 2, 'Praktikum Dibuka', 'Instrumentasi, Konversi Energi, dan Elektronika'),
  ('2026-02-10-oprec-genap-ext', 3, 'Persyaratan', 'Mahasiswa aktif Teknik Elektro UNSOED minimal angkatan 2024, pernah mengikuti praktikum terkait, nilai praktikum baik, berkomitmen dan mampu bekerja dalam tim'),
  ('2026-02-10-oprec-genap-ext', 4, 'Narahubung', 'Dinar (0858 0158 6104)'),
  ('2026-02-08-oprec-genap', 1, 'Periode Pendaftaran', '8 – 11 Februari 2026'),
  ('2026-02-08-oprec-genap', 2, 'Praktikum Dibuka', 'Fisika, Konversi Energi, Elektronika, dan Instrumentasi'),
  ('2026-02-08-oprec-genap', 3, 'Persyaratan', 'Mahasiswa aktif Teknik Elektro UNSOED minimal angkatan 2024, sudah pernah mengikuti praktikum terkait, nilai praktikum baik, berkomitmen dan bertanggung jawab'),
  ('2026-02-08-oprec-genap', 4, 'Narahubung', 'Dinar (0858 0158 6104)');

INSERT INTO info_link (info_id, sort_order, label, url) VALUES
  ('2026-09-26-otomasi', 1, 'Buka Google Meet', 'https://meet.google.com/aev-mmhn-vrw'),
  ('2026-08-27-rl', 1, 'Buka Google Meet', 'https://meet.google.com/gau-dcdn-mgc'),
  ('2026-08-08-oprec-gasal', 1, 'Formulir Pendaftaran', 'https://bit.ly/OprecAsprakGanjil2026'),
  ('2026-05-22-evaluasi-asprak', 1, 'Form Penilaian Asisten', 'https://forms.gle/m5onAAEuHqmb4QJ27'),
  ('2026-05-22-evaluasi-asprak', 2, 'Form Kritik & Aspirasi', 'https://forms.gle/wuUvK2Dy8U6wpEVK7'),
  ('2026-05-22-posttest-fisika', 1, 'Cek Pembagian Ruangan', 'https://docs.google.com/spreadsheets/u/0/d/1A35GrG6dasdRxZlpGhuMe8rPaI4R8Jwj/edit'),
  ('2026-02-10-oprec-genap-ext', 1, 'Formulir Pendaftaran', 'https://bit.ly/OprecAsprakGenap2026'),
  ('2026-02-08-oprec-genap', 1, 'Formulir Pendaftaran', 'https://bit.ly/OprecAsprakGenap2026');

COMMIT;
