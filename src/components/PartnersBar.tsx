export default function PartnersBar() {
  return (
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


        <div style={{ display: "flex", alignItems: "center", gap: "48px", marginLeft: "80px" }}>
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
  );
}
