export default function CTA() {
  return (
    <section
      className="py-16 md:py-20"
      style={{
        background: "linear-gradient(135deg, #1B3A6B 0%, #1E4A8A 50%, #1B3A6B 100%)",
      }}
    >
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Transform your rental business with one platform
        </h2>
        <p className="text-blue-200 mb-8 text-sm md:text-base">
          Whether you&#39;re replacing legacy software, improving visibility, or preparing for growth, our team can help you build a system that scales with your business.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="px-7 py-3 rounded font-semibold text-sm text-white transition-all hover:opacity-90"
            style={{ background: "#E8773A" }}
          >
            Book a demo
          </a>
          <a
            href="#"
            className="px-7 py-3 rounded font-semibold text-sm border-2 border-white text-white hover:bg-white hover:text-blue-900 transition-all"
          >
            Explore Solutions
          </a>
        </div>
      </div>
    </section>
  );
}
