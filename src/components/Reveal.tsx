"use client";
import React, { useEffect, useRef, useState, ReactNode, CSSProperties } from "react";

type RevealVariant = "up" | "left" | "right" | "scale";

const variantClass: Record<RevealVariant, string> = {
  up: "reveal",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
};

interface RevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  className?: string;
  style?: CSSProperties;
  stagger?: boolean;
}

export default function Reveal({
  children,
  variant = "up",
  delay = 0,
  className = "",
  style = {},
  stagger = false,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const base = variantClass[variant];
  const staggerClass = stagger ? "reveal-stagger" : "";

  const cls = `${base} ${staggerClass} ${visible ? "visible" : ""} ${className}`.trim();
  const inlineStyle = { transitionDelay: delay ? `${delay}ms` : undefined, ...style };

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cls}
      style={inlineStyle}
    >
      {children}
    </div>
  );
}
