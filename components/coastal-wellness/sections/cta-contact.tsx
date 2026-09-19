import Image from "next/image";
import { Phone, Mail, MessageSquare, Star } from "lucide-react";
import { CWButton } from "@/components/coastal-wellness/button";
import { site } from "@/lib/coastal-wellness/site";
import { unsplash, CONTACT_PHOTO } from "@/lib/coastal-wellness/photos";

const steps = [
  {
    step: "01",
    title: "Reach out",
    body: `Call ${site.phone}, text ${site.text}, or schedule online through our client portal.`,
  },
  {
    step: "02",
    title: "Get matched",
    body: "We'll talk through what you're looking for and pair you with the right clinician and approach.",
  },
  {
    step: "03",
    title: "First session",
    body: "Meet at either Melbourne office or by telehealth, and start building a plan that fits your life.",
  },
];

export function CWCtaContact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-20 sm:px-10">
      <div
        className="cw-grain relative overflow-hidden rounded-[2rem] lg:grid lg:grid-cols-[0.82fr_1fr]"
        style={{ background: "linear-gradient(150deg, var(--cw-teal-900), var(--cw-teal-600) 140%)" }}
      >
        <div className="relative h-72 sm:h-96 lg:h-auto">
          <Image
            src={unsplash(CONTACT_PHOTO, "w=1000&q=80&auto=format&fit=crop")}
            alt="Two people in conversation at a sunlit office window"
            fill
            unoptimized
            sizes="(min-width: 1024px) 45vw, 100vw"
            // Keeps the seated figure in frame once the column crops tall.
            style={{ objectPosition: "32% 45%" }}
            className="object-cover"
          />
          {/* Blends the photo into the green panel it sits beside. */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "linear-gradient(0deg, rgba(1,49,38,0.75) 0%, rgba(1,49,38,0.05) 55%)",
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 hidden lg:block"
            style={{
              background:
                "linear-gradient(90deg, rgba(1,49,38,0) 55%, rgba(1,49,38,0.85) 100%)",
            }}
          />

          <div className="absolute bottom-5 left-5 right-5 lg:bottom-8 lg:left-8 lg:right-auto">
            <div
              className="inline-flex items-center gap-3 rounded-2xl px-4 py-3 backdrop-blur-md"
              style={{ backgroundColor: "rgba(255,255,255,0.14)" }}
            >
              <span className="flex gap-0.5" aria-hidden>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5"
                    style={{ color: "var(--cw-amber)", fill: "var(--cw-amber)" }}
                  />
                ))}
              </span>
              <span className="cw-font-body text-xs leading-tight text-white/85">
                {site.rating.value} average from {site.rating.count} reviews
              </span>
            </div>
          </div>
        </div>

        <div className="relative px-8 py-14 sm:px-12 lg:py-16">
          <p
            className="cw-font-body text-xs uppercase tracking-[0.2em]"
            style={{ color: "var(--cw-turquoise)" }}
          >
            Get Started
          </p>
          <h2 className="cw-font-display mt-4 text-3xl leading-[1.15] text-white sm:text-[2.4rem]">
            The hardest part is reaching out.{" "}
            <span className="italic">We&rsquo;ll take it from there.</span>
          </h2>

          <ol className="mt-10 space-y-6">
            {steps.map((s) => (
              <li key={s.step} className="flex gap-5">
                <span
                  className="cw-font-display shrink-0 text-xl leading-none"
                  style={{ color: "var(--cw-turquoise)" }}
                >
                  {s.step}
                </span>
                <div className="border-l border-white/10 pl-5">
                  <h3 className="cw-font-display text-lg leading-tight text-white">
                    {s.title}
                  </h3>
                  <p className="cw-font-body mt-1.5 text-sm leading-relaxed text-white/70">
                    {s.body}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-10 flex flex-wrap items-center gap-3 border-t border-white/10 pt-8">
            <CWButton href={site.portal} external variant="light">
              Schedule Today
            </CWButton>
            <CWButton href={site.phoneHref} variant="outline-light">
              <Phone className="h-4 w-4" />
              {site.phone}
            </CWButton>
            <CWButton href={site.textHref} variant="outline-light">
              <MessageSquare className="h-4 w-4" />
              Text {site.text}
            </CWButton>
            <a
              href={`mailto:${site.email}`}
              className="cw-font-body inline-flex items-center gap-2 text-sm text-white/75 transition-colors hover:text-white"
            >
              <Mail className="h-4 w-4" />
              {site.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
