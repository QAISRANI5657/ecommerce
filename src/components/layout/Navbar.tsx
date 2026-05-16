"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { SearchBar } from "@/components/ui/SearchBar";
import { ThemeToggle } from "./ThemeToggle";
import { MobileMenu } from "./MobileMenu";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#categories", label: "Categories" },
  { href: "#products", label: "Shop" },
  { href: "#showcase", label: "Featured" },
  { href: "#benefits", label: "Why Us" },
  { href: "#reviews", label: "Reviews" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openCart, itemCount } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled ? "glass shadow-lg py-3" : "bg-transparent py-5"
        )}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 md:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          <a
            href="#hero"
            className="font-[family-name:var(--font-display)] text-xl font-bold gradient-text md:text-2xl"
          >
            NovaCart
          </a>

          <ul className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-cyan-500"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden lg:block">
            <SearchBar />
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <ThemeToggle />
            <button
              type="button"
              onClick={openCart}
              aria-label={`Open cart, ${itemCount} items`}
              className="relative flex h-10 w-10 items-center justify-center rounded-full glass transition-colors hover:border-cyan-500/30"
            >
              <ShoppingBag className="h-5 w-5" />
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full gradient-bg text-[10px] font-bold text-white"
                >
                  {itemCount > 9 ? "9+" : itemCount}
                </motion.span>
              )}
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-full glass lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </nav>
      </header>
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
