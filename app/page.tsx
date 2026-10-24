import * as React from "react";
import { Navbar } from "@/app/components/Navbar";
import { HeroSection } from "@/app/components/HeroSection";
import { GuaranteeBanner } from "@/app/components/GuaranteeBanner";
import { FeaturesSection } from "@/app/components/FeaturesSection";
import { ComparisonTable } from "@/app/components/ComparisonTable";
import { GallerySection } from "@/app/components/GallerySection";
import { SpecsSection } from "@/app/components/SpecsSection";
import { LicenseSection } from "@/app/components/LicenseSection";
import { CtaSection } from "@/app/components/CtaSection";
import { Footer } from "@/app/components/Footer";

export default function PoodLiteStandalonePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-emerald-200 selection:text-emerald-900">
      <Navbar />
      <HeroSection />
      <GuaranteeBanner />
      <FeaturesSection />
      <ComparisonTable />
      <GallerySection />
      <SpecsSection />
      <LicenseSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
