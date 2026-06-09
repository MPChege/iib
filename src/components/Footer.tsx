import Image from "next/image";

const solutions = ["AcuRental", "Acumatica Cloud ERP", "Sage 100", "AcuBoost ISV", "Custom Development"];
const industries = ["Equipment Rental", "Construction Rental", "Event Rental", "AV & Production Rental", "Specialty Rental", "Distribution"];
const resources = ["About", "Success Stories", "Product Videos", "Webinars", "Blog"];

const linkStyle: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontWeight: 400,
  fontSize: "14px",
  lineHeight: "100%",
  color: "rgba(255,255,255,0.6)",
  textDecoration: "none",
  display: "block",
};

const headingStyle: React.CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "100%",
  color: "#FFFFFF",
  marginBottom: "24px",
};

const contactIconStyle: React.CSSProperties = {
  flexShrink: 0,
  marginTop: "1px",
};

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0A1730" }}>
      {/* Main footer body */}
      <div
        style={{
          maxWidth: "1512px",
          margin: "0 auto",
          padding: "80px 96px 64px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr 1fr",
          gap: "48px",
          alignItems: "start",
        }}
        className="footer-grid"
      >
        {/* Col 1 — Brand */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <Image src="/image-1.svg" alt="IIG Logo" width={92} height={36} />

          <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "22px", color: "rgba(255,255,255,0.6)", margin: 0 }}>
            Helping rental businesses streamline operations, improve visibility, and drive growth through purpose-built software and ERP solutions.
          </p>

          <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "14px", lineHeight: "22px", color: "rgba(255,255,255,0.6)", margin: 0 }}>
            Founded in 1992, IIG combines deep industry expertise with modern technology to help organizations operate smarter.
          </p>

          {/* Social icons */}
          <div style={{ display: "flex", gap: "12px" }}>
            {[
              /* LinkedIn */
              <svg key="li" width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="18" fill="rgba(255,255,255,0.1)"/><path d="M13 15h-2v8h2v-8zm-1-1.5a1.25 1.25 0 110-2.5 1.25 1.25 0 010 2.5zM24 23h-2v-4c0-1-.4-1.5-1.2-1.5-.8 0-1.3.6-1.3 1.5v4h-2v-8h2v1.1c.5-.8 1.3-1.3 2.2-1.3 1.7 0 2.3 1.2 2.3 3v5.2z" fill="rgba(255,255,255,0.5)"/></svg>,
              /* Twitter/X */
              <svg key="tw" width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="18" fill="rgba(255,255,255,0.1)"/><path d="M20.2 17.1L24.5 12h-1l-3.7 4.3L16.8 12H13l4.5 6.6L13 24h1l3.9-4.5 3.1 4.5H25l-4.8-6.9zm-1.4 1.6l-.5-.6-3.6-5.2h1.6l3 4.3.5.6 3.7 5.4h-1.6l-3.1-4.5z" fill="rgba(255,255,255,0.5)"/></svg>,
              /* Facebook */
              <svg key="fb" width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="18" fill="rgba(255,255,255,0.1)"/><path d="M19.5 18.5H21l.5-2H19.5v-1c0-.6.2-1 1-1H21.5v-1.8c-.3 0-1-.1-1.7-.1-1.7 0-2.8 1-2.8 2.9v1H15.5v2h1.5V24h2.5v-5.5z" fill="rgba(255,255,255,0.5)"/></svg>,
              /* YouTube */
              <svg key="yt" width="36" height="36" viewBox="0 0 36 36" fill="none"><circle cx="18" cy="18" r="18" fill="rgba(255,255,255,0.1)"/><path d="M24.5 15.2s-.2-1.2-.8-1.7c-.7-.8-1.5-.8-1.9-.8C19.9 12.5 18 12.5 18 12.5s-1.9 0-3.8.2c-.4.1-1.2.1-1.9.8-.6.5-.8 1.7-.8 1.7S11.3 16.5 11.3 18v1.3c0 1.5.2 2.8.2 2.8s.2 1.2.8 1.7c.7.8 1.7.7 2.1.8 1.5.1 6.6.2 6.6.2s1.9 0 3.8-.3c.4-.1 1.2-.1 1.9-.8.6-.5.8-1.7.8-1.7s.2-1.3.2-2.7V18c0-1.4-.2-2.8-.2-2.8zM16.5 20.4v-4.8l5.1 2.4-5.1 2.4z" fill="rgba(255,255,255,0.5)"/></svg>,
            ]}
          </div>
        </div>

        {/* Col 2 — Solutions */}
        <div>
          <p style={headingStyle}>Solutions</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {solutions.map((l) => <a key={l} href="#" style={linkStyle}>{l}</a>)}
          </div>
        </div>

        {/* Col 3 — Industries */}
        <div>
          <p style={headingStyle}>Industries</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {industries.map((l) => <a key={l} href="#" style={linkStyle}>{l}</a>)}
          </div>
        </div>

        {/* Col 4 — Resources */}
        <div>
          <p style={headingStyle}>Resources</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {resources.map((l) => <a key={l} href="#" style={linkStyle}>{l}</a>)}
          </div>
        </div>

        {/* Col 5 — Contact Us */}
        <div>
          <p style={headingStyle}>Contact Us</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>

            {/* Phone */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
              <svg style={contactIconStyle} width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M16.5 12.9v2.1a1.4 1.4 0 01-1.5 1.4A13.9 13.9 0 012.1 3a1.4 1.4 0 011.4-1.5h2.1c.7 0 1.3.5 1.4 1.2.1.6.3 1.3.6 1.9.2.4.1.9-.2 1.2l-.9.9a11.1 11.1 0 005.7 5.7l.9-.9c.3-.3.8-.4 1.2-.2.6.3 1.3.5 1.9.6.7.1 1.2.7 1.3 1.4v-.4z" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a href="tel:+18189563744" style={{ ...linkStyle, color: "rgba(255,255,255,0.75)" }}>(818) 956-3744</a>
            </div>

            {/* Email */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
              <svg style={contactIconStyle} width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 3h12a1.5 1.5 0 011.5 1.5v9A1.5 1.5 0 0115 15H3a1.5 1.5 0 01-1.5-1.5v-9A1.5 1.5 0 013 3z" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16.5 4.5l-7.5 6-7.5-6" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <a href="mailto:sales@iigservices.com" style={{ ...linkStyle, color: "rgba(255,255,255,0.75)" }}>sales@iigservices.com</a>
            </div>

            {/* Hours */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
              <svg style={contactIconStyle} width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="7.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
                <path d="M9 5v4l2.5 2.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span style={{ ...linkStyle, color: "rgba(255,255,255,0.6)", lineHeight: "22px" }}>
                Monday – Friday<br />8:00 AM – 5:00 PM PST
              </span>
            </div>

            {/* Address */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
              <svg style={contactIconStyle} width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M9 1.5a6 6 0 016 6c0 4.5-6 10.5-6 10.5S3 12 3 7.5a6 6 0 016-6z" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="9" cy="7.5" r="1.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5"/>
              </svg>
              <span style={{ ...linkStyle, color: "rgba(255,255,255,0.6)", lineHeight: "22px" }}>
                457 Palm Dr, Suite 200<br />Glendale, Los Angeles<br />California 91202
              </span>
            </div>

          </div>
        </div>
      </div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", margin: "0 96px" }} />

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: "1512px",
          margin: "0 auto",
          padding: "24px 96px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px",
        }}
      >
        <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>
          © 2026 Information Integration Group (IIG). All Rights Reserved.
        </span>
        <div style={{ display: "flex", gap: "24px" }}>
          {["Privacy Policy", "Terms of Use", "Cookie Policy", "Accessibility Statement"].map((l) => (
            <a key={l} href="#" style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "13px", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
