import {
  Clock,
  CreditCard,
  HeartHandshake,
  Headphones,
  Leaf,
  LineChart,
  MapPin,
  Megaphone,
  Package,
  ShieldCheck,
  ShoppingBasket,
  Sparkles,
  Store,
  Truck,
  Users,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/content/types";

/**
 * Maps the string icon names used in /content to real components, so content
 * files stay plain data with no component imports.
 */
const icons: Record<IconName, LucideIcon> = {
  "map-pin": MapPin,
  store: Store,
  "shopping-basket": ShoppingBasket,
  "credit-card": CreditCard,
  clock: Clock,
  "shield-check": ShieldCheck,
  leaf: Leaf,
  "heart-handshake": HeartHandshake,
  truck: Truck,
  package: Package,
  sparkles: Sparkles,
  users: Users,
  "line-chart": LineChart,
  wallet: Wallet,
  headphones: Headphones,
  megaphone: Megaphone,
};

export function Icon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  const Component = icons[name];
  return <Component className={className} aria-hidden="true" strokeWidth={1.75} />;
}
