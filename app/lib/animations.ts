import type { Variants } from "framer-motion";

/** Standard fade-up item variant used across all sections */
export const fadeUpItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/** Parent container that staggers its children */
export const staggerContainer: Variants = {
  animate: { transition: { staggerChildren: 0.08 } },
};
