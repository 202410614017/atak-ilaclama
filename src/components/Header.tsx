"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MapPin, Instagram, Clock } from "lucide-react";
import { SITE, NAV, img } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50">
      {/* Top bar */}
      <div className="hidden bg-slate-900 text-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2 text-xs">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="h-3.5 w-3.5 text-brand-400" />
              {SITE.hours}
            </span>
            <span className="text-slate-400">{SITE.address}</span>
          </div>
          <div className="flex items-center gap-4">
            <a
              href={`mailto:${SITE.email}`}
              className="text-slate-300 transition hover:text-white"
            >
              {SITE.email}
            </a>
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="font-semibold text-brand-300 transition hover:text-brand-200"
            >
              {SITE.phone}
            </a>
          </div>
        </div>
      </div>

      <div
        className={`border-b border-slate-200/60 transition-all duration-300 ${
          scrolled ? "glass-scrolled" : "glass"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-2.5 sm:gap-4 sm:py-3 lg:px-8">
          <Link href="/" className="flex min-w-0 shrink items-center gap-2">
            <Image
              src={img("/2026/04/atak-ilaclama-logo.png")}
              alt={SITE.name}
              width={170}
              height={44}
              className="h-8 w-auto sm:h-10 lg:h-11"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-0.5 xl:flex">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`whitespace-nowrap rounded-lg px-2.5 py-2 text-xs font-medium transition lg:px-3.5 lg:text-sm ${
                  isActive(item.href)
                    ? "bg-brand-600 text-white shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href={`tel:${SITE.phone.replace(/\s/g, "")}`}
            className="btn-primary !hidden !px-3 !py-2 !text-xs sm:!inline-flex lg:!hidden"
          >
            <Phone className="h-3.5 w-3.5" />
            Ara
          </a>

          <div className="hidden items-center gap-2 lg:flex">
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-brand-600"
              aria-label="Telefon"
            >
              <Phone className="h-4 w-4" />
            </a>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(SITE.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-brand-600"
              aria-label="Konum"
            >
              <MapPin className="h-4 w-4" />
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-slate-100 hover:text-pink-600"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a href={`tel:${SITE.phone.replace(/\s/g, "")}`} className="btn-primary ml-2 !py-2.5 !px-5 !text-xs">
              <Phone className="h-3.5 w-3.5" />
              Hemen Ara
            </a>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 xl:hidden"
            aria-label="Menü"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {open && (
          <nav className="border-t border-slate-200 bg-white px-4 py-4 xl:hidden">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-lg px-3 py-3 text-sm font-medium ${
                  isActive(item.href)
                    ? "bg-brand-50 text-brand-700"
                    : "text-slate-700 hover:bg-slate-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`tel:${SITE.phone.replace(/\s/g, "")}`}
              className="btn-primary mt-3 w-full"
            >
              <Phone className="h-4 w-4" />
              {SITE.phoneDisplay}
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}
