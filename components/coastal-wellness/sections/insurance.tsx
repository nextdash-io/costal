import { Check } from "lucide-react";

const insurers = [
  "Aetna",
  "Cigna",
  "United Healthcare",
  "Blue Cross Blue Shield",
  "TRICARE",
  "Optum",
];

const paymentNotes = [
  "Private pay & sliding-scale options available",
  "HSA / FSA cards accepted",
  "Out-of-network superbills provided on request",
  "Free 15-minute consultation before your first session",
];

export function CWInsurance() {
  return (
    <section id="insurance" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid gap-12 rounded-[2.5rem] border p-8 sm:p-12 lg:grid-cols-2" style={{ borderColor: "var(--cw-line)", backgroundColor: "var(--cw-mist)" }}>
        <div>
          <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "var(--cw-coral)" }}>
            Insurance & Payment
          </span>
          <h2 className="cw-font-display mt-3 text-3xl sm:text-4xl" style={{ color: "var(--cw-ink)" }}>
            Care shouldn&rsquo;t come with a spreadsheet.
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--cw-ink-soft)" }}>
            We&rsquo;re in-network with most major insurers and our front-desk team
            will verify your benefits before your first visit — so you know
            what to expect.
          </p>
          <div className="mt-6 flex flex-wrap gap-2.5">
            {insurers.map((name) => (
              <span
                key={name}
                className="rounded-full border bg-white px-4 py-2 text-sm font-medium"
                style={{ borderColor: "var(--cw-line)", color: "var(--cw-ink)" }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="cw-font-display text-xl" style={{ color: "var(--cw-ink)" }}>
            Also available
          </p>
          <ul className="mt-5 space-y-4">
            {paymentNotes.map((note) => (
              <li key={note} className="flex items-start gap-3">
                <span
                  className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                  style={{ backgroundColor: "var(--cw-teal-600)" }}
                >
                  <Check className="h-3.5 w-3.5 text-white" />
                </span>
                <span className="text-sm leading-relaxed" style={{ color: "var(--cw-ink-soft)" }}>
                  {note}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
