"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
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

export function CWNavbar({ overlay = false }: { overlay?: boolean }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(!overlay);

  useEffect(() => {
    if (!overlay) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  const solid = !overlay || scrolled;
  const linkColor = solid ? "var(--cw-ink-soft)" : "rgba(255,255,255,0.92)";

  return (
    <header
      className={cn(
        "top-0 z-50 w-full transition-colors duration-300",
        overlay ? "fixed" : "sticky",
        solid ? "border-b backdrop-blur-xl" : "border-b border-transparent"
      )}
      style={{
        borderColor: solid ? "var(--cw-line)" : "transparent",
        backgroundColor: solid ? "rgba(251,253,253,0.9)" : "transparent",
      }}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center">
          <CoastalLogo light={!solid} />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[0.925rem] font-medium transition-colors"
              style={{ color: linkColor }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="tel:+13215551234"
            className="flex items-center gap-2 text-sm font-semibold"
            style={{ color: solid ? "var(--cw-teal-700)" : "#fff" }}
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
          style={{ color: solid ? "var(--cw-ink)" : "#fff" }}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <div
        className={cn(
          "overflow-hidden border-t transition-all duration-300 lg:hidden",
          open ? "max-h-96" : "max-h-0 border-t-0",
          solid ? "" : "bg-[#013126]/95 backdrop-blur-xl"
        )}
        style={{ borderColor: solid ? "var(--cw-line)" : "transparent" }}
      >
        <div className="space-y-1 px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium"
              style={{ color: solid ? "var(--cw-ink-soft)" : "#fff" }}
            >
              {link.label}
            </Link>
          ))}
          <div
            className="mt-4 flex flex-col gap-3 border-t pt-4"
            style={{ borderColor: solid ? "var(--cw-line)" : "rgba(255,255,255,0.2)" }}
          >
            <a
              href="tel:+13215551234"
              className="flex items-center justify-center gap-2 text-sm font-semibold"
              style={{ color: solid ? "var(--cw-teal-700)" : "#fff" }}
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
