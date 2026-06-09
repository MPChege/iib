import Reveal from "./Reveal";

const industries = [
  {
    headerBg: "#2B5EA7",
    checkColor: "#2B5EA7",
    cardBg: "#F5F8FC",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="9" height="9" rx="1.5" fill="white" opacity="0.9"/>
        <rect x="2" y="13" width="9" height="9" rx="1.5" fill="white" opacity="0.6"/>
        <rect x="13" y="5" width="9" height="3" rx="1" fill="white" opacity="0.8"/>
        <rect x="13" y="10" width="9" height="3" rx="1" fill="white" opacity="0.8"/>
        <rect x="13" y="15" width="9" height="3" rx="1" fill="white" opacity="0.8"/>
      </svg>
    ),
    title: "AV & Event",
    tagline: "Serialized gear, fast turnarounds",
    description:
      "Stage, lighting, and audio inventory moves in kits and comes back in pieces. Track every serial number through prep, show, and return.",
    bullets: [
      "Kit & package building with sub-rentals",
      "Serial & barcode check-in / check-out",
      "Crew, labor & delivery scheduling",
      "Damage & shortage reconciliation",
    ],
  },
  {
    headerBg: "#3D8B3D",
    checkColor: "#3D8B3D",
    cardBg: "#F5F8FC",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="9" height="9" rx="1" stroke="white" strokeWidth="1.8" fill="none"/>
        <rect x="13" y="2" width="9" height="9" rx="1" stroke="white" strokeWidth="1.8" fill="none"/>
        <rect x="2" y="13" width="9" height="9" rx="1" stroke="white" strokeWidth="1.8" fill="none"/>
        <rect x="13" y="13" width="9" height="9" rx="1" stroke="white" strokeWidth="1.8" fill="none"/>
      </svg>
    ),
    title: "Scaffolding",
    tagline: "Long jobs, by-the-period billing",
    description:
      "Bulk components out for months, billed by the day or period, often across multiple stages of a single project. Keep the yard and the invoice in sync.",
    bullets: [
      "Recurring period & cycle billing",
      "Bulk-component yard management",
      "Partial deliveries & pickups by stage",
      "Job-linked rental & loss tracking",
    ],
  },
  {
    headerBg: "#2B5EA7",
    checkColor: "#2B5EA7",
    cardBg: "#F5F8FC",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <path d="M2 17h20M4 17v-4l3-5h10l3 5v4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="7.5" cy="19.5" r="1.5" fill="white"/>
        <circle cx="16.5" cy="19.5" r="1.5" fill="white"/>
        <path d="M9 8h6M12 5v6" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Construction Equipment",
    tagline: "High-value assets, service-driven",
    description:
      "Excavators, lifts, and loaders that need utilization tracked, meters read, and maintenance scheduled — because downtime is lost revenue.",
    bullets: [
      "Fleet utilization & ROI reporting",
      "Meter-based billing (hours / mileage)",
      "Preventive-maintenance scheduling",
      "Delivery, pickup & transport logistics",
    ],
  },
];

export default function Industries() {
  return (
    <section style={{ backgroundColor: "#FFFFFF", paddingTop: "80px", paddingBottom: "80px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px" }}>

        {/* Heading */}
        <Reveal variant="up">
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "36px",
              lineHeight: "100%",
              letterSpacing: "0",
              color: "#0072B1",
              textAlign: "center",
              maxWidth: "1095px",
              margin: "0 auto 16px",
            }}
          >
            One rental engine. Three industries it was built for.
          </h2>
        </Reveal>

        {/* Subtext */}
        <Reveal variant="up" delay={80}>
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "24px",
              color: "#354155",
              textAlign: "center",
              maxWidth: "871px",
              margin: "0 auto 56px",
            }}
          >
            The mechanics of renting an LED wall, a scaffold tower, and an excavator are different. AcuRental ships with the workflows, billing models, and asset tracking each one demands.
          </p>
        </Reveal>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
          }}
          className="grid-cols-1 sm:grid-cols-3"
        >
          {industries.map((ind, i) => (
            <Reveal
              key={i}
              variant="scale"
              delay={i * 120}
              style={{
                borderRadius: "24px",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              }}
            >
              {/* Solid colour header */}
              <div
                style={{
                  backgroundColor: ind.headerBg,
                  padding: "32px 36px",
                  display: "flex",
                  alignItems: "center",
                  gap: "16px",
                }}
              >
                {/* Icon box — semi-transparent white rounded square */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "10px",
                    backgroundColor: "rgba(255,255,255,0.18)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {ind.icon}
                </div>

                {/* Title + tagline stacked */}
                <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 700,
                      fontSize: "18px",
                      lineHeight: "100%",
                      color: "#FFFFFF",
                    }}
                  >
                    {ind.title}
                  </span>
                  <span
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 400,
                      fontSize: "13px",
                      lineHeight: "100%",
                      color: "rgba(255,255,255,0.75)",
                    }}
                  >
                    {ind.tagline}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div
                style={{
                  backgroundColor: ind.cardBg,
                  padding: "32px 36px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  flex: 1,
                }}
              >
                <p
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "21px",
                    color: "#354155",
                    margin: 0,
                  }}
                >
                  {ind.description}
                </p>

                <ul
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {ind.bullets.map((b, j) => (
                    <li
                      key={j}
                      style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        style={{ flexShrink: 0, marginTop: "2px" }}
                      >
                        <path
                          d="M2.5 8.5L6 12L13.5 4.5"
                          stroke={ind.checkColor}
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "21px",
                          color: "#354155",
                        }}
                      >
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
