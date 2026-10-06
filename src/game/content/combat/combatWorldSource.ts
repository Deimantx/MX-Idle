export const COMBAT_WORLD_SOURCE = [
  {
    "tier": 1,
    "areaName": "",
    "roster": [
      {
        "name": "Road Wolf",
        "combatClass": "Normal",
        "style": "Melee",
        "damageType": "Stab",
        "profile": "M-C",
        "overrides": "â€”",
        "sequence": "Bite|Bite|Rending Fang|repeat",
        "offering": "Beast",
        "tags": [
          "Beast"
        ]
      },
      {
        "name": "Dust Rat",
        "combatClass": "Light",
        "style": "Melee",
        "damageType": "Stab",
        "profile": "M-C",
        "overrides": "Earth +0 instead of -8",
        "sequence": "Bite|Quick Bite|Bite|repeat",
        "offering": "Beast",
        "tags": [
          "Beast"
        ]
      },
      {
        "name": "Ragged Poacher",
        "combatClass": "Normal",
        "style": "Ranged",
        "damageType": "Pierce",
        "profile": "R-A",
        "overrides": "Fire +18",
        "sequence": "Arrow|Arrow|Barbed Shot|repeat",
        "offering": "War",
        "tags": [
          "Humanoid",
          "Archer"
        ]
      },
      {
        "name": "Hedge Spark",
        "combatClass": "Normal",
        "style": "Magic",
        "damageType": "Air",
        "profile": "G-A",
        "overrides": "Air +28; Earth -8",
        "sequence": "Gust|Gust|Static Burst|repeat",
        "offering": "Arcane",
        "tags": [
          "Elemental",
          "Caster"
        ]
      },
      {
        "name": "Ironjaw Boar",
        "combatClass": "Elite",
        "style": "Melee",
        "damageType": "Crush",
        "profile": "M-C",
        "overrides": "Crush +26; Fire -12",
        "sequence": "Gore|Gore|Iron Charge|repeat",
        "offering": "Beast",
        "tags": [
          "Beast",
          "Elite"
        ]
      },
      {
        "name": "Watch Deserter",
        "combatClass": "Dungeon",
        "style": "Melee",
        "damageType": "Slash",
        "profile": "M-A",
        "overrides": "Stab +20",
        "sequence": "Slash|Slash|Shield Bash|repeat",
        "offering": "War",
        "tags": [
          "Humanoid",
          "Dungeon"
        ]
      },
      {
        "name": "Tower Bowman",
        "combatClass": "Dungeon",
        "style": "Ranged",
        "damageType": "Pierce",
        "profile": "R-B",
        "overrides": "Slash -8",
        "sequence": "Arrow|Aimed Shot|Arrow|repeat",
        "offering": "War",
        "tags": [
          "Humanoid",
          "Archer",
          "Dungeon"
        ]
      }
    ],
    "actions": {
      "Road Wolf": "Bite = 1.00× Stab; Rending Fang = 1.25× Stab + Bleed 10% hit over 6s",
      "Dust Rat": "Quick Bite = 0.70× Stab, 0.75× action time",
      "Ragged Poacher": "Barbed Shot = 1.15× Pierce + Bleed 8% hit over 6s",
      "Hedge Spark": "Static Burst = 1.20× Air + Accuracy Down 8% for 5s",
      "Ironjaw Boar": "Gore = 1.00× Crush; Iron Charge = 1.55× Crush, 1.25× time + Stun 1.0s",
      "Watch Deserter": "Shield Bash = 1.10× Crush + Accuracy Down 10% for 5s",
      "Tower Bowman": "Aimed Shot = 1.40× Pierce, 1.20× time, +10% Accuracy",
      "Captain Veyr": "Slash = 1.00× Slash; Crushing Pommel = 1.45× Crush + Stun 1.0s; Guard Break = 1.10× Slash + -8 pp Slash/Stab/Crush Resistance for 8s"
    },
    "bossName": "Captain Veyr",
    "bossActions": "Slash = 1.00× Slash; Crushing Pommel = 1.45× Crush + Stun 1.0s; Guard Break = 1.10× Slash + -8 pp Slash/Stab/Crush Resistance for 8s",
    "phases": [
      {
        "condition": ">0% HP",
        "sequence": "Slash|Slash|Crushing Pommel|Guard Break|repeat"
      }
    ],
    "bossComponent": "Veyr's Broken Crest",
    "uniqueHook": "Rusthook Blade (unique hook; stats later)",
    "elite": "Ironjaw Boar  ",
    "dungeonName": "Ruined Watch  ",
    "bossStyle": "Melee",
    "bossDamageType": "Slash",
    "bossProfile": "M-B",
    "bossOverrides": "Fire -15; Stab +10",
    "bossSequence": "Slash|Slash|Crushing Pommel|Guard Break|repeat"
  },
  {
    "tier": 2,
    "areaName": "",
    "roster": [
      {
        "name": "Mirewolf",
        "combatClass": "Normal",
        "style": "Melee",
        "damageType": "Stab",
        "profile": "M-C",
        "overrides": "Fire -12; Water +14",
        "sequence": "Bite|Bite|Bog Lunge|repeat",
        "offering": "Beast",
        "tags": [
          "Beast"
        ]
      },
      {
        "name": "Shellback Toad",
        "combatClass": "Heavy",
        "style": "Melee",
        "damageType": "Crush",
        "profile": "M-B",
        "overrides": "Puncture +36; Fire -8",
        "sequence": "Headbutt|Headbutt|Shell Slam|repeat",
        "offering": "Beast",
        "tags": [
          "Beast"
        ]
      },
      {
        "name": "Briar Archer",
        "combatClass": "Normal",
        "style": "Ranged",
        "damageType": "Pierce",
        "profile": "R-A",
        "overrides": "Fire -6; Earth +32",
        "sequence": "Arrow|Arrow|Thornshot|repeat",
        "offering": "War",
        "tags": [
          "Humanoid",
          "Archer"
        ]
      },
      {
        "name": "Bog Witch",
        "combatClass": "Normal",
        "style": "Magic",
        "damageType": "Water",
        "profile": "G-B",
        "overrides": "Fire -15; Water +30",
        "sequence": "Frost Hex|Frost Hex|Mire Chill|repeat",
        "offering": "Arcane",
        "tags": [
          "Humanoid",
          "Caster"
        ]
      },
      {
        "name": "Mirecoil Serpent",
        "combatClass": "Elite",
        "style": "Melee",
        "damageType": "Stab",
        "profile": "M-C",
        "overrides": "Stab +26; Fire -15",
        "sequence": "Fang|Coil Strike|Fang|Venom Bite|repeat",
        "offering": "Beast",
        "tags": [
          "Beast",
          "Elite"
        ]
      },
      {
        "name": "Drowned Stalker",
        "combatClass": "Dungeon",
        "style": "Melee",
        "damageType": "Slash",
        "profile": "M-A",
        "overrides": "Water +24; Fire -10",
        "sequence": "Claw|Claw|Drown Grip|repeat",
        "offering": "War",
        "tags": [
          "Undead",
          "Dungeon"
        ]
      },
      {
        "name": "Fen Channeler",
        "combatClass": "Dungeon",
        "style": "Magic",
        "damageType": "Water",
        "profile": "G-A",
        "overrides": "Water +28; Puncture -10",
        "sequence": "Water Bolt|Water Bolt|Silt Ward|repeat",
        "offering": "Arcane",
        "tags": [
          "Caster",
          "Dungeon"
        ]
      }
    ],
    "actions": {
      "Mirewolf": "Bog Lunge = 1.30× Stab + Evasion Down 8% for 5s",
      "Shellback Toad": "Shell Slam = 1.45× Crush + -6 pp Crush Resistance for 6s",
      "Briar Archer": "Thornshot = 1.10× Pierce + Bleed 12% over 6s",
      "Bog Witch": "Mire Chill = 1.05× Water + Chill 8% for 5s",
      "Mirecoil Serpent": "Coil Strike = 1.20× Crush; Venom Bite = 1.15× Stab + Poison 4% Max HP over 8s",
      "Drowned Stalker": "Drown Grip = 1.30× Crush + Chill 6% for 4s",
      "Fen Channeler": "Silt Ward = 0.80× Earth + self +8 pp Melee Resistances for next 2 actions",
      "Miremother Ilyss": "Mire Bolt = 1.00× Water; Brood Chill = 1.25× Water + Chill 10% for 6s; Venom Wave = 1.15× Water + Poison 5% Max HP over 10s"
    },
    "bossName": "Miremother Ilyss",
    "bossActions": "Mire Bolt = 1.00× Water; Brood Chill = 1.25× Water + Chill 10% for 6s; Venom Wave = 1.15× Water + Poison 5% Max HP over 10s",
    "phases": [
      {
        "condition": ">50% HP",
        "sequence": "Mire Bolt|Mire Bolt|Brood Chill|repeat"
      },
      {
        "condition": "≤50% HP",
        "sequence": "Brood Chill|Venom Wave|Mire Bolt|repeat"
      }
    ],
    "bossComponent": "Miremother Broodheart",
    "uniqueHook": "Mirecoil Whip (standalone Melee unique hook)",
    "elite": "Mirecoil Serpent  ",
    "dungeonName": "Drowned Burrow  ",
    "bossStyle": "Magic",
    "bossDamageType": "Water",
    "bossProfile": "G-C",
    "bossOverrides": "Fire -20; Water +32; Pierce -15",
    "bossSequence": "Mire Bolt|Mire Bolt|Brood Chill|repeat"
  },
  {
    "tier": 3,
    "areaName": "",
    "roster": [
      {
        "name": "Cliff Ram",
        "combatClass": "Normal",
        "style": "Melee",
        "damageType": "Crush",
        "profile": "M-C",
        "overrides": "Crush +26; Air -8",
        "sequence": "Ram|Ram|Cliff Charge|repeat",
        "offering": "Beast",
        "tags": [
          "Beast"
        ]
      },
      {
        "name": "Ironcloak Skirmisher",
        "combatClass": "Normal",
        "style": "Melee",
        "damageType": "Slash",
        "profile": "M-B",
        "overrides": "Crush +8 instead of 28",
        "sequence": "Slash|Stab|Shield Hook|repeat",
        "offering": "War",
        "tags": [
          "Humanoid"
        ]
      },
      {
        "name": "Cragbow Scout",
        "combatClass": "Normal",
        "style": "Ranged",
        "damageType": "Pierce",
        "profile": "R-B",
        "overrides": "Earth +34; Slash -10",
        "sequence": "Arrow|Quick Shot|Arrow|Stonehead Shot|repeat",
        "offering": "War",
        "tags": [
          "Humanoid",
          "Archer"
        ]
      },
      {
        "name": "Stonecaller",
        "combatClass": "Normal",
        "style": "Magic",
        "damageType": "Earth",
        "profile": "G-B",
        "overrides": "Earth +30; Air -12",
        "sequence": "Stone Bolt|Stone Bolt|Fracture|repeat",
        "offering": "Arcane",
        "tags": [
          "Humanoid",
          "Caster"
        ]
      },
      {
        "name": "Graniteback Ram",
        "combatClass": "Elite",
        "style": "Melee",
        "damageType": "Crush",
        "profile": "M-B",
        "overrides": "Crush +38; Puncture +18; Air -15",
        "sequence": "Horn|Horn|Granite Charge|Quake|repeat",
        "offering": "Beast",
        "tags": [
          "Beast",
          "Elite"
        ]
      },
      {
        "name": "Forge Thrall",
        "combatClass": "Dungeon",
        "style": "Melee",
        "damageType": "Crush",
        "profile": "M-B",
        "overrides": "Fire +20",
        "sequence": "Hammer|Hammer|Furnace Smash|repeat",
        "offering": "War",
        "tags": [
          "Construct",
          "Dungeon"
        ]
      },
      {
        "name": "Cinder Smith",
        "combatClass": "Dungeon",
        "style": "Magic",
        "damageType": "Fire",
        "profile": "G-A",
        "overrides": "Fire +30; Water -15",
        "sequence": "Fire Bolt|Fire Bolt|Molten Brand|repeat",
        "offering": "Arcane",
        "tags": [
          "Humanoid",
          "Caster",
          "Dungeon"
        ]
      }
    ],
    "actions": {
      "Cliff Ram": "Cliff Charge = 1.50× Crush, 1.25× time",
      "Ironcloak Skirmisher": "Shield Hook = 1.10× Crush + Evasion Down 10% for 5s",
      "Cragbow Scout": "Quick Shot = 0.70× Pierce; Stonehead Shot = 1.25× Crush",
      "Stonecaller": "Fracture = 1.15× Earth + -8 pp Earth Resistance for 6s",
      "Graniteback Ram": "Granite Charge = 1.55× Crush; Quake = 1.20× Earth + Stun 1.0s",
      "Forge Thrall": "Furnace Smash = 1.40× Crush + Burn 10% hit over 6s",
      "Cinder Smith": "Molten Brand = 1.20× Fire + -8 pp Fire Resistance for 6s",
      "Forgemaster Korr": "Hammer = 1.00× Crush; Furnace Slam = 1.50× Crush + Burn 12% hit over 6s; Tempered Guard = self +10 pp Melee/Ranged Resistance for next 2 actions; Molten Hammer = 1.35× Crush + 0.35× Fire component (future hybrid hook; baseline may resolve as Crush+Fire components)"
    },
    "bossName": "Forgemaster Korr",
    "bossActions": "Hammer = 1.00× Crush; Furnace Slam = 1.50× Crush + Burn 12% hit over 6s; Tempered Guard = self +10 pp Melee/Ranged Resistance for next 2 actions; Molten Hammer = 1.35× Crush + 0.35× Fire component (future hybrid hook; baseline may resolve as Crush+Fire components)",
    "phases": [
      {
        "condition": ">40% HP",
        "sequence": "Hammer|Hammer|Furnace Slam|Tempered Guard|repeat"
      },
      {
        "condition": "≤40% HP",
        "sequence": "Furnace Slam|Molten Hammer|Hammer|repeat"
      }
    ],
    "bossComponent": "Korr's Forge Sigil",
    "uniqueHook": "Forgeheart Mace upgrade component",
    "elite": "Graniteback Ram  ",
    "dungeonName": "Hollow Forge  ",
    "bossStyle": "Melee",
    "bossDamageType": "Crush",
    "bossProfile": "M-B",
    "bossOverrides": "Crush +40; Water -18; Fire +22",
    "bossSequence": "Hammer|Hammer|Furnace Slam|Tempered Guard|repeat"
  },
  {
    "tier": 4,
    "areaName": "",
    "roster": [
      {
        "name": "Graveblade",
        "combatClass": "Normal",
        "style": "Melee",
        "damageType": "Slash",
        "profile": "M-A",
        "overrides": "Fire -10; Water +12",
        "sequence": "Slash|Slash|Grave Rend|repeat",
        "offering": "War",
        "tags": [
          "Undead"
        ]
      },
      {
        "name": "Wight Hound",
        "combatClass": "Normal",
        "style": "Melee",
        "damageType": "Stab",
        "profile": "M-C",
        "overrides": "Fire -12; Earth +14",
        "sequence": "Bite|Quick Bite|Soul Fang|repeat",
        "offering": "Beast",
        "tags": [
          "Undead",
          "Beast"
        ]
      },
      {
        "name": "Bone Archer",
        "combatClass": "Normal",
        "style": "Ranged",
        "damageType": "Pierce",
        "profile": "R-A",
        "overrides": "Crush -15; Fire +8",
        "sequence": "Arrow|Arrow|Splinter Volley|repeat",
        "offering": "War",
        "tags": [
          "Undead",
          "Archer"
        ]
      },
      {
        "name": "Pale Hexer",
        "combatClass": "Normal",
        "style": "Magic",
        "damageType": "Water",
        "profile": "G-A",
        "overrides": "Fire -20; Water +26",
        "sequence": "Rime Bolt|Hex|Rime Bolt|repeat",
        "offering": "Arcane",
        "tags": [
          "Undead",
          "Caster"
        ]
      },
      {
        "name": "Moonbound Knight",
        "combatClass": "Elite",
        "style": "Melee",
        "damageType": "Slash",
        "profile": "M-B",
        "overrides": "Stab +32; Fire -12",
        "sequence": "Slash|Guard Break|Stab|Moon Cleave|repeat",
        "offering": "War",
        "tags": [
          "Undead",
          "Elite"
        ]
      },
      {
        "name": "Crypt Sentinel",
        "combatClass": "Dungeon",
        "style": "Melee",
        "damageType": "Crush",
        "profile": "M-B",
        "overrides": "Crush +36; Fire -15",
        "sequence": "Mace|Mace|Bone Crush|repeat",
        "offering": "War",
        "tags": [
          "Undead",
          "Dungeon"
        ]
      },
      {
        "name": "Moon Priest",
        "combatClass": "Dungeon",
        "style": "Magic",
        "damageType": "Water",
        "profile": "G-C",
        "overrides": "Fire -18; Pierce -12",
        "sequence": "Moon Bolt|Pale Ward|Moon Bolt|Soul Chill|repeat",
        "offering": "Arcane",
        "tags": [
          "Undead",
          "Caster",
          "Dungeon"
        ]
      }
    ],
    "actions": {
      "Graveblade": "Grave Rend = 1.25× Slash + Bleed 14% over 6s",
      "Wight Hound": "Soul Fang = 1.20× Stab + Accuracy Down 10% for 6s",
      "Bone Archer": "Splinter Volley = 2 ×0.65× Pierce; two hit rolls",
      "Pale Hexer": "Hex = 0.90× Water + Accuracy Down 12% for 6s",
      "Moonbound Knight": "Guard Break = 1.05× Crush + -10 pp Melee Resistances 7s; Moon Cleave = 1.50× Slash",
      "Crypt Sentinel": "Bone Crush = 1.45× Crush + Stun 1.0s",
      "Moon Priest": "Pale Ward = self +8 pp all Magic Res for 2 actions; Soul Chill = 1.20× Water + Chill 10% 5s",
      "The Pale Castellan": "Pale Bolt = 1.00× Water; Moon Spear = 1.45× Water; Grave Decree = 0.90× Earth + -12 pp Magic Resistance for 8s; Soul Chill = 1.10× Water + Chill 12% for 6s"
    },
    "bossName": "The Pale Castellan",
    "bossActions": "Pale Bolt = 1.00× Water; Moon Spear = 1.45× Water; Grave Decree = 0.90× Earth + -12 pp Magic Resistance for 8s; Soul Chill = 1.10× Water + Chill 12% for 6s",
    "phases": [
      {
        "condition": ">50% HP",
        "sequence": "Pale Bolt|Pale Bolt|Moon Spear|repeat"
      },
      {
        "condition": "≤50% HP",
        "sequence": "Moon Spear|Grave Decree|Pale Bolt|Soul Chill|repeat"
      }
    ],
    "bossComponent": "Pale Crown Fragment",
    "uniqueHook": "Moonward Shield component",
    "elite": "Moonbound Knight  ",
    "dungeonName": "Mooncrypt  ",
    "bossStyle": "Magic",
    "bossDamageType": "Water",
    "bossProfile": "G-C",
    "bossOverrides": "Fire -25; Water +34; Pierce -15",
    "bossSequence": "Pale Bolt|Pale Bolt|Moon Spear|repeat"
  },
  {
    "tier": 5,
    "areaName": "",
    "roster": [
      {
        "name": "Emberclaw",
        "combatClass": "Normal",
        "style": "Melee",
        "damageType": "Stab",
        "profile": "M-C",
        "overrides": "Fire +32; Water -18",
        "sequence": "Claw|Claw|Burning Pounce|repeat",
        "offering": "Beast",
        "tags": [
          "Beast"
        ]
      },
      {
        "name": "Ash Reaver",
        "combatClass": "Normal",
        "style": "Melee",
        "damageType": "Slash",
        "profile": "M-A",
        "overrides": "Fire +28; Water -15",
        "sequence": "Slash|Slash|Ash Cleave|repeat",
        "offering": "War",
        "tags": [
          "Humanoid"
        ]
      },
      {
        "name": "Cinder Archer",
        "combatClass": "Normal",
        "style": "Ranged",
        "damageType": "Pierce",
        "profile": "R-A",
        "overrides": "Fire +30; Water -15",
        "sequence": "Arrow|Ember Arrow|Arrow|repeat",
        "offering": "War",
        "tags": [
          "Humanoid",
          "Archer"
        ]
      },
      {
        "name": "Flame Seer",
        "combatClass": "Normal",
        "style": "Magic",
        "damageType": "Fire",
        "profile": "G-B",
        "overrides": "Fire +38; Water -22",
        "sequence": "Fire Bolt|Fire Bolt|Cinderburst|repeat",
        "offering": "Arcane",
        "tags": [
          "Caster"
        ]
      },
      {
        "name": "Magmahorn",
        "combatClass": "Elite",
        "style": "Melee",
        "damageType": "Crush",
        "profile": "M-B",
        "overrides": "Fire +45; Water -25; Crush +34",
        "sequence": "Horn|Lava Charge|Horn|Magma Slam|repeat",
        "offering": "Beast",
        "tags": [
          "Beast",
          "Elite"
        ]
      },
      {
        "name": "Ember Guard",
        "combatClass": "Dungeon",
        "style": "Melee",
        "damageType": "Slash",
        "profile": "M-B",
        "overrides": "Fire +34; Water -18",
        "sequence": "Slash|Slash|Heat Guard|Flame Cleave|repeat",
        "offering": "War",
        "tags": [
          "Humanoid",
          "Dungeon"
        ]
      },
      {
        "name": "Pyre Channeler",
        "combatClass": "Dungeon",
        "style": "Magic",
        "damageType": "Fire",
        "profile": "G-C",
        "overrides": "Fire +42; Water -25; Pierce -12",
        "sequence": "Pyre Bolt|Pyre Bolt|Furnace Wave|repeat",
        "offering": "Arcane",
        "tags": [
          "Caster",
          "Dungeon"
        ]
      }
    ],
    "actions": {
      "Emberclaw": "Burning Pounce = 1.25× Stab + Burn 12% hit over 6s",
      "Ash Reaver": "Ash Cleave = 1.35× Slash + Accuracy Down 8% 5s",
      "Cinder Archer": "Ember Arrow = 1.10× Pierce + Burn 10% hit over 6s",
      "Flame Seer": "Cinderburst = 1.35× Fire + Burn 14% hit over 6s",
      "Magmahorn": "Lava Charge = 1.35× Crush + Burn; Magma Slam = 1.50× Crush + -10 pp Crush Resistance 7s",
      "Ember Guard": "Heat Guard = self +10 pp Melee Res for next action; Flame Cleave = 1.40× Slash + Burn",
      "Pyre Channeler": "Furnace Wave = 1.35× Fire + -10 pp Fire Resistance 7s",
      "Cindermaw": "Bite = 1.00× Stab; Cinder Breath = 1.30× Fire + Burn 16% hit over 8s; Tail Crush = 1.55× Crush + Stun 1.0s; Magma Roar = 0.90× Fire + -12 pp Fire/Crush Resistance for 8s"
    },
    "bossName": "Cindermaw",
    "bossActions": "Bite = 1.00× Stab; Cinder Breath = 1.30× Fire + Burn 16% hit over 8s; Tail Crush = 1.55× Crush + Stun 1.0s; Magma Roar = 0.90× Fire + -12 pp Fire/Crush Resistance for 8s",
    "phases": [
      {
        "condition": ">60% HP",
        "sequence": "Bite|Bite|Cinder Breath|repeat"
      },
      {
        "condition": "31–60% HP",
        "sequence": "Cinder Breath|Tail Crush|Bite|repeat"
      },
      {
        "condition": "≤30% HP",
        "sequence": "Tail Crush|Cinder Breath|Magma Roar|repeat"
      }
    ],
    "bossComponent": "Cindermaw Core",
    "uniqueHook": "Cinderchain Whip component",
    "elite": "Magmahorn  ",
    "dungeonName": "Embervault  ",
    "bossStyle": "Melee",
    "bossDamageType": "Crush",
    "bossProfile": "M-B",
    "bossOverrides": "Fire +50; Water -30; Puncture +34",
    "bossSequence": "Bite|Bite|Cinder Breath|repeat"
  },
  {
    "tier": 6,
    "areaName": "",
    "roster": [
      {
        "name": "Frostfang Wolf",
        "combatClass": "Normal",
        "style": "Melee",
        "damageType": "Stab",
        "profile": "M-C",
        "overrides": "Water +34; Fire -20",
        "sequence": "Bite|Frost Bite|Bite|repeat",
        "offering": "Beast",
        "tags": [
          "Beast"
        ]
      },
      {
        "name": "Iceguard Raider",
        "combatClass": "Normal",
        "style": "Melee",
        "damageType": "Slash",
        "profile": "M-B",
        "overrides": "Water +30; Fire -18",
        "sequence": "Slash|Shield Bash|Slash|repeat",
        "offering": "War",
        "tags": [
          "Humanoid"
        ]
      },
      {
        "name": "Snowstalker Archer",
        "combatClass": "Normal",
        "style": "Ranged",
        "damageType": "Pierce",
        "profile": "R-A",
        "overrides": "Water +32; Fire -18",
        "sequence": "Arrow|Arrow|Rime Shot|repeat",
        "offering": "War",
        "tags": [
          "Humanoid",
          "Archer"
        ]
      },
      {
        "name": "Rimecaller",
        "combatClass": "Normal",
        "style": "Magic",
        "damageType": "Water",
        "profile": "G-B",
        "overrides": "Water +42; Fire -25",
        "sequence": "Rime Bolt|Rime Bolt|Deep Freeze|repeat",
        "offering": "Arcane",
        "tags": [
          "Caster"
        ]
      },
      {
        "name": "Whitehorn Mammoth",
        "combatClass": "Elite",
        "style": "Melee",
        "damageType": "Crush",
        "profile": "M-B",
        "overrides": "Water +38; Fire -25; Crush +40",
        "sequence": "Tusk|Tusk|Avalanche Charge|repeat",
        "offering": "Beast",
        "tags": [
          "Beast",
          "Elite"
        ]
      },
      {
        "name": "Frost Warden",
        "combatClass": "Dungeon",
        "style": "Melee",
        "damageType": "Crush",
        "profile": "M-B",
        "overrides": "Water +40; Fire -24",
        "sequence": "Hammer|Hammer|Icebreaker|repeat",
        "offering": "War",
        "tags": [
          "Humanoid",
          "Dungeon"
        ]
      },
      {
        "name": "Glacial Adept",
        "combatClass": "Dungeon",
        "style": "Magic",
        "damageType": "Water",
        "profile": "G-C",
        "overrides": "Water +45; Fire -28; Pierce -14",
        "sequence": "Ice Spear|Ice Spear|Whiteout|repeat",
        "offering": "Arcane",
        "tags": [
          "Caster",
          "Dungeon"
        ]
      }
    ],
    "actions": {
      "Frostfang Wolf": "Frost Bite = 1.15× Stab + Chill 8% 5s",
      "Iceguard Raider": "Shield Bash = 1.15× Crush + Stun 0.75s",
      "Snowstalker Archer": "Rime Shot = 1.20× Pierce + Chill 8% 5s",
      "Rimecaller": "Deep Freeze = 1.25× Water + Chill 12% 6s",
      "Whitehorn Mammoth": "Avalanche Charge = 1.65× Crush + Chill 10% 6s",
      "Frost Warden": "Icebreaker = 1.45× Crush + -10 pp Crush Resistance 8s",
      "Glacial Adept": "Whiteout = 1.20× Water + Accuracy Down 15% 6s",
      "Winter Matriarch": "Ice Spear = 1.10× Water; Whiteout = 1.20× Water + Accuracy Down 15% 7s; Glacial Crush = 1.55× Crush + Chill 15% 7s"
    },
    "bossName": "Winter Matriarch",
    "bossActions": "Ice Spear = 1.10× Water; Whiteout = 1.20× Water + Accuracy Down 15% 7s; Glacial Crush = 1.55× Crush + Chill 15% 7s",
    "phases": [
      {
        "condition": ">50% HP",
        "sequence": "Ice Spear|Ice Spear|Whiteout|repeat"
      },
      {
        "condition": "≤50% HP",
        "sequence": "Whiteout|Glacial Crush|Ice Spear|repeat"
      }
    ],
    "bossComponent": "Winterheart",
    "uniqueHook": "Winterheart Ward component",
    "elite": "Whitehorn Mammoth  ",
    "dungeonName": "Frostspire  ",
    "bossStyle": "Magic",
    "bossDamageType": "Water",
    "bossProfile": "G-C",
    "bossOverrides": "Water +50; Fire -30; Pierce -15",
    "bossSequence": "Ice Spear|Ice Spear|Whiteout|repeat"
  },
  {
    "tier": 7,
    "areaName": "",
    "roster": [
      {
        "name": "Stormfang",
        "combatClass": "Normal",
        "style": "Melee",
        "damageType": "Stab",
        "profile": "M-C",
        "overrides": "Air +34; Earth -18",
        "sequence": "Bite|Bite|Static Fang|repeat",
        "offering": "Beast",
        "tags": [
          "Beast"
        ]
      },
      {
        "name": "Gale Raider",
        "combatClass": "Normal",
        "style": "Melee",
        "damageType": "Slash",
        "profile": "M-A",
        "overrides": "Air +28; Earth -15",
        "sequence": "Slash|Quick Slash|Gale Cleave|repeat",
        "offering": "War",
        "tags": [
          "Humanoid"
        ]
      },
      {
        "name": "Thunderbow",
        "combatClass": "Normal",
        "style": "Ranged",
        "damageType": "Pierce",
        "profile": "R-B",
        "overrides": "Air +36; Earth -16",
        "sequence": "Arrow|Arrow|Storm Shot|repeat",
        "offering": "War",
        "tags": [
          "Humanoid",
          "Archer"
        ]
      },
      {
        "name": "Tempest Adept",
        "combatClass": "Normal",
        "style": "Magic",
        "damageType": "Air",
        "profile": "G-A",
        "overrides": "Air +42; Earth -22",
        "sequence": "Gale Bolt|Gale Bolt|Cyclone|repeat",
        "offering": "Arcane",
        "tags": [
          "Caster"
        ]
      },
      {
        "name": "Stormcoil Viper",
        "combatClass": "Elite",
        "style": "Melee",
        "damageType": "Stab",
        "profile": "M-C",
        "overrides": "Air +38; Earth -22; Fire -8",
        "sequence": "Fang|Static Coil|Fang|Venom Burst|repeat",
        "offering": "Beast",
        "tags": [
          "Beast",
          "Elite"
        ]
      },
      {
        "name": "Tempest Guard",
        "combatClass": "Dungeon",
        "style": "Melee",
        "damageType": "Crush",
        "profile": "M-B",
        "overrides": "Air +38; Earth -20",
        "sequence": "Hammer|Hammer|Thunder Slam|repeat",
        "offering": "War",
        "tags": [
          "Humanoid",
          "Dungeon"
        ]
      },
      {
        "name": "Storm Savant",
        "combatClass": "Dungeon",
        "style": "Magic",
        "damageType": "Air",
        "profile": "G-C",
        "overrides": "Air +46; Earth -25; Puncture -12",
        "sequence": "Air Lance|Air Lance|Tempest Cage|repeat",
        "offering": "Arcane",
        "tags": [
          "Caster",
          "Dungeon"
        ]
      }
    ],
    "actions": {
      "Stormfang": "Static Fang = 1.20× Stab + Accuracy Down 10% 5s",
      "Gale Raider": "Gale Cleave = 1.30× Slash, 0.90× time",
      "Thunderbow": "Storm Shot = 1.20× Pierce + Accuracy Down 10% 5s",
      "Tempest Adept": "Cyclone = 1.25× Air + Evasion Down 12% 6s",
      "Stormcoil Viper": "Static Coil = 1.15× Air; Venom Burst = 1.15× Stab + Poison 6% Max HP over 10s",
      "Tempest Guard": "Thunder Slam = 1.50× Crush + Accuracy Down 12% 6s",
      "Storm Savant": "Tempest Cage = 1.15× Air + Evasion Down 15% 7s",
      "Skybreaker Raal": "Bolt = 1.00× Puncture; Skybreaker Shot = 1.60× Puncture +15 pp Puncture Penetration; Tempest Barrage = 3 ×0.55× Air, separate hit rolls"
    },
    "bossName": "Skybreaker Raal",
    "bossActions": "Bolt = 1.00× Puncture; Skybreaker Shot = 1.60× Puncture +15 pp Puncture Penetration; Tempest Barrage = 3 ×0.55× Air, separate hit rolls",
    "phases": [
      {
        "condition": ">50% HP",
        "sequence": "Bolt|Bolt|Skybreaker Shot|repeat"
      },
      {
        "condition": "≤50% HP",
        "sequence": "Skybreaker Shot|Tempest Barrage|Bolt|repeat"
      }
    ],
    "bossComponent": "Skybreaker Dynamo",
    "uniqueHook": "Toxic Blowpipe / Venomglass Blowpipe component hook",
    "elite": "Stormcoil Viper  ",
    "dungeonName": "Tempest Bastion  ",
    "bossStyle": "Ranged",
    "bossDamageType": "Puncture",
    "bossProfile": "R-C",
    "bossOverrides": "Air +48; Earth -28; Slash -15",
    "bossSequence": "Bolt|Bolt|Skybreaker Shot|repeat"
  },
  {
    "tier": 8,
    "areaName": "",
    "roster": [
      {
        "name": "Aetherblade",
        "combatClass": "Normal",
        "style": "Melee",
        "damageType": "Stab",
        "profile": "M-A",
        "overrides": "Air +16; Fire +16; Water +16; Earth +16",
        "sequence": "Stab|Slash|Aether Cut|repeat",
        "offering": "War",
        "tags": [
          "Humanoid"
        ]
      },
      {
        "name": "Rift Hound",
        "combatClass": "Normal",
        "style": "Melee",
        "damageType": "Stab",
        "profile": "M-C",
        "overrides": "Magic resistances +14 each; Puncture +12",
        "sequence": "Bite|Rift Lunge|Bite|repeat",
        "offering": "Beast",
        "tags": [
          "Beast"
        ]
      },
      {
        "name": "Prism Archer",
        "combatClass": "Normal",
        "style": "Ranged",
        "damageType": "Pierce",
        "profile": "R-A",
        "overrides": "Magic resistances +32 each",
        "sequence": "Arrow|Prism Shot|Arrow|repeat",
        "offering": "War",
        "tags": [
          "Humanoid",
          "Archer"
        ]
      },
      {
        "name": "Aether Seer",
        "combatClass": "Normal",
        "style": "Magic",
        "damageType": "Air",
        "profile": "G-B",
        "overrides": "All Magic Res 26; Puncture -12",
        "sequence": "Air Bolt|Water Bolt|Earth Bolt|Fire Bolt|repeat",
        "offering": "Arcane",
        "tags": [
          "Caster"
        ]
      },
      {
        "name": "Prismcoil Serpent",
        "combatClass": "Elite",
        "style": "Melee",
        "damageType": "Stab",
        "profile": "M-C",
        "overrides": "All Magic Res 22; Slash -10",
        "sequence": "Fang|Prism Coil|Fang|Aether Venom|repeat",
        "offering": "Beast",
        "tags": [
          "Beast",
          "Elite"
        ]
      },
      {
        "name": "Aetherglass Sentinel",
        "combatClass": "Dungeon",
        "style": "Melee",
        "damageType": "Crush",
        "profile": "M-B",
        "overrides": "All Magic Res 20; Crush +42",
        "sequence": "Hammer|Hammer|Glassbreak|repeat",
        "offering": "Arcane",
        "tags": [
          "Construct",
          "Dungeon"
        ]
      },
      {
        "name": "Prismatic Channeler",
        "combatClass": "Dungeon",
        "style": "Magic",
        "damageType": "Fire",
        "profile": "G-C",
        "overrides": "All Magic Res 28; Pierce -15",
        "sequence": "Fire|Water|Air|Earth|Prism Collapse|repeat",
        "offering": "Arcane",
        "tags": [
          "Caster",
          "Dungeon"
        ]
      }
    ],
    "actions": {
      "Aetherblade": "Aether Cut = 1.30× Stab + -8 pp matching Resistance 6s",
      "Rift Hound": "Rift Lunge = 1.30× Stab + Evasion Down 10% 6s",
      "Prism Archer": "Prism Shot = 1.20× Pierce + Accuracy Down 12% 6s",
      "Aether Seer": "Each bolt = 1.00× matching element; fixed four-element sequence",
      "Prismcoil Serpent": "Prism Coil = 1.20× Crush + -8 pp all Evasion 6s; Aether Venom = Poison 7% Max HP over 10s",
      "Aetherglass Sentinel": "Glassbreak = 1.55× Crush + -12 pp Crush Resistance 8s",
      "Prismatic Channeler": "Element hits = 0.90×; Prism Collapse = 1.35× element matching player's lowest current Magic Resistance",
      "Aetherbound Oracle": "Element Decree = 1.10× matching element; Prism Lance = 1.45× current sequence element +10 pp Penetration; Prism Collapse = 1.40× against player's currently lowest elemental Resistance"
    },
    "bossName": "Aetherbound Oracle",
    "bossActions": "Element Decree = 1.10× matching element; Prism Lance = 1.45× current sequence element +10 pp Penetration; Prism Collapse = 1.40× against player's currently lowest elemental Resistance",
    "phases": [
      {
        "condition": ">66% HP",
        "sequence": "Air Decree|Water Decree|Earth Decree|Fire Decree|repeat"
      },
      {
        "condition": "34–66% HP",
        "sequence": "Prism Lance|Air Decree|Prism Lance|Water Decree|repeat"
      },
      {
        "condition": "≤33% HP",
        "sequence": "Prism Collapse|Fire Decree|Earth Decree|repeat"
      }
    ],
    "bossComponent": "Oracle Lens",
    "uniqueHook": "Aetherbound Wand / Oracle Focus hook",
    "elite": "Prismcoil Serpent  ",
    "dungeonName": "Aetherglass Sanctum  ",
    "bossStyle": "Magic",
    "bossDamageType": "Air",
    "bossProfile": "G-C",
    "bossOverrides": "All Magic Res treated as +34; Pierce -18; Puncture -14",
    "bossSequence": "Air Decree|Water Decree|Earth Decree|Fire Decree|repeat"
  },
  {
    "tier": 9,
    "areaName": "",
    "roster": [
      {
        "name": "Nightstalker",
        "combatClass": "Normal",
        "style": "Melee",
        "damageType": "Stab",
        "profile": "M-C",
        "overrides": "Fire -12; Air +18",
        "sequence": "Stab|Stab|Shadow Pounce|repeat",
        "offering": "Beast",
        "tags": [
          "Beast"
        ]
      },
      {
        "name": "Umbral Reaver",
        "combatClass": "Normal",
        "style": "Melee",
        "damageType": "Slash",
        "profile": "M-B",
        "overrides": "Fire -10; Water +18",
        "sequence": "Slash|Slash|Dread Cleave|repeat",
        "offering": "War",
        "tags": [
          "Humanoid"
        ]
      },
      {
        "name": "Shade Archer",
        "combatClass": "Normal",
        "style": "Ranged",
        "damageType": "Pierce",
        "profile": "R-C",
        "overrides": "Fire -10; Air +28",
        "sequence": "Arrow|Darkshot|Arrow|repeat",
        "offering": "War",
        "tags": [
          "Humanoid",
          "Archer"
        ]
      },
      {
        "name": "Voidcaller",
        "combatClass": "Normal",
        "style": "Magic",
        "damageType": "Earth",
        "profile": "G-B",
        "overrides": "Fire -18; Earth +30",
        "sequence": "Earth Bolt|Air Bolt|Dread Pulse|repeat",
        "offering": "Arcane",
        "tags": [
          "Caster"
        ]
      },
      {
        "name": "Nightglass Devourer",
        "combatClass": "Elite",
        "style": "Melee",
        "damageType": "Crush",
        "profile": "M-B",
        "overrides": "Puncture +38; Fire -20; Crush +42",
        "sequence": "Bite|Glass Crush|Bite|Devour|repeat",
        "offering": "Beast",
        "tags": [
          "Beast",
          "Elite"
        ]
      },
      {
        "name": "Citadel Reaper",
        "combatClass": "Dungeon",
        "style": "Melee",
        "damageType": "Slash",
        "profile": "M-B",
        "overrides": "Fire -15",
        "sequence": "Slash|Slash|Umbral Break|repeat",
        "offering": "War",
        "tags": [
          "Humanoid",
          "Dungeon"
        ]
      },
      {
        "name": "Hollow Magus",
        "combatClass": "Dungeon",
        "style": "Magic",
        "damageType": "Earth",
        "profile": "G-C",
        "overrides": "Fire -20; Pierce -18",
        "sequence": "Earth Lance|Air Lance|Hollow Ward|repeat",
        "offering": "Arcane",
        "tags": [
          "Caster",
          "Dungeon"
        ]
      }
    ],
    "actions": {
      "Nightstalker": "Shadow Pounce = 1.35× Stab + Evasion Down 12% 6s",
      "Umbral Reaver": "Dread Cleave = 1.40× Slash + Accuracy Down 12% 6s",
      "Shade Archer": "Darkshot = 1.25× Pierce + -8 pp Pierce Resistance 7s",
      "Voidcaller": "Dread Pulse = 1.20× Earth + Accuracy Down 15% 7s",
      "Nightglass Devourer": "Glass Crush = 1.55× Crush; Devour = 1.20× Stab + heal 3% Max HP on hit",
      "Citadel Reaper": "Umbral Break = 1.40× Slash + -12 pp Melee Resistances 8s",
      "Hollow Magus": "Hollow Ward = self +12 pp all typed Resistances for next 2 actions",
      "The Hollow Regent": "Regent Slash = 1.10× Slash; Hollow Decree = 1.20× Earth + -10 pp all Resistances 8s; Nightglass Crush = 1.60× Crush; Devouring Crown = 1.25× Stab + heal 4% Max HP on hit"
    },
    "bossName": "The Hollow Regent",
    "bossActions": "Regent Slash = 1.10× Slash; Hollow Decree = 1.20× Earth + -10 pp all Resistances 8s; Nightglass Crush = 1.60× Crush; Devouring Crown = 1.25× Stab + heal 4% Max HP on hit",
    "phases": [
      {
        "condition": ">60% HP",
        "sequence": "Regent Slash|Regent Slash|Hollow Decree|repeat"
      },
      {
        "condition": "31–60% HP",
        "sequence": "Hollow Decree|Nightglass Crush|Regent Slash|repeat"
      },
      {
        "condition": "≤30% HP",
        "sequence": "Nightglass Crush|Devouring Crown|Regent Slash|repeat"
      }
    ],
    "bossComponent": "Hollow Crown",
    "uniqueHook": "Nightglass weapon/armor upgrade hooks",
    "elite": "Nightglass Devourer  ",
    "dungeonName": "Umbral Citadel  ",
    "bossStyle": "Melee",
    "bossDamageType": "Slash",
    "bossProfile": "M-B",
    "bossOverrides": "Fire -25; Puncture +40; Slash +42",
    "bossSequence": "Regent Slash|Regent Slash|Hollow Decree|repeat"
  },
  {
    "tier": 10,
    "areaName": "",
    "roster": [
      {
        "name": "Starforged Sentinel",
        "combatClass": "Heavy",
        "style": "Melee",
        "damageType": "Crush",
        "profile": "M-B",
        "overrides": "All Magic Res 14; Crush +44",
        "sequence": "Hammer|Hammer|Starfall Slam|repeat",
        "offering": "Arcane",
        "tags": [
          "Construct"
        ]
      },
      {
        "name": "Prism Beast",
        "combatClass": "Normal",
        "style": "Melee",
        "damageType": "Stab",
        "profile": "M-C",
        "overrides": "All Magic Res 20; Slash -12",
        "sequence": "Claw|Prism Fang|Claw|repeat",
        "offering": "Beast",
        "tags": [
          "Beast"
        ]
      },
      {
        "name": "Astral Ranger",
        "combatClass": "Normal",
        "style": "Ranged",
        "damageType": "Puncture",
        "profile": "R-B",
        "overrides": "All Magic Res 36; Slash -12",
        "sequence": "Bolt|Bolt|Starpiercer|repeat",
        "offering": "War",
        "tags": [
          "Humanoid",
          "Archer"
        ]
      },
      {
        "name": "Celestial Magus",
        "combatClass": "Normal",
        "style": "Magic",
        "damageType": "Fire",
        "profile": "G-C",
        "overrides": "All Magic Res 30; Pierce -20",
        "sequence": "Air|Fire|Water|Earth|repeat",
        "offering": "Arcane",
        "tags": [
          "Caster"
        ]
      },
      {
        "name": "Astral Behemoth",
        "combatClass": "Elite",
        "style": "Melee",
        "damageType": "Crush",
        "profile": "M-B",
        "overrides": "Crush +50; Puncture +40; Water -12",
        "sequence": "Crush|Crush|Meteor Charge|Starquake|repeat",
        "offering": "Beast",
        "tags": [
          "Beast",
          "Elite"
        ]
      },
      {
        "name": "Nexus Guardian",
        "combatClass": "Dungeon",
        "style": "Ranged",
        "damageType": "Puncture",
        "profile": "R-B",
        "overrides": "Magic Res +40 each; Slash -15",
        "sequence": "Bolt|Bolt|Astral Barrage|repeat",
        "offering": "Arcane",
        "tags": [
          "Construct",
          "Dungeon"
        ]
      },
      {
        "name": "Nexus Hierophant",
        "combatClass": "Dungeon",
        "style": "Magic",
        "damageType": "Air",
        "profile": "G-C",
        "overrides": "Magic Res +36 each; Pierce -20",
        "sequence": "Air|Water|Fire|Earth|Zenith Seal|repeat",
        "offering": "Arcane",
        "tags": [
          "Caster",
          "Dungeon"
        ]
      }
    ],
    "actions": {
      "Starforged Sentinel": "Starfall Slam = 1.55× Crush + -10 pp Crush Resistance 8s",
      "Prism Beast": "Prism Fang = 1.25× Stab + matching elemental chip 0.20× based on sequence",
      "Astral Ranger": "Starpiercer = 1.55× Puncture +15 pp Puncture Penetration",
      "Celestial Magus": "Each = 1.05× matching element; deterministic four-element loop",
      "Astral Behemoth": "Meteor Charge = 1.65× Crush; Starquake = 1.30× Earth + Stun 1.0s",
      "Nexus Guardian": "Astral Barrage = 3 ×0.60× Puncture, separate rolls",
      "Nexus Hierophant": "Element = 0.95×; Zenith Seal = 1.30× Earth + -12 pp all Magic Resistances 8s",
      "The Zenith Warden": "Judgment = 1.10× matching element; Zenith Lance = 1.55× sequence element +12 pp Penetration; Astral Collapse = 1.45× element matching player's lowest Magic Resistance; Starfall = 1.60× Earth + Stun 1.0s"
    },
    "bossName": "The Zenith Warden",
    "bossActions": "Judgment = 1.10× matching element; Zenith Lance = 1.55× sequence element +12 pp Penetration; Astral Collapse = 1.45× element matching player's lowest Magic Resistance; Starfall = 1.60× Earth + Stun 1.0s",
    "phases": [
      {
        "condition": ">70% HP",
        "sequence": "Air Judgment|Water Judgment|Fire Judgment|Earth Judgment|repeat"
      },
      {
        "condition": "36–70% HP",
        "sequence": "Zenith Lance|Fire Judgment|Zenith Lance|Water Judgment|repeat"
      },
      {
        "condition": "≤35% HP",
        "sequence": "Astral Collapse|Earth Judgment|Starfall|Air Judgment|repeat"
      }
    ],
    "bossComponent": "Zenith Core",
    "uniqueHook": "Zenith Staff / endgame unique equipment hook",
    "elite": "Astral Behemoth  ",
    "dungeonName": "Astral Nexus  ",
    "bossStyle": "Magic",
    "bossDamageType": "Earth",
    "bossProfile": "G-C",
    "bossOverrides": "All Magic Res +40; Pierce -22; Puncture -18; Melee +34 average",
    "bossSequence": "Air Judgment|Water Judgment|Fire Judgment|Earth Judgment|repeat"
  }
] as const;
