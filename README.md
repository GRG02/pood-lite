<div align="center">

  <img src="public/icons/poodlite-logo.png" alt="Pood Lite Logo" width="96" height="96" />

  # Pood Lite (พูด ไลท์)
  ### แอปพลิเคชันถอดความเสียงภาษาไทยออฟไลน์ 100% สำหรับ Windows
  **100% Offline Thai Speech-to-Text Desktop Application for Windows**

  [![Next.js](https://img.shields.io/badge/Next.js-16.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
  [![React](https://img.shields.io/badge/React-19.3-blue?style=for-the-badge&logo=react)](https://react.dev/)
  [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
  [![License](https://img.shields.io/badge/License-Proprietary%20%2F%20EULA-emerald?style=for-the-badge)](./LICENSE.md)
  [![VirusTotal](https://img.shields.io/badge/VirusTotal-Verified%20Clean-success?style=for-the-badge&logo=virustotal)](https://www.virustotal.com/gui/collection/07e97e2d56f9990aeb14286fce204fcbc412ccba65b279fa44016fe0965d70e1)

  <p align="center">
    <a href="#-จุดเด่นสำคัญ-key-features">คุณสมบัติเด่น</a> •
    <a href="#-tech-stack">เทคโนโลยีที่ใช้</a> •
    <a href="#-การติดตั้งและพัฒนาในเครื่อง-local-development">การติดตั้ง</a> •
    <a href="#-โครงสร้างโปรเจกต์-project-structure">โครงสร้างโปรเจกต์</a> •
    <a href="#-ความปลอดภัยและความเป็นส่วนตัว-security--privacy">ความปลอดภัย</a> •
    <a href="#-ผู้พัฒนา-developer">ผู้พัฒนา</a>
  </p>

</div>

---

## 📖 เกี่ยวกับโปรเจกต์ (About the Project)

**Pood Lite (พูด ไลท์)** เว็บไซต์ทางการ (Official Landing Page) สำหรับนำเสนอและเผยแพร่โปรแกรม **Pood Lite** — แอปพลิเคชันพิมพ์ด้วยเสียง (Dictation) และแปลงไฟล์เสียงเป็นข้อความ (Transcription) ภาษาไทยที่ทำงานบนเครื่องของผู้ใช้ (On-Device) แบบ **ออฟไลน์ 100% ไม่ต้องต่ออินเทอร์เน็ต** พัฒนาขึ้นเพื่อแก้ปัญหาข้อมูลรั่วไหล ความล่าช้าของระบบคลาวด์ และค่าบริการรายเดือน

เว็บไซต์นี้ถูกพัฒนาขึ้นด้วยสถาปัตยกรรมโมเดิร์นเว็บที่เน้นประสิทธิภาพ ความเร็ว และความปลอดภัยระดับสูงสุด พร้อมรองรับการแสดงผล 2 ภาษา (ไทย และ อังกฤษ) อย่างสมบูรณ์

---

## ✨ จุดเด่นสำคัญ (Key Features)

### ฟังก์ชันของตัวแอปพลิเคชัน Pood Lite:
- 🔒 **100% Offline & Privacy-First**: ประมวลผลบนเครื่อง (Local Processing) ไม่ส่งข้อมูลเสียงหรือข้อความออกนอกเครื่อง มั่นคงปลอดภัยสูงสุด
- 🎙️ **System-Wide Dictation**: กดปุ่มลัดแล้วพูด เพื่อพิมพ์ข้อความลงโปรแกรมใดก็ได้ใน Windows เช่น Microsoft Word, Google Docs, Notepad, LINE, Discord
- 📂 **Audio File Transcription**: ลากและวางไฟล์เสียง (WAV, MP3, M4A, FLAC) เพื่อถอดความยาวเป็นเอกสารได้อย่างแม่นยำ
- ⚡ **Lightweight & High Efficiency**: ตัวติดตั้งขนาดกะทัดรัด (~82 MB) ใช้ทรัพยากรน้อย ไม่หน่วงเครื่อง
- 🛡️ **Clean & Verified**: ตรวจสอบความปลอดภัยผ่าน VirusTotal พบไม่มีมัลแวร์ ปลอดภัย 100%

### ฟังก์ชันของเว็บไซต์ Landing Page:
- 🌐 **Full Bilingual Support**: ระบบสลับภาษา (TH / EN) พร้อมจำค่าภาษาที่ผู้ใช้เลือกผ่าน Local Storage
- ⚡ **Instant Direct CDN Download**: ลิงก์ดาวน์โหลดตัวติดตั้งผ่าน Cloudflare R2 Public CDN ความเร็วสูง รองรับทุกเบราว์เซอร์
- 🛡️ **Enterprise Security Headers**: ป้องกัน Clickjacking, MIME-Sniffing, XSS และบังคับใช้ HSTS / Content Restrictions อย่างเข้มงวด
- 📱 **Fully Responsive & Modern Design**: ออกแบบด้วย Tailwind CSS v4, Micro-animations, และ Chakra UI Components
- 📜 **Complete Legal & EULA**: หน้าข้อตกลงสัญญาอนุญาตผู้ใช้ปลายทางแบบโต้ตอบและค้นหาหัวข้อได้ง่าย

---

## 🛠 Tech Stack

| หมวดหมู่ | เทคโนโลยี / เครื่องมือ |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack, Partial Prerendering) |
| **Library** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) + Vanilla CSS Modern Tokens |
| **UI Components** | [Chakra UI v3](https://chakra-ui.com/) + [@emotion/react](https://emotion.sh/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Theme & Localization** | Custom React Context + `useSyncExternalStore` + `next-themes` |
| **Binary Storage / CDN** | [Cloudflare R2 Object Storage](https://www.cloudflare.com/developer-platform/r2/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |

---

## 📂 โครงสร้างโปรเจกต์ (Project Structure)

```text
pood-lite/
├── app/
│   ├── components/            # UI Components แยกตามส่วนของ Landing Page
│   │   ├── ComparisonTable.tsx# ตารางเปรียบเทียบ Pood Lite vs ระบบ Cloud
│   │   ├── CtaSection.tsx     # ส่วน Call-to-action ดาวน์โหลดท้ายหน้า
│   │   ├── FeaturesSection.tsx# ส่วนแสดงฟีเจอร์เด่น 6 ประการ
│   │   ├── Footer.tsx         # ส่วนท้ายเว็บ ลิงก์ และเครดิต
│   │   ├── GallerySection.tsx # แกลเลอรีภาพตัวอย่างการใช้งานโปรแกรม + Modal
│   │   ├── GuaranteeBanner.tsx# แถบเน้นย้ำความปลอดภัย ออฟไลน์ 100%
│   │   ├── HeroSection.tsx    # หน้าแรก ปุ่มดาวน์โหลด และคู่มือการใช้งาน
│   │   ├── LicenseSection.tsx # ส่วนแสดงข้อมูลลิขสิทธิ์และการใช้งาน
│   │   ├── Navbar.tsx         # แถบเมนูด้านบน สลับภาษา และปุ่มลิงก์
│   │   ├── SpecsSection.tsx   # ความต้องการของระบบ (System Requirements)
│   │   └── ui/                # Chakra UI Provider
│   ├── data/                  # ข้อมูลเนื้อหาและระบบหลายภาษา
│   │   ├── LanguageContext.tsx# React Context จัดการสถานะภาษา TH / EN
│   │   ├── th.ts              # คลังคำศัพท์และข้อความภาษาไทย
│   │   ├── en.ts              # คลังคำศัพท์และข้อความภาษาอังกฤษ
│   │   └── types.ts           # Type Definition สำหรับ SiteContent
│   ├── eula/                  # หน้าสัญญาอนุญาตผู้ใช้ปลายทาง (/eula)
│   │   └── page.tsx
│   ├── utils/
│   │   └── constants.ts       # ค่าคงที่และ External Links ทั้งหมด
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx             # Root Layout, Metadata และ SEO Tags
│   └── page.tsx               # Main Landing Page Entrypoint
├── public/
│   ├── icons/                 # ไอคอนแอปพลิเคชัน (poodlite-logo.png)
│   └── poodlite/              # ภาพหน้าจอ Screenshot โปรแกรมจริง
├── .env.local                 # Public Environment Variables (CDN URLs)
├── EULA.md                    # สัญญาอนุญาตผู้ใช้ปลายทางฉบับเต็ม
├── LICENSE.md                 # เอกสารลิขสิทธิ์ซอฟต์แวร์
├── next.config.ts             # การตั้งค่า Next.js และ Security Headers
├── package.json
├── README.md                  # เอกสารแนะนำโปรเจกต์
└── tsconfig.json
```

---

## 🚀 การติดตั้งและพัฒนาในเครื่อง (Local Development)

### ข้อกำหนดเบื้องต้น (Prerequisites)
- [Node.js](https://nodejs.org/) เวอร์ชัน 20.x ขึ้นไป
- [npm](https://www.npmjs.com/) หรือ [pnpm](https://pnpm.io/)

### ขั้นตอนการรันโปรเจกต์:

1. **โคลนคลังโค้ด (Clone Repository)**:
   ```bash
   git clone https://github.com/GRG02/pood-lite.git
   cd pood-lite
   ```

2. **ติดตั้ง Dependencies**:
   ```bash
   npm install
   ```

3. **ตั้งค่า Environment Variables**:
   ตรวจสอบหรือสร้างไฟล์ `.env.local` ที่ Root Directory:
   ```env
   NEXT_PUBLIC_DEVELOPER_PORTFOLIO_URL=https://rachtipongc-web.vercel.app/
   NEXT_PUBLIC_USER_MANUAL_URL=https://canva.link/uv6da6h9k0bhist
   NEXT_PUBLIC_DOWNLOAD_URL=https://pub-9c87d85c9a8b4c1d97d16cccf0a4e316.r2.dev/my-website/PoodLite-Setup-v1.0.0.exe
   NEXT_PUBLIC_VIRUSTOTAL_URL=https://www.virustotal.com/gui/collection/07e97e2d56f9990aeb14286fce204fcbc412ccba65b279fa44016fe0965d70e1
   ```

4. **รัน Development Server**:
   ```bash
   npm run dev
   ```
   เปิดเบราว์เซอร์ไปที่ [http://localhost:3000](http://localhost:3000)

5. **ตรวจสอบ Code Quality & Lint**:
   ```bash
   npm run lint
   ```

6. **Build โปรดักชัน**:
   ```bash
   npm run build
   ```

---

## 🔒 ความปลอดภัยและความเป็นส่วนตัว (Security & Privacy)

- **Zero-Data Collection**: แอปพลิเคชัน Pood Lite ไม่มีการเก็บรวบรวมข้อมูลเสียงหรือบันทึกประวัติการพิมพ์ใดๆ ทั้งสิ้น
- **VirusTotal Certified**: ตัวติดตั้งผ่านการสแกนด้วยเอนจินแอนติไวรัสชั้นนำกว่า 70 รายการบน VirusTotal
- **Content Security**: เว็บไซต์นี้ถูกตั้งค่า Security Headers ตามมาตรฐาน OWASP เพื่อป้องกันภัยคุกคามทางไซเบอร์ เช่น Cross-Site Scripting (XSS), Clickjacking, และ MIME-type Sniffing

---

## ⚖️ สัญญาอนุญาต (License)

โปรแกรม Pood Lite และเว็บไซต์นี้อยู่ภายใต้ข้อตกลง **End-User License Agreement (EULA)** 
- สามารถดาวน์โหลดและใช้งานได้ฟรีเพื่อการใช้งานส่วนบุคคล
- ห้ามดัดแปลง ทำวิศวกรรมย้อนกลับ (Reverse Engineer) หรือจำหน่ายต่อในเชิงพาณิชย์โดยไม่ได้รับอนุญาต
- ศึกษารายละเอียดเพิ่มเติมได้ที่ [LICENSE.md](./LICENSE.md) และ [EULA.md](./EULA.md)

---

## 👨‍💻 ผู้พัฒนา (Developer)

- **ผู้พัฒนา**: รัชติพงษ์ ชัยปราบ (Rachtipong Chaiprab / GRG02)
- **Portfolio**: [rachtipongc-web.vercel.app](https://rachtipongc-web.vercel.app/)
- **GitHub**: [@GRG02](https://github.com/GRG02)
- **Contact / Email**: [ratipong818@gmail.com](mailto:ratipong818@gmail.com)
- **User Manual**: [Pood Lite Canva Guide](https://canva.link/uv6da6h9k0bhist)
