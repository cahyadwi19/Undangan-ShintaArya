import { useState } from "react";
import Reveal from "./Reveal";

const banks = [
  { bank: "Bank BCA", norek: "8640663830", atas: "Khoirul Nisa" },
  { bank: "Bank Mandiri", norek: "9000043025270", atas: "Khoirul Nisa" },
  { bank: "Bank BRI", norek: "001101182408509", atas: "Khoirul Nisa" },
];

function BankCard({ bank, norek, atas }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(norek);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch { /* clipboard tidak tersedia */ }
  };

  return (
    <div
      className="rounded-xl p-6 text-center bg-navy-soft shadow-sm flex flex-col items-center"
      style={{ border: "1px solid var(--gold-light)" }}
    >
      <h3 className="font-serif-elegant text-lg mb-3" style={{ color: "var(--gold-deep)" }}>
        {bank}
      </h3>

      <div className="gold-divider mb-4" />

      <p className="font-body tracking-[2px] text-xl mb-1" style={{ color: "var(--cream)" }}>
        {norek}
      </p>
      <p className="font-body text-sm opacity-70 mb-5" style={{ color: "var(--cream)" }}>
        a.n {atas}
      </p>

      <button
        onClick={handleCopy}
        className="px-5 py-2 rounded-full text-sm tracking-[1px] uppercase transition-colors"
        style={{ border: "1px solid var(--gold)", color: "var(--gold)" }}
      >
        {copied ? "Tersalin ✓" : "Salin Nomor"}
      </button>
    </div>
  );
}

export default function Gift() {
  return (
    <section className="py-24 bg-navy bg-texture px-6">
      <Reveal>
        <div className="text-center mb-12">
          <p className="font-serif-elegant text-xs tracking-[4px] uppercase mb-3" style={{ color: "var(--gold)" }}>
            Tanda Kasih
          </p>
          <h2 className="font-script text-4xl" style={{ color: "var(--gold-deep)" }}>
            Wedding Gift
          </h2>
          <p className="font-body text-sm mt-4 opacity-70 max-w-sm mx-auto leading-relaxed" style={{ color: "var(--cream)" }}>
            Doa restu Anda merupakan suatu kebahagiaan bagi kami. Namun jika ingin memberi tanda kasih, kami sediakan:
          </p>
        </div>
      </Reveal>

      <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-5">
        {banks.map((item, i) => (
          <Reveal key={item.bank} delay={i * 0.1} direction="up">
            <BankCard {...item} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}