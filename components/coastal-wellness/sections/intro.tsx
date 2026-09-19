import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { quickLinks } from "@/lib/coastal-wellness/site";

export function CWIntro() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 sm:px-10 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <p
          className="cw-font-body text-xs uppercase tracking-[0.2em]"
          style={{ color: "var(--cw-teal-600)" }}
        >
          Why Choose Us?
        </p>
        <h2
          className="cw-font-display mt-4 text-3xl leading-[1.15] sm:text-[2.6rem]"
          style={{ color: "var(--cw-ink)" }}
        >
          We are here to provide the support{" "}
          <span className="italic">that makes a difference.</span>
        </h2>
      </div>

      <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
        <p className="cw-font-body text-base leading-relaxed" style={{ color: "var(--cw-ink-soft)" }}>
          We will guide you in making and maintaining positive changes in your
          life. By bringing a positive, proactive solution-focused approach to
          therapy, we help clients achieve greater self-esteem, build healthier
          relationships, and make the emotional, cognitive, and behavioral
          changes you seek.
        </p>
        <p className="cw-font-body text-base leading-relaxed" style={{ color: "var(--cw-ink-soft)" }}>
          This approach helps create tools to create a safe and stable
          environment in therapy and in your daily life. We can help you find
          the resources and tools to establish clear boundaries, explore new
          ways to cope with everyday challenges and emotions, and increase your
          strengths and abilities.
        </p>
      </div>

      <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {quickLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="group flex items-center justify-between rounded-xl border px-5 py-4"
            style={{ borderColor: "var(--cw-line)" }}
          >
            <span className="cw-font-body text-[0.95rem]" style={{ color: "var(--cw-ink)" }}>
              {link.label}
            </span>
            <ArrowUpRight
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              style={{ color: "var(--cw-teal-600)" }}
            />
          </Link>
        ))}
      </div>
    </section>
  );
}
