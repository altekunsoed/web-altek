"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import {
  attachAltekIconMotion,
  initRippleFeedback,
  refreshReveal,
  observeNewReveals,
} from "@/lib/altekIconMotion";

/**
 * Komponen tanpa UI yang memboot efek interaksi global ALTEK:
 * - Delegasi event hover/fokus/sentuh ikon (initAltekIconDelegation via attachAltekIconMotion)
 * - Riak klik (initRippleFeedback)
 * - Reveal saat scroll (refreshReveal + MutationObserver untuk elemen baru)
 *
 * Dipasang sekali di app/layout.tsx di bawah <Navbar />.
 */
export default function AltekEffects() {
  const pathname = usePathname();
  const revealMoRef = useRef<MutationObserver | null>(null);

  /* Boot efek sekali saat mount */
  useEffect(() => {
    /* Tandai <html> bahwa JS motion sudah siap.
       CSS memakai html.js-motion .reveal { opacity:0 } agar konten
       tidak tersembunyi sebelum hidrasi (SSR tetap menampilkan konten). */
    document.documentElement.classList.add("js-motion");

    attachAltekIconMotion(document);
    initRippleFeedback();
    refreshReveal();
    revealMoRef.current = observeNewReveals();

    return () => {
      revealMoRef.current?.disconnect();
    };
  }, []);

  /* Jalankan ulang saat rute berubah */
  useEffect(() => {
    attachAltekIconMotion(document);
    refreshReveal();
  }, [pathname]);

  return null;
}
