const features = [
  { text: "One inventory record", sub: "availability is always real" },
  { text: "Live booking", sub: "no sync gap, no double-booking" },
  { text: "Revenue posts straight to the GL", sub: "nothing to reconcile" },
  { text: "One vendor", sub: "IIG builds it and supports it" },
  { text: "Upgrade-safe", sub: "moves with Acumatica, not against it" },
];

export default function OnePlatform() {
  return (
    <section
      className="relative py-16 md:py-24 overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1B3A6B 0%, #1E4A8A 50%, #1B3A6B 100%)",
      }}
    >
      {/* Background person silhouette hint */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute right-0 bottom-0 w-80 h-full bg-gradient-to-l from-blue-300 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
        {/* Left */}
        <div className="flex-1 text-white max-w-sm">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            One platform, one source of truth
          </h2>
          <p className="text-blue-200 text-sm md:text-base mb-6 leading-relaxed">
            Rental operations run inside Acumatica Cloud ERP — same database, same login.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-5 py-2.5 rounded text-sm font-semibold border-2 border-white text-white hover:bg-white hover:text-blue-900 transition-all"
          >
            See it on your data
          </a>
        </div>

        {/* Right – checklist */}
        <div className="flex-1">
          <ul className="space-y-4">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-3">
                <div
                  className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center mt-0.5"
                  style={{ background: "#4CAF50" }}
                >
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white text-sm md:text-base">
                  <span className="font-semibold">{f.text}</span>
                  {" — "}
                  <span className="text-blue-200">{f.sub}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
