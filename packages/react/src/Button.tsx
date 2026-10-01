import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "subtle" | "danger";
export type ButtonSize = "compact" | "normal";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
};

export function Button({
  variant = "secondary",
  size = "normal",
  icon,
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`tws-button tws-button--${variant} tws-button--${size} ${className}`.trim()}
      {...props}
    >
      {icon ? <span className="tws-button__icon" aria-hidden="true">{icon}</span> : null}
      {children}
    </button>
  );
}
