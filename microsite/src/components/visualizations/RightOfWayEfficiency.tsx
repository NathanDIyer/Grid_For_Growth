import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

// Data showing ROW efficiency by voltage class
// Higher voltage = dramatically less land per MW
const voltageData = [
  {
    voltage: '138kV',
    capacity: 200,
    rowWidth: 100, // feet
    landPerMW: 0.50, // relative
    color: 'bg-slate-400',
    textColor: 'text-slate-600'
  },
  {
    voltage: '230kV',
    capacity: 400,
    rowWidth: 125,
    landPerMW: 0.31,
    color: 'bg-slate-500',
    textColor: 'text-slate-700'
  },
  {
    voltage: '345kV',
    capacity: 900,
    rowWidth: 150,
    landPerMW: 0.17,
    color: 'bg-transmission',
    textColor: 'text-transmission'
  },
  {
    voltage: '500kV',
    capacity: 2000,
    rowWidth: 175,
    landPerMW: 0.09,
    color: 'bg-electric',
    textColor: 'text-electric'
  },
  {
    voltage: '765kV',
    capacity: 2400,
    rowWidth: 200,
    landPerMW: 0.083,
    color: 'bg-grid',
    textColor: 'text-grid'
  }
];

export function RightOfWayEfficiency() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
  };

  const maxLandPerMW = Math.max(...voltageData.map(d => d.landPerMW));

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="w-full"
    >
      {/* Key insight */}
      <motion.div variants={itemVariants} className="mb-8">
        <div className="bg-gradient-to-r from-grid-50 to-electric-50 rounded-2xl p-6 border border-grid-200">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-slate-800 mb-2">
                Higher Voltage = Less Land per MW
              </h4>
              <p className="text-slate-600">
                A 765kV line uses <span className="font-bold text-grid">~6× less land per MW</span> than 138kV.
                Building high-voltage backbones means moving more power through less corridor—reducing
                environmental impact while serving entire regions.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-grid">~6×</div>
              <div className="text-sm text-slate-500">land efficiency</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Voltage comparison */}
      <div className="space-y-3">
        {voltageData.map((item, index) => (
          <motion.div
            key={item.voltage}
            variants={itemVariants}
            className="bg-white rounded-xl p-4 border border-slate-200"
          >
            <div className="flex items-center gap-4">
              {/* Voltage label */}
              <div className={`w-20 font-bold ${item.textColor}`}>
                {item.voltage}
              </div>

              {/* Capacity */}
              <div className="w-24 text-sm text-slate-500">
                {item.capacity.toLocaleString()} MW
              </div>

              {/* Land per MW bar (inverted - smaller is better) */}
              <div className="flex-1">
                <div className="flex items-center gap-3">
                  <div className="text-xs text-slate-400 w-24">Land per MW:</div>
                  <div className="flex-1 h-6 bg-slate-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${(item.landPerMW / maxLandPerMW) * 100}%` } : { width: 0 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                      className={`h-full ${item.color} rounded-full`}
                    />
                  </div>
                </div>
              </div>

              {/* Efficiency badge */}
              {index === voltageData.length - 1 && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 1, duration: 0.3 }}
                  className="bg-grid text-white text-xs font-bold px-3 py-1 rounded-full"
                >
                  Most efficient
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* US grid facts */}
      <motion.div variants={itemVariants} className="mt-8">
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-slate-50 rounded-xl p-5 text-center border border-slate-200">
            <div className="text-2xl font-bold text-slate-700 mb-1">&lt;3%</div>
            <div className="text-sm text-slate-500">of US transmission is 500kV+</div>
          </div>
          <div className="bg-electric-50 rounded-xl p-5 text-center border border-electric-200">
            <div className="text-2xl font-bold text-electric mb-1">~80%</div>
            <div className="text-sm text-slate-500">is 230kV or lower</div>
          </div>
          <div className="bg-grid-50 rounded-xl p-5 text-center border border-grid-200">
            <div className="text-2xl font-bold text-grid mb-1">Opportunity</div>
            <div className="text-sm text-slate-500">High-voltage backbones</div>
          </div>
        </div>
      </motion.div>

      {/* Growth message */}
      <motion.div
        variants={itemVariants}
        className="mt-6 text-center"
      >
        <div className="inline-block bg-slate-900 text-white rounded-2xl px-8 py-4">
          <p className="text-slate-300">
            <span className="font-semibold text-white">Build big once:</span>{' '}
            Regional backbones with headroom mean new loads just connect—no delays, no zero-sum cost allocation fights.
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}
