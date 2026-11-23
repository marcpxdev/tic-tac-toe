"use client";

import { useMemo, useState } from "react";

import { Board } from "./Board";
import { GameStatus } from "./GameStatus";
import { createEmptyBoard, getGameStatus, getNextPlayer } from "@/lib/game";
import type { BoardState, Player, ScoreState } from "@/lib/game";

export function Game() {
  const [squares, setSquares] = useState<BoardState>(createEmptyBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const [scores, setScores] = useState<ScoreState>({
    X: { wins: 0, losses: 0 },
    O: { wins: 0, losses: 0 },
  });

  const status = useMemo(() => getGameStatus(squares, xIsNext), [squares, xIsNext]);
  const winningLine = status.kind === "won" ? status.line : null;
  const gameOver = status.kind !== "in_progress";

  function handleSquareClick(index: number) {
    if (squares[index] || gameOver) {
      return;
    }

    const nextSquares = squares.slice();
    nextSquares[index] = getNextPlayer(xIsNext);
    setSquares(nextSquares);
    setXIsNext((current) => !current);

    const nextStatus = getGameStatus(nextSquares, !xIsNext);
    if (nextStatus.kind === "won") {
      handleGameOver(nextStatus.winner);
    }
  }

  function handleNewGame() {
    setSquares(createEmptyBoard());
    setXIsNext(true);
  }

  function handleGameOver(winner: Player) {
    setScores((current) => {
      const next: ScoreState = {
        X: { ...current.X },
        O: { ...current.O },
      };
      if (winner === "X") {
        next.X.wins += 1;
        next.O.losses += 1;
      } else {
        next.O.wins += 1;
        next.X.losses += 1;
      }
      return next;
    });
  }

  return (
    <section className="game-shell" aria-labelledby="game-title">
      <div className="game-panel">
        <header className="game-header">
          <p className="eyebrow">Two players · One device</p>
          <h1 id="game-title" className="game-title">
            Tic-Tac-Toe
          </h1>
          <p className="game-copy">
            Take turns placing X and O. Get three in a row to win.
          </p>
        </header>

        <GameStatus status={status} />

        <Board
          squares={squares}
          winningLine={winningLine}
          gameOver={gameOver}
          onSquareClick={handleSquareClick}
        />

        <div className="game-score">
          <p className="score">
            X · W: {scores.X.wins} · L: {scores.X.losses}
          </p>
          <p className="score">
            O · W: {scores.O.wins} · L: {scores.O.losses}
          </p>
        </div>

        <div className="game-actions">
          <button type="button" className="new-game-button" onClick={handleNewGame}>
            New Game
          </button>
        </div>
      </div>
    </section>
  );
}
