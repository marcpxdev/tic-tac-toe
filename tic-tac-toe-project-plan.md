# Project Plan: Tic-Tac-Toe in Next.js, Deployed on Vercel

**Goal:** A live site where two players take turns, the game announces a winner or draw, and a New Game button resets it.

**Stack:** React + Next.js
**Deployment:** Vercel
**Submission:** https://apply.capm.us
**Estimated effort:** about 3-5 hours total

> Note: This plan is based on the written instructions. Check the demo video for any extra details (styling, layout, specific behaviors) and adjust as needed.

---

## Phase 1: Setup (30 min)

- [ ] Create the app with `npx create-next-app@latest` (App Router, TypeScript recommended)
- [ ] Create a GitHub repo and push the initial commit
- [ ] Connect the repo to Vercel early so every push deploys. This surfaces deployment issues on day one rather than at the deadline.

## Phase 2: Board and Turns (45 min)

- [ ] Create components: `Game` (state owner), `Board`, `Square`
- [ ] Add `"use client"` to the interactive components, since they use state
- [ ] State: `squares` (array of 9) and `xIsNext` (boolean)
- [ ] Clicking a square places the current player's mark and flips the turn
- [ ] Ignore clicks on occupied squares

## Phase 3: Win/Draw Logic (45 min)

- [ ] Write a `calculateWinner(squares)` helper that checks the 8 winning lines
- [ ] Derive the status instead of storing it:
  - Winner found → "Winner: X"
  - Board full, no winner → "It's a draw!"
  - Otherwise → "Next player: O"
- [ ] Block further moves once the game is over

## Phase 4: New Game (15 min)

- [ ] Add a button that resets `squares` and `xIsNext`
- [ ] Keep it always visible (the brief doesn't specify, so this is the safe choice)

## Phase 5: Polish (45-60 min)

Not required, but these help a submission stand out.

- [ ] Clean, responsive layout that works on mobile
- [ ] Highlight the winning line
- [ ] Use emoji or custom icons for the marks (allowed by the brief)
- [ ] Accessibility:
  - Use `<button>` elements for squares
  - Add an `aria-label` per square (e.g. "Row 1, column 2, empty")
  - Add an `aria-live` region for the status
- [ ] Optional extras: score tracker, move history

## Phase 6: Test and Ship (30-45 min)

- [ ] Unit-test `calculateWinner` (all 8 lines, a draw, an empty board)
- [ ] Run `npm run build` locally to catch errors before Vercel does
- [ ] Check the live URL on desktop and phone
- [ ] Write a short README: what you built, how to run it, and the live link
- [ ] Submit at https://apply.capm.us

---

## Definition of Done

- [ ] Live Vercel URL loads without errors
- [ ] X and O alternate correctly
- [ ] Occupied squares can't be overwritten
- [ ] Winner is displayed correctly for all 8 lines
- [ ] Draw is detected on a full board
- [ ] New Game fully resets the board and the turn
- [ ] Submitted through the application link

---

## Risks and Mitigations

| Risk | Mitigation |
|---|---|
| Hydration or `"use client"` errors | Keep state in client components only |
| Build passes locally but fails on Vercel | Deploy in Phase 1 and redeploy often |
| Win/draw edge case (win on the 9th move) | Check for a winner *before* checking for a draw |
| Overbuilding | Finish the three required features first, then polish |

---

## Timeline Summary

| Phase | Task | Estimate |
|---|---|---|
| 1 | Setup and early Vercel deploy | 30 min |
| 2 | Board and turns | 45 min |
| 3 | Win/draw logic | 45 min |
| 4 | New Game button | 15 min |
| 5 | Polish | 45-60 min |
| 6 | Test and ship | 30-45 min |
| | **Total** | **~3-4 hours** |
