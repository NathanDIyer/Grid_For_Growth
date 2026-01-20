import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

interface StatCalloutProps {
  value: string;
  label: string;
  color?: 'electric' | 'transmission' | 'grid' | 'congestion';
  size?: 'default' | 'large';
}

export function StatCallout({
  value,
  label,
  color = 'electric',
  size = 'default'
}: StatCalloutProps) {
  const { ref, isInView } = useInView({ threshold: 0.3 });

  const colorClasses = {
    electric: 'text-electric',
    transmission: 'text-transmission',
    grid: 'text-grid',
    congestion: 'text-congestion'
  };

  const sizeClasses = {
    default: 'text-5xl md:text-6xl',
    large: 'text-6xl md:text-7xl lg:text-stat'
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="text-center py-8"
    >
      <div className={`font-bold leading-none mb-3 ${sizeClasses[size]} ${colorClasses[color]}`}>
        {value}
      </div>
      <div className="text-lg md:text-xl text-slate-600 max-w-md mx-auto">
        {label}
      </div>
    </motion.div>
  );
}
