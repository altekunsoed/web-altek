import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Mulai seeding data...");

  // 1. Buat Data Konsentrasi
  const tik = await prisma.concentration.upsert({
    where: { name: "TIK" },
    update: {},
    create: { name: "TIK" },
  });

  const ttl = await prisma.concentration.upsert({
    where: { name: "TTL" },
    update: {},
    create: { name: "TTL" },
  });

  const ttk = await prisma.concentration.upsert({
    where: { name: "TTK" },
    update: {},
    create: { name: "TTK" },
  });

  const tki = await prisma.concentration.upsert({
    where: { name: "TKI" },
    update: {},
    create: { name: "TKI" },
  });

  // 2. Data Modul Lengkap
  const modules = [
    {
      title: "Praktikum Pemrograman",
      slug: "pemrograman",
      description: "Modul praktikum pemrograman untuk semester 1.",
      pdfUrl:
        "https://cdn.jsdelivr.net/gh/altekunsoed/web-altek@main/public/praktikum/ModulPemrograman.pdf",
      semester: 1,
      concentrationId: null,
    },
    {
      title: "Praktikum Fisika",
      slug: "fisika",
      description: "Modul praktikum fisika untuk semester 2.",
      pdfUrl:
        "https://cdn.jsdelivr.net/gh/altekunsoed/web-altek@main/public/praktikum/ModulFisika.pdf",
      semester: 2,
      concentrationId: null,
    },
    {
      title: "Rangkaian Listrik",
      slug: "rangkaian-listrik",
      description: "Modul praktikum rangkaian listrik.",
      pdfUrl:
        "https://cdn.jsdelivr.net/gh/altekunsoed/web-altek@main/public/praktikum/ModulRangkaianListrik.pdf",
      semester: 3,
      concentrationId: ttl.id,
    },
    {
      title: "Konsep Telekomunikasi",
      slug: "konsep-telekomunikasi",
      description: "Modul praktikum konsep telekomunikasi.",
      pdfUrl:
        "https://cdn.jsdelivr.net/gh/altekunsoed/web-altek@main/public/praktikum/ModulKonsepTelekomunikasi.pdf",
      semester: 3,
      concentrationId: ttk.id,
    },
    {
      title: "Teknik Digital",
      slug: "teknik-digital",
      description: "Modul praktikum teknik digital.",
      pdfUrl:
        "https://cdn.jsdelivr.net/gh/altekunsoed/web-altek@main/public/praktikum/ModulTeknikDigital.pdf",
      semester: 3,
      concentrationId: tik.id,
    },
    {
      title: "Elektronika",
      slug: "elektronika",
      description: "Modul praktikum elektronika.",
      pdfUrl:
        "https://cdn.jsdelivr.net/gh/altekunsoed/web-altek@main/public/praktikum/ModulElektronika.pdf",
      semester: 4,
      concentrationId: tik.id,
    },
    {
      title: "Konversi Energi",
      slug: "konversi-energi",
      description: "Modul praktikum konversi energi.",
      pdfUrl:
        "https://cdn.jsdelivr.net/gh/altekunsoed/web-altek@main/public/praktikum/ModulKonversiEnergi.pdf",
      semester: 4,
      concentrationId: ttl.id,
    },
    {
      title: "Instrumentasi",
      slug: "instrumentasi",
      description: "Modul praktikum instrumentasi.",
      pdfUrl:
        "https://cdn.jsdelivr.net/gh/altekunsoed/web-altek@main/public/praktikum/ModulPraktikumInstrumentasi.pdf",
      semester: 4,
      concentrationId: tik.id,
    },
    {
      title: "Sistem Kendali",
      slug: "sistem-kendali",
      description: "Modul praktikum sistem kendali.",
      pdfUrl:
        "https://cdn.jsdelivr.net/gh/altekunsoed/web-altek@main/public/praktikum/ModulSistemKendali.pdf",
      semester: 5,
      concentrationId: tik.id,
    },
    {
      title: "Sistem Mikroprosesor",
      slug: "sistem-mikroprosesor",
      description: "Modul praktikum sistem mikroprosesor.",
      pdfUrl:
        "https://cdn.jsdelivr.net/gh/altekunsoed/web-altek@main/public/praktikum/ModulSistemMikroprosesor.pdf",
      semester: 5,
      concentrationId: tik.id,
    },
    {
      title: "Jaringan Komputer",
      slug: "jaringan-komputer",
      description: "Modul praktikum jaringan komputer.",
      pdfUrl:
        "https://cdn.jsdelivr.net/gh/altekunsoed/web-altek@main/public/praktikum/ModulJaringanKomputer.pdf",
      semester: 5,
      concentrationId: tki.id,
    },
    {
      title: "Otomasi Industri",
      slug: "otomasi-industri",
      description: "Modul praktikum otomasi industri.",
      pdfUrl:
        "https://cdn.jsdelivr.net/gh/altekunsoed/web-altek@main/public/praktikum/ModulOtomasiIndustri.pdf",
      semester: 5,
      concentrationId: tik.id,
    },
    {
      title: "Tenaga Listrik",
      slug: "tenaga-listrik",
      description: "Modul praktikum tenaga listrik.",
      pdfUrl:
        "https://cdn.jsdelivr.net/gh/altekunsoed/web-altek@main/public/praktikum/ModulTenagaListrik.pdf",
      semester: 5,
      concentrationId: ttl.id,
    },
  ];

  // Eksekusi insert data ke database
  for (const mod of modules) {
    await prisma.module.upsert({
      where: { slug: mod.slug },
      update: {
        title: mod.title,
        description: mod.description,
        pdfUrl: mod.pdfUrl,
        semester: mod.semester,
        concentrationId: mod.concentrationId,
      },
      create: mod,
    });
  }

  console.log("Seeding selesai!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
