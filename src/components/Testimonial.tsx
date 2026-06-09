import Image from "next/image";
import Reveal from "./Reveal";

export default function Testimonial() {
  return (
    <section style={{ backgroundColor: "#FFFFFF", paddingTop: "80px", paddingBottom: "80px" }}>
      <div style={{ maxWidth: "1512px", margin: "0 auto", paddingLeft: "96px", paddingRight: "96px" }}>

        {/* Card */}
        <div
          style={{
            maxWidth: "1320px",
            margin: "0 auto",
            borderRadius: "24px",
            background: "linear-gradient(135deg, #050A18 0%, #142A56 30%, #1C386E 65%, #0072B1 100%)",
            padding: "96px 112px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "48px",
          }}
        >
          {/* Left — heading */}
          <Reveal variant="left">
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "36px",
              lineHeight: "100%",
              letterSpacing: "0",
              color: "#FFFFFF",
              width: "424px",
              flexShrink: 0,
              margin: 0,
            }}
          >
            Trusted by businesses across industries
          </h2>
          </Reveal>

          {/* Right — quote + attribution */}
          <Reveal variant="right" delay={120}
            style={{
              width: "484px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              flexShrink: 0,
            }}
          >
            {/* Quote mark + text */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {/* Large quotemark */}
              <svg width="48" height="40" viewBox="0 0 48 40" fill="none">
                <path
                  d="M0 40V24C0 10.745 6.667 3.09 20 1L22 5C15.333 6.577 12 10.41 12 16H20V40H0ZM26 40V24C26 10.745 32.667 3.09 46 1L48 5C41.333 6.577 38 10.41 38 16H46V40H26Z"
                  fill="rgba(255,255,255,0.25)"
                />
              </svg>

              <blockquote
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 400,
                  fontStyle: "italic",
                  fontSize: "16px",
                  lineHeight: "26px",
                  color: "rgba(255,255,255,0.85)",
                  margin: 0,
                }}
              >
                We stopped reconciling two systems and started trusting one. AcuRental gave us real-time fleet availability inside the same ERP our accountants live in — that alone paid for the project.
              </blockquote>
            </div>

            {/* Attribution */}
            <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
              {/* Avatar */}
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  flexShrink: 0,
                  backgroundColor: "#D9D9D9",
                }}
              >
                <Image
                  src="/ellipse-5.svg"
                  alt="Rental Operations Director"
                  width={48}
                  height={48}
                  style={{ width: "48px", height: "48px", objectFit: "cover" }}
                />
              </div>

              {/* Name + company */}
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 700,
                    fontSize: "20px",
                    lineHeight: "100%",
                    color: "#FFFFFF",
                  }}
                >
                  Rental Operations Director
                </span>
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "100%",
                    color: "rgba(255,255,255,0.75)",
                  }}
                >
                  Regional equipment-rental company · Acumatica + AcuRental
                </span>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
