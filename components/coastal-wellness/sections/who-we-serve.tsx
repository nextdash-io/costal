import { serviceCategories } from "@/lib/coastal-wellness/services-data";

export function CWWhoWeServe() {
  const population = serviceCategories.find((c) => c.id === "who-we-help")!;

  return (
    <section
      className="cw-grain relative overflow-hidden py-20"
      style={{ backgroundColor: "var(--cw-teal-900)" }}
    >
      <div
        className="cw-blob absolute -bottom-32 -left-32 h-96 w-96"
        style={{ background: "var(--cw-teal-500)", opacity: 0.4 }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl">
          <span className="text-xs font-medium uppercase tracking-widest" style={{ color: "var(--cw-turquoise)" }}>
            Who We Serve
          </span>
          <h2 className="cw-font-display mt-3 text-4xl text-white sm:text-5xl">
            A practice built for the whole community
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {population.items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <Icon className="h-7 w-7" style={{ color: "var(--cw-turquoise)" }} />
                <h3 className="cw-font-display mt-4 text-lg text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
