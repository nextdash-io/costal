import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk } from "next/font/google";
import "./globals.css";

// Stands in for the licensed brand faces (Helvetica Now Display / Ivar
// Display — see theme.css) until their font files are supplied.
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  weight: "variable",
  style: ["normal", "italic"],
});

export const viewport: Viewport = {
  themeColor: "#013126",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    default: "Coastal Wellness & Life Coaching Center | Melbourne, FL",
    template: "%s | Coastal Wellness",
  },
  description:
    "Professional counseling and life coaching in Melbourne, FL. Successfully treating anxiety, depression, trauma, PTSD and other life challenges. EMDR, child therapy and telehealth available.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`cw-root ${hanken.variable} cw-font-body min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
