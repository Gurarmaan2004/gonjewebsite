"use client";

import { useEffect, useState } from "react";
import { nearestMajorCity } from "@/lib/major-cities";

/**
 * IP-geolocation lookup for the hero title's city — the only place on the
 * hero that names a city (review decision: kicker and lead stay city-free).
 * Resolves to the nearest entry in the curated major-cities list, not the
 * raw city from the lookup, so the title always reads as a recognisable
 * place name.
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
      .then(
        (data: {
          success?: boolean;
          city?: string;
          latitude?: number;
          longitude?: number;
        }) => {
          if (data.success === false || !data.city) return;

          setCity(
            typeof data.latitude === "number" && typeof data.longitude === "number"
              ? nearestMajorCity(data.latitude, data.longitude)
              : data.city,
          );
        },
      )
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
