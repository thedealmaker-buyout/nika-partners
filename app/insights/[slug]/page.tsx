import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllInsights, getInsightBySlug } from "@/lib/insights";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const insights = getAllInsights();
  return insights.map((insight) => ({
    slug: insight.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) {
    return { title: "Not Found" };
  }

  return {
    title: `${insight.frontmatter.title} — Deal Making Intel`,
    description: insight.frontmatter.excerpt,
  };
}

export default async function InsightArticlePage({ params }: Props) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);

  if (!insight) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <div
        className="px-6 pt-32 pb-16 md:pt-40 md:pb-20"
        style={{ background: "linear-gradient(180deg, #0B1A2E, #142442)" }}
      >
        <div className="max-w-[720px] mx-auto">
          {/* Back link */}
          <Link
            href="/insights"
            className="text-gold/60 text-sm hover:text-gold mb-8 block transition"
          >
            &larr; Back to Insights
          </Link>

          {/* Category */}
          <p className="text-gold text-[10px] uppercase tracking-[2px] font-medium">
            {insight.frontmatter.category}
          </p>

          {/* Title */}
          <h1 className="font-heading text-[32px] md:text-[44px] text-white mt-4 leading-[1.2]">
            {insight.frontmatter.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-3 mt-5 text-[13px] text-white/40">
            <span>Thomas Tcheudjio</span>
            <span>·</span>
            <span>{insight.frontmatter.date}</span>
            <span>·</span>
            <span>{insight.frontmatter.readingTime}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <article className="px-6 py-12 md:py-16">
        <div className="max-w-[720px] mx-auto prose-insight-light">
          <MDXRemote source={insight.content} />
        </div>
      </article>

      {/* Get in touch */}
      <section className="px-6 py-14 md:py-16 bg-[#FAFAF8]">
        <div className="max-w-[720px] mx-auto flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10">
          <div className="flex-1">
            <h3 className="font-heading text-[20px] md:text-[24px] text-text-dark">
              Want to discuss this further?
            </h3>
            <p className="font-body text-[14px] text-[#777] mt-2 leading-[1.7]">
              If this essay resonated or raised questions about your own
              situation, I&apos;d enjoy the conversation.
            </p>
          </div>
          <a
            href="mailto:thomas.tcheudjio@nika-partners.eu?subject=New%20Tech%20Buyout%20Inquiry"
            className="shrink-0 bg-gold text-navy-deep font-medium text-sm px-8 py-3.5 rounded-lg hover:bg-gold-light transition"
          >
            Get in touch
          </a>
        </div>
      </section>

      {/* More essays */}
      <section
        className="py-16 md:py-20 px-6"
        style={{ background: "linear-gradient(180deg, #0B1A2E, #142442)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-[24px] md:text-[32px] text-white">
            Want more Deal Making Intel?
          </h2>
          <p
            className="font-body text-[15px] mt-3 leading-[1.7]"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Subscribe on Substack to get every new essay.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
            <a
              href="https://dealmakingintel.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gold text-navy-deep font-medium text-sm px-8 py-3.5 rounded-lg hover:bg-gold-light transition"
            >
              Subscribe on Substack
            </a>
            <Link
              href="/insights"
              className="text-gold text-sm font-medium hover:underline"
            >
              Browse all essays &rarr;
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
