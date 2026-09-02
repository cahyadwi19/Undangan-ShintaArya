import { motion } from "framer-motion";
import { useAudio } from "../context/useAudio";

export default function MusicPlayer() {
  const { playing, toggle } = useAudio();
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggle}
      aria-label={playing ? "Pause musik" : "Putar musik"}
      className="fixed bottom-5 right-5 z-40 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
      style={{ border: "1px solid var(--gold)", backgroundColor: "var(--navy-soft)", color: "var(--gold)" }}
    >
      <span className={`text-lg ${playing ? "animate-spin-slow" : ""}`}>🎵</span>
    </motion.button>
  );
}