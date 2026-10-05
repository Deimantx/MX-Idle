import { ITEMS, type ItemId } from '../../game/game';
import { Icon, Tip } from '../primitives';

export function ItemMark({ id, large = false }: { id: string; large?: boolean }) { return <span className={`item-mark ${large ? 'large' : ''} ${id}`}><Icon name={id} size={large ? 40 : 24} /></span>; }

export function ItemTip({ id, children }: { id: ItemId; children: import('react').ReactNode }) { const item = ITEMS[id]; return <Tip content={<><strong>{item.name}</strong><span>{item.category}</span><small>{item.desc}</small></>}>{children}</Tip>; }
