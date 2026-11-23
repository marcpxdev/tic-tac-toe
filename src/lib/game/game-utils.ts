import { BOARD_SIZE } from "./constants.ts";
import { calculateWinner } from "./calculate-winner.ts";
import type { BoardState, GameStatus, Player } from "./types.ts";

export function getNextPlayer(xIsNext: boolean): Player {
  return xIsNext ? "X" : "O";
}

export function getGameStatus(squares: BoardState, xIsNext: boolean): GameStatus {
  const winningResult = calculateWinner(squares);

  if (winningResult) {
    return {
      kind: "won",
      winner: winningResult.winner,
      line: winningResult.line,
    };
  }

  const isDraw = squares.every((square) => square !== null);
  if (isDraw) {
    return { kind: "draw" };
  }

  return { kind: "in_progress", nextPlayer: getNextPlayer(xIsNext) };
}

export function getStatusMessage(status: GameStatus): string {
  switch (status.kind) {
    case "won":
      return `Winner: ${status.winner}`;
    case "draw":
      return "It's a draw!";
    case "in_progress":
      return `Next player: ${status.nextPlayer}`;
  }
}

export function getSquareLabel(index: number, value: BoardState[number]): string {
  const row = Math.floor(index / 3) + 1;
  const column = (index % 3) + 1;
  const state = value ? `occupied by ${value}` : "empty";

  return `Row ${row}, column ${column}, ${state}`;
}

export function isBoardFull(squares: BoardState): boolean {
  return squares.length === BOARD_SIZE && squares.every((square) => square !== null);
}
