import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="flex flex-col justify-center items-center text-center bg-black text-white px-6 py-35">
        {/* logo */}
        <Image
          src="/LogoAltek.png"
          alt="Logo Altek"
          width={200}
          height={200}
          className="mb-6"
          priority
        />

        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          ALIANSI LABORATORIUM TEKNIK ELEKTRO
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl">
          Selamat datang di website resmi ALTEK ✨
        </p>
      </section>
    </main>
  );
}


{/* <Hero /> */}
      {/* <section className="py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-4">HEHEHE</h2>
        <p>oawkowakowakowak</p>
      </section> */}
