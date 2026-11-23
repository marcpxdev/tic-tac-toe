import { Square } from "./Square";
import { getSquareLabel } from "@/lib/game";
import type { BoardState } from "@/lib/game";

interface BoardProps {
  squares: BoardState;
  winningLine: readonly number[] | null;
  gameOver: boolean;
  onSquareClick: (index: number) => void;
}

export function Board({ squares, winningLine, gameOver, onSquareClick }: BoardProps) {
  return (
    <div className="board" role="grid" aria-label="Tic-tac-toe board">
      {squares.map((value, index) => {
        const isWinning = winningLine?.includes(index) ?? false;
        const disabled = gameOver || value !== null;

        return (
          <Square
            key={index}
            value={value}
            isWinning={isWinning}
            disabled={disabled}
            label={getSquareLabel(index, value)}
            onClick={() => onSquareClick(index)}
          />
        );
      })}
    </div>
  );
}
