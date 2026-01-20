import { ScrollReveal } from '../ui/ScrollReveal';
import { StatCallout } from '../ui/StatCallout';
import { ChartContainer } from '../ui/ChartContainer';
import { ThreeLevers } from '../visualizations/ThreeLevers';
import { PreparationDeltaLeverage } from '../visualizations/PreparationDeltaLeverage';
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
              Federal investment has three leverage points, each with 3-5× returns.
              We've done this before, and it worked.
            </p>
          </div>
        </ScrollReveal>

        {/* Key stat */}
        <ScrollReveal delay={0.1}>
          <StatCallout
            value="3-5×"
            label="Return per dollar of federal investment"
            color="transmission"
            size="large"
          />
        </ScrollReveal>

        {/* Three levers section */}
        <div className="prose-container my-20">
          <ScrollReveal>
            <h3 className="section-headline">
              Three Federal Leverage Points
            </h3>
            <p className="section-body">
              Federal capital can shift the entire investment calculus through three
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
          title="Preparation Leverage in Action"
          subtitle="25% more upfront investment enables 8× capacity at 92% lower cost per MW"
          takeaway="Every $1 of preparation avoids $3-5 in future expansion costs"
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
          takeaway="Low-cost federal lending achieved what private markets couldn't"
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
              Next: The Policy Ask
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
