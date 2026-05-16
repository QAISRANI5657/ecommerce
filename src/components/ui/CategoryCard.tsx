"use client";

import { RemoteImage } from "./RemoteImage";
import { motion } from "framer-motion";
import {
  Gamepad2,
  Headphones,
  Home,
  Keyboard,
  Smartphone,
  Watch,
} from "lucide-react";
import type { Category } from "@/types";
import { useFilter } from "@/context/FilterContext";

const iconMap = {
  watch: Watch,
  headphones: Headphones,
  gamepad: Gamepad2,
  keyboard: Keyboard,
  home: Home,
  smartphone: Smartphone,
};

interface CategoryCardProps {
  category: Category;
  index?: number;
}

export function CategoryCard({ category, index = 0 }: CategoryCardProps) {
  const { filterByCategory } = useFilter();
  const Icon = iconMap[category.icon as keyof typeof iconMap] ?? Watch;

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={() => filterByCategory(category.id)}
      className="group relative w-full overflow-hidden rounded-2xl glass text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500"
    >
      <div className="relative aspect-[4/3] min-h-[180px] overflow-hidden">
        <RemoteImage
          src={category.image}
          alt={category.name}
          fill
          className="transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" aria-hidden />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
        <div className="mb-2 inline-flex rounded-full glass p-2">
          <Icon className="h-5 w-5 text-cyan-400" />
        </div>
        <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold text-white">
          {category.name}
        </h3>
        <p className="mt-1 text-sm text-white/70 line-clamp-2">
          {category.description}
        </p>
      </div>
    </motion.button>
  );
}
