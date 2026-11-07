import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import { Orbitron } from "next/font/google";
import {
  BookOpen,
  ChevronRight,
  Zap,
  Network,
  Cpu,
  Activity,
  Settings,
  Code,
  Radio,
  Monitor,
  Terminal,
  Wrench,
} from "lucide-react";

const prisma = new PrismaClient();

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

// --- HELPER FUNCTIONS ---
const getModulIcon = (title: string) => {
  const lowerTitle = title.toLowerCase();

  if (
    lowerTitle.includes("listrik") ||
    lowerTitle.includes("energi") ||
    lowerTitle.includes("daya") ||
    lowerTitle.includes("tegangan")
  )
    return Zap;
  if (
    lowerTitle.includes("jaringan") ||
    lowerTitle.includes("internet") ||
    lowerTitle.includes("informasi")
  )
    return Network;
  if (
    lowerTitle.includes("otomasi") ||
    lowerTitle.includes("kendali") ||
    lowerTitle.includes("plc") ||
    lowerTitle.includes("mesin")
  )
    return Settings;
  if (
    lowerTitle.includes("sistem") ||
    lowerTitle.includes("digital") ||
    lowerTitle.includes("mikro") ||
    lowerTitle.includes("elektronika")
  )
    return Cpu;
  if (
    lowerTitle.includes("dasar") ||
    lowerTitle.includes("pengukuran") ||
    lowerTitle.includes("fisika")
  )
    return Activity;
  if (
    lowerTitle.includes("pemrograman") ||
    lowerTitle.includes("algoritma") ||
    lowerTitle.includes("software")
  )
    return Code;
  if (
    lowerTitle.includes("telekomunikasi") ||
    lowerTitle.includes("sinyal") ||
    lowerTitle.includes("antena") ||
    lowerTitle.includes("gelombang")
  )
    return Radio;
  if (lowerTitle.includes("komputer") || lowerTitle.includes("arsitektur"))
    return Monitor;
  if (
    lowerTitle.includes("basis data") ||
    lowerTitle.includes("data") ||
    lowerTitle.includes("script")
  )
    return Terminal;
  if (
    lowerTitle.includes("bengkel") ||
    lowerTitle.includes("mekanik") ||
    lowerTitle.includes("perawatan")
  )
    return Wrench;

  return BookOpen;
};

export default async function PraktikumPage() {
  // Ambil semua modul dari database PostgreSQL, urutkan berdasarkan semester
  const modules = await prisma.module.findMany({
    include: {
      concentration: true,
    },
    orderBy: {
      semester: "asc",
    },
  });

  // Kelompokkan modul berdasarkan semester secara dinamis
  const semestersMap = new Map<number, typeof modules>();
  modules.forEach((mod) => {
    const sem = mod.semester;
    if (!semestersMap.has(sem)) {
      semestersMap.set(sem, []);
    }
    semestersMap.get(sem)!.push(mod);
  });

  // Ubah map jadi array terurut per semester
  const praktikumBySemester = Array.from(semestersMap.entries()).map(
    ([semester, praktikum]) => ({
      semester,
      praktikum,
    }),
  );

  return (
    // TONE WARNA BACKGROUND SUDAH DISAMAKAN DENGAN HALAMAN ABOUT (900-800-900)
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative w-full flex flex-col items-center pb-20">
      {/* Efek Cahaya Background */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[150px] bg-sky-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 pt-10 md:pt-16 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 relative z-10">
          <h1
            className={`text-3xl md:text-4xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-400 to-white drop-shadow-[0_0_15px_rgba(56,189,248,0.5)] tracking-widest uppercase mb-4 ${orbitron.className}`}
          >
            Daftar Praktikum
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm md:text-[15px] font-mono leading-relaxed">
            Pilih modul praktikum berdasarkan semester untuk melihat panduan dan
            materi secara lengkap.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-sky-500/80 to-transparent mx-auto mt-6 rounded-full" />
        </div>

        {/* List Praktikum per Semester dari Database */}
        {praktikumBySemester.map((item) => (
          <section key={item.semester} className="mb-16 relative z-10">
            {/* Judul Semester */}
            <div className="flex items-center gap-4 mb-8">
              <h2
                className={`text-xl md:text-2xl text-sky-400 tracking-wider uppercase font-bold drop-shadow-md ${orbitron.className}`}
              >
                Semester {item.semester}
              </h2>
              <div className="flex-1 h-[1px] bg-gradient-to-r from-sky-500/50 to-transparent" />
            </div>

            {/* Grid Praktikum */}
            <div className="grid grid-cols-1 place-items-center sm:place-items-stretch sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {item.praktikum.map((p) => {
                const IconComponent = getModulIcon(p.title);

                return (
                  <Link
                    key={p.slug}
                    href={`/praktikum/${p.slug}`}
                    className="w-full max-w-md mx-auto sm:max-w-none sm:mx-0 group relative bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 hover:border-sky-500/50 rounded-2xl p-6 transition-all duration-500 hover:shadow-[0_0_30px_rgba(56,189,248,0.15)] flex flex-col h-full overflow-hidden"
                  >
                    {/* Efek Glow di hover */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-sky-500/10 rounded-full blur-[50px] group-hover:bg-sky-500/25 transition-all duration-500 pointer-events-none" />

                    {/* Header Card (Icon + Concentration Badge) */}
                    <div className="flex items-start justify-between mb-5 relative z-10">
                      <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-3 rounded-xl border border-slate-700 group-hover:border-sky-400/50 group-hover:from-sky-900/40 group-hover:to-slate-900 transition-colors">
                        <IconComponent className="w-6 h-6 text-sky-400 group-hover:scale-110 transition-transform duration-300" />
                      </div>

                      {p.concentration && (
                        <span className="text-[10px] font-mono font-bold tracking-widest text-sky-300 bg-sky-900/30 border border-sky-500/30 px-2 py-1 rounded-md">
                          {p.concentration.name}
                        </span>
                      )}
                    </div>

                    {/* Konten Text */}
                    <div className="relative z-10 flex-grow mb-6">
                      <h3
                        className={`text-lg text-slate-200 font-bold mb-2 group-hover:text-sky-300 transition-colors tracking-wide ${orbitron.className}`}
                      >
                        {p.title}
                      </h3>
                      <p className="text-slate-400 text-[13px] font-mono leading-relaxed group-hover:text-slate-300 transition-colors line-clamp-3">
                        {p.description}
                      </p>
                    </div>

                    {/* Indikator "Buka Modul" */}
                    <div className="relative z-10 flex items-center gap-2 text-sky-400/80 group-hover:text-sky-300 text-sm font-semibold tracking-wide font-mono mt-auto pt-4 border-t border-slate-700/50 group-hover:border-sky-500/30 transition-colors">
                      <span>Buka Modul</span>
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
