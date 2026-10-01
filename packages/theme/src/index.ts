export type TwsTheme = {
  name: string;
  variables: Record<`--tws-${string}`, string>;
};

export const createTheme = (
  name: string,
  variables: TwsTheme["variables"]
): TwsTheme => ({ name, variables });

export const themeVariables = (theme: TwsTheme): string =>
  Object.entries(theme.variables)
    .map(([key, value]) => `${key}: ${value};`)
    .join("\n");

export const parchmentTheme = createTheme("parchment", {
  "--tws-font-utility": "Inter, system-ui, sans-serif",
  "--tws-font-display": "Georgia, 'Times New Roman', serif",
  "--tws-color-surface-canvas": "#eee2c9",
  "--tws-color-surface-panel": "#fff9eb",
  "--tws-color-surface-raised": "#fffdf8",
  "--tws-color-surface-inset": "#f2eadf",
  "--tws-color-text-primary": "#241f1a",
  "--tws-color-text-muted": "#66594b",
  "--tws-color-border-normal": "#c2ae8d",
  "--tws-color-border-strong": "#88715e",
  "--tws-color-action-primary": "#1f5f65",
  "--tws-color-action-primary-hover": "#174d52",
  "--tws-color-action-subtle": "#d7eceb"
});

export const worldForgeTheme = createTheme("world-forge", {
  "--tws-color-surface-canvas": "#142320",
  "--tws-color-surface-panel": "#1b2d29",
  "--tws-color-surface-raised": "#223732",
  "--tws-color-surface-inset": "#10201d",
  "--tws-color-text-primary": "#eef3ee",
  "--tws-color-text-muted": "#a9b8b0",
  "--tws-color-border-normal": "#49625b",
  "--tws-color-border-strong": "#789086",
  "--tws-color-action-primary": "#76a9a1",
  "--tws-color-action-primary-hover": "#91beb7",
  "--tws-color-action-subtle": "#294a45"
});
