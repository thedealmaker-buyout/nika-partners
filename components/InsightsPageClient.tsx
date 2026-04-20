"use client";

import { useState } from "react";
import InsightCard from "@/components/InsightCard";

interface InsightItem {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
}

const categories = [
  "All",
  "Market Analysis",
  "Cross-Border",
  "Founder Guide",
  "Deal Spotlight",
];

export default function InsightsPageClient({
  insights,
}: {
  insights: InsightItem[];
}) {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? insights
      : insights.filter((i) => i.category === activeCategory);

  return (
    <section className="px-6">
      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs tracking-[1px] transition-all ${
              activeCategory === cat
                ? "bg-gold text-navy-deep"
                : "bg-navy text-[#777] border border-white/10 hover:border-gold/30"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-12">
        {filtered.map((insight, index) => (
          <InsightCard
            key={insight.slug}
            title={insight.title}
            excerpt={insight.excerpt}
            category={insight.category}
            date={insight.date}
            readingTime={insight.readingTime}
            slug={insight.slug}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
