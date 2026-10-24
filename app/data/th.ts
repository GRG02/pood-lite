import { SiteContent } from "./types";

export const thaiContent: SiteContent = {
  navbar: {
    announcement: "🎉 ปล่อยเวอร์ชัน 1.0.0 สำหรับ Windows — ใช้งานฟรี 100% ไม่มีโฆษณา ไม่ต้องต่อเน็ต",
    features: "ฟีเจอร์เด่น",
    comparison: "เปรียบเทียบ",
    gallery: "ภาพหน้าจอ",
    specs: "สเปกเครื่อง",
    eula: "สัญญาอนุญาต",
    manual: "คู่มือการใช้งาน",
    portfolio: "เพิ่มเติม",
    download: "ดาวน์โหลดฟรี",
  },
  hero: {
    pill: "100% Offline • Pure CPU • Windows Desktop",
    titleLine1: "ถอดความเสียงภาษาไทย",
    titleLine2: "เร็ว คมชัด ออฟไลน์ 100%",
    description:
      "แอปพลิเคชัน Desktop สำหรับถอดความเสียงพูดเป็นตัวอักษรบน Windows พัฒนาด้วย Rust + Slint Native UI ขับเคลื่อนด้วยโมเดล Pathumma STT รันบน CPU โดยตรง ไม่พึ่งพาคลาวด์ กิน RAM น้อยเป็นพิเศษเพียง 15-25 MB",
    motto: "“Burn tokens, not humans — พิมพ์ด้วยเสียงแทนคีย์บอร์ด”",
    downloadCta: "ดาวน์โหลด Pood Lite สำหรับ Windows",
    virusTotalCta: "ผลตรวจความปลอดภัย (VirusTotal Collection)",
    manualCta: "คู่มือการใช้งานโปรแกรม Pood Lite (User Guide)",
    platformNote: "รองรับ Windows 10/11 (64-bit) • สัญญาอนุญาตฟรีแวร์ (Freeware) สำหรับใช้งานส่วนบุคคล",
    metrics: [
      {
        label: "การใช้ RAM",
        value: "15-25 MB",
        note: "คืนเหลือ 1-3 MB ในถาดระบบ",
      },
      {
        label: "ความหน่วง (Latency)",
        value: "~500 ms",
        note: "พิมพ์ตัวอักษรสดทันใจ",
      },
      {
        label: "สถาปัตยกรรมประมวลผล",
        value: "Pure CPU",
        note: "ไม่จำเป็นต้องมีการ์ดจอแยก",
      },
      {
        label: "รูปแบบการใช้งาน",
        value: "ฟรี ไม่มีโฆษณา",
        note: "ไม่มีค่าบริการรายเดือน",
      },
    ],
  },
  features: {
    badge: "Philosophy & Feature Highlights",
    title: "ที่มา วัตถุประสงค์ และฟีเจอร์เด่น",
    subtitle:
      "เปลี่ยนเสียงพูดของคุณเป็นตัวอักษรลงในทุกโปรแกรมบน Windows ออกแบบขึ้นเพื่อลดภาระการพิมพ์เมื่อต้องทำงานร่วมกับ AI Agent",
    philosophyTitle: "ที่มาและวัตถุประสงค์ (The Origin & Purpose)",
    mottoQuote:
      "“เผาโทเค็นดีกว่าเผามนุษย์ — เพราะความขี้เกียจพิมพ์ทำลาย productivity ได้ยิ่งกว่าการมี token ขยะ”",
    mottoAuthor: "ปรัชญาเบื้องหลังการพัฒนา Pood Lite (Philosophy & Origin)",
    pillars: [
      {
        number: "1",
        title: "คุยกับ AI Agent โดยเฉพาะ",
        desc: "เริ่มต้นจากความขี้เกียจพิมพ์คีย์บอร์ด เมื่อต้องป้อนคำสั่งและบริบทการทำงานยาวๆ ส่งเสียงแทนการเคาะแป้นพิมพ์ทีละตัว",
      },
      {
        number: "2",
        title: "Local 100% ไร้ค่าบริการ",
        desc: "ชอบไอเดียของ WisprFlow แต่ไม่อยากจ่ายรายเดือน จึงสร้าง ASR ขนาดกะทัดรัดรันบน CPU เครื่องตัวเอง ปลอดภัยและฟรี",
      },
      {
        number: "3",
        title: "คำตกหล่นไม่ใช่ปัญหา",
        desc: "ถอดความอาจมีคำตกหล่นบ้าง แต่ AI สามารถเดาบริบทคำผิดได้อย่างแม่นยำอยู่แล้ว ความเร็วและความต่อเนื่องจึงสำคัญที่สุด",
      },
    ],
    cards: [
      {
        title: "100% Offline & ความเป็นส่วนตัวสูงสุด",
        desc: "ข้อมูลเสียงทั้งหมดของคุณจะถูกแปลงเป็นตัวอักษรอยู่ภายในเครื่องคอมพิวเตอร์ของคุณเท่านั้น ไม่ส่งเสียงหรือประวัติขึ้น Cloud Server ใดๆ มั่นใจได้ว่าข้อมูลงานและแชทส่วนตัวปลอดภัย 100%",
      },
      {
        title: "Push-to-Talk พร้อมคลื่นเสียงสด (Waveform)",
        desc: "กดปุ่ม Left Ctrl ค้างไว้เพื่อพูด แล้วปล่อยมือเมื่อพูดจบ พร้อมแสดงแอนิเมชันคลื่นเสียงสดทันที ตอบสนองลื่นไหลแบบเรียลไทม์",
      },
      {
        title: "Smart Shortcut Guard & Direct Keystroke",
        desc: "ระบบป้องกันคีย์ลัดชนอย่างชาญฉลาด (ยกเลิกการดักเสียงทันทีเมื่อกด Ctrl+C, Ctrl+V, Ctrl+S) และพิมพ์อักขระ Unicode ตรงเข้าโปรแกรมที่โฟกัสอยู่ทันที โดยไม่รบกวนประวัติ Clipboard (Win+V)",
      },
      {
        title: "เบาเครื่อง กิน RAM ต่ำ & ซ่อนลง System Tray",
        desc: "พัฒนาด้วย Rust แบบ Native ตัดเบราว์เซอร์รันไทม์ (Chromium/WebView2) ออกทั้งหมด ใช้ RAM เพียง 15-25 MB ขณะเปิดใช้งาน และลดเหลือเพียง 1-3 MB เมื่อปิดหน้าต่างซ่อนลงใน System Tray",
      },
    ],
  },
  comparison: {
    badge: "Why Pood Lite",
    title: "ตารางเปรียบเทียบ Pood Lite กับระบบ ASR ทั่วไป",
    subtitle: "เห็นความแตกต่างที่ชัดเจนในด้านความเป็นส่วนตัว ความเร็ว และการประหยัดทรัพยากรเครื่อง",
    headers: {
      feature: "คุณสมบัติ",
      poodLite: "Pood Lite (Desktop)",
      buzz: "โปรแกรม Buzz",
      wisprFlow: "WisprFlow",
    },
    rows: [
      {
        feature: "รูปแบบการทำงาน",
        poodLite: "พิมพ์สดลงเคอร์เซอร์ (Push-to-Talk)",
        buzz: "ถอดความจากไฟล์เสียง/วิดีโอ",
        wisprFlow: "พิมพ์สด + AI เกลาข้อความ",
      },
      {
        feature: "ความแม่นยำ",
        poodLite: "ดี (เหมาะสั่งงาน AI)",
        buzz: "ตามโมเดลที่เลือก (Tiny–Large)",
        wisprFlow: "สูงมาก (ใช้ Cloud LLM)",
      },
      {
        feature: "การเชื่อมต่อเน็ต",
        poodLite: "ออฟไลน์ 100% (ไม่ต้องต่อเน็ต)",
        buzz: "ออฟไลน์ 100%",
        wisprFlow: "ต้องต่อเน็ตตลอดเวลา",
      },
      {
        feature: "ความเป็นส่วนตัว",
        poodLite: "ประมวลผลในเครื่อง 100%",
        buzz: "ประมวลผลในเครื่อง 100%",
        wisprFlow: "ส่งเสียงขึ้นคลาวด์เซิร์ฟเวอร์",
      },
      {
        feature: "RAM ขณะเปิดหน้าต่าง",
        poodLite: "15–25 MB",
        buzz: "500 MB – 2 GB+",
        wisprFlow: "300–600 MB",
      },
      {
        feature: "RAM เมื่อพับลง Tray",
        poodLite: "1–3 MB",
        buzz: "พับลง Tray ไม่ได้",
        wisprFlow: "100–200 MB",
      },
      {
        feature: "ลิมิตการใช้งาน",
        poodLite: "ไม่จำกัด",
        buzz: "ไม่จำกัด",
        wisprFlow: "จำกัดโควตา (ต้องซื้อ Pro)",
      },
      {
        feature: "ค่าบริการ",
        poodLite: "ฟรี 100% (Freeware)",
        buzz: "ฟรี 100% (Open-Source)",
        wisprFlow: "มีค่าบริการรายเดือน",
      },
      {
        feature: "โฆษณาในโปรแกรม",
        poodLite: "ไม่มีโฆษณา",
        buzz: "ไม่มีโฆษณา",
        wisprFlow: "มีแนะนำอัปเกรด Pro",
      },
    ],
  },
  gallery: {
    badge: "Visual Tour",
    title: "ภาพหน้าจอการทำงานจริงบน Windows Desktop",
    subtitle: "สัมผัสหน้าจอ Native UI ที่ออกแบบอย่างประณีต เรียบง่าย สบายตา และคล่องตัวทุกการใช้งาน",
    clickToEnlarge: "คลิกเพื่อดูรูปขนาดเต็ม",
    closeModal: "ปิดหน้าต่างรูปภาพ",
    screenshots: [
      {
        id: "home",
        src: "/poodlite/home.png",
        title: "หน้าแรก (Home View)",
        badge: "Core Transcription",
        desc: "สตรีมถอดความเสียงพูดสดด้วยคลื่นเสียง Waveform ขณะกด Left Ctrl ค้าง พร้อมกล่องคัดลอกข้อความด่วน และแถบสถิติการพูดรอบ 1 นาที",
      },
      {
        id: "setting",
        src: "/poodlite/setting.png",
        title: "หน้าตั้งค่า (Settings View)",
        badge: "System Controls",
        desc: "เลือกไมโครโฟน Input Device, เปิดโหมดเริ่มทำงานพร้อม Windows, ทำงานเบื้องหลังใน System Tray และปรับความเร็วเสียงด้วยอัลกอริทึม WSOLA (0.70x - 1.30x)",
      },
      {
        id: "about",
        src: "/poodlite/about.png",
        title: "หน้าเกี่ยวกับ (About View)",
        badge: "Architecture & Origin",
        desc: "ที่มาและแรงบันดาลใจ: ขจัดความเมื่อยล้าจากการพิมพ์สั่งงาน AI Agent ขับเคลื่อนด้วยสถาปัตยกรรมโมเดลเสียง FastConformer RNN-T บน Pure CPU",
      },
      {
        id: "credit",
        src: "/poodlite/credit.png",
        title: "หน้าเครดิต (Credit & EULA)",
        badge: "Licensing & Attribution",
        desc: "สัญญาอนุญาตฟรีแวร์ (EULA) ใช้งานฟรีส่วนบุคคล ไร้โฆษณา และการให้เครดิตโมเดลเสียง Pathumma STT ภายใต้ CC-BY-4.0 โดย NECTEC สวทช.",
      },
    ],
  },
  specs: {
    badge: "System Specifications",
    title: "ความต้องการของระบบ (System Requirements)",
    subtitle: "ออกแบบให้ทำงานได้อย่างราบรื่นบนฮาร์ดแวร์ทั่วไป ไม่จำเป็นต้องใช้สเปกเครื่องระดับสูง",
    os: {
      title: "ระบบปฏิบัติการ (OS)",
      desc: "Windows 10 หรือ Windows 11 (64-bit)",
    },
    cpu: {
      title: "หน่วยประมวลผล (CPU)",
      desc: "x86_64 Dual-Core ขึ้นไป (Pure CPU Inference ไม่ต้องใช้ GPU)",
    },
    ram: {
      title: "หน่วยความจำ (RAM)",
      desc: "ขั้นต่ำ 2 GB (ตัวโปรแกรมใช้ RAM เพียง 15-25 MB)",
    },
    storage: {
      title: "พื้นที่ว่างบนดิสก์ (Storage)",
      desc: "<150MB สำหรับพื้นที่ติดตั้งตัวโปรแกรม",
    },
    audio: {
      title: "อุปกรณ์บันทึกเสียง (Audio)",
      desc: "ไมโครโฟนในตัว หรือ External USB / 3.5mm Microphone",
    },
    network: {
      title: "การเชื่อมต่อเครือข่าย",
      desc: "ไม่จำเป็นต้องเชื่อมต่ออินเทอร์เน็ตในการใช้งาน",
    },
  },
  licenseSection: {
    badge: "License & Terms",
    title: "สัญญาอนุญาตและข้อกำหนดการใช้งาน (EULA)",
    intro: "โปรแกรม Pood Lite เผยแพร่ในรูปแบบ ฟรีแวร์ (Freeware) สำหรับการใช้งานส่วนบุคคล (Personal Productivity) โดยมีข้อกำหนดดังนี้:",
    points: [
      {
        title: "ใช้งานได้ฟรี 100%:",
        desc: "อนุญาตให้บุคคลทั่วไปดาวน์โหลด ติดตั้ง และใช้งานได้ฟรีโดยไม่มีค่าใช้จ่าย",
      },
      {
        title: "ห้ามจำหน่ายเชิงพาณิชย์:",
        desc: "ห้ามนำโปรแกรม ไฟล์ติดตั้ง หรือส่วนใดส่วนหนึ่งไปจำหน่ายต่อ ดัดแปลงเพื่อแสวงหาผลประโยชน์ทางการค้า หรือรวมเข้ากับแพ็กเกจซอฟต์แวร์แบบมีค่าบริการโดยเด็ดขาด",
      },
      {
        title: "การให้เครดิตโมเดลเสียง:",
        desc: "โมเดลเสียง Pathumma STT (FastConformer RNN-T) พัฒนาและเผยแพร่โดย NECTEC สวทช. ภายใต้สัญญาอนุญาตแบบ Creative Commons Attribution 4.0 International (CC-BY-4.0)",
      },
    ],
    rightsNote: "© 2026 Rachtipong Chaiprab (GRG02). All rights reserved.",
    readFullEulaBtn: "อ่านรายละเอียดสัญญาอนุญาตฉบับเต็ม (Full EULA & License)",
  },
  guarantee: {
    badge: "Freeware (Personal EULA)",
    title: "ใช้งานได้ฟรี 100% ไม่มีโฆษณารบกวน",
    description: "ออกแบบมาเพื่อส่งเสริม Productivity ส่วนบุคคลโดยเฉพาะ ปราศจาก Banner, Pop-up หรือระบบติดตามข้อมูล",
  },
  cta: {
    badge: "พร้อมใช้งานทันที ไม่ต้องตั้งค่าซับซ้อน",
    title: "พร้อมเพิ่มความเร็วในการพิมพ์ด้วยเสียงของคุณแล้วหรือยัง?",
    subtitle: "ดาวน์โหลด Pood Lite ใช้งานได้ทันทีบน Windows ปลอดภัย ไร้โฆษณา และไม่ต้องใช้อินเทอร์เน็ต",
    downloadBtn: "ดาวน์โหลดฟรีสำหรับ Windows",
    portfolioBtn: "ดูข้อมูลผู้พัฒนา (Portfolio)",
  },
  footer: {
    developedBy: "พัฒนาโดย",
    developerName: "รัชติพงษ์ ชัยปราบ (Rachtipong Chaiprab)",
    role: "Junior Developer & AI/Cloud TA",
    copyright: "© 2026 Rachtipong Chaiprab (GRG02). All rights reserved.",
    attribution: "Pathumma STT model by NECTEC, NSTDA (CC-BY-4.0)",
  },
  eulaPage: {
    backHome: "ย้อนกลับหน้าหลัก",
    badge: "Software License & Terms",
    title: "สัญญาอนุญาตและข้อกำหนดการใช้งาน",
    subtitle: "Pood Lite Desktop Application • © 2026 Rachtipong Chaiprab (GRG02). All rights reserved.",
    switchLangPrompt: "สลับภาษาเอกสาร:",
    thaiVersionTitle: "ข้อตกลงสิทธิ์การใช้งานสำหรับผู้ใช้ปลายทาง (EULA) — ภาษาไทย",
    englishVersionTitle: "End User License Agreement (EULA) — English Version",
    thirdPartyTitle: "การให้เครดิตและสัญญาอนุญาตบุคคลที่สาม (Third-Party Attributions)",
    thirdPartySubtitle: "Open-Source Dependencies & Foundation Model License",
    modelTitle: "โมเดลพื้นฐานรู้จำเสียงพูด NECTEC Pathumma STT",
    modelBadge: "CC-BY-4.0",
    modelDesc: "โมเดลรู้จำเสียงพูดภาษาไทย Pathumma-stt-th-fastconformer-rnnt-large พัฒนาและเผยแพร่โดย ศูนย์เทคโนโลยีอิเล็กทรอนิกส์และคอมพิวเตอร์แห่งชาติ (NECTEC), สวทช. ภายใต้สัญญาอนุญาตแบบ Creative Commons Attribution 4.0 International (CC-BY-4.0)",
    modelRepoLink: "ลิงก์คลังโมเดลต้นน้ำ (HuggingFace Repository)",
    librariesTitle: "ไลบรารีและส่วนประกอบโอเพนซอร์ส (Open-Source Libraries & Dependencies):",
    contactEmail: "อีเมลติดต่อผู้ถือสิทธิ์: rachtipongc.work@gmail.com",
    contactRightsHolder: "ผู้ถือสิทธิ์: Rachtipong Chaiprab (GRG02)",
  },
};
