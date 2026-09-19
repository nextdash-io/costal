import type { Metadata, Viewport } from "next";
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-cw-display",
  weight: "variable",
  axes: ["opsz", "SOFT"],
  style: ["normal", "italic"],
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-cw-body",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#0a3634",
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
      <body className={`cw-root ${display.variable} ${body.variable} cw-font-body min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
