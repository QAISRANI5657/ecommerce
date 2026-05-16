"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={
        mounted
          ? `Switch to ${isDark ? "light" : "dark"} mode`
          : "Toggle color theme"
      }
      className="relative flex h-10 w-10 items-center justify-center rounded-full glass transition-colors hover:border-cyan-500/30"
      suppressHydrationWarning
    >
      {mounted ? (
        isDark ? (
          <Moon className="h-5 w-5 text-cyan-400" />
        ) : (
          <Sun className="h-5 w-5 text-amber-500" />
        )
      ) : (
        <span className="h-5 w-5" aria-hidden />
      )}
    </button>
  );
}
