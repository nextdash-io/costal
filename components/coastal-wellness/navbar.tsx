"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { CoastalLogo } from "@/components/coastal-wellness/logo";
import { CWButton } from "@/components/coastal-wellness/button";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/team", label: "Our Team" },
  { href: "/#locations", label: "Locations" },
  { href: "/#insurance", label: "Insurance" },
];

export function CWNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 w-full border-b backdrop-blur-xl"
      style={{ borderColor: "var(--cw-line)", backgroundColor: "rgba(251,250,247,0.85)" }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <CoastalLogo />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.925rem] font-medium transition-colors"
              style={{ color: "var(--cw-ink-soft)" }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:+13215551234"
            className="flex items-center gap-2 text-sm font-semibold"
            style={{ color: "var(--cw-teal-700)" }}
          >
            <Phone className="h-4 w-4" />
            (321) 555-1234
          </a>
          <CWButton href="/#contact" size="md">
            Request an Appointment
          </CWButton>
        </div>

        <button
          className="p-2 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{ color: "var(--cw-ink)" }}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t transition-all duration-300 lg:hidden",
          open ? "max-h-96" : "max-h-0 border-t-0"
        )}
        style={{ borderColor: "var(--cw-line)" }}
      >
        <div className="space-y-1 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium"
              style={{ color: "var(--cw-ink-soft)" }}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-3 border-t pt-4" style={{ borderColor: "var(--cw-line)" }}>
            <a
              href="tel:+13215551234"
              className="flex items-center justify-center gap-2 text-sm font-semibold"
              style={{ color: "var(--cw-teal-700)" }}
            >
              <Phone className="h-4 w-4" />
              (321) 555-1234
            </a>
            <CWButton href="/#contact" size="md" className="w-full">
              Request an Appointment
            </CWButton>
          </div>
        </div>
      </div>
    </header>
  );
}
