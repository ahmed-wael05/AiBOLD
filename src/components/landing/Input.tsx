import { type InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className = "", ...props }: InputProps) {
  return (
    <input
      className={`w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors duration-200 focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring ${className}`}
      {...props}
    />
  );
}

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function Textarea({ className = "", ...props }: TextareaProps) {
  return (
    <textarea
      className={`w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground transition-colors duration-200 focus:border-ring focus:outline-none focus:ring-1 focus:ring-ring resize-none ${className}`}
      rows={4}
      {...props}
    />
  );
}
