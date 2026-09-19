import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { CWButton } from "@/components/coastal-wellness/button";
import { clinicians } from "@/lib/coastal-wellness/team-data";
import { unsplash } from "@/lib/coastal-wellness/photos";

export function CWTeamPreview() {
  const featured = clinicians.slice(0, 6);

  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <div className="max-w-xl">
          <p
            className="cw-font-body text-xs uppercase tracking-[0.2em]"
            style={{ color: "var(--cw-teal-600)" }}
          >
            Meet Our Team
          </p>
          <h2
            className="cw-font-display mt-4 text-3xl leading-[1.15] sm:text-4xl"
            style={{ color: "var(--cw-ink)" }}
          >
            {clinicians.length} clinicians.{" "}
            <span className="italic">One shared standard of care.</span>
          </h2>
        </div>
        <CWButton href="/team" variant="outline" className="shrink-0">
          Meet the Full Team
          <ArrowUpRight className="h-4 w-4" />
        </CWButton>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((c) => (
          <a
            key={c.id}
            href="/team"
            className="group flex items-center gap-4 rounded-2xl border bg-white p-4 transition-shadow duration-300 hover:shadow-[0_18px_40px_-26px_rgba(1,49,38,0.45)]"
            style={{ borderColor: "var(--cw-line)" }}
          >
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
              <Image
                src={unsplash(c.photo, "w=200&q=80&auto=format&fit=crop&crop=faces")}
                alt={c.name}
                fill
                unoptimized
                sizes="64px"
                className="object-cover object-top"
              />
            </div>
            <div className="min-w-0">
              <p
                className="cw-font-display truncate text-lg leading-tight"
                style={{ color: "var(--cw-ink)" }}
              >
                {c.name}
              </p>
              <p
                className="cw-font-body mt-0.5 truncate text-xs"
                style={{ color: "var(--cw-teal-700)" }}
              >
                {c.credentials}
              </p>
              <p
                className="cw-font-body mt-1 truncate text-xs"
                style={{ color: "var(--cw-ink-soft)" }}
              >
                {c.focus[0]}
              </p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
