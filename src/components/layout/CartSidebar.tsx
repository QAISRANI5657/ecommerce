"use client";

import { RemoteImage } from "@/components/ui/RemoteImage";
import { motion, AnimatePresence } from "framer-motion";
import { Minus, Plus, ShoppingBag, Trash2, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { formatPrice, cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";

export function CartSidebar() {
  const {
    items,
    isOpen,
    closeCart,
    itemCount,
    subtotal,
    updateQuantity,
    removeItem,
  } = useCart();

  const handleCheckout = () => {
    alert(
      "Demo checkout — This is a portfolio showcase. No payment will be processed."
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
            aria-hidden
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 300 }}
            className="fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col glass shadow-2xl"
            aria-label="Shopping cart"
            role="dialog"
          >
            <div className="flex items-center justify-between border-b border-[var(--border)] p-5">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-cyan-500" />
                <h2 className="font-[family-name:var(--font-display)] text-xl font-bold">
                  Your Cart
                </h2>
                {itemCount > 0 && (
                  <span className="rounded-full gradient-bg px-2 py-0.5 text-xs font-semibold text-white">
                    {itemCount}
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={closeCart}
                aria-label="Close cart"
                className="rounded-full p-2 hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              {items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <ShoppingBag className="h-16 w-16 text-[var(--muted)] opacity-40" />
                  <p className="mt-4 font-medium text-foreground">
                    Your cart is empty
                  </p>
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    Add premium tech to get started
                  </p>
                </div>
              ) : (
                <ul className="space-y-4">
                  <AnimatePresence mode="popLayout">
                    {items.map((item) => (
                      <motion.li
                        key={item.product.id}
                        layout
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex gap-4 rounded-xl glass p-3"
                      >
                        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg">
                          <RemoteImage
                            src={item.product.image}
                            alt={item.product.name}
                            fill
                          />
                        </div>
                        <div className="flex flex-1 flex-col">
                          <h3 className="text-sm font-semibold line-clamp-1">
                            {item.product.name}
                          </h3>
                          <p className="text-sm font-bold text-cyan-500">
                            {formatPrice(item.product.price)}
                          </p>
                          <div className="mt-auto flex items-center justify-between">
                            <div className="flex items-center gap-2 rounded-full glass px-1">
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(
                                    item.product.id,
                                    item.quantity - 1
                                  )
                                }
                                disabled={item.quantity <= 1}
                                aria-label="Decrease quantity"
                                className="rounded-full p-1 hover:bg-white/10 disabled:opacity-40"
                              >
                                <Minus className="h-3 w-3" />
                              </button>
                              <span className="w-6 text-center text-sm font-medium">
                                {item.quantity}
                              </span>
                              <button
                                type="button"
                                onClick={() =>
                                  updateQuantity(
                                    item.product.id,
                                    item.quantity + 1
                                  )
                                }
                                aria-label="Increase quantity"
                                className="rounded-full p-1 hover:bg-white/10"
                              >
                                <Plus className="h-3 w-3" />
                              </button>
                            </div>
                            <button
                              type="button"
                              onClick={() => removeItem(item.product.id)}
                              aria-label="Remove item"
                              className="text-red-400 hover:text-red-300"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </motion.li>
                    ))}
                  </AnimatePresence>
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-[var(--border)] p-5">
                <div className="mb-4 flex justify-between text-lg">
                  <span className="text-[var(--muted)]">Subtotal</span>
                  <span className="font-bold">{formatPrice(subtotal)}</span>
                </div>
                <p className="mb-4 text-xs text-[var(--muted)]">
                  Free shipping on orders over $75. Taxes calculated at checkout.
                </p>
                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={handleCheckout}
                >
                  Checkout
                </Button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
