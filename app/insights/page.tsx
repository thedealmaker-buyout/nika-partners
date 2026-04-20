import type { Metadata } from "next";
import { getAllInsights } from "@/lib/insights";
import InsightsList from "@/components/InsightsList";

export const metadata: Metadata = {
  title: "Insights — Deal Making Intel",
  description:
    "An insider playbook about M&A Deal Making for VC-backed companies. By Thomas Tcheudjio.",
};

export default function InsightsPage() {
  const insights = getAllInsights();

  const plainInsights = insights.map((insight) => ({
    slug: insight.slug,
    title: insight.frontmatter.title,
    excerpt: insight.frontmatter.excerpt,
    date: insight.frontmatter.date,
    readingTime: insight.frontmatter.readingTime,
    number: insight.frontmatter.number,
  }));

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section
        className="px-6 pt-32 pb-16 md:pt-40 md:pb-20"
        style={{ background: "linear-gradient(180deg, #0B1A2E, #142442)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <p
            className="font-body text-gold uppercase mb-4"
            style={{ fontSize: "11px", letterSpacing: "3px" }}
          >
            INSIGHTS
          </p>
          <h1 className="font-heading text-[32px] md:text-[48px] text-white leading-[1.2]">
            Deal Making Intel
          </h1>
          <p
            className="font-body text-[15px] mt-4 leading-[1.7] max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            An insider playbook about M&A Deal Making for VC-backed companies.
          </p>
        </div>
      </section>

      {/* Article list */}
      <section className="px-6 py-10 md:py-14">
        <InsightsList insights={plainInsights} />
      </section>

      {/* CTA */}
      <section
        className="py-16 md:py-20 px-6"
        style={{ background: "linear-gradient(180deg, #0B1A2E, #142442)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-[24px] md:text-[32px] text-white">
            Want to read more?
          </h2>
          <p
            className="font-body text-[15px] mt-3 leading-[1.7]"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Subscribe to Deal Making Intel on Substack for notifications.
          </p>
          <a
            href="https://dealmakingintel.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-gold text-navy-deep font-medium text-sm px-8 py-3.5 rounded-lg hover:bg-gold-light transition"
          >
            Subscribe on Substack
          </a>
        </div>
      </section>
    </main>
  );
}
