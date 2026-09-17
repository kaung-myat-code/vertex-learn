interface ProgressBarProps {
  value: number;
  max?: number;
  showLabel?: boolean;
}

export function ProgressBar({ value, max = 100, showLabel = true }: ProgressBarProps) {
  const percentage = Math.min(Math.round((value / max) * 100), 100);

  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-2 bg-neutral-200 rounded-radius-full overflow-hidden">
        <div
          className="h-full bg-primary-500 rounded-radius-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <span className="text-sm text-neutral-500 whitespace-nowrap">
          {percentage}% complete
        </span>
      )}
    </div>
  );
}
