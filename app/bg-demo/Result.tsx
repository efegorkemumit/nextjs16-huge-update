import { use } from "react";

export default function Result({
  searchParams,
}: {
  searchParams: Promise<{ ok?: string; name?: string }>;
}) {
  const { ok, name } = use(searchParams);
  if (ok !== "1") return null;

  return (
    <>
      <p style={{ marginTop: 12 }}>Result: Saved {name}</p>
      <small>
        ~2 sn sonra loglarda: <code>[BG:/bg-demo] welcome-email -&gt; {name}</code>
      </small>
    </>
  );
}
