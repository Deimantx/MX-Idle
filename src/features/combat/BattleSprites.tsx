export function PlayerBattleSprite() {
  return <svg className="battle-sprite player-battle-sprite" viewBox="0 0 120 170" aria-hidden="true" focusable="false">
    <defs>
      <linearGradient id="player-cloak" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#647966"/><stop offset="1" stopColor="#263b32"/></linearGradient>
      <linearGradient id="player-steel" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#d6d9c9"/><stop offset=".48" stopColor="#737f7a"/><stop offset="1" stopColor="#343e3b"/></linearGradient>
      <linearGradient id="player-leather" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#956b43"/><stop offset="1" stopColor="#493728"/></linearGradient>
    </defs>
    <ellipse cx="59" cy="158" rx="36" ry="6" fill="#070c0b" opacity=".48"/>
    <path d="M42 55 L27 67 L22 117 L35 146 L55 145 L63 110 L70 146 L91 144 L94 109 L85 68 L70 53Z" fill="url(#player-cloak)" stroke="#17221d" strokeWidth="3" strokeLinejoin="round"/>
    <path d="M43 113 L39 150 L50 154 L61 119 L67 119 L72 154 L85 152 L82 110Z" fill="#313b35" stroke="#151e1b" strokeWidth="3" strokeLinejoin="round"/>
    <path d="M37 148 L51 149 L52 160 L34 161 L29 157Z M70 149 L84 147 L92 157 L88 161 L70 160Z" fill="#4a392b" stroke="#151e1b" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M35 60 Q51 48 73 59 L82 93 L67 113 L36 105 L29 81Z" fill="url(#player-steel)" stroke="#17221d" strokeWidth="3" strokeLinejoin="round"/>
    <path d="M38 66 L53 76 L69 65 L73 88 L60 102 L39 91Z" fill="#52645b" stroke="#2b3731" strokeWidth="2"/>
    <path d="M49 75 L61 77 L59 101 L48 96Z" fill="#c1b48d" opacity=".8"/>
    <path d="M32 64 L22 79 L28 104 L39 100 L42 82Z" fill="url(#player-cloak)" stroke="#17221d" strokeWidth="3" strokeLinejoin="round"/>
    <path d="M73 64 L86 72 L82 94 L72 92 L66 79Z" fill="url(#player-steel)" stroke="#17221d" strokeWidth="3" strokeLinejoin="round"/>
    <path d="M72 91 L84 95 L95 75 L89 69 L79 82Z" fill="#aeb8ad" stroke="#25312c" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M92 78 L110 25 L116 28 L101 83 L96 87Z" fill="url(#player-steel)" stroke="#d5d4c0" strokeWidth="1.4" strokeLinejoin="round"/>
    <path d="M91 79 L101 83 L98 91 L88 87Z" fill="url(#player-leather)" stroke="#241f18" strokeWidth="2"/>
    <path d="M87 89 L98 92 L96 97 L85 94Z" fill="#d1b16f" stroke="#4b3b25" strokeWidth="1.5"/>
    <path d="M18 83 Q29 76 39 88 L40 115 Q28 125 15 112Z" fill="url(#player-steel)" stroke="#17221d" strokeWidth="3" strokeLinejoin="round"/>
    <path d="M21 89 L32 86 L35 108 L27 114 L20 107Z" fill="#667c70" stroke="#27372f" strokeWidth="2"/>
    <path d="M28 87 L29 112 M18 100 L38 99" stroke="#d1b16f" strokeWidth="2"/>
    <path d="M39 49 Q38 36 48 27 L65 28 Q76 36 72 51 L66 62 L45 60Z" fill="url(#player-steel)" stroke="#17221d" strokeWidth="3" strokeLinejoin="round"/>
    <path d="M39 43 L48 23 L68 22 L76 41 L65 36 L49 36Z" fill="#56645d" stroke="#17221d" strokeWidth="3" strokeLinejoin="round"/>
    <path d="M48 43 L67 43 L64 52 L50 52Z" fill="#202a27" stroke="#d2b16f" strokeWidth="1.5"/>
    <path d="M54 44 L61 44 L60 48 L54 48Z" fill="#c4d1c1"/>
    <path d="M48 24 L55 13 L61 23" fill="#8b6c43" stroke="#342a1e" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M37 62 L56 69 L74 59 L80 68 L59 81 L34 72Z" fill="url(#player-leather)" stroke="#1a241f" strokeWidth="2.5" strokeLinejoin="round"/>
    <rect x="53" y="68" width="12" height="8" rx="1" fill="#d1b16f" stroke="#483723" strokeWidth="1.5"/>
  </svg>;
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
