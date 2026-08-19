import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAudio } from "../context/useAudio";

export default function Cover() {
  const [open, setOpen] = useState(false);
  const { play } = useAudio();

  const handleOpen = () => { play(); setOpen(true); };

  return (
    <AnimatePresence>
      {!open && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-navy bg-texture flex flex-col justify-center items-center overflow-hidden"
        >
          <div className="absolute top-6 left-6 w-12 h-12 border-t border-l border-gold/40" style={{ borderColor: "var(--gold)" }} />
          <div className="absolute top-6 right-6 w-12 h-12 border-t border-r" style={{ borderColor: "var(--gold)" }} />
          <div className="absolute bottom-6 left-6 w-12 h-12 border-b border-l" style={{ borderColor: "var(--gold)" }} />
          <div className="absolute bottom-6 right-6 w-12 h-12 border-b border-r" style={{ borderColor: "var(--gold)" }} />

          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="font-serif-elegant text-xs sm:text-sm tracking-[4px] uppercase mb-6"
            style={{ color: "var(--gold)" }}
          >
            The Wedding Of
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-script text-4xl sm:text-7xl text-center leading-tight px-4"
            style={{ color: "var(--gold-deep)" }}
          >
            Muhammad Indra Jaya
            <span className="block text-4xl sm:text-5xl my-1" style={{ color: "var(--gold)" }}>&</span>
            Khoirul Nisa
          </motion.h1>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.7 }} className="gold-divider my-8" />

          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1, duration: 0.7 }}
            className="font-body text-sm mb-10 tracking-wide opacity-70"
            style={{ color: "var(--cream)" }}
          >
            Kepada Bapak/Ibu/Saudara/i Tamu Undangan
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.7 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={handleOpen}
            className="px-8 py-3 rounded-full tracking-[2px] text-sm font-serif-elegant uppercase transition-all"
            style={{ border: "1px solid var(--gold)", color: "var(--gold)", backgroundColor: "transparent" }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = "var(--gold)"; e.currentTarget.style.color = "white"; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "var(--gold)"; }}
          >
            Buka Undangan
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
