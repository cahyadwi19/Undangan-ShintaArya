import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "./Reveal";

export default function Gallery() {
  const base = import.meta.env.BASE_URL;
  const images = [`${base}images/1.png`, `${base}images/3.jpeg`,`${base}images/5.jpeg`,`${base}images/7.jpeg`,`${base}images/9.jpeg`,,`${base}images/11.jpeg`, `${base}images/12.jpeg`, `${base}images/13.jpeg`,`${base}images/14.jpeg`,`${base}images/15.jpeg`,`${base}images/17.jpeg`,`${base}images/19.jpeg`,`${base}images/20.jpeg`,`${base}images/21.jpeg`];
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-24 bg-navy-soft bg-texture px-6">
      <Reveal>
        <div className="text-center mb-14">
          <p className="font-serif-elegant text-xs tracking-[4px] uppercase mb-3" style={{ color: "var(--gold)" }}>Kenangan</p>
          <h2 className="font-script text-4xl" style={{ color: "var(--gold-deep)" }}>Gallery</h2>
        </div>
      </Reveal>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {images.map((img, index) => (
          <Reveal key={img} delay={index * 0.1} direction="up">
            <motion.button type="button" onClick={() => setSelected(img)} whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}
              className="block w-full overflow-hidden rounded-lg shadow-md" style={{ border: "1px solid var(--gold-light)" }}>
              <img src={img} alt="Kenangan mempelai" className="w-full h-44 sm:h-56 object-cover" />
            </motion.button>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 cursor-zoom-out"
            style={{ backgroundColor: "rgba(44,24,16,0.88)" }}>
            <motion.img initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }} src={selected} alt="Kenangan mempelai"
              className="max-h-[85vh] max-w-full rounded-lg" style={{ border: "2px solid var(--gold-light)" }} />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
