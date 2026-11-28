--
-- PostgreSQL database dump
--

\restrict zfGYGF4rMtE6UaOuj5Fh6Hps0z7Ss5AUniYvSoijIPdIYTCbEgSG1E8ge6Jb6KG

-- Dumped from database version 18.6
-- Dumped by pg_dump version 18.6

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: Concentration; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Concentration" (
    id integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE public."Concentration" OWNER TO postgres;

--
-- Name: Concentration_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Concentration_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Concentration_id_seq" OWNER TO postgres;

--
-- Name: Concentration_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Concentration_id_seq" OWNED BY public."Concentration".id;


--
-- Name: Division; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Division" (
    id integer NOT NULL,
    name text NOT NULL
);


ALTER TABLE public."Division" OWNER TO postgres;

--
-- Name: Division_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Division_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Division_id_seq" OWNER TO postgres;

--
-- Name: Division_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Division_id_seq" OWNED BY public."Division".id;


--
-- Name: Member; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Member" (
    id integer NOT NULL,
    name text NOT NULL,
    role text NOT NULL,
    "photoUrl" text NOT NULL,
    "divisionId" integer NOT NULL
);


ALTER TABLE public."Member" OWNER TO postgres;

--
-- Name: Member_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Member_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Member_id_seq" OWNER TO postgres;

--
-- Name: Member_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Member_id_seq" OWNED BY public."Member".id;


--
-- Name: Module; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Module" (
    id integer NOT NULL,
    title text NOT NULL,
    "pdfUrl" text NOT NULL,
    semester integer NOT NULL,
    "concentrationId" integer,
    description text,
    slug text NOT NULL
);


ALTER TABLE public."Module" OWNER TO postgres;

--
-- Name: Module_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."Module_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public."Module_id_seq" OWNER TO postgres;

--
-- Name: Module_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."Module_id_seq" OWNED BY public."Module".id;


--
-- Name: _prisma_migrations; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public._prisma_migrations (
    id character varying(36) NOT NULL,
    checksum character varying(64) NOT NULL,
    finished_at timestamp with time zone,
    migration_name character varying(255) NOT NULL,
    logs text,
    rolled_back_at timestamp with time zone,
    started_at timestamp with time zone DEFAULT now() NOT NULL,
    applied_steps_count integer DEFAULT 0 NOT NULL
);


ALTER TABLE public._prisma_migrations OWNER TO postgres;

--
-- Name: Concentration id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Concentration" ALTER COLUMN id SET DEFAULT nextval('public."Concentration_id_seq"'::regclass);


--
-- Name: Division id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Division" ALTER COLUMN id SET DEFAULT nextval('public."Division_id_seq"'::regclass);


--
-- Name: Member id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Member" ALTER COLUMN id SET DEFAULT nextval('public."Member_id_seq"'::regclass);


--
-- Name: Module id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Module" ALTER COLUMN id SET DEFAULT nextval('public."Module_id_seq"'::regclass);


--
-- Data for Name: Concentration; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Concentration" (id, name) FROM stdin;
1	TIK
2	TTL
3	TTK
4	TKI
\.


--
-- Data for Name: Division; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Division" (id, name) FROM stdin;
2	Humkominfo
3	TTL
4	TKI
5	TTK
6	TIK
1	BPH
\.


--
-- Data for Name: Member; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Member" (id, name, role, "photoUrl", "divisionId") FROM stdin;
12	Klara Rosalia Imelda	Konversi Energi	/images/members/Divisi TTL/klara_TTL.jpg	3
28	Ikhsan Budi Nugroho	Ketua Divisi	/images/members/Divisi TIK/Ikhsan Budi_TIK.jpeg	6
1	Dinar Oktaviano	Ketua Organisasi	/images/members/BPH/Dinar Oktaviano_BPH.png	1
2	Ramania Nur Alifa	Sekretaris	/images/members/BPH/Ramania Nur Alifa_BPH.jpg	1
14	M. Akbar Firmansyah	Rangkaian Listrik	/images/members/Divisi TTL/M. Akbar_TTL.png	3
3	Khaerani Julieta F.	Bendahara	/images/members/BPH/Khaerani Julieta F_BPH.png	1
13	M. Fakhrul Arifin	Rangkaian Listrik	/images/members/Divisi TTL/M. Fakhrul Arifin_TTL.jpg	3
4	Dika Aditya Saputra	Ketua Divisi	/images/members/HUMKOMINFO/Dika Aditya S_Humkominfo.png	2
5	Dimas Raihan Anhar	Humas	/images/members/HUMKOMINFO/Dimas Raihan A_humkominfo.jpg	2
6	Kia Shadra Afiqa B.	Humas	/images/members/HUMKOMINFO/Kia Shadra_Humkominfo.jpg	2
29	Raul Abrar Palmawanto	Instrumentasi	/images/members/Divisi TIK/Raul_TIK.jpg	6
31	Noor Huda Ramadhani	Elektronika	/images/members/Divisi TIK/Dani_TIK.jpg	6
32	Julius Alfadi Modrigo	Elektronika	/images/members/Divisi TIK/Julius Alfadi M_TIK.jpg	6
33	Denis Fajar Wicaksono	Otomasi Industri	/images/members/Divisi TIK/Denis_TIK.jpg	6
34	Bayu Sugianda	Sistem Kendali	/images/members/Divisi TIK/Bayu_TIK.jpg	6
30	Henkel Raditya	Instrumentasi	/images/members/Divisi TIK/Henkel Raditya_TIK.png	6
16	Tiara Dwiaryani Adila	Ketua Divisi	/images/members/Divisi TKI/Tiara_TKI.jpg	4
20	Helga Ramania H.	Sistem Mikroprosesor	/images/members/Divisi TKI/helga_TKI.jpg	4
15	Naufal Dwi A.	Tenaga Listrik	/images/members/Divisi TTL/naufal_dwi_TTL.png	3
7	Septi Aisya	Media Kreatif	/images/members/HUMKOMINFO/Septi_humkominfo.jpg	2
8	Aprilia Tri Hapsari	Media Kreatif	/images/members/HUMKOMINFO/Aprilia Tri Hapsari_HUMKOMINFO.png	2
9	Fhalah Arinda Putra	Web Developer	/images/members/HUMKOMINFO/Fhalah Arinda Putra_HUMKOMINFO.jpg	2
10	Fadhilah S. Wibowo	Web Developer	/images/members/HUMKOMINFO/Fadhilah S. Wibowo_Humkominfo.jpg	2
11	Raymondria Willy S.	Ketua Divisi	/images/members/Divisi TTL/Raymondria_TTL.jpg	3
17	Probo Dwi Yulastono	Pemrograman	/images/members/Divisi TKI/Probo Dwi Yulastono_TKI.png	4
18	Riyan	Pemrograman	/images/members/Divisi TKI/Riyan_TKI.png	4
19	Dewi Sita Agustin	Jaringan Komputer	/images/members/Divisi TKI/Dewi_TKI.jpg	4
21	Miko Renanda	Sistem MikroProsesor	/images/members/Divisi TKI/Miko_TKI.png	4
22	Erland Rachman Putra	Ketua Divisi	/images/members/Divisi TTK/Erland Rachman Putra_TTK.png	5
23	Nabilla Putri Andini	Fisika	/images/members/Divisi TTK/Nabilla Putri Andini_TTK.jpg	5
24	Hifayatun Anin	Fisika	/images/members/Divisi TTK/Hifayatun Anin_TTK.jpg	5
25	Chandra Salim	Teknik Digital	/images/members/Divisi TTK/Chandra Salim_TTK.jpg	5
26	Alfin Yusril Husna	Konsep Telekomunikasi	/images/members/Divisi TTK/Alfin Yusril Husna_TTK.png	5
27	Nashr Ardy Wahyono	Konsep Telekomunikasi	/images/members/Divisi TTK/Nashr Ardy Wahyono_TTK.jpg	5
\.


--
-- Data for Name: Module; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public."Module" (id, title, "pdfUrl", semester, "concentrationId", description, slug) FROM stdin;
13	Tenaga Listrik	https://cdn.jsdelivr.net/gh/altekunsoed/web-altek@main/public/praktikum/ModulTenagaListrik.pdf	5	2	Modul praktikum tenaga listrik.	tenaga-listrik
12	Otomasi Industri	https://cdn.jsdelivr.net/gh/altekunsoed/web-altek@main/public/praktikum/ModulOtomasiIndustri.pdf?v=2026	5	1	Modul praktikum otomasi industri.	otomasi-industri
1	Praktikum Pemrograman	https://cdn.jsdelivr.net/gh/altekunsoed/web-altek@main/public/praktikum/ModulPemrograman.pdf?v=2026	1	\N	Modul praktikum pemrograman untuk semester 1.	pemrograman
2	Praktikum Fisika	https://cdn.jsdelivr.net/gh/altekunsoed/web-altek@main/public/praktikum/ModulFisika.pdf?v=2026	2	\N	Modul praktikum fisika untuk semester 2.	fisika
3	Rangkaian Listrik	https://cdn.jsdelivr.net/gh/altekunsoed/web-altek@main/public/praktikum/ModulRangkaianListrik.pdf?v=2026	3	\N	Modul praktikum rangkaian listrik.	rangkaian-listrik
4	Konsep Telekomunikasi	https://cdn.jsdelivr.net/gh/altekunsoed/web-altek@main/public/praktikum/ModulKonsepTelekomunikasi.pdf?v=2026	3	\N	Modul praktikum konsep telekomunikasi.	konsep-telekomunikasi
5	Teknik Digital	https://cdn.jsdelivr.net/gh/altekunsoed/web-altek@main/public/praktikum/ModulTeknikDigital.pdf?v=2026	3	\N	Modul praktikum teknik digital.	teknik-digital
6	Elektronika	https://cdn.jsdelivr.net/gh/altekunsoed/web-altek@main/public/praktikum/ModulElektronika.pdf?v=2026	4	\N	Modul praktikum elektronika.	elektronika
7	Konversi Energi	https://cdn.jsdelivr.net/gh/altekunsoed/web-altek@main/public/praktikum/ModulKonversiEnergi.pdf?v=2026	4	\N	Modul praktikum konversi energi.	konversi-energi
8	Instrumentasi	https://cdn.jsdelivr.net/gh/altekunsoed/web-altek@main/public/praktikum/ModulPraktikumInstrumentasi.pdf?v=2026	4	\N	Modul praktikum instrumentasi.	instrumentasi
9	Sistem Kendali	https://cdn.jsdelivr.net/gh/altekunsoed/web-altek@main/public/praktikum/ModulSistemKendali.pdf?v=2026	5	\N	Modul praktikum sistem kendali.	sistem-kendali
10	Sistem Mikroprosesor	https://cdn.jsdelivr.net/gh/altekunsoed/web-altek@main/public/praktikum/ModulSistemMikroprosesor.pdf?v=2026	5	\N	Modul praktikum sistem mikroprosesor.	sistem-mikroprosesor
11	Jaringan Komputer	https://cdn.jsdelivr.net/gh/altekunsoed/web-altek@main/public/praktikum/ModulJaringanKomputer.pdf?v=2026	5	3	Modul praktikum jaringan komputer.	jaringan-komputer
\.


--
-- Data for Name: _prisma_migrations; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public._prisma_migrations (id, checksum, finished_at, migration_name, logs, rolled_back_at, started_at, applied_steps_count) FROM stdin;
d307a7bb-b376-4b2f-8111-983349d5ad9d	cf130b1d9435f530884d5765d39e8e013653b6b0c7580e7bf04578a4e0688dee	2026-10-28 16:02:10.80039+07	20261028090210_init	\N	\N	2026-10-28 16:02:10.739237+07	1
fdcefddf-33c3-4de2-bfa6-e3ae32da1c70	2f535b38b4a31ea320668f8459357c923f7de8eaeff80ecdebb09f941dcfb034	2026-10-30 09:58:54.869696+07	20261030025854_tambah_slug_dan_deskripsi	\N	\N	2026-10-30 09:58:54.741005+07	1
\.


--
-- Name: Concentration_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Concentration_id_seq"', 4, true);


--
-- Name: Division_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Division_id_seq"', 6, true);


--
-- Name: Member_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Member_id_seq"', 34, true);


--
-- Name: Module_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Module_id_seq"', 13, true);


--
-- Name: Concentration Concentration_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Concentration"
    ADD CONSTRAINT "Concentration_pkey" PRIMARY KEY (id);


--
-- Name: Division Division_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Division"
    ADD CONSTRAINT "Division_pkey" PRIMARY KEY (id);


--
-- Name: Member Member_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Member"
    ADD CONSTRAINT "Member_pkey" PRIMARY KEY (id);


--
-- Name: Module Module_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Module"
    ADD CONSTRAINT "Module_pkey" PRIMARY KEY (id);


--
-- Name: _prisma_migrations _prisma_migrations_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public._prisma_migrations
    ADD CONSTRAINT _prisma_migrations_pkey PRIMARY KEY (id);


--
-- Name: Concentration_name_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Concentration_name_key" ON public."Concentration" USING btree (name);


--
-- Name: Division_name_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Division_name_key" ON public."Division" USING btree (name);


--
-- Name: Module_slug_key; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX "Module_slug_key" ON public."Module" USING btree (slug);


--
-- Name: Member Member_divisionId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Member"
    ADD CONSTRAINT "Member_divisionId_fkey" FOREIGN KEY ("divisionId") REFERENCES public."Division"(id) ON UPDATE CASCADE ON DELETE RESTRICT;


--
-- Name: Module Module_concentrationId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Module"
    ADD CONSTRAINT "Module_concentrationId_fkey" FOREIGN KEY ("concentrationId") REFERENCES public."Concentration"(id) ON UPDATE CASCADE ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

\unrestrict zfGYGF4rMtE6UaOuj5Fh6Hps0z7Ss5AUniYvSoijIPdIYTCbEgSG1E8ge6Jb6KG

