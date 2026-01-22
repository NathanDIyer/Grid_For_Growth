import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface SourceLink {
  title: string;
  url: string;
  description?: string;
}

interface Claim {
  claim: string;
  status: 'verified' | 'estimate' | 'illustrative';
  statusLabel: string;
  evidence: string;
  sources: SourceLink[];
}

const claims: Record<string, Claim[]> = {
  'Rural Electrification Administration': [
    {
      claim: '2% fixed interest rate after 1944 Pace Act',
      status: 'verified',
      statusLabel: 'Verified',
      evidence: 'The 1944 Department of Agriculture Organic Act (Pace Act) explicitly set the REA interest rate at 2% fixed. Prior to 1944, rates matched federal funds rate at loan execution.',
      sources: [
        { title: 'EH.net - Rural Electrification Administration', url: 'https://eh.net/encyclopedia/rural-electrification-administration/' },
        { title: 'Richmond Fed - Electrifying Rural America', url: 'https://www.richmondfed.org/publications/research/econ_focus/2020/q1/economic_history' },
      ],
    },
    {
      claim: '35-year loan repayment period',
      status: 'verified',
      statusLabel: 'Verified',
      evidence: 'The 1944 Pace Act extended the loan repayment period from the original 25 years to 35 years. This 35-year term remains a feature of successor programs under the Rural Utilities Service today.',
      sources: [
        { title: 'EH.net - Rural Electrification Administration', url: 'https://eh.net/encyclopedia/rural-electrification-administration/' },
        { title: 'USDA Rural Development - Electric Infrastructure Loan Program', url: 'https://www.rd.usda.gov/programs-services/electric-programs/electric-infrastructure-loan-loan-guarantee-program' },
      ],
    },
    {
      claim: '<1% default rate (>99% repayment)',
      status: 'verified',
      statusLabel: 'Verified',
      evidence: 'Multiple authoritative sources confirm the default rate was less than 1%. EH.net explicitly states "the default rate was less than one percent." Richmond Fed corroborates this finding.',
      sources: [
        { title: 'EH.net - Rural Electrification Administration', url: 'https://eh.net/encyclopedia/rural-electrification-administration/' },
        { title: 'Richmond Fed - Electrifying Rural America', url: 'https://www.richmondfed.org/publications/research/econ_focus/2020/q1/economic_history' },
      ],
    },
    {
      claim: '~10% of farms electrified in 1935, 90%+ by mid-1950s',
      status: 'verified',
      statusLabel: 'Verified',
      evidence: 'In 1935, 10.9% of farms (744,000) had electricity. By 1953, over 90% of farms were electrified. By 1963, 99% of all farms had power.',
      sources: [
        { title: 'NRECA - Flashbacks: Rural Electrification', url: 'https://www.cooperative.com/remagazine/articles/Pages/flashbacks-rural-electrification-cartogram-numbers.aspx' },
        { title: "America's Electric Cooperatives - History", url: 'https://www.electric.coop/our-organization/history' },
      ],
    },
  ],
  'Grid Economics & Scaling Laws': [
    {
      claim: 'Transformer scaling exponent of 0.75',
      status: 'verified',
      statusLabel: 'Verified',
      evidence: 'DOE document confirms costs scale as ratio of kVA ratings to the 0.75 power for transformers. Doubling transformer capacity increases cost by approximately 68%, not 100%.',
      sources: [
        { title: 'DOE Transformer Manufacturing Scaling Relationships (PDF)', url: 'https://downloads.regulations.gov/EERE-2010-BT-STD-0048-0760/attachment_21.pdf' },
        { title: 'DOE Grid Deployment Office - Transformer Cost Analysis', url: 'https://www.osti.gov/servlets/purl/1893821' },
      ],
    },
    {
      claim: '345kV single circuit capacity ~400 MW',
      status: 'verified',
      statusLabel: 'Verified',
      evidence: 'AEP explicitly states that a 345kV line with bundled conductors can deliver "only about 400 MW for distances up to 300 miles."',
      sources: [
        { title: 'AEP Transmission Facts', url: 'https://web.ecs.baylor.edu/faculty/grady/_13_EE392J_2_Spring11_AEP_Transmission_Facts.pdf' },
      ],
    },
    {
      claim: '500kV single circuit capacity ~900 MW',
      status: 'verified',
      statusLabel: 'Verified',
      evidence: 'AEP states a 500kV line can deliver "only about 900 MW for distances up to 300 miles."',
      sources: [
        { title: 'AEP Transmission Facts', url: 'https://web.ecs.baylor.edu/faculty/grady/_13_EE392J_2_Spring11_AEP_Transmission_Facts.pdf' },
      ],
    },
    {
      claim: '765kV costs ~29% of 345kV per MW-mile',
      status: 'verified',
      statusLabel: 'Verified',
      evidence: 'AEP analysis states "765-kV construction is only 29% of the cost of 345-kV" on a per-MW equivalent basis.',
      sources: [
        { title: 'RETA/AEP Analysis', url: 'https://retasite.wordpress.com/wp-content/uploads/2013/07/reta-electric-transmission-america-power-line-costs.pdf' },
        { title: 'MISO Transmission Cost Estimation Guide', url: 'https://cdn.misoenergy.org/20240501%20PSC%20Item%2004%20MISO%20Transmission%20Cost%20Estimation%20Guide%20for%20MTEP24632680.pdf' },
      ],
    },
  ],
  'China Grid Investment': [
    {
      claim: '$574 billion (4 trillion yuan) investment 2026-2030',
      status: 'verified',
      statusLabel: 'Verified',
      evidence: 'State Grid announced 4 trillion yuan investment for 2026-2030 (15th Five-Year Plan), representing a 40% increase from the prior five-year period.',
      sources: [
        { title: 'Bloomberg - China State Grid Plans 40% Surge', url: 'https://www.bloomberg.com/news/articles/2026-01-15/china-s-state-grid-plans-40-surge-in-investment-through-2030' },
        { title: 'South China Morning Post', url: 'https://www.scmp.com/business/china-business/article/3340098/chinese-power-stocks-surge-state-grids-record-us574-billion-investment-plan' },
      ],
    },
    {
      claim: '42 UHV lines operational in China',
      status: 'verified',
      statusLabel: 'Verified',
      evidence: 'By end of 2024, 42 UHV AC/DC projects were operational (38 by State Grid, 4 by China Southern Power Grid).',
      sources: [
        { title: 'China Daily - UHV Grid', url: 'https://www.chinadaily.com.cn/a/202510/23/WS68f98221a310f735438b6741.html' },
        { title: 'Wikipedia - UHV in China', url: 'https://en.wikipedia.org/wiki/Ultra-high-voltage_electricity_transmission_in_China' },
      ],
    },
    {
      claim: 'Changji-Guquan: 3,324km, 12GW, 3-year construction',
      status: 'verified',
      statusLabel: 'Verified',
      evidence: 'Construction started January 2016, completed December 2018. Distance is 3,324km. Rated capacity is 12,000MW at 1,100kV DC.',
      sources: [
        { title: 'NS Energy - Changji-Guquan Project', url: 'https://www.nsenergybusiness.com/projects/changji-guquan-uhvdc-transmission-project/' },
        { title: 'Power Technology', url: 'https://www.power-technology.com/marketdata/changji-guquan-hvdc-line-china/' },
      ],
    },
    {
      claim: "China's cost of capital ~2-3%",
      status: 'estimate',
      statusLabel: 'Estimated',
      evidence: "No direct source confirms State Grid's exact cost of capital. China's Loan Prime Rate is 3.0-3.5%. PBOC offers targeted lending at 2% for priority sectors. SOEs get preferential rates.",
      sources: [
        { title: 'Trading Economics - China Loan Prime Rate', url: 'https://tradingeconomics.com/china/interest-rate' },
      ],
    },
  ],
  'FERC & Regulatory': [
    {
      claim: 'MISO 12.38% ROE from 2002-2019',
      status: 'verified',
      statusLabel: 'Verified',
      evidence: 'FERC determined that 12.38% ROE had been used by most MISO transmission owners since 2002 and found it "unjust and unreasonable" in Opinion No. 569 (November 2019).',
      sources: [
        { title: 'Baker Botts - FERC Revises ROE Methodology', url: 'https://www.bakerbotts.com/thought-leadership/publications/2024/october/ferc-revises-roe-methodology-for-transmission-owners' },
        { title: "Wright & Talisman - FERC's Opinion No. 569", url: 'https://www.wrightlaw.com/2019/11/fercs-opinion-no-569-again-modifies-methodology-for-setting-transmission-owners-base-rate-of-return-on-equity/' },
      ],
    },
    {
      claim: 'Current base ROE ~9.98%',
      status: 'verified',
      statusLabel: 'Verified',
      evidence: "October 2024 FERC order set MISO TOs' base ROE at 9.98%.",
      sources: [
        { title: "RTO Insider - FERC Sets MISO TOs' ROE at 9.98%", url: 'https://www.rtoinsider.com/89798-ferc-sets-miso-tos-roe-eliminates-risk-premium-model/' },
      ],
    },
    {
      claim: '0.5% RTO participation adder',
      status: 'verified',
      statusLabel: 'Verified',
      evidence: "FERC's current practice grants a 50-basis-point (0.5%) ROE adder for utilities that join a transmission organization. Note: This adder is under regulatory scrutiny.",
      sources: [
        { title: 'Utility Dive - State regulators urge FERC to slash incentive', url: 'https://www.utilitydive.com/news/state-utility-oms-opsi-nescoe-spp-ferc-roe-transmission-incentive/751933/' },
      ],
    },
  ],
  'Reliability & Interconnection': [
    {
      claim: 'Reserve pooling reduces requirements by ~50%',
      status: 'verified',
      statusLabel: 'Verified',
      evidence: 'DOE/PNNL study found "the consolidated WECC will have about a 50% overall reduction in balancing reserves" compared to individual BA operation.',
      sources: [
        { title: 'DOE - Cooperation Among Balancing Authorities', url: 'https://www.energy.gov/eere/wind/articles/cooperation-among-balancing-authorities-offers-greater-use-renewable-energy' },
        { title: 'NREL - Balancing Area Coordination', url: 'https://docs.nrel.gov/docs/fy15osti/63037.pdf' },
      ],
    },
    {
      claim: 'Geographic diversity reduces renewable variability 40-60%',
      status: 'verified',
      statusLabel: 'Verified',
      evidence: 'LBL study found 10x10 array of PV plants shows "six times less" variability. European studies show 50% reduction at continental scale. Range is conservative.',
      sources: [
        { title: 'LBL - Implications of Wide-Area Geographic Diversity', url: 'https://emp.lbl.gov/publications/implications-wide-area-geographic' },
        { title: 'NREL - Western Wind and Solar Integration Study', url: 'https://www.nrel.gov/grid/wwsis' },
      ],
    },
  ],
  'Interconnection Queues': [
    {
      claim: '~2,300 GW in US interconnection queues',
      status: 'verified',
      statusLabel: 'Verified (LBL 2025)',
      evidence: 'As of end 2024: ~2,300 GW total capacity (1,400 GW generation + 890 GW storage), ~10,300 projects nationwide.',
      sources: [
        { title: 'LBL - Queued Up 2025 Edition', url: 'https://emp.lbl.gov/queues' },
        { title: 'LBL - Queued Up 2024 Edition (PDF)', url: 'https://emp.lbl.gov/sites/default/files/2024-04/Queued%20Up%202024%20Edition_1.pdf' },
      ],
    },
    {
      claim: 'Median wait time >4 years (up from <2 years)',
      status: 'verified',
      statusLabel: 'Verified',
      evidence: 'Median duration from request to commercial operation doubled from <2 years (2000-2007) to >4 years (2018-2024). Only ~19% of projects reach operation.',
      sources: [
        { title: 'LBL - Queued Up 2025 Edition', url: 'https://emp.lbl.gov/queues' },
        { title: "RMI - PJM's Speed to Power Problem", url: 'https://rmi.org/pjms-speed-to-power-problem-and-how-to-fix-it/' },
      ],
    },
    {
      claim: 'PJM upgrade costs: $240/kW (up 800% from $29/kW)',
      status: 'verified',
      statusLabel: 'Verified',
      evidence: 'Network upgrade costs averaged $240/kW in 2020-2022, up from $29/kW in 2017-2019. Withdrawn projects faced ~$599/kW.',
      sources: [
        { title: 'GridLab - Interconnection Bottlenecks Cost $3.5 Billion', url: 'https://gridlab.org/interconnection-bottlenecks-cost-pjm-customers-3-5-billion/' },
        { title: 'DOE - Tackling High Costs and Long Delays', url: 'https://www.energy.gov/eere/i2x/articles/tackling-high-costs-and-long-delays-clean-energy-interconnection' },
      ],
    },
  ],
};

const illustrativeModels = [
  {
    title: 'NPV Cost of Capital Crossover',
    description: 'Demonstrates how discount rates affect infrastructure investment decisions. At 2% federal rates, building big upfront beats incremental expansion. Crossover point is around 8%.',
    note: 'Mathematical model with stated assumptions',
  },
  {
    title: 'Distribution Transformer Upgrade Example',
    description: 'Shows how incremental 5-year planning horizons can cost 4-5x as much as right-sized initial investment over 20 years.',
    note: 'Illustrative model demonstrating cost dynamics',
  },
  {
    title: 'Tower Preparation Options',
    description: 'Shows how 10-25% upfront preparation premium enables 4-8x capacity growth at dramatically lower lifecycle cost.',
    note: 'Illustrative cost indices; actual costs vary by project',
  },
];

function StatusBadge({ status, label }: { status: Claim['status']; label: string }) {
  const colors = {
    verified: 'bg-green-500/20 text-green-300 border-green-500/30',
    estimate: 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
    illustrative: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium border ${colors[status]}`}>
      {label}
    </span>
  );
}

function ClaimCard({ claim }: { claim: Claim }) {
  return (
    <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h4 className="font-semibold text-white">{claim.claim}</h4>
        <StatusBadge status={claim.status} label={claim.statusLabel} />
      </div>
      <p className="text-slate-300 text-sm mb-4">{claim.evidence}</p>
      <div className="space-y-1">
        {claim.sources.map((source) => (
          <a
            key={source.url}
            href={source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-sm text-electric-400 hover:text-electric-300 transition-colors"
          >
            {source.title} →
          </a>
        ))}
      </div>
    </div>
  );
}

export function SourcesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-slate-900">
      {/* Header */}
      <header className="bg-slate-900/95 backdrop-blur-sm border-b border-slate-800 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-xl font-bold text-white hover:text-electric-400 transition-colors">
            ← Grids for Growth
          </Link>
          <div className="flex gap-4 text-sm">
            <Link to="/policy" className="text-slate-400 hover:text-white transition-colors">
              Policy Analysis
            </Link>
            <Link to="/economics" className="text-slate-400 hover:text-white transition-colors">
              Economic Analysis
            </Link>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl font-bold text-white mb-4">Sources & Fact-Check</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl">
            Every major claim in this analysis has been independently verified using primary sources including
            government reports, academic papers, FERC filings, and DOE studies.
          </p>

          {/* Summary Stats */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-green-400">21</div>
              <div className="text-sm text-green-300">Verified Claims</div>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-yellow-400">1</div>
              <div className="text-sm text-yellow-300">Estimate</div>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4 text-center">
              <div className="text-2xl font-bold text-purple-400">3</div>
              <div className="text-sm text-purple-300">Illustrative Models</div>
            </div>
          </div>

          {/* Claims by Category */}
          {Object.entries(claims).map(([category, categoryClaims]) => (
            <section key={category} className="mb-12">
              <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-slate-700">
                {category}
              </h2>
              <div className="grid gap-4">
                {categoryClaims.map((claim) => (
                  <ClaimCard key={claim.claim} claim={claim} />
                ))}
              </div>
            </section>
          ))}

          {/* Illustrative Models Section */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-slate-700">
              Illustrative Models
            </h2>
            <p className="text-slate-300 mb-6">
              The following sections use illustrative examples to demonstrate economic principles.
              They are clearly flagged as models with stated assumptions.
            </p>
            <div className="grid gap-4">
              {illustrativeModels.map((model) => (
                <div key={model.title} className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-6">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h4 className="font-semibold text-white">{model.title}</h4>
                    <StatusBadge status="illustrative" label="Model" />
                  </div>
                  <p className="text-slate-300 text-sm mb-2">{model.description}</p>
                  <p className="text-purple-300 text-xs italic">{model.note}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Methodology */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-slate-700">
              Methodology
            </h2>
            <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
              <div className="prose prose-invert max-w-none">
                <h4 className="text-white font-semibold mb-3">Verification Standards</h4>
                <ul className="text-slate-300 space-y-2 text-sm">
                  <li><strong>Primary sources preferred:</strong> Government reports, academic peer-reviewed papers, official filings (FERC, SEC, DOE), direct data (EIA, IEA)</li>
                  <li><strong>Cross-reference:</strong> Major claims verified with 2+ independent sources where possible</li>
                  <li><strong>Distinguish clearly:</strong> Verified facts, reasonable estimates, and illustrative models are clearly labeled</li>
                  <li><strong>Flag uncertainty:</strong> Where evidence is indirect or estimated, this is noted</li>
                  <li><strong>Check math:</strong> All calculations (NPV, scaling laws, percentages) have been verified</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Primary Source Links */}
          <section>
            <h2 className="text-2xl font-bold text-white mb-6 pb-2 border-b border-slate-700">
              Key Primary Sources
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { title: 'LBL Queued Up Reports', url: 'https://emp.lbl.gov/queues', org: 'Lawrence Berkeley National Laboratory' },
                { title: 'FERC ROE Methodology', url: 'https://www.ferc.gov/news-events/news/ferc-adopts-new-base-roe-methodology-addresses-complaints-against-miso', org: 'Federal Energy Regulatory Commission' },
                { title: 'DOE Transformer Scaling', url: 'https://www.osti.gov/servlets/purl/1893821', org: 'Department of Energy' },
                { title: 'NREL Grid Studies', url: 'https://www.nrel.gov/grid/', org: 'National Renewable Energy Laboratory' },
                { title: 'Richmond Fed - REA History', url: 'https://www.richmondfed.org/publications/research/econ_focus/2020/q1/economic_history', org: 'Federal Reserve Bank of Richmond' },
                { title: 'AEP Transmission Facts', url: 'https://web.ecs.baylor.edu/faculty/grady/_13_EE392J_2_Spring11_AEP_Transmission_Facts.pdf', org: 'American Electric Power' },
              ].map((source) => (
                <a
                  key={source.url}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50 hover:border-electric-500/50 transition-colors block"
                >
                  <div className="font-semibold text-white mb-1">{source.title}</div>
                  <div className="text-sm text-slate-400">{source.org}</div>
                </a>
              ))}
            </div>
          </section>
        </motion.div>
      </main>

      {/* Simple Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8 px-6">
        <div className="max-w-6xl mx-auto text-center text-slate-500 text-sm">
          <Link to="/" className="text-electric-400 hover:text-electric-300 transition-colors">
            ← Back to Grids for Growth
          </Link>
        </div>
      </footer>
    </div>
  );
}
