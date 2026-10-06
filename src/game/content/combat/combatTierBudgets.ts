export const PROVISIONAL_PHASE1_COMBAT_BUDGETS = [
  {tier:1,hp:90,maxHit:10,accuracy:120,evasion:105}, {tier:2,hp:145,maxHit:15,accuracy:155,evasion:125},
  {tier:3,hp:225,maxHit:22,accuracy:195,evasion:150}, {tier:4,hp:330,maxHit:30,accuracy:240,evasion:180},
  {tier:5,hp:470,maxHit:40,accuracy:290,evasion:215}, {tier:6,hp:650,maxHit:52,accuracy:345,evasion:255},
  {tier:7,hp:880,maxHit:66,accuracy:405,evasion:300}, {tier:8,hp:1160,maxHit:82,accuracy:470,evasion:350},
  {tier:9,hp:1500,maxHit:100,accuracy:540,evasion:405}, {tier:10,hp:1900,maxHit:120,accuracy:615,evasion:465},
] as const;
export const COMBAT_CLASS_MULTIPLIERS = {Light:{hp:.8,damage:.9,accuracy:1},Normal:{hp:1,damage:1,accuracy:1},Heavy:{hp:1.25,damage:1.1,accuracy:.95},Elite:{hp:2.25,damage:1.15,accuracy:1.05},Dungeon:{hp:1.25,damage:1.05,accuracy:1.05},Boss:{hp:5,damage:1.25,accuracy:1.1}} as const;
