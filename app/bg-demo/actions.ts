"use server";

import { after } from "next/server";
import { redirect } from "next/navigation";

export async function saveAndQueueJob(formData: FormData) {
  const who = String(formData.get("name") || "Anon");

  after(async () => {
    await new Promise((r) => setTimeout(r, 2000)); // ağır iş simülasyonu
    console.log("[BG:/bg-demo] welcome-email ->", who);
  });

  redirect(`/bg-demo?ok=1&name=${encodeURIComponent(who)}`);
}
