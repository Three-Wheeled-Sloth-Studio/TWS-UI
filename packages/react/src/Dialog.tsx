import * as DialogPrimitive from "@radix-ui/react-dialog";
import type { ReactNode } from "react";

export type DialogProps = {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  trigger?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
};

export function Dialog({ open, onOpenChange, trigger, title, description, children, footer }: DialogProps) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      {trigger ? <DialogPrimitive.Trigger asChild>{trigger}</DialogPrimitive.Trigger> : null}
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="tws-dialog__overlay" />
        <DialogPrimitive.Content className="tws-dialog">
          <header className="tws-dialog__header">
            <DialogPrimitive.Title className="tws-dialog__title">{title}</DialogPrimitive.Title>
            {description ? <DialogPrimitive.Description className="tws-dialog__description">{description}</DialogPrimitive.Description> : null}
          </header>
          <div className="tws-dialog__body">{children}</div>
          {footer ? <footer className="tws-dialog__footer">{footer}</footer> : null}
          <DialogPrimitive.Close className="tws-dialog__close" aria-label="Close" title="Close">x</DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
