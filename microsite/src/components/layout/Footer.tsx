import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 px-6">
      <div className="max-w-content mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <h4 className="text-lg font-semibold mb-4">Grids for Growth</h4>
            <p className="text-slate-400 text-sm leading-relaxed">
              An economic analysis of proactive federal investment in electricity
              grid infrastructure.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Documentation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/sources"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  Sources & Fact-Check
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/NathanDIyer/Grid_For_Growth"
                  className="text-slate-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Further Reading</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.richmondfed.org/publications/research/econ_focus/2020/q1/economic_history"
                  className="text-slate-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Rural Electrification Administration History
                </a>
              </li>
              <li>
                <a
                  href="https://www.osti.gov/servlets/purl/1893821"
                  className="text-slate-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Transformer Scaling Laws & Cost Analysis
                </a>
              </li>
              <li>
                <a
                  href="https://rmi.org/pjms-speed-to-power-problem-and-how-to-fix-it/"
                  className="text-slate-400 hover:text-white transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Grid Planning Best Practices
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8 text-center text-slate-500 text-sm">
          <p>
            Analysis based on publicly available economic research and historical data.
          </p>
        </div>
      </div>
    </footer>
  );
}
