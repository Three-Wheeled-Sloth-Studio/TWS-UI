# TWS UI Architecture

## Responsibility split

- TWS-Design-Principles defines durable studio interaction and design rules.
- TWS-UI implements shared tokens, themes, component APIs, and reusable behavior.
- Product repositories compose TWS-UI into product-specific workflows and visual identity.

## Layers

1. Semantic design tokens.
2. Theme contracts and product overrides.
3. TWS-owned visual components.
4. Focused headless primitives for difficult interaction mechanics.
5. Reusable studio workflow patterns.
6. Product composition.

## Dependency rule

Consumer applications import TWS APIs. They do not depend directly on the headless primitive used inside a TWS component unless the product has a documented requirement outside the shared component contract.

## Hybrid fallback

TWS owns rendering by default. A focused third-party primitive is appropriate when it materially reduces risk around:

- focus trapping and restoration;
- keyboard navigation;
- outside interaction;
- portal and layering behavior;
- ARIA interaction patterns.

Current interaction-heavy components use Radix primitives internally for this reason.

## Theme rule

Themes override semantic tokens. Product identity should not require component forks.

A shared Button remains a shared Button in Parchment Worlds and World Forge even when surface, color, typography, density, or atmosphere differ.

## Testing

Core visual components receive contract tests for semantic output and public API behavior.

Transient controls require browser-level interaction tests covering:

- outside-click dismissal;
- Escape dismissal;
- trigger focus restoration;
- keyboard navigation;
- modal focus containment;
- destination clicks not being swallowed.

Visual regression coverage should be added once the showcase stabilizes.
