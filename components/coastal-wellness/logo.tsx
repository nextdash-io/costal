import { cn } from "@/lib/utils";

export function CoastalLogo({
  withWordmark = true,
  light = false,
  className,
  markClassName,
}: {
  withWordmark?: boolean;
  light?: boolean;
  className?: string;
  markClassName?: string;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span className={cn("relative h-9 w-9 shrink-0", markClassName)}>
        <span
          className="absolute inset-0 cw-blob"
          style={{ background: "var(--cw-teal-600)", transform: "rotate(-8deg)" }}
        />
        <span
          className="absolute inset-0 cw-blob-2 mix-blend-multiply"
          style={{
            background: "var(--cw-coral)",
            opacity: 0.82,
            transform: "translate(18%, 14%) rotate(12deg) scale(0.7)",
          }}
        />
      </span>
      {withWordmark && (
        <span className="cw-font-display text-xl leading-none tracking-tight">
          <span style={{ color: light ? "#fff" : "var(--cw-ink)" }}>Coastal</span>{" "}
          <span
            className="italic"
            style={{ color: light ? "var(--cw-turquoise-soft)" : "var(--cw-teal-700)" }}
          >
            Wellness
          </span>
        </span>
      )}
    </span>
  );
}
