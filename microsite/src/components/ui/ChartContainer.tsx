import type { ReactNode } from 'react';
import { ScrollReveal } from './ScrollReveal';

interface ChartContainerProps {
  title?: string;
  subtitle?: string;
  children: ReactNode;
  takeaway?: string;
  className?: string;
}

export function ChartContainer({
  title,
  subtitle,
  children,
  takeaway,
  className = ''
}: ChartContainerProps) {
  return (
    <div className={`chart-container my-16 ${className}`}>
      {(title || subtitle) && (
        <ScrollReveal className="text-center mb-8">
          {title && (
            <h3 className="text-h3 text-slate-900 font-semibold mb-2">
              {title}
            </h3>
          )}
          {subtitle && (
            <p className="text-body text-slate-600 max-w-prose mx-auto">
              {subtitle}
            </p>
          )}
        </ScrollReveal>
      )}

      <ScrollReveal delay={0.1}>
        <div className="chart-wrapper">
          {children}
        </div>
      </ScrollReveal>

      {takeaway && (
        <ScrollReveal delay={0.2} className="mt-6 text-center">
          <p className="text-lg text-slate-700 font-medium max-w-prose mx-auto">
            {takeaway}
          </p>
        </ScrollReveal>
      )}
    </div>
  );
}
