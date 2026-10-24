"use client";

import * as React from "react";
import { Sparkles } from "lucide-react";
import { useLanguage } from "@/app/data/LanguageContext";

export function GuaranteeBanner() {
  const { t } = useLanguage();

  return (
    <section className="py-8 bg-emerald-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-center md:text-left">
          <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
            <Sparkles size={24} className="text-emerald-200" />
          </div>
          <div>
            <h3 className="font-extrabold text-lg text-white">
              {t.guarantee.title}
            </h3>
            <p className="text-xs text-emerald-100 mt-0.5">
              {t.guarantee.description}
            </p>
          </div>
        </div>

        <div className="shrink-0">
          <span className="inline-block bg-white text-emerald-800 text-xs font-bold px-4 py-2 rounded-xl shadow-xs">
            {t.guarantee.badge}
          </span>
        </div>
      </div>
    </section>
  );
}
