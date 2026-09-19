"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Users, MapPin, Clock } from "lucide-react";
import { CWButton } from "@/components/coastal-wellness/button";
import { HERO_PHOTO, unsplash } from "@/lib/coastal-wellness/photos";

const stats = [
  { icon: Users, value: "17", label: "Licensed clinicians" },
  { icon: MapPin, value: "2 + telehealth", label: "Locations across Brevard" },
  { icon: Clock, value: "15+ yrs", label: "Serving local families" },
];

export function CWHero() {
  return (
    <section className="w-full p-3 sm:p-4" style={{ backgroundColor: "var(--cw-teal-900)" }}>
      <div className="relative h-[calc(100svh-7rem)] min-h-[560px] overflow-hidden rounded-[1.75rem] sm:rounded-[2.5rem]">
        <Image
          src={unsplash(HERO_PHOTO, "w=1920&q=80&auto=format&fit=crop")}
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
              "linear-gradient(85deg, rgba(1,49,38,0.7) 0%, rgba(1,49,38,0.34) 42%, rgba(1,49,38,0.06) 72%, rgba(1,49,38,0) 100%)",
          }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-1/2"
          style={{ background: "linear-gradient(0deg, rgba(1,49,38,0.7) 0%, rgba(1,49,38,0) 100%)" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex h-full flex-col justify-end px-7 pb-12 sm:px-12 sm:pb-16 lg:px-16 lg:pb-20"
        >
          <h1 className="cw-font-display max-w-3xl text-[2.6rem] leading-[1.08] text-white sm:text-6xl lg:text-[4.5rem]">
            Real support, from{" "}
            <span className="italic">people who get it.</span>
          </h1>

          <p className="cw-font-body mt-5 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
            Expert therapy for children, teens, adults, couples and families.
            Two Brevard County locations, or wherever you are.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <CWButton href="/#contact" size="lg" variant="light">
              Request an Appointment
              <ArrowUpRight className="h-4 w-4" />
            </CWButton>
            <CWButton href="/services" variant="outline-light" size="lg">
              Explore Our Services
            </CWButton>
          </div>
        </motion.div>
      </div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-x-8 px-4 py-5 sm:grid-cols-3 sm:py-6">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex items-center gap-3 py-1.5">
            <Icon className="h-4 w-4 shrink-0" style={{ color: "var(--cw-turquoise)" }} />
            <p className="cw-font-body text-sm text-white/70">
              <span className="text-white">{value}</span> · {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
