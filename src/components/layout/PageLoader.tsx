"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type LoaderState = "idle" | "loading" | "done";

export function PageLoader() {
  const [state, setState] = useState<LoaderState>("idle");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const skip = sessionStorage.getItem("novacart-loaded");
    if (skip) {
      setState("done");
      return;
    }

    setState("loading");

    const interval = setInterval(() => {
      setProgress((p) => Math.min(p + 4, 100));
    }, 40);

    const timeout = setTimeout(() => {
      setState("done");
      sessionStorage.setItem("novacart-loaded", "1");
    }, 1200);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {state === "loading" && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--bg)]"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center"
          >
            <h1 className="font-[family-name:var(--font-display)] text-4xl font-bold gradient-text">
              NovaCart
            </h1>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Premium tech, delivered
            </p>
          </motion.div>
          <div className="mt-8 h-1 w-48 overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800">
            <motion.div
              className="h-full gradient-bg"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
