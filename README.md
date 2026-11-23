# Tic-Tac-Toe

A polished two-player Tic-Tac-Toe game built with Next.js, TypeScript, and Tailwind CSS.

## Features

- Two players take turns placing **X** and **O** on the same device.
- Winner detection across all 8 winning lines.
- Draw detection, including correct handling of a win on the final move.
- Occupied squares cannot be overwritten; moves are blocked after game over.
- **New Game** resets the board and turn.
- Accessible UI with button squares, per-square labels, and live status announcements.
- Responsive layout with winning-line highlight.

## Architecture

```text
src/
  app/                    # Next.js App Router entrypoints
    layout.tsx
    page.tsx
    globals.css
  components/game/        # Interactive UI components
    Game.tsx              # Client state owner
    Board.tsx             # 3x3 grid rendering
    Square.tsx            # Accessible square button
    GameStatus.tsx        # aria-live status display
  lib/game/               # Pure game domain logic
    types.ts
    constants.ts
    calculate-winner.ts
    game-utils.ts
    calculate-winner.test.ts
```

Design notes:

- Game rules live in `src/lib/game` as pure, framework-agnostic functions.
- `Game` owns minimal state (`squares`, `xIsNext`); status/winner are derived.
- UI components are small and focused, making the game easy to test and extend.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev    # Start development server
npm run lint   # Run ESLint
npm test       # Run unit tests (Node test runner)
npm run build  # Create production build
npm run start  # Start production server
```

## Deployment

Deploy on Vercel after the project is ready:

1. Push the repository to GitHub.
2. Import the repo in Vercel.
3. Use the default Next.js build settings (`npm run build`).
4. Verify the live URL on desktop and mobile.
