"use client";

import * as React from "react";
import { Download, ExternalLink, User, Zap } from "lucide-react";
import { DEVELOPER_PORTFOLIO_URL, DOWNLOAD_URL } from "@/app/utils/constants";
import { useLanguage } from "@/app/data/LanguageContext";

export function CtaSection() {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-gradient-to-b from-white to-emerald-50/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border-2 border-emerald-200 shadow-xl shadow-emerald-100/50">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold mb-4">
            <Zap size={14} className="text-emerald-600" />
            {t.cta.badge}
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900">
            {t.cta.title}
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed">
            {t.cta.subtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl text-white bg-emerald-600 hover:bg-emerald-700 font-bold text-base transition-all shadow-lg shadow-emerald-200 hover:-translate-y-0.5 active:scale-95"
            >
              <Download size={18} />
              {t.cta.downloadBtn}
            </a>

            <a
              href={DEVELOPER_PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-2xl text-slate-700 bg-slate-100 hover:bg-slate-200 font-semibold text-sm transition-all border border-slate-200"
            >
              <User size={16} className="text-emerald-600" />
              {t.cta.portfolioBtn}
              <ExternalLink size={13} className="text-slate-400" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
