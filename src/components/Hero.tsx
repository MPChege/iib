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
      {/* Math textbook grid overlay */}
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

      <div className="relative mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-0"
        style={{
          maxWidth: "1320px",
          paddingLeft: "clamp(24px, 6vw, 96px)",
          paddingRight: "clamp(24px, 6vw, 96px)",
          paddingTop: "clamp(60px, 10vw, 136px)",
          paddingBottom: "clamp(40px, 5vw, 48px)",
        }}
      >
        {/* LEFT COLUMN */}
        <div className="flex flex-col w-full lg:w-auto lg:flex-shrink-0" style={{ maxWidth: "536px", gap: "32px" }}>

          <h1
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "clamp(32px, 4vw, 48px)",
              lineHeight: "1.33",
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
              margin: 0,
              WebkitTextStroke: "1px #000000",
              paintOrder: "stroke fill",
            }}
          >
            Run your entire rental operation from one intelligent platform
          </h1>

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "clamp(16px, 1.8vw, 20px)",
              lineHeight: "1.5",
              letterSpacing: "-0.01em",
              color: "#D4E5FF",
              margin: 0,
            }}
          >
            From quotes and inventory to dispatch, billing, CRM, field service, and financials—AcuRental gives rental businesses complete visibility and control on the Acumatica Cloud ERP platform.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap items-center" style={{ gap: "16px" }}>
            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: "51px",
                borderRadius: "100px",
                padding: "16px 48px",
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

            <a
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: "51px",
                borderRadius: "100px",
                padding: "16px 24px",
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

          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 300,
              fontSize: "14px",
              lineHeight: "21px",
              color: "#D4E5FF",
              margin: 0,
            }}
          >
            Trusted by rental businesses across equipment, construction, AV production, events, and specialty rental industries.
          </p>
        </div>

        {/* RIGHT COLUMN — dashboard screenshot */}
        <div className="flex-1 flex items-center lg:items-start justify-center lg:justify-end w-full">
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
