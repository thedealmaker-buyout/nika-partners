"use client";

import Image from "next/image";
import Link from "next/link";
import { DEALS_FEATURED } from "@/lib/constants";

export default function StrategicCombinations() {
  return (
    <section className="py-16 md:py-24 px-6 bg-white">
      {/* Header */}
      <div className="text-center">
        <p
          className="font-body text-gold uppercase mb-4"
          style={{ fontSize: "11px", letterSpacing: "3px" }}
        >
          TRACK RECORD
        </p>
        <h2 className="font-heading text-[28px] md:text-[36px] text-text-dark">
          Our Latest Deals
        </h2>
        <p className="font-body text-[14px] text-[#999] mt-4">
          Selected transactions where we helped shape the next chapter.
        </p>
      </div>

      {/* Deal cards — horizontal scroll */}
      <div className="mt-12 md:mt-16 max-w-6xl mx-auto">
        <div className="flex gap-5 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide">
          {DEALS_FEATURED.map((deal, index) => (
            <div
              key={index}
              className="min-w-[260px] w-[260px] md:min-w-[280px] md:w-[280px] flex-shrink-0 snap-start border border-[#e5e5e5] rounded-xl overflow-hidden bg-[#FAFAF8] hover:shadow-lg transition-shadow duration-300"
            >
              {/* Flags + Sector */}
              <div className="px-5 pt-5 pb-3">
                <div className="flex items-center gap-1.5 text-[16px]">
                  {deal.flags.map((flag, i) => (
                    <span key={i}>{flag}</span>
                  ))}
                </div>
                <p className="font-body text-[11px] text-gold tracking-[1.5px] uppercase font-medium mt-2">
                  {deal.sector}
                </p>
              </div>

              {/* Photo placeholder */}
              <div className="w-full h-[140px] bg-[#e8e8e8] relative">
                {deal.photo && (
                  <Image
                    src={deal.photo}
                    alt={`${deal.client} deal`}
                    fill
                    className="object-cover"
                    style={{ objectPosition: deal.photoPosition || "center" }}
                  />
                )}
              </div>

              {/* Deal info */}
              <div className="px-5 py-5">
                <p className="font-body text-[11px] text-[#999] tracking-[1.5px] uppercase mb-2">
                  {deal.role}
                </p>
                <p className="font-body text-[14px] text-text-dark leading-[1.5]">
                  <span className="font-semibold">{deal.client}</span>{" "}
                  {deal.deal}{" "}
                  <span className="font-semibold">{deal.counterpart}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-12 text-center">
        <Link
          href="/track-record"
          className="text-gold text-sm font-medium hover:underline"
        >
          View full track record &rarr;
        </Link>
      </div>
    </section>
  );
}
