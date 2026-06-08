import type { PageData } from "@/lib/content";

export default function PageContent({ page }: { page: PageData }) {
  const contentHeadings = page.headings.filter(
    (h) =>
      !["Sizi Arayalım!", "Rezervasyon Talebi"].includes(h.text) &&
      h.text !== page.h1
  );

  const bullets = page.bullets.filter(
    (b) =>
      b.length > 15 ||
      b.startsWith("Sağlık") ||
      b.startsWith("Çocuk") ||
      b.startsWith("Evi") ||
      b.startsWith("Sadece") ||
      b.startsWith("Hamam") ||
      b.startsWith("Ev ve") ||
      b.startsWith("Başta")
  );

  const uniqueBullets = [...new Set(bullets)];

  return (
    <article className="prose-atak max-w-none">
      {page.paragraphs.map((p, i) => {
        const isShort = p.length < 80;
        const matchedHeading = contentHeadings.find((h) => h.text === p);
        if (matchedHeading) return null;

        if (isShort && /^[A-ZÇĞİÖŞÜ]/.test(p) && !p.includes(".") && p.length < 60) {
          return (
            <h3 key={i} className="mt-8 text-xl font-semibold text-slate-800">
              {p}
            </h3>
          );
        }

        return (
          <p key={i} className="text-slate-600 leading-relaxed">
            {p}
          </p>
        );
      })}

      {uniqueBullets.length > 0 && (
        <ul className="mt-6 space-y-2">
          {uniqueBullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-slate-600">
              <span className="mt-1 text-brand-500">✓</span>
              {b}
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
