/**
 * A small curated list of major cities, used to turn a visitor's raw IP
 * geolocation into a recognisable city name for the hero title ("delivered
 * across {city}") rather than whatever small suburb/town an IP database
 * resolves to. Weighted toward Australia (Gonje's actual service area) with
 * enough global coverage that visitors from elsewhere still get a sensible
 * answer, reflecting the multicultural communities Gonje serves.
 *
 * Nearest-city matching, not real service coverage — see the review decision
 * in the hero title feature: the title always shows the visitor's nearest
 * major city, even outside Melbourne where Gonje doesn't deliver yet.
 */
export const majorCities: readonly { name: string; lat: number; lon: number }[] = [
  // Australia
  { name: "Melbourne", lat: -37.8136, lon: 144.9631 },
  { name: "Sydney", lat: -33.8688, lon: 151.2093 },
  { name: "Brisbane", lat: -27.4698, lon: 153.0251 },
  { name: "Perth", lat: -31.9523, lon: 115.8613 },
  { name: "Adelaide", lat: -34.9285, lon: 138.6007 },
  { name: "Canberra", lat: -35.2809, lon: 149.13 },
  { name: "Hobart", lat: -42.8821, lon: 147.3272 },
  { name: "Darwin", lat: -12.4634, lon: 130.8456 },
  { name: "Gold Coast", lat: -28.0167, lon: 153.4 },
  { name: "Geelong", lat: -38.1499, lon: 144.3617 },
  // New Zealand
  { name: "Auckland", lat: -36.8485, lon: 174.7633 },
  { name: "Wellington", lat: -41.2865, lon: 174.7762 },
  // Africa
  { name: "Lagos", lat: 6.5244, lon: 3.3792 },
  { name: "Accra", lat: 5.6037, lon: -0.187 },
  { name: "Nairobi", lat: -1.2921, lon: 36.8219 },
  { name: "Johannesburg", lat: -26.2041, lon: 28.0473 },
  { name: "Cairo", lat: 30.0444, lon: 31.2357 },
  // Asia
  { name: "Singapore", lat: 1.3521, lon: 103.8198 },
  { name: "Mumbai", lat: 19.076, lon: 72.8777 },
  { name: "Delhi", lat: 28.7041, lon: 77.1025 },
  { name: "Manila", lat: 14.5995, lon: 120.9842 },
  { name: "Jakarta", lat: -6.2088, lon: 106.8456 },
  { name: "Tokyo", lat: 35.6762, lon: 139.6503 },
  { name: "Hong Kong", lat: 22.3193, lon: 114.1694 },
  { name: "Dubai", lat: 25.2048, lon: 55.2708 },
  // Europe
  { name: "London", lat: 51.5072, lon: -0.1276 },
  { name: "Paris", lat: 48.8566, lon: 2.3522 },
  { name: "Berlin", lat: 52.52, lon: 13.405 },
  // Americas
  { name: "New York", lat: 40.7128, lon: -74.006 },
  { name: "Los Angeles", lat: 34.0522, lon: -118.2437 },
  { name: "Toronto", lat: 43.6532, lon: -79.3832 },
];

function toRadians(deg: number) {
  return (deg * Math.PI) / 180;
}

/** Great-circle distance in km (haversine). */
function distanceKm(a: { lat: number; lon: number }, b: { lat: number; lon: number }) {
  const R = 6371;
  const dLat = toRadians(b.lat - a.lat);
  const dLon = toRadians(b.lon - a.lon);
  const lat1 = toRadians(a.lat);
  const lat2 = toRadians(b.lat);

  const h =
    Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

/** The closest entry in `majorCities` to a given lat/lon. */
export function nearestMajorCity(lat: number, lon: number): string {
  let closest = majorCities[0];
  let closestDistance = Infinity;

  for (const city of majorCities) {
    const d = distanceKm({ lat, lon }, city);
    if (d < closestDistance) {
      closestDistance = d;
      closest = city;
    }
  }

  return closest.name;
}
