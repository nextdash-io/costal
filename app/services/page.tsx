import type { Metadata } from "next";
import { CWNavbar } from "@/components/coastal-wellness/navbar";
import { CWFooter } from "@/components/coastal-wellness/footer";
import { CWButton } from "@/components/coastal-wellness/button";
import { ServicesDirectory } from "@/components/coastal-wellness/services-directory";
import { site } from "@/lib/coastal-wellness/site";

export const metadata: Metadata = {
  title: "Types of Therapy",
  description:
    "EMDR, child therapy, ART and music therapy, vibroacoustic therapy and virtual reality exposure therapy at Coastal Wellness in Melbourne, FL.",
};

export default function ServicesPage() {
  return (
    <>
      <CWNavbar />
      <main>
        <section className="cw-grain relative overflow-hidden pt-36 pb-16">
          <div
            className="cw-blob-2 cw-float absolute -left-48 -top-48 h-[460px] w-[460px]"
            style={{ background: "var(--cw-turquoise)", opacity: 0.16 }}
          />
          <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-10">
            <p
              className="cw-font-body text-xs uppercase tracking-[0.2em]"
              style={{ color: "var(--cw-teal-600)" }}
            >
              Types of Therapy
            </p>
            <h1
              className="cw-font-display mt-5 text-4xl leading-[1.1] sm:text-6xl"
              style={{ color: "var(--cw-ink)" }}
            >
              Advanced therapy, <span className="italic">delivered with care.</span>
            </h1>
            <p
              className="cw-font-body mx-auto mt-6 max-w-2xl text-lg leading-relaxed"
              style={{ color: "var(--cw-ink-soft)" }}
            >
              We specialize in EMDR and intensives, and offer child therapy,
              expressive therapies and alternative approaches — in person at
              either Melbourne office or by telehealth.
            </p>
            <div className="mt-8">
              <CWButton href={site.portal} external size="lg">
                Schedule Today
              </CWButton>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-6 pb-24 sm:px-10">
          <ServicesDirectory />
        </section>
      </main>
      <CWFooter />
    </>
  );
}
