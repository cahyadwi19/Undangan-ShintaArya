import Reveal from "./Reveal";

export default function Maps() {
  return (
    <section className="py-24 bg-navy-soft bg-texture px-6">
      <Reveal>
        <div className="text-center mb-10">
          <p className="font-serif-elegant text-xs tracking-[4px] uppercase mb-3" style={{ color: "var(--gold)" }}>Petunjuk Arah</p>
          <h2 className="font-script text-4xl" style={{ color: "var(--gold-deep)" }}>Lokasi Acara</h2>
        </div>
      </Reveal>
      <Reveal delay={0.15} direction="up">
        <div className="max-w-4xl mx-auto rounded-xl overflow-hidden shadow-md" style={{ border: "1px solid var(--gold-light)" }}>
          <iframe title="maps"
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3772.833202979552!2d111.93552779999999!3d-7.197138900000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMTEnNDkuNyJTIDExMcKwNTYnMDcuOSJF!5e1!3m2!1sen!2sid!4v1784260642550!5m2!1sen!2sid"
            width="100%" height="420" style={{ border: 0 }} loading="lazy" />
        </div>
      </Reveal>
    </section>
  );
}
