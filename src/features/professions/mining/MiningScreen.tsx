import { Badge, Bar, Button, Icon, Panel } from '../../../ui/primitives';
import { ItemMark, ItemTip } from '../../../ui/game/ItemDisplay';
import { ScreenHeading, Stat } from '../../../ui/game/ScreenPrimitives';
import { fmt, timeText } from '../../../ui/game/formatters';
import { stageDensity, STAGES, type SaveState } from '../../../game/game';

const stageNames = ['Outcrop', 'Shallow', 'Main', 'Deep', 'Core'];

export function MiningScreen({ game: g, xp, maxXp, start, stop }: { game: SaveState; xp: number; maxXp: number; start: () => void; stop: () => void }) {
  const active = g.activity === 'mining', stage = g.mining.stage, stageData = STAGES[stage];
  const rem = g.mining.density;
  return <div className="screen mining-screen" data-profession="mining">
    <ScreenHeading eyebrow="PROFESSION · TIER 1" title="Mining" sub="Break through the dense exterior. Find what the vein has kept below." accent="mining"><Badge tone="level-badge">LEVEL {g.skills.Mining.level}</Badge></ScreenHeading>
    <div className="mine-layout">
      <Panel className="deposit-rail" title="Deposits"><div className="deposit-selected"><span className="selection-edge"/><ItemMark id="ore"/><div className="deposit-label"><b>Copper Vein</b><small>Ore deposit · Tier 1</small></div><Badge>ACTIVE</Badge></div><div className="deposit-req"><div><span>REQUIRED</span><b>Mining 1</b></div><div><span>TOOL</span><b>{g.equipped.tool ? 'Worn Pickaxe · Ready' : 'Equip Worn Pickaxe'}</b></div><div><span>YIELD</span><b className="copper-text">Copper Ore</b></div></div><div className="rail-bottom"><span className="tiny-label">DEPOSIT CYCLES</span><b>{fmt(g.mining.cycles)}</b></div></Panel>
      <Panel className={`mine-focus ${active ? 'is-active' : ''}`}><div className="focus-top"><div><span className="screen-overline">COPPER DEPOSIT</span><h2>Copper Vein</h2></div><Badge tone={active ? 'live' : ''}>{active ? 'MINING' : 'READY'}</Badge></div>
        <div className="vein-art" aria-label="Illustration of an exposed copper vein"><div className="cave-ridge ridge-a"/><div className="cave-ridge ridge-b"/><div className="ore-face"><i/><i/><i/><i/><i/></div><div className="ore-glint g1"/><div className="ore-glint g2"/><div className="vein-depth"><span>EXPOSED VEIN</span><b>{String(stage + 1).padStart(2, '0')} / 05</b></div><div className="vein-vignette"/></div>
        <div className="stage-name-line"><div><span className="tiny-label">CURRENT LAYER</span><h3>{stageData.name}</h3></div><div className="stage-reward"><span>STAGE REWARD</span><b><ItemTip id="ore"><ItemMark id="ore"/></ItemTip> {stageData.qty.toFixed(2)}× Ore</b></div></div>
        <div className="bar-label"><span>Density</span><b>{rem} <small>/ {stageDensity(stage)}</small></b></div><Bar value={rem} max={stageDensity(stage)} accent="copper" className="density-bar" label={`${Math.max(0, Math.ceil(rem / 6))} strikes remaining`} />
        <div className="mine-controls"><div className="strike-readout"><span className={`pulse-dot ${active ? 'pulsing' : ''}`} /><div><b>{active ? 'Next strike' : 'Strike time'}</b><small>{active ? timeText(g.mining.timer) : '2.40 seconds'}</small></div></div><Button tone="copper" onClick={active ? stop : start} className="mine-action">{active ? 'Stop Mining' : 'Start Mining'}<span className="button-key">{active ? 'Ⅱ' : '▶'}</span></Button></div>
        <div className="stage-path">{STAGES.map((x, i) => <div key={x.name} className={`stage-node ${i < stage ? 'complete' : ''} ${i === stage ? 'current' : ''}`}><div className="node-head"><span className="node-mark">{i < stage ? '✓' : `0${i + 1}`}</span><span className="node-join" /></div><b>{stageNames[i]}</b><small>×{x.qty.toFixed(2)} · {i < stage ? 'cleared' : i === stage ? 'here now' : 'ahead'}</small></div>)}</div>
      </Panel>
      <Panel className="mine-inspector" title="Field Readings"><div className="tool-card"><div className="tool-insignia"><ItemTip id="pickaxe"><Icon name="pick" size={25}/></ItemTip></div><div><span className="tiny-label">EQUIPPED TOOL</span><b>Worn Pickaxe</b><small>Starter tool · No durability</small></div><Badge tone="equipped">EQUIPPED</Badge></div><div className="stat-rows"><Stat label="Mining Power" value="6" tip="Density removed by each strike."/><Stat label="Strike time" value="2.40s"/><Stat label="Cycle pace" value="~48s"/><Stat label="Copper / hour" value="~694" accent="copper-text"/></div><div className="xp-block"><div><span>Mining XP</span><b>Lv. {g.skills.Mining.level}</b></div><Bar value={xp} max={maxXp} accent="xp"/><small>{fmt(xp)} / {fmt(maxXp)} XP to next level</small></div><div className="cycle-block"><div className="cycle-meta"><span>Current deposit</span><b>{g.mining.strikes % 20} / 20 strikes</b></div><Bar value={g.mining.strikes % 20} max={20} accent="steel"/><div className="cycle-footer"><span>Ore this session</span><b>{fmt(g.mining.sessionOre)} <ItemMark id="ore"/></b></div></div></Panel>
    </div>
  </div>;
}
