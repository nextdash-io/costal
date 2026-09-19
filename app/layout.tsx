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
    default: "Coastal Wellness | Therapy & Life Coaching in Brevard County, FL",
    template: "%s | Coastal Wellness",
  },
  description:
    "Coastal Wellness is a Brevard County group practice of 17 licensed clinicians providing therapy for children, teens, adults, couples and families — in person at two locations or by telehealth.",
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
