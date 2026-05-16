"use client";

import { useEffect, useState } from "react";
import { RemoteImage } from "@/components/ui/RemoteImage";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RatingStars } from "@/components/ui/RatingStars";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActive((a) => (a + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [paused]);

  const current = testimonials[active];

  return (
    <section
      id="reviews"
      className="scroll-mt-nav py-20 md:py-28 mesh-gradient"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          label="Reviews"
          title="Loved by Thousands"
          description="Real stories from customers who upgraded their everyday tech with NovaCart."
        />

        <div
          className="relative mx-auto max-w-3xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="glass rounded-3xl p-8 md:p-12 text-center"
            >
              <Quote className="mx-auto h-10 w-10 text-cyan-500/40" />
              <p className="mt-6 text-lg text-foreground leading-relaxed md:text-xl">
                &ldquo;{current.text}&rdquo;
              </p>
              <div className="mt-6 flex justify-center">
                <RatingStars rating={current.rating} size="md" />
              </div>
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-cyan-500/30">
                  <RemoteImage
                    src={current.avatar}
                    alt={current.name}
                    fill
                  />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">{current.name}</p>
                  <p className="text-sm text-[var(--muted)]">{current.role}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() =>
                setActive((a) => (a - 1 + testimonials.length) % testimonials.length)
              }
              aria-label="Previous testimonial"
              className="rounded-full glass p-3 hover:border-cyan-500/30"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === active ? "w-8 gradient-bg" : "w-2 bg-neutral-400"
                  }`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => setActive((a) => (a + 1) % testimonials.length)}
              aria-label="Next testimonial"
              className="rounded-full glass p-3 hover:border-cyan-500/30"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
