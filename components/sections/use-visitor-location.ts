"use client";

import { useEffect, useState } from "react";
import { nearestMajorCity } from "@/lib/major-cities";

type VisitorLocation = {
  /** Raw city from the IP lookup, for a personal "Hello from {city}!" greeting. */
  city: string;
  /** Nearest entry in the curated major-cities list, for the hero title. */
  nearestCity: string;
};

/**
 * One shared IP-geolocation lookup for the hero, used for both the kicker
 * greeting and the title's city. Centralised here rather than fetched twice
 * (once per piece of UI) to avoid double-hitting the free geolocation API.
 *
 * Returns `null` until the lookup resolves, and stays `null` permanently if
 * it fails, is blocked, or times out — callers fall back to static copy.
 */
export function useVisitorLocation(): VisitorLocation | null {
  const [location, setLocation] = useState<VisitorLocation | null>(null);

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

          setLocation({
            city: data.city,
            nearestCity:
              typeof data.latitude === "number" && typeof data.longitude === "number"
                ? nearestMajorCity(data.latitude, data.longitude)
                : data.city,
          });
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

  return location;
}
