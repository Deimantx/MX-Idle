export type ItemId = 'pickaxe' | 'hammer' | 'ore' | 'ingot' | 'sword' | 'helm' | 'plate' | 'gloves' | 'greaves' | 'shield' | 'trophy';
export type SkillId = 'Mining' | 'Smithing' | 'Attack' | 'Defence' | 'Hitpoints';
export type Activity = 'mining' | 'smelting' | 'forging' | 'combat' | null;
export type RecipeId = 'sword' | 'helm' | 'plate' | 'gloves' | 'greaves' | 'shield';
export type SaveState = {
  version: 1; savedAt: number; rng: number; page: string; activity: Activity;
  skills: Record<SkillId, { xp: number; level: number }>; bank: Partial<Record<ItemId, number>>;
  gold: number; equipped: { tool: boolean; hammer: boolean; weapon: ItemId | null; offhand: ItemId | null; head: ItemId | null; armor: ItemId | null; hands: ItemId | null; feet: ItemId | null };
  mining: { stage: number; density: number; timer: number; cycles: number; strikes: number; sessionOre: number; sessionXp: number };
  smithing: { mode: 'smelting' | 'forging'; recipe: RecipeId; timer: number; warm: boolean; produced: number; work: number; heat: number; reserved: number; reheat: boolean; message: string };
  combat: { stance: 'Slash' | 'Stab'; playerHp: number; wolfHp: number; playerTimer: number; enemyTimer: number; seq: number; bleed: number; bleedTicks: number; bleedTimer: number; kills: number; xp: number; gold: number; trophies: number; elapsed: number; respawn: number; log: string[] };
  objectives: { dismissed: boolean; firstCycle: boolean; firstIngot: boolean; sword: boolean; helm: boolean; victory: boolean };
  settings: { muted: boolean; volume: number; reducedMotion: boolean | null };
  lastEvent: string; lastSaved: number;
};
