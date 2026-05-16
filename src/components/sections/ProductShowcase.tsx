"use client";

import { RemoteImage } from "@/components/ui/RemoteImage";
import { motion } from "framer-motion";
import { ArrowRight, Award } from "lucide-react";
import { showcaseProduct } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { RatingStars } from "@/components/ui/RatingStars";

export function ProductShowcase() {
  const { addItem } = useCart();

  return (
    <section
      id="showcase"
      className="scroll-mt-nav py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl glass">
          <div className="grid lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative aspect-square lg:aspect-auto lg:min-h-[500px]"
            >
              <RemoteImage
                src={showcaseProduct.image}
                alt={showcaseProduct.name}
                fill
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent lg:from-black/60" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col justify-center p-8 md:p-12 lg:p-16"
            >
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-amber-500/20 px-4 py-1.5 text-sm font-semibold text-amber-500">
                <Award className="h-4 w-4" />
                Best Seller — Limited Edition
              </span>
              <p className="mt-4 text-sm font-medium text-cyan-500">
                Only 48 units left at launch price
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                {showcaseProduct.name}
              </h2>
              <p className="mt-4 text-[var(--muted)] leading-relaxed">
                {showcaseProduct.description} Built with aerospace-grade
                titanium and our most advanced health sensors yet.
              </p>
              <div className="mt-4 flex items-center gap-4">
                <RatingStars rating={showcaseProduct.rating} size="md" showValue />
                <span className="text-sm text-[var(--muted)]">
                  {showcaseProduct.reviewCount.toLocaleString()} reviews
                </span>
              </div>
              <p className="mt-6 text-3xl font-bold text-foreground">
                {formatPrice(showcaseProduct.price)}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => addItem(showcaseProduct)}
                >
                  Add to Cart
                  <ArrowRight className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  onClick={() =>
                    document.getElementById("products")?.scrollIntoView({
                      behavior: "smooth",
                    })
                  }
                >
                  View All Products
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
