import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

interface TableRow {
  country: string;
  capital_cost: number;
  growth_rate: number;
  model: string;
  highlight?: boolean;
}

interface ComparisonTableProps {
  data: TableRow[];
}

export function ComparisonTable({ data }: ComparisonTableProps) {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  return (
    <div ref={ref} className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b-2 border-slate-200">
            <th className="text-left py-4 px-4 text-label text-slate-500 font-medium">
              Country
            </th>
            <th className="text-right py-4 px-4 text-label text-slate-500 font-medium">
              Cost of Capital
            </th>
            <th className="text-right py-4 px-4 text-label text-slate-500 font-medium">
              Grid Growth
            </th>
            <th className="text-left py-4 px-4 text-label text-slate-500 font-medium">
              Model
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <motion.tr
              key={row.country}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className={`border-b border-slate-100 ${
                row.highlight ? 'bg-electric-50' : ''
              }`}
            >
              <td className="py-4 px-4 font-medium text-slate-900">
                {row.country}
              </td>
              <td className="py-4 px-4 text-right">
                <span className={row.capital_cost <= 3 ? 'text-grid font-semibold' : 'text-congestion'}>
                  {row.capital_cost}%
                </span>
              </td>
              <td className="py-4 px-4 text-right">
                <span className={row.growth_rate >= 5 ? 'text-grid font-semibold' : 'text-slate-600'}>
                  {row.growth_rate}%/year
                </span>
              </td>
              <td className="py-4 px-4 text-slate-600">
                {row.model}
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
