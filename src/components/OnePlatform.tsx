import Image from "next/image";
import Reveal from "./Reveal";

const features = [
  { bold: "One inventory record", rest: " — availability is always real" },
  { bold: "Live booking", rest: " — no sync gap, no double-booking" },
  { bold: "Revenue posts straight to the GL", rest: " — nothing to reconcile" },
  { bold: "One vendor", rest: " — IIG builds it and supports it" },
  { bold: "Upgrade-safe", rest: " — moves with Acumatica, not against it" },
];

export default function OnePlatform() {
  return (
    <section className="relative overflow-hidden" style={{ width: "100%", minHeight: "576px" }}>

      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/724266c0952abd56c92c678535cc3c863953d2c3.jpg"
          alt="Workers on site"
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
          priority
        />
      </div>

      {/* Gradient overlay — left half deep navy, right half fades to #0072B1 */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, #050A18 0%, #142A56 30%, #1C386E 55%, #0072B1 100%)",
          opacity: 0.88,
        }}
      />

      {/* Content */}
      <div
        className="relative flex flex-col md:flex-row items-center"
        style={{
          maxWidth: "1512px",
          margin: "0 auto",
          paddingTop: "120px",
          paddingBottom: "120px",
          paddingLeft: "208px",
          paddingRight: "208px",
          gap: "48px",
        }}
      >
        {/* Left column */}
        <Reveal variant="left" style={{ display: "flex", flexDirection: "column", gap: "24px", flexShrink: 0 }}>
          {/* Heading */}
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "36px",
              lineHeight: "100%",
              letterSpacing: "0",
              color: "#FFFFFF",
              margin: 0,
              width: "424px",
            }}
          >
            One platform, one source of truth
          </h2>

          {/* Sub-copy */}
          <p
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "21px",
              color: "#B8C9E4",
              margin: 0,
              maxWidth: "380px",
            }}
          >
            Rental operations run inside Acumatica Cloud ERP — same database, same login.
          </p>

          {/* Button */}
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "fit-content",
              height: "51px",
              borderRadius: "100px",
              border: "1px solid #FFFFFF",
              paddingTop: "16px",
              paddingBottom: "16px",
              paddingLeft: "48px",
              paddingRight: "48px",
              gap: "10px",
              backgroundColor: "#FFFFFF",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "100%",
                letterSpacing: "-0.01em",
                color: "#0072B1",
                whiteSpace: "nowrap",
              }}
            >
              See it on your data
            </span>
          </a>
        </Reveal>

        {/* Right column — feature list */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px", flex: 1 }}>
          {features.map((f, i) => (
            <Reveal key={i} variant="right" delay={i * 80} style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              {/* Tick circle */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  backgroundColor: "#ECF3FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path
                    d="M5 11.5L9 15.5L17 7"
                    stroke="#1B3A6B"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Text */}
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "20px",
                  lineHeight: "100%",
                  letterSpacing: "0",
                  color: "#ECF3FF",
                  margin: 0,
                }}
              >
                <span style={{ fontWeight: 600 }}>{f.bold}</span>
                <span style={{ fontWeight: 400 }}>{f.rest}</span>
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
