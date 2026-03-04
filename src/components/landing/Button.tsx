import { type ButtonHTMLAttributes, type ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children: ReactNode;
}

export function Button({ variant = "primary", children, className = "", ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold font-display tracking-tight transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary:
      "bg-primary text-primary-foreground hover:scale-[1.02] hover:brightness-110 active:scale-[0.98]",
    secondary:
      "border border-border bg-transparent text-foreground hover:bg-secondary hover:scale-[1.02] active:scale-[0.98]",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
