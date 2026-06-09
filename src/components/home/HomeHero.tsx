import Image from "next/image";
import { Phone, CheckCircle2 } from "lucide-react";
import { img, SITE } from "@/lib/site";
import { HERO_STATS } from "@/lib/home-data";
import { BtnNavy, BtnWhatsApp } from "./ui";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-accent-blue/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-accent-blue/8 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-10 sm:px-6 sm:py-14 lg:grid-cols-2 lg:items-center lg:gap-12 lg:px-8 lg:py-20">
        <div className="order-2 lg:order-1">
          <p className="animated-item text-xs font-bold uppercase tracking-widest text-accent-blue">
            BÖCEK İLAÇLAMA BALIKESİR
          </p>
          <h1 className="animated-item mt-3 text-[2rem] font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-[3.25rem]">
            Evde Böcek mi Var?
            <br />
            <span className="text-accent-blue">Kesin Çözüm, Kalıcı Huzur</span>
          </h1>
          <p className="animated-item mt-5 max-w-lg text-base leading-relaxed text-slate-500">
            5 yılı aşkın deneyimle Balıkesir&apos;de hamam böceği, tahtakurusu, fare ve
            tüm haşere türlerine karşı profesyonel, kokusuz ve garantili ilaçlama hizmeti
            sunuyoruz.
          </p>
          <div className="animated-item mt-7 flex flex-col gap-3 sm:flex-row">
            <BtnNavy href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="w-full sm:w-auto">
              <Phone className="h-4 w-4" />
              Ara — Ücretsiz Keşif
            </BtnNavy>
            <BtnWhatsApp className="w-full sm:w-auto" label="WhatsApp" />
          </div>
          <div className="animated-item mt-10 grid grid-cols-2 gap-6 border-t border-slate-100 pt-8 sm:grid-cols-4">
            {HERO_STATS.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-bold text-slate-900 sm:text-3xl">{s.value}</p>
                <p className="mt-0.5 text-xs text-slate-400 sm:text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="animated-item relative order-1 mt-0 lg:order-2 lg:mt-0">
          <div className="absolute -inset-2 rounded-[1.75rem] bg-gradient-to-br from-accent-blue/20 via-transparent to-accent-blue/5 blur-2xl sm:-inset-3 sm:rounded-[2rem]" />
          <div className="relative overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200/60">
            <div className="relative aspect-[4/3] sm:aspect-[5/4]">
              <Image
                src={img("/2026/04/atak-ilaclama-hizmeti-1.webp")}
                alt="Balıkesir profesyonel ilaçlama"
                fill
                className="object-cover hero-ken-burns"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 z-10 flex gap-2 sm:bottom-4 sm:left-4 sm:right-4 sm:gap-3">
                <div className="flex min-w-0 flex-1 items-center gap-2.5 rounded-xl border border-white/10 bg-slate-900/85 px-3 py-2.5 shadow-lg backdrop-blur-md sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-blue text-white sm:h-10 sm:w-10 sm:rounded-xl">
                    <CheckCircle2 className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold text-white sm:text-sm">5+ Yıl</p>
                    <p className="truncate text-[10px] text-slate-300 sm:text-xs">
                      Balıkesir&apos;de güvenilir hizmet
                    </p>
                  </div>
                </div>
                <div className="flex shrink-0 items-center rounded-xl border border-white/10 bg-slate-900/85 px-3 py-2.5 shadow-lg backdrop-blur-md sm:rounded-2xl sm:px-4 sm:py-3">
                  <div className="text-center">
                    <p className="text-sm font-bold text-accent-blue sm:text-lg">%100</p>
                    <p className="text-[10px] text-slate-300 sm:text-xs">Garanti</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
