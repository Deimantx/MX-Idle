import { ITEMS, type ItemId } from '../../game/game';
import { Icon, Tip } from '../primitives';
import { getItemTooltipModel, type ItemTooltipContext } from './itemTooltip.model';

export function ItemMark({ id, large = false }: { id: string; large?: boolean }) { return <span className={`item-mark ${large ? 'large' : ''} ${id}`}><Icon name={ITEMS[id as ItemId]?.icon ?? id} size={large ? 40 : 24} /></span>; }

export function ItemTip({ id, children, context, focusable = true }: { id: ItemId; children: import('react').ReactNode; context?: ItemTooltipContext; focusable?: boolean }) {
  const model = getItemTooltipModel(id, context);
  return <Tip placement="auto" delayMs={220} focusable={focusable} className="item-inspect-tip" content={<article className="item-tooltip-v2">
    <header><ItemMark id={id}/><div><strong>{model.name}</strong><span>{model.category}{model.tier ? ` · Tier ${model.tier}` : ''} · {model.rarity}</span></div></header>
    <p>{model.description}</p>
    {model.requirement && <div className={`item-requirement ${model.requirement.met === false ? 'missing' : ''}`}><small>REQUIRES</small><b>{model.requirement.skill} {model.requirement.level}</b>{model.requirement.met !== undefined && <em>{model.requirement.met ? 'Met' : 'Not met'}</em>}</div>}
    {model.sections.map((section) => <section key={section.title}><h4>{section.title}</h4><dl>{section.rows.map((row) => <div key={row.label} className={row.tone ? `tone-${row.tone}` : ''}><dt>{row.label}</dt><dd>{row.value}</dd></div>)}</dl></section>)}
    {(model.owned !== undefined || model.equipped) && <footer>{model.equipped && <b>EQUIPPED</b>}{model.owned !== undefined && <span>OWNED <strong>{model.owned}</strong></span>}</footer>}
  </article>}>{children}</Tip>;
}
