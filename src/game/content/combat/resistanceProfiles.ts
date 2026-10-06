import type { DamageType } from '../../types/gameTypes';
export const DAMAGE_TYPES: readonly DamageType[] = ['Slash','Stab','Crush','Pierce','Puncture','Air','Fire','Water','Earth'];
export const RESISTANCE_PROFILES: Record<string, Record<DamageType,number>> = Object.fromEntries([
  ['M-A',[16,14,18,28,24,2,-8,4,0]],['M-B',[24,18,28,32,28,-5,-10,0,8]],['M-C',[12,18,14,24,20,0,-5,8,-8]],
  ['R-A',[-8,0,4,16,18,28,24,22,26]],['R-B',[0,-5,6,22,16,30,26,20,28]],['R-C',[-10,2,0,14,22,24,30,18,24]],
  ['G-A',[28,24,30,-8,0,16,18,14,16]],['G-B',[24,30,22,0,-6,20,12,18,16]],['G-C',[32,26,24,-10,-5,14,20,16,18]],
].map(([name,values])=>[name,Object.fromEntries(DAMAGE_TYPES.map((type,i)=>[type,(values as number[])[i]!]))])) as Record<string,Record<DamageType,number>>;
