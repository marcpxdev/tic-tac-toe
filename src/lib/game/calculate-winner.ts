import { WINNING_LINES } from "./constants.ts";
import type { BoardState, WinningLine } from "./types.ts";

export function calculateWinner(squares: BoardState): WinningLine | null {
  for (const line of WINNING_LINES) {
    const [a, b, c] = line;
    const player = squares[a];

    if (player && player === squares[b] && player === squares[c]) {
      return { line, winner: player };
    }
  }

  return null;
}
