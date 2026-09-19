import Link from "next/link";
import { cn } from "@/lib/utils";

type Common = {
  variant?: "primary" | "outline" | "outline-light" | "light" | "ghost";
  size?: "md" | "lg";
  className?: string;
  children: React.ReactNode;
};

type AsLink = Common & {
  href: string;
  external?: boolean;
};

type AsButton = Common &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

const base =
  "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 whitespace-nowrap";

const sizes = {
  md: "h-11 px-5 text-sm",
  lg: "h-14 px-7 text-base",
};

const variants = {
  primary:
    "text-white shadow-[0_10px_30px_-10px_rgba(1,49,38,0.45)] hover:shadow-[0_14px_34px_-10px_rgba(1,49,38,0.55)] hover:-translate-y-0.5",
  outline:
    "border-2 bg-transparent hover:-translate-y-0.5",
  "outline-light":
    "border-2 border-white/70 text-white hover:bg-white/10 hover:-translate-y-0.5",
  light:
    "bg-white shadow-[0_10px_30px_-10px_rgba(1,49,38,0.35)] hover:shadow-[0_14px_34px_-10px_rgba(1,49,38,0.45)] hover:-translate-y-0.5",
  ghost: "bg-transparent hover:opacity-70",
};

function styleFor(variant: Common["variant"]) {
  if (variant === "primary") {
    return { backgroundColor: "var(--cw-teal-600)" };
  }
  if (variant === "outline") {
    return { borderColor: "var(--cw-teal-700)", color: "var(--cw-teal-700)" };
  }
  if (variant === "light") {
    return { color: "var(--cw-teal-700)" };
  }
  return undefined;
}

export function CWButton(props: AsLink | AsButton) {
  const { variant = "primary", size = "md", className, children } = props;
  const classes = cn(base, sizes[size], variants[variant], className);
  const style = styleFor(variant);

  if ("href" in props && props.href) {
    const { href, external } = props;
    return (
      <Link
        href={href}
        className={classes}
        style={style}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  const buttonProps = props as AsButton;
  return (
    <button className={classes} style={style} {...buttonProps}>
      {children}
    </button>
  );
}
