import Image from "next/image";
export default function Hero() {
  return (
    <section className="h-[70vh] flex flex-col justify-center items-center text-center bg  text-white px-6">
      {/* logo */}
      <Image
        src="/LogoAltek.png"
        alt="Logo Altek"
        width={200}
        height={200}
        className="mb-6"
        priority
      />


      <h1 className="text-4xl md:text-6xl font-bold mb-4">ALIANSI LABORATORIUM TEKNIK ELEKTRO</h1>
      <p className="text-lg md:text-2xl max-w-2xl">

      </p>
    </section>
  );
}
// bg-gradient-to-r from-blue-600 to-blue-400