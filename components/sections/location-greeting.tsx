"use client";

import { useEffect, useState } from "react";

/**
 * Swaps the hero's static kicker for "Hello from {city}!" once a public
 * IP-geolocation lookup resolves client-side. Renders `fallback` until then,
 * and stays on it permanently if the lookup fails, is blocked, or the visitor
 * is outside Australia — this never blocks or delays the rest of the hero.
 */
export function LocationGreeting({ fallback }: { fallback: string }) {
  const [greeting, setGreeting] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2500);

    fetch("https://ipwho.is/", { signal: controller.signal })
      .then((res) => res.json())
      .then((data: { success?: boolean; city?: string }) => {
        if (data.success !== false && data.city) {
          setGreeting(`Hello from ${data.city}!`);
        }
      })
      .catch(() => {
        // Ad blockers, offline visitors and CORS hiccups all land here —
        // the static fallback is a perfectly good headline on its own.
      })
      .finally(() => clearTimeout(timeout));

    return () => {
      controller.abort();
      clearTimeout(timeout);
    };
  }, []);

  return <>{greeting ?? fallback}</>;
}
