import { describe, expect, it } from 'vitest';
import { getItemTooltipModel } from './itemTooltip.model';

describe('item inspection model', () => {
  it('builds a weapon view from the combat registries', () => {
    const model = getItemTooltipModel('combat.weapon.melee.copper_sword', { owned: 1, equipped: true, skillLevels: { Attack: 1 } });
    expect(model.name).toBe('Copper Sword');
    expect(model.requirement).toMatchObject({ skill: 'Attack', level: 1, met: true });
    expect(model.sections.map((section) => section.title)).toContain('SPECIAL · PRECISION LUNGE');
    expect(model.sections.flatMap((section) => section.rows).some((row) => row.label === 'Stamina' && row.value === 35)).toBe(true);
    expect(model.equipped).toBe(true);
  });

  it('shows profession tool requirements and owned counts', () => {
    const model = getItemTooltipModel('item.mining.copper_pickaxe', { owned: 2, skillLevels: { Mining: 4 } });
    expect(model.requirement?.met).toBe(false);
    expect(model.owned).toBe(2);
    expect(model.sections[0]?.rows.map((row) => row.label)).toContain('Power');
  });

  it('formats accessory critical rates as percentages in the shared tooltip', () => {
    const model=getItemTooltipModel('combat.accessory.ring.qa_fixture',{owned:1,equipped:true,skillLevels:{Attack:1}});
    expect(model.sections.flatMap(section=>section.rows)).toContainEqual(expect.objectContaining({label:'Crit Rate',value:'5%'}));
  });

  it('shows nutrition stats from cooking recipe data', () => {
    const model = getItemTooltipModel('cooking.food.grilled_river_fish');
    expect(model.sections.find((section) => section.title === 'NUTRITION')?.rows.map((row) => row.label)).toEqual(['Heal', 'Satiety', 'Food value']);
  });
});
