// Cost of capital rates
export const COST_OF_CAPITAL = {
  federal: 0.02,
  private: 0.08,
  rea_historical: 0.02,
  china_state_grid: 0.025,
  crossover_point: 0.08,
};

// Voltage class economics
// Sources: MISO MTEP24 Cost Estimation Guide (2024), AEP 765kV Transmission Facts,
// ERCOT 2024 Regional Transmission Plan. Capacity ratings per AEP for distances ~300mi.
// Costs are illustrative for typical 300-mile projects including substations.
export const VOLTAGE_ECONOMICS = {
  kv345: {
    voltage: 345,
    capacity_mw: 400,
    cost_b: 1.0,
    cost_per_mw: 2.5,
    label: '345kV'
  },
  kv500: {
    voltage: 500,
    capacity_mw: 900,
    cost_b: 1.25,
    cost_per_mw: 1.39,
    label: '500kV'
  },
  kv765: {
    voltage: 765,
    capacity_mw: 2400,
    cost_b: 2.0,
    cost_per_mw: 0.83,
    label: '765kV'
  },
};

// NPV comparison scenarios
export const NPV_SCENARIOS = {
  build_big_cost: 1.3, // $B
  build_small_cost: 1.0, // $B
  expansion_cost: 1.2, // $B
  expansion_year: 15,
  savings_at_federal_rate: 590, // $M
};

// Cascading costs of incremental expansion over 40-year transmission lifecycle
export const CASCADING_COSTS = [
  { year: 0, cost: 100, cumulative: 100 },
  { year: 10, cost: 120, cumulative: 220 },
  { year: 20, cost: 150, cumulative: 370 },
  { year: 30, cost: 180, cumulative: 550 },
  { year: 40, cost: 200, cumulative: 750 },
];

export const PROACTIVE_COST = 175; // $M - build with headroom upfront

// Historical transmission construction (circuit miles per year)
// Source: The Brattle Group, EEI, NERC data
export const HISTORICAL_CONSTRUCTION = [
  { year: 1960, miles: 5500 },
  { year: 1965, miles: 7000 },
  { year: 1970, miles: 9500 },
  { year: 1975, miles: 7500 },
  { year: 1980, miles: 6000 },
  { year: 1985, miles: 4500 },
  { year: 1990, miles: 2500 },
  { year: 1995, miles: 1500 },
  { year: 2000, miles: 1800 },
  { year: 2005, miles: 2000 },
  { year: 2010, miles: 3500 },
  { year: 2015, miles: 4000 },
  { year: 2020, miles: 3000 },
];

// Preparation delta leverage
export const PREPARATION_DELTA = {
  base: {
    initial: 100,
    capacity_mult: 1,
    expansion: 200,
    lifecycle: 300,
    per_mw: 300
  },
  full_prep: {
    initial: 125,
    capacity_mult: 8,
    expansion: 60,
    lifecycle: 185,
    per_mw: 23.1
  },
};

// Reserve margin scaling with geographic diversity
export const RESERVE_SCALING = [
  { regions: 1, reserve_pct: 15.0, label: 'Single region' },
  { regions: 2, reserve_pct: 10.6, label: 'Two regions' },
  { regions: 4, reserve_pct: 7.5, label: 'Four regions' },
];

// REA historical timeline
export const REA_TIMELINE = [
  { year: 1935, electrification_pct: 10, event: 'REA established' },
  { year: 1940, electrification_pct: 25, event: 'Early expansion' },
  { year: 1945, electrification_pct: 50, event: 'Post-war boom' },
  { year: 1950, electrification_pct: 78, event: 'Rapid growth' },
  { year: 1955, electrification_pct: 93, event: 'Near-universal' },
];

// International comparison data
export const INTERNATIONAL_COMPARISON = [
  {
    country: 'China',
    capital_cost: 2.5,
    growth_rate: 7,
    model: 'State-directed',
    highlight: false
  },
  {
    country: 'Germany',
    capital_cost: 3.5,
    growth_rate: 2.5,
    model: 'Public bank + private',
    highlight: false
  },
  {
    country: 'USA (current)',
    capital_cost: 7,
    growth_rate: 1,
    model: 'Private',
    highlight: true
  },
  {
    country: 'USA (REA era)',
    capital_cost: 2,
    growth_rate: 8,
    model: 'Federal lending',
    highlight: true
  },
];

// Chart color constants
export const CHART_COLORS = {
  primary: '#2563EB',
  secondary: '#F59E0B',
  success: '#10B981',
  warning: '#EF4444',
  muted: '#94A3B8',
  grid: '#E2E8F0',
};

// Cost of capital crossover data points
export const COST_OF_CAPITAL_CROSSOVER = [
  { rate: 0.02, buildBigNPV: 1.20, waitExpandNPV: 1.80 },
  { rate: 0.03, buildBigNPV: 1.24, waitExpandNPV: 1.65 },
  { rate: 0.04, buildBigNPV: 1.28, waitExpandNPV: 1.52 },
  { rate: 0.05, buildBigNPV: 1.32, waitExpandNPV: 1.42 },
  { rate: 0.06, buildBigNPV: 1.36, waitExpandNPV: 1.34 },
  { rate: 0.07, buildBigNPV: 1.40, waitExpandNPV: 1.28 },
  { rate: 0.08, buildBigNPV: 1.44, waitExpandNPV: 1.24 },
  { rate: 0.09, buildBigNPV: 1.48, waitExpandNPV: 1.21 },
  { rate: 0.10, buildBigNPV: 1.52, waitExpandNPV: 1.19 },
];
