"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  CalendarDays,
  ChevronDown,
  Globe,
  MapPin,
  ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  clinicians,
  officeStaff,
  type Clinician,
  type Population,
} from "@/lib/coastal-wellness/team-data";
import { unsplash } from "@/lib/coastal-wellness/photos";
import { CWButton } from "@/components/coastal-wellness/button";
import { site } from "@/lib/coastal-wellness/site";

const populationFilters: Array<Population | "All"> = [
  "All",
  "Children",
  "Teens",
  "Adults",
  "Couples",
  "Families",
];

function Availability({ c }: { c: Clinician }) {
  if (!c.accepting) {
    return (
      <span
        className="cw-font-body inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.7rem] backdrop-blur-sm"
        style={{ backgroundColor: "rgba(1,49,38,0.72)", color: "rgba(255,255,255,0.85)" }}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-white/50" />
        Not accepting new clients
      </span>
    );
  }
  return (
    <span
      className="cw-font-body inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.7rem] backdrop-blur-sm"
      style={{ backgroundColor: "rgba(255,255,255,0.92)", color: "var(--cw-teal-700)" }}
    >
      <span
        className="h-1.5 w-1.5 rounded-full"
        style={{ backgroundColor: "var(--cw-teal-500)" }}
      />
      {c.waitlist ? `Booking from ${c.waitlist}` : "Accepting new clients"}
    </span>
  );
}

function MetaRow({
  icon: Icon,
  children,
}: {
  icon: typeof MapPin;
  children: React.ReactNode;
}) {
  return (
    <li className="flex gap-2.5">
      <Icon
        className="mt-[3px] h-3.5 w-3.5 shrink-0"
        style={{ color: "var(--cw-teal-600)" }}
        aria-hidden
      />
      <span className="cw-font-body text-[0.8rem] leading-relaxed" style={{ color: "var(--cw-ink-soft)" }}>
        {children}
      </span>
    </li>
  );
}

function ClinicianCard({ c }: { c: Clinician }) {
  const [open, setOpen] = useState(false);

  return (
    <article
      className="group flex flex-col overflow-hidden rounded-[1.5rem] border bg-white transition-shadow duration-300 hover:shadow-[0_24px_50px_-28px_rgba(1,49,38,0.4)]"
      style={{ borderColor: "var(--cw-line)" }}
    >
      <div className="relative aspect-[5/4] overflow-hidden">
        <Image
          src={unsplash(c.photo, "w=700&q=80&auto=format&fit=crop&crop=faces")}
          alt={c.name}
          fill
          unoptimized
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-24"
          style={{
            background:
              "linear-gradient(0deg, rgba(1,49,38,0.55) 0%, rgba(1,49,38,0) 100%)",
          }}
        />
        <div className="absolute left-4 top-4">
          <Availability c={c} />
        </div>
        {c.title && (
          <p className="cw-font-body absolute bottom-3.5 left-4 right-4 text-[0.7rem] uppercase tracking-[0.16em] text-white/90">
            {c.title}
          </p>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3
          className="cw-font-display text-xl leading-tight"
          style={{ color: "var(--cw-ink)" }}
        >
          {c.name}
        </h3>
        <p
          className="cw-font-body mt-1 text-[0.78rem] leading-snug"
          style={{ color: "var(--cw-teal-700)" }}
        >
          {c.credentials}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {c.focus.slice(0, 3).map((f) => (
            <span
              key={f}
              className="cw-font-body rounded-full px-2.5 py-1 text-[0.7rem]"
              style={{ backgroundColor: "var(--cw-mist)", color: "var(--cw-teal-700)" }}
            >
              {f}
            </span>
          ))}
        </div>

        <ul className="mt-5 space-y-2">
          <MetaRow icon={MapPin}>{c.offices.join(" · ")}</MetaRow>
          <MetaRow icon={CalendarDays}>{c.days}</MetaRow>
          <MetaRow icon={ShieldCheck}>{c.insurance}</MetaRow>
          {c.languages.length > 1 && (
            <MetaRow icon={Globe}>{c.languages.join(", ")}</MetaRow>
          )}
        </ul>

        <div className="flex-1" />

        <button
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="cw-font-body mt-5 flex w-full items-center justify-between border-t pt-4 text-[0.82rem] transition-colors"
          style={{ borderColor: "var(--cw-line)", color: "var(--cw-teal-700)" }}
        >
          {open ? "Hide profile" : "Read profile"}
          <ChevronDown
            className={cn("h-4 w-4 transition-transform duration-300", open && "rotate-180")}
          />
        </button>

        {open && (
          <div className="mt-4 space-y-4">
            <p
              className="cw-font-body text-[0.85rem] leading-relaxed"
              style={{ color: "var(--cw-ink-soft)" }}
            >
              {c.bio}
            </p>
            <div>
              <p
                className="cw-font-body text-[0.65rem] uppercase tracking-[0.18em]"
                style={{ color: "var(--cw-teal-600)" }}
              >
                Training & Approach
              </p>
              <div className="mt-2.5 flex flex-wrap gap-1.5">
                {c.modalities.map((m) => (
                  <span
                    key={m}
                    className="cw-font-body rounded-full border px-2.5 py-1 text-[0.7rem]"
                    style={{ borderColor: "var(--cw-line)", color: "var(--cw-ink-soft)" }}
                  >
                    {m}
                  </span>
                ))}
              </div>
            </div>
            <CWButton href={site.portal} external size="sm">
              Book with {c.name.split(" ").slice(-1)[0]}
            </CWButton>
          </div>
        )}
      </div>
    </article>
  );
}

export function TeamDirectory() {
  const [active, setActive] = useState<Population | "All">("All");
  const [openOnly, setOpenOnly] = useState(false);

  const filtered = useMemo(
    () =>
      clinicians.filter(
        (c) =>
          (active === "All" || c.populations.includes(active)) &&
          (!openOnly || c.accepting)
      ),
    [active, openOnly]
  );

  return (
    <div>
      <div className="flex flex-wrap items-center gap-2.5">
        {populationFilters.map((f) => {
          const isActive = f === active;
          return (
            <button
              key={f}
              onClick={() => setActive(f)}
              className="cw-font-body rounded-full border px-4 py-2 text-sm transition-colors"
              style={
                isActive
                  ? {
                      backgroundColor: "var(--cw-teal-900)",
                      borderColor: "var(--cw-teal-900)",
                      color: "#fff",
                    }
                  : { borderColor: "var(--cw-line)", color: "var(--cw-ink-soft)" }
              }
            >
              {f}
            </button>
          );
        })}

        <span
          className="mx-1 hidden h-6 w-px sm:block"
          style={{ backgroundColor: "var(--cw-line)" }}
        />

        <button
          onClick={() => setOpenOnly((v) => !v)}
          aria-pressed={openOnly}
          className="cw-font-body inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors"
          style={
            openOnly
              ? {
                  backgroundColor: "var(--cw-mist)",
                  borderColor: "var(--cw-turquoise-soft)",
                  color: "var(--cw-teal-700)",
                }
              : { borderColor: "var(--cw-line)", color: "var(--cw-ink-soft)" }
          }
        >
          <span
            className="h-1.5 w-1.5 rounded-full"
            style={{
              backgroundColor: openOnly ? "var(--cw-teal-500)" : "var(--cw-line)",
            }}
          />
          Accepting new clients
        </button>
      </div>

      <p className="cw-font-body mt-5 text-sm" style={{ color: "var(--cw-ink-soft)" }}>
        Showing {filtered.length} of {clinicians.length} clinicians
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((c) => (
          <ClinicianCard key={c.id} c={c} />
        ))}
      </div>

      <div className="mt-24 border-t pt-16" style={{ borderColor: "var(--cw-line)" }}>
        <div className="max-w-2xl">
          <p
            className="cw-font-body text-xs uppercase tracking-[0.2em]"
            style={{ color: "var(--cw-teal-600)" }}
          >
            Office Staff
          </p>
          <h2
            className="cw-font-display mt-4 text-3xl leading-[1.15] sm:text-4xl"
            style={{ color: "var(--cw-ink)" }}
          >
            The people who pick up <span className="italic">when you call</span>
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3 lg:grid-cols-5">
          {officeStaff.map((s) => (
            <div key={s.id} className="text-center sm:text-left">
              <div className="relative aspect-square overflow-hidden rounded-[1.25rem]">
                <Image
                  src={unsplash(s.photo, "w=400&q=80&auto=format&fit=crop&crop=faces")}
                  alt={s.name}
                  fill
                  unoptimized
                  sizes="(min-width: 1024px) 18vw, (min-width: 640px) 30vw, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <h3
                className="cw-font-display mt-3.5 text-base leading-tight"
                style={{ color: "var(--cw-ink)" }}
              >
                {s.name}
              </h3>
              <p
                className="cw-font-body mt-0.5 text-[0.78rem]"
                style={{ color: "var(--cw-ink-soft)" }}
              >
                {s.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
