import { Button } from '../../ui/primitives';
export type LoadStage = 'Reading Save' | 'Validating' | 'Migrating' | 'Loading Content' | 'Simulating Offline' | 'Finalizing';
const stages: LoadStage[] = ['Reading Save', 'Validating', 'Migrating', 'Loading Content', 'Simulating Offline', 'Finalizing'];
export function ProfileLoadScreen({ name, stage, error, onRetry, onBack }: { name: string; stage: LoadStage; error?: string; onRetry: () => void; onBack: () => void }) {
  const current = stages.indexOf(stage);
  return <main className="profile-load"><div className="load-emblem">MX</div><p>PREPARING {name.toUpperCase()}</p><h1>{error ? 'Profile could not load' : 'Returning to the frontier'}</h1>{error ? <><div className="profile-error" role="alert">{error}</div><div className="load-actions"><Button onClick={onRetry}>Retry</Button><Button tone="quiet" onClick={onBack}>Back to Profile Select</Button></div></> : <div className="load-stages" aria-live="polite">{stages.map((item, index) => <div className={index  < current ? 'done' : index=== current ? 'active' : ''} key={item}><span>{index  < current ? '✓' : index  + 1}</span>{item}{index=== current && <i />}</div>)}</div>}</main>;
}
