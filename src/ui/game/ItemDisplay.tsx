import type { ReactNode } from 'react';
import { ITEMS, type ItemId } from '../../game/game';
import { Icon, Tip } from '../primitives';
import { getItemTooltipModel, type ItemTooltipContext } from './itemTooltip.model';

export function ItemMark({ id, large = false }: { id: string; large?: boolean }) {
  return <span className={`item-mark ${large ? 'large' : ''} ${id}`}><Icon name={ITEMS[id as ItemId]?.icon ?? id} size={large ? 40 : 24} /></span>;
}

function ItemTooltipBody({ id, context }: { id: ItemId; context?: ItemTooltipContext }) {
  const model = getItemTooltipModel(id, context);
  return <article className="item-tooltip-v2">
    <header><ItemMark id={id}/><div><strong>{model.name}</strong><span className="item-tooltip-tags"><i>{model.category}</i>{model.tier !== undefined && <i>T{model.tier}</i>}<i className={'rarity-' + model.rarity.toLowerCase().replace(' ','-')}>{model.rarity}</i>{model.flags?.map((flag) => <i className="item-tooltip-flag" key={flag}>{flag}</i>)}</span></div></header>
    <p>{model.description}</p>
    {model.requirement && <div className={`item-requirement ${model.requirement.met === false ? 'missing' : ''}`}><small>REQUIRES</small><b>{model.requirement.skill} {model.requirement.level}</b>{model.requirement.met !== undefined && <em>{model.requirement.met ? 'Met' : 'Not met'}</em>}</div>}
    {model.sections.map((section) => <section key={section.title}><h4>{section.icon && <Icon name={section.icon} size={14}/>} {section.title}</h4><dl>{section.rows.map((row) => <div key={row.label} className={row.tone ? 'tone-' + row.tone : ''}><dt>{row.label}</dt><dd>{row.value}</dd></div>)}</dl></section>)}
    {(model.owned !== undefined || model.equipped) && <footer>{model.equipped && <b>EQUIPPED</b>}{model.owned !== undefined && <span>OWNED <strong>{model.owned}</strong></span>}</footer>}
  </article>;
}

export function ItemTip({ id, children, context, focusable = true }: { id: ItemId; children: ReactNode; context?: ItemTooltipContext; focusable?: boolean }) {
  return <Tip placement="auto" delayMs={160} focusable={focusable} className="item-inspect-tip" content={<ItemTooltipBody id={id} context={context}/>}>{children}</Tip>;
}
