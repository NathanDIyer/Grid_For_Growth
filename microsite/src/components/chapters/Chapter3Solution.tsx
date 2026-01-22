import { ScrollReveal } from '../ui/ScrollReveal';
import { StatCallout } from '../ui/StatCallout';
import { ChartContainer } from '../ui/ChartContainer';
import { ThreeLevers } from '../visualizations/ThreeLevers';
import { PreparationDeltaLeverage } from '../visualizations/PreparationDeltaLeverage';
import { RightOfWayEfficiency } from '../visualizations/RightOfWayEfficiency';
import { REATimeline } from '../visualizations/REATimeline';

export function Chapter3Solution() {
  return (
    <section id="solution" className="chapter-section bg-white">
      <div className="content-container">
        {/* Chapter header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-electric uppercase tracking-wider">
              Chapter 3
            </span>
            <h2 className="text-h1 text-slate-900 mt-2 mb-6">
              The Solution
            </h2>
            <p className="text-body text-slate-600 max-w-prose mx-auto text-balance">
              Investment has four leverage points, each with compounding returns.
              We've done this before, and it worked.
            </p>
          </div>
        </ScrollReveal>

        {/* Key stat */}
        <ScrollReveal delay={0.1}>
          <StatCallout
            value="3-5×"
            label="Return per dollar of investment"
            color="transmission"
            size="large"
          />
        </ScrollReveal>

        {/* Three levers section */}
        <div className="prose-container my-20">
          <ScrollReveal>
            <h3 className="section-headline">
              Four Leverage Points
            </h3>
            <p className="section-body">
              Low-cost capital can shift the entire investment calculus through four
              mechanisms. Each one changes how utilities make decisions, multiplying
              the impact of every dollar spent.
            </p>
          </ScrollReveal>
        </div>

        {/* Three levers visualization */}
        <ChartContainer>
          <ThreeLevers />
        </ChartContainer>

        {/* Preparation delta deep dive */}
        <div className="prose-container my-20">
          <ScrollReveal>
            <h3 className="section-headline">
              The Preparation Delta
            </h3>
            <p className="section-body">
              The most powerful lever: fund the 25% premium to build transmission
              infrastructure that's ready for future expansion. This means oversized
              rights-of-way, stronger foundations, and modular designs. When demand
              arrives, adding capacity costs a fraction of building from scratch.
            </p>
          </ScrollReveal>
        </div>

        {/* Preparation delta visualization */}
        <ChartContainer
          title="The Expansion Pathway"
          subtitle="Build 345kV today with 500kV-capable towers → unlock 8× capacity potential"
          takeaway="Double circuit × Reconductoring × Voltage upgrade = 8× capacity from the same corridor"
        >
          <PreparationDeltaLeverage />
        </ChartContainer>

        {/* Key stat */}
        <ScrollReveal delay={0.1}>
          <StatCallout
            value="92%"
            label="Reduction in cost per MW with full preparation"
            color="grid"
          />
        </ScrollReveal>

        {/* Regional Planning section */}
        <div className="prose-container my-20">
          <ScrollReveal>
            <h3 className="section-headline">
              Regional Planning: Build Once, Grow for Generations
            </h3>
            <p className="section-body">
              This is 50-year infrastructure. Regional backbones aren't just state-level assets—they
              enable industrial development for entire regions across multiple generations. When you
              plan for 20-50 years with headroom for growth, you capture economies of scale that
              can't be achieved incrementally. The grid is a mesh network: each backbone has benefits
              far beyond its own corridor.
            </p>
          </ScrollReveal>
        </div>

        {/* Right of way efficiency visualization */}
        <ChartContainer
          title="Land Efficiency by Voltage"
          subtitle="Higher voltage backbones move more power through less corridor"
          takeaway="Regional 500kV+ backbones use a fraction of the land while enabling 10× more growth"
        >
          <RightOfWayEfficiency />
        </ChartContainer>

        {/* Growth benefits */}
        <ScrollReveal>
          <div className="my-12 bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 border border-slate-200">
            <h4 className="text-xl font-semibold text-slate-800 mb-6 text-center">
              Why Regional Backbones Enable Growth
            </h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-electric rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">New loads just connect</div>
                    <div className="text-sm text-slate-600">When the backbone has headroom, there are no interconnection queues or nasty cost allocation fights</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-transmission rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">No zero-sum games</div>
                    <div className="text-sm text-slate-600">Abundant capacity means one project's success doesn't block another's</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-grid rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">One permitting process</div>
                    <div className="text-sm text-slate-600">Site and permit the backbone once—then expand capacity within the corridor without new approvals</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Multi-generational asset</div>
                    <div className="text-sm text-slate-600">Regional backbones serve communities for 50+ years, enabling industrial development across generations</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* REA precedent section */}
        <div className="prose-container my-20">
          <ScrollReveal>
            <h3 className="section-headline">
              The REA Precedent
            </h3>
            <p className="section-body">
              We've done this before. The Rural Electrification Administration
              transformed American agriculture by lending at 2% over 35-year terms.
              The result: farm electrification went from 10% to 93% in just 20 years,
              with a repayment rate exceeding 99%.
            </p>
          </ScrollReveal>
        </div>

        {/* REA timeline visualization */}
        <ChartContainer
          title="The REA Success Story"
          subtitle="20 years to near-universal rural electrification"
          takeaway="Low-cost lending achieved what private markets couldn't"
        >
          <REATimeline />
        </ChartContainer>

        {/* REA stats */}
        <ScrollReveal>
          <div className="grid md:grid-cols-3 gap-6 my-16">
            <div className="bg-electric-50 rounded-2xl p-6 text-center border border-electric-200">
              <div className="text-3xl font-bold text-electric mb-2">2%</div>
              <div className="text-slate-600">Interest rate</div>
            </div>
            <div className="bg-electric-50 rounded-2xl p-6 text-center border border-electric-200">
              <div className="text-3xl font-bold text-electric mb-2">35 years</div>
              <div className="text-slate-600">Loan terms</div>
            </div>
            <div className="bg-grid-50 rounded-2xl p-6 text-center border border-grid-200">
              <div className="text-3xl font-bold text-grid mb-2">&gt;99%</div>
              <div className="text-slate-600">Repayment rate</div>
            </div>
          </div>
        </ScrollReveal>

        {/* Transition */}
        <ScrollReveal>
          <div className="text-center mt-16 pt-16 border-t border-slate-100">
            <p className="text-slate-500 mb-4">
              The mechanism works. Now, what specific policies can deploy it?
            </p>
            <p className="text-lg text-slate-700 font-medium">
              Next: High-Leverage Investment
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
