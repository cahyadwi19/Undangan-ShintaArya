import useCountdown from "../hooks/useCountdown";
import Reveal from "./Reveal";

export default function Countdown() {
  const { days, hours, minutes, seconds } = useCountdown("2026-07-27 08:00:00");
  const base = import.meta.env.BASE_URL;

  const units = [
    { label: "Hari",   value: days },
    { label: "Jam",    value: hours },
    { label: "Menit",  value: minutes },
    { label: "Detik",  value: seconds },
  ];

  return (
    <section
      className="relative py-24 text-center px-4 sm:px-6 bg-cover bg-center"
      style={{ backgroundImage: `url('${base}images/6016.jpg')` }}
    >
      <div className="absolute inset-0" style={{ background: "rgba(250,247,242,0.82)" }} />
      <div className="relative z-10">
        <Reveal>
          <p className="font-serif-elegant text-xs tracking-[4px] uppercase mb-3" style={{ color: "var(--gold)" }}>
            Menanti Hari Bahagia
          </p>
          <h2 className="font-script text-4xl mb-10" style={{ color: "var(--gold-deep)" }}>
            Hitung Mundur
          </h2>
        </Reveal>

        <div className="grid grid-cols-4 gap-2 sm:gap-5 max-w-md sm:max-w-2xl mx-auto">
          {units.map((unit, i) => (
            <Reveal key={unit.label} delay={i * 0.1} direction="up">
              <div className="ornament-frame rounded-lg px-2 sm:px-5 py-4 sm:py-6 bg-navy-soft shadow-sm" style={{ border: "1px solid var(--gold)", opacity: 0.9 }}>
                <h3 className="font-serif-elegant text-2xl sm:text-4xl" style={{ color: "var(--gold-deep)" }}>
                  {String(unit.value).padStart(2, "0")}
                </h3>
                <p className="font-body text-xs sm:text-sm mt-1 tracking-wide opacity-70" style={{ color: "var(--cream)" }}>
                  {unit.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
