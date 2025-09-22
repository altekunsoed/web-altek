"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Praktikum", href: "/praktikum" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="bg-gradient-to-b from-gray-800 to-gray-900 shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/LogoAltek.png"
            alt="Logo Altek"
            width={40}
            height={40}
            className="rounded-full"
          />
          <span className="text-lg font-bold">ALTEK</span>
        </Link>

        {/* Menu */}
        <div className="flex items-center space-x-2">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`px-4 py-2 rounded-md transition-colors ${
                pathname === item.href
                  ? "bg-gray-700 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
