"use client";

import { useState } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface RemoteImageProps {
  src: string;
  alt: string;
  className?: string;
  fill?: boolean;
  priority?: boolean;
}

export function RemoteImage({
  src,
  alt,
  className,
  fill = false,
  priority = false,
}: RemoteImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "flex items-center justify-center bg-neutral-200 dark:bg-neutral-800",
          fill && "absolute inset-0",
          className
        )}
        aria-label={alt}
      >
        <ImageOff className="h-8 w-8 text-[var(--muted)] opacity-50" />
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
      className={cn(
        fill && "absolute inset-0 h-full w-full",
        "object-cover",
        className
      )}
    />
  );
}
