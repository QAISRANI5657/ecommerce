"use client";

import { motion } from "framer-motion";
import {
  HeadphonesIcon,
  Package,
  RefreshCw,
  Shield,
  Truck,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

const benefits = [
  {
    icon: Truck,
    title: "Fast Shipping",
    description:
      "Free express delivery on orders over $75. Most items arrive within 2–3 business days.",
  },
  {
    icon: Shield,
    title: "Secure Payments",
    description:
      "256-bit SSL encryption and PCI-compliant checkout. Your data stays protected.",
  },
  {
    icon: Package,
    title: "Premium Quality",
    description:
      "Every product is vetted by our team. We partner only with brands that meet our standards.",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description:
      "Real humans, real answers. Chat, email, or call— we're here whenever you need us.",
  },
  {
    icon: RefreshCw,
    title: "Easy Returns",
    description:
      "30-day hassle-free returns. No questions asked on unopened items in original packaging.",
  },
];

export function WhyChooseUs() {
  return (
    <section
      id="benefits"
      className="scroll-mt-nav py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <SectionHeading
          label="Trust"
          title="Why Choose NovaCart"
          description="We're not just another tech store. We're your partner in finding products that truly elevate your day."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-6 text-center"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl gradient-bg">
                <benefit.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">
                {benefit.title}
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
