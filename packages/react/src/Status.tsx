import type { HTMLAttributes, ReactNode } from "react";

export type StatusTone = "neutral" | "success" | "warning" | "danger" | "info";

export type StatusProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: StatusTone;
  icon?: ReactNode;
};

export function Status({ tone = "neutral", icon, className = "", children, ...props }: StatusProps) {
  return (
    <span className={`tws-status tws-status--${tone} ${className}`.trim()} {...props}>
      {icon ? <span className="tws-status__icon" aria-hidden="true">{icon}</span> : null}
      {children}
    </span>
  );
}
