import * as React from "react";
import Link from "next/link";
function cn(...classes: Array<string | undefined | false>) {
  return classes.filter(Boolean).join(" ");
}


type ButtonVariant = "primary" | "outline";

type BaseProps = {
  variant?: ButtonVariant;
  className?: string;
  children?: React.ReactNode;
};

type AsChildProps =
  | {
      asChild?: true;
      href?: never;
    }
  | {
      asChild?: false;
      href?: string;
    };

type Props = BaseProps & AsChildProps;

export function Button({ variant = "primary", className, children, asChild, href }: Props) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-sm font-bold transition-all focus:outline-none focus:ring-2 focus:ring-[var(--sjmpc-gold)]",
    variant === "primary" &&
      "bg-[var(--sjmpc-green)] text-white hover:brightness-110 shadow-sm",
    variant === "outline" &&
      "bg-white text-[var(--sjmpc-green)] border border-[var(--sjmpc-green)] hover:bg-[color:rgba(0,107,63,0.06)]",
    className
  );

  if (href && !asChild) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return <button type="button" className={classes}>{children}</button>;
}

