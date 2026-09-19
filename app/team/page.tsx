import type { Metadata } from "next";
import { CWNavbar } from "@/components/coastal-wellness/navbar";
import { CWFooter } from "@/components/coastal-wellness/footer";
import { CWButton } from "@/components/coastal-wellness/button";
import { TeamDirectory } from "@/components/coastal-wellness/team-directory";

export const metadata: Metadata = {
  title: "Meet Our Team",
  description:
    "Meet the 17 licensed clinicians at Coastal Wellness, serving children, teens, adults, couples and families across Brevard County and by telehealth.",
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
          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "var(--cw-coral)" }}>
              Meet Our Team
            </span>
            <h1 className="cw-font-display mt-4 text-4xl sm:text-6xl" style={{ color: "var(--cw-ink)" }}>
              17 clinicians. 17 different reasons to feel understood.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--cw-ink-soft)" }}>
              Every therapist at Coastal Wellness brings their own training,
              perspective and specialty — filter below to find the person
              who&rsquo;s right for you.
            </p>
            <div className="mt-8">
              <CWButton href="/#contact" size="lg">
                Request an Appointment
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
