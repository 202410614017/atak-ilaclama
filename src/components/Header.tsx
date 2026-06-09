"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { SITE, img } from "@/lib/site";

const NAV = [
  { label: "Hizmetler", href: "/hasere-ilaclama", children: [
    { label: "Haşere İlaçlama", href: "/hasere-ilaclama" },
    { label: "Temizlik", href: "/temizlik" },
    { label: "Dezenfeksiyon", href: "/dezenfeksiyon-hizmetleri" },
  ]},
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "Blog", href: "/blog" },
  { label: "İletişim", href: "/iletisim" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header data-fixed-ui className="no-animate sticky top-0 z-50 border-b border-slate-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-2">
          <Image
            src={img("/2026/04/atak-ilaclama-logo.png")}
            alt={SITE.name}
            width={160}
            height={42}
            className="h-8 w-auto sm:h-9"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) =>
            item.children ? (
              <div key={item.href} className="relative group">
                <Link
                  href={item.href}
                  className={`inline-flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium transition ${
                    isActive(item.href)
                      ? "text-accent-blue"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5" />
                </Link>
                <div className="invisible absolute left-0 top-full z-50 min-w-[200px] rounded-xl border border-slate-100 bg-white py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-slate-600 hover:bg-slate-50 hover:text-accent-blue"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                  isActive(item.href)
                    ? "text-accent-blue"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={`https://wa.me/${SITE.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1fb855]"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="inline-flex items-center gap-2 rounded-full bg-navy px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-navy-light"
          >
            <Phone className="h-4 w-4" />
            {SITE.phoneDisplay}
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 lg:hidden"
          aria-label="Menü"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <>
          <button
            type="button"
            aria-label="Menüyü kapat"
            className="fixed inset-0 z-40 bg-slate-900/40 lg:hidden"
            onClick={() => setOpen(false)}
          />
          <nav className="relative z-50 max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-slate-100 bg-white px-4 py-4 lg:hidden">
          {NAV.map((item) => (
            <div key={item.href}>
              {item.children ? (
                <>
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-slate-700"
                  >
                    {item.label}
                    <ChevronDown className={`h-4 w-4 transition ${servicesOpen ? "rotate-180" : ""}`} />
                  </button>
                  {servicesOpen && (
                    <div className="mb-2 ml-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className={`block rounded-lg px-3 py-3 text-sm font-medium ${
                    isActive(item.href) ? "text-accent-blue" : "text-slate-700"
                  }`}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <div className="mt-3 flex flex-col gap-2">
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              className="flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-sm font-semibold text-white"
            >
              WhatsApp
            </a>
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="flex items-center justify-center gap-2 rounded-full bg-navy py-3 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" />
              {SITE.phoneDisplay}
            </a>
          </div>
          </nav>
        </>
      )}
    </header>
  );
}
