import { Link } from 'react-router-dom';
import { ScrollReveal } from '../ui/ScrollReveal';

const leveragePoints = [
  {
    number: '01',
    title: 'Low-Cost Capital',
    description: 'Federal lending at 2% changes the math on every infrastructure decision. At low rates, building bigger upfront beats incremental expansion every time.',
    insight: 'The REA proved this works: 2% loans over 35 years achieved near-universal rural electrification with >99% repayment.',
    color: 'electric'
  },
  {
    number: '02',
    title: 'Preparation Delta',
    description: 'Pay the 10-25% premium to build expansion-ready: oversized foundations, stronger towers, extra substation bays. When growth comes, you expand at a fraction of the cost.',
    insight: 'Full preparation enables 8× capacity growth at 80% lower lifecycle cost per MW.',
    color: 'transmission'
  },
  {
    number: '03',
    title: 'Right-Size Infrastructure',
    description: 'When the optimal build is 500kV but 345kV is easier to justify, a modest grant tips the decision. Build for the grid you need, not the minimum viable option.',
    insight: '765kV delivers 10× the capacity of 345kV at only 2× the cost.',
    color: 'grid'
  },
  {
    number: '04',
    title: 'Long Time Horizons',
    description: "Plan for 40-50 years. This is multi-generational infrastructure. Short-term thinking leads to cascading upgrades that cost 4-5× what right-sized investment would have required.",
    insight: 'The entity with the longest time horizon should hold the infrastructure risk.',
    color: 'slate'
  }
];

const colorClasses: Record<string, { bg: string; border: string; text: string; accent: string }> = {
  electric: {
    bg: 'bg-electric-50',
    border: 'border-electric-200',
    text: 'text-electric',
    accent: 'text-electric-600'
  },
  transmission: {
    bg: 'bg-transmission-50',
    border: 'border-transmission-200',
    text: 'text-transmission',
    accent: 'text-transmission-600'
  },
  grid: {
    bg: 'bg-grid-50',
    border: 'border-grid-200',
    text: 'text-grid',
    accent: 'text-grid-600'
  },
  slate: {
    bg: 'bg-slate-100',
    border: 'border-slate-300',
    text: 'text-slate-700',
    accent: 'text-slate-800'
  }
};

// Updated international comparison data from research
const internationalData = [
  {
    country: 'China',
    costOfCapital: '2-4%',
    gridGrowth: '7%/year',
    model: 'State-directed',
    keyFeature: 'State Grid investing $574B through 2030'
  },
  {
    country: 'European Union',
    costOfCapital: '3-5%',
    gridGrowth: '3-4%/year',
    model: 'Policy bank (EIB)',
    keyFeature: 'EIB provided €8.5B for grids in 2024 alone'
  },
  {
    country: 'Japan',
    costOfCapital: '3-5%',
    gridGrowth: '2%/year',
    model: 'Development bank (DBJ)',
    keyFeature: 'Government-backed long-term financing'
  },
  {
    country: 'India',
    costOfCapital: '6-8%',
    gridGrowth: '6%/year',
    model: 'State DFIs (PFC/REC)',
    keyFeature: '$12.6B in transmission auctions in 2024'
  },
  {
    country: 'US (Current)',
    costOfCapital: '7-10%',
    gridGrowth: '1%/year',
    model: 'Private + regulation',
    keyFeature: 'Fragmented, market-based approach'
  },
  {
    country: 'US (REA Era)',
    costOfCapital: '2%',
    gridGrowth: '8%/year',
    model: 'Federal lending',
    keyFeature: '>99% repayment rate over 35-year terms'
  }
];

interface Chapter4AskProps {
  onDownloadPDF: () => void;
}

export function Chapter4Ask({ onDownloadPDF }: Chapter4AskProps) {
  return (
    <section id="ask" className="chapter-section bg-slate-50">
      <div className="content-container">
        {/* Chapter header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-electric uppercase tracking-wider">
              Chapter 4
            </span>
            <h2 className="text-h1 text-slate-900 mt-2 mb-6">
              High-Leverage Investment
            </h2>
            <p className="text-body text-slate-600 max-w-prose mx-auto text-balance">
              If you wanted to maximize the return on grid infrastructure investment,
              these are the highest-leverage strategies based on the economics.
            </p>
          </div>
        </ScrollReveal>

        {/* Leverage points */}
        <div className="space-y-6 mb-20">
          {leveragePoints.map((point, index) => {
            const colors = colorClasses[point.color];
            return (
              <ScrollReveal key={point.title} delay={index * 0.1}>
                <div className={`${colors.bg} rounded-2xl p-8 border ${colors.border}`}>
                  <div className="flex items-start gap-6">
                    <div className={`text-4xl font-bold ${colors.text} opacity-30`}>
                      {point.number}
                    </div>
                    <div className="flex-1">
                      <h4 className={`text-xl font-semibold ${colors.accent} mb-3`}>
                        {point.title}
                      </h4>
                      <p className="text-slate-700 mb-4">
                        {point.description}
                      </p>
                      <div className="bg-white/60 rounded-lg px-4 py-3 border border-white/80">
                        <p className="text-sm text-slate-600 italic">
                          {point.insight}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* International comparison */}
        <div className="prose-container my-20">
          <ScrollReveal>
            <h3 className="section-headline">
              How Others Finance Grid Investment
            </h3>
            <p className="section-body mb-8">
              Around the world, different financing models produce dramatically different
              outcomes. The common thread: lower cost of capital enables faster grid expansion.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-white rounded-2xl p-6 border border-slate-200 overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">Country/Region</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">Cost of Capital</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">Grid Growth</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">Model</th>
                    <th className="text-left py-3 px-4 font-semibold text-slate-700">Key Feature</th>
                  </tr>
                </thead>
                <tbody>
                  {internationalData.map((row, i) => (
                    <tr key={row.country} className={i % 2 === 0 ? 'bg-slate-50' : ''}>
                      <td className="py-3 px-4 font-medium text-slate-800">{row.country}</td>
                      <td className="py-3 px-4 text-slate-600">{row.costOfCapital}</td>
                      <td className={`py-3 px-4 font-semibold whitespace-nowrap ${
                        parseFloat(row.gridGrowth) >= 6 ? 'text-green-600' :
                        parseFloat(row.gridGrowth) >= 3 ? 'text-yellow-600' : 'text-red-600'
                      }`}>{row.gridGrowth}</td>
                      <td className="py-3 px-4 text-slate-600">{row.model}</td>
                      <td className="py-3 px-4 text-slate-500 text-xs">{row.keyFeature}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="mt-6 p-4 bg-electric-50 rounded-xl border border-electric-200">
              <p className="text-sm text-slate-700">
                <strong className="text-electric">Key insight:</strong> Policy banks (EIB, DBJ, KfW) and
                state-directed capital are the international norm for grid infrastructure, not the exception.
                The US achieved 8% annual grid growth during the REA era using the same approach.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Call to action */}
        <ScrollReveal>
          <div className="bg-slate-900 rounded-3xl p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Want the full analysis?
            </h3>
            <p className="text-slate-300 max-w-prose mx-auto mb-8">
              Download a summary or read the complete policy analysis with all the data,
              sources, and economic reasoning.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onDownloadPDF}
                className="bg-electric hover:bg-electric-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                Download PDF Summary
              </button>
              <Link
                to="/policy"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                View Full Analysis
              </Link>
            </div>
          </div>
        </ScrollReveal>

        {/* Key takeaways */}
        <ScrollReveal>
          <div className="mt-20">
            <h3 className="text-center section-headline mb-8">
              Key Numbers
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl p-5 border border-slate-200 text-center">
                <div className="text-2xl font-bold text-electric mb-2">4-5×</div>
                <div className="text-sm text-slate-600">Cost of incremental upgrades</div>
              </div>
              <div className="bg-white rounded-xl p-5 border border-slate-200 text-center">
                <div className="text-2xl font-bold text-transmission mb-2">68%</div>
                <div className="text-sm text-slate-600">Cost to double capacity</div>
              </div>
              <div className="bg-white rounded-xl p-5 border border-slate-200 text-center">
                <div className="text-2xl font-bold text-grid mb-2">8×</div>
                <div className="text-sm text-slate-600">Capacity from full preparation</div>
              </div>
              <div className="bg-white rounded-xl p-5 border border-slate-200 text-center">
                <div className="text-2xl font-bold text-electric mb-2">&gt;99%</div>
                <div className="text-sm text-slate-600">REA repayment rate</div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
