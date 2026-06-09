import { PEST_SERVICES } from "./site";

export const TRUST_ITEMS = [
  { icon: "🏅", label: "Sağlık Bakanlığı Onaylı" },
  { icon: "👨‍🔬", label: "Uzman Ekip Denetimi" },
  { icon: "✅", label: "Kesin Çözüm Garantisi" },
  { icon: "⚡", label: "Aynı Gün Hizmet" },
  { icon: "🐾", label: "Evcil Hayvan İçin Güvenli" },
  { icon: "📞", label: "7/24 Acil Destek" },
] as const;

export const HERO_STATS = [
  { value: "5+", label: "Yıl Deneyim" },
  { value: "498+", label: "Çözülen Vaka" },
  { value: "%100", label: "Garanti" },
  { value: "4.9★", label: "Müşteri Puanı" },
] as const;

export const PEST_PROBLEMS = [
  {
    icon: "🪳",
    title: "Hamam Böceği",
    desc: "Mutfak ve banyoda hızlı üreme. Jel + makineli uygulama ile kalıcı kontrol.",
    badge: "Yaygın",
    badgeColor: "bg-amber-100 text-amber-700",
    href: "/hasere-ilaclama/balikesir-hamam-bocegi-ilaclama",
  },
  {
    icon: "🛏️",
    title: "Tahtakurusu",
    desc: "Yatak ve koltukta gizli koloniler. Detaylı kontrol ve planlı uygulama.",
    badge: "Zararlı",
    badgeColor: "bg-red-100 text-red-700",
    href: "/hasere-ilaclama/balikesir-tahta-kurusu-ilaclama",
  },
  {
    icon: "🐭",
    title: "Fare & Kemirgen",
    desc: "Duvar boşlukları ve depo alanlarında profesyonel istasyon sistemi.",
    badge: "Acil",
    badgeColor: "bg-orange-100 text-orange-700",
    href: "/hasere-ilaclama/balikesir-fare-ilaclama",
  },
  {
    icon: "🐜",
    title: "Karınca & Pire",
    desc: "Koloninin kaynağına müdahale. Ev ve iş yerlerinde hızlı sonuç.",
    badge: "Yaygın",
    badgeColor: "bg-amber-100 text-amber-700",
    href: "/hasere-ilaclama/balikesir-karinca-ilaclama",
  },
  {
    icon: "🦟",
    title: "Sinek & Sivrisinek",
    desc: "İç ve dış mekân uçan haşere kontrolü. ULV ve sezonluk program.",
    badge: "Mevsimsel",
    badgeColor: "bg-sky-100 text-sky-700",
    href: "/hasere-ilaclama/balikesir-sinek-ilaclama",
  },
  {
    icon: "🕷️",
    title: "Akrep & Tehlikeli",
    desc: "Bahçe, zemin kat ve kırsal alanlarda güvenli müdahale.",
    badge: "Acil",
    badgeColor: "bg-red-100 text-red-700",
    href: "/hasere-ilaclama/balikesir-akrep-ilaclama",
  },
] as const;

export const FEATURED_SERVICES = PEST_SERVICES.slice(0, 6).map((s, i) => ({
  num: String(i + 1).padStart(2, "0"),
  title: s.title,
  desc: s.desc,
  tags: i === 0 ? ["Jel + Makineli", "Ev & İşyeri"] : i === 1 ? ["Nokta Atışı", "Otel & Konut"] : ["Profesyonel", "Balıkesir"],
  href: `/hasere-ilaclama/${s.slug}`,
}));

export const PERIODIC_FEATURES = [
  { icon: "📋", title: "Hijyen Belgesi", desc: "Her uygulama sonrası resmi rapor ve hijyen belgesi. Denetimler için ideal." },
  { icon: "🔄", title: "Düzenli Periyodik Ziyaret", desc: "Aylık, 2 aylık veya sezonluk plana göre düzenli kontrol ve uygulama." },
  { icon: "⚡", title: "Öncelikli Acil Müdahale", desc: "Anlaşmalı müşteriler ani haşere çıkışlarında öncelikli müdahale hakkına sahip." },
  { icon: "💰", title: "Anlaşma Fiyat Avantajı", desc: "Tek seferlik uygulamaya kıyasla periyodik anlaşmalarda belirgin fiyat avantajı." },
  { icon: "🏪", title: "Her İşletme Tipine Uygun", desc: "Restoran, otel, market, ofis veya apartman yönetimi için özel plan." },
  { icon: "📊", title: "Dijital Raporlama", desc: "Her ziyaret sonrası WhatsApp veya e-posta ile uygulama raporu iletilir." },
] as const;

export const PROCESS_STEPS = [
  { num: "01", icon: "📞", title: "Arayın veya Yazın", desc: "Telefon ya da WhatsApp ile ulaşın. İlk danışma ücretsiz, hemen yönlendirme alırsınız." },
  { num: "02", icon: "🔍", title: "Ücretsiz Keşif", desc: "Uzmanımız yerinde inceler, haşere türünü tespit eder, size özel plan çıkarır." },
  { num: "03", icon: "💊", title: "Profesyonel Uygulama", desc: "Bakanlık onaylı ürünler, uzman denetiminde. Alana göre doğru ekipman seçimi." },
  { num: "04", icon: "✅", title: "Garanti & Takip", desc: "Sonuç alınana kadar yanınızdayız. Gerektiğinde ücretsiz tekrar müdahale." },
] as const;

export const WHY_US = [
  { icon: "🏅", title: "Resmi Lisanslı", desc: "Sağlık Bakanlığı onaylı ilaçlar ve ruhsatlı uygulama." },
  { icon: "👨‍🔬", title: "Uzman Denetimi", desc: "Deneyimli ekip ile her uygulama kontrol altında." },
  { icon: "🎯", title: "%100 Garanti", desc: "Sonuç alınmazsa ücretsiz tekrar müdahale." },
  { icon: "⚡", title: "Aynı Gün", desc: "Acil durumlarda aynı gün servis imkânı." },
  { icon: "👨‍👩‍👧", title: "Aile Güvenli", desc: "Çocuk ve evcil hayvan dostu ürün seçenekleri." },
  { icon: "🏷️", title: "Şeffaf Fiyat", desc: "Keşif sonrası net fiyat, gizli masraf yok." },
] as const;

export const SERVICE_AREAS = [
  {
    icon: "🏙️",
    title: "Merkez İlçeler",
    desc: "Yoğun apartman yapısı, bina geneli uygulama",
    districts: "Karesi · Altıeylül · Merkez · Bahçelievler · Paşaalanı",
  },
  {
    icon: "🏖️",
    title: "Sahil & Turizm Bölgeleri",
    desc: "Sezon öncesi koruyucu uygulama, sivrisinek kontrolü",
    districts: "Edremit · Ayvalık · Burhaniye · Erdek · Bandırma",
  },
  {
    icon: "🏭",
    title: "Sanayi & Çevre İlçeler",
    desc: "Geniş alan, depo ve fabrika ilaçlaması",
    districts: "Gönen · Susurluk · Bigadiç · Sındırgı · Dursunbey",
  },
] as const;

export const REVIEWS = [
  { stars: 5, text: "Hamam böceği sorunumuz tek seansta çözüldü. Ekip çok profesyoneldi, kokusuz uygulama yaptılar.", name: "Ayşe K.", loc: "Altıeylül — Konut", initials: "AK" },
  { stars: 5, text: "Restoranımız için aylık periyodik anlaşma yaptık. Hijyen belgesi ve düzenli raporlama çok işimize yarıyor.", name: "Mehmet O.", loc: "Karesi — Restoran", initials: "MO" },
  { stars: 5, text: "Tahtakurusu problemi vardı, detaylı inceleme yaptılar. 2 hafta içinde tamamen bitti, çok memnunuz.", name: "Zeynep Y.", loc: "Edremit — Daire", initials: "ZY" },
  { stars: 5, text: "Ofisimizde fare sorunu vardı, aynı gün geldiler. Hızlı ve uygun fiyatlı çözüm sağladılar.", name: "Cem Ç.", loc: "Bandırma — Ofis", initials: "CÇ" },
] as const;

export const TARGETS = [
  { icon: "🏠", title: "Daire & Apartman", desc: "Çocuk ve evcil hayvan güvenli ürünler. Bina geneli yaklaşım.", tag: "Aile Dostu" },
  { icon: "🏡", title: "Villa & Yazlık", desc: "Sezon başında koruyucu uygulama. Dış mekân haşere kontrolü.", tag: "Sezonluk Paket" },
  { icon: "🍽️", title: "Restoran & Kafe", desc: "Gıda güvenliği standartlarında ilaçlama. Hijyen belgesi.", tag: "Hijyen Belgeli" },
  { icon: "🏨", title: "Otel & Pansiyon", desc: "Misafir konforu için sessiz ve hızlı uygulama.", tag: "Tahtakurusu Dahil" },
  { icon: "🏢", title: "Ofis & İşyeri", desc: "Mesai saatlerini aksatmayan hızlı uygulama.", tag: "İşyeri" },
  { icon: "🏭", title: "Endüstriyel Alan", desc: "Fabrika ve depo için geniş alan ilaçlaması.", tag: "Kurumsal" },
] as const;

export const FAQ_ITEMS = [
  { q: "İlaçlama sonrası eve hemen girebilir miyiz?", a: "Uygulama türüne göre 2-4 saat havalandırma önerilir. Kokusuz uygulamalarda bu süre daha kısadır. Ekip size net bilgi verir." },
  { q: "Tek seans yeterli mi, yoksa tekrar gerekir mi?", a: "Haşere türüne ve yoğunluğa bağlıdır. Çoğu durumda tek seans yeterlidir; garanti kapsamında gerekirse ücretsiz tekrar yapılır." },
  { q: "Fiyatları nasıl belirliyorsunuz?", a: "Ücretsiz keşif sonrası alan büyüklüğü, haşere türü ve uygulama yöntemine göre net fiyat sunulur. Gizli masraf yoktur." },
  { q: "Balıkesir'in tüm ilçelerine hizmet veriyor musunuz?", a: "Evet, Karesi, Altıeylül, Edremit, Bandırma, Ayvalık ve Balıkesir genelinde hizmet veriyoruz." },
  { q: "Sağlık Bakanlığı onaylı ürün kullanıyor musunuz?", a: "Evet, tüm ilaçlarımız Sağlık Bakanlığı onaylı ve çevre dostu ürünlerdir." },
] as const;
