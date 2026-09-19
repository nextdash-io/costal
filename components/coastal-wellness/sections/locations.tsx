import Image from "next/image";
import { MapPin, Video, ArrowUpRight } from "lucide-react";
import { OFFICE_PHOTO, unsplash } from "@/lib/coastal-wellness/photos";
import { locations, site } from "@/lib/coastal-wellness/site";

export function CWLocations() {
  return (
    <section id="locations" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-20 sm:px-10">
      <div className="max-w-xl">
        <p
          className="cw-font-body text-xs uppercase tracking-[0.2em]"
          style={{ color: "var(--cw-teal-600)" }}
        >
          Locations
        </p>
        <h2
          className="cw-font-display mt-4 text-3xl leading-[1.15] sm:text-[2.6rem]"
          style={{ color: "var(--cw-ink)" }}
        >
          Two Melbourne offices, <span className="italic">or wherever you are.</span>
        </h2>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.15fr]">
        <div className="relative min-h-[320px] overflow-hidden rounded-[1.75rem] lg:min-h-[440px]">
          <Image
            src={unsplash(OFFICE_PHOTO, "w=900&q=80&auto=format&fit=crop")}
            alt="A warm, comfortable office lounge"
            fill
            unoptimized
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(0deg, rgba(1,49,38,0.7) 0%, rgba(1,49,38,0) 55%)" }}
          />
          <div className="absolute bottom-6 left-6 right-6 rounded-xl bg-white/95 p-5 backdrop-blur-sm">
            <p className="cw-font-display text-lg" style={{ color: "var(--cw-ink)" }}>
              Inside our offices
            </p>
            <p
              className="cw-font-body mt-1 text-sm leading-relaxed"
              style={{ color: "var(--cw-ink-soft)" }}
            >
              Warm, private rooms — {site.hours.toLowerCase()}.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {locations.map((office) => (
            <div
              key={office.name}
              className="rounded-2xl border bg-white p-7"
              style={{ borderColor: "var(--cw-line)" }}
            >
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ backgroundColor: "color-mix(in srgb, var(--cw-teal-600) 14%, white)" }}
              >
                <MapPin className="h-5 w-5" style={{ color: "var(--cw-teal-700)" }} />
              </div>
              <h3 className="cw-font-display mt-5 text-xl" style={{ color: "var(--cw-ink)" }}>
                {office.name}
              </h3>
              <p className="cw-font-body mt-2 text-sm leading-relaxed" style={{ color: "var(--cw-ink-soft)" }}>
                {office.address1}
                <br />
                {office.address2}
                <br />
                {office.city}
              </p>
              {office.note && (
                <p className="cw-font-body mt-2 text-xs italic" style={{ color: "var(--cw-ink-soft)" }}>
                  {office.note}
                </p>
              )}
              <a
                href={office.directions}
                target="_blank"
                rel="noopener noreferrer"
                className="cw-font-body mt-5 inline-flex items-center gap-1.5 text-sm font-medium"
                style={{ color: "var(--cw-teal-700)" }}
              >
                Get Directions
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          ))}

          <div
            className="rounded-2xl p-7 text-white sm:col-span-2"
            style={{ background: "linear-gradient(155deg, var(--cw-teal-900), var(--cw-teal-600) 130%)" }}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
              <Video className="h-5 w-5" />
            </div>
            <h3 className="cw-font-display mt-5 text-xl">Telehealth</h3>
            <p className="cw-font-body mt-2 text-sm text-white/75">
              Secure video sessions with the same clinicians — available across Florida.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
