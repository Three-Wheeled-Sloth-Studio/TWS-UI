# TWS UI

Shared UI implementation for Three-Wheeled Sloth Studio applications.

## Purpose

TWS UI provides a common interaction grammar, component API, design-token system, and accessibility baseline across studio applications while allowing each product to keep its own visual character.

Canonical design guidance lives in:
`Three-Wheeled-Sloth-Studio/TWS-Design-Principles`

This repository implements those principles. Product repositories should consume TWS UI rather than copy shared controls.

## Design direction

- Shared behavior and component APIs across applications.
- Product-specific themes and compositions.
- TWS-owned rendering by default.
- Mature third-party primitives only where interaction correctness is expensive or risky to reproduce.
- No dependency on Material Design visual conventions.
- MUI may be used as an architectural reference, not as the visual identity.

## Packages

- `@tws-ui/tokens` - semantic design tokens and CSS variables.
- `@tws-ui/theme` - theme contracts and theme application helpers.
- `@tws-ui/react` - shared React components.

## Initial component scope

- Button
- IconButton
- PillButton
- Panel
- Card
- Input
- Textarea
- Checkbox
- FormField
- Tag
- Status
- SegmentedControl

Interaction-heavy primitives such as Dialog, Menu, Popover, Tooltip, Combobox, and focus management are planned next and may use focused headless dependencies underneath TWS-owned rendering.

## Product theming

Applications should provide semantic overrides rather than redefining component structure.

Examples:

- Parchment Worlds: parchment surfaces, editorial typography, warm neutral borders.
- World Forge: dark cartographic workspace, compact controls, high-density inspectors.
- Character Forge: artifact-forward tabletop presentation.
- Other TWS applications: same component grammar with product-appropriate visual themes.

## Development

```bash
npm install
npm run verify
```

## Architecture rule

Share interaction grammar and behavior, not sameness.
