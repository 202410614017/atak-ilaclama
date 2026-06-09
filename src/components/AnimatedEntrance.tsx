"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";
import {
  runAnimatedEntrance,
  cleanupAnimatedEntrance,
} from "@/lib/gsap-entrance";

export default function AnimatedEntrance() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    let cancelled = false;

    const run = () => {
      if (!cancelled) runAnimatedEntrance();
    };

    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(run);
    });

    window.addEventListener("load", run);

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      window.removeEventListener("load", run);
      cleanupAnimatedEntrance();
    };
  }, [pathname]);

  return null;
}
