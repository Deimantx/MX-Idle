import type { GameState, RandomProvider } from '../../types/game';
export function randomFromState(state: GameState): RandomProvider {
  return () => { state.rngState = (Math.imul(state.rngState, 1664525) + 1013904223) >>> 0; return state.rngState / 0x100000000; };
}
