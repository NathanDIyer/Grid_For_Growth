import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';
import { VOLTAGE_ECONOMICS, CHART_COLORS } from '../../data/constants';

export function SixTenthsRule() {
  const svgRef = useRef<SVGSVGElement>(null);
  const { ref, isInView } = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (!svgRef.current || !isInView) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const margin = { top: 40, right: 100, bottom: 80, left: 80 };
    const width = 700 - margin.left - margin.right;
    const height = 400 - margin.top - margin.bottom;

    const g = svg
      .attr('viewBox', `0 0 700 400`)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const voltageData = Object.values(VOLTAGE_ECONOMICS);

    // Scales
    const x = d3
      .scaleBand()
      .domain(voltageData.map((d) => d.label))
      .range([0, width])
      .padding(0.4);

    const yCapacity = d3
      .scaleLinear()
      .domain([0, 4500])
      .range([height, 0]);

    const yCost = d3
      .scaleLinear()
      .domain([0, 3])
      .range([height, 0]);

    // Grid lines
    g.append('g')
      .attr('class', 'grid')
      .selectAll('line')
      .data(yCapacity.ticks(5))
      .enter()
      .append('line')
      .attr('x1', 0)
      .attr('x2', width)
      .attr('y1', (d) => yCapacity(d))
      .attr('y2', (d) => yCapacity(d))
      .attr('stroke', CHART_COLORS.grid)
      .attr('stroke-dasharray', '4,4');

    // X axis
    g.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x))
      .selectAll('text')
      .attr('class', 'fill-slate-600 text-sm font-medium');

    // Left Y axis (Capacity)
    g.append('g')
      .call(
        d3.axisLeft(yCapacity)
          .tickFormat((d) => `${d} MW`)
      )
      .selectAll('text')
      .attr('class', 'fill-slate-600 text-sm');

    g.append('text')
      .attr('transform', 'rotate(-90)')
      .attr('y', -60)
      .attr('x', -height / 2)
      .attr('text-anchor', 'middle')
      .attr('class', 'fill-slate-500 text-sm')
      .text('Capacity (MW)');

    // Right Y axis (Cost per MW)
    g.append('g')
      .attr('transform', `translate(${width}, 0)`)
      .call(
        d3.axisRight(yCost)
          .tickFormat((d) => `$${d}/MW`)
      )
      .selectAll('text')
      .attr('class', 'fill-slate-600 text-sm');

    g.append('text')
      .attr('transform', 'rotate(90)')
      .attr('y', -width - 60)
      .attr('x', height / 2)
      .attr('text-anchor', 'middle')
      .attr('class', 'fill-transmission text-sm')
      .text('Cost per MW ($M)');

    // Capacity bars
    voltageData.forEach((d, i) => {
      const bar = g.append('rect')
        .attr('x', x(d.label)!)
        .attr('width', x.bandwidth())
        .attr('y', height)
        .attr('height', 0)
        .attr('fill', CHART_COLORS.primary)
        .attr('rx', 4);

      bar.transition()
        .delay(i * 300)
        .duration(600)
        .attr('y', yCapacity(d.capacity_mw))
        .attr('height', height - yCapacity(d.capacity_mw));

      // Capacity label
      g.append('text')
        .attr('x', x(d.label)! + x.bandwidth() / 2)
        .attr('y', yCapacity(d.capacity_mw) - 10)
        .attr('text-anchor', 'middle')
        .attr('class', 'text-sm font-semibold')
        .attr('fill', CHART_COLORS.primary)
        .attr('opacity', 0)
        .text(`${d.capacity_mw} MW`)
        .transition()
        .delay(i * 300 + 400)
        .duration(300)
        .attr('opacity', 1);
    });

    // Cost per MW line
    const line = d3
      .line<typeof voltageData[0]>()
      .x((d) => x(d.label)! + x.bandwidth() / 2)
      .y((d) => yCost(d.cost_per_mw));

    const path = g.append('path')
      .datum(voltageData)
      .attr('fill', 'none')
      .attr('stroke', CHART_COLORS.secondary)
      .attr('stroke-width', 3)
      .attr('d', line);

    const pathLength = path.node()?.getTotalLength() || 0;
    path
      .attr('stroke-dasharray', pathLength)
      .attr('stroke-dashoffset', pathLength)
      .transition()
      .delay(900)
      .duration(1000)
      .attr('stroke-dashoffset', 0);

    // Cost points
    voltageData.forEach((d, i) => {
      const circle = g.append('circle')
        .attr('cx', x(d.label)! + x.bandwidth() / 2)
        .attr('cy', yCost(d.cost_per_mw))
        .attr('r', 0)
        .attr('fill', CHART_COLORS.secondary);

      circle.transition()
        .delay(900 + i * 200)
        .duration(300)
        .attr('r', 8);

      // Cost label
      g.append('text')
        .attr('x', x(d.label)! + x.bandwidth() / 2 + 15)
        .attr('y', yCost(d.cost_per_mw) + 5)
        .attr('class', 'text-sm font-bold')
        .attr('fill', CHART_COLORS.secondary)
        .attr('opacity', 0)
        .text(`$${d.cost_per_mw.toFixed(2)}/MW`)
        .transition()
        .delay(900 + i * 200 + 200)
        .duration(300)
        .attr('opacity', 1);
    });

    // Efficiency annotation
    g.append('text')
      .attr('x', width / 2)
      .attr('y', height + 50)
      .attr('text-anchor', 'middle')
      .attr('class', 'text-sm')
      .attr('fill', CHART_COLORS.muted)
      .attr('opacity', 0)
      .text('Higher voltage = 5x more efficient per dollar')
      .transition()
      .delay(2000)
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
