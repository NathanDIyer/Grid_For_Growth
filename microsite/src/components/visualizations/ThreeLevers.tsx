import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

const levers = [
  {
    number: 1,
    title: 'Low-Cost Capital',
    description: 'Federal lending at 2% vs private 8%',
    impact: 'Changes optimal investment timing',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.41 16.09V20h-2.67v-1.93c-1.71-.36-3.16-1.46-3.27-3.4h1.96c.1 1.05.82 1.87 2.65 1.87 1.96 0 2.4-.98 2.4-1.59 0-.83-.44-1.61-2.67-2.14-2.48-.6-4.18-1.62-4.18-3.67 0-1.72 1.39-2.84 3.11-3.21V4h2.67v1.95c1.86.45 2.79 1.86 2.85 3.39H14.3c-.05-1.11-.64-1.87-2.22-1.87-1.5 0-2.4.68-2.4 1.64 0 .84.65 1.39 2.67 1.91s4.18 1.39 4.18 3.91c-.01 1.83-1.38 2.83-3.12 3.16z"/>
      </svg>
    ),
    color: 'electric'
  },
  {
    number: 2,
    title: 'Preparation Delta',
    description: '25% upfront premium enables 8x capacity',
    impact: 'Leverage ratio: 3-5x return',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
      </svg>
    ),
    color: 'transmission'
  },
  {
    number: 3,
    title: 'Right-Sizing Grants',
    description: '20% grant shifts planning paradigm',
    impact: 'Eliminates conservative bias',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8" fill="currentColor">
        <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
      </svg>
    ),
    color: 'grid'
  }
];

const colorClasses = {
  electric: {
    bg: 'bg-electric-50',
    border: 'border-electric',
    text: 'text-electric',
    icon: 'text-electric'
  },
  transmission: {
    bg: 'bg-transmission-50',
    border: 'border-transmission',
    text: 'text-transmission',
    icon: 'text-transmission'
  },
  grid: {
    bg: 'bg-grid-50',
    border: 'border-grid',
    text: 'text-grid',
    icon: 'text-grid'
  }
};

export function ThreeLevers() {
  const { ref, isInView } = useInView({ threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
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
      <div className="space-y-6">
        {levers.map((lever) => {
          const colors = colorClasses[lever.color as keyof typeof colorClasses];
          return (
            <motion.div
              key={lever.number}
              variants={itemVariants}
              className={`${colors.bg} rounded-2xl p-6 border-l-4 ${colors.border}`}
            >
              <div className="flex items-start gap-6">
                {/* Number badge */}
                <div className={`flex-shrink-0 w-12 h-12 rounded-full bg-white ${colors.border} border-2 flex items-center justify-center`}>
                  <span className={`text-xl font-bold ${colors.text}`}>
                    {lever.number}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <div className={colors.icon}>
                      {lever.icon}
                    </div>
                    <h4 className="text-xl font-semibold text-slate-900">
                      {lever.title}
                    </h4>
                  </div>
                  <p className="text-slate-600 mb-3">
                    {lever.description}
                  </p>
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${colors.bg} ${colors.text} border ${colors.border}`}>
                    {lever.impact}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Combined impact */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mt-8 text-center"
      >
        <div className="inline-flex items-center gap-4 bg-slate-900 text-white rounded-2xl px-8 py-5">
          <span className="text-slate-300">Combined federal leverage:</span>
          <span className="text-4xl font-bold text-transmission">3-5x</span>
          <span className="text-slate-300">return per dollar invested</span>
        </div>
      </motion.div>
    </motion.div>
  );
}
