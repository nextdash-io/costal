"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Phone, MapPin, Clock } from "lucide-react";
import { CWButton } from "@/components/coastal-wellness/button";
import { HERO_PHOTO, unsplash } from "@/lib/coastal-wellness/photos";
import { site } from "@/lib/coastal-wellness/site";

const stats = [
  { icon: Star, value: site.rating.value, label: `${site.rating.count} ratings & reviews` },
  { icon: MapPin, value: "2 locations", label: "Melbourne, FL + telehealth" },
  { icon: Clock, value: site.hours, label: "Flexible scheduling" },
];

export function CWHero() {
  return (
    <section className="w-full p-3 sm:p-4" style={{ backgroundColor: "var(--cw-teal-900)" }}>
      <div className="relative h-[calc(100svh-7rem)] min-h-[600px] overflow-hidden rounded-[1.75rem] sm:rounded-[2.5rem]">
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
              "linear-gradient(85deg, rgba(1,49,38,0.72) 0%, rgba(1,49,38,0.36) 42%, rgba(1,49,38,0.06) 72%, rgba(1,49,38,0) 100%)",
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
          <p className="cw-font-body text-xs uppercase tracking-[0.2em] text-white/70">
            {site.subhead}
          </p>

          <h1 className="cw-font-display mt-5 max-w-3xl text-[2.2rem] leading-[1.1] text-white sm:text-5xl lg:text-[3.9rem]">
            Successfully treating anxiety, depression, trauma, PTSD{" "}
            <span className="italic">and other life challenges</span>
          </h1>

          <p className="cw-font-body mt-5 max-w-lg text-base leading-relaxed text-white/85 sm:text-lg">
            {site.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <CWButton href={site.portal} external size="lg" variant="light">
              Schedule Today
            </CWButton>
            <CWButton href={site.phoneHref} variant="outline-light" size="lg">
              <Phone className="h-4 w-4" />
              {site.phone}
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
