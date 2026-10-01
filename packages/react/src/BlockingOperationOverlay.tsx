import * as DialogPrimitive from "@radix-ui/react-dialog";
import type { ReactNode } from "react";

export type BlockingOperationOverlayProps = {
  open: boolean;
  operation: string;
  item?: ReactNode;
  progress?: number;
  detail?: ReactNode;
};

export function BlockingOperationOverlay({ open, operation, item, progress, detail }: BlockingOperationOverlayProps) {
  const determinate = typeof progress === "number";
  const normalized = determinate ? Math.max(0, Math.min(100, progress)) : undefined;

  return (
    <DialogPrimitive.Root open={open}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="tws-blocking-overlay" />
        <DialogPrimitive.Content
          className="tws-blocking-overlay__card"
          onEscapeKeyDown={(event) => event.preventDefault()}
          onPointerDownOutside={(event) => event.preventDefault()}
          onInteractOutside={(event) => event.preventDefault()}
        >
          <div className="tws-blocking-overlay__spinner" aria-hidden="true" />
          <DialogPrimitive.Title className="tws-blocking-overlay__title">{operation}</DialogPrimitive.Title>
          <DialogPrimitive.Description asChild>
            <div>
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
          </DialogPrimitive.Description>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
