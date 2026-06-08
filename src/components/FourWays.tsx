const cards = [
  {
    logo: (
      <div className="flex items-center gap-2 mb-3">
        <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "#E8773A" }}>
          <span className="text-white font-bold text-sm">A</span>
        </div>
        <span className="text-2xl font-bold" style={{ color: "#E8773A" }}>Acumatica</span>
      </div>
    ),
    description:
      "From discovery and scoping through go-live and beyond. We migrate your data, preserve your customizations, and train your team.",
    bullets: [
      "Gold-certified, fixed-scope delivery",
      "Data migration & cutover planning",
      "Ongoing 24/7 US-based support",
    ],
    link: "Plan your implementation →",
    bg: "white",
  },
  {
    logo: (
      <div className="mb-3">
        <span className="text-2xl font-extrabold" style={{ color: "#1B3A6B" }}>
          acu<span style={{ color: "#E8773A" }}>rental</span>
        </span>
      </div>
    ),
    description:
      "Certified rental order processing built natively inside Acumatica — purpose built for AcuRent, scaffolding, and construction equipment rentals.",
    bullets: [
      "Quote, contract, bill & return in one flow",
      "Real-time availability across yards",
      "Revenue posts straight to your GL",
    ],
    link: "Explore AcuRental →",
    bg: "white",
  },
  {
    logo: (
      <div className="mb-3">
        <span className="text-2xl font-extrabold" style={{ color: "#1B3A6B" }}>
          Acu<span style={{ color: "#E8773A" }}>boost</span>
        </span>
        <div className="flex gap-1 mt-1">
          {["#1B3A6B", "#E8773A", "#4CAF50"].map((c, i) => (
            <div key={i} className="w-4 h-1 rounded-full" style={{ background: c }} />
          ))}
        </div>
      </div>
    ),
    description:
      "Purpose-built modules that extend Acumatica for complex operations — from advanced work orders to container and equipment tracking.",
    bullets: [
      "Native, upgrade-safe extensions",
      "Built and maintained in-house",
      "Mix & match to your workflow",
    ],
    link: "Browse the modules →",
    bg: "white",
  },
  {
    logo: (
      <div className="mb-3 flex items-center gap-2">
        <div className="w-9 h-9 rounded-lg flex items-center justify-center" style={{ background: "#1B3A6B" }}>
          <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M3 3h18v18H3z" />
          </svg>
        </div>
        <span className="text-lg font-bold text-gray-800">Construction &amp; Equipment</span>
      </div>
    ),
    description:
      "Job costing, equipment management, and field operations — AcuConstruct and AcuEquipment bring the jobsite and the back office onto one ledger.",
    bullets: [
      "Project & job-cost accounting",
      "Equipment utilization & service",
      "Work orders from quote to close",
    ],
    link: "See the suite →",
    bg: "#F7F8FA",
  },
];

export default function FourWays() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "#1B3A6B" }}>
            Four ways we put Acumatica to work for you
          </h2>
        </div>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-sm md:text-base">
          We&#39;re both the Implementer and the ISV — the rare partner that scopes your ERP, configures it, and engineers the add-ons your operation actually needs. No hand-offs, no finger-pointing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="rounded-xl p-6 border border-gray-200 hover:shadow-md transition-shadow"
              style={{ background: card.bg }}
            >
              {card.logo}
              <p className="text-gray-600 text-sm mb-4 leading-relaxed">{card.description}</p>
              <ul className="space-y-1.5 mb-5">
                {card.bullets.map((b, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                    <svg className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#1B3A6B" }} fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {b}
                  </li>
                ))}
              </ul>
              <a href="#" className="text-sm font-semibold hover:opacity-80 transition-opacity" style={{ color: "#1B3A6B" }}>
                {card.link}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
