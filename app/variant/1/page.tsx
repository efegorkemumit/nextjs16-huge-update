"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function HoverDemo() {
  const router = useRouter();

  return (
    <main style={{ padding: 24 }}>
      <h1>Hover Prefetch Demo</h1>

      <p>
        <Link
          href="/about"
          prefetch={false}
          onMouseEnter={() => router.prefetch("/about")}
          onFocus={() => router.prefetch("/about")}
        >
          About
        </Link>
      </p>
    </main>
  );
}
