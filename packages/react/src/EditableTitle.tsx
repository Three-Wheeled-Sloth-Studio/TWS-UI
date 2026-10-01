import { useEffect, useRef, useState } from "react";

export type EditableTitleProps = {
  value: string;
  onCommit: (value: string) => void;
  label?: string;
  disabled?: boolean;
};

export function EditableTitle({ value, onCommit, label = "Edit title", disabled = false }: EditableTitleProps) {
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(value);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => setDraft(value), [value]);
  useEffect(() => { if (editing) inputRef.current?.select(); }, [editing]);

  const cancel = () => { setDraft(value); setEditing(false); };
  const commit = () => {
    const next = draft.trim();
    if (next && next !== value) onCommit(next);
    else setDraft(value);
    setEditing(false);
  };

  if (!editing) {
    return (
      <div className="tws-editable-title">
        <span className="tws-editable-title__value">{value}</span>
        <button type="button" className="tws-editable-title__edit" aria-label={label} title={label} disabled={disabled} onClick={() => setEditing(true)}>edit</button>
      </div>
    );
  }

  return (
    <input
      ref={inputRef}
      className="tws-input tws-editable-title__input"
      aria-label={label}
      value={draft}
      onChange={(event) => setDraft(event.target.value)}
      onBlur={commit}
      onKeyDown={(event) => {
        if (event.key === "Enter") commit();
        if (event.key === "Escape") { event.preventDefault(); cancel(); }
      }}
    />
  );
}
