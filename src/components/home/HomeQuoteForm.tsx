"use client";

import { useState } from "react";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/site";
import { BtnNavy, BtnWhatsApp, SectionLabel, SectionTitle } from "./ui";

export default function HomeQuoteForm() {
  const [sent, setSent] = useState(false);

  return (
    <section className="bg-slate-50 py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="animated-item">
            <SectionLabel>ÜCRETSİZ TEKLİF</SectionLabel>
            <SectionTitle dark="Fiyatı Hemen" highlight="Öğrenin" />
            <p className="mt-4 text-slate-500">
              Formu doldurun, sizi arayalım. Ya da WhatsApp&apos;tan yazın — aynı gün
              müdahale için hazırız.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <BtnNavy href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="w-full sm:w-auto">
                <Phone className="h-4 w-4" />
                {SITE.phoneDisplay}
              </BtnNavy>
              <BtnWhatsApp className="w-full sm:w-auto" label="WhatsApp'tan Yaz" />
            </div>
          </div>
          <div className="animated-item rounded-3xl border border-slate-100 bg-white p-6 shadow-lg sm:p-8">
            {sent ? (
              <div className="py-10 text-center">
                <p className="text-xl font-bold text-slate-900">Talebiniz Alındı!</p>
                <p className="mt-2 text-slate-500">En kısa sürede sizinle iletişime geçeceğiz.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                }}
                className="space-y-4"
              >
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">Ad Soyad</label>
                  <input
                    required
                    placeholder="Adınız"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-slate-700">Telefon</label>
                  <input
                    required
                    type="tel"
                    placeholder="05XX XXX XX XX"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-accent-blue focus:ring-2 focus:ring-accent-blue/20"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">Hizmet Türü</label>
                    <select className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-accent-blue">
                      <option>Haşere İlaçlama</option>
                      <option>Temizlik</option>
                      <option>Dezenfeksiyon</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-slate-700">Mekan Tipi</label>
                    <select className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-accent-blue">
                      <option>Konut</option>
                      <option>İşyeri</option>
                      <option>Restoran</option>
                      <option>Diğer</option>
                    </select>
                  </div>
                </div>
                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-navy py-3.5 text-sm font-semibold text-white transition hover:bg-navy-light"
                >
                  Teklif Talebi Gönder
                </button>
                <p className="text-center text-xs text-slate-400">
                  Bilgileriniz yalnızca sizinle iletişim için kullanılır.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
