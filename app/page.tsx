import Image from "next/image";
import { Orbitron } from "next/font/google";

// Memuat font Orbitron dengan beberapa pilihan ketebalan
const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

export default function Home() {
  return (
    <main
      className={`min-h-screen bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 flex flex-col justify-center items-center relative overflow-hidden ${orbitron.className}`}
    >
      {/* Terapkan orbitron.className di sini agar semua elemen di dalamnya mewarisi font */}

      {/* Efek pendaran biru di latar belakang (diperhalus) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[120px] pointer-events-none"></div>

      <section className="flex flex-col justify-center items-center text-center text-white px-6 py-35 z-10">
        <div className="relative group mb-8">
          <div className="absolute -inset-4 bg-sky-400/20 rounded-full blur-xl group-hover:bg-sky-400/40 transition duration-700"></div>
          <Image
            src="/LogoAltek.png"
            alt="Logo Altek"
            width={200}
            height={200}
            className="relative transform group-hover:scale-105 transition-all duration-500 drop-shadow-2xl"
            priority
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-lg">
          ALIANSI LABORATORIUM <br className="hidden md:block" />
          {/* Gradasi diperhalus menjadi Sky to Blue agar lebih elegan */}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-500">
            TEKNIK ELEKTRO
          </span>
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl text-slate-300 font-light drop-shadow-sm">
          ⚡️Selamat datang di website resmi ALTEK⚡️
        </p>
      </section>
    </main>
  );
}
