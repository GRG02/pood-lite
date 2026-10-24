"use client";

import * as React from "react";
import Image from "next/image";
import { ExternalLink, User } from "lucide-react";
import { DEVELOPER_PORTFOLIO_URL } from "@/app/utils/constants";
import { useLanguage } from "@/app/data/LanguageContext";

export function Navbar() {
  const { lang, setLang, t } = useLanguage();

  return (
    <>
      {/* Top Announcement Banner */}
      <div className="bg-emerald-600 text-white text-xs py-2 px-4 text-center font-medium shadow-xs">
        {t.navbar.announcement}
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-emerald-100 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Logo & Brand */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 flex items-center justify-center shrink-0">
              <Image
                src="/icons/poodlite-logo.png"
                alt="Pood Lite Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div>
              <span className="font-extrabold text-lg text-slate-900 tracking-tight flex items-center gap-2">
                Pood Lite
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                  v1.0
                </span>
              </span>
              <p className="text-[11px] text-slate-500 font-medium leading-none">
                Offline Thai Speech-to-Text
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
            <a href="#features" className="hover:text-emerald-600 transition-colors">
              {t.navbar.features}
            </a>
            <a href="#comparison" className="hover:text-emerald-600 transition-colors">
              {t.navbar.comparison}
            </a>
            <a href="#gallery" className="hover:text-emerald-600 transition-colors">
              {t.navbar.gallery}
            </a>
            <a href="#specs" className="hover:text-emerald-600 transition-colors">
              {t.navbar.specs}
            </a>
            <a href="#eula" className="hover:text-emerald-600 transition-colors">
              {t.navbar.eula}
            </a>
          </nav>

          {/* Action Area: Portfolio + Segmented Language Switcher */}
          <div className="flex items-center gap-2.5 sm:gap-3">
            {/* Developer Portfolio Link */}
            <a
              href={DEVELOPER_PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              title={t.navbar.portfolio}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-2 sm:px-3.5 rounded-xl text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all border border-slate-200 active:scale-95"
            >
              <User size={13} className="text-emerald-600 shrink-0" />
              <span>{t.navbar.portfolio}</span>
              <ExternalLink size={12} className="text-slate-400 shrink-0" />
            </a>

            {/* Slint-Style Segmented Language Switcher [ TH | EN ] */}
            <div
              className="inline-flex items-center p-0.5 rounded-xl bg-slate-100 border border-slate-200/90 shadow-2xs"
              role="group"
              aria-label="Language selector"
            >
              <button
                id="lang-toggle-th"
                type="button"
                onClick={() => setLang("th")}
                className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  lang === "th"
                    ? "bg-white text-emerald-700 shadow-xs border border-slate-200/60"
                    : "text-slate-500 hover:text-slate-900"
                }`}
                aria-pressed={lang === "th"}
              >
                TH
              </button>
              <button
                id="lang-toggle-en"
                type="button"
                onClick={() => setLang("en")}
                className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                  lang === "en"
                    ? "bg-white text-emerald-700 shadow-xs border border-slate-200/60"
                    : "text-slate-500 hover:text-slate-900"
                }`}
                aria-pressed={lang === "en"}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
