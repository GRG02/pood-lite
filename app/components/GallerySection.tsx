"use client";

import * as React from "react";
import Image from "next/image";
import { Maximize2, X } from "lucide-react";
import { Dialog } from "@chakra-ui/react";
import { Provider } from "@/app/components/ui/provider";
import { useLanguage } from "@/app/data/LanguageContext";

export function GallerySection() {
  const { t } = useLanguage();
  const [activeModal, setActiveModal] = React.useState<string | null>(null);
  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  );

  const selectedScreenshot = t.gallery.screenshots.find((s) => s.src === activeModal);

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-2xs">
            {t.gallery.badge}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            {t.gallery.title}
          </h2>
          <p className="text-sm text-slate-500 mt-2">
            {t.gallery.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.gallery.screenshots.map((s) => (
            <div
              key={s.id}
              className="bg-white rounded-3xl border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-emerald-300 transition-all duration-300 flex flex-col group"
            >
              <div
                className="relative h-64 sm:h-72 bg-slate-100 cursor-pointer overflow-hidden p-3 flex items-center justify-center"
                onClick={() => setActiveModal(s.src)}
                role="button"
                tabIndex={0}
                aria-label={`${t.gallery.clickToEnlarge} (${s.title})`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    setActiveModal(s.src);
                  }
                }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={s.src}
                    alt={s.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                    className="object-contain rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
                <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <span className="bg-white/95 text-slate-900 font-bold text-xs px-4 py-2 rounded-full shadow-lg flex items-center gap-1.5 transition-transform group-hover:scale-105">
                    <Maximize2 size={13} className="text-emerald-600" />
                    {t.gallery.clickToEnlarge}
                  </span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="mb-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-100">
                      {s.badge}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {s.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                    {s.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chakra UI Dialog (Accessible Modal with focus-trap, ESC dismiss, portal) */}
      {mounted && (
        <Provider>
          <Dialog.Root
            open={!!activeModal}
            onOpenChange={(e) => {
              if (!e.open) setActiveModal(null);
            }}
            size="full"
          >
            <Dialog.Backdrop className="fixed inset-0 bg-slate-950/80 backdrop-blur-md z-50 animate-in fade-in duration-200" />
            <Dialog.Positioner className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <Dialog.Content className="relative max-w-5xl w-full bg-white rounded-3xl p-3 shadow-2xl overflow-hidden focus:outline-hidden">
                <Dialog.CloseTrigger asChild>
                  <button
                    aria-label={t.gallery.closeModal}
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-900/80 hover:bg-slate-900 text-white flex items-center justify-center transition-all shadow-md focus:outline-hidden focus:ring-2 focus:ring-emerald-400 cursor-pointer"
                  >
                    <X size={20} />
                  </button>
                </Dialog.CloseTrigger>
                {activeModal && (
                  <div className="relative w-full h-[70vh] sm:h-[80vh]">
                    <Image
                      src={activeModal}
                      alt={selectedScreenshot?.title || "Enlarged screenshot"}
                      fill
                      sizes="(max-width: 1280px) 95vw, 1200px"
                      className="object-contain rounded-2xl"
                      priority
                    />
                  </div>
                )}
              </Dialog.Content>
            </Dialog.Positioner>
          </Dialog.Root>
        </Provider>
      )}
    </section>
  );
}
