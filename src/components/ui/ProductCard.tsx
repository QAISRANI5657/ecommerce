"use client";

import { useState } from "react";
import { RemoteImage } from "./RemoteImage";
import { motion } from "framer-motion";
import { Heart, ShoppingCart } from "lucide-react";
import type { Product } from "@/types";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";
import { RatingStars } from "./RatingStars";
import { Button } from "./Button";

interface ProductCardProps {
  product: Product;
  index?: number;
}

const badgeStyles: Record<string, string> = {
  sale: "bg-emerald-500 text-white",
  new: "bg-cyan-500 text-white",
  bestseller: "bg-amber-500 text-white",
  limited: "bg-violet-500 text-white",
};

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem } = useCart();
  const [wishlisted, setWishlisted] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -4 }}
      className="group glass overflow-hidden rounded-2xl"
    >
      <div className="relative aspect-square overflow-hidden bg-neutral-100 dark:bg-neutral-900">
        <RemoteImage
          src={product.image}
          alt={product.name}
          fill
          className="transition-transform duration-500 group-hover:scale-110"
        />
        {product.badge && product.badgeLabel && (
          <span
            className={cn(
              "absolute left-3 top-3 rounded-full px-2.5 py-1 text-xs font-semibold font-[family-name:var(--font-accent)]",
              badgeStyles[product.badge]
            )}
          >
            {product.badgeLabel}
          </span>
        )}
        <button
          type="button"
          onClick={() => setWishlisted(!wishlisted)}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className="absolute right-3 top-3 rounded-full glass p-2 transition-colors hover:bg-white/20"
        >
          <Heart
            className={cn(
              "h-4 w-4 transition-colors",
              wishlisted ? "fill-red-500 text-red-500" : "text-foreground"
            )}
          />
        </button>
      </div>

      <div className="p-4 md:p-5">
        <p className="text-xs font-medium uppercase tracking-wider text-cyan-500">
          {product.categoryLabel}
        </p>
        <h3 className="mt-1 font-[family-name:var(--font-display)] text-lg font-semibold text-foreground line-clamp-1">
          {product.name}
        </h3>
        <div className="mt-2 flex items-center gap-2">
          <RatingStars rating={product.rating} />
          <span className="text-xs text-[var(--muted)]">
            ({product.reviewCount.toLocaleString()})
          </span>
        </div>
        <div className="mt-3 flex items-baseline gap-2">
          <span className="text-xl font-bold text-foreground">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-[var(--muted)] line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
        <Button
          variant="primary"
          size="sm"
          className="mt-4 w-full"
          onClick={() => addItem(product)}
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </motion.article>
  );
}
