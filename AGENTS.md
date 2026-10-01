# TWS UI Agent Guidance

## Authority

Cross-project product and UI principles are defined in:
`Three-Wheeled-Sloth-Studio/TWS-Design-Principles`

TWS UI is the canonical executable implementation layer for shared studio UI behavior and component contracts.

## Core rules

- Prefer TWS-owned rendering.
- Use focused third-party primitives only when they materially improve accessibility, focus management, keyboard interaction, layering, or other difficult interaction behavior.
- Do not introduce Material Design visual conventions as the default visual language.
- Components must be themeable through semantic tokens.
- Product-specific styling belongs in themes or product composition, not forks of shared behavior.
- Keep components small and composable.
- Prefer native semantic HTML before custom ARIA.
- Keyboard and focus behavior are part of component correctness.
- Do not copy shared components into consumer repositories.
- Avoid large files containing unrelated components.
- Every public component should have tests for its core contract before downstream adoption.

## Initial target consumers

- Parchment-Worlds
- World-Forge
- Character-Forge

Other TWS applications may adopt the library as their UI surfaces mature.
