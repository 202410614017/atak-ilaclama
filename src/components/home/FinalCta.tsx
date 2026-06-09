import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { BtnWhatsApp } from "./ui";

export default function FinalCta() {
  return (
    <>
      <div className="animated-item bg-accent-blue/10 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 px-4 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <span className="text-2xl">🏛️</span>
            <div>
              <p className="text-xs font-bold uppercase text-accent-blue">Resmi Lisans Bilgisi</p>
              <p className="text-sm text-slate-700">
                Atak İlaçlama, Sağlık Bakanlığı onaylı ürünlerle ilaçlama yapmaktadır.
              </p>
            </div>
          </div>
          <a
            href="/iletisim"
            className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition hover:bg-navy-light"
          >
            <Phone className="h-4 w-4" />
            Bilgi Al
          </a>
        </div>
      </div>
      <section className="animated-item mx-4 mb-8 mt-8 sm:mx-6 lg:mx-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-navy px-6 py-12 text-center text-white sm:px-12 sm:py-16">
          <h2 className="text-2xl font-bold sm:text-4xl">Bugün Arayın, Bugün Çözelim.</h2>
          <p className="mt-3 text-slate-400">
            Ücretsiz keşif · Aynı gün hizmet · Kesin çözüm garantisi
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-3.5 text-sm font-bold text-navy transition hover:bg-slate-100 sm:w-auto"
            >
              <Phone className="h-4 w-4" />
              {SITE.phoneDisplay}
            </a>
            <BtnWhatsApp className="w-full sm:w-auto" label="WhatsApp'tan Yaz" />
          </div>
        </div>
      </section>
    </>
  );
}
