import { PrismaClient } from "@prisma/client";
// Sesuaikan path import di bawah ini dengan letak file praktikum.ts kamu yang sebenarnya
import { praktikumBySemester } from "../src/data/praktikum";

const prisma = new PrismaClient();

async function main() {
  console.log("Mulai seeding data dari praktikum.ts...");

  // 1. Buat Data Konsentrasi dasar
  const concentrations = ["TIK", "TTL", "TTK", "TKI"];
  for (const conc of concentrations) {
    await prisma.concentration.upsert({
      where: { name: conc },
      update: {},
      create: { name: conc },
    });
  }

  // Ambil data konsentrasi dari database untuk mapping ID-nya
  const dbConcentrations = await prisma.concentration.findMany();
  const getConcentrationId = (title: string) => {
    const lower = title.toLowerCase();
    if (
      lower.includes("otomasi") ||
      lower.includes("kendali") ||
      lower.includes("digital")
    ) {
      return dbConcentrations.find((c) => c.name === "TIK")?.id || null;
    }
    if (
      lower.includes("listrik") ||
      lower.includes("energi") ||
      lower.includes("daya")
    ) {
      return dbConcentrations.find((c) => c.name === "TTL")?.id || null;
    }
    if (lower.includes("jaringan") || lower.includes("telekomunikasi")) {
      return (
        dbConcentrations.find((c) => c.name === "TKI" || c.name === "TTK")
          ?.id || null
      );
    }
    return null;
  };

  // 2. Masukkan data modul per semester
  for (const item of praktikumBySemester) {
    const semester = item.semester;

    for (const p of item.praktikum) {
      await prisma.module.upsert({
        where: { slug: p.slug },
        update: {
          title: p.title,
          description: p.description,
          pdfUrl: p.pdf,
          semester: semester,
        },
        create: {
          title: p.title,
          slug: p.slug,
          description: p.description,
          pdfUrl: p.pdf,
          semester: semester,
          concentrationId: getConcentrationId(p.title),
        },
      });
    }
  }

  console.log("Seeding data praktikum selesai!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
