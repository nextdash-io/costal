import { Check, ArrowUpRight } from "lucide-react";
import { CWButton } from "@/components/coastal-wellness/button";
import { site } from "@/lib/coastal-wellness/site";

const options = [
  {
    title: "CareCredit financing",
    body: "Apply for CareCredit to spread the cost of care over time.",
    href: site.careCredit,
  },
  {
    title: "E-Gift Cards",
    body: "Give the gift of counseling or life coaching to someone you love.",
    href: site.giftCard,
  },
];

const notes = [
  "By Appointment Only — call or text to get scheduled",
  "Telehealth sessions available",
  "Clear pricing published on our Pricing and Policies page",
  "Two Melbourne locations to choose from",
];

export function CWInsurance() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-20 sm:px-10">
      <div
        className="grid gap-12 rounded-[2rem] border p-8 sm:p-12 lg:grid-cols-2"
        style={{ borderColor: "var(--cw-line)", backgroundColor: "var(--cw-mist)" }}
      >
        <div>
          <p
            className="cw-font-body text-xs uppercase tracking-[0.2em]"
            style={{ color: "var(--cw-teal-600)" }}
          >
            Pricing and Policies
          </p>
          <h2
            className="cw-font-display mt-4 text-3xl leading-[1.15] sm:text-4xl"
            style={{ color: "var(--cw-ink)" }}
          >
            Straightforward about <span className="italic">what care costs.</span>
          </h2>
          <p
            className="cw-font-body mt-5 text-base leading-relaxed"
            style={{ color: "var(--cw-ink-soft)" }}
          >
            No surprises. Our rates and policies are published up front, and
            our team will walk you through your options before your first
            session.
          </p>

          <ul className="mt-7 space-y-3.5">
            {notes.map((note) => (
              <li key={note} className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: "var(--cw-teal-600)" }}
                >
                  <Check className="h-3 w-3 text-white" />
                </span>
                <span
                  className="cw-font-body text-sm leading-relaxed"
                  style={{ color: "var(--cw-ink-soft)" }}
                >
                  {note}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <CWButton href={site.portal} external size="md">
              Schedule Today
            </CWButton>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {options.map((option) => (
            <a
              key={option.title}
              href={option.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl bg-white p-6 transition-transform hover:-translate-y-0.5"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="cw-font-display text-xl" style={{ color: "var(--cw-ink)" }}>
                  {option.title}
                </h3>
                <ArrowUpRight
                  className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5"
                  style={{ color: "var(--cw-teal-600)" }}
                />
              </div>
              <p
                className="cw-font-body mt-2 text-sm leading-relaxed"
                style={{ color: "var(--cw-ink-soft)" }}
              >
                {option.body}
              </p>
            </a>
          ))}

          <div
            className="rounded-2xl p-6 text-white"
            style={{ background: "linear-gradient(150deg, var(--cw-teal-900), var(--cw-teal-600) 130%)" }}
          >
            <h3 className="cw-font-display text-xl">Supervision & Consultation</h3>
            <p className="cw-font-body mt-2 text-sm leading-relaxed text-white/75">
              Clinical supervision, consultation, and EMDR consultation toward
              certification for fellow clinicians.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
