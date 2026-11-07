"use client";

import React, { useState } from "react";
import { Orbitron } from "next/font/google";
import {
  Send,
  MapPin,
  Mail,
  User,
  MessageSquare,
  Tag,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["600", "800"] });

export const ContactFormSection = () => {
  const [status, setStatus] = useState<
    "IDLE" | "LOADING" | "SUCCESS" | "ERROR"
  >("IDLE");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("LOADING");

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "c6b354b3-b19f-4c75-9cae-5b44f4fb58f5");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      if (data.success) {
        setStatus("SUCCESS");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("ERROR");
      }
    } catch {
      setStatus("ERROR");
    }
  };

  return (
    // max-w-4xl agar form tidak terlalu melar/panjang ke samping di layar besar
    <section className="relative px-6 py-12 max-w-4xl mx-auto flex flex-col gap-10">
      {/* Glow Effect Background */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-sky-500/10 blur-[120px] rounded-full pointer-events-none" />

      {/* --- BAGIAN 1: FORM KIRIM PESAN --- */}
      <div className="bg-slate-900/40 backdrop-blur-xl rounded-2xl p-8 md:p-10 border border-white/5 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-sky-400 to-transparent" />

        <div className="mb-8">
          <h2
            className={`text-2xl font-bold text-white mb-2 tracking-wide ${orbitron.className}`}
          >
            KIRIM PESAN DIRECT
          </h2>
          <p className="text-slate-300 text-sm font-medium">
            Pesan akan langsung terkirim ke kotak masuk email resmi ALTEK.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Input Nama */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-widest mb-2">
              Nama Lengkap
            </label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                name="name"
                required
                placeholder="Masukkan nama Anda"
                className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-11 py-4 text-slate-200 text-sm placeholder:text-slate-500 focus:outline-none focus:border-sky-400/80 focus:ring-1 focus:ring-sky-400/80 transition-all"
              />
            </div>
          </div>

          {/* Input Email */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-widest mb-2">
              Email Anda
            </label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="email"
                name="email"
                required
                placeholder="nama@email.com"
                className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-11 py-4 text-slate-200 text-sm placeholder:text-slate-500 focus:outline-none focus:border-sky-400/80 focus:ring-1 focus:ring-sky-400/80 transition-all font-mono"
              />
            </div>
          </div>

          {/* Input Subject / Subjek Pesan */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-widest mb-2">
              Subjek Pesan
            </label>
            <div className="relative">
              <Tag className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                name="subject"
                required
                placeholder="Contoh: Pengajuan Kerjasama / Pertanyaan Riset"
                className="w-full bg-slate-950/60 border border-white/10 rounded-xl px-11 py-4 text-slate-200 text-sm placeholder:text-slate-500 focus:outline-none focus:border-sky-400/80 focus:ring-1 focus:ring-sky-400/80 transition-all"
              />
            </div>
          </div>

          {/* Input Pesan */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-widest mb-2">
              Pesan / Pertanyaan
            </label>
            <div className="relative">
              <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-400" />
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tuliskan pesan atau keperluan Anda secara rinci..."
                className="w-full bg-slate-950/60 border border-white/10 rounded-xl pl-11 pr-4 py-4 text-slate-200 text-sm placeholder:text-slate-500 focus:outline-none focus:border-sky-400/80 focus:ring-1 focus:ring-sky-400/80 transition-all resize-none"
              />
            </div>
          </div>

          {/* Tombol Submit */}
          <button
            type="submit"
            disabled={status === "LOADING"}
            className={`w-full py-4 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 border border-sky-400/40 text-sky-300 hover:text-white font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-2 group ${orbitron.className}`}
          >
            {status === "LOADING" ? (
              <span>MENGIRIM PESAN...</span>
            ) : (
              <>
                <span>KIRIM PESAN</span>
                <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>

          {/* Status Feedback */}
          {status === "SUCCESS" && (
            <div className="flex items-center gap-2 text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 p-4 rounded-xl text-sm font-medium mt-4">
              <CheckCircle className="w-5 h-5 flex-shrink-0" />
              <span>Pesan Anda berhasil terkirim ke email ALTEK!</span>
            </div>
          )}
          {status === "ERROR" && (
            <div className="flex items-center gap-2 text-rose-400 bg-rose-950/40 border border-rose-500/30 p-4 rounded-xl text-sm font-medium mt-4">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span>
                Gagal mengirim pesan. Pastikan Access Key sudah diatur.
              </span>
            </div>
          )}
        </form>
      </div>

      {/* --- BAGIAN 2: INFO ALAMAT & MAPS (DIGABUNG) --- */}
      <div className="bg-slate-900/40 backdrop-blur-xl rounded-2xl p-8 md:p-10 border border-white/5 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-sky-400 to-transparent" />

        {/* Header Lokasi */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="w-6 h-6 text-sky-400 flex-shrink-0" />
              <h2
                className={`text-2xl font-bold text-white tracking-wide ${orbitron.className}`}
              >
                LOKASI LABORATORIUM
              </h2>
            </div>
            <p className="text-slate-300 text-sm md:text-base font-medium leading-relaxed">
              Fakultas Teknik Universitas Jenderal Soedirman
              <br />
              <span className="text-slate-400 font-mono text-[13px] md:text-sm">
                Jl. Raya Mayjen Sungkono No.KM 5, Dusun 2, Blater, Kec.
                Kalimanah, Kabupaten Purbalingga, Jawa Tengah 53371.
              </span>
            </p>
          </div>
        </div>

        {/* Container Map */}
        <div className="w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden relative shadow-inner border border-white/10">
          <iframe
            title="Lokasi Laboratorium Elektro Unsoed"
            src="https://maps.google.com/maps?q=Fakultas%20Teknik%20Universitas%20Jenderal%20Soedirman%20Blater,%20Purbalingga&t=&z=16&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter: "invert(90%) hue-rotate(180deg) contrast(120%)",
            }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};
