import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "สัญญาอนุญาตและข้อกำหนดการใช้งาน (EULA & License) — Pood Lite",
  description:
    "ข้อตกลงสิทธิ์การใช้งานสำหรับผู้ใช้ปลายทาง (End User License Agreement) และสัญญาอนุญาตส่วนประกอบโอเพนซอร์สของแอปพลิเคชัน Pood Lite",
};

export default function EulaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
