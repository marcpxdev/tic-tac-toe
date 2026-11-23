import assert from "node:assert/strict";
import test from "node:test";

import { calculateWinner } from "./calculate-winner.ts";
import { getGameStatus } from "./game-utils.ts";
import type { BoardState } from "./types.ts";


const emptyBoard = (): BoardState => Array<BoardState[number]>(9).fill(null);

test("returns null for an empty board", () => {
  assert.equal(calculateWinner(emptyBoard()), null);
});

test("detects all winning lines", () => {
  const winningLines: [number, number, number][] = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (const line of winningLines) {
    const board = emptyBoard();
    for (const index of line) {
      board[index] = "X";
    }

    const result = calculateWinner(board);
    assert.ok(result, `Expected win for line ${line.join(",")}`);
    assert.equal(result.winner, "X");
    assert.deepEqual(result.line, line);
  }
});

test("detects a draw on a full board", () => {
  const board: BoardState = ["X", "O", "X", "X", "O", "O", "O", "X", "X"];
  assert.equal(calculateWinner(board), null);
  assert.deepEqual(getGameStatus(board, true), { kind: "draw" });
});

test("detects win on the ninth move before draw", () => {
  // X fills the 9th square to complete the top row.
  const board: BoardState = ["X", "X", "X", "O", "O", "X", "X", "O", "O"];
  const status = getGameStatus(board, false);
  assert.deepEqual(status, { kind: "won", winner: "X", line: [0, 1, 2] });
});

test("returns in-progress status when game is not over", () => {
  const board = emptyBoard();
  board[0] = "X";
  assert.deepEqual(getGameStatus(board, false), {
    kind: "in_progress",
    nextPlayer: "O",
  });
});
