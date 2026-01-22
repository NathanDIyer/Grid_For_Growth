import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { CASCADING_COSTS, PROACTIVE_COST, CHART_COLORS } from '../../data/constants';

export function CascadingCostWaterfall() {
  const svgRef = useRef<SVGSVGElement>(null);
  const { ref, isInView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (!svgRef.current || !isInView) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const margin = { top: 40, right: 40, bottom: 80, left: 70 };
    const width = 700 - margin.left - margin.right;
    const height = 420 - margin.top - margin.bottom;

    const g = svg
      .attr('viewBox', `0 0 700 420`)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const finalCost = CASCADING_COSTS[CASCADING_COSTS.length - 1].cumulative;

    // Scales
    const x = d3
      .scaleBand()
      .domain(CASCADING_COSTS.map((d) => `Year ${d.year}`).concat(['Build with\nHeadroom']))
      .range([0, width])
      .padding(0.25);

    const y = d3
      .scaleLinear()
      .domain([0, 800])
      .range([height, 0]);

    // Grid lines
    g.append('g')
      .attr('class', 'grid')
      .selectAll('line')
      .data(y.ticks(8))
      .enter()
      .append('line')
      .attr('x1', 0)
      .attr('x2', width)
      .attr('y1', (d) => y(d))
      .attr('y2', (d) => y(d))
      .attr('stroke', CHART_COLORS.grid)
      .attr('stroke-dasharray', '4,4');

    // X axis
    const xAxis = g.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));

    xAxis.selectAll('text')
      .attr('class', 'fill-slate-600 text-sm')
      .style('text-anchor', 'middle');

    // Y axis
    g.append('g')
      .call(d3.axisLeft(y).tickFormat((d) => `$${d}M`))
      .selectAll('text')
      .attr('class', 'fill-slate-600 text-sm');

    // Y axis label
    g.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', -55)
      .attr('x', -height / 2)
      .attr('text-anchor', 'middle')
      .attr('class', 'fill-slate-500 text-sm')
      .text('Lifecycle Cost');

    // Cascading bars (incremental costs stacking)
    let cumulative = 0;
    CASCADING_COSTS.forEach((d, i) => {
      const bar = g.append('rect')
        .attr('x', x(`Year ${d.year}`)!)
        .attr('width', x.bandwidth())
        .attr('y', height)
        .attr('height', 0)
        .attr('fill', CHART_COLORS.warning)
        .attr('rx', 4);

      bar.transition()
        .delay(i * 200)
        .duration(600)
        .attr('y', y(cumulative + d.cost))
        .attr('height', y(cumulative) - y(cumulative + d.cost));

      // Cumulative line point
      if (i > 0) {
        g.append('circle')
          .attr('cx', x(`Year ${d.year}`)! + x.bandwidth() / 2)
          .attr('cy', y(d.cumulative))
          .attr('r', 0)
          .attr('fill', CHART_COLORS.warning)
          .transition()
          .delay(i * 200 + 300)
          .duration(300)
          .attr('r', 6);
      }

      cumulative += d.cost;
    });

    // Cumulative total label
    g.append('text')
      .attr('x', x('Year 40')! + x.bandwidth() / 2)
      .attr('y', y(finalCost) - 15)
      .attr('text-anchor', 'middle')
      .attr('class', 'text-lg font-bold')
      .attr('fill', CHART_COLORS.warning)
      .attr('opacity', 0)
      .text(`$${finalCost}M total`)
      .transition()
      .delay(1200)
      .duration(400)
      .attr('opacity', 1);

    // Build with Headroom bar
    const headroomBar = g.append('rect')
      .attr('x', x('Build with\nHeadroom')!)
      .attr('width', x.bandwidth())
      .attr('y', height)
      .attr('height', 0)
      .attr('fill', CHART_COLORS.success)
      .attr('rx', 4);

    headroomBar.transition()
      .delay(1400)
      .duration(600)
      .attr('y', y(PROACTIVE_COST))
      .attr('height', height - y(PROACTIVE_COST));

    // Headroom label
    g.append('text')
      .attr('x', x('Build with\nHeadroom')! + x.bandwidth() / 2)
      .attr('y', y(PROACTIVE_COST) - 15)
      .attr('text-anchor', 'middle')
      .attr('class', 'text-lg font-bold')
      .attr('fill', CHART_COLORS.success)
      .attr('opacity', 0)
      .text(`$${PROACTIVE_COST}M`)
      .transition()
      .delay(1800)
      .duration(400)
      .attr('opacity', 1);

    // Savings annotation
    const savingsRatio = (finalCost / PROACTIVE_COST).toFixed(1);
    const savingsY = y(400);
    g.append('line')
      .attr('x1', x('Year 40')! + x.bandwidth() + 10)
      .attr('x2', x('Build with\nHeadroom')! - 10)
      .attr('y1', savingsY)
      .attr('y2', savingsY)
      .attr('stroke', CHART_COLORS.primary)
      .attr('stroke-width', 2)
      .attr('stroke-dasharray', '6,4')
      .attr('opacity', 0)
      .transition()
      .delay(2000)
      .duration(400)
      .attr('opacity', 1);

    g.append('text')
      .attr('x', (x('Year 40')! + x.bandwidth() + x('Build with\nHeadroom')!) / 2)
      .attr('y', savingsY - 10)
      .attr('text-anchor', 'middle')
      .attr('class', 'text-sm font-semibold')
      .attr('fill', CHART_COLORS.primary)
      .attr('opacity', 0)
      .text(`${savingsRatio}× savings`)
      .transition()
      .delay(2200)
      .duration(400)
      .attr('opacity', 1);

    // Timeline annotation
    g.append('text')
      .attr('x', width / 2 - 60)
      .attr('y', height + 55)
      .attr('text-anchor', 'middle')
      .attr('class', 'text-xs')
      .attr('fill', CHART_COLORS.muted)
      .attr('opacity', 0)
      .text('40-year transmission line lifecycle')
      .transition()
      .delay(2400)
      .duration(400)
      .attr('opacity', 1);

  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full"
    >
      <svg ref={svgRef} className="w-full h-auto" />
    </motion.div>
  );
}
