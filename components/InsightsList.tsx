"use client";

import { useState } from "react";
import Link from "next/link";

interface InsightItem {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readingTime: string;
  number?: number;
}

export default function InsightsList({ insights }: { insights: InsightItem[] }) {
  const [visible, setVisible] = useState(10);
  const shown = insights.slice(0, visible);
  const hasMore = visible < insights.length;

  return (
    <>
      <div className="max-w-3xl mx-auto">
        {shown.map((insight, index) => (
          <Link
            key={insight.slug}
            href={`/insights/${insight.slug}`}
            className="block group"
          >
            <article
              className={`py-7 ${
                index < shown.length - 1 ? "border-b border-[#eee]" : ""
              }`}
            >
              <p className="font-body text-[13px] text-[#999]">
                Thomas Tcheudjio
              </p>
              <h3 className="font-heading text-[18px] md:text-[22px] text-text-dark mt-1.5 leading-[1.3] group-hover:text-gold transition-colors">
                {insight.title}
              </h3>
              {insight.number && (
                <p className="font-body text-[12px] text-gold/70 mt-1">
                  Deal Making Intel #{insight.number}
                </p>
              )}
              <p className="font-body text-[14px] text-[#777] mt-2 leading-[1.6] line-clamp-2">
                {insight.excerpt}
              </p>
              <div className="flex items-center gap-3 mt-3 text-[12px] text-[#bbb]">
                <span>{insight.date}</span>
                <span>&middot;</span>
                <span>{insight.readingTime}</span>
              </div>
            </article>
          </Link>
        ))}
      </div>

      {hasMore && (
        <div className="text-center mt-10">
          <button
            onClick={() => setVisible((v) => v + 10)}
            className="bg-gold text-navy-deep font-medium text-sm px-8 py-3 rounded-lg hover:bg-gold-light transition"
          >
            Load more
          </button>
        </div>
      )}
    </>
  );
}
