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
          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3784.067772127533!2d111.83767987499799!3d-7.08518049291777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMDUnMDYuNyJTIDExMcKwNTAnMjQuOSJF!5e1!3m2!1sen!2sid!4v1787107975889!5m2!1sen!2sid" width="600" height="450" 
          style={{border:0}}
          allowfullscreen loading="lazy" 
          referrerPolicy="strict-origin-when-cross-origin"></iframe>
        </div>
      </Reveal>
    </section>
  );
}
