import Link from "next/link";
import { PrismaClient } from "@prisma/client";
import { Orbitron } from "next/font/google";
import { ArrowLeft, Download, FileText } from "lucide-react";

// Inisialisasi Prisma Client
const prisma = new PrismaClient();

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

interface PraktikumDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PraktikumDetailPage({
  params,
}: PraktikumDetailPageProps) {
  const { slug } = await params;

  // Ambil data modul langsung dari database PostgreSQL berdasarkan slug
  const praktikum = await prisma.module.findUnique({
    where: { slug: slug },
  });

  if (!praktikum) {
    return (
      // CLASS BACKGROUND FALLBACK DIUBAH JADI GRADIENT
      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center justify-center text-slate-300">
        <h1
          className={`text-2xl md:text-3xl text-sky-400 mb-6 tracking-widest uppercase ${orbitron.className}`}
        >
          Modul Tidak Ditemukan
        </h1>
        <Link
          href="/praktikum"
          className="flex items-center gap-2 hover:text-sky-300 transition-colors font-mono"
        >
          <ArrowLeft className="w-4 h-4" /> Kembali ke Daftar Praktikum
        </Link>
      </div>
    );
  }

  // Encode PDF URL for Google PDF Viewer (gunakan properti pdfUrl dari database)
  const pdfViewerUrl = `https://docs.google.com/viewer?url=${encodeURIComponent(praktikum.pdfUrl)}&embedded=true`;

  return (
    // CLASS BACKGROUND UTAMA DIUBAH JADI GRADIENT
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative w-full flex flex-col items-center pb-20 pt-24">
      {/* Ambient Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[150px] bg-sky-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 w-full relative z-10">
        {/* Tombol Kembali */}
        <Link
          href="/praktikum"
          className="inline-flex items-center gap-2 text-sky-400/80 hover:text-sky-300 font-mono text-sm tracking-wide mb-8 group transition-colors"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Kembali ke Katalog
        </Link>

        {/* Header Modul */}
        <div className="mb-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-700/50 shadow-inner">
                <FileText className="w-7 h-7 text-sky-400" />
              </div>
              <h1
                className={`text-2xl md:text-3xl lg:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-white via-sky-400 to-white drop-shadow-[0_0_15px_rgba(56,189,248,0.5)] tracking-wide uppercase ${orbitron.className}`}
              >
                {praktikum.title}
              </h1>
            </div>
            <p className="text-slate-400 text-sm md:text-[15px] font-mono leading-relaxed max-w-2xl">
              {praktikum.description}
            </p>
          </div>

          {/* Tombol Download Neon */}
          <a
            href={praktikum.pdfUrl} // Disesuaikan dengan properti database (pdfUrl)
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center gap-2 bg-slate-900/60 hover:bg-sky-600 text-sky-300 hover:text-white px-6 py-3 rounded-xl border border-slate-700 hover:border-sky-400 transition-all duration-300 text-sm font-semibold tracking-wide overflow-hidden shrink-0 shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
            <Download className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            <span className="relative z-10">Unduh PDF</span>
          </a>
        </div>

        {/* Container Viewer PDF */}
        <div className="w-full h-[75vh] border border-slate-700/50 rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(56,189,248,0.07)] bg-slate-900 relative group">
          {/* Loading Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center -z-10 bg-slate-900/50">
            <span className="text-slate-500 font-mono text-sm animate-pulse tracking-widest">
              MEMUAT DOKUMEN...
            </span>
          </div>

          <iframe
            src={pdfViewerUrl}
            className="w-full h-full relative z-10 bg-white/5"
            title={`PDF ${praktikum.title}`}
            loading="lazy"
          />
        </div>
      </div>
    </main>
  );
}
