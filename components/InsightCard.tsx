import Link from "next/link";

const gradients = [
  "linear-gradient(135deg, #1B2A4A, #243B6A)",
  "linear-gradient(135deg, #142442, #1B3A5C)",
  "linear-gradient(135deg, #0E1525, #1B2A4A)",
];

interface InsightCardProps {
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readingTime: string;
  slug: string;
  index?: number;
}

export default function InsightCard({
  title,
  excerpt,
  category,
  date,
  readingTime,
  slug,
  index = 0,
}: InsightCardProps) {
  return (
    <Link href={`/insights/${slug}`} className="block group">
      <div className="rounded-xl overflow-hidden bg-navy border border-white/5 hover:border-gold/30 hover:-translate-y-1 transition-all duration-300">
        {/* Thumbnail */}
        <div
          className="h-40 flex items-center justify-center"
          style={{ background: gradients[index % 3] }}
        >
          <div className="w-12 h-px bg-gold/40" />
        </div>

        {/* Content */}
        <div className="p-5">
          <span className="text-gold text-[10px] uppercase tracking-[2px] font-medium">
            {category}
          </span>
          <h3 className="text-[15px] text-white font-semibold mt-2 line-clamp-2">
            {title}
          </h3>
          <p className="text-xs text-[#777] mt-2 line-clamp-2">{excerpt}</p>
          <div className="flex items-center gap-3 mt-4 text-[11px] text-[#555]">
            <span>{date}</span>
            <span>·</span>
            <span>{readingTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
