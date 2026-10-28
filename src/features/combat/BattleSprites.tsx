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
  };
  const starterSprite = starterSprites[id];
  if (starterSprite) return <img className="battle-sprite enemy-battle-sprite" src={starterSprite} data-style={style.toLowerCase()} data-rank={rank.toLowerCase()} alt="" aria-hidden="true" draggable="false"/>;
  return <svg className="battle-sprite enemy-battle-sprite" viewBox="0 0 170 180" data-style={style.toLowerCase()} data-rank={rank.toLowerCase()} aria-hidden="true" focusable="false"><use href={`/assets/combat/monsters/monster-atlas.svg#${id}`}/></svg>;
  const beast = /wolf|boar|rat|hound|spider|bear|wyrm|drake|beast|mole|stag|crow|serpent|fang/.test(id);
  const magic = style.toLowerCase() === 'magic';
  const ranged = style.toLowerCase() === 'ranged';
  return <svg className="battle-sprite enemy-battle-sprite" viewBox="0 0 160 160" data-style={style.toLowerCase()} data-rank={rank.toLowerCase()} aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="enemy-hide" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#c5b69a"/><stop offset=".5" stopColor="currentColor"/><stop offset="1" stopColor="#343a31"/></linearGradient>
      <linearGradient id="enemy-metal" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#e1d4b4"/><stop offset=".5" stopColor="currentColor"/><stop offset="1" stopColor="#343c37"/></linearGradient>
      <radialGradient id="enemy-aura"><stop offset="0" stopColor="currentColor" stopOpacity=".35"/><stop offset="1" stopColor="currentColor" stopOpacity="0"/></radialGradient>
    </defs>
    {rank === 'Boss' && <><ellipse cx="80" cy="79" rx="67" ry="67" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 7" opacity=".55"/><ellipse cx="80" cy="79" rx="55" ry="55" fill="url(#enemy-aura)"/></>}
    {beast ? <g stroke="#242720" strokeWidth="3.2" strokeLinejoin="round" strokeLinecap="round">
      <path d="M45 78 Q59 53 93 67 L119 83 L110 103 L83 112 L55 101Z" fill="url(#enemy-hide)"/>
      <path d="M51 91 L44 123 L54 126 L66 104 M84 105 L83 130 L94 131 L103 101 M108 97 L120 120 L130 116 L121 88" fill="currentColor"/>
      <path d="M45 78 L27 73 L15 60 L19 47 L32 55 L40 50 L50 63Z" fill="url(#enemy-hide)"/>
      <path d="M21 50 L16 35 L29 45 M39 54 L48 40 L49 58" fill="currentColor"/>
      <path d="M18 65 L5 72 L21 79 L35 73Z" fill="currentColor"/>
      <path d="M30 62 L25 65" stroke="#e6c18b" strokeWidth="3"/><circle cx="25" cy="58" r="3.2" fill="#f2c67c" stroke="#34251b" strokeWidth="1.5"/>
      <path d="M45 78 Q37 93 49 104 L60 110 L64 101" fill="#343a31"/>
      <path d="M51 122 L44 134 L57 134 L62 125 M82 128 L77 140 L94 139 L96 130 M121 118 L122 132 L136 128 L131 116" fill="#343a31"/>
    </g> : magic ? <g stroke="#252532" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
      <path d="M57 47 Q42 63 47 83 L28 126 Q49 139 79 134 L112 127 L93 85 Q103 59 83 45Z" fill="url(#enemy-metal)"/>
      <path d="M53 55 Q44 33 64 20 Q87 23 91 49 L81 66 L60 66Z" fill="#343548"/>
      <path d="M58 48 L86 49 L78 63 L64 63Z" fill="#111c28"/>
      <path d="M63 51 L68 51 M78 51 L82 51" stroke="#b8dcf2" strokeWidth="3.5"/>
      <path d="M51 72 L33 93 L45 101 L61 84 M89 71 L109 89 L99 100 L83 84" fill="currentColor"/>
      <path d="M108 90 L122 62" stroke="#6b5942" strokeWidth="5"/><path d="M123 61 L133 48 L145 61 L135 75Z" fill="#b7d9ef" stroke="#3b4d66" strokeWidth="2.5"/>
      <path d="M53 84 L40 119 L62 128 L75 96 L91 128 L110 119 L94 84Z" fill="#343548" opacity=".9"/>
      <path d="M45 128 L116 128" stroke="currentColor" strokeWidth="3" opacity=".7"/>
    </g> : <g stroke="#252923" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round">
      <path d="M53 57 L39 72 L45 105 L58 119 L99 118 L112 99 L116 72 L99 55Z" fill="url(#enemy-metal)"/>
      <path d="M58 66 L78 78 L98 64 L104 94 L91 108 L61 104Z" fill="#424c43" stroke="#252d27" strokeWidth="2.5"/>
      <path d="M61 76 L77 83 L75 104 L62 99Z" fill="#c6b58f" opacity=".75"/>
      <path d="M50 63 L33 74 L29 98 L43 104 L57 82Z" fill="currentColor"/>
      <path d="M103 63 L122 76 L116 99 L104 96 L97 81Z" fill="currentColor"/>
      <path d="M105 92 L118 99 L138 69 L130 63 L114 82Z" fill="url(#enemy-metal)"/>
      <path d="M137 71 L153 28 L158 31 L145 76 L141 80Z" fill="#d9d6c7" stroke="#575d53" strokeWidth="1.5"/>
      <path d="M47 109 L43 139 L60 143 L72 116 L81 116 L91 143 L109 139 L101 107Z" fill="#353c35"/>
      <path d="M57 140 L68 140 L68 151 L49 152Z M91 140 L105 139 L116 151 L95 152Z" fill="#40372b"/>
      <path d="M55 54 Q50 35 64 25 L88 27 Q101 37 94 55 L85 65 L64 63Z" fill="url(#enemy-metal)"/>
      <path d="M51 41 L61 22 L88 20 L101 40 L88 35 L64 36Z" fill="#424b42"/>
      <path d="M63 45 L86 45 L83 52 L66 52Z" fill="#1a211e" stroke="#d5b77a" strokeWidth="1.5"/>
      {ranged && <path d="M29 69 Q5 84 25 116 Q43 89 29 69 M27 76 Q44 93 27 109" fill="none" stroke="#d4c59f" strokeWidth="3"/>}
    </g>}
    {rank === 'Elite' && <path d="M80 4 L86 16 L99 18 L90 28 L93 41 L80 34 L67 41 L70 28 L61 18 L74 16Z" fill="#e2c58b" stroke="#3c3020" strokeWidth="2"/>}
  </svg>;
}
