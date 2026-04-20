import Link from "next/link";

const MOST_READ = [
  {
    title: "Introducing M&A-Market Fit",
    hook: "A systematic approach to M&A-market fit, based on Scale and Scope, enables smaller SaaS companies to drive traction among their potential equity customers and find qualified strategic buyers.",
    slug: "introducing-m-and-a-market-fit",
    number: 27,
  },
  {
    title: "Outbound M&A Go-to-Market",
    hook: "When growth stalls around three to five million euros in ARR, finding the right buyer requires rethinking conventional wisdom about who constitutes a serious acquirer.",
    slug: "outbound-m-and-a-go-to-market",
    number: 28,
  },
  {
    title: "Transaction Costs in M&A",
    hook: "I'm not talking about the banker and legal fees.",
    slug: "transaction-costs-in-m-and-a",
    number: 33,
  },
  {
    title: "Corporate Buyers Still Pay Premiums — But Not the Way You Think",
    hook: "Non-correlated ARR deals still happen, but they require guiding buyers through an internal awareness journey rather than relying on traditional auction processes.",
    slug: "corporate-buyers-still-pay-premiums",
    number: 32,
  },
  {
    title: "Seller's Market vs Buyer's Market",
    hook: "Understanding whether you are operating in a seller's or buyer's market is the single most important factor in determining M&A outcomes for startups.",
    slug: "sellers-market-vs-buyers-market",
    number: 38,
  },
];

export default function DealMakingIntel() {
  return (
    <section className="py-16 md:py-24 px-6 bg-[#0E1525]">
      {/* Header */}
      <div className="text-center">
        <p className="font-body text-[11px] text-gold tracking-[3px] uppercase">
          DEALMAKING INTEL
        </p>
        <h2 className="font-heading text-[26px] md:text-[32px] text-white mt-4">
          Deal Making Insights
        </h2>
        <p className="font-body text-[14px] text-[rgba(255,255,255,0.5)] max-w-[600px] mx-auto mt-4 text-center leading-[1.7]">
          DealMaking Intel is a collection of essays documenting what we observe
          across technology transactions in Europe. Rather than presenting
          abstract theories, these essays explore the practical dynamics behind
          technology deal-making.
        </p>
      </div>

      {/* Article Cards — horizontal scroll */}
      <div className="mt-12 md:mt-16 max-w-6xl mx-auto">
        <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
          {MOST_READ.map((article) => (
            <Link
              key={article.slug}
              href={`/insights/${article.slug}`}
              className="min-w-[280px] w-[280px] md:min-w-[320px] md:w-[320px] flex-shrink-0 snap-start bg-[rgba(255,255,255,0.03)] border border-[rgba(255,255,255,0.08)] rounded-2xl p-6 hover:border-gold/30 transition-colors group flex flex-col"
            >
              <span className="text-gold text-[10px] uppercase tracking-[2px] font-medium mb-4 block">
                MOST READ · #{article.number}
              </span>
              <h3 className="font-body text-[16px] text-white font-bold leading-[1.4] group-hover:text-gold transition-colors">
                {article.title}
              </h3>
              <p className="font-body text-[13px] text-[rgba(255,255,255,0.5)] leading-[1.6] mt-3 flex-1">
                {article.hook}
              </p>
              <span className="mt-5 inline-flex items-center gap-1 text-gold text-[13px] font-medium group-hover:underline">
                Read essay &rarr;
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom row */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-5xl mx-auto mt-12 gap-8">
        {/* Left: See all */}
        <Link
          href="/insights"
          className="text-gold text-sm font-medium hover:underline"
        >
          See all essays &rarr;
        </Link>

        {/* Right: Substack subscribe */}
        <div>
          <p className="font-body text-[13px] text-[rgba(255,255,255,0.5)] mb-3">
            Get the next essay in your inbox
          </p>
          <form
            method="GET"
            action="https://dealmakingintel.substack.com/subscribe"
            className="flex gap-3"
          >
            <input
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.15)] rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-[rgba(255,255,255,0.3)] w-full md:w-56 focus:border-gold/50 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gold text-navy-deep font-medium text-sm px-5 py-2.5 rounded-lg hover:bg-gold-light transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
