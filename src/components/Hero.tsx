import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0D2B6E 0%, #1A4A9E 40%, #1E5BB8 70%, #1A4A9E 100%)",
        minHeight: "860px",
      }}
    >
      {/* Grid dot pattern overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Hero content — starts below navbar (48px topbar + 8px gap + 65px pill + spacing) */}
      <div
        className="relative mx-auto flex flex-col md:flex-row items-start gap-0"
        style={{
          maxWidth: "1320px",
          paddingLeft: "96px",
          paddingRight: "96px",
          paddingTop: "155px",
          paddingBottom: "80px",
        }}
      >
        {/* LEFT COLUMN */}
        <div
          className="flex flex-col"
          style={{ width: "536px", flexShrink: 0, gap: "32px" }}
        >
          {/* Headline — 536×192, Inter SemiBold 48px / 64px, -2% tracking, #FFF, 1px black border */}
          <h1
            style={{
              width: "536px",
              height: "192px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "48px",
              lineHeight: "64px",
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
              margin: 0,
              textShadow: "0 0 0 rgba(0,0,0,0.25)",
              WebkitTextStroke: "0px",
            }}
          >
            Run your entire rental operation from one intelligent platform
          </h1>

          {/* Subtext — 536×120, Inter Regular 20px / 30px, -1% tracking, #D4E5FF */}
          <p
            style={{
              width: "536px",
              height: "120px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "30px",
              letterSpacing: "-0.01em",
              color: "#D4E5FF",
              margin: 0,
            }}
          >
            From quotes and inventory to dispatch, billing, CRM, field service, and financials—AcuRental gives rental businesses complete visibility and control on the Acumatica Cloud ERP platform.
          </p>

          {/* CTA buttons */}
          <div className="flex items-center" style={{ gap: "16px" }}>
            {/* Book a demo — white fill, pill, 195×51 */}
            <a
              href="#"
              style={{
                display: "inline-flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                height: "51px",
                borderRadius: "100px",
                paddingTop: "16px",
                paddingRight: "48px",
                paddingBottom: "16px",
                paddingLeft: "48px",
                gap: "10px",
                backgroundColor: "#FFFFFF",
                textDecoration: "none",
                whiteSpace: "nowrap",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                color: "#0D2B6E",
              }}
            >
              Book a demo
            </a>

            {/* Explore Solutions — outlined, pill, 181×51 */}
            <a
              href="#"
              style={{
                display: "inline-flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                height: "51px",
                borderRadius: "100px",
                paddingTop: "16px",
                paddingRight: "24px",
                paddingBottom: "16px",
                paddingLeft: "24px",
                gap: "10px",
                backgroundColor: "transparent",
                border: "1px solid #FFFFFF",
                textDecoration: "none",
                whiteSpace: "nowrap",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                color: "#FFFFFF",
              }}
            >
              Explore Solutions
            </a>
          </div>

          {/* Trust line — 536×42, Inter Light 14px / 21px, #D4E5FF */}
          <p
            style={{
              width: "536px",
              height: "42px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 300,
              fontSize: "14px",
              lineHeight: "21px",
              letterSpacing: "0",
              color: "#D4E5FF",
              margin: 0,
            }}
          >
            Trusted by rental businesses across equipment, construction, AV production, events, and specialty rental industries.
          </p>
        </div>

        {/* RIGHT COLUMN — dashboard screenshot */}
        <div
          className="flex-1 flex items-start justify-end"
          style={{ paddingTop: "0px" }}
        >
          <Image
            src="/Rectangle 1.svg"
            alt="AcuRental dashboard"
            width={700}
            height={560}
            priority
            style={{ width: "100%", maxWidth: "700px", height: "auto" }}
          />
        </div>
      </div>

      {/* Partners bar — 1512×113, #0A1730 */}
      <div
        style={{
          width: "100%",
          height: "113px",
          backgroundColor: "#0A1730",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            maxWidth: "1320px",
            width: "100%",
            margin: "0 auto",
            paddingLeft: "96px",
            paddingRight: "96px",
            display: "flex",
            alignItems: "center",
            gap: "48px",
          }}
        >
          {/* Label */}
          <span
            style={{
              width: "290px",
              height: "17px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              lineHeight: "100%",
              letterSpacing: "0.33em",
              color: "#A8C8FF",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            BUILT ON &amp; CERTIFIED FOR
          </span>

          {/* Vertical divider */}
          <div
            style={{
              width: "1px",
              height: "40px",
              borderLeft: "1px dashed rgba(168,200,255,0.4)",
              flexShrink: 0,
            }}
          />

          {/* Partner names */}
          <div style={{ display: "flex", alignItems: "center", gap: "48px" }}>
            {["Acumatica", "AcuRental", "AcuBoost", "AcuConstruct", "AcuEquipment", "Sage 100"].map((name) => (
              <span
                key={name}
                style={{
                  height: "17px",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: "14px",
                  lineHeight: "100%",
                  letterSpacing: "0",
                  color: "#A8C8FF",
                  whiteSpace: "nowrap",
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
