import type { ReactNode } from "react";

export type BlockingOperationOverlayProps = {
  open: boolean;
  operation: string;
  item?: ReactNode;
  progress?: number;
  detail?: ReactNode;
};

export function BlockingOperationOverlay({ open, operation, item, progress, detail }: BlockingOperationOverlayProps) {
  if (!open) return null;
  const determinate = typeof progress === "number";
  const normalized = determinate ? Math.max(0, Math.min(100, progress)) : undefined;

  return (
    <div className="tws-blocking-overlay" role="alertdialog" aria-modal="true" aria-labelledby="tws-blocking-operation">
      <div className="tws-blocking-overlay__card">
        <div className="tws-blocking-overlay__spinner" aria-hidden="true" />
        <h2 id="tws-blocking-operation">{operation}</h2>
        {item ? <div className="tws-blocking-overlay__item">{item}</div> : null}
        <div
          className={`tws-progress${determinate ? "" : " tws-progress--indeterminate"}`}
          role="progressbar"
          aria-valuemin={determinate ? 0 : undefined}
          aria-valuemax={determinate ? 100 : undefined}
          aria-valuenow={normalized}
        >
          <span style={determinate ? { width: `${normalized}%` } : undefined} />
        </div>
        {detail ? <div className="tws-blocking-overlay__detail">{detail}</div> : null}
      </div>
    </div>
  );
}
