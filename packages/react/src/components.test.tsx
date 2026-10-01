import { describe, expect, it } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { Button } from "./Button";
import { Checkbox } from "./Checkbox";
import { Status } from "./Status";
import { FormField } from "./FormField";
import { IconButton } from "./IconButton";
import { Input } from "./Input";
import { Panel } from "./Panel";
import { SegmentedControl } from "./SegmentedControl";
import { Tag } from "./Tag";

describe("core components", () => {
  it("renders button variants and icons without leaking icon semantics", () => {
    const html = renderToStaticMarkup(<Button variant="primary" icon={<span>icon</span>}>Generate</Button>);
    expect(html).toContain("tws-button--primary");
    expect(html).toContain('aria-hidden="true"');
    expect(html).toContain("Generate");
  });

  it("requires an accessible label for icon buttons", () => {
    const html = renderToStaticMarkup(<IconButton label="Settings" icon={<span>S</span>} />);
    expect(html).toContain('aria-label="Settings"');
    expect(html).toContain('title="Settings"');
  });

  it("renders shared form, panel, tag, and segmented-control contracts", () => {
    const html = renderToStaticMarkup(
      <Panel elevation="raised">
        <FormField label="Name" hint="Helpful context"><Input defaultValue="Ashfall" /></FormField>
        <Tag>Ready</Tag>
        <SegmentedControl label="Mode" value="edit" onChange={() => undefined} options={[
          { value: "edit", label: "Edit" },
          { value: "inspect", label: "Inspect" }
        ]} />
      </Panel>
    );
    expect(html).toContain("tws-panel--raised");
    expect(html).toContain("Helpful context");
    expect(html).toContain("tws-tag");
    expect(html).toContain('role="group"');
    expect(html).toContain('aria-pressed="true"');
  });

  it("renders checkbox and status semantics", () => {
    const html = renderToStaticMarkup(
      <div>
        <Checkbox label="Include resources" defaultChecked />
        <Status tone="success">Synced</Status>
      </div>
    );
    expect(html).toContain('type="checkbox"');
    expect(html).toContain("tws-status--success");
  });
});
