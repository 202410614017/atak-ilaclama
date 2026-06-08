"use client";



import { useState, useEffect, useCallback, useRef } from "react";

import Image from "next/image";

import Link from "next/link";

import {

  ArrowRight,

  Shield,

  Leaf,

  Clock,

  Phone,

  CheckCircle2,

  ChevronLeft,

  ChevronRight,

} from "lucide-react";

import { img, SITE } from "@/lib/site";



export type HeroSlide = {

  image: string;

  badge: string;

  title: string;

  highlight: string;

  description: string;

};



type Props = {

  slides: HeroSlide[];

};



const TRUST_PILLS = [

  { icon: Shield, label: "Sağlık Bakanlığı Onaylı" },

  { icon: Leaf, label: "Çevre Dostu İlaçlar" },

  { icon: Clock, label: "7/24 Hızlı Servis" },

] as const;



const SLIDE_MS = 6000;

const SWIPE_THRESHOLD = 48;



export default function HeroSlider({ slides }: Props) {

  const [current, setCurrent] = useState(0);

  const [paused, setPaused] = useState(false);

  const [progress, setProgress] = useState(0);

  const touchStartX = useRef(0);

  const touchDeltaX = useRef(0);



  const goTo = useCallback(

    (index: number) => {

      setCurrent((index + slides.length) % slides.length);

      setProgress(0);

    },

    [slides.length]

  );



  const next = useCallback(() => goTo(current + 1), [current, goTo]);

  const prev = useCallback(() => goTo(current - 1), [current, goTo]);



  useEffect(() => {

    if (paused) return;

    const timer = setInterval(next, SLIDE_MS);

    return () => clearInterval(timer);

  }, [next, paused]);



  useEffect(() => {

    if (paused) return;

    setProgress(0);

    const start = Date.now();

    const tick = setInterval(() => {

      const elapsed = Date.now() - start;

      setProgress(Math.min(elapsed / SLIDE_MS, 1));

    }, 50);

    return () => clearInterval(tick);

  }, [current, paused]);



  const handleTouchStart = (e: React.TouchEvent) => {

    touchStartX.current = e.touches[0].clientX;

    touchDeltaX.current = 0;

  };



  const handleTouchMove = (e: React.TouchEvent) => {

    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;

  };



  const handleTouchEnd = () => {

    if (touchDeltaX.current < -SWIPE_THRESHOLD) next();

    else if (touchDeltaX.current > SWIPE_THRESHOLD) prev();

    touchDeltaX.current = 0;

  };



  const slide = slides[current];



  return (

    <section

      className="relative overflow-hidden bg-slate-950 text-white"

      onMouseEnter={() => setPaused(true)}

      onMouseLeave={() => setPaused(false)}

      onTouchStart={handleTouchStart}

      onTouchMove={handleTouchMove}

      onTouchEnd={handleTouchEnd}

    >

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-950/80 via-slate-950 to-slate-900" />

      <div className="pointer-events-none absolute inset-0 opacity-[0.35] hero-mesh" />

      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-brand-500/10 blur-3xl" />

      <div className="pointer-events-none absolute -left-24 bottom-32 h-72 w-72 rounded-full bg-accent-500/8 blur-3xl" />



      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8 lg:pb-32 lg:pt-28">

        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Image — mobilde üstte */}

          <div className="order-1 lg:order-2">

            <div className="relative mx-auto w-full max-w-md sm:max-w-lg lg:max-w-none">

              <div className="absolute -inset-2 rounded-[1.75rem] bg-gradient-to-br from-brand-500/20 via-transparent to-accent-500/10 blur-2xl sm:-inset-3 sm:rounded-[2rem]" />



              <div className="relative overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/10 sm:rounded-3xl">

                <div className="relative aspect-[4/3] sm:aspect-[5/4] lg:aspect-[5/4]">

                  {slides.map((s, i) => (

                    <div

                      key={s.image}

                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${

                        i === current ? "opacity-100" : "opacity-0"

                      }`}

                      aria-hidden={i !== current}

                    >

                      <Image

                        src={img(s.image)}

                        alt=""

                        fill

                        className={`object-cover object-center ${

                          i === current ? "hero-ken-burns" : ""

                        }`}

                        priority={i === 0}

                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 50vw"

                        quality={90}

                      />

                    </div>

                  ))}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />



                  {/* Trust kartları — görselin içinde, mobilde taşma yok */}

                  <div className="absolute bottom-3 left-3 right-3 z-10 flex gap-2 sm:bottom-4 sm:left-4 sm:right-4 sm:gap-3">

                    <div className="flex min-w-0 flex-1 items-center gap-2.5 rounded-xl border border-white/10 bg-slate-900/85 px-3 py-2.5 shadow-lg backdrop-blur-md sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-3">

                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white sm:h-10 sm:w-10 sm:rounded-xl">

                        <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />

                      </div>

                      <div className="min-w-0">

                        <p className="text-xs font-bold text-white sm:text-sm">5+ Yıl</p>

                        <p className="truncate text-[10px] text-slate-400 sm:text-xs">

                          Balıkesir&apos;de güvenilir hizmet

                        </p>

                      </div>

                    </div>

                    <div className="flex shrink-0 items-center rounded-xl border border-white/10 bg-slate-900/85 px-3 py-2.5 shadow-lg backdrop-blur-md sm:rounded-2xl sm:px-4 sm:py-3">

                      <div className="text-center sm:text-right">

                        <p className="text-sm font-bold text-brand-300 sm:text-lg">%100</p>

                        <p className="text-[10px] text-slate-400 sm:text-xs">Memnuniyet</p>

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>



          {/* İçerik — mobilde altta */}

          <div className="order-2 lg:order-1">

            <div key={current} className="hero-slide-content">

              <span className="mb-3 inline-flex max-w-full items-center gap-2 rounded-full border border-brand-400/30 bg-brand-500/10 px-3 py-1.5 text-[11px] font-semibold tracking-wide text-brand-200 sm:mb-4 sm:px-4 sm:text-sm">

                <Shield className="h-3.5 w-3.5 shrink-0" />

                <span className="truncate">{slide.badge}</span>

              </span>



              <h1 className="max-w-xl text-[1.6rem] font-bold leading-[1.15] tracking-tight text-balance min-[400px]:text-[1.75rem] sm:text-4xl lg:text-[3.25rem]">

                {slide.title}{" "}

                <span className="bg-gradient-to-r from-brand-300 to-emerald-200 bg-clip-text text-transparent">

                  {slide.highlight}

                </span>

              </h1>



              <p className="mt-4 max-w-lg text-sm leading-relaxed text-slate-300 sm:mt-5 sm:text-base lg:text-lg">

                {slide.description}

              </p>



              <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4 sm:flex sm:flex-wrap">

                {TRUST_PILLS.map((pill, i) => (

                  <span

                    key={pill.label}

                    className={`inline-flex items-center gap-1.5 rounded-full bg-white/5 px-2.5 py-1.5 text-[10px] font-medium text-slate-300 ring-1 ring-white/10 sm:px-3 sm:text-xs ${

                      i === 2 ? "col-span-2 justify-center sm:col-span-1 sm:justify-start" : ""

                    }`}

                  >

                    <pill.icon className="h-3 w-3 shrink-0 text-brand-400" />

                    {pill.label}

                  </span>

                ))}

              </div>



              <div className="mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:flex-wrap">

                <Link

                  href="/iletisim"

                  className="btn-primary w-full justify-center sm:w-auto"

                >

                  Ücretsiz Teklif Al

                  <ArrowRight className="h-5 w-5" />

                </Link>

                <a

                  href={`tel:${SITE.phone.replace(/\s/g, "")}`}

                  className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition active:bg-white/10 hover:border-white/40 hover:bg-white/10 sm:w-auto"

                >

                  <Phone className="h-4 w-4 shrink-0" />

                  {SITE.phoneDisplay}

                </a>

              </div>



              <div className="mt-8 grid grid-cols-3 gap-2 border-t border-white/10 pt-6 sm:mt-10 sm:gap-4 sm:pt-8 lg:gap-6">

                {[

                  { value: "5+", label: "Yıl Deneyim" },

                  { value: "498+", label: "Memnun Müşteri" },

                  { value: "7/24", label: "Hızlı Servis" },

                ].map((item) => (

                  <div key={item.label} className="text-center sm:text-left">

                    <p className="text-lg font-bold text-white sm:text-2xl lg:text-3xl">

                      {item.value}

                    </p>

                    <p className="mt-0.5 text-[10px] leading-tight text-slate-400 sm:text-sm">

                      {item.label}

                    </p>

                  </div>

                ))}

              </div>

            </div>



            {/* Slayt kontrolleri */}

            <div className="mt-6 flex items-center justify-between gap-4 sm:mt-8 sm:justify-start">

              <div className="flex items-center gap-1">

                {slides.map((s, i) => (

                  <button

                    key={s.image}

                    onClick={() => goTo(i)}

                    className="flex h-11 w-11 items-center justify-center sm:h-8 sm:w-auto sm:justify-start"

                    aria-label={`Slayt ${i + 1}`}

                  >

                    <span

                      className="relative block h-1.5 overflow-hidden rounded-full bg-white/15 transition-all"

                      style={{ width: i === current ? 40 : 10 }}

                    >

                      {i === current && (

                        <span

                          className="absolute inset-y-0 left-0 rounded-full bg-brand-400"

                          style={{ width: `${progress * 100}%` }}

                        />

                      )}

                    </span>

                  </button>

                ))}

              </div>

              <div className="flex items-center gap-1 sm:hidden">

                <button

                  onClick={prev}

                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 active:bg-white/10"

                  aria-label="Önceki slayt"

                >

                  <ChevronLeft className="h-4 w-4" />

                </button>

                <button

                  onClick={next}

                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white/70 active:bg-white/10"

                  aria-label="Sonraki slayt"

                >

                  <ChevronRight className="h-4 w-4" />

                </button>

              </div>

              <div className="hidden items-center gap-1 sm:flex">

                <button

                  onClick={prev}

                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-white/30 hover:bg-white/10 hover:text-white"

                  aria-label="Önceki slayt"

                >

                  <ChevronLeft className="h-4 w-4" />

                </button>

                <button

                  onClick={next}

                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-white/30 hover:bg-white/10 hover:text-white"

                  aria-label="Sonraki slayt"

                >

                  <ChevronRight className="h-4 w-4" />

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>



      <div className="hero-wave" />

    </section>

  );

}


