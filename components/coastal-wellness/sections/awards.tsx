import { Award } from "lucide-react";
import { awards } from "@/lib/coastal-wellness/site";

export function CWAwards() {
  const doubled = [...awards, ...awards];

  return (
    <section
      className="overflow-hidden border-y py-7"
      style={{ borderColor: "var(--cw-line)", backgroundColor: "var(--cw-mist)" }}
    >
      <div className="cw-marquee flex w-max items-center gap-12">
        {doubled.map((badge, i) => (
          <div key={i} className="flex items-center gap-2.5 whitespace-nowrap">
            <Award className="h-4 w-4 shrink-0" style={{ color: "var(--cw-teal-600)" }} />
            <span className="cw-font-body text-sm" style={{ color: "var(--cw-ink-soft)" }}>
              {badge}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
