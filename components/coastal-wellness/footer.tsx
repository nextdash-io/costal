import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin } from "lucide-react";
import { CoastalLogo } from "@/components/coastal-wellness/logo";

const columns = [
  {
    heading: "Explore",
    links: [
      { label: "Meet Our Team", href: "/team" },
      { label: "Services & Specialties", href: "/services" },
      { label: "Locations & Telehealth", href: "/#locations" },
      { label: "Insurance & Payment", href: "/#insurance" },
    ],
  },
  {
    heading: "Who We Help",
    links: [
      { label: "Children & Teens", href: "/services#who-we-help" },
      { label: "Adults", href: "/services#who-we-help" },
      { label: "Couples & Families", href: "/services#who-we-help" },
      { label: "Veterans & First Responders", href: "/services#who-we-help" },
    ],
  },
];

export function CWFooter() {
  return (
    <footer
      className="cw-grain relative overflow-hidden"
      style={{ backgroundColor: "var(--cw-teal-900)", color: "rgba(255,255,255,0.85)" }}
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <CoastalLogo light />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              A Brevard County group practice of 17 licensed clinicians —
              trauma-informed therapy for individuals, couples and families,
              in person or by telehealth.
            </p>
            <div className="mt-6 flex items-center gap-4">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
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
                      className="text-sm text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="cw-font-display text-lg text-white">Get in Touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2.5">
                <Phone className="mt-0.5 h-4 w-4 shrink-0" />
                <a href="tel:+13215551234" className="hover:text-white">(321) 555-1234</a>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="mt-0.5 h-4 w-4 shrink-0" />
                <a href="mailto:hello@coastalwellness.net" className="hover:text-white">
                  hello@coastalwellness.net
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
                <span>Melbourne &amp; Rockledge, FL · Telehealth statewide</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/50 sm:flex-row">
          <p>&copy; {new Date().getFullYear()} Coastal Wellness. All rights reserved.</p>
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
