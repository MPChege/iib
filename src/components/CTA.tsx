import Image from "next/image";
import Reveal from "./Reveal";

export default function CTA() {
  return (
    <section className="relative overflow-hidden" style={{ width: "100%", minHeight: "419px" }}>

      {/* Background photo */}
      <div className="absolute inset-0">
        <Image
          src="/6245a0669f818d84bd8a5348a1288cbeb21767f7.jpg"
          alt="Rental business"
          fill
          style={{ objectFit: "cover", objectPosition: "center top" }}
          priority
        />
      </div>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, #050A18 0%, #142A56 30%, #1C386E 65%, #0072B1 100%)",
          opacity: 0.88,
        }}
      />

      {/* Content */}
      <div
        className="relative flex flex-col items-center justify-center text-center"
        style={{
          minHeight: "419px",
          padding: "80px 24px",
          gap: "32px",
        }}
      >
        {/* Heading */}
        <Reveal variant="up">
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "36px",
              lineHeight: "100%",
              letterSpacing: "0",
              color: "#FFFFFF",
              margin: 0,
              maxWidth: "800px",
            }}
          >
            Transform your rental business with one platform
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
              color: "rgba(255,255,255,0.8)",
              margin: 0,
              maxWidth: "700px",
            }}
          >
            Whether you&apos;re replacing legacy software, improving visibility, or preparing for growth, our team can help you build a system that scales with your business.
          </p>
        </Reveal>

        {/* Buttons */}
        <Reveal variant="up" delay={160} style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap", justifyContent: "center" }}>

          {/* Book a demo — solid white */}
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              height: "51px",
              borderRadius: "100px",
              paddingTop: "16px",
              paddingBottom: "16px",
              paddingLeft: "48px",
              paddingRight: "48px",
              gap: "10px",
              backgroundColor: "#FFFFFF",
              border: "none",
              textDecoration: "none",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "100%",
              color: "#0072B1",
              whiteSpace: "nowrap",
              cursor: "pointer",
            }}
          >
            Book a demo
          </a>

          {/* Explore Solutions — outline white */}
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              height: "51px",
              borderRadius: "100px",
              paddingTop: "16px",
              paddingBottom: "16px",
              paddingLeft: "24px",
              paddingRight: "24px",
              gap: "10px",
              backgroundColor: "transparent",
              border: "1px solid #FFFFFF",
              textDecoration: "none",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "100%",
              color: "#FFFFFF",
              whiteSpace: "nowrap",
              cursor: "pointer",
            }}
          >
            Explore Solutions
          </a>

        </Reveal>
      </div>

    </section>
  );
}
