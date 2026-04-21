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
