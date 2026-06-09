export const SERVICE_TYPES = [
  "Haşere İlaçlama",
  "Temizlik",
  "Dezenfeksiyon",
  "Periyodik Anlaşma",
  "Diğer",
] as const;

export const PLACE_TYPES = [
  "Konut / Ev",
  "Apartman / Site",
  "İşyeri / Ofis",
  "Restoran / Kafe",
  "Otel / Pansiyon",
  "Fabrika / Depo",
  "Diğer",
] as const;

export const WORKING_HOURS = [
  { day: "Pazartesi – Cuma", hours: "09:00 – 18:00" },
  { day: "Cumartesi", hours: "10:00 – 14:00" },
  { day: "Pazar", hours: "Kapalı", muted: true },
  { day: "Acil Müdahale", hours: "7/24 – Her Gün", highlight: true },
] as const;

export const CONTACT_FAQ = [
  {
    q: "Keşif ücretsiz mi?",
    a: "Evet, keşif tamamen ücretsizdir. Uzmanımız adresinize gelir, sorunu inceler ve size net fiyat teklifi sunar. Ek ücret talep edilmez.",
  },
  {
    q: "Aynı gün hizmet veriyor musunuz?",
    a: "Evet. Sabah saatlerinde yapılan aramalar genellikle aynı gün karşılanır. Balıkesir genelinde geniş saha ekibimiz sayesinde acil vakalara 2-3 saat içinde müdahale edebiliyoruz.",
  },
  {
    q: "Hangi ilçelere hizmet veriyorsunuz?",
    a: "Balıkesir'in 20'den fazla ilçesine hizmet veriyoruz. Karesi, Altıeylül, Edremit, Bandırma, Ayvalık'tan Erdek, Gönen, Burhaniye gibi sahil ilçelerine kadar tüm Balıkesir.",
  },
  {
    q: "Gece veya hafta sonu arayabilir miyim?",
    a: "Acil müdahale hattımız 7/24 aktiftir. Gece yarısı veya hafta sonu acil vakalar için hemen arayın — ekibimiz en kısa sürede müdahale eder.",
  },
] as const;
