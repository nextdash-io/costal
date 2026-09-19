"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { therapyCards } from "@/lib/coastal-wellness/site";
import { unsplash } from "@/lib/coastal-wellness/photos";

const dotColors = [
  "var(--cw-turquoise)",
  "var(--cw-coral)",
  "var(--cw-amber)",
  "var(--cw-turquoise-soft)",
  "#b9a7d6",
];

export function CWTherapyCards() {
  const [active, setActive] = useState(0);

  return (
    <section
      id="therapies"
      className="scroll-mt-28 py-20 sm:py-24"
      style={{ backgroundColor: "var(--cw-teal-900)" }}
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="cw-font-display text-4xl leading-[1.12] text-white sm:text-5xl">
            Therapy that&rsquo;s personal{" "}
            <span className="italic">and proven</span>
          </h2>
          <p className="cw-font-body mt-5 text-base text-white/70 sm:text-lg">
            Advanced, evidence-based approaches — not just talk therapy.
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-3 lg:h-[520px] lg:flex-row">
          {therapyCards.map((card, i) => {
            const isActive = i === active;
            return (
              <button
                key={card.slug}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                aria-expanded={isActive}
                className={cn(
                  "group relative overflow-hidden rounded-xl text-left transition-all duration-500 ease-out",
                  "h-64 lg:h-full",
                  isActive ? "lg:flex-[3.4]" : "lg:flex-[1.25]"
                )}
              >
                <Image
                  src={unsplash(card.photo, "w=1000&q=80&auto=format&fit=crop")}
                  alt=""
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(0deg, rgba(1,49,38,0.92) 0%, rgba(1,49,38,0.5) 40%, rgba(1,49,38,0.25) 100%)",
                  }}
                />

                <span
                  className="absolute left-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-white/15 backdrop-blur-sm"
                  aria-hidden
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: dotColors[i % dotColors.length] }}
                  />
                </span>

                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                  <p className="cw-font-body text-[0.7rem] uppercase tracking-widest text-white/60">
                    {card.kicker}
                  </p>
                  <h3
                    className={cn(
                      "cw-font-display mt-1.5 hyphens-auto break-words leading-tight text-white transition-all duration-500",
                      isActive ? "text-2xl sm:text-3xl" : "text-lg sm:text-xl"
                    )}
                  >
                    {card.title}
                  </h3>

                  <div
                    className={cn(
                      "overflow-hidden transition-all duration-500",
                      isActive ? "max-h-52 opacity-100" : "max-h-0 opacity-0 lg:max-h-0"
                    )}
                  >
                    <p className="cw-font-body mt-3 max-w-sm text-sm leading-relaxed text-white/80">
                      {card.body}
                    </p>
                    <span
                      className="mt-5 inline-flex h-10 items-center rounded-lg px-4 text-sm font-medium"
                      style={{ backgroundColor: "var(--cw-teal-500)", color: "#fff" }}
                    >
                      Learn more
                    </span>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="cw-font-body text-sm text-white/70 underline underline-offset-4 transition-colors hover:text-white"
          >
            View all types of therapy
          </Link>
        </div>
      </div>
    </section>
  );
}
