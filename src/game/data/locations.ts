export interface LocationDefinition { id: string; name: string; kind: string; activities: string[]; x: number; y: number; description: string }
export const LOCATIONS: Record<string, LocationDefinition> = {
  greenhaven: { id: 'greenhaven', name: 'Greenhaven', kind: 'Town', activities: [], x: 50, y: 50, description: 'A quiet central hub.' },
  copper_hills: { id: 'copper_hills', name: 'Copper Hills', kind: 'Highlands', activities: ['Mining'], x: 50, y: 13, description: 'Copper and tin veins run through the red rock.' },
  pinewood: { id: 'pinewood', name: 'Pinewood', kind: 'Forest', activities: ['Woodcutting'], x: 15, y: 50, description: 'A dense stand of old pines and oaks.' },
  old_road: { id: 'old_road', name: 'Old Road', kind: 'Wilderness', activities: ['Combat'], x: 85, y: 50, description: 'A quiet road watched by hungry wildlife.' },
  riverbank: { id: 'riverbank', name: 'Riverbank', kind: 'Shore', activities: ['Fishing'], x: 50, y: 87, description: 'Clear water and a steady supply of fish.' }
};
