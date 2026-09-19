"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { CoastalLogo } from "@/components/coastal-wellness/logo";
import { CWButton } from "@/components/coastal-wellness/button";
import { navLinks, site } from "@/lib/coastal-wellness/site";

export function CWNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3 sm:top-4 sm:px-4">
      <div className="mx-auto max-w-6xl rounded-2xl bg-white shadow-[0_8px_30px_-12px_rgba(1,49,38,0.18)]">
        <div className="flex h-18 items-center justify-between gap-5 px-5 sm:px-7">
          <Link href="/" className="flex shrink-0 items-center">
            <CoastalLogo />
          </Link>

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[0.875rem] whitespace-nowrap transition-opacity hover:opacity-60"
                style={{ color: "var(--cw-ink)" }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 lg:flex">
            <CWButton href={site.phoneHref} variant="outline" size="md">
              <Phone className="h-4 w-4" />
              {site.phone}
            </CWButton>
            <CWButton href={site.portal} external size="md">
              Schedule Today
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
            "overflow-hidden transition-all duration-300 lg:hidden",
            open ? "max-h-[32rem]" : "max-h-0"
          )}
        >
          <div className="space-y-1 border-t px-4 py-4" style={{ borderColor: "var(--cw-line)" }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2.5 text-sm"
                style={{ color: "var(--cw-ink)" }}
              >
                {link.label}
              </Link>
            ))}
            <div
              className="mt-4 flex flex-col gap-3 border-t pt-4"
              style={{ borderColor: "var(--cw-line)" }}
            >
              <CWButton href={site.phoneHref} variant="outline" size="md" className="w-full">
                <Phone className="h-4 w-4" />
                {site.phone}
              </CWButton>
              <CWButton href={site.portal} external size="md" className="w-full">
                Schedule Today
              </CWButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
