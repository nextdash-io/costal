"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ChevronDown, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import { clinicians, type Population } from "@/lib/coastal-wellness/team-data";
import { unsplash } from "@/lib/coastal-wellness/photos";

const filters: Array<Population | "All"> = [
  "All",
  "Children",
  "Teens",
  "Adults",
  "Couples",
  "Families",
  "Veterans & First Responders",
];

export function TeamDirectory() {
  const [active, setActive] = useState<Population | "All">("All");
  const [openId, setOpenId] = useState<string | null>(null);

  const filtered = useMemo(
    () =>
      active === "All"
        ? clinicians
        : clinicians.filter((c) => c.populations.includes(active)),
    [active]
  );

  return (
    <div>
      <div className="flex flex-wrap gap-2.5">
        {filters.map((f) => {
          const isActive = f === active;
          return (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="rounded-full border px-4 py-2 text-sm font-medium transition-colors"
              style={
                isActive
                  ? { backgroundColor: "var(--cw-teal-700)", borderColor: "var(--cw-teal-700)", color: "#fff" }
                  : { borderColor: "var(--cw-line)", color: "var(--cw-ink-soft)" }
              }
            >
              {f}
            </button>
          );
        })}
      </div>

      <p className="mt-5 text-sm" style={{ color: "var(--cw-ink-soft)" }}>
        Showing {filtered.length} of {clinicians.length} clinicians
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((c) => {
          const isOpen = openId === c.id;
          return (
            <div
              key={c.id}
              className="rounded-3xl border bg-white p-6 transition-shadow hover:shadow-lg"
              style={{ borderColor: "var(--cw-line)" }}
            >
              <div className="flex items-start gap-4">
                <Image
                  src={unsplash(c.photo, "w=200&q=75&auto=format&fit=crop")}
                  alt={c.name}
                  width={72}
                  height={72}
                  unoptimized
                  className="h-[72px] w-[72px] shrink-0 rounded-2xl object-cover"
                />
                <div className="min-w-0">
                  <h3 className="cw-font-display text-lg leading-tight" style={{ color: "var(--cw-ink)" }}>
                    {c.name}
                  </h3>
                  <p className="mt-0.5 text-xs font-medium" style={{ color: "var(--cw-teal-700)" }}>
                    {c.credentials}
                  </p>
                  <p className="mt-1.5 flex items-center gap-1 text-xs" style={{ color: "var(--cw-ink-soft)" }}>
                    <MapPin className="h-3 w-3" />
                    {c.location}
                  </p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {c.specialties.slice(0, 2).map((s) => (
                  <span
                    key={s}
                    className="rounded-full px-2.5 py-1 text-[0.7rem] font-medium"
                    style={{ backgroundColor: "var(--cw-mist)", color: "var(--cw-teal-700)" }}
                  >
                    {s}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setOpenId(isOpen ? null : c.id)}
                className="mt-4 flex w-full items-center justify-between border-t pt-3 text-sm font-medium"
                style={{ borderColor: "var(--cw-line)", color: "var(--cw-coral)" }}
              >
                {isOpen ? "Hide bio" : "Read bio"}
                <ChevronDown className={cn("h-4 w-4 transition-transform", isOpen && "rotate-180")} />
              </button>

              {isOpen && (
                <div className="mt-3 space-y-3">
                  <p className="text-sm leading-relaxed" style={{ color: "var(--cw-ink-soft)" }}>
                    {c.bio}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {c.specialties.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border px-2.5 py-1 text-[0.7rem] font-medium"
                        style={{ borderColor: "var(--cw-line)", color: "var(--cw-ink-soft)" }}
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
