import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { HISTORICAL_CONSTRUCTION, CHART_COLORS } from '../../data/constants';

export function HistoricalConstruction() {
  const svgRef = useRef<SVGSVGElement>(null);
  const { ref, isInView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (!svgRef.current || !isInView) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const margin = { top: 50, right: 40, bottom: 80, left: 80 };
    const width = 750 - margin.left - margin.right;
    const height = 420 - margin.top - margin.bottom;

    const g = svg
      .attr('viewBox', `0 0 750 420`)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Scales
    const x = d3
      .scaleLinear()
      .domain([1960, 2020])
      .range([0, width]);

    const y = d3
      .scaleLinear()
      .domain([0, 10000])
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
          .tickFormat((d) => `${d}`)
          .ticks(7)
      )
      .selectAll('text')
      .attr('class', 'fill-slate-600 text-sm');

    // Y axis
    g.append('g')
      .call(
        d3.axisLeft(y)
          .tickFormat((d) => `${(d as number / 1000).toFixed(0)}k`)
      )
      .selectAll('text')
      .attr('class', 'fill-slate-600 text-sm');

    g.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', -60)
      .attr('x', -height / 2)
      .attr('text-anchor', 'middle')
      .attr('class', 'fill-slate-500 text-sm')
      .text('Circuit Miles Added Per Year');

    // Area under the curve
    const area = d3
      .area<typeof HISTORICAL_CONSTRUCTION[0]>()
      .x((d) => x(d.year))
      .y0(height)
      .y1((d) => y(d.miles))
      .curve(d3.curveMonotoneX);

    g.append('path')
      .datum(HISTORICAL_CONSTRUCTION)
      .attr('fill', `${CHART_COLORS.primary}15`)
      .attr('d', area)
      .attr('opacity', 0)
      .transition()
      .delay(300)
      .duration(800)
      .attr('opacity', 1);

    // Line
    const line = d3
      .line<typeof HISTORICAL_CONSTRUCTION[0]>()
      .x((d) => x(d.year))
      .y((d) => y(d.miles))
      .curve(d3.curveMonotoneX);

    const path = g.append('path')
      .datum(HISTORICAL_CONSTRUCTION)
      .attr('fill', 'none')
      .attr('stroke', CHART_COLORS.primary)
      .attr('stroke-width', 3)
      .attr('d', line);

    const pathLength = path.node()?.getTotalLength() || 0;
    path
      .attr('stroke-dasharray', pathLength)
      .attr('stroke-dashoffset', pathLength)
      .transition()
      .duration(1500)
      .attr('stroke-dashoffset', 0);

    // Data points
    HISTORICAL_CONSTRUCTION.forEach((d, i) => {
      g.append('circle')
        .attr('cx', x(d.year))
        .attr('cy', y(d.miles))
        .attr('r', 0)
        .attr('fill', 'white')
        .attr('stroke', CHART_COLORS.primary)
        .attr('stroke-width', 2)
        .transition()
        .delay(200 + i * 80)
        .duration(300)
        .attr('r', 5);
    });

    // Peak annotation (1970)
    const peakX = x(1970);
    const peakY = y(9500);

    g.append('text')
      .attr('x', peakX)
      .attr('y', peakY - 20)
      .attr('text-anchor', 'middle')
      .attr('class', 'text-sm font-bold')
      .attr('fill', CHART_COLORS.primary)
      .attr('opacity', 0)
      .text('Peak: ~9,500 mi/year')
      .transition()
      .delay(1800)
      .duration(400)
      .attr('opacity', 1);

    // Boom era bracket
    const boomStartX = x(1965);
    const boomEndX = x(1980);
    const bracketY = height + 35;

    g.append('line')
      .attr('x1', boomStartX)
      .attr('x2', boomEndX)
      .attr('y1', bracketY)
      .attr('y2', bracketY)
      .attr('stroke', CHART_COLORS.success)
      .attr('stroke-width', 3)
      .attr('opacity', 0)
      .transition()
      .delay(2000)
      .duration(400)
      .attr('opacity', 1);

    g.append('text')
      .attr('x', (boomStartX + boomEndX) / 2)
      .attr('y', bracketY + 18)
      .attr('text-anchor', 'middle')
      .attr('class', 'text-xs font-medium')
      .attr('fill', CHART_COLORS.success)
      .attr('opacity', 0)
      .text('Baseload + Regional Interties Era')
      .transition()
      .delay(2200)
      .duration(400)
      .attr('opacity', 1);

    // Decline era
    const declineStartX = x(1985);
    const declineEndX = x(2005);

    g.append('line')
      .attr('x1', declineStartX)
      .attr('x2', declineEndX)
      .attr('y1', bracketY)
      .attr('y2', bracketY)
      .attr('stroke', CHART_COLORS.warning)
      .attr('stroke-width', 3)
      .attr('opacity', 0)
      .transition()
      .delay(2400)
      .duration(400)
      .attr('opacity', 1);

    g.append('text')
      .attr('x', (declineStartX + declineEndX) / 2)
      .attr('y', bracketY + 18)
      .attr('text-anchor', 'middle')
      .attr('class', 'text-xs font-medium')
      .attr('fill', CHART_COLORS.warning)
      .attr('opacity', 0)
      .text('Underinvestment')
      .transition()
      .delay(2600)
      .duration(400)
      .attr('opacity', 1);

    // "Now 50-60 years old" annotation
    g.append('rect')
      .attr('x', width - 180)
      .attr('y', 10)
      .attr('width', 175)
      .attr('height', 55)
      .attr('fill', '#FEF3C7')
      .attr('stroke', '#F59E0B')
      .attr('stroke-width', 1)
      .attr('rx', 8)
      .attr('opacity', 0)
      .transition()
      .delay(2800)
      .duration(400)
      .attr('opacity', 1);

    g.append('text')
      .attr('x', width - 92)
      .attr('y', 32)
      .attr('text-anchor', 'middle')
      .attr('class', 'text-xs font-bold')
      .attr('fill', '#92400E')
      .attr('opacity', 0)
      .text('This infrastructure is now')
      .transition()
      .delay(3000)
      .duration(400)
      .attr('opacity', 1);

    g.append('text')
      .attr('x', width - 92)
      .attr('y', 52)
      .attr('text-anchor', 'middle')
      .attr('class', 'text-sm font-bold')
      .attr('fill', '#92400E')
      .attr('opacity', 0)
      .text('50-60 years old')
      .transition()
      .delay(3000)
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
      <p className="text-center text-sm text-slate-500 mt-4">
        Source: The Brattle Group, EEI, NERC (EIA-411)
      </p>
    </motion.div>
  );
}
