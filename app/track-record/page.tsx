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
          <h1 className="font-heading text-[28px] md:text-[48px] text-white leading-[1.2]">
            Buyouts, M&A and strategic advisory for European tech founders.
          </h1>
        </div>
      </section>

      {/* Deals list */}
      <section className="px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-6xl mx-auto bg-white rounded-xl px-4 md:px-10 py-6 md:py-10">
          {/* ───────── Desktop table ───────── */}
          <div className="hidden md:block">
            {/* Table header */}
            <div
              className="grid gap-x-5 pb-4 border-b border-[#353839]"
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
                className="group grid gap-x-5 py-4 border-b border-[#eee] last:border-0 hover:bg-[#0B1A2E] hover:text-white transition-colors duration-300 -mx-4 px-4 rounded-lg cursor-default"
                style={{
                  gridTemplateColumns:
                    "52px 1fr 100px 130px 1.4fr 1.1fr",
                }}
              >
                <p className="font-body text-[14px] text-[#555] group-hover:text-white/60 transition-colors">
                  {deal.year}
                </p>
                <p className="font-body text-[14px] font-semibold text-text-dark group-hover:text-white transition-colors">
                  {deal.client}
                </p>
                <p className="font-body text-[11px] text-gold tracking-[0.5px] group-hover:text-gold-light transition-colors">
                  {deal.sector}
                </p>
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
                <p className="font-body text-[13px] text-[#777] group-hover:text-white/70 transition-colors leading-[1.5]">
                  {deal.description}
                </p>
                <p className="font-body text-[13px] text-[#555] group-hover:text-white/80 transition-colors">
                  {deal.counterparties || "—"}
                </p>
              </div>
            ))}
          </div>

          {/* ───────── Mobile card list ───────── */}
          <div className="md:hidden divide-y divide-[#eee]">
            {DEALS_ALL.map((deal, index) => (
              <div key={index} className="py-5 first:pt-2 last:pb-2">
                {/* Top row: year + type badge */}
                <div className="flex items-center justify-between mb-2">
                  <span className="font-body text-[12px] text-[#888] font-medium tracking-wide">
                    {deal.year}
                  </span>
                  <span
                    className={`inline-block text-[9px] tracking-[0.5px] uppercase font-medium px-2 py-0.5 rounded whitespace-nowrap ${
                      deal.dealType === "Strategic Advisory"
                        ? "bg-[#f0f0f0] text-[#888]"
                        : "bg-navy-deep/10 text-navy-deep"
                    }`}
                  >
                    {deal.dealType}
                  </span>
                </div>

                {/* Client name */}
                <h3 className="font-body text-[17px] font-semibold text-text-dark leading-snug">
                  {deal.client}
                </h3>

                {/* Sector */}
                <p className="font-body text-[11px] text-gold tracking-[1px] uppercase mt-1">
                  {deal.sector}
                </p>

                {/* Description */}
                <p className="font-body text-[13.5px] text-[#555] leading-[1.6] mt-3">
                  {deal.description}
                </p>

                {/* Counterparties */}
                {deal.counterparties && (
                  <div className="mt-3 pt-3 border-t border-[#f2f2f2]">
                    <p className="font-body text-[10px] text-[#999] uppercase tracking-[1.5px] mb-1">
                      Counterparties
                    </p>
                    <p className="font-body text-[13px] text-[#555]">
                      {deal.counterparties}
                    </p>
                  </div>
                )}
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
