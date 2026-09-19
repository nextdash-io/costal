import type { Metadata } from "next";
import { CWNavbar } from "@/components/coastal-wellness/navbar";
import { CWFooter } from "@/components/coastal-wellness/footer";
import { CWButton } from "@/components/coastal-wellness/button";
import { ServicesDirectory } from "@/components/coastal-wellness/services-directory";

export const metadata: Metadata = {
  title: "Services & Specialties",
  description:
    "Explore Coastal Wellness's full range of therapy services — populations served, areas treated, treatment approaches and ways to connect.",
};

export default function ServicesPage() {
  return (
    <>
      <CWNavbar />
      <main>
        <section className="cw-grain relative overflow-hidden py-20">
          <div
            className="cw-blob-2 cw-float absolute -left-32 -top-24 h-96 w-96"
            style={{ background: "var(--cw-coral-soft)", opacity: 0.5 }}
          />
          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--cw-coral)" }}>
              Services & Specialties
            </span>
            <h1 className="cw-font-display mt-4 text-4xl sm:text-6xl" style={{ color: "var(--cw-ink)" }}>
              Whatever brought you here, there&rsquo;s a place to start.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed" style={{ color: "var(--cw-ink-soft)" }}>
              Browse by who we help, what we treat, how we treat it, or how
              you&rsquo;d like to connect — our team covers a wide range so you
              don&rsquo;t have to guess.
            </p>
            <div className="mt-8">
              <CWButton href="/#contact" size="lg">
                Request an Appointment
              </CWButton>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <ServicesDirectory />
        </section>
      </main>
      <CWFooter />
    </>
  );
}
