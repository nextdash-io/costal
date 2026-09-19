"use client";

import { useState } from "react";
import { serviceCategories } from "@/lib/coastal-wellness/services-data";

const accents = ["var(--cw-teal-600)", "var(--cw-coral)", "var(--cw-amber)", "var(--cw-plum)"];

export function ServicesDirectory() {
  const [activeId, setActiveId] = useState(serviceCategories[0].id);
  const active = serviceCategories.find((c) => c.id === activeId)!;

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2.5">
        {serviceCategories.map((cat) => {
          const isActive = cat.id === activeId;
          return (
            <button
              key={cat.id}
              id={cat.id}
              onClick={() => setActiveId(cat.id)}
              className="scroll-mt-24 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors"
              style={
                isActive
                  ? { backgroundColor: "var(--cw-teal-700)", borderColor: "var(--cw-teal-700)", color: "#fff" }
                  : { borderColor: "var(--cw-line)", color: "var(--cw-ink-soft)" }
              }
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      <div className="mt-14 text-center">
        <h2 className="cw-font-display text-3xl sm:text-4xl" style={{ color: "var(--cw-ink)" }}>
          {active.heading}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed" style={{ color: "var(--cw-ink-soft)" }}>
          {active.intro}
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {active.items.map((item, i) => {
          const Icon = item.icon;
          const accent = accents[i % accents.length];
          return (
            <div
              key={item.title}
              className="rounded-3xl border bg-white p-6 transition-transform duration-300 hover:-translate-y-1"
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
    </div>
  );
}
