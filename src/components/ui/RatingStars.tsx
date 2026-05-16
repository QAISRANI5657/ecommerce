import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface RatingStarsProps {
  rating: number;
  size?: "sm" | "md";
  showValue?: boolean;
  className?: string;
}

export function RatingStars({
  rating,
  size = "sm",
  showValue = false,
  className,
}: RatingStarsProps) {
  const iconSize = size === "sm" ? 14 : 18;

  return (
    <div className={cn("flex items-center gap-1", className)}>
      <div className="flex items-center gap-0.5" aria-hidden>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={iconSize}
            className={cn(
              i < Math.floor(rating)
                ? "fill-amber-400 text-amber-400"
                : i < rating
                  ? "fill-amber-400/50 text-amber-400"
                  : "fill-none text-neutral-300 dark:text-neutral-600"
            )}
          />
        ))}
      </div>
      {showValue && (
        <span className="text-sm font-medium text-[var(--muted)]">
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}
