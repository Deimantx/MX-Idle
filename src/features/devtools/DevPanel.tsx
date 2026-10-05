import { useState } from 'react';
import { Button } from '../../ui/primitives';
import { ITEMS, type ItemId, type SaveState } from '../../game/game';

export function DevPanel({ game: g, grant, grantT1Kit, simulate, setSpeed, setLevel, setHp, resetWolf, reset, unlockElite, setDeposit, setStage, setMastery, setForge, setPreservation }: { game: SaveState; grant: (id: ItemId, n?: number) => void; grantT1Kit: () => void; simulate: (ms: number) => void; setSpeed: (n: number) => void; setLevel: (skill: keyof SaveState['skills'], level: number) => void; setHp: (hp: number) => void; resetWolf: () => void; reset: () => void; unlockElite: () => void; setDeposit: (id: SaveState['mining']['deposit']) => void; setStage: (stage: number) => void; setMastery: (domain: 'mining' | 'smithing', level: number) => void; setForge: (work: number, heat: number) => void; setPreservation: (enabled: boolean) => void }) {
  const [open, setOpen] = useState(false);
  const tierLevels = [10, 25, 50, 75, 100];
  return <div className={`dev-panel ${open ? 'open' : ''}`}><button onClick={() => setOpen(!open)} aria-expanded={open}>DEV</button>{open && <div className="dev-controls"><b>T1 playtest tools</b>
    <div className="dev-row"><Button tone="quiet" onClick={() => setLevel('Mining', 5)}>Mining Lv. 5</Button><Button tone="quiet" onClick={() => setLevel('Smithing', 5)}>Smithing Lv. 5</Button><Button tone="quiet" onClick={() => setDeposit('mining.deposit.copper_vein')}>Copper Vein</Button><Button tone="quiet" onClick={() => setDeposit('mining.deposit.fieldstone_quarry')}>Fieldstone</Button></div>
    <div className="dev-row">{[0, 1, 2, 3, 4].map((stage) => <Button tone="quiet" key={stage} onClick={() => setStage(stage)}>Stage {stage + 1}</Button>)}</div>
    <div className="dev-row">{tierLevels.map((level) => <Button tone="quiet" key={level} onClick={() => setMastery('mining', level)}>Deposit M{level}</Button>)}</div>
    <div className="dev-row">{tierLevels.map((level) => <Button tone="quiet" key={level} onClick={() => setMastery('smithing', level)}>Recipe M{level}</Button>)}</div>
    <div className="dev-row">{(['item.mining.copper_ore', 'item.smithing.copper_ingot', 'item.mining.copper_pickaxe', 'item.smithing.copper_smithing_hammer'] as ItemId[]).map((id) => <Button tone="quiet" key={id} onClick={() => grant(id, id.endsWith('copper_ore') || id.endsWith('copper_ingot') ? 20 : 1)}>Grant {ITEMS[id].name}</Button>)}</div>
    <div className="dev-row"><Button tone="quiet" onClick={grantT1Kit}>Grant T1 field kit</Button><Button tone="quiet" onClick={() => setForge(0, 100)}>Reset Work / Heat</Button><Button tone="quiet" onClick={() => setForge(g.smithing.work || 30, 20)}>Set Work 30 / Heat 20</Button><Button tone="quiet" onClick={() => setPreservation(!g.smithing.forcePreservation)}>{g.smithing.forcePreservation ? 'Preservation forced' : 'Force preservation'}</Button></div>
    <div className="dev-row">{[1, 5, 20].map((x) => <Button tone={x === 1 ? 'steel' : 'quiet'} key={x} onClick={() => setSpeed(x)}>×{x} speed</Button>)}</div>
    <div className="dev-row"><Button tone="quiet" onClick={() => setHp(100)}>Full HP</Button><Button tone="quiet" onClick={resetWolf}>Reset Enemy</Button><Button tone="quiet" onClick={unlockElite}>Unlock Ironjaw</Button><Button tone="quiet" onClick={() => simulate(300000)}>Away 5m</Button><Button tone="quiet" onClick={() => simulate(3600000)}>Away 1h</Button></div>
    <Button tone="danger" onClick={reset}>Reset save</Button>
  </div>}</div>;
}
