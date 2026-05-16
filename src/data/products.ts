import type { Product } from "@/types";
import { productImages } from "@/lib/productImages";

export const products: Product[] = [
  {
    id: "aurapods-pro-x",
    name: "AuraPods Pro X",
    description:
      "Adaptive noise cancellation with spatial audio and 36-hour battery life.",
    price: 249,
    originalPrice: 299,
    category: "headphones",
    categoryLabel: "Headphones",
    rating: 4.8,
    reviewCount: 2847,
    image: productImages["aurapods-pro-x"],
    badge: "sale",
    badgeLabel: "17% Off",
  },
  {
    id: "novawatch-ultra",
    name: "NovaWatch Ultra",
    description:
      "Titanium case, always-on display, and advanced health sensors.",
    price: 399,
    category: "smart-watches",
    categoryLabel: "Smart Watches",
    rating: 4.9,
    reviewCount: 5123,
    image: productImages["novawatch-ultra"],
    badge: "bestseller",
    badgeLabel: "Best Seller",
  },
  {
    id: "pulseband-elite",
    name: "PulseBand Elite",
    description:
      "Lightweight fitness tracker with sleep coaching and GPS.",
    price: 129,
    category: "smart-watches",
    categoryLabel: "Smart Watches",
    rating: 4.7,
    reviewCount: 1892,
    image: productImages["pulseband-elite"],
    badge: null,
  },
  {
    id: "zenboard-mechanical",
    name: "ZenBoard Mechanical",
    description:
      "Hot-swappable switches, PBT keycaps, and wireless tri-mode connectivity.",
    price: 189,
    originalPrice: 219,
    category: "keyboards",
    categoryLabel: "Keyboards",
    rating: 4.8,
    reviewCount: 967,
    image: productImages["zenboard-mechanical"],
    badge: "sale",
    badgeLabel: "15% Off",
  },
  {
    id: "glidemouse-pro",
    name: "GlideMouse Pro",
    description:
      "26K DPI sensor, 63g ultralight shell, and zero-latency wireless.",
    price: 89,
    category: "gaming",
    categoryLabel: "Gaming",
    rating: 4.6,
    reviewCount: 2341,
    image: productImages["glidemouse-pro"],
    badge: null,
  },
  {
    id: "lumahub-smart-home",
    name: "LumaHub Smart Home",
    description:
      "Central hub controlling lights, climate, and security from one app.",
    price: 159,
    category: "smart-home",
    categoryLabel: "Smart Home",
    rating: 4.8,
    reviewCount: 756,
    image: productImages["lumahub-smart-home"],
    badge: null,
  },
  {
    id: "snapcharge-mag-dock",
    name: "SnapCharge Mag Dock",
    description:
      "15W MagSafe-compatible charging stand with ambient LED ring.",
    price: 59,
    category: "mobile",
    categoryLabel: "Mobile",
    rating: 4.5,
    reviewCount: 3421,
    image: productImages["snapcharge-mag-dock"],
    badge: "new",
    badgeLabel: "New",
  },
  {
    id: "echoframe-ar-lite",
    name: "EchoFrame AR Lite",
    description:
      "Lightweight AR glasses with voice assistant and heads-up navigation.",
    price: 349,
    category: "gaming",
    categoryLabel: "Gaming",
    rating: 4.9,
    reviewCount: 412,
    image: productImages["echoframe-ar-lite"],
    badge: "limited",
    badgeLabel: "Limited",
  },
];

export const showcaseProduct = products.find((p) => p.id === "novawatch-ultra")!;
