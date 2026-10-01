import { describe, expect, it } from "vitest";
import { createTheme, parchmentTheme, worldForgeTheme } from "./index";

describe("themes", () => {
  it("creates semantic TWS variable themes", () => {
    const theme = createTheme("test", {
      "--tws-color-surface-canvas": "#000"
    });
    expect(theme.name).toBe("test");
    expect(theme.variables["--tws-color-surface-canvas"]).toBe("#000");
  });

  it("keeps product themes on the same semantic token contract", () => {
    expect(parchmentTheme.variables["--tws-color-action-primary"]).toBeTruthy();
    expect(worldForgeTheme.variables["--tws-color-action-primary"]).toBeTruthy();
  });
});
