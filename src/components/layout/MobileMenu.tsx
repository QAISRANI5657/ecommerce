"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { SearchBar } from "@/components/ui/SearchBar";

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#categories", label: "Categories" },
  { href: "#products", label: "Products" },
  { href: "#showcase", label: "Showcase" },
  { href: "#benefits", label: "Why Us" },
  { href: "#reviews", label: "Reviews" },
];

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
            aria-hidden
          />
          <motion.nav
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col glass lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between border-b border-[var(--border)] p-4">
              <span className="font-[family-name:var(--font-display)] text-xl font-bold gradient-text">
                NovaCart
              </span>
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close menu"
                  className="rounded-full p-2 hover:bg-white/10"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
            </div>
            <div className="p-4">
              <SearchBar compact />
            </div>
            <ul className="flex flex-1 flex-col gap-1 p-4">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={onClose}
                    className="block rounded-xl px-4 py-3 text-lg font-medium text-foreground hover:bg-white/5"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
