import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { PREPARATION_DELTA } from '../../data/constants';

export function PreparationDeltaLeverage() {
  const { ref, isInView } = useInView({ threshold: 0.3 });
  const { base, full_prep } = PREPARATION_DELTA;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="w-full"
    >
      <div className="grid md:grid-cols-2 gap-8">
        {/* Base Approach */}
        <motion.div
          variants={itemVariants}
          className="bg-slate-50 rounded-2xl p-8 border border-slate-200"
        >
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold text-slate-700 mb-2">
              Standard Approach
            </h4>
            <p className="text-sm text-slate-500">
              Minimal upfront preparation
            </p>
          </div>

          {/* Visual tower representation */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <motion.div
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                style={{ originY: 1 }}
                className="w-24 h-32 bg-slate-400 rounded-t-lg"
              />
              <div className="w-32 h-4 bg-slate-500 rounded -mx-4" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Initial Cost</span>
              <span className="font-bold text-slate-900">${base.initial}M</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Capacity</span>
              <span className="font-bold text-slate-900">{base.capacity_mult}x</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-600">Expansion Cost</span>
              <span className="font-bold text-congestion">${base.expansion}M</span>
            </div>
            <div className="border-t border-slate-200 pt-4 flex justify-between items-center">
              <span className="text-slate-700 font-medium">Lifecycle Total</span>
              <span className="font-bold text-xl text-congestion">${base.lifecycle}M</span>
            </div>
            <div className="bg-congestion-50 rounded-lg p-3 text-center">
              <span className="text-congestion font-bold text-lg">
                ${base.per_mw}/MW
              </span>
            </div>
          </div>
        </motion.div>

        {/* Full Preparation Approach */}
        <motion.div
          variants={itemVariants}
          className="bg-electric-50 rounded-2xl p-8 border-2 border-electric"
        >
          <div className="text-center mb-6">
            <h4 className="text-lg font-semibold text-electric-700 mb-2">
              Full Preparation
            </h4>
            <p className="text-sm text-electric-600">
              25% upfront premium
            </p>
          </div>

          {/* Visual tower representation - larger */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <motion.div
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                style={{ originY: 1 }}
                className="w-24 h-48 bg-electric rounded-t-lg"
              />
              <div className="w-32 h-4 bg-electric-700 rounded -mx-4" />
              {/* Capacity badge */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: 1.4, duration: 0.3 }}
                className="absolute -right-8 top-4 bg-transmission text-white text-xs font-bold px-2 py-1 rounded"
              >
                8x capacity
              </motion.div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-electric-700">Initial Cost</span>
              <span className="font-bold text-electric-900">${full_prep.initial}M</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-electric-700">Capacity</span>
              <span className="font-bold text-electric-900">{full_prep.capacity_mult}x</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-electric-700">Expansion Cost</span>
              <span className="font-bold text-grid">${full_prep.expansion}M</span>
            </div>
            <div className="border-t border-electric-200 pt-4 flex justify-between items-center">
              <span className="text-electric-800 font-medium">Lifecycle Total</span>
              <span className="font-bold text-xl text-grid">${full_prep.lifecycle}M</span>
            </div>
            <div className="bg-grid-50 rounded-lg p-3 text-center">
              <span className="text-grid-700 font-bold text-lg">
                ${full_prep.per_mw}/MW
              </span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Savings callout */}
      <motion.div
        variants={itemVariants}
        className="mt-8 text-center"
      >
        <div className="inline-flex items-center gap-4 bg-grid-50 rounded-full px-8 py-4 border border-grid-200">
          <span className="text-grid-700 font-medium">Cost Reduction:</span>
          <span className="text-3xl font-bold text-grid">92%</span>
          <span className="text-slate-500">per MW of capacity</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
