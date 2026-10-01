import type { HTMLAttributes } from "react";

export type PanelProps = HTMLAttributes<HTMLDivElement> & {
  elevation?: "flat" | "raised";
};

export function Panel({ elevation = "flat", className = "", ...props }: PanelProps) {
  return (
    <div
      className={`tws-panel tws-panel--${elevation} ${className}`.trim()}
      {...props}
    />
  );
}
