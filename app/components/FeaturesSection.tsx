"use client";

import * as React from "react";
import {
  Lock,
  Volume2,
  Keyboard,
  Minimize2,
  Quote,
  Bot,
  Laptop,
  Cpu,
} from "lucide-react";
import { useLanguage } from "@/app/data/LanguageContext";

export function FeaturesSection() {
  const { t } = useLanguage();

  const pillarIcons = [<Bot key="bot" size={15} className="text-emerald-600" />, <Laptop key="laptop" size={15} className="text-emerald-600" />, <Cpu key="cpu" size={15} className="text-emerald-600" />];
  const cardIcons = [<Lock key="lock" size={22} />, <Volume2 key="vol" size={22} />, <Keyboard key="kb" size={22} />, <Minimize2 key="min" size={22} />];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200 shadow-2xs">
            {t.features.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 mt-4 tracking-tight">
            {t.features.title}
          </h2>
          <p className="text-base text-slate-600 mt-3 max-w-2xl mx-auto leading-relaxed">
            {t.features.subtitle}
          </p>
        </div>

        {/* Philosophy & Origin Showcase Card */}
        <div className="mb-16 bg-gradient-to-br from-emerald-50/60 via-slate-50 to-teal-50/40 rounded-3xl p-6 sm:p-10 border border-emerald-100/80 shadow-sm">
          <div className="max-w-4xl mx-auto">
            {/* Motto / Quote Banner */}
            <div className="relative bg-white rounded-2xl p-6 sm:p-8 border-l-4 border-emerald-500 shadow-xs mb-8">
              <Quote className="absolute top-4 right-4 text-emerald-200/60" size={38} />
              <p className="text-lg sm:text-xl md:text-2xl font-black text-slate-900 tracking-tight leading-snug">
                {t.features.mottoQuote}
              </p>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-2">
                {t.features.mottoAuthor}
              </p>
            </div>

            {/* 3 Origin & Purpose Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {t.features.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="bg-white/90 backdrop-blur-xs p-5 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm mb-3">
                      {pillar.number}
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mb-1 flex items-center gap-1.5">
                      {pillarIcons[idx] || <Bot size={15} className="text-emerald-600" />}
                      {pillar.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 4 Core Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.features.cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-slate-50 p-7 sm:p-8 rounded-3xl border border-slate-200/80 hover:border-emerald-300 hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-5">
                {cardIcons[idx] || <Lock size={22} />}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                {card.title}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
