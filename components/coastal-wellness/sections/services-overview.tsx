import { ArrowUpRight } from "lucide-react";
import { CWButton } from "@/components/coastal-wellness/button";
import { serviceCategories } from "@/lib/coastal-wellness/services-data";

const accents = ["var(--cw-teal-600)", "var(--cw-coral)", "var(--cw-amber)", "var(--cw-teal-500)"];

export function CWServicesOverview() {
  const concerns = serviceCategories.find((c) => c.id === "concerns")!;
  const featured = concerns.items.slice(0, 8);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-xl">
          <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "var(--cw-coral)" }}>
            Services
          </span>
          <h2 className="cw-font-display mt-3 text-4xl sm:text-5xl" style={{ color: "var(--cw-ink)" }}>
            {concerns.heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--cw-ink-soft)" }}>
            {concerns.intro}
          </p>
        </div>
        <CWButton href="/services" variant="outline" size="md" className="shrink-0">
          View All Services
          <ArrowUpRight className="h-4 w-4" />
        </CWButton>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((item, i) => {
          const Icon = item.icon;
          const accent = accents[i % accents.length];
          return (
            <div
              key={item.title}
              className="group rounded-3xl border bg-white p-6 transition-transform duration-300 hover:-translate-y-1.5"
              style={{ borderColor: "var(--cw-line)" }}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{ backgroundColor: `color-mix(in srgb, ${accent} 14%, white)` }}
              >
                <Icon className="h-6 w-6" style={{ color: accent }} />
              </div>
              <h3 className="cw-font-display mt-5 text-lg" style={{ color: "var(--cw-ink)" }}>
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: "var(--cw-ink-soft)" }}>
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
