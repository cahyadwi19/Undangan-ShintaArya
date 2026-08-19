import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "../services/supabase";
import Reveal from "./Reveal";

export default function RSVP() {
  const [form, setForm] = useState({ nama: "", kehadiran: "", ucapan: "" });
  const [submitting, setSubmitting] = useState(false);
  const [ucapanList, setUcapanList] = useState([]);
  const [loadingList, setLoadingList] = useState(true);

  useEffect(() => {
    let active = true;
    const load = async () => {
      const { data, error } = await supabase.from("ucapan_tamu").select("*").order("created_at", { ascending: false });
      if (!active) return;
      if (!error) setUcapanList(data || []);
      setLoadingList(false);
    };
    load();

    const channel = supabase.channel("ucapan_tamu_changes")
      .on("postgres_changes", { event: "INSERT", schema: "public", table: "ucapan_tamu" },
        (payload) => setUcapanList((prev) => [payload.new, ...prev]))
      .subscribe();

    return () => { active = false; supabase.removeChannel(channel); };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.nama || !form.kehadiran || !form.ucapan) { alert("Mohon lengkapi semua field"); return; }
    setSubmitting(true);
    const { error } = await supabase.from("ucapan_tamu").insert([{ nama: form.nama, kehadiran: form.kehadiran, ucapan: form.ucapan }]);
    setSubmitting(false);
    if (error) { console.error(error); alert("Gagal mengirim, coba lagi ya"); return; }
    setForm({ nama: "", kehadiran: "", ucapan: "" });
  };

  const inputStyle = { backgroundColor: "transparent", border: "1px solid var(--gold-light)", color: "var(--cream)", borderRadius: "0.5rem", padding: "0.75rem", width: "100%", fontFamily: "Cormorant Garamond, serif", outline: "none" };

  return (
    <section className="py-24 bg-navy-soft bg-texture px-6">
      <Reveal>
        <div className="text-center mb-12">
          <p className="font-serif-elegant text-xs tracking-[4px] uppercase mb-3" style={{ color: "var(--gold)" }}>Doa &amp; Restu</p>
          <h2 className="font-script text-4xl" style={{ color: "var(--gold-deep)" }}> Ucapan</h2>
        </div>
      </Reveal>

      <Reveal delay={0.1} direction="up">
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-4 mb-16">
          <input type="text" placeholder="Nama" value={form.nama} onChange={(e) => setForm({ ...form, nama: e.target.value })} style={inputStyle} />
          <select value={form.kehadiran} onChange={(e) => setForm({ ...form, kehadiran: e.target.value })}
            style={{ ...inputStyle, backgroundColor: "var(--navy)" }}>
            <option value="" style={{ backgroundColor: "var(--navy)" }}>Pilih Kehadiran</option>
            <option value="Hadir" style={{ backgroundColor: "var(--navy)" }}>Hadir</option>
            <option value="Tidak Hadir" style={{ backgroundColor: "var(--navy)" }}>Tidak Hadir</option>
          </select>
          <textarea placeholder="Tulis ucapan & doa untuk kedua mempelai..." value={form.ucapan}
            onChange={(e) => setForm({ ...form, ucapan: e.target.value })} style={inputStyle} rows="4" />
          <motion.button type="submit" disabled={submitting} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
            className="w-full py-3 rounded-lg tracking-[2px] uppercase text-sm font-serif-elegant transition-colors disabled:opacity-50"
            style={{ border: "1px solid var(--gold)", color: "var(--gold)", backgroundColor: "transparent" }}>
            {submitting ? "Mengirim..." : "Kirim"}
          </motion.button>
        </form>
      </Reveal>

      <div className="max-w-xl mx-auto">
        <Reveal>
          <h3 className="font-serif-elegant text-sm tracking-[3px] uppercase text-center mb-6" style={{ color: "var(--gold)" }}>
            {ucapanList.length} Ucapan Telah Diterima
          </h3>
        </Reveal>

        <div className="max-h-96 overflow-y-auto space-y-3 pr-1">
          {loadingList && <p className="text-center text-sm font-body opacity-50" style={{ color: "var(--cream)" }}>Memuat ucapan...</p>}
          {!loadingList && ucapanList.length === 0 && (
            <p className="text-center text-sm font-body opacity-50" style={{ color: "var(--cream)" }}>Jadilah yang pertama mengirim ucapan 🤍</p>
          )}
          <AnimatePresence initial={false}>
            {ucapanList.map((item) => (
              <motion.div key={item.id ?? `${item.nama}-${item.created_at}`}
                initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
                className="rounded-lg p-4 bg-navy shadow-sm" style={{ border: "1px solid var(--gold-light)" }}>
                <div className="flex items-center justify-between mb-1">
                  <p className="font-serif-elegant text-sm" style={{ color: "var(--gold-deep)" }}>{item.nama}</p>
                  <span className={`text-xs px-2 py-0.5 rounded-full border ${item.kehadiran === "Hadir" ? "border-green-400/40 text-green-600" : "border-red-400/40 text-red-500"}`}>
                    {item.kehadiran}
                  </span>
                </div>
                <p className="font-body text-sm leading-relaxed opacity-75" style={{ color: "var(--cream)" }}>{item.ucapan}</p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
