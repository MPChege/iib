import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0D2B6E 0%, #1A4A9E 40%, #1E5BB8 70%, #1A4A9E 100%)",
        minHeight: "760px",
        marginTop: "-116px",
        paddingTop: "116px",
      }}
    >
      {/* Math textbook grid overlay — thin horizontal + vertical lines like graph paper */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Hero content — starts below navbar (48px topbar + 8px gap + 65px pill + spacing) */}
      <div
        className="relative mx-auto flex flex-col md:flex-row items-start gap-0"
        style={{
          maxWidth: "1320px",
          paddingLeft: "96px",
          paddingRight: "96px",
          paddingTop: "136px",
          paddingBottom: "48px",
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
              WebkitTextStroke: "1px #000000",
              paintOrder: "stroke fill",
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

    </section>
  );
}
