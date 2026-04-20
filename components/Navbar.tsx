"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(11,26,46,0.9)] backdrop-blur-[16px] border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Horizontal logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5"
          onClick={closeMobile}
        >
          <span className="font-heading text-white uppercase tracking-[2px] text-[16px]">
            NIKA
          </span>
          <span className="w-[1.5px] h-4 bg-gold" />
          <span className="font-heading text-white uppercase tracking-[2px] text-[16px]">
            PARTNERS
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[rgba(255,255,255,0.5)] text-[13px] tracking-[1px] uppercase font-body hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:thomas.tcheudjio@nika-partners.eu?subject=New%20Tech%20Buyout%20Inquiry"
            className="border border-gold text-gold text-xs uppercase tracking-[1px] font-body rounded-[6px] px-4 py-2 hover:bg-gold hover:text-navy-deep transition-colors duration-200"
          >
            Contact
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col justify-center gap-1.5 w-8 h-8"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <span
            className={`block h-px w-6 bg-white transition-all duration-300 ${
              mobileOpen ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-white transition-all duration-300 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-white transition-all duration-300 ${
              mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 pb-6 flex flex-col gap-4 bg-[rgba(11,26,46,0.95)] backdrop-blur-[16px]">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="text-[rgba(255,255,255,0.5)] text-[13px] tracking-[1px] uppercase font-body hover:text-white transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:thomas.tcheudjio@nika-partners.eu?subject=New%20Tech%20Buyout%20Inquiry"
            onClick={closeMobile}
            className="border border-gold text-gold text-xs uppercase tracking-[1px] font-body rounded-[6px] px-4 py-2 text-center hover:bg-gold hover:text-navy-deep transition-colors duration-200 w-fit"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
