export function PlayerBattleSprite() {
  return <img className="battle-sprite player-battle-sprite" src="/assets/combat/player/adventurer.svg" alt="" aria-hidden="true" draggable="false"/>;
}

export function EnemyBattleSprite({ enemyId, style, rank }: { enemyId: string; style: string; rank: string }) {
  const id = enemyId.toLowerCase();
  const starterSprites: Record<string,string> = {
    'road-wolf':'/assets/combat/monsters/road-wolf.svg',
    'dust-rat':'/assets/combat/monsters/dust-rat.svg',
    'ragged-poacher':'/assets/combat/monsters/ragged-poacher.svg',
    'hedge-spark':'/assets/combat/monsters/hedge-spark.svg',
    'bog-leech':'/assets/combat/monsters/bog-leech.svg',
    'carrion-crow':'/assets/combat/monsters/carrion-crow.svg',
    'rotten-slime':'/assets/combat/monsters/rotten-slime.svg',
  };
  const starterSprite = starterSprites[id];
  if (starterSprite) return <img className="battle-sprite enemy-battle-sprite" src={starterSprite} data-style={style.toLowerCase()} data-rank={rank.toLowerCase()} alt="" aria-hidden="true" draggable="false"/>;
  return <svg className="battle-sprite enemy-battle-sprite" viewBox="0 0 170 180" data-style={style.toLowerCase()} data-rank={rank.toLowerCase()} aria-hidden="true" focusable="false"><use href={`/assets/combat/monsters/monster-atlas.svg#${id}`}/></svg>;
}
