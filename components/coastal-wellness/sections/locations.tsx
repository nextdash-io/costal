import Image from "next/image";
import { MapPin, Video, ArrowUpRight } from "lucide-react";
import { OFFICE_PHOTO, unsplash } from "@/lib/coastal-wellness/photos";

const offices = [
  {
    name: "Melbourne Office",
    city: "Melbourne, FL",
    hours: "Mon–Fri · 8am–7pm",
    mapQuery: "Coastal Wellness Melbourne FL",
  },
  {
    name: "Rockledge Office",
    city: "Rockledge, FL",
    hours: "Mon–Fri · 8am–6pm",
    mapQuery: "Coastal Wellness Rockledge FL",
  },
];

export function CWLocations() {
  return (
    <section id="locations" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-xl">
        <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "var(--cw-coral)" }}>
          Locations & Telehealth
        </span>
        <h2 className="cw-font-display mt-3 text-4xl sm:text-5xl" style={{ color: "var(--cw-ink)" }}>
          Come see us, or stay right where you are.
        </h2>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
        <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] lg:min-h-[440px]">
          <Image
            src={unsplash(OFFICE_PHOTO, "w=900&q=80&auto=format&fit=crop")}
            alt="A warm, comfortable office lounge"
            fill
            unoptimized
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(0deg, rgba(10,54,52,0.65) 0%, rgba(10,54,52,0) 55%)" }}
          />
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/95 p-5 backdrop-blur-sm">
            <p className="cw-font-display text-lg" style={{ color: "var(--cw-ink)" }}>
              Inside our offices
            </p>
            <p className="mt-1 text-sm leading-relaxed" style={{ color: "var(--cw-ink-soft)" }}>
              Warm, private rooms — not a waiting-room-and-clipboard kind of
              place.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {offices.map((office) => (
            <div
              key={office.name}
              className="rounded-3xl border bg-white p-7"
              style={{ borderColor: "var(--cw-line)" }}
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl"
                style={{ backgroundColor: "color-mix(in srgb, var(--cw-teal-600) 14%, white)" }}
              >
                <MapPin className="h-6 w-6" style={{ color: "var(--cw-teal-700)" }} />
              </div>
              <h3 className="cw-font-display mt-5 text-xl" style={{ color: "var(--cw-ink)" }}>
                {office.name}
              </h3>
              <p className="mt-1 text-sm" style={{ color: "var(--cw-ink-soft)" }}>{office.city}</p>
              <p className="mt-1 text-sm" style={{ color: "var(--cw-ink-soft)" }}>{office.hours}</p>
              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(office.mapQuery)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium"
                style={{ color: "var(--cw-coral)" }}
              >
                Get Directions
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}

          <div
            className="rounded-3xl p-7 text-white sm:col-span-2"
            style={{ background: "linear-gradient(155deg, var(--cw-teal-900), var(--cw-teal-600) 130%)" }}
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15">
              <Video className="h-6 w-6" />
            </div>
            <h3 className="cw-font-display mt-5 text-xl">Telehealth</h3>
            <p className="mt-1 text-sm text-white/70">
              Available across Florida — same clinicians, secure video.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
