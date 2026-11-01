import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "amber" | "ghost" | "dark";
  size?: "md" | "lg";
  className?: string;
};

const variants = {
  amber: "bg-amber text-night hover:bg-amber-soft",
  ghost: "border-[1.5px] border-cream/55 text-cream hover:border-amber hover:text-amber",
  dark: "bg-night text-cream hover:bg-ink",
};
const arrows = { amber: "text-crimson", ghost: "text-amber", dark: "text-amber" };

/** Pill button with the small ▶ play arrow. External links open in a new tab. */
export function Button({ href, children, variant = "amber", size = "md", className = "" }: ButtonProps) {
  const external = href.startsWith("http");
  const sizing = size === "lg" ? "min-h-16 px-8 text-lg" : "min-h-12 px-6 text-base";
  return (
    <Link
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center gap-3 rounded-full font-bold tracking-wide transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber ${sizing} ${variants[variant]} ${className}`}
    >
      {children}
      <span aria-hidden="true" className={`text-sm ${arrows[variant]}`}>
        ▶
      </span>
    </Link>
  );
}

/** "[CLIENT]  FORMAT — META" slate line used under project cards. */
export function Slate({ client, format, meta }: { client: string; format: string; meta: string }) {
  return (
    <p className="text-sm uppercase tracking-[0.14em] sm:text-[15px]">
      <span className="text-amber">[{client}]</span>
      <span className="ml-2 text-cream/85">
        {format} — {meta}
      </span>
    </p>
  );
}
