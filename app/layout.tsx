import type { Metadata, Viewport } from "next";
import { Fraunces } from "next/font/google";
import "./globals.css";

// Loaded as a fallback for the brand display face (Ivar Display — see
// theme.css) until licensed font files are supplied.
const displayFallback = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces-fallback",
  weight: "variable",
  axes: ["opsz", "SOFT"],
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
      <body className={`cw-root ${displayFallback.variable} cw-font-body min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
