import type { ButtonHTMLAttributes, ReactNode } from "react";

export type IconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> & {
  label: string;
  icon: ReactNode;
};

export function IconButton({ label, icon, className = "", ...props }: IconButtonProps) {
  return (
    <button
      type="button"
      className={`tws-icon-button ${className}`.trim()}
      aria-label={label}
      title={props.title ?? label}
      {...props}
    >
      <span aria-hidden="true">{icon}</span>
    </button>
  );
}
