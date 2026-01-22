import { ScrollReveal } from '../ui/ScrollReveal';
import { StatCallout } from '../ui/StatCallout';
import { ChartContainer } from '../ui/ChartContainer';
import { SixTenthsRule } from '../visualizations/SixTenthsRule';
import { CostOfCapitalCrossover } from '../visualizations/CostOfCapitalCrossover';
import { ReserveScaling } from '../visualizations/ReserveScaling';

export function Chapter2Math() {
  return (
    <section id="math" className="chapter-section bg-slate-50">
      <div className="content-container">
        {/* Chapter header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-electric uppercase tracking-wider">
              Chapter 2
            </span>
            <h2 className="text-h1 text-slate-900 mt-2 mb-6">
              The Math
            </h2>
            <p className="text-body text-slate-600 max-w-prose mx-auto text-balance">
              The economics of building big haven't changed. Cost of capital is
              the decisive variable that determines optimal infrastructure investment.
            </p>
          </div>
        </ScrollReveal>

        {/* Key stat */}
        <ScrollReveal delay={0.1}>
          <StatCallout
            value="68%"
            label="Doubling capacity costs 68% more, not 100%"
            color="electric"
            size="large"
          />
        </ScrollReveal>

        {/* Scaling laws explanation */}
        <div className="prose-container my-20">
          <ScrollReveal>
            <h3 className="section-headline">
              Infrastructure Scaling Laws
            </h3>
            <p className="section-body">
              Infrastructure costs don't scale linearly with capacity. DOE research shows
              transformer costs scale with capacity to the 0.75 power—doubling capacity
              costs only about 68% more (2<sup>0.75</sup> ≈ 1.68), not 100%. This fundamental
              engineering economics principle means building bigger is more efficient per unit.
            </p>
          </ScrollReveal>
        </div>

        {/* Six-tenths rule visualization */}
        <ChartContainer
          title="Voltage Class Economics"
          subtitle="Higher voltage transmission delivers dramatically more capacity per dollar"
          takeaway="765kV double circuit: 10× the capacity at only 2× the cost of 345kV"
        >
          <SixTenthsRule />
        </ChartContainer>

        {/* The formula */}
        <ScrollReveal>
          <div className="prose-container my-16">
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-2xl p-10 border border-slate-200 text-center shadow-sm">
              <div className="text-sm font-medium text-electric uppercase tracking-wider mb-6">
                Infrastructure Scaling Law
              </div>
              <div className="flex items-center justify-center gap-3 text-slate-800 mb-6">
                <span className="text-3xl italic" style={{ fontFamily: 'Georgia, serif' }}>C</span>
                <sub className="text-lg text-slate-600">2</sub>
                <span className="text-2xl text-slate-400 mx-2">=</span>
                <span className="text-3xl italic" style={{ fontFamily: 'Georgia, serif' }}>C</span>
                <sub className="text-lg text-slate-600">1</sub>
                <span className="text-2xl text-slate-400 mx-2">×</span>
                <span className="text-2xl text-slate-600">(</span>
                <div className="flex flex-col items-center mx-1">
                  <span className="text-2xl italic border-b-2 border-slate-400 px-2" style={{ fontFamily: 'Georgia, serif' }}>S<sub className="text-base">2</sub></span>
                  <span className="text-2xl italic px-2" style={{ fontFamily: 'Georgia, serif' }}>S<sub className="text-base">1</sub></span>
                </div>
                <span className="text-2xl text-slate-600">)</span>
                <sup className="text-xl font-semibold text-electric -ml-1">0.75</sup>
              </div>
              <div className="text-slate-500 text-sm max-w-md mx-auto">
                Where <span className="italic" style={{ fontFamily: 'Georgia, serif' }}>C</span> = cost and{' '}
                <span className="italic" style={{ fontFamily: 'Georgia, serif' }}>S</span> = capacity.
                Doubling capacity increases cost by only 68%, not 100%.
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Cost of capital section */}
        <div className="prose-container my-20">
          <ScrollReveal>
            <h3 className="section-headline">
              Cost of Capital Changes Everything
            </h3>
            <p className="section-body">
              The key insight: at low discount rates, the future matters more. At the
              federal government's 2% borrowing rate, building capacity now—even if
              it sits partially unused—beats waiting and expanding later. At private
              utility rates of 8%, waiting looks rational even though it's more expensive
              in the long run.
            </p>
          </ScrollReveal>
        </div>

        {/* Cost of capital crossover chart */}
        <ChartContainer
          title="Build Now vs. Wait: The Crossover Point"
          subtitle="At what discount rate does building big now beat waiting to expand?"
          takeaway="At 2% federal rates, building big now saves $590M over wait-and-expand"
        >
          <CostOfCapitalCrossover />
        </ChartContainer>

        {/* Key stat */}
        <ScrollReveal delay={0.1}>
          <StatCallout
            value="$590M"
            label="Savings at federal 2% rates vs. wait-and-expand"
            color="grid"
          />
        </ScrollReveal>

        {/* Reserve scaling section */}
        <div className="prose-container my-20">
          <ScrollReveal>
            <h3 className="section-headline">
              Geographic Diversity Bonus
            </h3>
            <p className="section-body">
              Interconnected grids need fewer reserves. When regions are connected,
              their peak demands don't perfectly coincide, and their weather patterns
              vary. This diversity means less redundant capacity is needed—reserves
              scale with the square root of the number of regions.
            </p>
          </ScrollReveal>
        </div>

        {/* Reserve scaling visualization */}
        <ChartContainer
          title="Reserve Requirements Scale Down"
          subtitle="Connecting regions reduces the reserves each must maintain"
          takeaway="Four interconnected regions need half the reserves of isolated systems"
        >
          <ReserveScaling />
        </ChartContainer>

        {/* Transition */}
        <ScrollReveal>
          <div className="text-center mt-16 pt-16 border-t border-slate-200">
            <p className="text-slate-500 mb-4">
              The math is clear. Now, how do we deploy it?
            </p>
            <p className="text-lg text-slate-700 font-medium">
              Next: The Federal Solution
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
