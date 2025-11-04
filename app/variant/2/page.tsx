"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const targetRef = useRef<HTMLAnchorElement | null>(null);
  const [prefetched, setPrefetched] = useState(false);

  useEffect(() => {
    if (!targetRef.current) return;
    const el = targetRef.current;

    const io = new IntersectionObserver(async (entries) => {
      const seen = entries.some((e) => e.isIntersecting);
      if (seen && !prefetched) {
        await router.prefetch("/about");
        setPrefetched(true);
      }
    }, { rootMargin: "0px 0px -20% 0px", threshold: 0.01 });

    io.observe(el);
    return () => io.disconnect();
  }, [prefetched, router]);

  return (
    <main style={{ padding: 24 }}>
      <h1>Prefetch Scroll Demo</h1>

      {/* 1) Ekranda görünen link → auto prefetch */}
      <p><Link href="/about">About (auto prefetch)</Link></p>

      {/* boşluk: ikinci linki sayfanın altına it */}
      <div style={{ height: 1200 }} />

      {/* 2) Görününce prefetch: başta prefetch={false}, görünür olunca router.prefetch */}
      <p>
        <Link href="/about" prefetch={false} ref={targetRef}>
          Contact (scroll görünce prefetch)
        </Link>
      </p>

      {/* küçük durum göstergesi */}
      <p style={{ opacity: 0.6, fontSize: 12 }}>
        Contact prefetched: {String(prefetched)}
      </p>
    </main>
  );
}
