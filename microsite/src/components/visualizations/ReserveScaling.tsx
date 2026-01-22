import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { RESERVE_SCALING } from '../../data/constants';

export function ReserveScaling() {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  // Generate region circles based on count
  const renderRegions = (count: number) => {
    const positions = [
      [{ cx: 50, cy: 50 }],
      [{ cx: 35, cy: 50 }, { cx: 65, cy: 50 }],
      [
        { cx: 35, cy: 35 },
        { cx: 65, cy: 35 },
        { cx: 35, cy: 65 },
        { cx: 65, cy: 65 }
      ]
    ];

    const pos = positions[count - 1] || positions[2];

    return (
      <svg viewBox="0 0 100 100" className="w-full h-full">
        {/* Connection lines for multiple regions */}
        {count > 1 && (
          <g stroke="#2563EB" strokeWidth="2" opacity="0.3">
            {count >= 2 && <line x1="35" y1="50" x2="65" y2="50" />}
            {count === 4 && (
              <>
                <line x1="35" y1="35" x2="35" y2="65" />
                <line x1="65" y1="35" x2="65" y2="65" />
                <line x1="35" y1="35" x2="65" y2="35" />
                <line x1="35" y1="65" x2="65" y2="65" />
                <line x1="35" y1="35" x2="65" y2="65" />
                <line x1="65" y1="35" x2="35" y2="65" />
              </>
            )}
          </g>
        )}
        {/* Region circles */}
        {pos.map((p, i) => (
          <motion.circle
            key={i}
            cx={p.cx}
            cy={p.cy}
            r="12"
            fill="#2563EB"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : { scale: 0 }}
            transition={{ delay: 0.5 + i * 0.15, duration: 0.3 }}
          />
        ))}
      </svg>
    );
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="w-full"
    >
      <div className="grid md:grid-cols-3 gap-6">
        {RESERVE_SCALING.map((item, index) => (
          <motion.div
            key={item.regions}
            variants={itemVariants}
            className="bg-white rounded-2xl p-6 border border-slate-200 text-center"
          >
            <div className="w-24 h-24 mx-auto mb-4">
              {renderRegions(item.regions)}
            </div>

            <h4 className="text-lg font-semibold text-slate-700 mb-2">
              {item.label}
            </h4>

            <div className="mb-4">
              <motion.div
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : { width: 0 }}
                transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                className="h-3 bg-slate-100 rounded-full overflow-hidden"
              >
                <motion.div
                  initial={{ width: 0 }}
                  animate={isInView ? { width: `${item.reserve_pct / 15 * 100}%` } : { width: 0 }}
                  transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                  className="h-full bg-electric rounded-full"
                />
              </motion.div>
            </div>

            <div className="text-3xl font-bold text-electric mb-1">
              {item.reserve_pct}%
            </div>
            <div className="text-sm text-slate-500">
              Required Reserves
            </div>
          </motion.div>
        ))}
      </div>

      {/* Formula explanation */}
      <motion.div
        variants={itemVariants}
        className="mt-8 text-center"
      >
        <div className="inline-block bg-gradient-to-br from-slate-50 to-white rounded-2xl px-10 py-6 border border-slate-200 shadow-sm">
          <div className="text-sm font-medium text-electric uppercase tracking-wider mb-4">
            Reserve Scaling Law
          </div>
          <div className="flex items-center justify-center gap-3 text-slate-800 mb-4">
            <span className="text-3xl italic" style={{ fontFamily: 'Georgia, serif' }}>R</span>
            <span className="text-2xl text-slate-400 mx-2">∝</span>
            <div className="flex flex-col items-center">
              <span className="text-2xl border-b-2 border-slate-400 px-3 pb-1">1</span>
              <span className="text-2xl px-3 pt-1">√<span className="italic" style={{ fontFamily: 'Georgia, serif' }}>n</span></span>
            </div>
          </div>
          <div className="text-slate-500 text-sm">
            where <span className="italic" style={{ fontFamily: 'Georgia, serif' }}>R</span> = reserve requirement and{' '}
            <span className="italic" style={{ fontFamily: 'Georgia, serif' }}>n</span> = interconnected regions
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
