export default function NewsletterSignup() {
  return (
    <section className="py-16 px-6 text-center max-w-xl mx-auto">
      <h2 className="font-heading text-xl text-white">
        Stay informed on European Tech M&amp;A
      </h2>
      <p className="text-sm text-[#777] mt-2">
        Get our latest insights delivered to your inbox.
      </p>
      <form className="flex gap-3 mt-6 max-w-md mx-auto">
        <input
          type="email"
          placeholder="Your email address"
          className="flex-1 bg-navy border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder:text-[#555] focus:border-gold/50 focus:outline-none"
        />
        <button
          type="submit"
          className="bg-gold text-navy-deep font-medium text-sm px-6 py-3 rounded-lg hover:bg-gold-light transition"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
}
