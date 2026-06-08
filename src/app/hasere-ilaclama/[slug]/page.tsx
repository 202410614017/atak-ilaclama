import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import PageContent from "@/components/PageContent";
import PageAside from "@/components/PageAside";
import ContactForm from "@/components/ContactForm";
import { ContentWithAside, PageSection } from "@/components/ContentLayout";
import { getHasereSubpage } from "@/lib/content";
import { PEST_SERVICES, EXTRA_HASERE_SLUGS, CLEANING_SERVICES } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const pest = PEST_SERVICES.map((s) => ({ slug: s.slug }));
  const extra = EXTRA_HASERE_SLUGS.map((slug) => ({ slug }));
  return [...pest, ...extra];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getHasereSubpage(slug);
  if (!page) return { title: "Sayfa Bulunamadı" };
  return { title: page.h1 || page.pageTitle };
}

export default async function HasereSubPage({ params }: Props) {
  const { slug } = await params;
  const page = getHasereSubpage(slug);
  const service =
    PEST_SERVICES.find((s) => s.slug === slug) ||
    CLEANING_SERVICES.find((s) => s.slug === slug);
  if (!page) notFound();

  const otherServices = PEST_SERVICES.filter((s) => s.slug !== slug)
    .slice(0, 6)
    .map((s) => ({
      title: s.title,
      href: `/hasere-ilaclama/${s.slug}`,
    }));

  return (
    <>
      <PageHero
        title={page.h1 || service?.title || page.pageTitle}
        breadcrumb={[
          { label: "Anasayfa", href: "/" },
          { label: "Haşere İlaçlama", href: "/hasere-ilaclama" },
          {
            label: service?.title || page.h1,
            href: `/hasere-ilaclama/${slug}`,
          },
        ]}
        image={service?.image}
      />

      <PageSection>
        <ContentWithAside
          main={<PageContent page={page} />}
          aside={
            <PageAside
              image={
                service?.image
                  ? { src: service.image, alt: service.title }
                  : undefined
              }
              cta={{
                title: "7/24 Hızlı Servis",
                description: "Balıkesir genelinde aynı gün müdahale imkânı.",
                href: "/iletisim",
                label: "Hemen Teklif Al",
              }}
              links={{
                title: "Diğer Hizmetler",
                items: otherServices,
              }}
            />
          }
        />
      </PageSection>

      <PageSection muted>
        <div className="mx-auto max-w-3xl">
          <ContactForm />
        </div>
      </PageSection>
    </>
  );
}
