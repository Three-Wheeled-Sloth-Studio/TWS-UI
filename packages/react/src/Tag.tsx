import type { HTMLAttributes } from "react";

export function Tag({ className = "", ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={`tws-tag ${className}`.trim()} {...props} />;
}
