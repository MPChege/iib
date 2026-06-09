import Image from "next/image";
import Reveal from "./Reveal";

const bullets = {
  acumatica: [
    "Gold-certified, fixed-scope delivery",
    "Data migration & cutover planning",
    "Ongoing 24/7 US-based support",
  ],
  acuRental: [
    "Quote, contract, bill & return in one flow",
    "Real-time availability across yards",
    "Revenue posts straight to your GL",
  ],
  acuBoost: [
    "Native, upgrade-safe extensions",
    "Built and maintained in-house",
    "Mix & match to your workflow",
  ],
  constEquip: [
    "Project & job-cost accounting",
    "Equipment utilization & service",
    "Work orders from quote to close",
  ],
};

function Checkmark() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: "2px" }}>
      <path d="M3 9.5L7 13.5L15 5" stroke="#0072B1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
      {items.map((b, i) => (
        <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
          <Checkmark />
          <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "21px", color: "#354155" }}>
            {b}
          </span>
        </li>
      ))}
    </ul>
  );
}

function CardLink({ label }: { label: string }) {
  return (
    <a
      href="#"
      style={{
        fontFamily: "Inter, sans-serif",
        fontWeight: 400,
        fontSize: "14px",
        lineHeight: "100%",
        letterSpacing: "0",
        color: "#0072B1",
        textDecoration: "none",
      }}
    >
      {label}
    </a>
  );
}

/* Card style variants */
const cardBase: React.CSSProperties = {
  borderRadius: "24px",
  border: "2px solid #ECF3FF",
  padding: "48px",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
};

const cardBlue: React.CSSProperties = { ...cardBase, backgroundColor: "#ECF3FF" };
const cardWhite: React.CSSProperties = { ...cardBase, backgroundColor: "#F5F8FC" };

export default function FourWays() {
  return (
    <section style={{ backgroundColor: "#FFFFFF", paddingTop: "80px", paddingBottom: "80px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", paddingLeft: "24px", paddingRight: "24px" }}>

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
              marginBottom: "16px",
            }}
          >
            Four ways we put Acumatica to work for you
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
              letterSpacing: "0",
              color: "#354155",
              textAlign: "center",
              maxWidth: "1096px",
              margin: "0 auto 56px",
            }}
          >
            We&apos;re both the implementer and the ISV — the rare partner that scopes your ERP, configures it, and engineers the add-ons your operation actually needs. No hand-offs, no finger-pointing.
          </p>
        </Reveal>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Card 1 */}
          <Reveal variant="scale" delay={0} style={cardBlue}>
            <Image src="/image-3.svg" alt="Acumatica" width={248} height={62} style={{ width: "248px", height: "62px" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "21px", color: "#354155", margin: 0 }}>
                From discovery and scoping through go-live and beyond. We migrate your data, preserve your customizations, and train your team.
              </p>
              <BulletList items={bullets.acumatica} />
              <CardLink label="Plan your implementation →" />
            </div>
          </Reveal>

          {/* Card 2 */}
          <Reveal variant="scale" delay={120} style={cardWhite}>
            <Image src="/image-2.svg" alt="AcuRental" width={248} height={63} style={{ width: "248px", height: "63px" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "21px", color: "#354155", margin: 0 }}>
                Certified rental order processing built natively inside Acumatica — purpose-built for AV/event, scaffolding, and construction-equipment fleets.
              </p>
              <BulletList items={bullets.acuRental} />
              <CardLink label="Explore AcuRental →" />
            </div>
          </Reveal>

          {/* Card 3 */}
          <Reveal variant="scale" delay={80} style={cardWhite}>
            <Image src="/image-4.svg" alt="AcuBoost" width={248} height={63} style={{ width: "248px", height: "63px" }} />
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "21px", color: "#354155", margin: 0 }}>
                Sixteen purpose-built modules that extend Acumatica for complex operations — from advanced work orders to container and equipment tracking.
              </p>
              <BulletList items={bullets.acuBoost} />
              <CardLink label="Browse the modules →" />
            </div>
          </Reveal>

          {/* Card 4 */}
          <Reveal variant="scale" delay={200} style={cardBlue}>
            <div
              style={{
                width: "62px",
                height: "62px",
                borderRadius: "12px",
                backgroundColor: "#0072B1",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                paddingTop: "2px",
                paddingBottom: "2px",
                flexShrink: 0,
              }}
            >
              <Image src="/Vector.svg" alt="Construction & Equipment" width={32} height={30} />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "21px", color: "#354155", margin: 0 }}>
                Job costing, equipment management, and field operations — AcuConstruct and AcuEquipment bring the jobsite and the back office onto one ledger.
              </p>
              <BulletList items={bullets.constEquip} />
              <CardLink label="See the suite →" />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
