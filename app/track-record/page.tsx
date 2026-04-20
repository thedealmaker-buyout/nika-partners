import { DEALS_ALL } from "@/lib/constants";

export default function TrackRecordPage() {
  return (
    <main className="min-h-screen bg-cream">
      {/* Hero */}
      <section
        className="px-6 pt-32 pb-12 md:pt-40 md:pb-16"
        style={{ background: "linear-gradient(180deg, #0B1A2E, #142442)" }}
      >
        <div className="max-w-6xl mx-auto">
          <p
            className="font-body text-gold uppercase mb-4"
            style={{ fontSize: "11px", letterSpacing: "3px" }}
          >
            TRACK RECORD
          </p>
          <h1 className="font-heading text-[32px] md:text-[48px] text-white leading-[1.2]">
            Buyouts, M&A and strategic advisory for European tech founders.
          </h1>
        </div>
      </section>

      {/* Table */}
      <section className="px-6 py-12 md:py-16">
        <div className="max-w-6xl mx-auto bg-white rounded-xl px-6 md:px-10 py-8 md:py-10">
          {/* Table header */}
          <div
            className="hidden md:grid gap-x-5 pb-4 border-b border-[#353839]"
            style={{
              gridTemplateColumns: "52px 1fr 100px 130px 1.4fr 1.1fr",
            }}
          >
            <p className="font-body text-[13px] font-semibold text-text-dark">
              Year
            </p>
            <p className="font-body text-[13px] font-semibold text-text-dark">
              Client
            </p>
            <p className="font-body text-[13px] font-semibold text-text-dark">
              Sector
            </p>
            <p className="font-body text-[13px] font-semibold text-text-dark">
              Type
            </p>
            <p className="font-body text-[13px] font-semibold text-text-dark">
              Description
            </p>
            <p className="font-body text-[13px] font-semibold text-text-dark">
              Counterparties
            </p>
          </div>

          {/* Table rows */}
          {DEALS_ALL.map((deal, index) => (
            <div
              key={index}
              className="group grid grid-cols-1 md:grid-cols-none gap-y-1 md:gap-x-5 py-5 md:py-4 border-b border-[#eee] last:border-0 md:hover:bg-[#0B1A2E] md:hover:text-white transition-colors duration-300 md:-mx-4 md:px-4 md:rounded-lg cursor-default"
              style={{
                gridTemplateColumns:
                  "52px 1fr 100px 130px 1.4fr 1.1fr",
              }}
            >
              {/* Year */}
              <p className="font-body text-[14px] text-[#555] group-hover:text-white/60 transition-colors">
                {deal.year}
              </p>

              {/* Client */}
              <p className="font-body text-[14px] font-semibold text-text-dark group-hover:text-white transition-colors">
                {deal.client}
              </p>

              {/* Sector */}
              <p className="font-body text-[11px] text-gold tracking-[0.5px] group-hover:text-gold-light transition-colors">
                {deal.sector}
              </p>

              {/* Type badge */}
              <div>
                <span
                  className={`inline-block text-[9px] tracking-[0.5px] uppercase font-medium px-2 py-0.5 rounded whitespace-nowrap transition-colors ${
                    deal.dealType === "Strategic Advisory"
                      ? "bg-[#f0f0f0] text-[#888] group-hover:bg-white/10 group-hover:text-white/60"
                      : "bg-navy-deep/10 text-navy-deep group-hover:bg-white/20 group-hover:text-white"
                  }`}
                >
                  {deal.dealType}
                </span>
              </div>

              {/* Description */}
              <p className="font-body text-[13px] text-[#777] group-hover:text-white/70 transition-colors leading-[1.5]">
                {deal.description}
              </p>

              {/* Counterparties */}
              <p className="font-body text-[13px] text-[#555] group-hover:text-white/80 transition-colors">
                {deal.counterparties || "—"}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16 md:py-20 px-6"
        style={{ background: "linear-gradient(180deg, #0B1A2E, #142442)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-[24px] md:text-[32px] text-white">
            Have a transaction in mind?
          </h2>
          <p
            className="font-body text-[15px] mt-3 leading-[1.7]"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            We&apos;d enjoy the conversation.
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
