import type { Category } from "@/types";
import { categoryImages } from "@/lib/productImages";

export const categories: Category[] = [
  {
    id: "smart-watches",
    name: "Smart Watches",
    description: "Track fitness, calls, and style on your wrist",
    image: categoryImages["smart-watches"],
    icon: "watch",
  },
  {
    id: "headphones",
    name: "Headphones",
    description: "Studio-grade sound for work and play",
    image: categoryImages.headphones,
    icon: "headphones",
  },
  {
    id: "gaming",
    name: "Gaming Accessories",
    description: "Precision gear built for competitive edge",
    image: categoryImages.gaming,
    icon: "gamepad",
  },
  {
    id: "keyboards",
    name: "Keyboards",
    description: "Mechanical switches, minimalist design",
    image: categoryImages.keyboards,
    icon: "keyboard",
  },
  {
    id: "smart-home",
    name: "Smart Home",
    description: "Automate your space with intelligent devices",
    image: categoryImages["smart-home"],
    icon: "home",
  },
  {
    id: "mobile",
    name: "Mobile Accessories",
    description: "Chargers, cases, and everyday essentials",
    image: categoryImages.mobile,
    icon: "smartphone",
  },
];
