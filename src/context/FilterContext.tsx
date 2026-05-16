"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import { products } from "@/data/products";
import type { CategorySlug, Product } from "@/types";

interface FilterContextValue {
  searchQuery: string;
  activeCategory: CategorySlug | "all";
  filteredProducts: Product[];
  setSearchQuery: (query: string) => void;
  setActiveCategory: (category: CategorySlug | "all") => void;
  filterByCategory: (category: CategorySlug) => void;
}

const FilterContext = createContext<FilterContextValue | null>(null);

export function FilterProvider({ children }: { children: React.ReactNode }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<CategorySlug | "all">(
    "all"
  );

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "all" || product.category === activeCategory;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        product.name.toLowerCase().includes(query) ||
        product.categoryLabel.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  const filterByCategory = useCallback((category: CategorySlug) => {
    setActiveCategory(category);
    const el = document.getElementById("products");
    el?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const value = useMemo(
    () => ({
      searchQuery,
      activeCategory,
      filteredProducts,
      setSearchQuery,
      setActiveCategory,
      filterByCategory,
    }),
    [
      searchQuery,
      activeCategory,
      filteredProducts,
      filterByCategory,
    ]
  );

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
}

export function useFilter() {
  const ctx = useContext(FilterContext);
  if (!ctx) throw new Error("useFilter must be used within FilterProvider");
  return ctx;
}
