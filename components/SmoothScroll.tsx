"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (prefersReducedMotion.matches) {
      return;
    }

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.075,
      smoothWheel: true,
      wheelMultiplier: 0.85,
      syncTouch: false,
      anchors: {
        duration: 1.15,
        easing: (time) => Math.min(1, 1.001 - Math.pow(2, -10 * time)),
      },
    });

    const preventNativeAnchorJump = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const target = event.target;
      if (!(target instanceof Element)) {
        return;
      }

      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) {
        return;
      }

      const destination = new URL(anchor.href, window.location.href);
      const current = new URL(window.location.href);

      if (
        destination.origin !== current.origin ||
        destination.pathname !== current.pathname ||
        destination.search !== current.search ||
        !destination.hash
      ) {
        return;
      }

      const sectionId = decodeURIComponent(destination.hash.slice(1));
      if (!document.getElementById(sectionId)) {
        return;
      }

      event.preventDefault();
      window.history.pushState(null, "", destination.hash);
    };

    document.addEventListener("click", preventNativeAnchorJump);

    return () => {
      document.removeEventListener("click", preventNativeAnchorJump);
      lenis.destroy();
    };
  }, []);

  return null;
}
