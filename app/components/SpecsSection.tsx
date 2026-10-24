"use client";

import * as React from "react";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/app/data/LanguageContext";

export function SpecsSection() {
  const { t } = useLanguage();

  return (
    <section id="specs" className="py-20 bg-slate-50 border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            {t.specs.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            {t.specs.title}
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            {t.specs.subtitle}
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-5 text-sm">
            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block">{t.specs.os.title}</strong>
                <span className="text-slate-600 text-xs">{t.specs.os.desc}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block">{t.specs.cpu.title}</strong>
                <span className="text-slate-600 text-xs">{t.specs.cpu.desc}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block">{t.specs.ram.title}</strong>
                <span className="text-slate-600 text-xs">{t.specs.ram.desc}</span>
              </div>
            </div>
          </div>

          <div className="space-y-5 text-sm">
            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block">{t.specs.storage.title}</strong>
                <span className="text-slate-600 text-xs">{t.specs.storage.desc}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block">{t.specs.audio.title}</strong>
                <span className="text-slate-600 text-xs">{t.specs.audio.desc}</span>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-slate-900 block">{t.specs.network.title}</strong>
                <span className="text-slate-600 text-xs">{t.specs.network.desc}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
