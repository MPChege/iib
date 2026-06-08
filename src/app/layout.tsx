import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IIG – Run your entire rental operation from one intelligent platform",
  description: "From quotes and inventory to dispatch, billing, CRM, field service, and financials—AcuRental gives rental businesses complete visibility and control on the Acumatica Cloud ERP platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
