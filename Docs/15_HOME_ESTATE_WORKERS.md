# Home, Estate, and Workers

**Status:** Canonical account-system design v2.0
**Scope:** Account infrastructure; never a fifteenth profession and never a source of Construction XP.

## 1. Residence stages

Residence progression provides capacity and access. Profession skill unlocks recipes and station tiers; residence can gate where a station is placed, but cannot grant skill unlocks or bypass a profession requirement. Values marked TBD anchor are tuning ranges, not final balance commitments.

| Stage | Approx. account point | Purpose | Active station capacity | Land capacity | Storage/logistics | Worker housing | Planner / automation | Permanent project access |
|---|---|---|---|---|---|---|---|---|
| House | Early account, profession onboarding | Personal workshop and starter garden | 2 Station I facilities; one active job per station | Small garden, 2 beds | Shared Bank access; starter reserve bins | 0 automated workers | Save 1 simple plan; manual queue start | Chronicle/home improvements |
| Lodge | Early-mid, after initial profession mastery | Production workshop hub | 4 stations through II; 2 active jobs total | Garden beds, small field and 2 Orchard plots | First station reserve bins and transfer presets | 4 production workers | First durable recipes/targets; 2 plans | Workshop and residence upgrades |
| Manor | Midgame, multiple professions developed | Field and gathering center | 6 stations through III; 4 active jobs total | Multiple fields, herb beds, 4 Orchard plots, Nursery/Mycology | Expanded Bank-linked buffers; worker reserves | 8 production plus 6 field crew | Scheduled production and field cycles; 4 plans | Manor, Greenhouse and land projects |
| Estate | Late account, broad profession progression | Department and team operations | 8 stations through IV; 6 active jobs total | Broad farm, orchard, Greenhouse and managed blocks | Department stores, routing and batch logistics | 12 production plus 10 field crew | Multi-step recipes, rotation policies, 8 plans | Estate and specialist project chains |
| Holdings | Post-100 selective endgame | Account-scale logistics and frontier support | 10 stations through V; 8 active jobs total | Holdings plots and large managed blocks | Multiple linked depots, scheduled inter-property transfers | 16 production plus 14 field crew anchor | Department calendars, bulk targets, cross-property plans | Endgame projects, large orders and selective frontier support |

The capacity row is a design anchor. A station occupying a slot is a persistent facility assignment, while queues/jobs occupy active-job capacity. Stations compete for residence slots; a profession station upgrade improves its tier without creating another slot. Moving a station requires an explicit relocation and preserves recipes, queue policy, and reserves.

## 2. Station system

Station tiers are **Station I-V**. I supports basic recipes and small batches; II adds broader recipes, persistent queues, and early worker access; III supports mid-tier recipes and department reserves; IV supports late-tier batch queues and teams; V supports post-100 selective recipes, long orders, and Holdings projects. Exact batch sizes remain owned by profession station tables.

A station must satisfy both conditions: its profession level/recipe gate and its station-tier gate. Residence sets the maximum tier and number of facilities, not the character's profession level. Facilities compete for active station slots. Each slot has one assigned profession station; upgrades do not consume an additional slot. Worksites such as a Mine Camp or Orchard assignment are separate from indoor station slots and require residence access plus player frontier unlock.

## 3. Worker stages and assignment

Workers create actual profession outputs and consume registry inputs. They gain profession **Proficiency**, not player XP, Mastery, or levels. Normal worker access requires Lodge for workshop production and Manor for field/gathering crews. A worker requires an unlocked recipe, an available station/worksite, required Tool and allowed gear, input stock above reserve, and a valid schedule.

| Residence gate | Primary worker professions | Assignment model |
|---|---|---|
| Lodge | Smithing, Cooking, Fletching, Tailoring, Runecrafting, Leatherworking, Alchemy, Jewelcrafting | Production workers assigned to a matching station and recipe plan |
| Manor | Mining, Woodcutting, Fishing, Foraging, Hunting, Farming | Field crews assigned to a player-unlocked deposit, grove, spot, route, prey band, or managed farm block |
| Estate | Both groups | Teams, reserve-driven production, and station/worksite schedules |
| Holdings | Both groups | Department calendars, multiple linked worksites, large targets, selective frontier support |

A worker cannot access a frontier the player has not personally unlocked. Proven content requires player Recipe/Action Mastery 10 unless a source doc explicitly sets a stricter threshold. Current/highest unlocked content applies the profession's frontier penalty. Established content retains its defined normal worker efficiency. Teams share an assignment and reserve policy; they do not duplicate equipped items or exceed a location's capacity.

Workers need a valid profession Tool. Gear is optional unless the profession contract requires it; allowed equipment is a unique item instance assigned to one owner at a time. Worker Proficiency improves action efficiency under the shared curve **50% + Proficiency * 0.50%**. Worker gear, Tool, station/worksite, proficiency and frontier state are separate recorded fields.

Schedules define allowed time windows, target recipe/resource, desired stock, hard reserve, fallback order and stop condition. Offline processing uses the same event-based simulation as active play. Field workers may only collect established content and cannot perform first discoveries, Chronicles, unique tracking discoveries, or unrevealed frontier actions.

## 4. Worker housing and capacity

Housing separates production seats from field crew bunks. Lodge anchors at 4 production/0 field; Manor at 8 production/6 field; Estate at 12/10; Holdings at 16/14. These are account-wide design anchors and may be tuned. House has no automated output. Worker housing upgrades consume housing capacity and resources but do not add station slots, recipe access, or profession power.

## 5. Farming land progression

| Stage | Garden Beds | Fields / Managed Blocks | Herb Beds | Orchards | Nursery | Mycology | Greenhouse |
|---|---:|---|---:|---|---|---|---|
| House | 2 | Small hand-worked plot | 0 | 0 | TBD | TBD | TBD |
| Lodge | 6 | Small field | 2 | 2 plots | Nursery Bay I | TBD | TBD |
| Manor | 12 | Expanded fields; first Managed Field Blocks | 4 | 4 plots | Nursery Bay II | Mycology beds | 2 bays |
| Estate | 20 | Broad fields and scheduled blocks | 8 | Great Orchard | Nursery Bay III | Expanded beds | 4 bays |
| Holdings | 30 anchor | Multiple managed blocks across holdings | 12 anchor | Expanded orchard network | Seedling/stock projects | Expanded | 8 bays anchor |

Farming plots and management loadouts remain Farming systems. Residence provides land cap, worker housing, storage and planner access; it does not turn Farming into a passive profession or bypass crop/tree unlocks. Persistent equipment in a management loadout is assigned exclusively to that system.

## 6. Storage, reserves, and logistics

The central Bank is the account inventory authority. Stations and workers read from explicitly linked stock; they do not own hidden copies. Station buffers are reservations against Bank stock, not duplicate inventory. Transfers are atomic, logged, and respect item stack limits and protected metadata.

Each station/worksite may maintain: operating stock, hard reserve, recipe target, protected stock, and optional fallback. Protected-item permission is checked before reserve/target logic. `workerAutoConsumeDefault=false` for protected items. Players may not make a protected item eligible through fallback alone; explicit permission is required. Logistics upgrades add buffer capacity, transfer rules, routing, and linked depots, never additional item copies.

## 7. Gold and resource sinks

Infrastructure draws on Gold plus appropriate existing profession outputs: residence upgrades use lumber, stone/metal, and crafted fittings; station upgrades use owner-profession tools/components and station-specific outputs; worker housing uses lumber, cloth/leather furnishings and fittings; land expansion uses soil amendments, lumber, stone, irrigation parts and Gold; permanent projects consume selected materials and occupy project time. Exact prices and quantities remain open economy tuning, owned by the eventual project recipe table.

Estate projects are permanent account sinks with explicit input ledgers and completion states. They may use background timers, but cannot generate Construction XP or create unregistered materials. Chronicle rewards may grant one-time access or starter tools without changing ordinary crafting ownership.

## 8. Holdings scope

Holdings means account-scale logistics: linked estate depots; department scheduling across production and field crews; large production orders; endgame permanent projects; and selective support for a frontier the player has already unlocked. It does not create new professions, bypass mastery/frontier restrictions, or automate first discoveries. It expands coordination, scheduling, project reach, and selective frontier support beyond worker capacity.

## 9. Global safety contract

Before any worker/station consumes stock, check protected-item permission -> hard reserve -> recipe target -> configured fallback -> stop condition. Workers do not consume rare/protected stock below reserve without explicit permission. Persistent equipment and loadouts have one owner; assigning an item elsewhere requires unequip/reassignment. Offline simulation jumps between harvest, action completion, worker batch, project completion, buff depletion and planner transitions.

Residence capacity, exact upgrade costs, station batch caps, and Holdings-wide scale are the remaining account-balance anchors. Profession recipe ownership and skill gates stay in profession source documents and the registries.
