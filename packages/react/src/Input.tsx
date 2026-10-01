import type { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

export function Input({ className = "", ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={`tws-input ${className}`.trim()} {...props} />;
}

export function Textarea({ className = "", ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={`tws-input tws-textarea ${className}`.trim()} {...props} />;
}
