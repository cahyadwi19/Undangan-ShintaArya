import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function Couple() {
  const base = import.meta.env.BASE_URL;
  return (
    <section className="py-24 bg-navy-soft bg-texture px-6">
      <Reveal>
        <div className="text-center mb-16">
          <p className="font-serif-elegant text-xs tracking-[4px] uppercase mb-3" style={{ color: "var(--gold)" }}>
            Bismillahirrahmanirrahim
          </p>
          <h2 className="font-script text-4xl" style={{ color: "var(--gold-deep)" }}>Mempelai</h2>
        </div>
      </Reveal>

      <div className="max-w-md mx-auto flex flex-col items-center">
        <Reveal direction="up" delay={0.1} className="w-full flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-[280px] sm:max-w-[320px] shadow-xl"
            style={{ border: "4px solid var(--gold-light)" }}
          >
            <img src={`${base}images/brideman.jpg`} alt="Muhammad Indra Jaya" className="w-full aspect-[3/4] object-cover" />
          </motion.div>
          <h3 className="font-script text-4xl mt-7" style={{ color: "var(--gold-deep)" }}>Muhammad Indra Jaya</h3>
          <p className="font-body mt-3 text-sm tracking-wide text-center opacity-75" style={{ color: "var(--cream)" }}>Putra Pertama dari</p>
          <p className="font-body text-sm tracking-wide text-center opacity-75" style={{ color: "var(--cream)" }}>Bapak Hasim (Alm.) &amp; Ibu Nunung Setyaningsih</p>
        </Reveal>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false }} transition={{ duration: 0.7, delay: 0.2 }}
          className="my-12 flex flex-col items-center"
        >
          <span className="w-px h-10" style={{ backgroundColor: "var(--gold)", opacity: 0.4 }} />
          <span className="font-script text-5xl my-2" style={{ color: "var(--gold)" }}>&amp;</span>
          <span className="w-px h-10" style={{ backgroundColor: "var(--gold)", opacity: 0.4 }} />
        </motion.div>

        <Reveal direction="up" delay={0.1} className="w-full flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.92, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: false, amount: 0.3 }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-[280px] sm:max-w-[320px] shadow-xl"
            style={{ border: "4px solid var(--gold-light)" }}
          >
            <img src={`${base}images/bride.jpg`} alt="Khoirul Nisa" className="w-full aspect-[3/4] object-cover" />
          </motion.div>
          <h3 className="font-script text-4xl mt-7" style={{ color: "var(--gold-deep)" }}>Khoirul Nisa</h3>
          <p className="font-body mt-3 text-sm tracking-wide text-center opacity-75" style={{ color: "var(--cream)" }}>Putri Pertama dari</p>
          <p className="font-body text-sm tracking-wide text-center opacity-75" style={{ color: "var(--cream)" }}>Bapak Suryan &amp; Ibu Rantini</p>
        </Reveal>
      </div>
    </section>
  );
}
