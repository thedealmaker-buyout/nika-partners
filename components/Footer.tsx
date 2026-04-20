import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-white/5 py-16 px-6">
      <div className="flex flex-col items-center">
        {/* Stacked logo */}
        <div className="text-center">
          <p className="font-heading text-lg tracking-[2px] text-white uppercase">
            NIKA
          </p>
          <div className="w-11 h-px bg-gold my-2 mx-auto" />
          <p className="font-heading text-sm tracking-[2px] text-white uppercase">
            PARTNERS
          </p>
        </div>

        {/* Nav links */}
        <nav className="flex items-center justify-center gap-6 mt-8">
          <Link
            href="/use-cases"
            className="font-body text-[13px] text-[rgba(255,255,255,0.4)] hover:text-white transition"
          >
            Use Cases
          </Link>
          <Link
            href="/insights"
            className="font-body text-[13px] text-[rgba(255,255,255,0.4)] hover:text-white transition"
          >
            Insights
          </Link>
          <Link
            href="/team"
            className="font-body text-[13px] text-[rgba(255,255,255,0.4)] hover:text-white transition"
          >
            Team
          </Link>
          <a
            href="mailto:thomas.tcheudjio@nika-partners.eu?subject=New%20Tech%20Buyout%20Inquiry"
            className="font-body text-[13px] text-[rgba(255,255,255,0.4)] hover:text-white transition"
          >
            Contact
          </a>
        </nav>

        {/* Social icons */}
        <div className="flex items-center justify-center gap-4 mt-6">
          <a
            href="https://www.linkedin.com/in/thomastcheudjio/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-[rgba(255,255,255,0.4)] hover:text-gold transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
          <a
            href="https://dealmakingintel.substack.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Substack"
            className="text-[rgba(255,255,255,0.4)] hover:text-gold transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
            </svg>
          </a>
        </div>

        {/* Location */}
        <p className="font-body text-[13px] text-[rgba(255,255,255,0.4)] mt-6 text-center">
          Amsterdam &middot; Paris
        </p>

        {/* Copyright */}
        <p className="font-body text-xs text-[rgba(255,255,255,0.3)] mt-4 text-center">
          &copy; 2026 Nika Partners. All rights reserved.
        </p>

        {/* Legal links */}
        <div className="flex items-center justify-center gap-4 mt-3">
          <Link
            href="/terms"
            className="font-body text-xs text-[rgba(255,255,255,0.3)] hover:text-white transition"
          >
            Terms of Use
          </Link>
          <Link
            href="/privacy"
            className="font-body text-xs text-[rgba(255,255,255,0.3)] hover:text-white transition"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
