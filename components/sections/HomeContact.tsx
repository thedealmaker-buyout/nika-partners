export default function HomeContact() {
  return (
    <section
      className="py-20 md:py-32 px-6"
      style={{ background: "linear-gradient(180deg, #0B1A2E, #142442)" }}
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-heading text-[28px] md:text-[40px] text-white">
          Get in touch
        </h2>
        <p
          className="font-body text-[15px] md:text-[17px] mt-4 leading-[1.7]"
          style={{ color: "rgba(255,255,255,0.5)" }}
        >
          Whether you&apos;re exploring a transaction, evaluating a
          buy-and-build strategy, or simply want to exchange ideas — we&apos;d
          enjoy the conversation.
        </p>
        <a
          href="mailto:thomas.tcheudjio@nika-partners.eu?subject=New%20Tech%20Buyout%20Inquiry"
          className="inline-block mt-8 bg-gold text-navy-deep font-medium text-sm px-8 py-3.5 rounded-lg hover:bg-gold-light transition"
        >
          Start a conversation
        </a>
      </div>
    </section>
  );
}
