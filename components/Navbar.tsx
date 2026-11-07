"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Orbitron } from "next/font/google";
import { Menu, X } from "lucide-react";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["600", "800"] });

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Praktikum", href: "/praktikum" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* Navbar Utama */}
      <nav className="fixed w-full top-0 z-40 bg-slate-950/40 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)] transition-all duration-300 h-14 md:h-16 flex items-center">
        <div className="w-full max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo Section */}
          <Link
            href="/"
            className="flex items-center space-x-2.5 group relative cursor-pointer"
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-sky-400 blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500 rounded-full" />
              <Image
                src="/LogoAltek.png"
                alt="Logo Altek"
                width={36}
                height={36}
                className="relative z-10 rounded-full transform group-hover:scale-105 transition-all duration-500 w-8 h-8 md:w-9 md:h-9 object-contain"
              />
            </div>
            <Image
              src="/tulisan_altek.png"
              alt="Teks ALTEK"
              width={75}
              height={24}
              className="object-contain transform group-hover:scale-105 transition-all duration-500 opacity-80 group-hover:opacity-100 drop-shadow-md w-[65px] md:w-[75px]"
            />
          </Link>

          {/* Menu Section (Desktop) */}
          <div className="hidden md:flex items-center space-x-7">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative py-1 text-[12px] md:text-[13px] tracking-widest uppercase transition-colors duration-500 ${orbitron.className} ${
                    isActive
                      ? "text-white font-bold drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]"
                      : "text-slate-400 font-semibold hover:text-white"
                  }`}
                >
                  {item.name}

                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-transparent via-sky-400 to-transparent transition-all duration-300 ease-out ${
                      isActive
                        ? "opacity-100 scale-x-100 shadow-[0_0_12px_rgba(56,189,248,1)]"
                        : "opacity-0 scale-x-0 group-hover:scale-x-100 group-hover:opacity-70 group-hover:shadow-[0_0_8px_rgba(56,189,248,0.5)]"
                    }`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Hamburger Button (Mobile) */}
          <button
            className="md:hidden text-slate-400 hover:text-sky-400 transition-colors"
            onClick={() => setIsOpen(true)}
            aria-label="Buka Menu"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* --- SIDEBAR MOBILE --- */}
      {/* Overlay Gelap */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 z-50 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-slate-950/95 backdrop-blur-2xl border-l border-white/5 transform transition-transform duration-300 ease-in-out z-50 md:hidden flex flex-col p-6 shadow-[0_0_40px_rgba(0,0,0,0.5)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Tombol Close */}
        <button
          className="self-end mb-10 text-slate-400 hover:text-sky-400 transition-colors"
          onClick={() => setIsOpen(false)}
          aria-label="Tutup Menu"
        >
          <X className="w-7 h-7" />
        </button>

        {/* Link Navigasi Mobile */}
        <div className="flex flex-col gap-6">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`text-[15px] tracking-widest uppercase transition-colors duration-300 ${orbitron.className} ${
                  isActive
                    ? "text-sky-400 font-bold drop-shadow-[0_0_10px_rgba(56,189,248,0.5)]"
                    : "text-slate-400 font-semibold hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
