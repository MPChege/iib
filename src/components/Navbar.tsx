"use client";
import { useState } from "react";
import Image from "next/image";

const navLinks = ["Solutions", "About", "Webinars", "Success Stories", "Blog", "Contact Us"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full absolute top-0 left-0 right-0 z-50">
      {/* Top bar — full width, 48px tall, #131A28 at 24% opacity */}
      <div
        className="w-full flex items-center justify-between"
        style={{
          height: "48px",
          backgroundColor: "rgba(19, 26, 40, 0.24)",
          paddingLeft: "96px",
          paddingRight: "96px",
        }}
      >
        <span
          style={{
            width: "105px",
            height: "17px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "100%",
            letterSpacing: "0",
            color: "#FFFFFF",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          (818) 956-3744
        </span>

        <span
          style={{
            width: "141px",
            height: "17px",
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "100%",
            letterSpacing: "0",
            color: "#FFFFFF",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          info@iigservices.com
        </span>
      </div>

      {/* Navbar pill — 1320px wide, 65px tall, positioned 72px from top, 96px from left */}
      <div
        className="hidden md:flex"
        style={{ paddingLeft: "96px", paddingRight: "96px", marginTop: "8px" }}
      >
        <div
          className="flex items-center"
          style={{
            width: "100%",
            maxWidth: "1320px",
            height: "65px",
            borderRadius: "100px",
            paddingTop: "12px",
            paddingRight: "12px",
            paddingBottom: "12px",
            paddingLeft: "24px",
            gap: "10px",
            backgroundColor: "#FFFFFF",
          }}
        >
          {/* Logo */}
          <Image
            src="/image 1.svg"
            alt="IIG Logo"
            width={92}
            height={36}
            priority
            style={{ flexShrink: 0 }}
          />

          {/* Nav links — left-aligned, tight to logo */}
          <nav className="flex items-center gap-7" style={{ marginLeft: "24px" }}>
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "14px",
                  lineHeight: "100%",
                  letterSpacing: "0",
                  color: "#0072B1",
                  textDecoration: "none",
                  whiteSpace: "nowrap",
                }}
              >
                {link}
              </a>
            ))}
          </nav>

          {/* Spacer pushes button to the right */}
          <div style={{ flex: 1 }} />

          {/* Partner Portal button */}
          <a
            href="#"
            style={{
              display: "inline-flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              height: "41px",
              borderRadius: "100px",
              paddingTop: "12px",
              paddingRight: "24px",
              paddingBottom: "12px",
              paddingLeft: "24px",
              gap: "10px",
              backgroundColor: "#0072B1",
              border: "1px solid #0072B1",
              textDecoration: "none",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                width: "95px",
                height: "17px",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "14px",
                lineHeight: "100%",
                letterSpacing: "0",
                textAlign: "center",
                color: "#FFFFFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              Partner Portal
            </span>
          </a>
        </div>
      </div>

      {/* Mobile nav bar */}
      <div
        className="md:hidden flex items-center justify-between px-6 py-3"
        style={{ backgroundColor: "rgba(255,255,255,0.95)" }}
      >
        <Image src="/image 1.svg" alt="IIG Logo" width={92} height={36} priority />
        <button
          className="p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="#131A28" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div
          className="md:hidden flex flex-col gap-3 px-6 py-4"
          style={{ backgroundColor: "#FFFFFF" }}
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                color: "#131A28",
                textDecoration: "none",
              }}
            >
              {link}
            </a>
          ))}
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              height: "41px",
              borderRadius: "100px",
              padding: "12px 24px",
              backgroundColor: "#0072B1",
              border: "1px solid #0072B1",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              color: "#FFFFFF",
              textDecoration: "none",
              marginTop: "8px",
            }}
          >
            Partner Portal
          </a>
        </div>
      )}
    </header>
  );
}
