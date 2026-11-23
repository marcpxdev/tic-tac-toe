export type Player = "X" | "O";

export type SquareValue = Player | null;

export type BoardState = SquareValue[];

export interface WinningLine {
  line: [number, number, number];
  winner: Player;
}

export type GameStatus =
  | { kind: "in_progress"; nextPlayer: Player }
  | { kind: "won"; winner: Player; line: [number, number, number] }
  | { kind: "draw" };

export interface PlayerScore {
  wins: number;
  losses: number;
}

export interface ScoreState {
  X: PlayerScore;
  O: PlayerScore;
}
