import { type ReactNode } from "react";
import { useReveal } from "@/hooks/useReveal";

interface SectionProps {
  id?: string;
  children: ReactNode;
  className?: string;
  divider?: boolean;
}

export function Section({ id, children, className = "", divider = true }: SectionProps) {
  const { ref, isVisible } = useReveal();

  return (
    <>
      {divider && <div className="section-divider mx-auto max-w-6xl" />}
      <section
        id={id}
        ref={ref}
        className={`px-6 py-20 md:py-28 ${isVisible ? "reveal-visible" : "reveal-hidden"} ${className}`}
      >
        <div className="mx-auto max-w-6xl">{children}</div>
      </section>
    </>
  );
}
