import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import PageAside, { AsideContactInfo } from "@/components/PageAside";
import { ContentWithAside, PageSection } from "@/components/ContentLayout";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "İletişim",
};

export default function IletisimPage() {
  return (
    <>
      <PageHero
        title="Bize Ulaşmak Çok Kolay!"
        breadcrumb={[
          { label: "Anasayfa", href: "/" },
          { label: "İletişim", href: "/iletisim" },
        ]}
      />

      <PageSection>
        <ContentWithAside
          aside={
            <PageAside
              cta={{
                title: "7/24 Destek Hattı",
                description: "Acil ilaçlama veya temizlik talepleriniz için hemen arayın.",
                href: `tel:${SITE.phone.replace(/\s/g, "")}`,
                label: SITE.phoneDisplay,
              }}
            >
              <AsideContactInfo showRegion={false} />
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-1 sm:gap-4">
                {[
                  {
                    icon: Phone,
                    label: "Telefon",
                    value: SITE.phone,
                    href: `tel:${SITE.phone.replace(/\s/g, "")}`,
                  },
                  {
                    icon: Phone,
                    label: "WhatsApp",
                    value: "Mesaj Gönder",
                    href: `https://wa.me/${SITE.whatsapp}`,
                  },
                  {
                    icon: Mail,
                    label: "E-posta",
                    value: SITE.email,
                    href: `mailto:${SITE.email}`,
                  },
                  {
                    icon: MapPin,
                    label: "Adres",
                    value: "Haritada Gör",
                    href: `https://maps.google.com/?q=${encodeURIComponent(SITE.address)}`,
                  },
                ].map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === "Adres" || item.label === "WhatsApp" ? "_blank" : undefined}
                    rel={item.label === "Adres" || item.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                    className="animated-item flex min-h-[88px] flex-col items-center justify-center rounded-2xl bg-white p-4 text-center shadow-md transition active:scale-[0.98] hover:shadow-lg sm:min-h-0 sm:p-5"
                  >
                    <item.icon className="h-7 w-7 text-brand-600 sm:h-8 sm:w-8" />
                    <p className="mt-2 text-xs text-slate-500 sm:text-sm">{item.label}</p>
                    <p className="mt-0.5 line-clamp-2 text-xs font-semibold text-slate-900 sm:text-sm">
                      {item.value}
                    </p>
                  </a>
                ))}
              </div>
              <div className="flex items-center justify-center gap-2 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-600">
                <Clock className="h-4 w-4 shrink-0 text-brand-500" />
                {SITE.hours}
              </div>
            </PageAside>
          }
          main={
            <>
              <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
                <ContactForm />
                <ContactForm
                  title="Rezervasyon Talebi"
                  subtitle="Lütfen bilgilerinizi eksiksiz doldurunuz."
                  variant="reservation"
                />
              </div>

              <div className="mt-8 overflow-hidden rounded-2xl shadow-lg sm:mt-10">
                <iframe
                  src={SITE.mapEmbed}
                  className="h-64 w-full sm:h-80 lg:h-96"
                  loading="lazy"
                  title="Atak İlaçlama Konum"
                />
              </div>
            </>
          }
        />
      </PageSection>
    </>
  );
}
