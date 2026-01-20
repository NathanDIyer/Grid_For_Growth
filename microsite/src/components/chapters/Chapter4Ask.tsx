import { ScrollReveal } from '../ui/ScrollReveal';
import { ComparisonTable } from '../ui/ComparisonTable';
import { INTERNATIONAL_COMPARISON } from '../../data/constants';

const policyCards = [
  {
    title: 'Federal Grid Investment Authority',
    description: 'Establish a lending facility providing 2% capital for transmission projects over 50-year terms, modeled on the successful REA.',
    mechanism: 'Low-cost capital',
    color: 'electric'
  },
  {
    title: 'Preparation Delta Grants',
    description: 'Fund the 25% premium for oversized rights-of-way, stronger foundations, and expansion-ready designs on all major transmission projects.',
    mechanism: 'Preparation leverage',
    color: 'transmission'
  },
  {
    title: 'Right-Sizing Infrastructure Fund',
    description: 'Provide 20% grants to shift utility planning from minimum-viable to optimal-capacity infrastructure investments.',
    mechanism: 'Planning paradigm shift',
    color: 'grid'
  },
  {
    title: '50-Year Planning Mandate',
    description: 'Require federally-funded projects to optimize for 50-year horizons rather than short-term rate impact minimization.',
    mechanism: 'Time horizon alignment',
    color: 'slate'
  }
];

const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
  electric: {
    bg: 'bg-electric-50',
    border: 'border-electric-200',
    text: 'text-electric'
  },
  transmission: {
    bg: 'bg-transmission-50',
    border: 'border-transmission-200',
    text: 'text-transmission'
  },
  grid: {
    bg: 'bg-grid-50',
    border: 'border-grid-200',
    text: 'text-grid'
  },
  slate: {
    bg: 'bg-slate-50',
    border: 'border-slate-200',
    text: 'text-slate-700'
  }
};

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
              The Ask
            </h2>
            <p className="text-body text-slate-600 max-w-prose mx-auto text-balance">
              Specific policy mechanisms that deploy these economics at scale.
            </p>
          </div>
        </ScrollReveal>

        {/* Policy cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {policyCards.map((card, index) => {
            const colors = colorClasses[card.color];
            return (
              <ScrollReveal key={card.title} delay={index * 0.1}>
                <div className={`${colors.bg} rounded-2xl p-6 border ${colors.border} h-full`}>
                  <div className={`text-sm font-semibold ${colors.text} uppercase tracking-wider mb-3`}>
                    {card.mechanism}
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900 mb-3">
                    {card.title}
                  </h4>
                  <p className="text-slate-600">
                    {card.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* International comparison */}
        <div className="prose-container my-20">
          <ScrollReveal>
            <h3 className="section-headline">
              International Comparison
            </h3>
            <p className="section-body mb-8">
              Other nations have already proven that low-cost capital drives grid
              growth. The US achieved similar results in the REA era—we can do it again.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="bg-white rounded-2xl p-6 border border-slate-200">
              <ComparisonTable data={INTERNATIONAL_COMPARISON} />
            </div>
          </ScrollReveal>
        </div>

        {/* Call to action */}
        <ScrollReveal>
          <div className="bg-slate-900 rounded-3xl p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to make the case?
            </h3>
            <p className="text-slate-300 max-w-prose mx-auto mb-8">
              Download a one-page summary with the key numbers and policy recommendations
              for sharing with colleagues and policymakers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={onDownloadPDF}
                className="bg-electric hover:bg-electric-500 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                Download PDF Summary
              </button>
              <a
                href="https://github.com/nathaniyer/Grid_For_Growth"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold transition-colors"
              >
                View Full Analysis
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Key takeaways */}
        <ScrollReveal>
          <div className="mt-20">
            <h3 className="text-center section-headline mb-8">
              Key Takeaways
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white rounded-xl p-5 border border-slate-200 text-center">
                <div className="text-2xl font-bold text-electric mb-2">4-5×</div>
                <div className="text-sm text-slate-600">Cost of conservative planning</div>
              </div>
              <div className="bg-white rounded-xl p-5 border border-slate-200 text-center">
                <div className="text-2xl font-bold text-transmission mb-2">52%</div>
                <div className="text-sm text-slate-600">Cost to double capacity</div>
              </div>
              <div className="bg-white rounded-xl p-5 border border-slate-200 text-center">
                <div className="text-2xl font-bold text-grid mb-2">$590M</div>
                <div className="text-sm text-slate-600">Savings at 2% rates</div>
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
