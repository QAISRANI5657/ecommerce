"use client";

import { CartProvider } from "@/context/CartContext";
import { FilterProvider } from "@/context/FilterContext";
import { ThemeProvider } from "./ThemeProvider";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <CartProvider>
        <FilterProvider>{children}</FilterProvider>
      </CartProvider>
    </ThemeProvider>
  );
}
