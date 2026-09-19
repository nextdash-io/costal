import Image from "next/image";
import { therapyCards, treats } from "@/lib/coastal-wellness/site";
import { unsplash } from "@/lib/coastal-wellness/photos";

const supervision = [
  {
    title: "Clinical Supervision & Consultation",
    body: "Supervision for registered interns and consultation for licensed clinicians who want a thoughtful second set of eyes.",
  },
  {
    title: "EMDR Consultation & Certification",
    body: "Consultation hours toward EMDR certification, with support through the full certification process.",
  },
];

export function ServicesDirectory() {
  return (
    <div className="space-y-24">
      <div>
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="cw-font-body text-xs uppercase tracking-[0.2em]"
            style={{ color: "var(--cw-teal-600)" }}
          >
            Types of Therapy
          </p>
          <h2
            className="cw-font-display mt-4 text-3xl leading-[1.15] sm:text-4xl"
            style={{ color: "var(--cw-ink)" }}
          >
            Approaches we&rsquo;re trained in
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {therapyCards.map((card) => (
            <article
              key={card.slug}
              id={card.slug}
              className="scroll-mt-32 overflow-hidden rounded-2xl border bg-white"
              style={{ borderColor: "var(--cw-line)" }}
            >
              <div className="relative h-44">
                <Image
                  src={unsplash(card.photo, "w=700&q=80&auto=format&fit=crop")}
                  alt=""
                  fill
                  unoptimized
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <p
                  className="cw-font-body text-[0.7rem] uppercase tracking-widest"
                  style={{ color: "var(--cw-teal-600)" }}
                >
                  {card.kicker}
                </p>
                <h3 className="cw-font-display mt-2 text-xl" style={{ color: "var(--cw-ink)" }}>
                  {card.title}
                </h3>
                <p
                  className="cw-font-body mt-2.5 text-sm leading-relaxed"
                  style={{ color: "var(--cw-ink-soft)" }}
                >
                  {card.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div id="what-we-treat" className="scroll-mt-32">
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="cw-font-body text-xs uppercase tracking-[0.2em]"
            style={{ color: "var(--cw-teal-600)" }}
          >
            What We Treat
          </p>
          <h2
            className="cw-font-display mt-4 text-3xl leading-[1.15] sm:text-4xl"
            style={{ color: "var(--cw-ink)" }}
          >
            Whatever brought you here, there&rsquo;s a place to start
          </h2>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {treats.map((item) => (
            <span
              key={item}
              className="cw-font-body rounded-full px-5 py-2.5 text-sm"
              style={{ backgroundColor: "var(--cw-mist)", color: "var(--cw-ink)" }}
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      <div id="supervision" className="scroll-mt-32">
        <div className="mx-auto max-w-2xl text-center">
          <p
            className="cw-font-body text-xs uppercase tracking-[0.2em]"
            style={{ color: "var(--cw-teal-600)" }}
          >
            For Clinicians
          </p>
          <h2
            className="cw-font-display mt-4 text-3xl leading-[1.15] sm:text-4xl"
            style={{ color: "var(--cw-ink)" }}
          >
            Supervision and Consultation
          </h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl gap-5 sm:grid-cols-2">
          {supervision.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border bg-white p-7"
              style={{ borderColor: "var(--cw-line)" }}
            >
              <h3 className="cw-font-display text-xl" style={{ color: "var(--cw-ink)" }}>
                {item.title}
              </h3>
              <p
                className="cw-font-body mt-2.5 text-sm leading-relaxed"
                style={{ color: "var(--cw-ink-soft)" }}
              >
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
