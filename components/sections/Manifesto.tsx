import Link from "next/link";
import { USE_CASES } from "@/lib/constants";

export default function Manifesto() {
  return (
    <section
      className="py-16 md:py-24 px-6"
      style={{ background: "linear-gradient(180deg, #0B1A2E, #142442)" }}
    >
      {/* Header */}
      <div className="text-center">
        <p
          className="font-body text-gold uppercase mb-4"
          style={{ fontSize: "11px", letterSpacing: "3px" }}
        >
          WHY WE EXIST
        </p>
        <h2 className="font-heading text-[28px] md:text-[36px] text-white">
          Venture-backed buyouts for European software
        </h2>
      </div>

      {/* Use case teasers */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto mt-14">
        {USE_CASES.map((uc, index) => (
          <div key={index} className="text-center md:text-left">
            <p className="font-heading text-[40px] md:text-[48px] text-gold/20 leading-none mb-4">
              {String(index + 1).padStart(2, "0")}
            </p>
            <p className="text-gold text-[10px] uppercase tracking-[2px] font-medium mb-3">
              {uc.label}
            </p>
            <p className="font-heading text-[16px] md:text-[18px] text-white leading-[1.4]">
              {uc.headline}
            </p>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-14 text-center">
        <Link
          href="/use-cases"
          className="text-gold text-sm font-medium hover:underline"
        >
          Explore all use cases &rarr;
        </Link>
      </div>
    </section>
  );
}
