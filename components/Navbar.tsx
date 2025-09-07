import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Nama */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/LogoAltek.png"
            alt="Logo Altek"
            width={60}
            height={60}
            className="rounded-full"
          />
          <span className="text-xl font-bold">ALTEK</span>
        </Link>

        {/* Menu */}
        <div className="space-x-6">
          <Link href="/">Home</Link>
          <Link href="/praktikum">Praktikum</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
