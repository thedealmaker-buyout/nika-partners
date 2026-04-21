import type { Metadata } from "next";
import Image from "next/image";
import { TEAM_MEMBERS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Team — Nika Partners",
  description:
    "Meet the Nika Partners team — seasoned M&A professionals with deep technology sector expertise and native cross-border capabilities.",
};

function getInitials(name: string): string {
  const parts = name.split(" ");
  return `${parts[0]?.[0] ?? ""}${parts[parts.length - 1]?.[0] ?? ""}`.toUpperCase();
}

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-[18px] h-[18px]"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const EmailIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    className="w-[18px] h-[18px]"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
    />
  </svg>
);

type Member = (typeof TEAM_MEMBERS)[number];

function CredentialsBlock({ member }: { member: Member }) {
  const hasPrev =
    member.previousCompanies && member.previousCompanies.length > 0;
  const hasEdu = member.education && member.education.length > 0;
  if (!hasPrev && !hasEdu) return null;

  return (
    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 mt-6 md:mt-7">
      {hasPrev && (
        <div>
          <p
            className="font-body text-gold uppercase mb-2"
            style={{ fontSize: "10px", letterSpacing: "2px" }}
          >
            Previously
          </p>
          <div className="space-y-1">
            {member.previousCompanies!.map((company) => (
              <p
                key={company}
                className="font-body text-[13px] text-[#555]"
              >
                {company}
              </p>
            ))}
          </div>
        </div>
      )}

      {hasEdu && (
        <div>
          <p
            className="font-body text-gold uppercase mb-2"
            style={{ fontSize: "10px", letterSpacing: "2px" }}
          >
            Education
          </p>
          <div className="space-y-1">
            {member.education!.map((school) => (
              <p
                key={school}
                className="font-body text-[13px] text-[#555]"
              >
                {school}
              </p>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function SocialsBlock({ member }: { member: Member }) {
  if (!member.featured) return null;
  return (
    <div className="flex items-center gap-4 mt-6 md:mt-7">
      {member.linkedin && member.linkedin !== "#" && (
        <a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#999] hover:text-gold transition"
        >
          <LinkedInIcon />
        </a>
      )}
      {member.email && (
        <a
          href={`mailto:${member.email}`}
          className="text-[#999] hover:text-gold transition"
        >
          <EmailIcon />
        </a>
      )}
    </div>
  );
}

export default function TeamPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section
        className="px-6 pt-32 pb-16 md:pt-40 md:pb-20"
        style={{ background: "linear-gradient(180deg, #0B1A2E, #142442)" }}
      >
        <div className="max-w-4xl mx-auto">
          <p
            className="font-body text-gold uppercase mb-4"
            style={{ fontSize: "11px", letterSpacing: "3px" }}
          >
            OUR TEAM
          </p>
          <h1 className="font-heading text-[28px] md:text-[48px] text-white leading-[1.2] max-w-[600px]">
            Experience meets conviction.
          </h1>
          <p
            className="font-body text-[14px] md:text-[15px] mt-4 leading-[1.7] max-w-[560px]"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Nika Partners brings together seasoned M&A professionals with deep
            technology sector expertise and native cross-border capabilities.
          </p>
        </div>
      </section>

      {/* Team members */}
      <section className="bg-white">
        {TEAM_MEMBERS.map((member, index) => {
          const isEven = index % 2 === 0;
          const initials = getInitials(member.name);

          return (
            <div key={member.name}>
              {/* Divider between members */}
              {index > 0 && (
                <div className="max-w-4xl mx-auto px-6">
                  <div className="h-px bg-[#eee]" />
                </div>
              )}

              <div className="max-w-4xl mx-auto px-6 py-10 md:py-20">
                {/* ───────── Mobile layout ───────── */}
                <div className="md:hidden">
                  {/* Header: photo (compact) + name/role/stats */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="relative w-[112px] h-[140px] shrink-0 bg-[#f5f5f3] rounded-lg overflow-hidden">
                      {member.photo ? (
                        <Image
                          src={member.photo}
                          alt={member.name}
                          fill
                          sizes="112px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="font-heading text-[36px] text-gold/20">
                            {initials}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="font-heading text-[20px] text-text-dark leading-[1.2]">
                        {member.name}
                      </h2>
                      <p className="font-body text-gold text-[13px] mt-1 leading-[1.3]">
                        {member.role}
                      </p>
                      <div className="mt-3 space-y-1.5">
                        <div className="flex items-baseline gap-1.5">
                          <span className="font-heading text-[18px] text-text-dark">
                            {member.yearsExperience}
                          </span>
                          <span className="font-body text-[10px] text-[#999] uppercase tracking-[1px]">
                            years
                          </span>
                        </div>
                        <p className="text-[12px] text-[#999]">
                          {member.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Bio full width */}
                  <p className="font-body text-[14px] text-[#555] leading-[1.75]">
                    {member.bio}
                  </p>

                  <CredentialsBlock member={member} />
                </div>

                {/* ───────── Desktop alternating layout ───────── */}
                <div
                  className={`hidden md:flex ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-16 items-start`}
                >
                  {/* Photo */}
                  <div className="w-[280px] shrink-0">
                    <div className="relative w-full aspect-[3/4] bg-[#f5f5f3] rounded-xl overflow-hidden">
                      {member.photo ? (
                        <Image
                          src={member.photo}
                          alt={member.name}
                          fill
                          sizes="280px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <span className="font-heading text-[56px] text-gold/20">
                            {initials}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h2 className="font-heading text-[28px] text-text-dark leading-[1.2]">
                      {member.name}
                    </h2>
                    <p className="font-body text-gold text-[14px] mt-1">
                      {member.role}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-5">
                      <div className="flex items-center gap-2">
                        <span className="font-heading text-[22px] text-text-dark">
                          {member.yearsExperience}
                        </span>
                        <span className="font-body text-[12px] text-[#999] uppercase tracking-[1px]">
                          years
                        </span>
                      </div>
                      <div className="w-px h-4 bg-[#ddd]" />
                      <span className="text-[13px] text-[#999]">
                        {member.location}
                      </span>
                    </div>
                    <p className="font-body text-[15px] text-[#555] leading-[1.8] mt-6">
                      {member.bio}
                    </p>
                    <CredentialsBlock member={member} />
                    <SocialsBlock member={member} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA */}
      <section
        className="py-14 md:py-20 px-6"
        style={{ background: "linear-gradient(180deg, #0B1A2E, #142442)" }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-[24px] md:text-[32px] text-white">
            Get in touch
          </h2>
          <p
            className="font-body text-[14px] md:text-[15px] mt-3 leading-[1.7]"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Whether you&apos;re exploring a transaction or simply want to
            exchange ideas.
          </p>
          <a
            href="mailto:thomas.tcheudjio@nika-partners.eu?subject=New%20Tech%20Buyout%20Inquiry"
            className="inline-block mt-6 bg-gold text-navy-deep font-medium text-sm px-8 py-3.5 rounded-lg hover:bg-gold-light transition"
          >
            Start a conversation
          </a>
        </div>
      </section>
    </main>
  );
}
