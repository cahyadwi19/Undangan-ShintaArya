import { motion } from "framer-motion";

export default function Hero() {
  const base = import.meta.env.BASE_URL;
  return (
    <section
      className="h-screen bg-cover bg-center relative flex items-center justify-center"
      style={{ backgroundImage: `url('${base}images/cover2.jpeg')` }}
    >
      <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.4) 40%, rgba(0,0,0,0.2) 70%, rgba(250,246,239,0.9) 100%)" }} />

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: -16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.8 }}
          className="font-serif-elegant text-xs sm:text-sm tracking-[5px] uppercase mb-4"
          style={{ color: "var(--gold-light)" }}
        >
          The Wedding Of
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.9, delay: 0.15 }}
          className="font-script text-5xl sm:text-6xl"
          style={{ color: "#fff8f0" }}
        >
          Arya Dwi Setyawan
        </motion.h1>

        <motion.span
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 0.6, delay: 0.4 }}
          className="font-script text-3xl sm:text-4xl my-2"
          style={{ color: "var(--gold-light)" }}
        >
          &amp;
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false }} transition={{ duration: 0.9, delay: 0.5 }}
          className="font-script text-4xl sm:text-5xl whitespace-nowrap"
          style={{ color: "#fff8f0" }}
        >
          Siti Shinta Marini
        </motion.h1>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 0.6, delay: 0.7 }} className="gold-divider my-6" />

        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ duration: 0.6, delay: 0.8 }}
          className="font-body text-lg tracking-wide"
          style={{ color: "rgba(255,248,240,0.9)" }}
        >
          20 September 2026
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          className="absolute bottom-10 text-xs tracking-[3px] uppercase"
          style={{ color: "var(--gold-light)" }}
        >
          Scroll ↓
        </motion.div>
      </div>
    </section>
  );
}