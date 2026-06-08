import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Shield } from "lucide-react";
import { img } from "@/lib/site";

type Props = {
  title: string;
  subtitle?: string;
  breadcrumb?: { label: string; href: string }[];
  image?: string;
  badge?: string;
};

export default function PageHero({
  title,
  subtitle,
  breadcrumb,
  image,
  badge,
}: Props) {
  return (
    <section className="relative overflow-hidden gradient-hero text-white">
      {image && (
        <div className="absolute inset-0">
          <Image src={img(image)} alt="" fill className="object-cover opacity-15" priority />
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20" />

      <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-20">
        {breadcrumb && (
          <nav className="mb-5 flex flex-wrap items-center gap-1 text-sm text-white/60">
            {breadcrumb.map((item, i) => (
              <span key={item.href} className="flex items-center gap-1">
                {i > 0 && <ChevronRight className="h-3 w-3" />}
                {i === breadcrumb.length - 1 ? (
                  <span className="text-white/90">{item.label}</span>
                ) : (
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                )}
              </span>
            ))}
          </nav>
        )}
        {badge && (
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide backdrop-blur">
            <Shield className="h-3.5 w-3.5" />
            {badge}
          </span>
        )}
        <h1 className="max-w-3xl text-2xl font-bold leading-tight text-balance sm:text-3xl lg:text-[2.75rem] lg:leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/80 lg:text-lg">
            {subtitle}
          </p>
        )}
      </div>
      <div className="hero-wave" />
    </section>
  );
}
