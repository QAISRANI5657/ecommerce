"use client";

import { RemoteImage } from "@/components/ui/RemoteImage";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { products } from "@/data/products";

const floatingProducts = [
  products[1],
  products[0],
  products[7],
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden mesh-gradient scroll-mt-nav pt-24"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 pb-20 md:px-6 lg:flex-row lg:gap-16 lg:px-8 lg:pb-28 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1 text-center lg:text-left"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm font-medium text-cyan-500"
          >
            <Sparkles className="h-4 w-4" />
            New Collection 2026
          </motion.span>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
            Tech that{" "}
            <span className="gradient-text">moves with you</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-[var(--muted)] lg:mx-0 mx-auto">
            Discover curated smart accessories and lifestyle tech—engineered for
            performance, designed for everyday elegance. Free shipping over $75.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Button
              variant="primary"
              size="lg"
              onClick={() =>
                document.getElementById("products")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Shop Now
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() =>
                document.getElementById("categories")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              Explore Collection
            </Button>
          </div>
          <p className="mt-6 text-sm text-[var(--muted)]">
            30-day returns · 2-year warranty on select items · Secure checkout
          </p>
        </motion.div>

        <div className="relative flex-1 w-full max-w-lg lg:max-w-none">
          <div className="relative mx-auto aspect-square min-h-[320px] w-full max-w-md lg:min-h-[420px] lg:max-w-none">
            {floatingProducts.map((product, i) => {
              const positions = [
                "left-0 top-0",
                "right-0 top-1/4",
                "left-1/4 bottom-0",
              ];
              const delays = [0, 0.5, 1];
              return (
                <motion.div
                  key={product.id}
                  className={`absolute ${positions[i]} w-36 md:w-44 lg:w-52`}
                  animate={{ y: [0, -12, 0] }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delays[i],
                  }}
                >
                  <div className="glass overflow-hidden rounded-2xl p-3 shadow-xl shadow-cyan-500/10">
                    <div className="relative aspect-square overflow-hidden rounded-xl">
                      <RemoteImage
                        src={product.image}
                        alt={product.name}
                        fill
                        priority={i === 0}
                      />
                    </div>
                    <p className="mt-2 truncate text-xs font-semibold">
                      {product.name}
                    </p>
                  </div>
                </motion.div>
              );
            })}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-48 md:w-56 lg:w-64"
            >
              <div className="glass overflow-hidden rounded-3xl p-4 shadow-2xl shadow-cyan-500/20 ring-2 ring-cyan-500/20">
                <div className="relative aspect-square overflow-hidden rounded-2xl">
                  <RemoteImage
                    src={products[1].image}
                    alt={products[1].name}
                    fill
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
