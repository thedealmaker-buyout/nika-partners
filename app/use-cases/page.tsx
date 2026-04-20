import { USE_CASES } from "@/lib/constants";

export default function UseCasesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section
        className="px-6 pt-32 pb-16 md:pt-40 md:pb-20"
        style={{ background: "linear-gradient(180deg, #0B1A2E, #142442)" }}
      >
        <div className="max-w-4xl mx-auto">
          <p
            className="font-body text-gold uppercase mb-4"
            style={{ fontSize: "11px", letterSpacing: "3px" }}
          >
            USE CASES
          </p>
          <h1 className="font-heading text-[32px] md:text-[48px] text-white leading-[1.2] max-w-[700px]">
            Building across borders to close Europe&apos;s software scale gap.
          </h1>
        </div>
      </section>

      {/* Manifesto */}
      <section className="px-6 py-16 md:py-24 bg-white">
        <div className="max-w-[720px] mx-auto">
          <p
            className="font-body text-gold uppercase mb-6"
            style={{ fontSize: "11px", letterSpacing: "3px" }}
          >
            OUR MANIFESTO
          </p>
          <h2 className="font-heading text-[24px] md:text-[32px] text-text-dark mb-8">
            Why We Exist
          </h2>

          <div className="space-y-6 font-body text-[15px] md:text-[16px] text-[#555] leading-[1.8]">
            <p>
              European software is a{" "}
              <span className="text-gold font-medium">
                fragmented market
              </span>
              . Across legal tech, GovTech, HR tech, digital workplace —
              dozens of local heroes have built strong products serving their
              domestic markets. But each of them operates in isolation, limited
              by language, regulation and go-to-market complexity.
            </p>

            <p>
              On many of these segments, they compete against{" "}
              <span className="text-text-dark font-medium">
                the same American platforms
              </span>{" "}
              — companies that don&apos;t necessarily build better products, but
              operate at a fundamentally different scale. A single US player
              can amortize its R&D investment across a $300M+ ARR base, while
              its European competitors each spend separately to solve the same
              technical challenges with a fraction of the resources.
            </p>

            <p>
              The result is a{" "}
              <span className="text-gold font-medium">
                structural scale disadvantage
              </span>
              . European companies under-invest in R&D relative to their
              American counterparts — not because they lack ambition, but
              because their revenue base is too narrow to fund it. The gap
              compounds every year.
            </p>

            <p>
              We believe the answer is{" "}
              <span className="text-text-dark font-medium">
                building across borders
              </span>
              . When you combine two or three European leaders on the same
              vertical, you pool R&D resources, eliminate redundant spending,
              and create a platform with the scale to compete globally. Better
              allocation of resources. Stronger product. Faster roadmap.
            </p>

            <p>
              This is the thesis behind every transaction we advise:{" "}
              <span className="text-gold font-medium">
                turning fragmented European verticals into platforms that can
                match American scale — while keeping the founding vision and
                value creation in Europe
              </span>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-white">
        <div className="max-w-4xl mx-auto">
          <div
            className="h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, #D4A03C, transparent)",
            }}
          />
        </div>
      </div>

      {/* Use cases */}
      <section
        className="px-6 py-16 md:py-24"
        style={{ background: "linear-gradient(180deg, #0B1A2E, #142442)" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {USE_CASES.map((uc, index) => (
              <div
                key={index}
                className="bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 md:p-8 flex flex-col"
              >
                {/* Number — fixed height */}
                <div className="h-[50px]">
                  <p className="font-heading text-[40px] text-gold/20 leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                </div>
                {/* Label — fixed height */}
                <div className="h-[24px]">
                  <p className="text-gold text-[10px] uppercase tracking-[2px] font-medium">
                    {uc.label}
                  </p>
                </div>
                {/* Headline — fixed height */}
                <div className="h-[80px] mt-3">
                  <h3 className="font-heading text-[17px] md:text-[19px] text-white leading-[1.4]">
                    {uc.headline}
                  </h3>
                </div>
                {/* Body — flex grow */}
                <p
                  className="font-body text-[13px] md:text-[14px] leading-[1.7] mt-4 flex-1"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {uc.body}
                </p>
                {/* Takeaway — bottom aligned */}
                <div className="mt-4 pl-4 border-l-2 border-gold">
                  <p className="font-body text-[13px] md:text-[14px] text-white/80 leading-[1.7] italic">
                    {uc.takeaway}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 md:py-20 px-6"
        style={{ background: "linear-gradient(180deg, #0B1A2E, #142442)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-[24px] md:text-[32px] text-white">
            Recognize your situation?
          </h2>
          <p
            className="font-body text-[15px] mt-3 leading-[1.7]"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Let&apos;s explore what a venture-backed buyout could look like for
            you.
          </p>
          <a
            href="mailto:thomas.tcheudjio@nika-partners.eu?subject=New%20Tech%20Buyout%20Inquiry"
            className="inline-block mt-6 bg-gold text-navy-deep font-medium text-sm px-8 py-3.5 rounded-lg hover:bg-gold-light transition"
          >
            Start a conversation
          </a>
        </div>
      </section>
    </main>
  );
}
