"use client";

import { useEffect, useState } from "react";

/**
 * IP-geolocation lookup for the hero's city — used for both the kicker
 * ("Hello from {city}!") and the title ("delivered across {city}"). Both
 * read from this same hook call so they can never name two different
 * cities (that mismatch — e.g. kicker saying Dallas, title saying Toronto
 * from an earlier "nearest major city" approach — is exactly what this is
 * now written to avoid).
 *
 * Returns `null` until the lookup resolves, and stays `null` permanently if
 * it fails, is blocked, or times out — the caller falls back to static copy.
 */
export function useVisitorLocation(): string | null {
  const [city, setCity] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 2500);

    fetch("https://ipwho.is/", { signal: controller.signal })
      .then((res) => res.json())
      .then((data: { success?: boolean; city?: string }) => {
        if (data.success === false || !data.city) return;
        setCity(data.city);
      })
      .catch(() => {
        // Ad blockers, offline visitors and CORS hiccups all land here —
        // the caller's static fallback is a perfectly good headline on its own.
      })
      .finally(() => clearTimeout(timeout));

    return () => {
      controller.abort();
      clearTimeout(timeout);
    };
  }, []);

  return city;
}
