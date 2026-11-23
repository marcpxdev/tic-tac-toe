import type { SquareValue } from "@/lib/game";

interface SquareProps {
  value: SquareValue;
  isWinning: boolean;
  disabled: boolean;
  label: string;
  onClick: () => void;
}

export function Square({ value, isWinning, disabled, label, onClick }: SquareProps) {
  return (
    <button
      type="button"
      className={[
        "square-button",
        value === "X" ? "square-x" : "",
        value === "O" ? "square-o" : "",
        isWinning ? "square-winning" : "",
      ]
        .filter(Boolean)
        .join(" ")}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
    >
      <span aria-hidden="true" className="square-value">
        {value === "X" ? "❌" : value === "O" ? "⭕" : ""}
      </span>
    </button>
  );
}
