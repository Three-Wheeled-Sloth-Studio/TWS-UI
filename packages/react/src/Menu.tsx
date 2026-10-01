import * as MenuPrimitive from "@radix-ui/react-dropdown-menu";
import type { ReactNode } from "react";

export type MenuItem = {
  id: string;
  label: ReactNode;
  disabled?: boolean;
  destructive?: boolean;
  onSelect?: () => void;
};

export type MenuProps = { trigger: ReactNode; items: readonly MenuItem[]; label?: string };

export function Menu({ trigger, items, label }: MenuProps) {
  return (
    <MenuPrimitive.Root modal={false}>
      <MenuPrimitive.Trigger asChild>{trigger}</MenuPrimitive.Trigger>
      <MenuPrimitive.Portal>
        <MenuPrimitive.Content className="tws-menu" sideOffset={6} aria-label={label}>
          {items.map((item) => (
            <MenuPrimitive.Item
              key={item.id}
              disabled={item.disabled}
              className={`tws-menu__item${item.destructive ? " tws-menu__item--danger" : ""}`}
              onSelect={item.onSelect}
            >
              {item.label}
            </MenuPrimitive.Item>
          ))}
        </MenuPrimitive.Content>
      </MenuPrimitive.Portal>
    </MenuPrimitive.Root>
  );
}
