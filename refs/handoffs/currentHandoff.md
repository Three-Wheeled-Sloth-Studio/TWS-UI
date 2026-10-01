# Current Handoff

## Current direction

TWS-UI is the shared executable design-system layer for Three-Wheeled Sloth Studio applications.

Architecture follows TWS-owned rendering with focused headless primitives as a fallback for interaction correctness.

## Implemented

- semantic token package;
- theme package;
- Parchment and World Forge theme seeds;
- React component package;
- Button, IconButton, Panel, Input, Textarea, FormField, Tag, SegmentedControl;
- Dialog, Popover, Tooltip, Menu, Select backed by focused Radix primitives;
- visual showcase with live Parchment and World Forge theme switching;
- theme tests and core component server-render contract tests;
- verification workflow.

## Next slice

1. Add browser-level interaction tests for Dialog, Popover, Tooltip, Menu, and Select.
2. Add Checkbox and status/state components.
3. Add common workflow patterns: BlockingOperationOverlay and EditableTitle.
4. Add visual regression coverage for the showcase.
5. Once green, begin Parchment-Worlds consumption with low-risk primitives before migrating transient surfaces.

Do not migrate consumer applications until TWS-UI verification is green.
