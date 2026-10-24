import { SiteContent } from "./types";

export const englishContent: SiteContent = {
  navbar: {
    announcement: "🎉 Released Version 1.0.0 for Windows — 100% Free, Ad-Free, No Internet Required",
    features: "Features",
    comparison: "Comparison",
    gallery: "Screenshots",
    specs: "System Specs",
    eula: "License & EULA",
    manual: "User Guide",
    portfolio: "More",
    download: "Free Download",
  },
  hero: {
    pill: "100% Offline • Pure CPU • Windows Desktop",
    titleLine1: "Thai Voice Dictation",
    titleLine2: "Fast, Crisp & 100% Offline",
    description:
      "Native Windows desktop dictation powered by Rust + Slint Native UI and Pathumma STT. Runs directly on CPU with zero cloud dependencies and minimal memory footprint of only 15-25 MB RAM.",
    motto: "“Burn tokens, not humans — Voice dictation for AI Agents”",
    downloadCta: "Download Pood Lite for Windows",
    virusTotalCta: "Security Verification (VirusTotal Collection)",
    manualCta: "Pood Lite User Guide & Setup Manual",
    platformNote: "Supports Windows 10/11 (64-bit) • Freeware for Personal Productivity",
    metrics: [
      {
        label: "RAM Usage",
        value: "15-25 MB",
        note: "Drops to 1-3 MB in system tray",
      },
      {
        label: "Average Latency",
        value: "~500 ms",
        note: "Real-time character keystrokes",
      },
      {
        label: "Compute Target",
        value: "Pure CPU",
        note: "No discrete GPU needed",
      },
      {
        label: "License Model",
        value: "Free & Ad-Free",
        note: "No monthly subscriptions",
      },
    ],
  },
  features: {
    badge: "Philosophy & Feature Highlights",
    title: "Philosophy, Purpose & Core Features",
    subtitle:
      "Stream your Thai voice into text in any Windows application. Engineered to eliminate keyboard fatigue when prompting AI Agents.",
    philosophyTitle: "The Origin & Purpose",
    mottoQuote:
      "“Burn tokens, not humans — because typing fatigue destroys productivity far more than a few garbage tokens.”",
    mottoAuthor: "Philosophy behind Pood Lite (Origin & Purpose)",
    pillars: [
      {
        number: "1",
        title: "Built Specifically for AI Agents",
        desc: "Born from typing fatigue when feeding long prompts and contextual tasks. Speak freely instead of hammering keystrokes one by one.",
      },
      {
        number: "2",
        title: "100% Local & Free Forever",
        desc: "Inspired by WisprFlow but without monthly fees. A lightweight ASR running entirely on your local CPU with zero data leakage.",
      },
      {
        number: "3",
        title: "Minor Typos Are No Problem",
        desc: "Even with occasional transcription slips, modern LLMs easily infer context. Speed, flow, and low latency are what truly matter.",
      },
    ],
    cards: [
      {
        title: "100% Offline & Maximum Privacy",
        desc: "All audio processing stays strictly on your computer. Zero telemetry, zero cloud uploads. Your confidential work and personal messages remain 100% secure.",
      },
      {
        title: "Push-to-Talk with Real-time Waveform",
        desc: "Hold Left Ctrl to speak and release to transcribe. Live responsive audio waveform animation provides immediate real-time feedback.",
      },
      {
        title: "Smart Shortcut Guard & Direct Keystroke",
        desc: "Intelligent hotkey collision avoidance cancels dictation when pressing Ctrl+C, Ctrl+V, or Ctrl+S. Directly injects Unicode text without polluting Clipboard history (Win+V).",
      },
      {
        title: "Ultra-Lightweight & Background System Tray",
        desc: "Engineered in native Rust with no web runtimes (Chromium/WebView2). Consumes only 15-25 MB RAM when active, reducing to 1-3 MB when minimized to System Tray.",
      },
    ],
  },
  comparison: {
    badge: "Why Pood Lite",
    title: "Pood Lite vs Traditional ASR Solutions",
    subtitle: "A clear difference in privacy, latency, and system resource efficiency.",
    headers: {
      feature: "Feature",
      poodLite: "Pood Lite (Desktop)",
      buzz: "Buzz App",
      wisprFlow: "WisprFlow",
    },
    rows: [
      {
        feature: "Primary Workflow",
        poodLite: "Live Push-to-Talk Dictation",
        buzz: "Batch File Transcription",
        wisprFlow: "Live Dictation + AI Polishing",
      },
      {
        feature: "Accuracy",
        poodLite: "Good (Optimized for AI)",
        buzz: "Varies by Model (Tiny–Large)",
        wisprFlow: "Very High (Cloud LLM)",
      },
      {
        feature: "Internet Connection",
        poodLite: "100% Offline (No Internet)",
        buzz: "100% Offline",
        wisprFlow: "Always Requires Internet",
      },
      {
        feature: "Voice Privacy",
        poodLite: "100% On-Device Processing",
        buzz: "100% On-Device Processing",
        wisprFlow: "Cloud Server Processing",
      },
      {
        feature: "Window Open RAM",
        poodLite: "15–25 MB",
        buzz: "500 MB – 2 GB+",
        wisprFlow: "300–600 MB",
      },
      {
        feature: "System Tray RAM",
        poodLite: "1–3 MB",
        buzz: "No Tray Support",
        wisprFlow: "100–200 MB",
      },
      {
        feature: "Usage Limits",
        poodLite: "Unlimited",
        buzz: "Unlimited",
        wisprFlow: "Quota Limited (Pro Required)",
      },
      {
        feature: "Pricing",
        poodLite: "100% Free (Freeware)",
        buzz: "100% Free (Open-Source)",
        wisprFlow: "Monthly Subscription",
      },
      {
        feature: "In-App Ads",
        poodLite: "No Ads",
        buzz: "No Ads",
        wisprFlow: "Pro Upgrade Prompts",
      },
    ],
  },
  gallery: {
    badge: "Visual Tour",
    title: "Real Windows Desktop Experience",
    subtitle: "Experience a meticulously crafted native desktop UI that is clean, minimal, and agile.",
    clickToEnlarge: "Click to enlarge",
    closeModal: "Close image modal",
    screenshots: [
      {
        id: "home",
        src: "/poodlite/home.png",
        title: "Home View (Transcription)",
        badge: "Core Transcription",
        desc: "Live Thai speech stream with dynamic waveform on Left Ctrl hold, quick copy clipboard box, and 1-minute speaking stats.",
      },
      {
        id: "setting",
        src: "/poodlite/setting.png",
        title: "Settings View (System Controls)",
        badge: "System Controls",
        desc: "Microphone input selection, Windows startup toggle, System Tray background mode, and WSOLA audio speed playback (0.70x - 1.30x).",
      },
      {
        id: "about",
        src: "/poodlite/about.png",
        title: "About View (Architecture & Origin)",
        badge: "Architecture & Origin",
        desc: "Origin & philosophy: eliminate AI prompting typing fatigue. Powered by FastConformer RNN-T Thai speech architecture on Pure CPU.",
      },
      {
        id: "credit",
        src: "/poodlite/credit.png",
        title: "Credit & EULA View",
        badge: "Licensing & Attribution",
        desc: "Freeware EULA terms for personal productivity and Pathumma STT model attribution under CC-BY-4.0 by NECTEC, NSTDA.",
      },
    ],
  },
  specs: {
    badge: "System Specifications",
    title: "System Requirements",
    subtitle: "Designed to operate effortlessly on standard everyday hardware without high-end specs.",
    os: {
      title: "Operating System (OS)",
      desc: "Windows 10 or Windows 11 (64-bit)",
    },
    cpu: {
      title: "Processor (CPU)",
      desc: "x86_64 Dual-Core or higher (Pure CPU inference, no GPU required)",
    },
    ram: {
      title: "System Memory (RAM)",
      desc: "Minimum 2 GB (App uses only 15-25 MB RAM)",
    },
    storage: {
      title: "Available Storage",
      desc: "<150MB for program installation",
    },
    audio: {
      title: "Audio Device",
      desc: "Built-in or external USB / 3.5mm Microphone",
    },
    network: {
      title: "Network Connection",
      desc: "No internet connection required",
    },
  },
  licenseSection: {
    badge: "License & Terms",
    title: "End User License Agreement (EULA)",
    intro: "Pood Lite is released as Freeware for personal productivity and individual use subject to the following terms:",
    points: [
      {
        title: "100% Free of Charge:",
        desc: "Permission is granted to download, install, and use the application free of fees for personal or internal productivity.",
      },
      {
        title: "Commercial Resale Prohibited:",
        desc: "Resale, commercial redistribution, sublicensing, or bundling into paid software packages is strictly prohibited without prior written consent.",
      },
      {
        title: "AI Speech Model Attribution:",
        desc: "The Pathumma STT model (FastConformer RNN-T) was developed and released by NECTEC, NSTDA under the Creative Commons Attribution 4.0 International License (CC-BY-4.0).",
      },
    ],
    rightsNote: "© 2026 Rachtipong Chaiprab (GRG02). All rights reserved.",
    readFullEulaBtn: "Read Full EULA & License Terms",
  },
  guarantee: {
    badge: "Freeware (Personal EULA)",
    title: "100% Free & Completely Ad-Free",
    description: "Built strictly for personal productivity. No advertisements, pop-ups, telemetry, or user tracking.",
  },
  cta: {
    badge: "Ready to Use Instantly • Zero Complex Setup",
    title: "Ready to Supercharge Your Typing Speed with Voice?",
    subtitle: "Download Pood Lite now on Windows. 100% offline, secure, ad-free, and private.",
    downloadBtn: "Free Download for Windows",
    portfolioBtn: "Developer Portfolio",
  },
  footer: {
    developedBy: "Developed by",
    developerName: "Rachtipong Chaiprab",
    role: "Junior Developer & AI/Cloud TA",
    copyright: "© 2026 Rachtipong Chaiprab (GRG02). All rights reserved.",
    attribution: "Pathumma STT model by NECTEC, NSTDA (CC-BY-4.0)",
  },
  eulaPage: {
    backHome: "Back to Home",
    badge: "Software License & Terms",
    title: "Software License & Terms of Use",
    subtitle: "Pood Lite Desktop Application • © 2026 Rachtipong Chaiprab (GRG02). All rights reserved.",
    switchLangPrompt: "Document Language:",
    thaiVersionTitle: "ข้อตกลงสิทธิ์การใช้งานสำหรับผู้ใช้ปลายทาง (EULA) — ภาษาไทย",
    englishVersionTitle: "End User License Agreement (EULA) — English Version",
    thirdPartyTitle: "Third-Party Attributions & Open-Source Licenses",
    thirdPartySubtitle: "Open-Source Dependencies & Foundation Model License",
    modelTitle: "NECTEC Pathumma STT Foundation Model",
    modelBadge: "CC-BY-4.0",
    modelDesc: "The Pathumma-stt-th-fastconformer-rnnt-large model was researched, developed, and open-sourced by the National Electronics and Computer Technology Center (NECTEC), NSTDA, Thailand, under the Creative Commons Attribution 4.0 International (CC-BY-4.0) license.",
    modelRepoLink: "Upstream Repository (HuggingFace)",
    librariesTitle: "Open-Source Libraries & Dependencies:",
    contactEmail: "Rights Holder Contact: rachtipongc.work@gmail.com",
    contactRightsHolder: "Rights Holder: Rachtipong Chaiprab (GRG02)",
  },
};
