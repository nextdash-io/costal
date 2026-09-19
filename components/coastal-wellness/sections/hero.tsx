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
    <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
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
            "linear-gradient(100deg, rgba(1,49,38,0.90) 0%, rgba(1,49,38,0.62) 42%, rgba(1,49,38,0.2) 72%, rgba(1,49,38,0.08) 90%)",
        }}
      />

      <div className="relative flex h-full flex-col justify-center px-6 pt-20 sm:px-14 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-xl"
        >
          <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white backdrop-blur-sm">
            Brevard County · Two Locations + Telehealth
          </span>

          <h1 className="cw-font-display mt-7 text-[2.75rem] leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Real support, from{" "}
            <span className="italic" style={{ color: "var(--cw-turquoise-soft)" }}>
              people who get it.
            </span>
          </h1>

          <p className="cw-font-body mt-6 max-w-md text-lg leading-relaxed text-white/80">
            A team of 17 licensed clinicians helping children, teens,
            adults, couples and families move through anxiety, trauma and
            everyday life — in person or wherever you are.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
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

      <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-[#013126]/60 backdrop-blur-md">
        <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-white/10 px-6 sm:grid-cols-3 sm:divide-x sm:divide-y-0 sm:px-14 lg:px-20">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex items-center gap-3 py-4 sm:px-6 sm:py-5">
              <Icon className="h-5 w-5 shrink-0 text-white/70" />
              <div className="min-w-0">
                <p className="cw-font-display text-lg leading-tight text-white">{value}</p>
                <p className="cw-font-body text-xs leading-tight text-white/65">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
