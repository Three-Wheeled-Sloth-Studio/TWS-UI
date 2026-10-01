import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Settings, MoreHorizontal, RefreshCw } from "lucide-react";
import { Button, Dialog, FormField, IconButton, Input, Menu, Panel, Popover, SegmentedControl, Select, Tag, Tooltip } from "@tws-ui/react";
import { parchmentTheme, worldForgeTheme, type TwsTheme } from "@tws-ui/theme";
import "@tws-ui/react/styles.css";
import "./showcase.css";

function themeStyle(theme: TwsTheme): React.CSSProperties {
  return theme.variables as React.CSSProperties;
}

function App() {
  const [theme, setTheme] = useState<"parchment" | "world">("parchment");
  const [mode, setMode] = useState("edit");
  const activeTheme = theme === "parchment" ? parchmentTheme : worldForgeTheme;

  return (
    <main className="showcase" style={themeStyle(activeTheme)}>
      <header className="showcase__header">
        <div><h1>TWS UI</h1><p>Shared grammar, product character.</p></div>
        <SegmentedControl label="Theme" value={theme} onChange={setTheme} options={[
          { value: "parchment", label: "Parchment" },
          { value: "world", label: "World Forge" }
        ]} />
      </header>

      <Panel elevation="raised" className="showcase__section">
        <h2>Actions</h2>
        <div className="showcase__row">
          <Button variant="primary" icon={<RefreshCw size={16}/>}>Generate</Button>
          <Button>Secondary</Button>
          <Button variant="subtle">Subtle</Button>
          <Tooltip content="Application settings"><IconButton label="Settings" icon={<Settings size={17}/>} /></Tooltip>
          <Menu trigger={<IconButton label="More actions" icon={<MoreHorizontal size={17}/>} />} items={[
            { id: "duplicate", label: "Duplicate" },
            { id: "archive", label: "Archive" },
            { id: "delete", label: "Delete", destructive: true }
          ]}/>
        </div>
      </Panel>

      <Panel elevation="raised" className="showcase__section">
        <h2>Forms and state</h2>
        <div className="showcase__grid">
          <FormField label="World name" hint="Editable primary identity"><Input defaultValue="The Broken Marches"/></FormField>
          <FormField label="Scale"><Select label="Scale" defaultValue="regional" options={[
            { value: "local", label: "Local" }, { value: "regional", label: "Regional" }, { value: "world", label: "World" }
          ]}/></FormField>
        </div>
        <div className="showcase__row">
          <Tag>Ready</Tag><Tag>3/60 complete</Tag>
          <SegmentedControl label="Mode" value={mode} onChange={setMode} options={[
            { value: "edit", label: "Edit" }, { value: "inspect", label: "Inspect" }
          ]}/>
        </div>
      </Panel>

      <Panel elevation="raised" className="showcase__section">
        <h2>Transient surfaces</h2>
        <div className="showcase__row">
          <Popover trigger={<Button>Open popover</Button>}><strong>Compact inspector</strong><p>Supporting information stays close to the action.</p></Popover>
          <Dialog
            title="Regenerate region?"
            description="This demonstrates modal focus and dismissal behavior."
            trigger={<Button variant="danger">Destructive action</Button>}
            footer={<Button variant="primary">Continue</Button>}
          ><p>Dialogs use TWS styling with focused headless interaction behavior underneath.</p></Dialog>
        </div>
      </Panel>
    </main>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
