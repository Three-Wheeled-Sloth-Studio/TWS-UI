import { expect, test } from "@playwright/test";

test("menu dismisses on outside click and restores focus on Escape", async ({ page }) => {
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "More actions" });
  await trigger.click();
  await expect(page.getByRole("menuitem", { name: "Duplicate" })).toBeVisible();
  await page.getByRole("heading", { name: "Actions" }).click();
  await expect(page.getByRole("menuitem", { name: "Duplicate" })).toBeHidden();

  await trigger.focus();
  await page.keyboard.press("Enter");
  await page.keyboard.press("Escape");
  await expect(trigger).toBeFocused();
});

test("popover dismisses on outside click and Escape", async ({ page }) => {
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Open popover" });
  await trigger.click();
  await expect(page.getByText("Compact inspector")).toBeVisible();
  await page.getByRole("heading", { name: "Transient surfaces" }).click();
  await expect(page.getByText("Compact inspector")).toBeHidden();

  await trigger.focus();
  await page.keyboard.press("Enter");
  await page.keyboard.press("Escape");
  await expect(trigger).toBeFocused();
});

test("dialog traps focus and Escape restores the trigger", async ({ page }) => {
  await page.goto("/");
  const trigger = page.getByRole("button", { name: "Destructive action" });
  await trigger.click();
  await expect(page.getByRole("dialog")).toBeVisible();

  const close = page.getByRole("button", { name: "Close" });
  const continueButton = page.getByRole("button", { name: "Continue" });
  await close.focus();
  await page.keyboard.press("Tab");
  await expect(continueButton).toBeFocused();

  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toBeHidden();
  await expect(trigger).toBeFocused();
});

test("select supports keyboard selection and closes after selection", async ({ page }) => {
  await page.goto("/");
  const select = page.getByRole("combobox", { name: "Scale" });
  await select.focus();
  await page.keyboard.press("Enter");
  await page.keyboard.press("ArrowDown");
  await page.keyboard.press("Enter");
  await expect(select).toContainText(/Local|World|Regional/);
  await expect(page.getByRole("option")).toHaveCount(0);
});

test("tooltip is available from keyboard focus", async ({ page }) => {
  await page.goto("/");
  const settings = page.getByRole("button", { name: "Settings" });
  await settings.focus();
  await expect(page.getByRole("tooltip")).toContainText("Application settings");
});
