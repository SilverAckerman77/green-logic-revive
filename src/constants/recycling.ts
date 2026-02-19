export const RECYCLABLE_ITEMS = [
  { id: 'laptop', label: 'Laptops', avgWeight: 2.5, unit: 'kg' },
  { id: 'server', label: 'Servers', avgWeight: 15.0, unit: 'kg' },
  { id: 'monitor', label: 'Monitors', avgWeight: 5.5, unit: 'kg' },
  { id: 'battery', label: 'UPS Batteries', avgWeight: 12.0, unit: 'kg' }
];

export const RECOVERY_FACTORS = {
  laptop: { gold: 0.02, silver: 0.18, copper: 0.15, plastic: 0.8 }, // values in grams/kg
  server: { gold: 0.12, silver: 0.65, copper: 2.10, plastic: 1.2 },
  monitor: { gold: 0.005, silver: 0.05, copper: 0.45, plastic: 2.1 },
  battery: { gold: 0, silver: 0, copper: 0.20, plastic: 0.5 }
};

export const SERVICE_ZONES = {
  BANGALORE: { center: [12.9716, 77.5946], radius: 30000 }, // 30km from center
  CHENNAI: { center: [13.0827, 80.2707], radius: 25000 }    // 25km from center
};