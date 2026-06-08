const industries = [
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 3l9 9-9 9-9-9z" />
      </svg>
    ),
    title: "AV & Event",
    tagline: "Serialized gear. Fast turnarounds.",
    color: "#1B3A6B",
    bullets: [
      "Stage, lighting, and audio inventory moves in kits and components in pieces. Track every serial number through prep, show, and return.",
      "Kit & package building with auto-serials",
      "Serial & barcode check-in / check-out",
      "Crew & labor resource scheduling",
      "Damage & shortage reconciliation",
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M3 12l9-9 9 9v9H3v-9z" />
      </svg>
    ),
    title: "Scaffolding",
    tagline: "Long jobs, to-the-pencil billing.",
    color: "#4CAF50",
    bullets: [
      "Bulk components out for months, billed by the day on period, often across multiple stages or a single project. Keep the yard and the invoice in sync.",
      "Recurring period & cycle billing",
      "Bulk-component yard management",
      "Partial deliveries & pickups by stage",
      "Job-linked rental & loss tracking",
    ],
  },
  {
    icon: (
      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" />
      </svg>
    ),
    title: "Construction Equipment",
    tagline: "High-value assets, service-driven.",
    color: "#E8773A",
    bullets: [
      "Excavators, lifts, and loaders that need utilization tracked, meters read, and maintenance scheduled — because downtime is lost revenue.",
      "Meter-based billing (hours / mileage)",
      "Preventive maintenance scheduling",
      "Delivery, pickup & transport logistics",
    ],
  },
];

export default function Industries() {
  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-4">
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "#1B3A6B" }}>
            One rental engine.
          </h2>
          <h2 className="text-2xl md:text-3xl font-bold" style={{ color: "#E8773A" }}>
            Three industries it was built for.
          </h2>
        </div>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto text-sm md:text-base">
          The mechanics of renting an LED wall, a scaffold tower, and an excavator are different. AcuRental ships with the workflows, billing models, and asset tracking each one demands.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <div key={i} className="rounded-xl overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
              {/* Header */}
              <div className="px-5 py-4 flex items-center gap-3" style={{ background: ind.color }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/20">
                  {ind.icon}
                </div>
                <div>
                  <div className="text-white font-bold text-base">{ind.title}</div>
                  <div className="text-white/80 text-xs">{ind.tagline}</div>
                </div>
              </div>

              {/* Body */}
              <div className="p-5">
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">{ind.bullets[0]}</p>
                <ul className="space-y-1.5">
                  {ind.bullets.slice(1).map((b, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" style={{ color: ind.color }}>
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
