import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { REA_TIMELINE, CHART_COLORS } from '../../data/constants';

export function REATimeline() {
  const svgRef = useRef<SVGSVGElement>(null);
  const { ref, isInView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (!svgRef.current || !isInView) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const margin = { top: 40, right: 40, bottom: 80, left: 80 };
    const width = 700 - margin.left - margin.right;
    const height = 350 - margin.top - margin.bottom;

    const g = svg
      .attr('viewBox', `0 0 700 350`)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    // Scales
    const x = d3
      .scaleLinear()
      .domain([1935, 1955])
      .range([0, width]);

    const y = d3
      .scaleLinear()
      .domain([0, 100])
      .range([height, 0]);

    // Grid lines
    g.append('g')
      .attr('class', 'grid')
      .selectAll('line')
      .data([25, 50, 75, 100])
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
          .ticks(5)
      )
      .selectAll('text')
      .attr('class', 'fill-slate-600 text-sm');

    // Y axis
    g.append('g')
      .call(
        d3.axisLeft(y)
          .tickFormat((d) => `${d}%`)
      )
      .selectAll('text')
      .attr('class', 'fill-slate-600 text-sm');

    g.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', -60)
      .attr('x', -height / 2)
      .attr('text-anchor', 'middle')
      .attr('class', 'fill-slate-500 text-sm')
      .text('Farm Electrification Rate');

    // Area under the curve
    const area = d3
      .area<typeof REA_TIMELINE[0]>()
      .x((d) => x(d.year))
      .y0(height)
      .y1((d) => y(d.electrification_pct))
      .curve(d3.curveMonotoneX);

    g.append('path')
      .datum(REA_TIMELINE)
      .attr('fill', `${CHART_COLORS.primary}20`)
      .attr('d', area)
      .attr('opacity', 0)
      .transition()
      .delay(500)
      .duration(800)
      .attr('opacity', 1);

    // Line
    const line = d3
      .line<typeof REA_TIMELINE[0]>()
      .x((d) => x(d.year))
      .y((d) => y(d.electrification_pct))
      .curve(d3.curveMonotoneX);

    const path = g.append('path')
      .datum(REA_TIMELINE)
      .attr('fill', 'none')
      .attr('stroke', CHART_COLORS.primary)
      .attr('stroke-width', 4)
      .attr('d', line);

    const pathLength = path.node()?.getTotalLength() || 0;
    path
      .attr('stroke-dasharray', pathLength)
      .attr('stroke-dashoffset', pathLength)
      .transition()
      .duration(1500)
      .attr('stroke-dashoffset', 0);

    // Data points with events
    REA_TIMELINE.forEach((d, i) => {
      // Circle
      g.append('circle')
        .attr('cx', x(d.year))
        .attr('cy', y(d.electrification_pct))
        .attr('r', 0)
        .attr('fill', 'white')
        .attr('stroke', CHART_COLORS.primary)
        .attr('stroke-width', 3)
        .transition()
        .delay(300 + i * 300)
        .duration(300)
        .attr('r', 8);

      // Percentage label - offset first point to the right to avoid y-axis overlap
      const xOffset = i === 0 ? 25 : 0;
      g.append('text')
        .attr('x', x(d.year) + xOffset)
        .attr('y', y(d.electrification_pct) - 20)
        .attr('text-anchor', i === 0 ? 'start' : 'middle')
        .attr('class', 'text-lg font-bold')
        .attr('fill', CHART_COLORS.primary)
        .attr('opacity', 0)
        .text(`${d.electrification_pct}%`)
        .transition()
        .delay(300 + i * 300 + 150)
        .duration(300)
        .attr('opacity', 1);

      // Event label (below x-axis)
      if (d.event) {
        g.append('text')
          .attr('x', x(d.year))
          .attr('y', height + 55)
          .attr('text-anchor', 'middle')
          .attr('class', 'text-xs')
          .attr('fill', CHART_COLORS.muted)
          .attr('opacity', 0)
          .text(d.event)
          .transition()
          .delay(300 + i * 300 + 200)
          .duration(300)
          .attr('opacity', 1);
      }
    });

    // "20 years" annotation - positioned below the curve with white background
    const annotationY = y(35); // Position below the 50% mark

    g.append('line')
      .attr('x1', x(1935))
      .attr('x2', x(1955))
      .attr('y1', annotationY)
      .attr('y2', annotationY)
      .attr('stroke', CHART_COLORS.secondary)
      .attr('stroke-width', 2)
      .attr('stroke-dasharray', '6,4')
      .attr('opacity', 0)
      .transition()
      .delay(2000)
      .duration(400)
      .attr('opacity', 1);

    // White background rectangle for text
    const textWidth = 220;
    const textHeight = 24;
    g.append('rect')
      .attr('x', x(1945) - textWidth / 2)
      .attr('y', annotationY + 6)
      .attr('width', textWidth)
      .attr('height', textHeight)
      .attr('fill', 'white')
      .attr('rx', 4)
      .attr('opacity', 0)
      .transition()
      .delay(2200)
      .duration(400)
      .attr('opacity', 1);

    g.append('text')
      .attr('x', x(1945))
      .attr('y', annotationY + 22)
      .attr('text-anchor', 'middle')
      .attr('class', 'text-sm font-bold')
      .attr('fill', CHART_COLORS.secondary)
      .attr('opacity', 0)
      .text('20 years to near-universal access')
      .transition()
      .delay(2200)
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
