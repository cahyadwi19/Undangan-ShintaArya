import Reveal from "./Reveal";

const events = [
  {
    title: "Akad Nikah",
    day: "Kamis",
    date: "23",
    month: "Juli",
    year: "2026",
    time: "16.00 WIB - Selesai",
    place: "Rumah Mempelai Wanita",
    address: "Dsn. Gunungrejo RT. 007 RW. 002 Ds. Cengkong Kec. Parengan Kab. Tuban",
    maps: "https://maps.app.goo.gl/JKtYdu2uYixnGE598",
  },
  {
    title: "Ngunduh Mantu",
    day: "Senin",
    date: "27",
    month: "Juli",
    year: "2026",
    time: "09.00 WIB - Selesai",
    place: "Rumah Mempelai Pria",
    address: "GG Mbah Umpil (Gang Timur Pasar Kapas) RT. 017 RW. 002 DS. Kapas Kec. Kapas Kab. Bojonegoro",
    maps: "https://maps.app.goo.gl/fPsHpAgtMeWwUy7J6",
  },
];

export default function Event() {
  return (
    <section className="py-24 bg-navy bg-texture px-6">
      <Reveal>
        <div className="text-center mb-14">
          <p className="font-serif-elegant text-xs tracking-[4px] uppercase mb-3" style={{ color: "var(--gold)" }}>Save The Date</p>
          <h2 className="font-script text-4xl" style={{ color: "var(--gold-deep)" }}>Acara Pernikahan</h2>
        </div>
      </Reveal>

      <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-6">
        {events.map((event, i) => (
          <Reveal key={event.title} delay={i * 0.15} direction="up">
            <div className="rounded-xl p-8 text-center h-full flex flex-col items-center shadow-sm bg-navy-soft" style={{ border: "1px solid var(--gold-light)" }}>
              <h3 className="font-script text-3xl mb-7" style={{ color: "var(--gold-deep)" }}>{event.title}</h3>

              <div className="flex items-center w-full mb-6">
                <span className="flex-1 border-t" style={{ borderColor: "var(--gold-light)" }} />
                <span className="font-body text-sm whitespace-nowrap px-3 opacity-75" style={{ color: "var(--cream)" }}>{event.day}</span>
                <span className="flex-1 border-t" style={{ borderColor: "var(--gold-light)" }} />
                <div className="rounded-lg px-5 py-3 min-w-[88px] mx-3 shrink-0 shadow-md" style={{ background: "linear-gradient(145deg, var(--gold-light), var(--gold-deep))", color: "white" }}>
                  <p className="font-serif-elegant text-3xl leading-none font-semibold">{event.date}</p>
                  <p className="font-body text-[11px] uppercase tracking-wide mt-1">{event.month}</p>
                </div>
                <span className="flex-1 border-t" style={{ borderColor: "var(--gold-light)" }} />
                <span className="font-body text-sm whitespace-nowrap px-3 opacity-75" style={{ color: "var(--cream)" }}>{event.year}</span>
                <span className="flex-1 border-t" style={{ borderColor: "var(--gold-light)" }} />
              </div>

              <p className="font-body text-sm mb-6" style={{ color: "var(--gold)" }}>{event.time}</p>
              <div className="gold-divider mb-5" />
              <p className="font-serif-elegant text-base mb-1" style={{ color: "var(--cream)" }}>{event.place}</p>
              <p className="font-body text-sm leading-relaxed mb-6 opacity-70" style={{ color: "var(--cream)" }}>{event.address}</p>
              <a href={event.maps} target="_blank" rel="noopener noreferrer"
                className="mt-auto inline-block px-6 py-2 rounded-full text-sm tracking-[1px] uppercase transition-colors"
                style={{ border: "1px solid var(--gold)", color: "var(--gold)" }}>
                Buka Maps
              </a>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}