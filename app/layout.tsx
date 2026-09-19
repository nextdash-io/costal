import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";

// Primary face — stands in for Helvetica Now Display (see theme.css) until
// the licensed files are supplied.
const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  weight: "variable",
  style: ["normal", "italic"],
});

// Secondary face: the italic serif that carries the second half of each
// display heading. Stands in for Ivar Display.
const instrument = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: "400",
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
      <body
        className={`cw-root ${hanken.variable} ${instrument.variable} cw-font-body min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
