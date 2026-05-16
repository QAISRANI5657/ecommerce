"use client";

import { Search, X } from "lucide-react";
import { useFilter } from "@/context/FilterContext";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  className?: string;
  compact?: boolean;
}

export function SearchBar({ className, compact }: SearchBarProps) {
  const { searchQuery, setSearchQuery } = useFilter();

  return (
    <div
      className={cn(
        "relative flex items-center",
        compact ? "w-full" : "w-full max-w-xs",
        className
      )}
    >
      <Search
        className="absolute left-3 h-4 w-4 text-[var(--muted)]"
        aria-hidden
      />
      <input
        type="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search products..."
        aria-label="Search products"
        className={cn(
          "w-full rounded-full border border-[var(--border)] bg-[var(--surface)] py-2 pl-10 pr-9 text-sm text-foreground placeholder:text-[var(--muted)] focus:border-cyan-500/50 focus:outline-none focus:ring-2 focus:ring-cyan-500/20",
          compact && "py-2.5"
        )}
      />
      {searchQuery && (
        <button
          type="button"
          onClick={() => setSearchQuery("")}
          className="absolute right-3 text-[var(--muted)] hover:text-foreground"
          aria-label="Clear search"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
