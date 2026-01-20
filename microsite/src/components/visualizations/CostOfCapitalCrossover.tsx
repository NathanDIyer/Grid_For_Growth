import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { COST_OF_CAPITAL_CROSSOVER, CHART_COLORS } from '../../data/constants';

export function CostOfCapitalCrossover() {
  const svgRef = useRef<SVGSVGElement>(null);
  const { ref, isInView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (!svgRef.current || !isInView) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const margin = { top: 40, right: 120, bottom: 80, left: 80 };
    const width = 700 - margin.left - margin.right;
    const height = 420 - margin.top - margin.bottom;

    const g = svg
      .attr('viewBox', `0 0 700 420`)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Scales
    const x = d3
      .scaleLinear()
      .domain([0.02, 0.10])
      .range([0, width]);

    const y = d3
      .scaleLinear()
      .domain([1.0, 2.0])
      .range([height, 0]);

    // Grid lines
    g.append('g')
      .attr('class', 'grid')
      .selectAll('line')
      .data(y.ticks(5))
      .enter()
      .append('line')
      .attr('x1', 0)
      .attr('x2', width)
      .attr('y1', (d) => y(d))
      .attr('y2', (d) => y(d))
      .attr('stroke', CHART_COLORS.grid)
      .attr('stroke-dasharray', '4,4');

    // X axis
    g.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(
        d3.axisBottom(x)
          .tickFormat((d) => `${(d as number * 100).toFixed(0)}%`)
          .ticks(5)
      )
      .selectAll('text')
      .attr('class', 'fill-slate-600 text-sm');

    g.append('text')
      .attr('x', width / 2)
      .attr('y', height + 50)
      .attr('text-anchor', 'middle')
      .attr('class', 'fill-slate-500 text-sm')
      .text('Discount Rate');

    // Y axis
    g.append('g')
      .call(
        d3.axisLeft(y)
          .tickFormat((d) => `$${d}B`)
      )
      .selectAll('text')
      .attr('class', 'fill-slate-600 text-sm');

    g.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', -60)
      .attr('x', -height / 2)
      .attr('text-anchor', 'middle')
      .attr('class', 'fill-slate-500 text-sm')
      .text('NPV of Total Cost');

    // Build Big line
    const buildBigLine = d3
      .line<typeof COST_OF_CAPITAL_CROSSOVER[0]>()
      .x((d) => x(d.rate))
      .y((d) => y(d.buildBigNPV))
      .curve(d3.curveMonotoneX);

    const buildBigPath = g.append('path')
      .datum(COST_OF_CAPITAL_CROSSOVER)
      .attr('fill', 'none')
      .attr('stroke', CHART_COLORS.success)
      .attr('stroke-width', 3)
      .attr('d', buildBigLine);

    const buildBigLength = buildBigPath.node()?.getTotalLength() || 0;
    buildBigPath
      .attr('stroke-dasharray', buildBigLength)
      .attr('stroke-dashoffset', buildBigLength)
      .transition()
      .duration(1200)
      .attr('stroke-dashoffset', 0);

    // Wait & Expand line
    const waitExpandLine = d3
      .line<typeof COST_OF_CAPITAL_CROSSOVER[0]>()
      .x((d) => x(d.rate))
      .y((d) => y(d.waitExpandNPV))
      .curve(d3.curveMonotoneX);

    const waitExpandPath = g.append('path')
      .datum(COST_OF_CAPITAL_CROSSOVER)
      .attr('fill', 'none')
      .attr('stroke', CHART_COLORS.warning)
      .attr('stroke-width', 3)
      .attr('d', waitExpandLine);

    const waitExpandLength = waitExpandPath.node()?.getTotalLength() || 0;
    waitExpandPath
      .attr('stroke-dasharray', waitExpandLength)
      .attr('stroke-dashoffset', waitExpandLength)
      .transition()
      .delay(200)
      .duration(1200)
      .attr('stroke-dashoffset', 0);

    // Crossover point (around 6%)
    const crossoverX = x(0.06);
    const crossoverY = y(1.35);

    g.append('circle')
      .attr('cx', crossoverX)
      .attr('cy', crossoverY)
      .attr('r', 0)
      .attr('fill', CHART_COLORS.primary)
      .transition()
      .delay(1400)
      .duration(300)
      .attr('r', 10);

    g.append('text')
      .attr('x', crossoverX + 15)
      .attr('y', crossoverY - 15)
      .attr('class', 'text-sm font-bold')
      .attr('fill', CHART_COLORS.primary)
      .attr('opacity', 0)
      .text('Crossover: 6%')
      .transition()
      .delay(1600)
      .duration(300)
      .attr('opacity', 1);

    // Federal rate highlight (2%)
    const federalX = x(0.02);
    g.append('line')
      .attr('x1', federalX)
      .attr('x2', federalX)
      .attr('y1', 0)
      .attr('y2', height)
      .attr('stroke', CHART_COLORS.primary)
      .attr('stroke-width', 2)
      .attr('stroke-dasharray', '8,4')
      .attr('opacity', 0)
      .transition()
      .delay(1800)
      .duration(300)
      .attr('opacity', 1);

    g.append('text')
      .attr('x', federalX)
      .attr('y', -15)
      .attr('text-anchor', 'middle')
      .attr('class', 'text-sm font-bold')
      .attr('fill', CHART_COLORS.primary)
      .attr('opacity', 0)
      .text('Federal: 2%')
      .transition()
      .delay(1900)
      .duration(300)
      .attr('opacity', 1);

    // Savings annotation at 2%
    const savingsY1 = y(1.20);
    const savingsY2 = y(1.80);

    g.append('line')
      .attr('x1', federalX + 10)
      .attr('x2', federalX + 10)
      .attr('y1', savingsY1)
      .attr('y2', savingsY2)
      .attr('stroke', CHART_COLORS.primary)
      .attr('stroke-width', 2)
      .attr('marker-start', 'url(#arrowhead)')
      .attr('marker-end', 'url(#arrowhead)')
      .attr('opacity', 0)
      .transition()
      .delay(2100)
      .duration(300)
      .attr('opacity', 1);

    g.append('text')
      .attr('x', federalX + 25)
      .attr('y', (savingsY1 + savingsY2) / 2 + 5)
      .attr('class', 'text-sm font-bold')
      .attr('fill', CHART_COLORS.primary)
      .attr('opacity', 0)
      .text('$590M savings')
      .transition()
      .delay(2300)
      .duration(300)
      .attr('opacity', 1);

    // Legend
    const legend = g.append('g')
      .attr('transform', `translate(${width - 100}, 20)`);

    legend.append('line')
      .attr('x1', 0)
      .attr('x2', 30)
      .attr('y1', 0)
      .attr('y2', 0)
      .attr('stroke', CHART_COLORS.success)
      .attr('stroke-width', 3);

    legend.append('text')
      .attr('x', 40)
      .attr('y', 5)
      .attr('class', 'text-sm')
      .attr('fill', CHART_COLORS.muted)
      .text('Build Big Now');

    legend.append('line')
      .attr('x1', 0)
      .attr('x2', 30)
      .attr('y1', 25)
      .attr('y2', 25)
      .attr('stroke', CHART_COLORS.warning)
      .attr('stroke-width', 3);

    legend.append('text')
      .attr('x', 40)
      .attr('y', 30)
      .attr('class', 'text-sm')
      .attr('fill', CHART_COLORS.muted)
      .text('Wait & Expand');

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
