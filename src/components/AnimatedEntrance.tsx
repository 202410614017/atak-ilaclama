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
    const frame = requestAnimationFrame(() => {
      runAnimatedEntrance();
    });

    return () => {
      cancelAnimationFrame(frame);
      cleanupAnimatedEntrance();
    };
  }, [pathname]);

  return null;
}
