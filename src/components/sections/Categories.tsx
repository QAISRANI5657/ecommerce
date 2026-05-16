"use client";

import { categories } from "@/data/categories";
import { CategoryCard } from "@/components/ui/CategoryCard";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Categories() {
  return (
    <section
      id="categories"
      className="scroll-mt-nav py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          label="Browse"
          title="Shop by Category"
          description="From smart watches to gaming gear—find the perfect tech for your lifestyle."
        />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-3">
          {categories.map((category, i) => (
            <CategoryCard key={category.id} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
