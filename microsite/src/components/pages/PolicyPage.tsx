import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

function Section({ title, children, id }: { title: string; children: React.ReactNode; id?: string }) {
  return (
    <section id={id} className="mb-16">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">{title}</h2>
      <div className="prose prose-invert prose-lg max-w-none">
        {children}
      </div>
    </section>
  );
}

export function PolicyPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-white hover:text-electric-400 transition-colors">
            ← Grids for Growth
          </Link>
          <div className="flex gap-4 text-sm">
            <Link to="/economics" className="text-slate-400 hover:text-white transition-colors">
              Economic Analysis
            </Link>
            <Link to="/sources" className="text-slate-400 hover:text-white transition-colors">
              Sources
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Policy Analysis</h1>
          <p className="text-xl text-slate-300 mb-12">
            The economic case for proactive federal investment in electricity grid infrastructure.
          </p>

          <Section title="Electricity Growth Used to Make Things Cheaper">
            <p className="text-slate-300 leading-relaxed mb-4">
              From the 1920s through the 1960s, electricity demand grew 7, 8, 10 percent per year. The postwar AC boom should have been impossible. Air conditioning is highly correlated across regions, distributed across millions of buildings, concentrated in the hottest hours of the hottest days. Terrible load factor. If anything was going to break the grid's economics, it was AC.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              But through all of that growth, the real cost of electricity declined. The grid got bigger and cheaper at the same time.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Why? A few things. Power plants got more efficient as they got bigger. Transmission moves more power for less cost per unit as it scales. There's a scaling law for transformers, meaning scaling up doesn't scale costs proportionally. Losses fall as systems grow. Interconnection lets regions lean on each other for reliability, which reduces the backup everyone needs to maintain. You get learning by doing, workforce expertise deepens, capital markets gain confidence once you've proven you can do something.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              These dynamics haven't disappeared. The scaling laws still apply. Interconnection benefits still accrue. You can see it in the fastest-growing grids today. China is expanding electricity consumption at seven times the American rate while costs fall. They build HVDC lines that move the equivalent of New York City's entire output 2,000 miles, and they finish construction in three years.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Now, China has different institutions. State-owned utilities, different land acquisition, less environmental review. You can't copy-paste their outcomes into American institutions. But what China shows is that there's no physical or economic law requiring grid expansion to raise costs. The positive-sum dynamics are real. When American grid expansion creates cost pressures, that's telling us something about our market design and permitting structures, not about the underlying technology.
            </p>
          </Section>

          <Section title="The Reliability Logic Still Holds">
            <p className="text-slate-300 leading-relaxed mb-4">
              The Great Northeast Blackout of 1965 triggered the largest transmission expansion in American history. The lesson was simple: interconnected grids are more reliable than isolated ones. When one plant trips, power flows in from neighbors. When demand spikes regionally, the broader network absorbs it. Pooling resources reduces the reserves everyone needs.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              This logic applies even more today. Solar output is correlated within a region but uncorrelated across regions. Wind in Texas doesn't blow at the same time as wind in the Dakotas. Geographic diversity is a reliability resource, but only if transmission exists to access it. Gas has correlation issues too: pipeline constraints, cold weather demand spikes, regional outages. And the same logic applied to the baseload-heavy system of the mid-20th century, which is when we built most of our transmission backbone.
            </p>
            <p className="text-slate-300 leading-relaxed">
              The engineering economics of interconnection haven't changed. Economies of scale at the highest voltage levels remain strong. What's changed is our willingness to invest.
            </p>
          </Section>

          <Section title="The Projection Problem">
            <p className="text-slate-300 leading-relaxed mb-4">
              Every time you build anything on the grid, you're making a 50-year directional bet on what growth is going to look like.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Say you're building a new transmission line. You can build 345 kV sized for current needs, or you can spend 20-30% more to build 500 kV with double the capacity. Seems obvious, right? Modest premium, twice the capability.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              But someone has to bear the risk of being wrong.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              If you overbuild and the load never comes, you've got expensive infrastructure sitting idle. Ratepayers pay for assets they don't use. Regulators face criticism for gold-plating. Utility executives face uncomfortable questions.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              If you underbuild and demand exceeds projections, the costs are worse. You can't easily upgrade a 345 kV line to 500 kV while it's carrying load. The towers aren't rated for it. The substations need different breakers. The transformers are the wrong size. You probably need to build an entirely new line on a new right-of-way, paying full permitting and construction costs again. What would have been a 20% premium becomes 200% or 300% total cost.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Both errors are expensive. But they're expensive in different ways to different people at different times.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Cost of capital matters a lot here. When capital is expensive, waiting makes sense. The carrying cost of unused infrastructure is high, so even if building conservatively means higher total costs down the line, those costs get discounted. When capital is cheap, the calculus reverses. Building big now costs less in present-value terms than multiple smaller expansions. The cheaper the cost of capital, the bigger you want to build every time you build, because carrying that optionality is cheap.
            </p>
          </Section>

          <Section title="We're Biased Toward Underbuilding">
            <p className="text-slate-300 leading-relaxed mb-4">
              The American regulatory and market structure systematically pushes toward underbuilding.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Regulators don't want to impose costs on ratepayers for speculative benefits. "Gold plating" is an accusation that ends careers. If a utility builds conservatively and later needs to upgrade, that upgrade gets justified as a reliability necessity. No one gets blamed for reliability investments. But if a utility builds ambitiously and demand falls short, every excess dollar is visible on the balance sheet with no good explanation.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              So the conservative path always looks defensible in the moment. The ambitious path only gets vindicated years later, by which time the decision-makers have moved on. A distribution utility forced to use five-year demand projections will upgrade transformers once, twice, three times, four times. Each upgrade costs as much as the last. Cumulative cost hits five times what a single right-sized investment would have required. But each individual decision looked prudent.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Liberalized electricity markets compound this. These markets are designed to eliminate excess capacity. The marginal generator, by definition, earns no profit. The missing money problem pushes systems toward the edge of reliability constraints. Capacity markets patch this by paying generators to be available during peaks, but the overall structure still rewards running tight. That made sense when load wasn't growing. Excess capacity was waste. But when load is growing, a tight system becomes a trap.
            </p>
            <p className="text-slate-300 leading-relaxed">
              We're not building transmission like it's 50-year infrastructure. We're building it like it's 10-year infrastructure, and even pushing to 20 years has been a hard sell. The result is a system that's reactive rather than proactive. We're rationing access to the grid we have rather than building for the grid we need.
            </p>
          </Section>

          <Section title="The Reactive Trap">
            <p className="text-slate-300 leading-relaxed mb-4">
              When transmission is tight, the system shifts from planning for growth to reacting to it. Every new entrant becomes a problem to solve rather than an opportunity to capture.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Cost causation and participant funding seem fair in isolation: you caused the need for an upgrade, so you pay for it. But this logic breaks down when the grid is interconnected (which it always is). Your project doesn't just trigger one upgrade. It triggers cascading network upgrades across the system. The substation you connect to needs a bigger breaker. The line feeding that substation hits its thermal limit. The transformer upstream needs replacement. Suddenly you're paying for system-wide constraints that existed before you showed up.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              You can see this right now in PJM with the 500 kV+ backbone. Interconnection requests trigger cascading upgrades running into tens or hundreds of millions of dollars. A single project faces costs that reflect accumulated underinvestment across the system, not the actual cost of serving them. The economics become punitive.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Projects die. Developers who would have built generation, served load, created jobs, go elsewhere or just don't proceed. Manufacturing facilities that might have located in one region choose another because the interconnection timeline is three years shorter and the upgrade costs are $80 million lower. A lot of manufacturing has flexibility on location. Communities lose investment not because they're uncompetitive on fundamentals, but because the grid wasn't ready.
            </p>
            <p className="text-slate-300 leading-relaxed">
              This is the zero-sum mentality made concrete. Instead of "growth is good, let's enable it," the message is "growth is costly, and you're paying." Instead of "hey, we want business to grow, we want this infrastructure to be available, we want it to be fast and competitive," it's basically "screw you for growing."
            </p>
          </Section>

          <Section title="Everything Downstream is Broken">
            <p className="text-slate-300 leading-relaxed mb-4">
              All of our interconnection processes are downstream of this reactive posture.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Cluster studies exist because we can't study projects individually when they all interact on a constrained system. Interconnection queues back up because every project triggers analysis of system-wide impacts. Cascading network upgrades appear because the system has no slack to absorb new entries. Cost allocation fights intensify because the costs being allocated are large and the benefits are diffuse.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              None of these are problems on a system with headroom. When there's capacity available, interconnection is simple: you connect, you pay your direct costs, you're done. The baroque complexity of current interconnection processes is a symptom of scarcity, not an inherent feature of grid management.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Renewable developers have been screaming about this for almost ten years. Interconnection costs and timelines have killed more projects than any technology limitation. The problem was somewhat contained when it was "just" generators competing for limited transmission access.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Now loads are entering the queue. Data centers, manufacturing facilities, electrification projects. They face the same cascading upgrade costs, the same multi-year timelines, the same uncertainty. The constituency experiencing these costs is about to expand dramatically. This is crushing the economics of renewables, creating massive problems in interconnection queues, increasingly killing economic development projects, and making electrification too expensive.
            </p>
          </Section>

          <Section title="We Could Just Build Proactively">
            <p className="text-slate-300 leading-relaxed mb-4">
              The alternative is building backbones with headroom before demand arrives. This is a policy choice, not a technical constraint.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              When you have headroom, new projects connect quickly at predictable costs. Economic development happens where it makes sense on fundamentals, not where the grid happens to have slack. Upgrade costs spread across beneficiaries rather than concentrating on whoever showed up last. The system rewards growth instead of punishing it.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              The more we can move to a world with strong backbones and headroom, the more we can grow, and the less we impose killer costs on the projects and businesses that drive that growth.
            </p>
            <p className="text-slate-300 leading-relaxed">
              China and other fast-growing economies build with headroom. They plan for the grid they want, not the grid they have. When demand materializes, it plugs in without drama. When companies look for sites, they find capacity waiting. The result is 6-8% annual demand growth with stable or falling prices. Different institutions, yes. But proof that the positive-sum dynamics work.
            </p>
          </Section>

          <Section title="A Federal Role">
            <p className="text-slate-300 leading-relaxed mb-4">
              The core tension is real: uncertainty about the future means someone has to bear the risk of overbuilding or underbuilding. The question is who.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              The federal government is the natural candidate. It borrows more cheaply than anyone else. It has the longest time horizon of any economic actor. It captures the broadest benefits of economic growth through tax revenue. And it's done this before: the Rural Electrification Administration, in today's dollars, deployed something like $100-150 billion in low-cost capital to wire America.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Three things would shift the calculus:
            </p>

            <div className="bg-electric-500/10 border border-electric-500/30 rounded-lg p-6 mb-6">
              <h4 className="text-electric-400 font-semibold mb-3">Low-cost federal capital</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                If the cost of capital for grid infrastructure dropped to 2%, the dynamics around speculative building change completely. Carrying costs for unused capacity become negligible. Building for 50 years rather than 10 becomes obviously correct. The risk of extra carry gets super manageable, and if the load comes, everyone profits.
              </p>
            </div>

            <div className="bg-electric-500/10 border border-electric-500/30 rounded-lg p-6 mb-6">
              <h4 className="text-electric-400 font-semibold mb-3">Fund the preparation delta</h4>
              <p className="text-slate-300 text-sm leading-relaxed mb-3">
                When you build a transmission tower, you can build it ready for future expansion: structurally rated for higher voltage, with room for a second circuit, designed for reconductoring. Same tower, same line, but you can get up to an 8-fold increase in capacity with low costs to do those updates because you set it up for success. This preparation costs maybe 10-15% more upfront. Who pays for that? That's where a federal dollar has enormous leverage.
              </p>
              <p className="text-slate-300 text-sm leading-relaxed">
                By paying for the delta, the federal government enables future growth to happen with economies of scale while keeping costs much lower than otherwise. That drives more growth, which drives more tax revenue. There's a multiplier effect.
              </p>
            </div>

            <div className="bg-electric-500/10 border border-electric-500/30 rounded-lg p-6 mb-6">
              <h4 className="text-electric-400 font-semibold mb-3">Grants for right-sizing</h4>
              <p className="text-slate-300 text-sm leading-relaxed">
                When the right-sized line is 500 kV but 345 kV is easier to justify, a 20% federal grant to cover the capacity premium could tip the decision. The federal government takes the long side of the bet on American growth. If demand materializes, the benefits flow through as lower prices and faster interconnection. If not, federal exposure is bounded at the grant amount.
              </p>
            </div>

            <p className="text-slate-300 leading-relaxed">
              Who do we want holding the risk if you're a little too aggressive? Who gets the upside if we actually do grow? The federal government. More than anyone else, the federal government benefits if there's extra growth, and they're the ones best able to make these long-term 50-year infrastructure bets. It's well known that government has a huge role to play in infrastructure that has multiplying effects. This is that kind of infrastructure.
            </p>
          </Section>

          <Section title="Siting and Landowner Compensation">
            <p className="text-slate-300 leading-relaxed mb-4">
              A Grids for Growth agenda has to include siting reform. Cheap capital doesn't help if you can't permit lines. But the economics of larger lines actually help here.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              Bigger lines move dramatically more value over approximately the same land footprint. A 500 kV line doesn't require twice the right-of-way of a 345 kV line, but it carries roughly twice the power. A double-circuit 765 kV line moves an order of magnitude more power than a single-circuit 345 kV line on a modestly wider corridor.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              This creates real headroom for landowner compensation. If the value flowing through a corridor is $50 million per year rather than $10 million, you can pay landowners more. You can offer royalty structures tied to throughput. You can make hosting transmission genuinely attractive rather than something to fight.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              At a certain size, a transmission easement becomes more valuable than almost any other use of rural land. That changes the political economy. Landowners who would fight a 138 kV line might welcome a 500 kV line with appropriate compensation. This can help cut the Gordian knot of land use politics, because the bigger lines are more valuable than anything else you could do with that property.
            </p>
            <p className="text-slate-300 leading-relaxed">
              This doesn't solve every siting conflict. Urban and suburban corridors stay hard. Scenic areas will still generate opposition. But compensation reform, enabled by the economics of larger lines, can flip the calculus in many of the places where transmission is most needed. People fight infrastructure partly for principled reasons, but often because they bear costs without sharing benefits. Fix the benefit-sharing and some opposition dissolves.
            </p>
          </Section>

          <Section title="Technology Risk">
            <p className="text-slate-300 leading-relaxed mb-4">
              Some people worry about technology change stranding assets. What if HVDC costs collapse? What if distributed generation reduces transmission needs?
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              But we're already seeing dramatic cost declines in renewables and batteries, and that's different from infrastructure. Developers hold generation-side technology risk. A solar project built today competes against a solar project built in 2030 with better panels and cheaper batteries. If the 2030 project wins, the 2024 project gets pushed off. Markets handle this.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              What markets don't handle well is long-lived infrastructure with network effects where coordination failures prevent efficient investment. That's transmission.
            </p>
            <p className="text-slate-300 leading-relaxed">
              Meanwhile, economies of scale in transmission remain strong and stable. We're not seeing dramatic cost declines in transformers and towers the way we are in solar panels. The innovation waiting game that might justify delay for generation technologies doesn't apply to backbone infrastructure. And you're not going to build everything at once anyway. If future technologies can outcompete current projects in the market, they will. The point is to build the backbone that enables whatever generation technologies win.
            </p>
          </Section>

          <Section title="Betting on Ourselves">
            <p className="text-slate-300 leading-relaxed mb-4">
              All of this amounts to a bet: that America will need a grid two or three times its current size over the next 50 years, driven by decarbonization, electrification, automation, AI, and technologies we haven't imagined. That bet may be wrong. But the asymmetry favors action.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              If we build big and demand falls short, we have some underutilized infrastructure. If we build small and demand exceeds projections, we choke off economic growth, delay decarbonization, and pay multiples of what right-sized investment would have cost. The costs of underbuilding aren't hypothetical. They're visible right now in interconnection queues, in withdrawn projects, in factories that located elsewhere, in the developers who have been screaming about this for a decade.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              A Grids for Growth agenda would deploy cheap capital, fund preparation for expansion, provide grants to right-size critical infrastructure, reform siting through landowner compensation, and move from reactive to proactive planning. The goal is a system that rewards growth instead of punishing it, that invites economic development instead of rationing access, that builds for the grid we want rather than patching the grid we have.
            </p>
            <p className="text-slate-300 leading-relaxed mb-4">
              The alternative is what we have now: random projects, short-term thinking, and the costs of growth forced onto whoever shows up last. That worked when demand was flat. It's failing now, and will fail harder as electrification accelerates.
            </p>
            <p className="text-slate-300 leading-relaxed font-semibold text-white">
              We've grown the grid before. We can do it again.
            </p>
          </Section>

          {/* Navigation */}
          <div className="border-t border-slate-700 pt-8 mt-12 flex justify-between items-center">
            <Link to="/" className="text-electric-400 hover:text-electric-300 transition-colors">
              ← Back to Home
            </Link>
            <Link to="/economics" className="text-electric-400 hover:text-electric-300 transition-colors">
              Economic Analysis →
            </Link>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8 px-6">
        <div className="max-w-4xl mx-auto text-center text-slate-500 text-sm">
          Analysis based on publicly available economic research and historical data.
        </div>
      </footer>
    </div>
  );
}
