"use client";
import { useState } from "react";
import Image from "next/image";

const navLinks = ["Solutions", "About", "Webinars", "Success Stories", "Blog", "Contact Us"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="w-full sticky top-0 z-50">
      {/* Top bar — always dark transparent, independent of scroll */}
      <div
        className="w-full flex items-center justify-between"
        style={{
          height: "40px",
          backgroundColor: "rgba(10, 23, 48, 0.95)",
          paddingLeft: "96px",
          paddingRight: "96px",
        }}
      >
        <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "14px", color: "#FFFFFF" }}>
          (818) 956-3744
        </span>
        <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "14px", color: "#FFFFFF" }}>
          info@iigservices.com
        </span>
      </div>

      {/* Pill row — transparent, no background */}
      <div
        className="hidden md:flex"
        style={{
          paddingLeft: "96px",
          paddingRight: "96px",
          paddingTop: "10px",
          paddingBottom: "10px",
          background: "transparent",
        }}
      >
        <div
          className="flex items-center"
          style={{
            width: "100%",
            maxWidth: "1320px",
            height: "56px",
            borderRadius: "100px",
            paddingTop: "8px",
            paddingRight: "8px",
            paddingBottom: "8px",
            paddingLeft: "20px",
            gap: "10px",
            backgroundColor: "#FFFFFF",
            boxShadow: "0 2px 20px rgba(0,0,0,0.1)",
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

          {/* Spacer */}
          <div style={{ flex: 1 }} />

          {/* Nav links */}
          <nav className="flex items-center gap-7">
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

          {/* Partner Portal button */}
          <a
            href="#"
            style={{
              display: "inline-flex",
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
              marginLeft: "16px",
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "14px",
              color: "#FFFFFF",
            }}
          >
            Partner Portal
          </a>
        </div>
      </div>

      {/* Mobile nav */}
      <div
        className="md:hidden flex items-center justify-between px-6 py-3"
        style={{
          backgroundColor: "rgba(13, 43, 110, 0.92)",
          backdropFilter: "blur(16px)",
        }}
      >
        <Image src="/image 1.svg" alt="IIG Logo" width={92} height={36} priority />
        <button
          className="p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="#FFFFFF" viewBox="0 0 24 24">
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {mobileOpen && (
        <div
          className="md:hidden flex flex-col gap-3 px-6 py-4"
          style={{ backgroundColor: "rgba(13, 43, 110, 0.98)", backdropFilter: "blur(16px)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 500,
                fontSize: "14px",
                color: "#FFFFFF",
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
