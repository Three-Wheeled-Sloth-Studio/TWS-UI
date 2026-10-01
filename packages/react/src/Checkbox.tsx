import type { InputHTMLAttributes, ReactNode } from "react";

export type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type"> & {
  label: ReactNode;
  description?: ReactNode;
};

export function Checkbox({ label, description, className = "", ...props }: CheckboxProps) {
  return (
    <label className={`tws-checkbox ${className}`.trim()}>
      <input className="tws-checkbox__input" type="checkbox" {...props} />
      <span className="tws-checkbox__box" aria-hidden="true" />
      <span className="tws-checkbox__content">
        <span className="tws-checkbox__label">{label}</span>
        {description ? <span className="tws-checkbox__description">{description}</span> : null}
      </span>
    </label>
  );
}
