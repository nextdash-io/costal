"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Users, MapPin, Clock } from "lucide-react";
import { CWButton } from "@/components/coastal-wellness/button";
import { HERO_PHOTO, unsplash } from "@/lib/coastal-wellness/photos";

const floatingStats = [
  { icon: Users, value: "17", label: "Licensed clinicians" },
  { icon: MapPin, value: "2 + telehealth", label: "Locations across Brevard" },
  { icon: Clock, value: "15+ yrs", label: "Serving local families" },
];

export function CWHero() {
  return (
    <section className="pt-6 sm:pt-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative isolate min-h-[640px] overflow-hidden rounded-[2rem] sm:min-h-[680px] sm:rounded-[2.75rem]"
        >
          <Image
            src={unsplash(HERO_PHOTO, "w=1600&q=80&auto=format&fit=crop")}
            alt="A small group of friends laughing together"
            fill
            priority
            unoptimized
            className="object-cover"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(10,54,52,0.94) 4%, rgba(10,54,52,0.72) 38%, rgba(10,54,52,0.18) 66%, rgba(10,54,52,0.05) 85%)",
            }}
          />

          <div className="relative flex min-h-[640px] flex-col justify-center px-6 py-16 sm:min-h-[680px] sm:px-14 sm:py-20">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm">
              Brevard County · Two Locations + Telehealth
            </span>

            <h1 className="cw-font-display mt-7 max-w-xl text-[2.6rem] leading-[1.06] text-white sm:text-6xl lg:text-[4rem]">
              Real support, from{" "}
              <span className="italic" style={{ color: "var(--cw-coral-soft)" }}>
                people who get it.
              </span>
            </h1>

            <p className="mt-6 max-w-md text-lg leading-relaxed text-white/80">
              A team of 17 licensed clinicians helping children, teens,
              adults, couples and families move through anxiety, trauma and
              everyday life — in person or wherever you are.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <CWButton href="/#contact" size="lg">
                Request an Appointment
                <ArrowUpRight className="h-4 w-4" />
              </CWButton>
              <CWButton href="/services" variant="outline-light" size="lg">
                Explore Our Services
              </CWButton>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.25 }}
          className="relative z-10 -mt-10 flex flex-col gap-4 px-2 sm:-mt-12 sm:flex-row sm:px-8"
        >
          {floatingStats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex flex-1 items-center gap-4 rounded-2xl bg-white p-5 shadow-[0_20px_45px_-15px_rgba(13,43,43,0.25)]"
            >
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                style={{ backgroundColor: "var(--cw-mist)" }}
              >
                <Icon className="h-5 w-5" style={{ color: "var(--cw-teal-700)" }} />
              </span>
              <div className="min-w-0">
                <p className="cw-font-display text-xl leading-tight" style={{ color: "var(--cw-ink)" }}>
                  {value}
                </p>
                <p className="text-xs font-medium leading-tight" style={{ color: "var(--cw-ink-soft)" }}>
                  {label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
