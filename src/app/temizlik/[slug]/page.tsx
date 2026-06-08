import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import PageContent from "@/components/PageContent";
import PageAside from "@/components/PageAside";
import ContactForm from "@/components/ContactForm";
import { ContentWithAside, PageSection } from "@/components/ContentLayout";
import { getTemizlikSubpage } from "@/lib/content";
import { CLEANING_SERVICES, serviceHref } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return CLEANING_SERVICES.filter((s) => s.base === "temizlik").map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = getTemizlikSubpage(slug);
  if (!page) return { title: "Sayfa Bulunamadı" };
  return { title: page.h1 || page.pageTitle };
}

export default async function TemizlikSubPage({ params }: Props) {
  const { slug } = await params;
  const page = getTemizlikSubpage(slug);
  const service = CLEANING_SERVICES.find((s) => s.slug === slug);
  if (!page || !service) notFound();

  const otherServices = CLEANING_SERVICES.filter((s) => s.slug !== slug).map(
    (s) => ({
      title: s.title,
      href: serviceHref(s.base, s.slug),
    })
  );

  return (
    <>
      <PageHero
        title={page.h1 || service.title}
        breadcrumb={[
          { label: "Anasayfa", href: "/" },
          { label: "Temizlik", href: "/temizlik" },
          { label: service.title, href: `/temizlik/${slug}` },
        ]}
        image={service.image}
      />

      <PageSection>
        <ContentWithAside
          main={<PageContent page={page} />}
          aside={
            <PageAside
              image={{ src: service.image, alt: service.title }}
              cta={{
                title: "Ücretsiz Keşif",
                description: "Alanınıza özel temizlik planı için hemen iletişime geçin.",
                href: "/iletisim",
                label: "Talep Oluştur",
              }}
              links={{
                title: "Diğer Temizlik Hizmetleri",
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
