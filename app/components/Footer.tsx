"use client";

import * as React from "react";
import { DEVELOPER_PORTFOLIO_URL } from "@/app/utils/constants";
import { useLanguage } from "@/app/data/LanguageContext";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="py-10 bg-white border-t border-slate-200 text-xs text-slate-500 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
        <p>
          {t.footer.developedBy}{" "}
          <a
            href={DEVELOPER_PORTFOLIO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-slate-800 hover:text-emerald-600 underline underline-offset-4 decoration-emerald-300 transition-colors"
          >
            {t.footer.developerName}
          </a>{" "}
          • {t.footer.role}
        </p>
        <p className="text-slate-500 font-medium">
          {t.footer.copyright}
        </p>
        <p className="text-slate-400 text-[11px]">
          {t.footer.attribution}
        </p>
      </div>
    </footer>
  );
}
