import { Phone, Mail, MessageSquare } from "lucide-react";
import { CWButton } from "@/components/coastal-wellness/button";
import { site } from "@/lib/coastal-wellness/site";

const steps = [
  {
    step: "01",
    title: "Reach out",
    body: `Call ${site.phone}, text ${site.text}, or schedule online through our client portal.`,
  },
  {
    step: "02",
    title: "Get matched",
    body: "We'll talk through what you're looking for and pair you with the right clinician and approach.",
  },
  {
    step: "03",
    title: "First session",
    body: "Meet at either Melbourne office or by telehealth, and start building a plan that fits your life.",
  },
];

export function CWCtaContact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-20 sm:px-10">
      <div
        className="cw-grain relative overflow-hidden rounded-[2rem] px-8 py-16 sm:px-14"
        style={{ background: "linear-gradient(150deg, var(--cw-teal-900), var(--cw-teal-600) 130%)" }}
      >
        <div className="relative">
          <div className="max-w-2xl">
            <p className="cw-font-body text-xs uppercase tracking-[0.2em]" style={{ color: "var(--cw-turquoise)" }}>
              Get Started
            </p>
            <h2 className="cw-font-display mt-4 text-3xl leading-[1.15] text-white sm:text-[2.6rem]">
              The hardest part is reaching out.{" "}
              <span className="italic">We&rsquo;ll take it from there.</span>
            </h2>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {steps.map((s) => (
              <div key={s.step}>
                <span className="cw-font-display text-3xl" style={{ color: "var(--cw-turquoise)" }}>
                  {s.step}
                </span>
                <h3 className="cw-font-display mt-2 text-xl text-white">{s.title}</h3>
                <p className="cw-font-body mt-2 text-sm leading-relaxed text-white/70">{s.body}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-3 border-t border-white/10 pt-8">
            <CWButton href={site.portal} external size="lg" variant="light">
              Schedule Today
            </CWButton>
            <CWButton href={site.phoneHref} variant="outline-light" size="lg">
              <Phone className="h-4 w-4" />
              {site.phone}
            </CWButton>
            <CWButton href={site.textHref} variant="outline-light" size="lg">
              <MessageSquare className="h-4 w-4" />
              Text {site.text}
            </CWButton>
            <a
              href={`mailto:${site.email}`}
              className="cw-font-body inline-flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4" />
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
