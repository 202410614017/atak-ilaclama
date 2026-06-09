import { SectionLabel, SectionTitle } from "@/components/home/ui";
import { CONTACT_FAQ } from "@/lib/contact-data";

export default function ContactFaq() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <SectionLabel>SIK SORULAN SORULAR</SectionLabel>
          <SectionTitle dark="Bize Ulaşmadan Önce" highlight="Merak Edilenler" />
        </div>
        <div className="mt-10 divide-y divide-slate-100">
          {CONTACT_FAQ.map((item) => (
            <div key={item.q} className="py-6">
              <h3 className="font-bold text-slate-900">{item.q}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
