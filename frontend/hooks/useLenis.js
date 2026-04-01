"use client";

import { useEffect } from "react";
import Lenis from "lenis";

/**
 * Smooth scroll; destroys Lenis on unmount to avoid leaks when navigating in the App Router.
 */
export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis();
    let rafId = 0;

    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);
}
