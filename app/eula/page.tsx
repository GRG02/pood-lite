"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Scale,
  ExternalLink,
  Mail,
  HeartHandshake,
  Code2,
  AlertTriangle,
} from "lucide-react";
import { useLanguage } from "@/app/data/LanguageContext";

export default function EulaPage() {
  const { lang, setLang, t } = useLanguage();

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Top Sticky Header */}
      <header className="sticky top-0 z-30 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link
            href="/#eula"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 hover:text-emerald-700 bg-slate-100 hover:bg-slate-200/80 px-3.5 py-2 rounded-xl transition-all"
          >
            <ArrowLeft size={16} />
            {t.eulaPage.backHome}
          </Link>

          <div className="flex items-center gap-4">
            {/* Brand Logo & Name */}
            <div className="hidden sm:flex items-center gap-2.5">
              <Image
                src="/icons/poodlite-logo.png"
                alt="Pood Lite Logo"
                width={28}
                height={28}
                className="w-7 h-7 object-contain"
              />
              <span className="font-extrabold text-sm text-slate-900 tracking-tight">
                Pood Lite <span className="text-xs text-emerald-600 font-semibold">Legal & EULA</span>
              </span>
            </div>

            {/* Language Switcher [ TH | EN ] */}
            <div
              className="inline-flex items-center p-0.5 rounded-xl bg-slate-100 border border-slate-200/90 shadow-2xs"
              role="group"
              aria-label="Language selector"
            >
              <button
                id="eula-header-lang-th"
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
                id="eula-header-lang-en"
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

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-12 space-y-10">
        {/* Title Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
            <Scale size={13} className="text-emerald-600" />
            {t.eulaPage.badge}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            {t.eulaPage.title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-500">
            {t.eulaPage.subtitle}
          </p>
        </div>

        {/* PRIMARY SECTION ACCORDING TO SELECTED LANGUAGE */}
        {lang === "th" ? (
          /* THAI AS PRIMARY */
          <section className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-emerald-500/20 shadow-md space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-xs shadow-xs">
                  TH
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    ข้อตกลงสิทธิ์การใช้งานสำหรับผู้ใช้ปลายทาง (EULA)
                  </h2>
                  <p className="text-xs text-emerald-700 font-medium">ฉบับภาษาไทย (ภาษาหลักที่ใช้บังคับ)</p>
                </div>
              </div>
              <span className="text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full">
                ภาษาที่เลือกใช้งาน (Active)
              </span>
            </div>

            <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed space-y-6 text-slate-700">
              <p className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-slate-700 font-medium">
                กรุณาอ่านข้อตกลงและเงื่อนไขของสัญญาอนุญาตให้ใช้สิทธิ์สำหรับผู้ใช้ปลายทางนี้ (&ldquo;ข้อตกลง&rdquo; หรือ &ldquo;EULA&rdquo;) อย่างละเอียดรอบคอบ ก่อนทำการติดตั้ง ดาวน์โหลด คัดลอก หรือเปิดใช้งานซอฟต์แวร์ <strong>Pood Lite</strong> (&ldquo;ซอฟต์แวร์&rdquo;) การติดตั้ง การดาวน์โหลด การคัดลอก หรือการใช้งานซอฟต์แวร์นี้ไม่ว่าส่วนหนึ่งส่วนใดหรือทั้งหมด ถือว่าท่าน (&ldquo;ผู้ใช้&rdquo;) ได้อ่าน เข้าใจ และยินยอมผูกพันตามเงื่อนไขทั้งหมดที่ระบุไว้ในข้อตกลงนี้
              </p>

              <div className="space-y-5">
                <div className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-2xs">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2">
                    ข้อ 1. สถานะของผู้พัฒนาและลักษณะของซอฟต์แวร์ (Status of Licensor & Nature of Software)
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-xs sm:text-sm">
                    <li>1.1 ซอฟต์แวร์นี้พัฒนาและเผยแพร่โดย <strong>Rachtipong Chaiprab (GRG02)</strong> ในฐานะผู้พัฒนาอิสระรายบุคคล (Independent Solo Developer) มิได้ดำเนินงานในนามบริษัท นิติบุคคล ห้างหุ้นส่วน หรือองค์กรธุรกิจใดๆ ทั้งสิ้น</li>
                    <li>1.2 ซอฟต์แวร์นี้จัดเป็น <strong>ฟรีแวร์ (Freeware)</strong> เพื่อส่งเสริมผลิตภาพ (Productivity) ส่วนบุคคลในการพิมพ์ข้อความด้วยเสียงภาษาไทย โดยไม่มีการเรียกเก็บค่าธรรมเนียมหรือค่าบริการใดๆ จากผู้ใช้</li>
                    <li>1.3 ซอฟต์แวร์นี้ทำงานในระบบ <strong>ออฟไลน์โดยสมบูรณ์ (100% Local / Offline Engine)</strong> ไม่มีการส่งสัญญาณเสียง ข้อมูลการถอดความ หรือข้อมูลส่วนบุคคลออกนอกเครื่องคอมพิวเตอร์ผ่านอินเทอร์เน็ต (Zero Telemetry & Zero Cloud Transmission)</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-2xs">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2">
                    ข้อ 2. การอนุญาตให้ใช้สิทธิ์ (Grant of License)
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-xs sm:text-sm">
                    <li>2.1 ภายใต้เงื่อนไขแห่งข้อตกลงนี้ ผู้พัฒนาขอมอบสิทธิ์การใช้งานซอฟต์แวร์แก่ผู้ใช้แบบจำกัด เฉพาะบุคคล ไม่สามารถโอนสิทธิ์ได้ (Non-transferable) ไม่สามารถให้สิทธิ์ช่วง (Non-sublicensable) และไม่จำกัดสิทธิ์แต่เพียงผู้เดียว (Non-exclusive)</li>
                    <li>2.2 อนุญาตให้ผู้ใช้ติดตั้งและเรียกใช้งานซอฟต์แวร์บนอุปกรณ์คอมพิวเตอร์ที่อยู่ในความครอบครอง เพื่อวัตถุประสงค์ในการใช้งานส่วนบุคคล หรือใช้งานภายในองค์กร/หน่วยงาน โดยไม่มีค่าใช้จ่าย</li>
                    <li>2.3 <strong>การให้สิทธิ์นี้มิใช่การขายขาดตัวซอฟต์แวร์ (License, not a Sale):</strong> สิทธิ์ความเป็นเจ้าของในซอฟต์แวร์ รหัสต้นฉบับ สถาปัตยกรรม และเครื่องหมายยังคงเป็นของผู้พัฒนาแต่เพียงผู้เดียว</li>
                  </ul>
                </div>

                <div className="bg-rose-50/70 p-4 sm:p-5 rounded-xl border border-rose-200 text-rose-950">
                  <div className="flex items-center gap-2 font-bold text-rose-900 text-sm sm:text-base mb-2">
                    <AlertTriangle size={17} className="text-rose-600 shrink-0" />
                    <span>ข้อ 3. ข้อจำกัดและข้อห้ามในการใช้งาน (Restrictions & Commercial Prohibitions)</span>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-rose-900">
                    <li>
                      <strong>3.1 ห้ามการแสวงหาผลกำไรเชิงพาณิชย์ (No Commercial Redistribution or Sale):</strong> ห้ามนำตัวซอฟต์แวร์ สำเนาของไฟล์ติดตั้ง (.exe) หรือส่วนต่อประสานผู้ใช้ ไปจำหน่าย แจกจ่ายซ้ำ ให้เช่า ให้เช่าซื้อ เรียกเก็บค่าบริการ หรือแสวงหาผลประโยชน์ทางการเงินและรายได้ทุกรูปแบบ โดยไม่ได้รับความยินยอมเป็นลายลักษณ์อักษรล่วงหน้า (ทั้งนี้ ข้อกำหนดนี้ไม่จำกัดสิทธิ์ในส่วนของไฟล์โมเดลเสียง Pathumma STT ซึ่งอยู่ภายใต้สัญญาอนุญาต CC-BY-4.0)
                    </li>
                    <li>
                      <strong>3.2 ห้ามการดัดแปลงเพื่อจำหน่าย:</strong> ห้ามนำซอฟต์แวร์ไปดัดแปลง ครอบส่วนติดต่อผู้ใช้ใหม่ (Re-skin) หรือบรรจุซ้ำเพื่อจำหน่ายในฐานะผลิตภัณฑ์เชิงพาณิชย์ของตนเอง
                    </li>
                    <li>
                      <strong>3.3 ห้ามการใช้งานที่ผิดกฎหมาย:</strong> ห้ามใช้ซอฟต์แวร์นี้ในการดักฟัง ดักบันทึกเสียง ละเมิดสิทธิส่วนบุคคลของผู้อื่น หรือกระทำการใดๆ ที่ขัดต่อกฎหมาย
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-2xs">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                    ข้อ 4. กรรมสิทธิ์และทรัพย์สินทางปัญญา (Ownership & Intellectual Property)
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm">
                    บรรดาสิทธิ์ ความเป็นเจ้าของ ลิขสิทธิ์ และทรัพย์สินทางปัญญาทั้งหมดที่เกี่ยวข้องกับตัวซอฟต์แวร์ Pood Lite รหัสต้นฉบับ สถาปัตยกรรม Rust Runtime, Slint UI Layouts, เอกสาร และไอคอน เป็นทรัพย์สินทางปัญญาและลิขสิทธิ์ของ <strong>Rachtipong Chaiprab (GRG02)</strong> แต่เพียงผู้เดียว
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-2xs">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                    ข้อ 5. การให้เครดิตและสิทธิ์ในโมเดล (Model Attribution & Third-Party Components)
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm">
                    โมเดลรู้จำเสียงพูดภาษาไทย <strong>Pathumma STT</strong> เป็นผลงานวิจัย พัฒนา และกรรมสิทธิ์ของ <strong>ศูนย์เทคโนโลยีอิเล็กทรอนิกส์และคอมพิวเตอร์แห่งชาติ (NECTEC), สำนักงานพัฒนาวิทยาศาสตร์และเทคโนโลยีแห่งชาติ (สวทช.) ประเทศไทย</strong> เผยแพร่ภายใต้สัญญาอนุญาต <strong>Creative Commons Attribution 4.0 International (CC-BY-4.0)</strong> ผู้พัฒนาขอขอบพระคุณ NECTEC และทีมนักวิจัยทุกท่านเป็นอย่างสูง
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-2xs">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                    ข้อ 6. การปฏิเสธการรับประกัน (Disclaimer of Warranties)
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm">
                    ซอฟต์แวร์นี้จัดเตรียมและให้บริการในลักษณะ &ldquo;ตามสภาพที่เป็นอยู่&rdquo; (AS IS) และ &ldquo;ตามที่มีอยู่&rdquo; (AS AVAILABLE) โดยปราศจากการรับประกันใดๆ ผู้ใช้ยอมรับว่าเทคโนโลยีรู้จำเสียงพูด (ASR) ย่อมอาจมีโอกาสถอดความผิดพลาดหรือตกหล่นได้ ผู้ใช้พึงตรวจสอบความถูกต้องของข้อความก่อนนำไปใช้งานจริงทุกครั้ง
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-2xs">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                    ข้อ 7. การจำกัดความรับผิดชอบ (Limitation of Liability)
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm">
                    ภายใต้ขอบเขตสูงสุดที่กฎหมายอนุญาต ผู้พัฒนา (Rachtipong Chaiprab (GRG02)) จะไม่รับผิดชอบต่อความเสียหายใดๆ ไม่ว่าจะเป็นความเสียหายโดยตรง ความเสียหายโดยอ้อม หรือการสูญเสียข้อมูล อันเกิดจากการติดตั้งหรือการใช้งานซอฟต์แวร์นี้ ความเสี่ยงตกเป็นภาระของผู้ใช้แต่เพียงฝ่ายเดียว
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-2xs">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                    ข้อ 8. การสิ้นสุดการอนุญาต & ข้อ 9. กฎหมายที่ใช้บังคับ (Termination & Governing Law)
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm">
                    สิทธิ์ของผู้ใช้จะสิ้นสุดลงทันทีโดยอัตโนมัติหากฝ่าฝืนเงื่อนไขในข้อตกลงนี้ (โดยเฉพาะการนำไปจำหน่ายเชิงพาณิชย์) ข้อตกลงนี้ให้อยู่ภายใต้บังคับและตีความตามบทบัญญัติแห่งกฎหมายของราชอาณาจักรไทย
                  </p>
                </div>
              </div>
            </div>
          </section>
        ) : (
          /* ENGLISH AS PRIMARY */
          <section className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-emerald-500/20 shadow-md space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 flex-wrap gap-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center font-black text-xs shadow-xs">
                  EN
                </div>
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    End User License Agreement (EULA)
                  </h2>
                  <p className="text-xs text-emerald-700 font-medium">English Version (Primary Active Agreement)</p>
                </div>
              </div>
              <span className="text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1 rounded-full">
                Active Language
              </span>
            </div>

            <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed space-y-6 text-slate-700">
              <p className="bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-slate-700 font-medium">
                IMPORTANT: PLEASE READ THE TERMS AND CONDITIONS OF THIS END USER LICENSE AGREEMENT (&ldquo;AGREEMENT&rdquo; OR &ldquo;EULA&rdquo;) CAREFULLY BEFORE INSTALLING, DOWNLOADING, COPYING, OR USING THE <strong>POOD LITE</strong> SOFTWARE (&ldquo;SOFTWARE&rdquo;). BY INSTALLING OR USING ANY PART OF THIS SOFTWARE, YOU AGREE TO BE BOUND BY ALL THE TERMS OF THIS AGREEMENT.
              </p>

              <div className="space-y-5">
                <div className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-2xs">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2">
                    1. Status of Licensor & Nature of Software
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-xs sm:text-sm">
                    <li>1.1 This Software is developed and released by <strong>Rachtipong Chaiprab (GRG02)</strong> as an independent solo developer, not on behalf of any commercial enterprise or legal entity.</li>
                    <li>1.2 Classified as <strong>&ldquo;Freeware&rdquo;</strong> intended to boost personal productivity for Thai voice dictation, free of charge without subscriptions.</li>
                    <li>1.3 Operates as a <strong>&ldquo;100% Local / Offline Engine&rdquo;</strong>. It transmits no audio data, transcription text, or telemetry to external servers (Zero Telemetry & Zero Cloud Transmission).</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-2xs">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-2">
                    2. Grant of License
                  </h3>
                  <ul className="list-disc pl-5 space-y-1.5 text-slate-600 text-xs sm:text-sm">
                    <li>2.1 Grants a limited, personal, non-transferable, non-sublicensable, and non-exclusive license to use the Software.</li>
                    <li>2.2 Permits installation and execution on computer devices under your control for personal or internal organizational use free of charge.</li>
                    <li>2.3 <strong>License, Not a Sale:</strong> All title, copyright, source code, and intellectual property rights remain exclusively with the Licensor.</li>
                  </ul>
                </div>

                <div className="bg-rose-50/70 p-4 sm:p-5 rounded-xl border border-rose-200 text-rose-950">
                  <div className="flex items-center gap-2 font-bold text-rose-900 text-sm sm:text-base mb-2">
                    <AlertTriangle size={17} className="text-rose-600 shrink-0" />
                    <span>3. Restrictions & Commercial Prohibitions</span>
                  </div>
                  <ul className="list-disc pl-5 space-y-2 text-xs sm:text-sm text-rose-900">
                    <li>
                      <strong>3.1 No Commercial Redistribution or Sale:</strong> You may not sell, resell, rent, lease, sublicense, distribute for commercial gain, or charge any fees for the Software, its installer (.exe), or user interface without prior written consent from the Licensor. (This restriction does not restrict model weights licensed under CC-BY-4.0).
                    </li>
                    <li>
                      <strong>3.2 Modification for Resale:</strong> You may not re-skin, repackage, or re-brand the Software as your own commercial product.
                    </li>
                    <li>
                      <strong>3.3 Unlawful Use:</strong> You may not use the Software for eavesdropping, unauthorized recording, or infringing upon privacy rights of others.
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-2xs">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                    4. Ownership & Intellectual Property
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm">
                    All title, ownership, copyrights, and intellectual property rights in and to the Pood Lite Software (including source code, Rust runtime architecture, Slint UI layouts, documentation, and icons) are owned exclusively by <strong>Rachtipong Chaiprab (GRG02)</strong>.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-2xs">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                    5. Model Attribution & Foundation Model
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm">
                    The embedded <strong>Pathumma STT</strong> model is developed and owned by the <strong>National Electronics and Computer Technology Center (NECTEC), NSTDA, Thailand</strong> under <strong>Creative Commons Attribution 4.0 International (CC-BY-4.0)</strong>. Sincere gratitude is extended to NECTEC and the research team.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-2xs">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                    6. Disclaimer of Warranties & 7. Limitation of Liability
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm">
                    The Software is provided &ldquo;AS IS&rdquo; without warranties of any kind. Automatic speech recognition may produce inaccuracies; users are solely responsible for verifying text. To the maximum extent permitted by law, the Licensor shall not be liable for any damages resulting from use.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200/70 shadow-2xs">
                  <h3 className="font-bold text-slate-900 text-sm sm:text-base mb-1">
                    8. Termination & 9. Governing Law
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm">
                    Rights terminate automatically upon violation of terms. This Agreement is governed by and construed in accordance with the laws of the Kingdom of Thailand.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 2: THIRD-PARTY LICENSES & ATTRIBUTIONS */}
        <section className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-sm space-y-6">
          <div className="flex items-center gap-2 pb-4 border-b border-slate-100">
            <div className="w-8 h-8 rounded-lg bg-teal-100 text-teal-800 flex items-center justify-center font-bold text-xs">
              <Code2 size={16} />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                {t.eulaPage.thirdPartyTitle}
              </h2>
              <p className="text-xs text-slate-500">{t.eulaPage.thirdPartySubtitle}</p>
            </div>
          </div>

          <div className="space-y-6 text-xs sm:text-sm text-slate-600 leading-relaxed">
            {/* Model Card */}
            <div className="bg-emerald-50/60 p-5 rounded-2xl border border-emerald-200/80 space-y-2">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <span className="font-extrabold text-sm sm:text-base text-emerald-950 flex items-center gap-1.5">
                  <HeartHandshake size={18} className="text-emerald-600" />
                  {t.eulaPage.modelTitle}
                </span>
                <span className="text-[11px] font-bold bg-white text-emerald-800 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  {t.eulaPage.modelBadge}
                </span>
              </div>
              <p>
                {t.eulaPage.modelDesc}
              </p>
              <div className="pt-2">
                <a
                  href="https://huggingface.co/nectec/Pathumma-stt-th-fastconformer-rnnt-large"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-800 hover:text-emerald-900 underline"
                >
                  {t.eulaPage.modelRepoLink}
                  <ExternalLink size={12} />
                </a>
              </div>
            </div>

            {/* Libraries List */}
            <div className="space-y-3">
              <h3 className="font-bold text-slate-900 text-sm">
                {t.eulaPage.librariesTitle}:
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <li className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <strong className="text-slate-900 block text-xs">Sherpa-ONNX & Kaldi Native FBank</strong>
                  <span className="text-slate-500 text-[11px]">Apache License, Version 2.0</span>
                </li>
                <li className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <strong className="text-slate-900 block text-xs">ONNX Runtime</strong>
                  <span className="text-slate-500 text-[11px]">MIT License / Apache License 2.0</span>
                </li>
                <li className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <strong className="text-slate-900 block text-xs">Slint UI Framework</strong>
                  <span className="text-slate-500 text-[11px]">GPLv3 / Royalty-Free Desktop License</span>
                </li>
                <li className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <strong className="text-slate-900 block text-xs">CPAL (Cross-Platform Audio Library)</strong>
                  <span className="text-slate-500 text-[11px]">Apache License, Version 2.0</span>
                </li>
              </ul>
            </div>

            {/* Contact Box */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <Mail size={15} className="text-emerald-600" />
                <span>{t.eulaPage.contactEmail}: <strong>rachtipongc.work@gmail.com</strong></span>
              </div>
              <span>{t.eulaPage.contactRightsHolder}: Rachtipong Chaiprab (GRG02)</span>
            </div>
          </div>
        </section>

        {/* Bottom Back Button */}
        <div className="text-center pt-4">
          <Link
            href="/#eula"
            className="inline-flex items-center gap-2 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-2xl shadow-md hover:shadow-emerald-200 active:scale-95 transition-all"
          >
            <ArrowLeft size={17} />
            {t.eulaPage.backHome}
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-white border-t border-slate-200 text-xs text-slate-500 text-center">
        <p>{t.footer.copyright}</p>
        <p className="text-slate-400 text-[11px] mt-1">
          {t.footer.attribution}
        </p>
      </footer>
    </div>
  );
}
