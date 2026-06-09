"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { FAQ_ITEMS } from "@/lib/home-data";
import { SectionLabel, SectionTitle } from "./ui";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="animated-item text-center">
          <SectionLabel>SIK SORULAN SORULAR</SectionLabel>
          <SectionTitle dark="Aklınızdaki" highlight="Sorular" />
        </div>
        <div className="mt-10 divide-y divide-slate-100">
          {FAQ_ITEMS.map((item, i) => (
            <div key={item.q} className="animated-item py-5">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-4 text-left"
              >
                <span className="font-medium text-slate-800">{item.q}</span>
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-400">
                  {open === i ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </span>
              </button>
              {open === i && (
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{item.a}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
