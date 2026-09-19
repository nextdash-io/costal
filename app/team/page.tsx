import type { Metadata } from "next";
import { CWNavbar } from "@/components/coastal-wellness/navbar";
import { CWFooter } from "@/components/coastal-wellness/footer";
import { CWButton } from "@/components/coastal-wellness/button";
import { TeamDirectory } from "@/components/coastal-wellness/team-directory";
import { site } from "@/lib/coastal-wellness/site";

export const metadata: Metadata = {
  title: "Meet Our Team",
  description:
    "Meet the clinicians and office staff at Coastal Wellness & Life Coaching Center in Melbourne, FL — serving children, teens, adults, couples and families in person and by telehealth.",
};

export default function TeamPage() {
  return (
    <>
      <CWNavbar />
      <main>
        <section className="cw-grain relative overflow-hidden pt-36 pb-20">
          <div
            className="cw-blob cw-float-slow absolute -right-56 -top-56 h-[520px] w-[520px]"
            style={{ background: "radial-gradient(circle at 30% 30%, var(--cw-turquoise), var(--cw-teal-700) 70%)", opacity: 0.32 }}
          />
          <div className="relative mx-auto max-w-4xl px-6 text-center sm:px-10">
            <p
              className="cw-font-body text-xs uppercase tracking-[0.2em]"
              style={{ color: "var(--cw-teal-600)" }}
            >
              Meet Our Team
            </p>
            <h1
              className="cw-font-display mt-5 text-4xl leading-[1.1] sm:text-6xl"
              style={{ color: "var(--cw-ink)" }}
            >
              Professional counseling{" "}
              <span className="italic">and life coaching.</span>
            </h1>
            <p
              className="cw-font-body mx-auto mt-6 max-w-2xl text-lg leading-relaxed"
              style={{ color: "var(--cw-ink-soft)" }}
            >
              Our professional and caring staff brings decades of therapy,
              wellness and life coaching experience to the Melbourne, FL area.
              Our main goal is to provide the support that makes a difference.
            </p>
            <p
              className="cw-font-body mx-auto mt-4 max-w-2xl text-sm"
              style={{ color: "var(--cw-ink-soft)" }}
            >
              Filter below to find the clinician who&rsquo;s right for you.
            </p>
            <div className="mt-8">
              <CWButton href={site.portal} external size="lg">
                Schedule Today
              </CWButton>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <TeamDirectory />
        </section>
      </main>
      <CWFooter />
    </>
  );
}
