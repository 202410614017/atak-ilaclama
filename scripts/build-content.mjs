import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const raw = JSON.parse(
  readFileSync(join(__dirname, "../data/site_content.json"), "utf8")
);

const NAV_ITEMS = new Set([
  "Anasayfa", "Haşere İlaçlama Hizmetleri", "Temizlik Hizmetleri",
  "Kurumsal", "Blog", "İletişim", "Hakkımızda", "Haşere İlaçlama",
  "Dezenfeksiyon Hizmetleri", "Dezenfeksiyon", "Temizlik",
  "BALIKESİR - Atak ilaçlama ve temizlik hizmetleri",
  "05461551848", "Bahçelievler, 5013, 10100 Altıeylül/Balıkesir",
  "24 Saat Açığız", "+90 546 155 1848", "[email protected]",
  "Gönder", "Rezervasyon Yap",
]);

function shouldSkip(text) {
  if (!text || text.length < 3) return true;
  if (NAV_ITEMS.has(text)) return true;
  if (/^Tüm Hakları Saklıdır/.test(text)) return true;
  if (/^Telefon Numaramız/.test(text)) return true;
  if (/^Kategoriye Dön/.test(text)) return true;
  if (/^Talebiniz/.test(text)) return true;
  if (/^Hizmetler hakkında/.test(text)) return true;
  if (/^Lütfen bilgilerinizi/.test(text)) return true;
  if (/^En kısa sürede/.test(text)) return true;
  if (text === "Balıkesir ve Çevresinde") return true;
  if (text === "Sağlıklı Ortamlar İçin") return true;
  if (text === "Haşeresiz Yaşam Alanları") return true;
  return false;
}

const processed = {};
for (const [key, page] of Object.entries(raw.pages)) {
  processed[key] = {
    slug: page.slug,
    pageTitle: page.page_title,
    h1: page.h1,
    headings: page.headings.filter(
      (h) => !["Sizi Arayalım!", "Rezervasyon Talebi"].includes(h.text)
    ),
    paragraphs: page.paragraphs.filter((p) => !shouldSkip(p)),
    bullets: (page.bullet_lists || []).filter((b) => !shouldSkip(b)),
  };
}

writeFileSync(
  join(__dirname, "../src/lib/pages.json"),
  JSON.stringify(processed, null, 0)
);
console.log("Built", Object.keys(processed).length, "pages");
