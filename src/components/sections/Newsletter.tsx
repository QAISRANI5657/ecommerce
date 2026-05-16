"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="newsletter" className="scroll-mt-nav py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl gradient-bg p-8 text-center md:p-16"
        >
          <div
            className="absolute inset-0 opacity-50"
            aria-hidden
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold text-white">
              <Sparkles className="h-4 w-4" />
              Exclusive Offer
            </span>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl font-bold text-white md:text-4xl">
              Get 10% Off Your First Order
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-white/90">
              Join 50,000+ tech enthusiasts. Be the first to know about new
              drops, exclusive deals, and insider tips.
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mt-8 rounded-2xl bg-white/20 p-6 text-white"
              >
                <Mail className="mx-auto h-12 w-12" />
                <p className="mt-4 text-lg font-semibold">You&apos;re in!</p>
                <p className="mt-1 text-sm text-white/80">
                  Check your inbox for your welcome discount code.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  aria-label="Email address"
                  className="flex-1 rounded-full border-0 bg-white/95 px-6 py-3.5 text-foreground placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <Button
                  type="submit"
                  variant="secondary"
                  size="lg"
                  className="bg-white text-cyan-600 shadow-none hover:bg-white/90"
                >
                  Subscribe
                </Button>
              </form>
            )}
            {error && (
              <p className="mt-2 text-sm text-red-200">{error}</p>
            )}
            <p className="mt-4 text-xs text-white/70">
              No spam, ever. Unsubscribe anytime.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
