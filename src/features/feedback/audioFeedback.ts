export type FeedbackCue = 'navigate'|'start'|'stop'|'mining-hit'|'mining-stage'|'forge-strike'|'craft'|'fishing-bite'|'fish-landed'|'aquatic-find'|'cooking-prep'|'cook'|'equip'|'combat-hit'|'combat-miss'|'combat-crit'|'special'|'enemy-hit'|'level-up'|'reward'|'error';
export type AudioOptions = { muted: boolean; masterVolume: number };
type Voice = { priority: number; startedAt: number; oscillators: OscillatorNode[]; gain: GainNode };

const MAX_VOICES = 4;
const contextConstructor = () => typeof window === 'undefined' ? undefined : window.AudioContext;
let context: AudioContext | undefined;
const voices = new Set<Voice>();
const lastPlayed = new Map<FeedbackCue, number>();
const cooldowns: Record<FeedbackCue, number> = {
  navigate: 90, start: 120, stop: 120, 'mining-hit': 260, 'mining-stage': 900, 'forge-strike': 260, craft: 700,
  'fishing-bite': 500, 'fish-landed': 400, 'aquatic-find': 1_200, 'cooking-prep': 450, cook: 700,
  equip: 220, 'combat-hit': 200, 'combat-miss': 450, 'combat-crit': 600, special: 500, 'enemy-hit': 240,
  'level-up': 1_200, reward: 700, error: 500,
};
const priority: Record<FeedbackCue, number> = {
  navigate: 0, start: 1, stop: 1, 'mining-hit': 1, 'mining-stage': 2, 'forge-strike': 1, craft: 2,
  'fishing-bite': 1, 'fish-landed': 1, 'aquatic-find': 3, 'cooking-prep': 1, cook: 2, equip: 1,
  'combat-hit': 1, 'combat-miss': 1, 'combat-crit': 2, special: 2, 'enemy-hit': 1, 'level-up': 3,
  reward: 2, error: 2,
};
const tones: Record<FeedbackCue, { notes: number[]; type: OscillatorType; duration: number; level: number }> = {
  navigate: { notes: [294], type: 'sine', duration: .035, level: .025 }, start: { notes: [392, 523], type: 'triangle', duration: .09, level: .045 }, stop: { notes: [247], type: 'triangle', duration: .075, level: .035 },
  'mining-hit': { notes: [156, 117], type: 'triangle', duration: .07, level: .045 }, 'mining-stage': { notes: [392, 494, 659], type: 'triangle', duration: .16, level: .055 },
  'forge-strike': { notes: [207, 311], type: 'triangle', duration: .065, level: .04 }, craft: { notes: [392, 523, 659], type: 'triangle', duration: .16, level: .05 },
  'fishing-bite': { notes: [523, 659], type: 'sine', duration: .1, level: .04 }, 'fish-landed': { notes: [392, 523], type: 'sine', duration: .12, level: .045 }, 'aquatic-find': { notes: [523, 659, 784], type: 'sine', duration: .22, level: .06 },
  'cooking-prep': { notes: [330, 440], type: 'triangle', duration: .08, level: .035 }, cook: { notes: [392, 494, 587], type: 'triangle', duration: .15, level: .05 }, equip: { notes: [440, 349], type: 'triangle', duration: .09, level: .04 },
  'combat-hit': { notes: [174, 130], type: 'triangle', duration: .065, level: .045 }, 'combat-miss': { notes: [220], type: 'sine', duration: .06, level: .03 }, 'combat-crit': { notes: [196, 294, 392], type: 'sawtooth', duration: .12, level: .045 }, special: { notes: [247, 370, 494], type: 'triangle', duration: .14, level: .05 }, 'enemy-hit': { notes: [147, 110], type: 'triangle', duration: .075, level: .045 },
  'level-up': { notes: [392, 523, 659, 784], type: 'sine', duration: .3, level: .065 }, reward: { notes: [440, 587, 698], type: 'sine', duration: .2, level: .055 }, error: { notes: [196, 164], type: 'triangle', duration: .12, level: .04 },
};

function ensureContext() {
  const Constructor = contextConstructor();
  if (!Constructor) return undefined;
  try { context ??= new Constructor(); if (context.state === 'suspended') void context.resume(); return context; }
  catch { return undefined; }
}

export function unlockFeedbackAudio() { ensureContext(); }

export function playFeedbackCue(cue: FeedbackCue, options: AudioOptions) {
  if (options.muted || options.masterVolume <= 0) return;
  const nowMs = performance.now();
  if (nowMs - (lastPlayed.get(cue) ?? -Infinity) < cooldowns[cue]!) return;
  lastPlayed.set(cue, nowMs);
  const ctx = ensureContext();
  if (!ctx) return;
  if (voices.size >= MAX_VOICES) {
    const quietest = [...voices].sort((a, b) => a.priority - b.priority || a.startedAt - b.startedAt)[0];
    if (!quietest || quietest.priority > priority[cue]) return;
    for (const oscillator of quietest.oscillators) try { oscillator.stop(); } catch { /* already ended */ }
  }
  const preset = tones[cue], gain = ctx.createGain();
  gain.gain.setValueAtTime(Math.max(.0001, preset.level * Math.min(1, options.masterVolume)), ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(.0001, ctx.currentTime + preset.duration);
  gain.connect(ctx.destination);
  const oscillators = preset.notes.map((frequency, index) => {
    const oscillator = ctx.createOscillator(); oscillator.type = preset.type;
    oscillator.frequency.setValueAtTime(frequency, ctx.currentTime + index * .035);
    oscillator.connect(gain); oscillator.start(ctx.currentTime + index * .035); oscillator.stop(ctx.currentTime + preset.duration + index * .035);
    return oscillator;
  });
  const voice: Voice = { priority: priority[cue], startedAt: nowMs, oscillators, gain };
  voices.add(voice);
  oscillators[oscillators.length - 1]!.addEventListener('ended', () => {
    voices.delete(voice);
    for (const oscillator of oscillators) oscillator.disconnect();
    gain.disconnect();
  }, { once: true });
}
