import { ROUTES } from '../data/travel';

export function getTravelDuration(from: string, to: string): number {
  if (from === to) return 0;
  const distances = new Map<string, number>([[from, 0]]); const pending = new Set([from]);
  while (pending.size) {
    const current = [...pending].sort((a, b) => (distances.get(a) ?? Infinity) - (distances.get(b) ?? Infinity))[0];
    pending.delete(current); if (current === to) return distances.get(current)!;
    for (const edge of ROUTES) {
      const next = edge.from === current ? edge.to : edge.to === current ? edge.from : null;
      if (!next) continue;
      const distance = distances.get(current)! + edge.durationMs;
      if (distance < (distances.get(next) ?? Infinity)) { distances.set(next, distance); pending.add(next); }
    }
  }
  throw new Error(`No travel route from ${from} to ${to}.`);
}
