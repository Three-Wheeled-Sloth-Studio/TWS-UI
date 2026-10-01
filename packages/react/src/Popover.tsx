import * as PopoverPrimitive from "@radix-ui/react-popover";
import type { ReactNode } from "react";

export type PopoverProps = {
  trigger: ReactNode;
  children: ReactNode;
  align?: "start" | "center" | "end";
  side?: "top" | "right" | "bottom" | "left";
};

export function Popover({ trigger, children, align = "start", side = "bottom" }: PopoverProps) {
  return (
    <PopoverPrimitive.Root>
      <PopoverPrimitive.Trigger asChild>{trigger}</PopoverPrimitive.Trigger>
      <PopoverPrimitive.Portal>
        <PopoverPrimitive.Content className="tws-popover" align={align} side={side} sideOffset={6}>
          {children}
        </PopoverPrimitive.Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
}
