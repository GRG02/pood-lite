"use client";

import * as React from "react";
import Link from "next/link";
import { FileText, ArrowRight, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/app/data/LanguageContext";

export function LicenseSection() {
  const { t } = useLanguage();

  return (
    <section id="eula" className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            {t.licenseSection.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            {t.licenseSection.title}
          </h2>
        </div>

        <div className="bg-slate-50 p-7 sm:p-9 rounded-3xl border border-slate-200 text-xs sm:text-sm text-slate-600 space-y-5 leading-relaxed">
          <p>
            {t.licenseSection.intro}
          </p>
          <ul className="list-disc pl-5 space-y-2">
            {t.licenseSection.points.map((pt, idx) => (
              <li key={idx}>
                <strong>{pt.title}:</strong> {pt.desc}
              </li>
            ))}
          </ul>

          <div className="pt-5 border-t border-slate-200/80 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
              <span>{t.licenseSection.rightsNote}</span>
            </div>

            <Link
              href="/eula"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-5 py-2.5 rounded-xl shadow-xs hover:shadow-md hover:-translate-y-0.5 active:scale-95 transition-all"
            >
              <FileText size={15} />
              {t.licenseSection.readFullEulaBtn}
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
