"use client";

import { motion } from "framer-motion";
import { categories } from "@/data/categories";
import { useFilter } from "@/context/FilterContext";
import type { CategorySlug } from "@/types";
import { cn } from "@/lib/utils";

const allCategories: { id: CategorySlug | "all"; label: string }[] = [
  { id: "all", label: "All" },
  ...categories.map((c) => ({ id: c.id, label: c.name })),
];

export function FilterChips() {
  const { activeCategory, setActiveCategory } = useFilter();

  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {allCategories.map((cat) => (
        <button
          key={cat.id}
          type="button"
          onClick={() => setActiveCategory(cat.id)}
          className={cn(
            "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
            activeCategory === cat.id
              ? "text-white"
              : "text-[var(--muted)] hover:text-foreground glass"
          )}
        >
          {activeCategory === cat.id && (
            <motion.span
              layoutId="filter-chip"
              className="absolute inset-0 rounded-full gradient-bg"
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          )}
          <span className="relative z-10">{cat.label}</span>
        </button>
      ))}
    </div>
  );
}
