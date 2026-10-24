"use client";

import * as React from "react";
import { BookOpen, Download, ExternalLink, ShieldCheck, Sparkles } from "lucide-react";
import { DOWNLOAD_URL, USER_MANUAL_URL, VIRUSTOTAL_URL } from "@/app/utils/constants";
import { useLanguage } from "@/app/data/LanguageContext";

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-12 pb-20 bg-gradient-to-b from-emerald-50/70 via-white to-slate-50 border-b border-emerald-100/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          {/* Top Pill Badges */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/70 border border-emerald-200 text-emerald-800 text-xs font-bold mb-6 shadow-xs">
            <Sparkles size={14} className="text-emerald-600" />
            {t.hero.pill}
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {t.hero.titleLine1} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
              {t.hero.titleLine2}
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mx-auto">
            {t.hero.description}
          </p>

          {/* Motto */}
          <div className="mt-4 text-xs sm:text-sm font-mono text-emerald-700 font-semibold bg-emerald-50/80 inline-block px-4 py-1.5 rounded-full border border-emerald-200/60">
            {t.hero.motto}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-2xl text-white bg-emerald-600 hover:bg-emerald-700 text-base font-bold transition-all shadow-xs hover:shadow-sm active:scale-95"
            >
              <Download size={18} />
              {t.hero.downloadCta}
            </a>

            <a
              href={VIRUSTOTAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl text-emerald-900 bg-white hover:bg-emerald-50/70 text-sm font-semibold border-2 border-emerald-200/80 transition-all shadow-xs"
            >
              <ShieldCheck size={18} className="text-emerald-600" />
              {t.hero.virusTotalCta}
            </a>
          </div>

          {/* User Manual Button under Download & VirusTotal */}
          <div className="mt-3.5 flex justify-center">
            <a
              href={USER_MANUAL_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold text-emerald-900 bg-white hover:bg-emerald-50/70 border-2 border-emerald-200/80 transition-all shadow-xs active:scale-95"
            >
              <BookOpen size={16} className="text-emerald-600" />
              <span>{t.hero.manualCta}</span>
              <ExternalLink size={13} className="text-emerald-600/70" />
            </a>
          </div>

          <p className="mt-4 text-xs text-slate-400">
            {t.hero.platformNote}
          </p>
        </div>

        {/* 4 Key Highlight Cards */}
        <div className="mt-14 grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {t.hero.metrics.map((m, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-xs hover:border-emerald-300 hover:shadow-md transition-all text-center sm:text-left min-w-0"
            >
              <span className="text-xs text-slate-500 font-medium block whitespace-nowrap">{m.label}</span>
              <p className="text-2xl font-extrabold text-emerald-600 mt-1">{m.value}</p>
              <p className="text-[11px] text-slate-400 mt-1">{m.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
