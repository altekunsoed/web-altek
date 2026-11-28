/**
 * Motion ikon ALTEK + efek interaksi global (v0.6.13 → Next.js).
 * Delegasi event di level document agar bekerja untuk konten yang dirender
 * belakangan (tab, accordion, hasil filter, "Tampilkan lainnya", modal).
 *
 * Perubahan dari port lama (v0.6.5):
 *   - HOST_SELECTOR & TILE_SELECTOR diperbarui ke kelas altek-* yang dipakai
 *     komponen React, bukan kelas SPA lama.
 *   - Ketergantungan pada ".page.active" dihilangkan (Next.js App Router
 *     tidak memakai SPA page container).
 *   - Fungsi refreshReveal() disesuaikan agar mengobservasi seluruh body.
 */

/* =========================================================================
   SELECTORS — disesuaikan dengan kelas yang ada di komponen React
   ========================================================================= */

const HOST_SELECTOR = [
  /* Kartu */
  ".altek-quick-card", ".altek-course-card", ".altek-module-card",
  ".altek-starterpack-card", ".altek-policy-card", ".altek-social-card",
  ".altek-about-feature", ".altek-info-card", ".altek-tut-card",
  ".altek-bph-photo-card",
  ".altek-archive-card-compact", ".altek-rich-empty",
  ".altek-course-module-action-card", ".altek-course-syllabus-card",
  /* Navigasi & tombol */
  ".nav-link", ".altek-tab-btn", ".altek-filter-btn", ".altek-info-filter-btn",
  ".altek-tut-filter-btn", ".altek-module-filter", ".altek-btn", ".altek-text-link",
  ".altek-about-intro-action", ".altek-about-strip-btn",
  ".altek-detail-back-btn", ".altek-empty-reset-btn",
  ".altek-active-year-btn", ".altek-btn-doc-primary", ".altek-btn-doc-download",
  ".altek-module-actions a", ".altek-starterpack-actions a",
  ".altek-tut-channel-link", ".altek-video-yt-btn", ".altek-video-related-chip",
  ".altek-info-ext-links a", ".altek-hero-identity-pill",
  /* Ikon tombol, menu, modal */
  ".icon-btn", ".menu-btn", ".close-modal", ".modal-close-btn",
  ".altek-info-modal-close", ".altek-lightbox-close", ".altek-video-close",
  ".altek-inline-close",
  /* Footer */
  ".footer-social-link", ".footer-contact-email",
  /* Accordion / details */
  ".altek-division-trigger", ".altek-role-trigger",
  "summary",
  /* Kartu Keanggotaan & Foto */
  ".altek-division-item", ".altek-role-item",
  ".altek-bph-photo-frame.is-zoomable", ".altek-lead-avatar.is-zoomable",
  ".altek-member-photo-box.is-zoomable",
  /* Catalog search */
  ".altek-catalog-search",
  /* Generik: role=button card */
  '.card[role="button"]', "a.card",
].join(",");

const TILE_SELECTOR = [
  ".quick-icon", ".course-icon", ".module-card-icon", ".altek-module-icon",
  ".starterpack-icon", ".policy-icon", ".altek-social-icon", ".altek-role-symbol",
  ".altek-division-badge", ".altek-empty-core",
  ".altek-course-banner-icon", ".altek-official-labs-icon",
  ".footer-mini-icon",
].join(",");

const LOGO_TOUCH_HOST_SELECTOR = ".altek-about-visual";
const ICON_SELECTOR = "svg.altek-v110-icon[data-icon]";
const ACTIVE_RATE = 2.6;

const observedContinuousSvgs = new WeakSet<Element>();
const touchTimers = new WeakMap<Element, number>();
const logoTouchTimers = new WeakMap<Element, number>();
let iconVisibilityObserver: IntersectionObserver | null = null;
let motionDelegationReady = false;
let rippleReady = false;
let revealObserver: IntersectionObserver | null = null;

function prefersReducedMotion(): boolean {
  return Boolean(
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
}

function setIconRate(svg: Element, rate: number): void {
  if (!(svg instanceof SVGElement)) return;
  if (svg.dataset.motion !== "continuous" || typeof svg.getAnimations !== "function") return;
  if (prefersReducedMotion()) return;
  try {
    svg.getAnimations({ subtree: true }).forEach((anim) => {
      const isCssAnimation =
        typeof CSSAnimation !== "undefined"
          ? anim instanceof CSSAnimation
          : "animationName" in anim;
      if (isCssAnimation) anim.playbackRate = rate;
    });
  } catch {
    /* abaikan: API animasi tidak tersedia */
  }
}

function isAccordionChevron(svg: Element, host: Element): boolean {
  if (!(svg instanceof SVGElement) || svg.dataset.icon !== "chevron") return false;
  if (host.tagName === "SUMMARY" && Boolean(host.closest("details"))) return true;
  return (
    host.classList.contains("altek-division-trigger") ||
    host.classList.contains("altek-role-trigger")
  );
}

function getAncestorHosts(target: EventTarget | null): Element[] {
  const hosts: Element[] = [];
  let current: Element | null = target instanceof Element ? target.closest(HOST_SELECTOR) : null;
  while (current) {
    hosts.push(current);
    current = current.parentElement ? current.parentElement.closest(HOST_SELECTOR) : null;
  }
  return hosts;
}

function getOwnIcons(host: Element): SVGElement[] {
  return Array.from(host.querySelectorAll<SVGElement>(ICON_SELECTOR)).filter(
    (svg) => svg.closest(HOST_SELECTOR) === host,
  );
}

function getOwnTiles(host: Element): Element[] {
  return Array.from(host.querySelectorAll(TILE_SELECTOR)).filter(
    (tile) => tile.closest(HOST_SELECTOR) === host,
  );
}

function activateHost(host: Element, cls: string, rate: number): void {
  getOwnTiles(host).forEach((tile) => tile.classList.add("altek-tile-target"));
  host.classList.add("altek-host-active");
  getOwnIcons(host).forEach((svg) => {
    svg.classList.remove("altek-icon-offscreen");
    if (!isAccordionChevron(svg, host)) svg.classList.add(cls);
    setIconRate(svg, rate);
  });
}

function deactivateHost(host: Element, cls: string): void {
  host.classList.remove("altek-host-active");
  getOwnIcons(host).forEach((svg) => {
    const keepActive =
      cls === "is-active" &&
      ((host.classList.contains("nav-link") && host.classList.contains("active")) ||
        (isAccordionChevron(svg, host) &&
          (Boolean(host.closest("details")?.open) ||
            host.getAttribute("aria-expanded") === "true")));
    if (!keepActive) svg.classList.remove(cls);
    const stillEngaged =
      svg.classList.contains("is-hovered") ||
      svg.classList.contains("is-keyfocus") ||
      svg.classList.contains("is-active");
    if (!stillEngaged) setIconRate(svg, 1);
  });
}

function ensureIconVisibilityObserver(): IntersectionObserver | null {
  if (iconVisibilityObserver || !("IntersectionObserver" in window)) return iconVisibilityObserver;
  iconVisibilityObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const svg = entry.target;
        if (entry.boundingClientRect.width === 0 && entry.boundingClientRect.height === 0) {
          svg.classList.remove("altek-icon-offscreen");
          return;
        }
        svg.classList.toggle("altek-icon-offscreen", !entry.isIntersecting);
      });
    },
    { rootMargin: "160px 0px" },
  );
  return iconVisibilityObserver;
}

function resumeContinuousIcons(): void {
  document
    .querySelectorAll(
      "svg.altek-v110-icon.altek-icon-offscreen",
    )
    .forEach((svg) => svg.classList.remove("altek-icon-offscreen"));
}

export function syncAltekPersistentIconStates(): void {
  document.querySelectorAll(".nav-link svg.altek-v110-icon").forEach((svg) => {
    const link = svg.closest(".nav-link");
    svg.classList.toggle("is-active", Boolean(link && link.classList.contains("active")));
  });
  document.querySelectorAll("details .altek-caret-holder svg.altek-v110-icon").forEach((svg) => {
    const det = svg.closest("details");
    svg.classList.toggle("is-active", Boolean(det && det.open));
  });
  document
    .querySelectorAll(
      ".altek-division-trigger .altek-caret-holder svg.altek-v110-icon, .altek-role-trigger .altek-caret-holder svg.altek-v110-icon",
    )
    .forEach((svg) => {
      const trigger = svg.closest(".altek-division-trigger, .altek-role-trigger");
      svg.classList.toggle("is-active", trigger?.getAttribute("aria-expanded") === "true");
    });
  resumeContinuousIcons();
}

export function initAltekIconDelegation(): void {
  if (motionDelegationReady) return;
  motionDelegationReady = true;

  document.addEventListener(
    "pointerover",
    (ev) => {
      if (ev.pointerType === "touch") return;
      getAncestorHosts(ev.target).forEach((host) => {
        if (ev.relatedTarget instanceof Node && host.contains(ev.relatedTarget)) return;
        activateHost(host, "is-hovered", ACTIVE_RATE);
      });
    },
    { passive: true },
  );

  document.addEventListener(
    "pointerout",
    (ev) => {
      if (ev.pointerType === "touch") return;
      getAncestorHosts(ev.target).forEach((host) => {
        if (ev.relatedTarget instanceof Node && host.contains(ev.relatedTarget)) return;
        deactivateHost(host, "is-hovered");
      });
    },
    { passive: true },
  );

  document.addEventListener(
    "focusin",
    (ev) => {
      getAncestorHosts(ev.target).forEach((host) => {
        if (ev.relatedTarget instanceof Node && host.contains(ev.relatedTarget)) return;
        activateHost(host, "is-keyfocus", ACTIVE_RATE);
      });
    },
    { passive: true },
  );

  document.addEventListener(
    "focusout",
    (ev) => {
      getAncestorHosts(ev.target).forEach((host) => {
        if (ev.relatedTarget instanceof Node && host.contains(ev.relatedTarget)) return;
        deactivateHost(host, "is-keyfocus");
      });
    },
    { passive: true },
  );

  document.addEventListener(
    "pointerdown",
    (ev) => {
      if (ev.pointerType !== "touch") return;
      getAncestorHosts(ev.target).forEach((host) => {
        const prev = touchTimers.get(host);
        if (prev !== undefined) {
          clearTimeout(prev);
          touchTimers.delete(host);
        }
        activateHost(host, "is-active", ACTIVE_RATE);
      });
      const logoHost = ev.target instanceof Element ? ev.target.closest(LOGO_TOUCH_HOST_SELECTOR) : null;
      if (logoHost) {
        const prev = logoTouchTimers.get(logoHost);
        if (prev !== undefined) {
          clearTimeout(prev);
          logoTouchTimers.delete(logoHost);
        }
        logoHost.classList.add("altek-logo-engaged");
      }
    },
    { passive: true },
  );

  const handleTouchRelease = (ev: PointerEvent): void => {
    if (ev.pointerType !== "touch") return;
    getAncestorHosts(ev.target).forEach((host) => {
      const prev = touchTimers.get(host);
      if (prev !== undefined) clearTimeout(prev);
      const timer = window.setTimeout(() => {
        touchTimers.delete(host);
        deactivateHost(host, "is-active");
      }, 460);
      touchTimers.set(host, timer);
    });
    const logoHost = ev.target instanceof Element ? ev.target.closest(LOGO_TOUCH_HOST_SELECTOR) : null;
    if (logoHost) {
      const prev = logoTouchTimers.get(logoHost);
      if (prev !== undefined) clearTimeout(prev);
      const timer = window.setTimeout(() => {
        logoTouchTimers.delete(logoHost);
        logoHost.classList.remove("altek-logo-engaged");
      }, 640);
      logoTouchTimers.set(logoHost, timer);
    }
  };
  document.addEventListener("pointerup", handleTouchRelease, { passive: true });
  document.addEventListener("pointercancel", handleTouchRelease, { passive: true });

  document.addEventListener(
    "toggle",
    (ev) => {
      const target = ev.target;
      if (target instanceof HTMLDetailsElement) {
        const chevron = target.querySelector(
          ":scope > summary .altek-caret-holder svg.altek-v110-icon",
        );
        if (chevron) chevron.classList.toggle("is-active", target.open);
        resumeContinuousIcons();
      }
    },
    true,
  );
}

/** Daftarkan ikon "continuous" di dalam root ke observer visibilitas. */
export function attachAltekIconMotion(root: ParentNode = document): void {
  initAltekIconDelegation();
  const observer = ensureIconVisibilityObserver();
  if (observer) {
    root
      .querySelectorAll('svg.altek-v110-icon[data-motion="continuous"]')
      .forEach((svg) => {
        if (observedContinuousSvgs.has(svg)) return;
        observedContinuousSvgs.add(svg);
        observer.observe(svg);
      });
  }
  syncAltekPersistentIconStates();
}

/** Efek riak saat menekan tombol/tautan. */
export function initRippleFeedback(): void {
  if (rippleReady) return;
  rippleReady = true;
  const interactive =
    'button,.altek-btn,.altek-detail-back-btn,.nav-link,.icon-btn,.menu-btn,[role="button"],a';
  document.addEventListener(
    "pointerdown",
    (ev) => {
      if (prefersReducedMotion()) return;
      const target = ev.target instanceof Element ? ev.target.closest<HTMLElement>(interactive) : null;
      if (!target) return;
      if ((target as HTMLButtonElement).disabled || target.getAttribute("aria-disabled") === "true") return;
      if (window.getComputedStyle(target).display === "inline") return;
      const rect = target.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const ripple = document.createElement("span");
      ripple.className = "click-ripple";
      const size = Math.max(rect.width, rect.height) * 1.25;
      ripple.style.width = `${size}px`;
      ripple.style.height = `${size}px`;
      ripple.style.left = `${ev.clientX - rect.left - size / 2}px`;
      ripple.style.top = `${ev.clientY - rect.top - size / 2}px`;
      target.appendChild(ripple);
      window.setTimeout(() => {
        if (ripple.isConnected) ripple.remove();
      }, 650);
    },
    { passive: true },
  );
}

/** Animasi masuk .reveal (scroll into view). */
export function refreshReveal(): void {
  if (!("IntersectionObserver" in window)) {
    document
      .querySelectorAll(".reveal:not([data-reveal])")
      .forEach((el) => el.setAttribute("data-reveal", "visible"));
    return;
  }
  if (revealObserver) revealObserver.disconnect();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          /* Atribut data-*, bukan class: React menimpa className saat render ulang
             (mis. accordion membuka), sehingga class is-visible bisa hilang dan
             kartu menjadi transparan. Atribut data-reveal tidak disentuh React. */
          entry.target.setAttribute("data-reveal", "visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 },
  );
  revealObserver = observer;
  document.querySelectorAll(".reveal:not([data-reveal])").forEach((el) => {
    observer.observe(el);
  });
}

/** Pantau elemen .reveal dan ikon continuous yang ditambahkan belakangan (tab, filter, modal). */
export function observeNewReveals(): MutationObserver | null {
  if (typeof MutationObserver === "undefined") return null;
  const mo = new MutationObserver((mutations) => {
    let foundReveal = false;
    let foundContinuousIcon = false;
    for (const m of mutations) {
      if (m.type === "attributes") {
        foundContinuousIcon = true;
        continue;
      }
      m.addedNodes.forEach((n) => {
        if (!(n instanceof Element)) return;
        if (n.classList.contains("reveal") || n.querySelector(".reveal")) {
          foundReveal = true;
        }
        if (
          n.matches('svg.altek-v110-icon[data-motion="continuous"]') ||
          n.querySelector('svg.altek-v110-icon[data-motion="continuous"], .altek-caret-holder svg.altek-v110-icon')
        ) {
          foundContinuousIcon = true;
        }
      });
    }
    if (foundReveal) refreshReveal();
    if (foundContinuousIcon) attachAltekIconMotion(document);
  });
  mo.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ["aria-expanded"],
  });
  return mo;
}
