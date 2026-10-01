export type Segment<T extends string> = {
  value: T;
  label: string;
};

export type SegmentedControlProps<T extends string> = {
  value: T;
  options: readonly Segment<T>[];
  onChange: (value: T) => void;
  label: string;
};

export function SegmentedControl<T extends string>({
  value,
  options,
  onChange,
  label
}: SegmentedControlProps<T>) {
  return (
    <div className="tws-segmented-control" role="group" aria-label={label}>
      {options.map((option) => (
        <button
          type="button"
          key={option.value}
          className={option.value === value ? "is-active" : ""}
          aria-pressed={option.value === value}
          onClick={() => onChange(option.value)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
