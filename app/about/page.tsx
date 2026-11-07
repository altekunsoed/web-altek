import prisma from "@/lib/prisma";
import { aboutContent, divisions as staticDivisions } from "@/data/about";
import { AboutHeader } from "@/components/about/organisms/AboutHeader";
import { DivisionGrid } from "@/components/about/organisms/DivisionGrid";
import { TeamSection } from "@/components/about/organisms/TeamSection";

export default async function About() {
  // Mengambil data divisi beserta relasi anggotanya dari PostgreSQL
  const dbDivisions = await prisma.division.findMany({
    include: {
      members: true,
    },
  });

  // Menggabungkan data database dengan icon dan deskripsi statis
  const mappedDivisions = staticDivisions.map((staticDiv) => {
    // Cocokkan nama divisi di data statis dengan nama di database
    const dbDiv = dbDivisions.find((d) => d.name === staticDiv.name);

    return {
      ...staticDiv,
      // Jika divisi ditemukan di DB, gunakan daftar anggotanya. Jika tidak, pakai bawaan statis.
      members: dbDiv ? dbDiv.members : staticDiv.members,
    };
  });

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      <AboutHeader
        title={aboutContent.title}
        description={aboutContent.description}
      />
      <DivisionGrid divisions={mappedDivisions} />
      <TeamSection divisions={mappedDivisions} />
    </main>
  );
}
