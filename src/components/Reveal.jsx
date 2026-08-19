import { motion } from "framer-motion";

/**
 * Reveal — wrapper animasi scroll-in yang konsisten dipakai di semua section.
 * direction: "up" | "down" | "left" | "right" | "none"
 */
export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.8,
  className = "",
}) {
  const offset = 32;

  const variants = {
    up: { y: offset, opacity: 0 },
    down: { y: -offset, opacity: 0 },
    left: { x: offset, opacity: 0 },
    right: { x: -offset, opacity: 0 },
    none: { opacity: 0 },
  };

  return (
    <motion.div
      className={className}
      initial={variants[direction]}
      whileInView={{ x: 0, y: 0, opacity: 1 }}
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
