import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Section({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="mb-20">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{title}</h2>
      {children}
    </section>
  );
}

function KeyInsight({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-electric-500/10 border-l-4 border-electric-500 rounded-r-lg p-4 my-6">
      <p className="text-electric-300 font-medium">{children}</p>
    </div>
  );
}

// Chart: Cost of Capital NPV Comparison
function CostOfCapitalChart() {
  const data = [
    { rate: '2%', npvA: 1.30, npvB: 1.89, winner: 'Build Big', color: 'bg-green-500' },
    { rate: '5%', npvA: 1.30, npvB: 1.58, winner: 'Build Big', color: 'bg-green-500' },
    { rate: '8%', npvA: 1.30, npvB: 1.39, winner: 'Close Call', color: 'bg-yellow-500' },
    { rate: '10%', npvA: 1.30, npvB: 1.29, winner: 'Wait & Expand', color: 'bg-red-500' },
  ];

  return (
    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
      <h4 className="text-lg font-semibold text-white mb-6">NPV Comparison by Discount Rate</h4>
      <div className="space-y-4">
        {data.map((d) => (
          <div key={d.rate} className="grid grid-cols-12 gap-4 items-center">
            <div className="col-span-2 text-slate-400 font-mono text-sm">{d.rate}</div>
            <div className="col-span-4">
              <div className="flex items-center gap-2">
                <div className="text-xs text-slate-500 w-16">Option A</div>
                <div className="flex-1 bg-slate-700 rounded-full h-6 overflow-hidden">
                  <div
                    className="h-full bg-electric-500 rounded-full flex items-center justify-end pr-2"
                    style={{ width: `${(d.npvA / 2) * 100}%` }}
                  >
                    <span className="text-xs text-white font-medium">${d.npvA}B</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <div className="flex items-center gap-2">
                <div className="text-xs text-slate-500 w-16">Option B</div>
                <div className="flex-1 bg-slate-700 rounded-full h-6 overflow-hidden">
                  <div
                    className="h-full bg-amber-500 rounded-full flex items-center justify-end pr-2"
                    style={{ width: `${(d.npvB / 2) * 100}%` }}
                  >
                    <span className="text-xs text-white font-medium">${d.npvB}B</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2">
              <span className={`px-2 py-1 rounded text-xs font-medium ${d.color} bg-opacity-20 ${d.color.replace('bg-', 'text-').replace('-500', '-300')}`}>
                {d.winner}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex gap-6 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-electric-500"></div>
          <span>Option A: Build 500kV now ($1.3B)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-amber-500"></div>
          <span>Option B: Build 345kV, expand in Year 15</span>
        </div>
      </div>
    </div>
  );
}

// Chart: Economies of Scale
function EconomiesOfScaleChart() {
  const voltageData = [
    { type: '345 kV Single', capacity: 400, cost: 1.0, costPerMW: 2.50, width: 30 },
    { type: '500 kV Single', capacity: 900, cost: 1.25, costPerMW: 1.39, width: 55 },
    { type: '765 kV Single', capacity: 2400, cost: 2.0, costPerMW: 0.83, width: 100 },
  ];

  return (
    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
      <h4 className="text-lg font-semibold text-white mb-6">Cost per MW by Voltage Class</h4>
      <div className="space-y-6">
        {voltageData.map((d) => (
          <div key={d.type} className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-slate-300 font-medium">{d.type}</span>
              <span className="text-slate-400">{d.capacity} MW capacity</span>
            </div>
            <div className="relative">
              <div className="bg-slate-700 rounded-lg h-12 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${d.width}%` }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="h-full bg-gradient-to-r from-electric-600 to-electric-400 rounded-lg flex items-center justify-end pr-4"
                >
                  <span className="text-white font-bold">${d.costPerMW.toFixed(2)}M/MW</span>
                </motion.div>
              </div>
              <div className="absolute right-0 top-0 h-full flex items-center">
                <span className="text-xs text-slate-500 ml-2">${d.cost}B total</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-green-500/10 rounded-lg border border-green-500/30">
        <p className="text-green-300 text-sm">
          <strong>765kV costs ~2x as much</strong> as 345kV but delivers <strong>~6x the capacity</strong>.
          Cost per MW is <strong>~67% lower</strong>.
        </p>
      </div>
    </div>
  );
}

// Chart: Reserve Pooling Benefits
function ReservePoolingChart() {
  const data = [
    { config: '1 Region (isolated)', reserve: 15.0, savings: 0 },
    { config: '2 Regions', reserve: 10.6, savings: 29 },
    { config: '4 Regions', reserve: 7.5, savings: 50 },
    { config: 'National', reserve: 6.5, savings: 55 },
  ];

  return (
    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
      <h4 className="text-lg font-semibold text-white mb-6">Reserve Requirements vs. Interconnection</h4>
      <div className="grid md:grid-cols-4 gap-4">
        {data.map((d, i) => (
          <motion.div
            key={d.config}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="text-center"
          >
            <div className="relative mx-auto w-24 h-24 mb-3">
              <svg className="w-24 h-24 transform -rotate-90">
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  className="text-slate-700"
                />
                <circle
                  cx="48"
                  cy="48"
                  r="40"
                  stroke="currentColor"
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={`${(d.reserve / 15) * 251.2} 251.2`}
                  className="text-electric-500"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-lg font-bold text-white">{d.reserve}%</span>
              </div>
            </div>
            <div className="text-sm text-slate-300 font-medium">{d.config}</div>
            {d.savings > 0 && (
              <div className="text-xs text-green-400 mt-1">-{d.savings}% reserves</div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Chart: REA Timeline
function REATimelineChart() {
  const milestones = [
    { year: 1935, value: 10.9, label: '10.9% of farms electrified' },
    { year: 1945, value: 45, label: '45% electrified' },
    { year: 1953, value: 90, label: '90% electrified' },
    { year: 1963, value: 99, label: '99% electrified' },
  ];

  return (
    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
      <h4 className="text-lg font-semibold text-white mb-6">Rural Electrification Progress (1935-1963)</h4>
      <div className="relative h-64">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-slate-500 w-12">
          <span>100%</span>
          <span>75%</span>
          <span>50%</span>
          <span>25%</span>
          <span>0%</span>
        </div>

        {/* Chart area */}
        <div className="ml-14 h-full relative">
          {/* Grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between">
            {[0, 1, 2, 3, 4].map((i) => (
              <div key={i} className="border-t border-slate-700/50 w-full" />
            ))}
          </div>

          {/* Area chart */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <defs>
              <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.5" />
                <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5 }}
              d="M 0 230 L 80 141 L 200 51 L 350 2.5 L 350 256 L 0 256 Z"
              fill="url(#areaGradient)"
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.5 }}
              d="M 0 230 L 80 141 L 200 51 L 350 2.5"
              fill="none"
              stroke="rgb(59, 130, 246)"
              strokeWidth="3"
            />
          </svg>

          {/* Data points */}
          <div className="absolute inset-0 flex justify-between items-end px-4">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.2 }}
                className="text-center"
                style={{ marginBottom: `${(m.value / 100) * 100}%` }}
              >
                <div className="w-3 h-3 rounded-full bg-electric-500 border-2 border-white mx-auto mb-2" />
                <div className="text-sm font-bold text-white">{m.year}</div>
                <div className="text-xs text-slate-400 whitespace-nowrap">{m.value}%</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Key stats */}
      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-700">
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">2%</div>
          <div className="text-xs text-slate-400">Interest Rate</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">35 yr</div>
          <div className="text-xs text-slate-400">Loan Term</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-green-400">&lt;1%</div>
          <div className="text-xs text-slate-400">Default Rate</div>
        </div>
      </div>
    </div>
  );
}

// Chart: International Comparison
function InternationalComparisonChart() {
  const data = [
    { country: 'China (State Grid)', rate: '~2-3%', growth: '7%', model: 'State-directed', growthPct: 100 },
    { country: 'USA REA Era', rate: '2%', growth: '8%', model: 'Federal lending', growthPct: 114 },
    { country: 'Germany (KfW)', rate: '~3.5%', growth: '2.5%', model: 'Public bank + private', growthPct: 36 },
    { country: 'USA Current', rate: '~7%', growth: '1%', model: 'Private with regulation', growthPct: 14 },
  ];

  return (
    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
      <h4 className="text-lg font-semibold text-white mb-6">Cost of Capital vs. Grid Growth Rate</h4>
      <div className="space-y-4">
        {data.map((d, i) => (
          <motion.div
            key={d.country}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-slate-700/30 rounded-lg p-4"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <span className="text-white font-medium">{d.country}</span>
                <span className="text-slate-500 text-sm ml-2">({d.model})</span>
              </div>
              <span className="text-electric-400 font-mono">{d.rate} cost of capital</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex-1 bg-slate-700 rounded-full h-4 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${d.growthPct}%` }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.1 }}
                  className={`h-full rounded-full ${d.country.includes('USA Current') ? 'bg-red-500' : 'bg-green-500'}`}
                />
              </div>
              <span className="text-white font-bold w-16 text-right">{d.growth}/yr</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Chart: Cascading Costs
function CascadingCostsChart() {
  const conservative = [
    { year: 0, action: 'Initial build', cost: 20, cumulative: 20 },
    { year: 5, action: 'First upgrade', cost: 25, cumulative: 45 },
    { year: 10, action: 'Second upgrade', cost: 30, cumulative: 75 },
    { year: 15, action: 'Third upgrade', cost: 35, cumulative: 110 },
    { year: 20, action: 'Fourth upgrade', cost: 40, cumulative: 150 },
  ];

  return (
    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
      <h4 className="text-lg font-semibold text-white mb-2">The Cost of Conservative Planning</h4>
      <p className="text-sm text-slate-400 mb-6 italic">Illustrative model: Distribution transformer upgrades with 5-year planning horizons</p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Conservative approach */}
        <div>
          <h5 className="text-red-400 font-semibold mb-4">Conservative Approach</h5>
          <div className="space-y-2">
            {conservative.map((d, i) => (
              <motion.div
                key={d.year}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-16 text-xs text-slate-500">Year {d.year}</div>
                <div className="flex-1 bg-slate-700 rounded h-8 overflow-hidden">
                  <div
                    className="h-full bg-red-500/80 flex items-center px-3"
                    style={{ width: `${(d.cost / 40) * 100}%` }}
                  >
                    <span className="text-xs text-white font-medium">${d.cost}M</span>
                  </div>
                </div>
                <div className="w-20 text-right text-sm text-slate-400">${d.cumulative}M total</div>
              </motion.div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-red-500/10 rounded-lg border border-red-500/30">
            <span className="text-red-300 font-bold text-lg">Total: $150M</span>
          </div>
        </div>

        {/* Proactive approach */}
        <div>
          <h5 className="text-green-400 font-semibold mb-4">Proactive Approach</h5>
          <div className="space-y-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-3"
            >
              <div className="w-16 text-xs text-slate-500">Year 0</div>
              <div className="flex-1 bg-slate-700 rounded h-8 overflow-hidden">
                <div
                  className="h-full bg-green-500/80 flex items-center px-3"
                  style={{ width: `${(35 / 40) * 100}%` }}
                >
                  <span className="text-xs text-white font-medium">Build for growth: $35M</span>
                </div>
              </div>
              <div className="w-20 text-right text-sm text-slate-400">$35M total</div>
            </motion.div>
            {[5, 10, 15, 20].map((year) => (
              <div key={year} className="flex items-center gap-3 opacity-30">
                <div className="w-16 text-xs text-slate-500">Year {year}</div>
                <div className="flex-1 text-xs text-slate-500 italic">No upgrade needed</div>
                <div className="w-20"></div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-green-500/10 rounded-lg border border-green-500/30">
            <span className="text-green-300 font-bold text-lg">Total: $35M</span>
            <span className="text-green-400 text-sm ml-2">(77% savings)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Chart: Preparation Delta
function PreparationDeltaChart() {
  const options = [
    { level: 'Base 345kV', initial: 100, maxCap: '1.0x', expansion: 200, lifecycle: 300, highlight: false },
    { level: 'Ready for 500kV', initial: 110, maxCap: '2.0x', expansion: 30, lifecycle: 140, highlight: false },
    { level: 'Ready for reconductoring', initial: 108, maxCap: '2.0x', expansion: 25, lifecycle: 133, highlight: false },
    { level: 'Ready for double circuit', initial: 115, maxCap: '2.0x', expansion: 40, lifecycle: 155, highlight: false },
    { level: 'Full preparation', initial: 125, maxCap: '8.0x', expansion: 60, lifecycle: 185, highlight: true },
  ];

  return (
    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
      <h4 className="text-lg font-semibold text-white mb-2">The Preparation Delta</h4>
      <p className="text-sm text-slate-400 mb-6 italic">Illustrative cost indices demonstrating preparation economics. Actual costs vary by project.</p>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-700">
              <th className="text-left py-3 px-4 text-slate-300 font-semibold">Preparation Level</th>
              <th className="text-right py-3 px-4 text-slate-300 font-semibold">Initial Cost</th>
              <th className="text-right py-3 px-4 text-slate-300 font-semibold">Max Capacity</th>
              <th className="text-right py-3 px-4 text-slate-300 font-semibold">Expansion Cost</th>
              <th className="text-right py-3 px-4 text-slate-300 font-semibold">Lifecycle Total</th>
            </tr>
          </thead>
          <tbody>
            {options.map((o) => (
              <tr key={o.level} className={`border-b border-slate-800 ${o.highlight ? 'bg-electric-500/10' : ''}`}>
                <td className={`py-3 px-4 ${o.highlight ? 'text-electric-300 font-semibold' : 'text-slate-300'}`}>
                  {o.level}
                </td>
                <td className="py-3 px-4 text-right text-slate-300">{o.initial}</td>
                <td className="py-3 px-4 text-right">
                  <span className={o.highlight ? 'text-green-400 font-bold' : 'text-slate-400'}>{o.maxCap}</span>
                </td>
                <td className="py-3 px-4 text-right text-slate-300">{o.expansion}</td>
                <td className="py-3 px-4 text-right">
                  <span className={o.highlight ? 'text-green-400 font-bold' : 'text-slate-300'}>{o.lifecycle}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-6 p-4 bg-green-500/10 rounded-lg border border-green-500/30">
        <p className="text-green-300 text-sm">
          <strong>Full preparation costs 25% more upfront</strong> but enables <strong>8x capacity growth</strong> at
          total lifecycle cost of 185 vs. 300 for unprepared expansion. <strong>Cost per MW is 80% lower.</strong>
        </p>
      </div>
    </div>
  );
}

// Chart: ROE Breakdown
function ROEChart() {
  const components = [
    { label: 'Base ROE', value: 9.98, color: 'bg-slate-500' },
    { label: 'RTO Participation', value: 0.5, color: 'bg-blue-500' },
    { label: 'Advanced Technology', value: 0.5, color: 'bg-purple-500' },
    { label: 'Transmission Security', value: 0.5, color: 'bg-amber-500' },
  ];

  const total = components.reduce((sum, c) => sum + c.value, 0);

  return (
    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700/50">
      <h4 className="text-lg font-semibold text-white mb-6">Transmission Owner ROE Components</h4>

      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 h-8 rounded-full overflow-hidden flex">
          {components.map((c, i) => (
            <motion.div
              key={c.label}
              initial={{ width: 0 }}
              animate={{ width: `${(c.value / total) * 100}%` }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`h-full ${c.color}`}
            />
          ))}
        </div>
        <div className="text-2xl font-bold text-white">{total.toFixed(1)}%</div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {components.map((c) => (
          <div key={c.label} className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded ${c.color}`} />
            <span className="text-sm text-slate-300">{c.label}</span>
            <span className="text-sm text-slate-500 ml-auto">{c.value}%</span>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
        <p className="text-yellow-300 text-sm">
          MISO TOs collected <strong>12.38% ROE for nearly two decades</strong> before FERC ruled it
          "unjust and unreasonable" in 2019. Even 9.98% is generous for a cost-plus regulated monopoly
          with guaranteed cost recovery.
        </p>
      </div>
    </div>
  );
}

export function EconomicsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-white hover:text-electric-400 transition-colors">
            ← Grid for Growth
          </Link>
          <div className="flex gap-4 text-sm">
            <Link to="/policy" className="text-slate-400 hover:text-white transition-colors">
              Policy Analysis
            </Link>
            <Link to="/sources" className="text-slate-400 hover:text-white transition-colors">
              Sources
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Economic Analysis</h1>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl">
            Quantitative analysis of the economics of proactive grid investment, with data visualizations
            and supporting calculations.
          </p>

          {/* Key Findings */}
          <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50 mb-16">
            <h3 className="text-lg font-semibold text-white mb-4">Key Findings</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-800/50 rounded-lg p-4">
                <div className="text-electric-400 text-2xl font-bold mb-2">2% vs 8%</div>
                <p className="text-sm text-slate-300">
                  At 2% federal financing, building big upfront beats building small and expanding later.
                  At 8%+ private financing, the opposite is true.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <div className="text-electric-400 text-2xl font-bold mb-2">68%</div>
                <p className="text-sm text-slate-300">
                  Doubling transmission capacity costs roughly 68% more, not 100% more.
                  Bigger infrastructure is cheaper per unit.
                </p>
              </div>
              <div className="bg-slate-800/50 rounded-lg p-4">
                <div className="text-electric-400 text-2xl font-bold mb-2">40-50%</div>
                <p className="text-sm text-slate-300">
                  Interconnected grids reduce reserve requirements by 40-50% through resource
                  pooling and geographic diversity.
                </p>
              </div>
            </div>
          </div>

          <Section title="The Cost of Capital Tradeoff">
            <p className="text-slate-300 leading-relaxed mb-6">
              <em>Illustrative example demonstrating how discount rates affect infrastructure investment decisions.</em>
            </p>
            <p className="text-slate-300 leading-relaxed mb-6">
              Consider a utility choosing between: <strong>Option A</strong> (Build a 500kV line now for $1.3 billion)
              or <strong>Option B</strong> (Build a 345kV line for $1.0 billion, then expand in Year 15 for $1.2 billion).
            </p>
            <CostOfCapitalChart />
            <KeyInsight>
              The crossover point is around 8%. Below that rate, building big now is cheaper in NPV terms.
              The Rural Electrification Administration operated at 2-3%. At those rates, building for 50 years was obviously correct.
            </KeyInsight>
          </Section>

          <Section title="Infrastructure Scaling Laws">
            <p className="text-slate-300 leading-relaxed mb-4">
              Capital costs scale with capacity according to power laws. DOE research shows transformer costs scale with capacity
              to the 0.75 power, meaning doubling capacity increases cost by approximately 68%, not 100%.
            </p>
            <div className="bg-slate-800/30 rounded-lg p-4 mb-6 font-mono text-sm">
              <span className="text-slate-400">C₂ = C₁ × (S₂/S₁)</span><sup className="text-electric-400">0.75</sup>
            </div>
            <EconomiesOfScaleChart />
          </Section>

          <Section title="Grid Interconnection and Reliability">
            <p className="text-slate-300 leading-relaxed mb-6">
              A grid functions as a mesh network. The Great Northeast Blackout of 1965 occurred because weak
              interconnections couldn't handle cascading failures. The response was massive investment in
              transmission to create redundant paths.
            </p>
            <ReservePoolingChart />
            <KeyInsight>
              Operating reserves scale with the square root of system size, not linearly.
              Combining resources through transmission reduces overall variability by 40-60%.
            </KeyInsight>
          </Section>

          <Section title="REA Success and International Comparison">
            <p className="text-slate-300 leading-relaxed mb-6">
              The Rural Electrification Administration (1935-1994) deployed roughly $57 billion in nominal
              cumulative loans (estimated $100-200 billion in today's dollars) to electrify rural America.
            </p>
            <REATimelineChart />
            <div className="mt-8">
              <InternationalComparisonChart />
            </div>
            <KeyInsight>
              Low cost of capital correlates strongly with rapid grid expansion. The US achieved grid growth
              rates comparable to China's when federal capital was available at 2%.
            </KeyInsight>
          </Section>

          <Section title="The Cost of Conservative Planning">
            <CascadingCostsChart />
            <KeyInsight>
              This is why the "prudent" approach of building conservatively can cost 4-5x as much in aggregate.
            </KeyInsight>
          </Section>

          <Section title="The Preparation Delta">
            <p className="text-slate-300 leading-relaxed mb-6">
              When building a transmission tower, you can prepare for future expansion at modest upfront cost:
              structurally rated for higher voltage, with room for a second circuit, designed for reconductoring.
            </p>
            <PreparationDeltaChart />
            <KeyInsight>
              Federal funding for the "preparation delta" (the extra 10-25% upfront) would have massive leverage.
              Every dollar spent on preparation avoids $3-5 in future expansion costs.
            </KeyInsight>
          </Section>

          <Section title="The ROE Problem">
            <p className="text-slate-300 leading-relaxed mb-6">
              Transmission is among the lowest-risk investments in the energy sector: guaranteed cost recovery,
              no commodity risk, no demand risk. Yet transmission owners earn returns typically reserved for
              much riskier investments.
            </p>
            <ROEChart />
            <p className="text-slate-300 leading-relaxed mt-6">
              If the federal government provides low-cost capital (2% loans), permitting certainty (federal siting authority),
              and demand risk absorption (building for growth), then the risk profile changes dramatically.
              A reasonable framework might have the federal government take long-term demand risk while transmission
              owners operate assets for a 5-6% return on equity invested.
            </p>
          </Section>

          <Section title="Conclusion">
            <div className="bg-electric-500/10 border border-electric-500/30 rounded-xl p-6">
              <p className="text-slate-300 leading-relaxed mb-4">
                The math is clear: low cost of capital favors building big, economies of scale make bigger
                infrastructure cheaper per unit, interconnection reduces reserves and improves reliability,
                and preparation for growth costs little upfront but saves enormously later.
              </p>
              <p className="text-slate-300 leading-relaxed mb-4">
                The REA achieved 7-8% annual grid growth at 2% interest rates. China is achieving similar
                growth with state-directed capital. The US currently achieves ~1% growth with private
                financing at 7-10%.
              </p>
              <p className="text-white font-semibold">
                We've done this before. The question isn't whether these dynamics exist. The question is
                whether we choose to take advantage of them again.
              </p>
            </div>
          </Section>

          {/* Navigation */}
          <div className="border-t border-slate-700 pt-8 mt-12 flex justify-between items-center">
            <Link to="/policy" className="text-electric-400 hover:text-electric-300 transition-colors">
              ← Policy Analysis
            </Link>
            <Link to="/sources" className="text-electric-400 hover:text-electric-300 transition-colors">
              Sources & Fact-Check →
            </Link>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8 px-6">
        <div className="max-w-5xl mx-auto text-center text-slate-500 text-sm">
          Analysis based on publicly available economic research and historical data.
        </div>
      </footer>
    </div>
  );
}
