import { Phone, Mail, ArrowUpRight } from "lucide-react";
import { CWButton } from "@/components/coastal-wellness/button";

const steps = [
  { step: "01", title: "Reach out", body: "Call, email, or send a request — a real person responds within one business day." },
  { step: "02", title: "Free consult", body: "A brief call to understand what you need and match you with the right clinician." },
  { step: "03", title: "First session", body: "Meet in person or by telehealth and start building a plan that actually fits your life." },
];

export function CWCtaContact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div
        className="cw-grain relative overflow-hidden rounded-[2.5rem] px-8 py-16 sm:px-14"
        style={{ background: "linear-gradient(150deg, var(--cw-teal-900), var(--cw-teal-600) 130%)" }}
      >
        <div
          className="cw-blob cw-float-slow absolute -right-20 -top-20 h-72 w-72"
          style={{ background: "var(--cw-coral)", opacity: 0.3 }}
        />
        <div className="relative">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--cw-turquoise)" }}>
              Get Started
            </span>
            <h2 className="cw-font-display mt-3 text-4xl text-white sm:text-5xl">
              The hardest part is reaching out. We&rsquo;ll take it from there.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {steps.map((s) => (
              <div key={s.step}>
                <span className="cw-font-display text-3xl" style={{ color: "var(--cw-turquoise)" }}>
                  {s.step}
                </span>
                <h3 className="cw-font-display mt-2 text-xl text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-white/10 pt-8">
            <CWButton href="tel:+13215551234" size="lg">
              <Phone className="h-4 w-4" />
              (321) 555-1234
            </CWButton>
            <CWButton href="mailto:hello@coastalwellness.net" variant="outline-light" size="lg">
              <Mail className="h-4 w-4" />
              hello@coastalwellness.net
            </CWButton>
            <span className="ml-auto inline-flex items-center gap-1.5 text-sm font-semibold text-white/70">
              or explore our clinicians
              <a href="/team" className="inline-flex items-center gap-1 text-white hover:underline">
                Meet the Team <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
