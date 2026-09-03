import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAudio } from "../context/useAudio";

export default function Cover() {
  const [open, setOpen] = useState(false);
  const { play } = useAudio();
  const base = import.meta.env.BASE_URL;

  const handleOpen = () => { play(); setOpen(true); };

  return (
    <AnimatePresence>
      {!open && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col justify-end items-center overflow-hidden"
          style={{
            backgroundImage: `url('${base}images/coverbaru1.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center top",
          }}
        >
          {/* gradient gelap di bawah biar tombol kebaca */}
          <div
            className="absolute inset-0"
            style={{
  background: "linear-gradient(to bottom, transparent 50%, rgba(80,20,20,0.9) 85%, rgba(80,20,20,0.95) 100%)",
}}
          />

<div className="relative z-8 flex flex-col items-center pb-2 px-4 w-full">
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5, duration: 0.8 }}
    className="font-body text-[10px] tracking-[2px] uppercase mb-6 text-center"
    style={{ color: "rgba(255,240,210,0.8)" }}
  >
    Kepada Bapak/Ibu/Saudara/i Tamu Undangan
  </motion.p>

  <motion.button
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8, duration: 0.7 }}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.96 }}
    onClick={handleOpen}
    className="px-8 py-3 rounded-full tracking-[2px] text-sm font-serif-elegant uppercase transition-all"
    style={{
      border: "1px solid rgba(255,220,150,0.8)",
      color: "rgba(255,220,150,0.9)",
      backgroundColor: "rgba(80,20,20,0.4)",
    }}
  >
    Buka Undangan
  </motion.button>
</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}