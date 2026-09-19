import { Star } from "lucide-react";

const badges = [
  "Best of Brevard — Mental Health Services",
  "5-Star Average Client Rating",
  "Veteran & First-Responder Friendly Certified",
  "Featured Local Practice, 2024",
  "15+ Years Serving Brevard County",
  "Top-Rated on Google Reviews",
];

export function CWAwards() {
  const doubled = [...badges, ...badges];

  return (
    <section
      className="overflow-hidden border-y py-8"
      style={{ borderColor: "var(--cw-line)", backgroundColor: "var(--cw-mist)" }}
    >
      <div className="cw-marquee flex w-max items-center gap-12">
        {doubled.map((badge, i) => (
          <div key={i} className="flex items-center gap-2.5 whitespace-nowrap">
            <Star className="h-4 w-4 shrink-0" style={{ color: "var(--cw-amber)" }} />
            <span className="text-sm font-semibold" style={{ color: "var(--cw-ink-soft)" }}>
              {badge}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
