import Image from "next/image";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["700", "900"] });

export default function Hero() {
  return (
    <section className="relative min-h-[75vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">
      {/* Ambient Glow di belakang konten */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] md:h-[400px] bg-sky-600/15 blur-[120px] rounded-full pointer-events-none" />

      {/* Kontainer Logo dengan Glassmorphism - Ukuran Dikecilkan drastis */}
      <div className="relative z-10 mb-6 p-4 rounded-full bg-slate-800/30 backdrop-blur-md border border-slate-700/50 shadow-[0_0_30px_rgba(56,189,248,0.15)]">
        <Image
          src="/LogoAltek.png"
          alt="Logo Altek"
          width={100}
          height={100}
          className="drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] w-24 h-24 md:w-28 md:h-28 object-contain"
          priority
        />
      </div>

      {/* Teks Konten */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        {/* Baris Pertama: ALIANSI LABORATORIUM - Ukuran diturunkan ke 3xl */}
        <h1
          className={`text-xl sm:text-2xl md:text-3xl font-black text-white tracking-widest uppercase mb-1 drop-shadow-md ${orbitron.className}`}
        >
          Aliansi Laboratorium
        </h1>

        {/* Baris Kedua: TEKNIK ELEKTRO - Ukuran diturunkan ke 5xl (maksimal) */}
        <h2
          className={`text-2xl sm:text-3xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-500 to-sky-400 drop-shadow-[0_0_20px_rgba(56,189,248,0.3)] tracking-[0.15em] uppercase ${orbitron.className}`}
        >
          Teknik Elektro
        </h2>

        {/* Teks Sambutan */}
        <p className="mt-6 text-sm md:text-base text-slate-300 font-mono max-w-xl leading-relaxed bg-slate-900/50 py-2 px-6 rounded-full border border-slate-700/50">
          ⚡️Selamat datang di website resmi ALTEK⚡️
        </p>
      </div>
    </section>
  );
}
