export default function Hero() {
  return (
    <section
      className="flex flex-col justify-center px-6 pt-16 pb-10 md:pt-0 md:pb-0 relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0B1A2E 0%, #142442 100%)",
        minHeight: "100svh",
      }}
    >
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="flex flex-col md:flex-row md:items-center md:gap-24">
          {/* Left — headline */}
          <div className="max-w-[700px]">
            <h1 className="font-heading text-[28px] sm:text-[36px] md:text-[52px] text-white leading-[1.2]">
              Cross-border Tech M&A for founders who think{" "}
              <span className="text-gold">European.</span>
            </h1>

            <p
              className="text-sm md:text-base max-w-[500px] mt-3 md:mt-6"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              Venture-backed buyout specialists.
            </p>

            <div className="flex items-center gap-6 md:gap-8 mt-3 md:mt-8">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span
                  className="text-[11px] md:text-[13px] tracking-[2px] uppercase"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  Amsterdam
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                <span
                  className="text-[11px] md:text-[13px] tracking-[2px] uppercase"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  Paris
                </span>
              </div>
            </div>

            <div
              className="w-20 h-px mt-3 md:mt-8"
              style={{
                background: "linear-gradient(90deg, #D4A03C, transparent)",
              }}
            />
          </div>

          {/* Right — scope */}
          <div className="mt-8 md:mt-0 md:border-l md:border-[rgba(255,255,255,0.1)] md:pl-12 space-y-6">
            <p className="font-heading text-[18px] md:text-[22px] text-gold">
              European software
            </p>
            <div>
              <p className="font-body text-[14px] md:text-[15px] text-white font-medium">
                €2M–€8M ARR
              </p>
              <p
                className="font-body text-[12px] md:text-[13px] mt-1"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Sell-side add-on advisory
              </p>
            </div>
            <div>
              <p className="font-body text-[14px] md:text-[15px] text-white font-medium">
                €8M–€50M
              </p>
              <p
                className="font-body text-[12px] md:text-[13px] mt-1"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                Buy-side buy-and-build execution
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 animate-bounce">
        <svg
          className="w-5 h-5 text-gold opacity-60"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>
    </section>
  );
}
