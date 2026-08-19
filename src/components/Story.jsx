import Reveal from "./Reveal";

export default function Story() {
  const stories = [
    { title: "First Phase", desc: "Pertemuan ini dimulai dibangku SMA yang dimana kita adalah teman beda angkatan, kemudian ini dekat dan menjalin hubungan pacaran berlangsung cukup lama hingga 6 bulan, kemudian kita berpisah saat arya lulus SMA dan sinta masih kelas 3 SMA" },
    { title: "Second Phase", desc: "Perpisahan kami berlangsung cukup lama dari 2019 sampai 2023 hingga pertemuan singkat kami bertemu kembali di alfamart" },
    { title: "Third Phase", desc: "sinta dan arya sempat memulai kisah itu kembali dengan hati yang masih berat, tapi kita memilih untuk masih menjadi teman biasa yang belum intens untuk berkabar setiap hari , kisah kita sudah dimulai dari pertengahan september 2025 ketika konser Dewa 19 di bojonegoro. kemudian kisah kita semakin intens setiap hari, Sepakat bersama, awal februari ketika kita mau sudah saling dekat dan sepakat untuk bisa kejenjang lebih serius, Akhirnya arya memberanikan diri matur dawuh ke bapak sinta di awal maret 2026 dengan perasaan campur aduk matur dawuh berjalan sangat lancar ,perjalanan kami sangat berkesan setiap hari " },
    { title: "Final Phase", desc: "pada 20 Juli 2026 keluarga dari pihak arya datang untuk meresmikan tanggal untuk pernikahan kami, bukti bahwa pihak arya serius dengan apa yang diatur dawuhkan arya beberapa bulan yang lalu, Mengikat janji, seiring banyaknya semua halang rintang yang kita lalui semua hal yang melelahkan kita bisa berada dititik yang sangat membahagiakan. kisah yang sebenarnya baru dimulai dan perjalanan panjang bersama untuk saling tumbuh dan membersamai" },
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
