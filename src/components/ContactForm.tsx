"use client";

import { useState } from "react";
import { Send, CheckCircle, User, Phone, Mail, MessageSquare } from "lucide-react";

type Props = {
  title?: string;
  subtitle?: string;
  variant?: "call" | "reservation";
};

const inputClass =
  "w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 pl-11 text-sm outline-none transition focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/15";

export default function ContactForm({
  title = "Sizi Arayalım!",
  subtitle = "Hizmetler hakkında soru sormak veya hizmetlerimizden faydalanmak için aşağıdaki bölümleri lütfen eksiksiz doldurun.",
  variant = "call",
}: Props) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="animated-item card-elevated p-10 text-center">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-100">
          <CheckCircle className="h-8 w-8 text-brand-600" />
        </div>
        <h3 className="mt-5 text-xl font-bold text-slate-900">Talebiniz Alındı!</h3>
        <p className="mt-2 text-slate-600">
          Talebiniz tarafımıza ulaştı. En kısa sürede sizinle iletişime geçeceğiz.
        </p>
      </div>
    );
  }

  return (
    <div className="animated-item card-elevated p-6 lg:p-8">
      <h2 className="text-xl font-bold text-slate-900 lg:text-2xl">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{subtitle}</p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
        className="mt-6 grid gap-4 sm:grid-cols-2"
      >
        <div className="relative">
          <User className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input required placeholder="Adınız Soyadınız" className={inputClass} />
        </div>
        <div className="relative">
          <Phone className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input required type="tel" placeholder="Telefon Numaranız" className={inputClass} />
        </div>
        <div className="relative sm:col-span-2">
          <Mail className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input type="email" placeholder="E-posta Adresiniz" className={inputClass} />
        </div>
        {variant === "reservation" && (
          <input
            type="date"
            className="rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:bg-white focus:ring-2 focus:ring-brand-500/15"
          />
        )}
        <div className="relative sm:col-span-2">
          <MessageSquare className="absolute left-3.5 top-4 h-4 w-4 text-slate-400" />
          <textarea
            required
            rows={4}
            placeholder="Mesajınız"
            className={`${inputClass} !pl-11 resize-none`}
          />
        </div>
        <button type="submit" className="btn-primary sm:col-span-2">
          <Send className="h-4 w-4" />
          {variant === "reservation" ? "Rezervasyon Yap" : "Gönder"}
        </button>
        <p className="text-center text-xs text-slate-400 sm:col-span-2">
          Bilgileriniz yalnızca hizmet talebiniz için kullanılacaktır.
        </p>
      </form>
    </div>
  );
}
