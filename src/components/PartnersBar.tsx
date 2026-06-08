export default function PartnersBar() {
  const partners = ["Acumatica", "AcuRental", "AcuBoost", "AcuConstruct", "AcuEquipment", "Sage 100"];

  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "#0A1730",
        padding: "clamp(24px, 4vw, 0px)",
      }}
    >
      <div
        className="flex flex-col sm:flex-row items-start sm:items-center flex-wrap"
        style={{
          maxWidth: "1320px",
          width: "100%",
          margin: "0 auto",
          paddingLeft: "clamp(24px, 6vw, 96px)",
          paddingRight: "clamp(24px, 6vw, 96px)",
          paddingTop: "clamp(20px, 3vw, 36px)",
          paddingBottom: "clamp(20px, 3vw, 36px)",
          gap: "clamp(16px, 3vw, 48px)",
        }}
      >
        <span
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "clamp(11px, 1vw, 14px)",
            lineHeight: "100%",
            letterSpacing: "0.33em",
            color: "#A8C8FF",
            whiteSpace: "nowrap",
            flexShrink: 0,
          }}
        >
          BUILT ON &amp; CERTIFIED FOR
        </span>

        <div className="flex flex-wrap items-center" style={{ gap: "clamp(16px, 3vw, 48px)", marginLeft: "clamp(0px, 4vw, 80px)" }}>
          {partners.map((name) => (
            <span
              key={name}
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "clamp(12px, 1vw, 14px)",
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
  );
}
