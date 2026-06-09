import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const DURATION = 1.2;
const EASE = "power4.out";
const FALLBACK_MS = 2500;

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isMobileViewport(): boolean {
  return window.matchMedia("(max-width: 768px)").matches;
}

function finishAnimations() {
  document.documentElement.classList.remove("js-anim");
}

function forceVisible(elements: HTMLElement[]) {
  elements.forEach((el) => {
    gsap.set(el, { opacity: 1, x: 0, y: 0, clearProps: "willChange,x,y" });
  });
  finishAnimations();
}

function clearWillChange(elements: Element[]) {
  elements.forEach((el) => {
    gsap.set(el, { clearProps: "willChange,x,y" });
  });
}

function getAnimatableItems(): HTMLElement[] {
  return Array.from(
    document.querySelectorAll<HTMLElement>(
      ".animated-item:not([data-fixed-ui]):not(.no-animate)"
    )
  );
}

function setInitialState(elements: HTMLElement[]) {
  const mobile = isMobileViewport();

  elements.forEach((el) => {
    if (mobile) {
      gsap.set(el, { opacity: 0, x: 0, y: 24, willChange: "transform, opacity" });
    } else {
      gsap.set(el, {
        x: gsap.utils.random(-100, 100),
        y: gsap.utils.random(-60, 60),
        opacity: 0,
        willChange: "transform, opacity",
      });
    }
  });
}

function revealElements(elements: HTMLElement[], stagger = 0.06) {
  return gsap.to(elements, {
    x: 0,
    y: 0,
    opacity: 1,
    duration: mobileDuration(),
    ease: EASE,
    stagger,
    onComplete: () => clearWillChange(elements),
  });
}

function mobileDuration() {
  return isMobileViewport() ? 0.85 : DURATION;
}

let fallbackTimer: ReturnType<typeof setTimeout> | null = null;

export function runAnimatedEntrance() {
  if (fallbackTimer) clearTimeout(fallbackTimer);

  ScrollTrigger.getAll().forEach((t) => t.kill());
  gsap.killTweensOf(".animated-item");

  const items = getAnimatableItems();
  if (!items.length) return;

  document.documentElement.classList.add("js-anim");

  if (prefersReducedMotion()) {
    forceVisible(items);
    return;
  }

  const viewportHeight = window.innerHeight;
  const immediate: HTMLElement[] = [];
  const onScroll: HTMLElement[] = [];

  items.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < viewportHeight * 0.92) {
      immediate.push(el);
    } else {
      onScroll.push(el);
    }
  });

  if (immediate.length) {
    setInitialState(immediate);
    const stagger = isMobileViewport() ? 0.05 : 0.08;
    gsap
      .timeline()
      .add(revealElements(immediate, stagger))
      .call(finishAnimations, undefined, ">+=0.15");
  } else {
    finishAnimations();
  }

  if (onScroll.length) {
    setInitialState(onScroll);
    ScrollTrigger.batch(onScroll, {
      start: "top 90%",
      once: true,
      onEnter: (batch) => {
        gsap.to(batch, {
          x: 0,
          y: 0,
          opacity: 1,
          duration: mobileDuration(),
          ease: EASE,
          stagger: isMobileViewport() ? 0.04 : 0.06,
          overwrite: "auto",
          onComplete: () => clearWillChange(batch as HTMLElement[]),
        });
      },
    });
  }

  fallbackTimer = setTimeout(() => {
    forceVisible(getAnimatableItems());
  }, FALLBACK_MS);

  requestAnimationFrame(() => ScrollTrigger.refresh());
}

export function cleanupAnimatedEntrance() {
  if (fallbackTimer) {
    clearTimeout(fallbackTimer);
    fallbackTimer = null;
  }
  ScrollTrigger.getAll().forEach((t) => t.kill());
  gsap.killTweensOf(".animated-item");
  finishAnimations();
}
