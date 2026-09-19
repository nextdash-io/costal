import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CWButton } from "@/components/coastal-wellness/button";
import { clinicians } from "@/lib/coastal-wellness/team-data";
import { unsplash } from "@/lib/coastal-wellness/photos";

export function CWTeamPreview() {
  const featured = clinicians.slice(0, 6);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-xl">
          <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "var(--cw-coral)" }}>
            Meet Our Team
          </span>
          <h2 className="cw-font-display mt-3 text-4xl sm:text-5xl" style={{ color: "var(--cw-ink)" }}>
            17 clinicians. One shared standard of care.
          </h2>
        </div>
        <CWButton href="/team" variant="outline" size="md" className="shrink-0">
          Meet the Full Team
          <ArrowUpRight className="h-4 w-4" />
        </CWButton>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((c) => (
          <div
            key={c.id}
            className="flex items-center gap-4 rounded-3xl border bg-white p-5"
            style={{ borderColor: "var(--cw-line)" }}
          >
            <Image
              src={unsplash(c.photo, "w=160&q=75&auto=format&fit=crop")}
              alt={c.name}
              width={64}
              height={64}
              unoptimized
              className="h-16 w-16 shrink-0 rounded-2xl object-cover"
            />
            <div className="min-w-0">
              <p className="cw-font-display truncate text-lg" style={{ color: "var(--cw-ink)" }}>
                {c.name}
              </p>
              <p className="text-xs font-medium" style={{ color: "var(--cw-teal-700)" }}>
                {c.credentials}
              </p>
              <p className="mt-1 truncate text-xs" style={{ color: "var(--cw-ink-soft)" }}>
                {c.specialties[0]}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
