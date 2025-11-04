import { Suspense } from "react";
import Result from "./Result";
import { saveAndQueueJob } from "./actions";

export default function BgDemoPage({
  searchParams,
}: {
  searchParams: Promise<{ ok?: string; name?: string }>;
}) {
  return (
    <main style={{ padding: 24 }}>
      <h1>Background Job — after()</h1>

      <form action={saveAndQueueJob} style={{ display: "grid", gap: 8 }}>
        <input name="name" placeholder="Your name" />
        <button type="submit">Save (fires BG job)</button>
      </form>

      <Suspense fallback={<p style={{ marginTop: 12 }}>Loading result…</p>}>
        <Result searchParams={searchParams} />
      </Suspense>
    </main>
  );
}
