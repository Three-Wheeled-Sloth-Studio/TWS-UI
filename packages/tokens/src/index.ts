export const twsTokens = {
  color: {
    surface: {
      canvas: "var(--tws-color-surface-canvas)",
      panel: "var(--tws-color-surface-panel)",
      raised: "var(--tws-color-surface-raised)",
      inset: "var(--tws-color-surface-inset)"
    },
    text: {
      primary: "var(--tws-color-text-primary)",
      muted: "var(--tws-color-text-muted)",
      inverse: "var(--tws-color-text-inverse)"
    },
    border: {
      normal: "var(--tws-color-border-normal)",
      strong: "var(--tws-color-border-strong)"
    },
    action: {
      primary: "var(--tws-color-action-primary)",
      primaryHover: "var(--tws-color-action-primary-hover)",
      subtle: "var(--tws-color-action-subtle)"
    },
    state: {
      success: "var(--tws-color-state-success)",
      warning: "var(--tws-color-state-warning)",
      danger: "var(--tws-color-state-danger)",
      info: "var(--tws-color-state-info)"
    }
  },
  font: {
    utility: "var(--tws-font-utility)",
    display: "var(--tws-font-display)"
  },
  radius: {
    input: "var(--tws-radius-input)",
    button: "var(--tws-radius-button)",
    pill: "var(--tws-radius-pill)",
    panel: "var(--tws-radius-panel)"
  },
  space: {
    1: "var(--tws-space-1)",
    2: "var(--tws-space-2)",
    3: "var(--tws-space-3)",
    4: "var(--tws-space-4)",
    5: "var(--tws-space-5)",
    6: "var(--tws-space-6)"
  }
} as const;

export type TwsTokens = typeof twsTokens;
