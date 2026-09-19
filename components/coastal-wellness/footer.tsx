import Link from "next/link";
import { Phone, Mail, MapPin, MessageSquare, Instagram, Facebook, Gift } from "lucide-react";
import { CoastalLogo } from "@/components/coastal-wellness/logo";
import { locations, site } from "@/lib/coastal-wellness/site";

const columns = [
  {
    heading: "Explore",
    links: [
      { label: "Meet Our Team", href: "/team" },
      { label: "Types of Therapy", href: "/services" },
      { label: "Pricing and Policies", href: "/#pricing" },
      { label: "Locations & Telehealth", href: "/#locations" },
    ],
  },
  {
    heading: "Therapies",
    links: [
      { label: "What Is EMDR?", href: "/services#emdr" },
      { label: "Child Therapy", href: "/services#child-therapy" },
      { label: "Vibroacoustic Therapy", href: "/services#vibroacoustic-therapy" },
      { label: "Virtual Reality Exposure", href: "/services#virtual-reality-exposure-therapy" },
    ],
  },
];

export function CWFooter() {
  return (
    <footer
      className="cw-grain relative overflow-hidden"
      style={{ backgroundColor: "var(--cw-teal-900)", color: "rgba(255,255,255,0.85)" }}
    >
      <div className="border-b border-white/10">
        <a
          href={site.giftCard}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-6 py-5 text-center"
        >
          <Gift className="h-4 w-4 shrink-0" style={{ color: "var(--cw-turquoise)" }} />
          <span className="cw-font-body text-sm text-white/80">
            Give the gift of counseling or life coaching.{" "}
            <span className="underline underline-offset-4">Purchase an E-Gift Card here.</span>
          </span>
        </a>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-16 sm:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr]">
          <div>
            <CoastalLogo light />
            <p className="cw-font-body mt-5 max-w-xs text-sm leading-relaxed text-white/65">
              {site.tagline}
            </p>
            <p className="cw-font-body mt-3 max-w-xs text-sm leading-relaxed text-white/50">
              {site.subhead} in Melbourne, Florida.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {[
                { Icon: Facebook, href: site.facebook, label: "Facebook" },
                { Icon: Instagram, href: site.instagram, label: "Instagram" },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:bg-white/10"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="cw-font-display text-lg text-white">{col.heading}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="cw-font-body text-sm text-white/65 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="cw-font-display text-lg text-white">Contact Us</h3>
            <ul className="cw-font-body mt-4 space-y-3 text-sm text-white/65">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <a href={site.phoneHref} className="hover:text-white">{site.phone}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageSquare className="mt-0.5 h-4 w-4 shrink-0" />
                <a href={site.textHref} className="hover:text-white">Text {site.text}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <a href={`mailto:${site.email}`} className="hover:text-white">{site.email}</a>
              </li>
              {locations.map((office) => (
                <li key={office.name} className="flex items-start gap-2.5">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>
                    {office.address1} {office.address2}
                    <br />
                    {office.city}
                  </span>
                </li>
              ))}
              <li className="pt-1 text-white/50">{site.hours}</li>
            </ul>
          </div>
        </div>

        <div className="cw-font-body mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/45 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {site.name}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white/80">Privacy Policy</Link>
            <Link href="#" className="hover:text-white/80">Accessibility</Link>
            <Link href="#" className="hover:text-white/80">Notice of Privacy Practices</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
