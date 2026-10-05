export const APP_SETTINGS_KEY = 'mx-idle-settings-v1';

export type AppSettings = {
  interface: { scaleMode: 'auto' | 'manual'; manualScale: number; textScale: number; customCursor: boolean };
  audio: { muted: boolean; masterVolume: number };
  accessibility: { reducedMotion: 'system' | 'on' | 'off' };
  feedback: { showXpDrops: boolean; showXpOrb: boolean; showItemGainFeed: boolean; levelUpEffects: boolean; systemToasts: boolean };
};

export const DEFAULT_APP_SETTINGS: AppSettings = {
  interface: { scaleMode: 'auto', manualScale: 1, textScale: 1, customCursor: true },
  audio: { muted: false, masterVolume: .35 },
  accessibility: { reducedMotion: 'system' },
  feedback: { showXpDrops: true, showXpOrb: true, showItemGainFeed: true, levelUpEffects: true, systemToasts: true },
};

const clampStep = (value: unknown, min: number, max: number, step: number, fallback: number) => {
  const n = Number(value);
  return Number.isFinite(n) ? Number(Math.min(max, Math.max(min, Math.round((n - min) / step) * step + min)).toFixed(2)) : fallback;
};

export function normalizeAppSettings(raw: unknown): AppSettings {
  if (!raw || typeof raw !== 'object') return structuredClone(DEFAULT_APP_SETTINGS);
  const value = raw as Partial<AppSettings>;
  const ui = value.interface;
  const audio = value.audio;
  const access = value.accessibility;
  const feedback = value.feedback;
  return {
    interface: {
      scaleMode: ui?.scaleMode === 'manual' ? 'manual' : 'auto',
      manualScale: clampStep(ui?.manualScale, .8, 1.6, .05, 1),
      textScale: clampStep(ui?.textScale, .9, 1.4, .1, 1),
      customCursor: ui?.customCursor !== false,
    },
    audio: {
      muted: audio?.muted === true,
      masterVolume: Number.isFinite(Number(audio?.masterVolume)) ? Math.min(1, Math.max(0, Number(audio?.masterVolume))) : .35,
    },
    accessibility: { reducedMotion: access?.reducedMotion === 'on' || access?.reducedMotion === 'off' ? access.reducedMotion : 'system' },
    feedback: {
      showXpDrops: feedback?.showXpDrops !== false,
      showXpOrb: feedback?.showXpOrb !== false,
      showItemGainFeed: feedback?.showItemGainFeed !== false,
      levelUpEffects: feedback?.levelUpEffects !== false,
      systemToasts: feedback?.systemToasts !== false,
    },
  };
}

export function calculateAutoScale(width: number, height: number): number {
  const raw = Math.min(width / 1920, height / 1080);
  return Math.round(Math.min(1.5, Math.max(.9, raw)) / .05) * .05;
}

export function effectiveScale(settings: AppSettings, width = window.innerWidth, height = window.innerHeight): number {
  return settings.interface.scaleMode === 'manual' ? settings.interface.manualScale : calculateAutoScale(width, height);
}

export function applyAppSettings(settings: AppSettings, width = window.innerWidth, height = window.innerHeight) {
  const root = document.documentElement;
  root.style.setProperty('--ui-scale', String(effectiveScale(settings, width, height)));
  root.style.setProperty('--text-scale', String(settings.interface.textScale));
  root.dataset.scaleTier = effectiveScale(settings, width, height) >= 1.4 ? 'large' : 'standard';
  root.dataset.reducedMotion = settings.accessibility.reducedMotion === 'on' || (settings.accessibility.reducedMotion === 'system' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) ? 'true' : 'false';
  root.dataset.customCursor = settings.interface.customCursor ? 'true' : 'false';
}

export function loadAppSettings(storage: Storage = localStorage): AppSettings {
  const raw = storage.getItem(APP_SETTINGS_KEY);
  if (raw === null) {
    let legacy: any;
    try { legacy = JSON.parse(storage.getItem('mx-idle-save-v1') ?? 'null')?.state?.settings; } catch { /* legacy preferences are optional */ }
    const seeded = normalizeAppSettings({ audio: { muted: legacy?.muted, masterVolume: legacy?.volume }, accessibility: { reducedMotion: legacy?.reducedMotion === null ? 'system' : legacy?.reducedMotion ? 'on' : 'off' } });
    return seeded;
  }
  try { return normalizeAppSettings(JSON.parse(raw)); } catch { return structuredClone(DEFAULT_APP_SETTINGS); }
}

export function saveAppSettings(settings: AppSettings, storage: Storage = localStorage) {
  storage.setItem(APP_SETTINGS_KEY, JSON.stringify(normalizeAppSettings(settings)));
}
