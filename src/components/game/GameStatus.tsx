import type { GameStatus as GameStatusType } from "@/lib/game";
import { getStatusMessage } from "@/lib/game";

interface GameStatusProps {
  status: GameStatusType;
}

export function GameStatus({ status }: GameStatusProps) {
  const message = getStatusMessage(status);
  const tone =
    status.kind === "won"
      ? "status-won"
      : status.kind === "draw"
        ? "status-draw"
        : "status-progress";

  return (
    <p className={`status ${tone}`} role="status" aria-live="polite" aria-atomic="true">
      {message}
    </p>
  );
}
