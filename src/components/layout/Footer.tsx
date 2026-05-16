"use client";

import { Linkedin, Mail, MessageCircle } from "lucide-react";

const footerLinks = {
  shop: [
    { label: "All Products", href: "#products" },
    { label: "Categories", href: "#categories" },
    { label: "Best Sellers", href: "#showcase" },
    { label: "New Arrivals", href: "#products" },
  ],
  support: [
    { label: "Contact Us", href: "#newsletter" },
    { label: "Shipping Info", href: "#benefits" },
    { label: "Returns", href: "#benefits" },
    { label: "FAQ", href: "#benefits" },
  ],
  company: [
    { label: "About NovaCart", href: "#hero" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
    { label: "Sustainability", href: "#" },
  ],
};

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:qaisrani5657@gmail.com",
    text: "qaisrani5657@gmail.com",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/923363458484",
    text: "+92 336 3458484",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-saran-muslim",
    text: "Muhammad Saran Muslim",
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg)]">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a
              href="#hero"
              className="font-[family-name:var(--font-display)] text-2xl font-bold gradient-text"
            >
              NovaCart
            </a>
            <p className="mt-4 max-w-sm text-sm text-[var(--muted)]">
              Curated premium tech for modern living. We believe great products
              should feel effortless—from discovery to delivery.
            </p>
            <div className="mt-6 space-y-3">
              <p className="font-[family-name:var(--font-accent)] text-sm font-semibold uppercase tracking-wider text-foreground">
                Contact
              </p>
              <ul className="space-y-3">
                {contactLinks.map(({ icon: Icon, label, href, text }) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={
                        href.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-center gap-3 text-sm text-[var(--muted)] transition-colors hover:text-cyan-500"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full glass">
                        <Icon className="h-4 w-4 text-cyan-500" />
                      </span>
                      <span>
                        <span className="block text-xs font-medium uppercase tracking-wide text-foreground/70">
                          {label}
                        </span>
                        {text}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="font-[family-name:var(--font-accent)] text-sm font-semibold uppercase tracking-wider text-foreground">
                {title}
              </h3>
              <ul className="mt-4 space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[var(--muted)] transition-colors hover:text-cyan-500"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p
          className="mt-12 border-t border-[var(--border)] pt-8 text-center text-xs text-[var(--muted)]"
          suppressHydrationWarning
        >
          © {new Date().getFullYear()} NovaCart. All rights reserved. Portfolio
          showcase — not a real store.
        </p>
      </div>
    </footer>
  );
}
