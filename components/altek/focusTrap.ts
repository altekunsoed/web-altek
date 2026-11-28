import type { KeyboardEvent as ReactKeyboardEvent } from "react";

const FOCUSABLE_SELECTOR = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

/**
 * Mengambil seluruh elemen interaktif yang dapat difokuskan di dalam container.
 */
export function getFocusableElements(
  container: HTMLElement | null,
): HTMLElement[] {
  if (!container) return [];
  return Array.from(
    container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
  ).filter(
    (el) => !el.hasAttribute("hidden") && el.getClientRects().length > 0,
  );
}

/**
 * Menahan navigasi tombol Tab / Shift+Tab agar tetap berada di dalam container modal aktif.
 */
export function trapFocusInContainer(
  event: KeyboardEvent | ReactKeyboardEvent,
  container: HTMLElement | null,
): void {
  if (event.key !== "Tab") return;

  const focusable = getFocusableElements(container);
  if (focusable.length === 0) {
    event.preventDefault();
    container?.focus();
    return;
  }

  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  const active = document.activeElement;

  if (event.shiftKey) {
    if (!container?.contains(active) || active === first) {
      event.preventDefault();
      last.focus();
    }
  } else if (!container?.contains(active) || active === last) {
    event.preventDefault();
    first.focus();
  }
}
