import Link from "next/link";
import { Phone, ArrowRight } from "lucide-react";
import { SITE } from "@/lib/site";

export default function AboutCta() {
  return (
    <section className="bg-accent-blue py-14 text-white sm:py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">Birlikte Çalışalım</h2>
        <p className="mt-3 text-sm text-white/80 sm:text-base">
          Ücretsiz keşif · Aynı gün hizmet · %100 garanti · Balıkesir geneli
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-navy transition hover:bg-slate-100 sm:w-auto"
          >
            <Phone className="h-4 w-4" />
            {SITE.phoneDisplay}
          </a>
          <Link
            href="/iletisim"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white transition hover:bg-white/20 sm:w-auto"
          >
            İletişim Sayfası <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
