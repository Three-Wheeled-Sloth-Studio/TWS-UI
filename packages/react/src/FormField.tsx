import type { ReactNode } from "react";

export type FormFieldProps = {
  label: ReactNode;
  children: ReactNode;
  hint?: ReactNode;
  error?: ReactNode;
};

export function FormField({ label, children, hint, error }: FormFieldProps) {
  return (
    <label className="tws-form-field">
      <span className="tws-form-field__label">{label}</span>
      {children}
      {error ? <span className="tws-form-field__error">{error}</span> : null}
      {!error && hint ? <span className="tws-form-field__hint">{hint}</span> : null}
    </label>
  );
}
