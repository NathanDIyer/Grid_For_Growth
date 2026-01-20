import { ScrollReveal } from '../ui/ScrollReveal';
import { StatCallout } from '../ui/StatCallout';
import { ChartContainer } from '../ui/ChartContainer';
import { CascadingCostWaterfall } from '../visualizations/CascadingCostWaterfall';

export function Chapter1Problem() {
  return (
    <section id="problem" className="chapter-section bg-white">
      <div className="content-container">
        {/* Chapter header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-electric uppercase tracking-wider">
              Chapter 1
            </span>
            <h2 className="text-h1 text-slate-900 mt-2 mb-6">
              The Problem
            </h2>
            <p className="text-body text-slate-600 max-w-prose mx-auto text-balance">
              We systematically underbuild the grid due to regulatory bias toward
              conservative investment. The result: cascading costs that multiply
              over decades.
            </p>
          </div>
        </ScrollReveal>

        {/* Key stat */}
        <ScrollReveal delay={0.1}>
          <StatCallout
            value="4-5x"
            label="Conservative planning costs 4-5 times more in aggregate"
            color="congestion"
            size="large"
          />
        </ScrollReveal>

        {/* The planning horizon gap */}
        <div className="prose-container my-20">
          <ScrollReveal>
            <h3 className="section-headline">
              The Planning Horizon Gap
            </h3>
            <p className="section-body">
              Private utilities plan on 5-10 year horizons with 8% cost of capital.
              At these rates, future costs are heavily discounted, making "wait and see"
              appear rational. But the federal government can borrow at 2% over 50+ year
              horizons. This fundamental difference in time preference changes everything
              about optimal infrastructure investment.
            </p>
          </ScrollReveal>
        </div>

        {/* Comparison boxes */}
        <ScrollReveal delay={0.1}>
          <div className="grid md:grid-cols-2 gap-6 mb-20">
            <div className="bg-congestion-50 rounded-2xl p-8 border border-congestion-200">
              <div className="text-congestion font-semibold text-sm uppercase tracking-wider mb-3">
                Private Utility
              </div>
              <div className="text-3xl font-bold text-congestion mb-2">
                5-10 years
              </div>
              <div className="text-slate-600">
                Planning horizon at 8% cost of capital
              </div>
              <div className="mt-4 pt-4 border-t border-congestion-200">
                <div className="text-slate-500 text-sm">
                  Future costs heavily discounted
                </div>
              </div>
            </div>

            <div className="bg-electric-50 rounded-2xl p-8 border border-electric-200">
              <div className="text-electric font-semibold text-sm uppercase tracking-wider mb-3">
                Federal Government
              </div>
              <div className="text-3xl font-bold text-electric mb-2">
                50+ years
              </div>
              <div className="text-slate-600">
                Planning horizon at 2% cost of capital
              </div>
              <div className="mt-4 pt-4 border-t border-electric-200">
                <div className="text-slate-500 text-sm">
                  Long-term value properly weighted
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Cascading cost waterfall */}
        <ChartContainer
          title="The Real Cost of Incremental Expansion"
          subtitle="Five rounds of upgrades cost 4x more than building right the first time"
          takeaway="Each deferral costs more than the last, locking in higher lifecycle costs"
        >
          <CascadingCostWaterfall />
        </ChartContainer>

        {/* International comparison callout */}
        <ScrollReveal>
          <div className="prose-container my-20">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
              <h4 className="text-lg font-semibold text-slate-900 mb-4">
                The Global Comparison
              </h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-electric mb-2">1%</div>
                  <div className="text-slate-600">US grid growth per year</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-transmission mb-2">7%</div>
                  <div className="text-slate-600">China grid growth per year</div>
                </div>
              </div>
              <p className="text-slate-500 text-sm mt-6">
                China's state-directed investment at 2.5% cost of capital enables
                a fundamentally different approach to grid infrastructure.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Transition to next chapter */}
        <ScrollReveal>
          <div className="text-center mt-16 pt-16 border-t border-slate-100">
            <p className="text-slate-500 mb-4">
              The economics of building big haven't changed since 1935.
            </p>
            <p className="text-lg text-slate-700 font-medium">
              Next: The Math Behind Federal Investment
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
