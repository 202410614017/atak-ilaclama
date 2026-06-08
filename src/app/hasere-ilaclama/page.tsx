import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import PageContent from "@/components/PageContent";
import PageAside from "@/components/PageAside";
import ContactForm from "@/components/ContactForm";
import { ContentWithAside, PageSection } from "@/components/ContentLayout";
import { getPage } from "@/lib/content";
import { PEST_SERVICES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Balıkesir Haşere İlaçlama Hizmetleri",
};

export default function HasereIlaclamaPage() {
  const page = getPage("hasere-ilaclama")!;

  const quickLinks = PEST_SERVICES.slice(0, 8).map((s) => ({
    title: s.title,
    href: `/hasere-ilaclama/${s.slug}`,
  }));

  return (
    <>
      <PageHero
        title="BALIKESİR HAŞERE İLAÇLAMA HİZMETLERİ"
        subtitle="Profesyonel çözümlerle haşerelere karşı etkili ve kalıcı koruma sağlıyoruz."
        badge="SAĞLIĞINIZ BİZİM İÇİN ÖNCELİĞİMİZ"
        image="/2026/05/balikesir-hasere-ilaclama.webp"
        breadcrumb={[
          { label: "Anasayfa", href: "/" },
          { label: "Haşere İlaçlama", href: "/hasere-ilaclama" },
        ]}
      />

      <PageSection>
        <ContentWithAside
          main={<PageContent page={page} />}
          aside={
            <PageAside
              image={{
                src: "/2026/05/balikesir-hasere-ilaclama.webp",
                alt: "Balıkesir Haşere İlaçlama",
              }}
              cta={{
                title: "Acil İlaçlama",
                description: "Haşere sorununuz için aynı gün müdahale imkânı.",
                href: "/iletisim",
                label: "Hemen Ara",
              }}
              links={{
                title: "Popüler Hizmetler",
                items: quickLinks,
              }}
            />
          }
        />

        <div className="mt-12 sm:mt-16">
          <SectionHeader
            eyebrow="Haşere Türleri"
            title="Balıkesir Haşere İlaçlama Hizmetlerimiz"
            description="Karşılaştığınız haşere türüne özel profesyonel çözümler sunuyoruz. Aşağıdaki hizmetlerden ihtiyacınıza uygun olanı inceleyebilirsiniz:"
          />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:mt-10 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {PEST_SERVICES.map((s) => (
            <ServiceCard
              key={s.slug}
              title={s.title}
              description={s.desc}
              image={s.image}
              href={`/hasere-ilaclama/${s.slug}`}
            />
          ))}
        </div>
      </PageSection>

      <PageSection muted>
        <div className="mx-auto max-w-3xl">
          <ContactForm />
        </div>
      </PageSection>
    </>
  );
}
