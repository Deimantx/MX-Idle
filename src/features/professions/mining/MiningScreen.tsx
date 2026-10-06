import { useMemo, useState } from 'react';
import { Badge, Button, Icon, Panel } from '../../../ui/primitives';
import { ItemMark, ItemTip } from '../../../ui/game/ItemDisplay';
import { ScreenHeading, Stat } from '../../../ui/game/ScreenPrimitives';
import { fmt, formatActionTime, formatDuration } from '../../../ui/game/formatters';
import { MINING_DEPOSITS, MINING_STAGE_MODEL, MINING_TOOLS, type DepositId, type ItemId, type SaveState } from '../../../game/game';
import { getDepositStageDensity, getMiningPower, getMiningStrikeTime, getPrimaryExpectedQuantity } from '../../../game/systems/gameMath';
import { ActionProgress } from '../../../ui/game/ActionProgress';
import { canMineDeposit } from '../../../game/systems/mining/miningResolver';
import { GameProgress, GameState } from '../../../ui/game-v2/GameKit';

type Metrics = { outputs: Partial<Record<ItemId, number>>; Mining: { xpHour: number }; activeMs?: number };
const CATEGORIES = ['All', 'Ore', 'Quarry', 'Catalyst', 'Gem', 'Essence', 'Deep-Core'] as const;

export function MiningScreen({ game: g, xp, maxXp, start, stop, select, equipTool, speedMultiplier = 1, metrics }: {
  game: SaveState; xp: number; maxXp: number; start: () => void; stop: () => void; select: (id: DepositId) => void;
  equipTool?: (item: ItemId) => void; speedMultiplier?: number; metrics?: Metrics;
}) {
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>('All');
  const [query, setQuery] = useState('');
  const [toolPickerOpen, setToolPickerOpen] = useState(false);
  const [lockedReason, setLockedReason] = useState('');
  const active = g.activity === 'mining';
  const deposit = MINING_DEPOSITS[g.mining.deposit];
  const runtime = g.mining.deposits[g.mining.deposit]!;
  const stage = MINING_STAGE_MODEL[runtime.stageIndex]!;
  const tool = MINING_TOOLS[(g.equipped.miningTool ?? 'item.mining.worn_pickaxe') as keyof typeof MINING_TOOLS];
  const power = getMiningPower(tool.power, deposit.category === 'Deep-Core' ? (tool.effects.deepCorePowerMultiplier ?? 1) : 1);
  const strikeMs = getMiningStrikeTime(deposit.strikeMs, tool.speed);
  const maxDensity = getDepositStageDensity(runtime.stageIndex, deposit.id);
  const strikes = Math.ceil(runtime.densityRemaining / power);
  const rate = metrics?.outputs[deposit.primary] ?? 0;
  const telemetryStable = active && (metrics?.activeMs ?? 0) >= 8000;
  const deposits = useMemo(() => Object.values(MINING_DEPOSITS).filter(entry =>
    (category === 'All' || entry.category === category) &&
    `${entry.name} ${entry.resourceName}`.toLowerCase().includes(query.toLowerCase())), [category, query]);
  const cycleMs = MINING_STAGE_MODEL.reduce((sum, _, index) =>
    sum + Math.ceil(getDepositStageDensity(index, deposit.id) / power) * strikeMs, 0);

  const inspectDeposit = (entry: typeof deposit) => {
    const levelLocked = g.skills.Mining.level < entry.unlockLevel;
    const toolLocked = !levelLocked && !canMineDeposit(g, entry.id);
    if (entry.endgameGated) return setLockedReason('This deposit requires an endgame unlock that is not available yet.');
    if (levelLocked) return setLockedReason(`Mining ${entry.unlockLevel} is required to work this deposit.`);
    if (toolLocked) return setLockedReason(`${MINING_TOOLS[entry.requiredTool as keyof typeof MINING_TOOLS]?.name ?? 'A stronger pickaxe'} is required.`);
    setLockedReason('');
    select(entry.id);
  };

  return <div className="screen mining-screen mining-v2" data-profession="mining" data-feedback-screen="Mining">
    <ScreenHeading eyebrow="PROFESSION / GEOLOGY" title="Mining" sub="Choose a seam, read its strata, and work each layer down to the core." accent="mining" skill="Mining" level={g.skills.Mining.level} xp={xp} maxXp={maxXp} />
    <div className="mine-browser-tools">
      <div className="mine-category-nav" role="tablist" aria-label="Deposit materials">{CATEGORIES.map(item => <button key={item} type="button" role="tab" aria-selected={category === item} className={category === item ? 'selected' : ''} onClick={() => setCategory(item)}>{item === 'All' ? 'All Deposits' : item}</button>)}</div>
      <label className="mine-search"><span className="sr-only">Search deposits</span><input value={query} onChange={event => setQuery(event.target.value)} placeholder="Find a deposit or resource" /></label>
    </div>
    <div className="mine-layout">
      <Panel className="deposit-rail" title={category === 'All' ? 'Deposit Library' : `${category} deposits`} action={<Badge>{deposits.length} sites</Badge>}>
        {lockedReason && <div className="mine-lock-note" role="status">{lockedReason}</div>}
        <div className="deposit-browser">{deposits.map(entry => {
          const levelLocked = g.skills.Mining.level < entry.unlockLevel;
          const toolLocked = !levelLocked && !canMineDeposit(g, entry.id);
          const locked = levelLocked || toolLocked || Boolean(entry.endgameGated);
          const selected = entry.id === deposit.id;
          return <button key={entry.id} type="button" className={`deposit-selected ${selected ? 'selected' : ''} ${locked ? 'locked' : ''}`} onClick={() => inspectDeposit(entry)} aria-pressed={selected}>
            <span className="selection-edge" /><ItemTip id={entry.primary} focusable={false}><ItemMark id={entry.primary}/></ItemTip>
            <span className="deposit-label"><b>{entry.name}</b><small>{entry.resourceName} / T{entry.tier} / {entry.endgameGated ? 'Endgame gated' : levelLocked ? `Mining ${entry.unlockLevel} required` : toolLocked ? `${MINING_TOOLS[entry.requiredTool as keyof typeof MINING_TOOLS]?.name ?? 'Pickaxe'} required` : 'Ready to mine'}</small></span>
            <GameState tone={locked?'locked':active&&selected?'active':selected?'ready':'neutral'} icon={locked?'shield':active&&selected?'mining':undefined}>{entry.endgameGated?'GATED':toolLocked?'TOOL':levelLocked?`LV ${entry.unlockLevel}`:active&&selected?'WORKING':selected?'SELECTED':'READY'}</GameState>
          </button>;
        })}</div>
        <div className="deposit-req"><div><span>REQUIRES</span><b>Mining {deposit.unlockLevel}</b></div><div><span>PICKAXE</span><b>{MINING_TOOLS[deposit.requiredTool as keyof typeof MINING_TOOLS]?.name ?? '-'}</b></div><div><span>YIELDS</span><b>{deposit.resourceName} ×{deposit.baseQuantity}</b></div></div>
      </Panel>

      <Panel className={`mine-focus ${active ? 'is-active' : ''}`}>
        <div className="focus-top"><div><span className="screen-overline">{deposit.category} / Tier {deposit.tier}</span><h2>{deposit.name}</h2><small>{deposit.resourceName} deposit</small></div><Badge tone={active ? 'live' : ''}>{active ? 'MINING' : 'READY'}</Badge></div>
        <div key={`${deposit.id}:${g.mining.strikes}`} data-feedback-anchor="Mining" className={`vein-art mining-impact strata-${runtime.stageIndex+1} ${deposit.category==='Quarry'?'stone-vein-art':''}`} aria-label={`${deposit.resourceName} exposed in the mine face`}>
          <div className="mine-face-label"><span>ACTIVE DEPOSIT</span><b>{deposit.resourceName.toUpperCase()}</b></div>
          <svg className="mine-strata-map" viewBox="0 0 800 300" preserveAspectRatio="none" aria-hidden="true"><path d="M0 202 72 176 126 198 207 149 286 182 359 136 433 169 525 124 609 160 688 110 800 145V300H0Z"/><path d="M0 223 95 198 177 217 264 181 335 211 437 171 518 195 631 157 705 178 800 150"/><path d="M0 255 101 234 194 251 283 219 368 246 463 215 551 236 642 198 734 216 800 196"/><path d="M175 196 229 178 269 185 286 199 252 211 211 206ZM482 179 524 149 568 157 586 171 548 190 509 193Z"/></svg>
          <div className="mine-cutaway-edge"/><div className="mine-impact-ring"/><div className="mine-drill-point"><Icon name="pick" size={22}/></div>
          <div className="ore-face"><i/><i/><i/><i/><i/></div><div className="ore-glint g1"/><div className="ore-glint g2"/>
          <div className="mine-strata-depth" aria-label="Five excavation layers">{MINING_STAGE_MODEL.map((item,index)=><span key={item.id} className={index<runtime.stageIndex?'cleared':index===runtime.stageIndex?'current':''}><i/>{String(index+1).padStart(2,'0')}</span>)}</div>
          <div className="vein-depth"><span>{stage.name.toUpperCase()}</span><b>STRATUM {runtime.stageIndex+1} / 5</b></div><div className="vein-vignette"/>
        </div>
        <div className="stage-name-line"><div><span className="tiny-label">CURRENT LAYER</span><h3>{stage.name}</h3></div><div className="stage-reward"><span>EXPECTED YIELD</span><b><ItemTip id={deposit.primary} focusable={false}><ItemMark id={deposit.primary}/></ItemTip> {getPrimaryExpectedQuantity(runtime.stageIndex, deposit.id).toFixed(2)} x {deposit.resourceName}</b></div></div>
        <div className="bar-label mine-density-heading"><span>Deposit density <small>geological resistance</small></span><b>{runtime.densityRemaining.toFixed(1)} <small>/ {maxDensity}</small></b></div><GameProgress value={runtime.densityRemaining} max={maxDensity} kind="density" label={`Deposit density, ${strikes} strikes remaining`}/><div className="density-strike-marks" aria-hidden="true">{Array.from({length:Math.min(10,Math.max(1,strikes))},(_,index)=><i key={index}/>)}</div>
        <div className="mine-action-progress"><div><span className="tiny-label">NEXT SWING</span><b>{active ? formatActionTime(g.mining.timer) : formatActionTime(strikeMs)}</b></div><ActionProgress active={active} remainingMs={g.mining.timer || strikeMs} durationMs={strikeMs} phaseKey={`${deposit.id}:${g.mining.strikes}`} speedMultiplier={speedMultiplier} label="Mining swing progress" /></div>
        <div className="mine-controls"><Button tone="copper" onClick={active ? stop : start}><Icon name={active?'combat':'pick'} size={18}/>{active ? 'Stop Mining' : 'Start Mining'}</Button></div>
        <div className="stage-path" aria-label="Excavation depth">{MINING_STAGE_MODEL.map((item, index) => <div key={item.id} className={`stage-node ${index  < runtime.stageIndex  ? 'complete' : ''} ${index=== runtime.stageIndex  ? 'current' : ''}`}><div className="node-head"><span className="node-mark">{index  < runtime.stageIndex  ? 'DONE' : `0${index  + 1}`}</span><span className="node-join" /></div><b>{item.name}</b><small>{getPrimaryExpectedQuantity(index, deposit.id).toFixed(2)} x / {index  < runtime.stageIndex  ? 'cleared' : index=== runtime.stageIndex  ? 'working' : 'ahead'}</small></div>)}</div>
      </Panel>

      <Panel className="mine-inspector mine-shift-panel" title="Current Shift" action={<Badge tone={active ? 'live' : ''}>{active ? 'ON THE SEAM' : 'STANDBY'}</Badge>}>
        <section className="shift-tool-module"><ItemTip id={tool.item} focusable={false}><div className="tool-insignia"><ItemMark id={tool.item}/></div></ItemTip><div><span className="tiny-label">EQUIPPED PICKAXE</span><b>{tool.name}</b><small>Power {power} · {tool.effect}</small></div><Badge tone="equipped">EQUIPPED</Badge>
          {equipTool && <div className="tool-picker"><Button tone="quiet" aria-expanded={toolPickerOpen} onClick={() => setToolPickerOpen(!toolPickerOpen)}><Icon name="pick" size={15}/>{toolPickerOpen ? 'Close pickaxe list' : 'Change pickaxe'}</Button>{toolPickerOpen && <div className="tool-upgrades" role="group" aria-label="Choose owned pickaxe">{Object.values(MINING_TOOLS).filter(candidate => (g.bank[candidate.item] ?? 0) > 0 && candidate.item !== tool.item).map(candidate => <Button key={candidate.item} tone="quiet" onClick={() => { equipTool(candidate.item); setToolPickerOpen(false); }}>{candidate.name} · Power {candidate.power}</Button>)}</div>}</div>}
        </section>
        <div className="mine-shift-grid">
          <section className="yield-forecast"><header><Icon name="ore" size={16}/><h3>Yield forecast</h3></header>{telemetryStable ? <><div className="forecast-main"><span>{deposit.resourceName} per hour</span><b>{Math.round(rate).toLocaleString()}</b></div><Stat label="Mining XP / h" value={Math.round(metrics!.Mining.xpHour).toLocaleString()} accent="xp-text"/>{metrics!.Mining.xpHour > 0 && <Stat label="Next level" value={formatDuration(Math.max(0, maxXp - xp) / metrics!.Mining.xpHour * 3_600_000)} />}</> : <div className="forecast-status">{active ? 'Collecting rate data…' : 'Start a shift to measure yield.'}</div>}</section>
          <section className="seam-telemetry"><header><Icon name="mining" size={16}/><h3>Seam telemetry</h3></header><Stat label="Strikes to next layer" value={`${strikes}`} /><Stat label="Layer ETA" value={formatDuration(strikes * strikeMs)} /><Stat label="Full seam cycle" value={`~${formatDuration(cycleMs)}`} /><Stat label="Cycles completed" value={fmt(runtime.cyclesCompleted)} /></section>
          <section className="tool-profile"><header><Icon name="pick" size={16}/><h3>Pick profile</h3></header><Stat label="Strike power" value={`${power}`} /><Stat label="Extra yield chance" value={`${tool.extraQuantityChance + (tool.effects.primaryExtraPp ?? 0)} pp`} /></section>
        </div>
      </Panel>
    </div>
  </div>;
}
