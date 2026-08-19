import Reveal from "./Reveal";

export default function Story() {
  const stories = [
    { title: "First Phase", desc: "Benar kata mereka, takdir memang menjadi alasan pertemuan. Sebuah pertemuan dan percakapan singkat, yang berujung (Ada cerita apa lagi?)" },
    { title: "Second Phase", desc: "Seperti pecahan kaca, kami saling merangkai, menembus sekat hingga dekat, 2016 awal pertemuan sampai 2026 semua proses itu kami mau dan mampu jalan diatas takdir." },
    { title: "Third Phase", desc: "Putus nyambung komunikasi, Ragu pernah jadi bayang, tapi keteduhan dan sandaran adalah penolong dalam genggaman serta Jatuh cinta berkali kali dengan orang yang sama ini membuat kami merasa utuh dan tumbuh." },
    { title: "Final Phase", desc: "Kini kami adalah tuan dan puan dengan sisi ego dan kosong yang bertapak diatas permulaan menuju tujuan. Bersama, kami berlayar. Begitulah kami, Kisah singkat yang berakhir Akad." },
  ];

  return (
    <section className="py-24 bg-navy bg-texture px-6">
      <Reveal>
        <div className="text-center mb-16">
          <p className="font-serif-elegant text-xs tracking-[4px] uppercase mb-3" style={{ color: "var(--gold)" }}>Perjalanan Kami</p>
          <h2 className="font-script text-4xl" style={{ color: "var(--gold-deep)" }}>Love Story</h2>
        </div>
      </Reveal>

      <div className="max-w-2xl mx-auto relative">
        <div className="absolute left-[7px] top-2 bottom-2 w-px" style={{ backgroundColor: "var(--gold)", opacity: 0.3 }} />
        {stories.map((item, index) => (
          <Reveal key={item.year} delay={index * 0.15} direction="left" className="mb-12 relative pl-8">
            <span className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full" style={{ backgroundColor: "var(--gold)", border: "2px solid var(--navy)" }} />
            <h3 className="font-serif-elegant text-sm tracking-[2px] mb-1" style={{ color: "var(--gold)" }}>{item.year}</h3>
            <h4 className="font-script text-2xl mb-2" style={{ color: "var(--gold-deep)" }}>{item.title}</h4>
            <p className="font-body leading-relaxed opacity-75" style={{ color: "var(--cream)" }}>{item.desc}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
