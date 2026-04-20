import Image from "next/image";
import Link from "next/link";
import { TESTIMONIALS } from "@/lib/constants";

export default function WhatMakesUsProud() {
  return (
    <section className="py-16 md:py-24 px-6 bg-cream">
      {/* Header */}
      <div className="text-center">
        <h2 className="font-heading font-bold text-[28px] md:text-[40px] text-text-dark">
          What makes us proud
        </h2>
        <p className="font-body text-[16px] text-[#777] mt-4">
          Founders who chose to build across borders — with us.
        </p>
      </div>

      {/* Cards */}
      <div className="flex gap-4 md:gap-8 mt-10 md:mt-16 max-w-6xl mx-auto overflow-x-auto snap-x md:overflow-visible md:snap-none pb-4 md:pb-0">
        {TESTIMONIALS.map((testimonial) => (
          <div
            key={testimonial.name}
            className="bg-white rounded-2xl p-6 md:p-8 border border-[#e5e5e5] hover:shadow-lg transition-shadow duration-300 min-w-[280px] snap-center md:min-w-0 md:flex-1"
          >
            {/* Photo */}
            <div className="w-[72px] h-[72px] md:w-[100px] md:h-[100px] rounded-full overflow-hidden mx-auto mb-4 md:mb-6">
              <Image
                src={testimonial.photo}
                alt={testimonial.name}
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Name */}
            <p className="font-body text-[16px] font-bold text-text-dark text-center">
              {testimonial.name}
            </p>

            {/* Title */}
            <p className="font-body text-[13px] text-[#777] mt-1 text-center">
              {testimonial.title}
            </p>

            {/* Quote */}
            <p className="font-body text-[14px] text-[#555] italic leading-[1.7] mt-6">
              &ldquo;{testimonial.quote}&rdquo;
            </p>

            {/* Context */}
            <p className="font-body text-[13px] text-[#999] mt-4 not-italic border-t border-[#eee] pt-4">
              {testimonial.context}
            </p>
          </div>
        ))}
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
