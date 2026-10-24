"use client";

import * as React from "react";
import { useLanguage } from "@/app/data/LanguageContext";

export function ComparisonTable() {
  const { t } = useLanguage();

  return (
    <section id="comparison" className="py-20 bg-slate-50 border-y border-slate-200/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
            {t.comparison.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            {t.comparison.title}
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            {t.comparison.subtitle}
          </p>
        </div>

        <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full text-left text-sm text-slate-600">
            <thead className="bg-slate-100/90 text-sm sm:text-base font-extrabold text-slate-900 border-b border-slate-200">
              <tr>
                <th className="px-6 py-4 text-slate-900 font-extrabold">{t.comparison.headers.feature}</th>
                <th className="px-6 py-4 text-emerald-800 font-black bg-emerald-50/80 border-x border-emerald-100">
                  {t.comparison.headers.poodLite}
                </th>
                <th className="px-6 py-4 text-rose-800 font-black">{t.comparison.headers.buzz}</th>
                <th className="px-6 py-4 text-orange-800 font-black">{t.comparison.headers.wisprFlow}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {t.comparison.rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="px-6 py-3.5 font-semibold text-slate-900">{row.feature}</td>
                  <td className="px-6 py-3.5 font-bold text-emerald-700 bg-emerald-50/40 border-x border-emerald-100">
                    {row.poodLite}
                  </td>
                  <td className="px-6 py-3.5 text-rose-700 font-medium">{row.buzz}</td>
                  <td className="px-6 py-3.5 text-orange-700 font-medium">{row.wisprFlow}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
