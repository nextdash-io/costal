import { treats } from "@/lib/coastal-wellness/site";

export function CWWhoWeServe() {
  return (
    <section className="mx-auto max-w-6xl px-6 pb-16 sm:px-10">
      <div className="flex flex-col items-start gap-6 lg:flex-row lg:items-center lg:gap-12">
        <p
          className="cw-font-body shrink-0 text-xs uppercase tracking-[0.2em]"
          style={{ color: "var(--cw-teal-600)" }}
        >
          What We Treat
        </p>
        <div className="flex flex-wrap gap-2.5">
          {treats.map((item) => (
            <span
              key={item}
              className="cw-font-body rounded-full border px-4 py-2 text-sm"
              style={{ borderColor: "var(--cw-line)", color: "var(--cw-ink-soft)" }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
