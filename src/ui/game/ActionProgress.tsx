import { useEffect, useState } from 'react';

type Props = { active: boolean; remainingMs: number; durationMs: number; phaseKey: string | number; speedMultiplier?: number; label?: string; tone?: string };

export function interpolateProgress(remainingMs: number, elapsedMs: number, durationMs: number, speedMultiplier = 1) {
  const duration = Math.max (1, durationMs);
  const remaining = Math.max (0, Math.min(duration, remainingMs - Math.max (0, elapsedMs) * Math.max (0, speedMultiplier)));
  return Math.max (0, Math.min(1, 1 - remaining / duration));
}

export function ActionProgress({ active, remainingMs, durationMs, phaseKey, speedMultiplier = 1, label = 'Action progress', tone = 'copper' }: Props) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const duration = Math.max (1, durationMs);
    let frame = 0, last = 0;
    const snapshotAt = performance.now();
    const draw = (now: number) => {
      if (now - last >= 16 || !last) {
        last = now;
        setProgress(active ? interpolateProgress(remainingMs, now - snapshotAt, duration, speedMultiplier) : 0);
      }
      if (active) frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);
    return () => cancelAnimationFrame(frame);
  }, [active, remainingMs, durationMs, phaseKey, speedMultiplier]);
  return <div className={`action-progress ${tone}`} role="progressbar" aria-label={label} aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(progress * 100)}><span style={{ transform: `scaleX(${progress})` }} /></div>;
}
