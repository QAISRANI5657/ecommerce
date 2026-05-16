"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useFilter } from "@/context/FilterContext";
import { ProductCard } from "@/components/ui/ProductCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FilterChips } from "@/components/ui/FilterChips";

export function FeaturedProducts() {
  const { filteredProducts, searchQuery } = useFilter();

  return (
    <section
      id="products"
      className="scroll-mt-nav py-20 md:py-28 mesh-gradient"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          label="Curated"
          title="Featured Products"
          description="Handpicked premium tech—rated by thousands of customers who demand the best."
        />
        <div className="mb-10">
          <FilterChips />
        </div>

        <AnimatePresence mode="wait">
          {filteredProducts.length === 0 ? (
            <motion.p
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-16 text-center text-[var(--muted)]"
            >
              No products found
              {searchQuery ? ` for "${searchQuery}"` : " in this category"}.
            </motion.p>
          ) : (
            <motion.div
              key={`${filteredProducts.length}-${searchQuery}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6 lg:grid-cols-4"
            >
              {filteredProducts.map((product, i) => (
                <ProductCard key={product.id} product={product} index={i} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
