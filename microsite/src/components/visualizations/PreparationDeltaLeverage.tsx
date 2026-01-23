import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

const expansionSteps = [
  {
    label: 'Initial Build',
    description: '345kV single circuit',
    multiplier: '1×',
    capacity: '400 MW',
    color: 'bg-slate-400',
    textColor: 'text-slate-700'
  },
  {
    label: '+ Voltage Upgrade',
    description: 'Upgrade to 500kV (towers ready)',
    multiplier: '2×',
    capacity: '800 MW',
    color: 'bg-transmission',
    textColor: 'text-transmission'
  },
  {
    label: '+ Double Circuit',
    description: 'Add second circuit to same towers',
    multiplier: '2×',
    capacity: '1,600 MW',
    color: 'bg-electric',
    textColor: 'text-electric'
  },
  {
    label: '+ Reconductoring',
    description: 'Advanced conductors double current',
    multiplier: '2×',
    capacity: '3,200 MW',
    color: 'bg-grid',
    textColor: 'text-grid'
  }
];

export function PreparationDeltaLeverage() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="w-full"
    >
      {/* Main concept */}
      <motion.div variants={itemVariants} className="mb-8">
        <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-slate-800 mb-2">
                The Preparation Strategy
              </h4>
              <p className="text-slate-600">
                Build 345kV today, but with <span className="font-semibold text-electric">500kV-capable towers</span> and
                <span className="font-semibold text-transmission"> double-circuit rights-of-way</span>.
                The 25% upfront premium unlocks 8× capacity potential through three future upgrades.
              </p>
            </div>
            <div className="flex items-center gap-2 text-2xl font-bold text-slate-400">
              <span>2</span>
              <span>×</span>
              <span>2</span>
              <span>×</span>
              <span>2</span>
              <span>=</span>
              <span className="text-electric text-3xl">8×</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Expansion pathway */}
      <div className="space-y-4">
        {expansionSteps.map((step, index) => (
          <motion.div
            key={step.label}
            variants={itemVariants}
            className="relative"
          >
            <div className={`rounded-xl p-5 border ${index === 0 ? 'bg-slate-50 border-slate-200' : 'bg-white border-slate-200'}`}>
              <div className="flex items-center gap-6">
                {/* Capacity bar */}
                <div className="w-32 flex-shrink-0">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '100%' } : { width: 0 }}
                    transition={{ delay: 0.3 + index * 0.2, duration: 0.6 }}
                    className="h-8 rounded-lg overflow-hidden bg-slate-100"
                  >
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${((index + 1) / 4) * 100}%` } : { width: 0 }}
                      transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
                      className={`h-full ${step.color} rounded-lg`}
                    />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-1">
                    <span className={`font-semibold ${step.textColor}`}>{step.label}</span>
                    {index > 0 && (
                      <span className={`text-sm px-2 py-0.5 rounded-full ${step.color} text-white font-medium`}>
                        {step.multiplier}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-slate-500">{step.description}</p>
                </div>

                {/* Capacity */}
                <div className="text-right flex-shrink-0">
                  <div className={`text-xl font-bold ${step.textColor}`}>{step.capacity}</div>
                  <div className="text-xs text-slate-400">capacity</div>
                </div>
              </div>
            </div>

            {/* Connector arrow */}
            {index < expansionSteps.length - 1 && (
              <div className="absolute left-16 -bottom-2 z-10">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.6 + index * 0.2 }}
                  className="text-slate-300"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 16l-6-6h12z" />
                  </svg>
                </motion.div>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Key insight */}
      <motion.div variants={itemVariants} className="mt-8">
        <div className="bg-gradient-to-r from-electric-50 to-grid-50 rounded-2xl p-6 border border-electric-200">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h5 className="font-semibold text-slate-800 mb-2">Today's Investment</h5>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Oversized tower foundations</li>
                <li>• Wider rights-of-way</li>
                <li>• 500kV-rated insulators & clearances</li>
                <li>• Double-circuit tower design</li>
              </ul>
              <div className="mt-3 text-lg font-bold text-electric">+25% premium</div>
            </div>
            <div>
              <h5 className="font-semibold text-slate-800 mb-2">Future Flexibility</h5>
              <ul className="text-sm text-slate-600 space-y-1">
                <li>• Add capacity without new permitting</li>
                <li>• Expand as demand materializes</li>
                <li>• Avoid stranded assets if growth is slower</li>
                <li>• 80% lower cost per MW at full build-out</li>
              </ul>
              <div className="mt-3 text-lg font-bold text-grid">8× capacity potential</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Final callout */}
      <motion.div
        variants={itemVariants}
        className="mt-6 text-center"
      >
        <div className="inline-flex items-center gap-4 bg-slate-900 text-white rounded-2xl px-8 py-4">
          <span className="text-slate-300">Bird in hand:</span>
          <span className="font-semibold">345kV for the next 5 years</span>
          <span className="text-slate-500">|</span>
          <span className="text-slate-300">Ready for:</span>
          <span className="font-bold text-electric">8× growth</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
