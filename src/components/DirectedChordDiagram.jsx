import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const DirectedChordDiagram = () => {
  const svgRef = useRef(null);
  const width = 2900; // Ancho del SVG
  const height = 2000; // Alto del SVG
  const outerRadius = Math.min(width, height) * 0.5 - 0;
  const innerRadius = outerRadius - 20;

  // Datos de ejemplo
  const data = {
    names: ["A", "B", "C", "D"],
    matrix: [
      [0, 50, 50, 10],
      [10, 0, 40, 30],
      [20, 30, 0, 50],
      [50, 10, 20, 0],
    ],
  };

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Limpia el SVG antes de renderizar

    const chords = d3.chord()
      .padAngle(0.05)
      .sortSubgroups(d3.descending);

    const arc = d3.arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius);

    const ribbon = d3.ribbon()
      .radius(innerRadius);

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const chordData = chords(data.matrix);

    // Crear los grupos
    svg.append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`)
      .selectAll("g")
      .data(chordData.groups)
      .enter().append("g")
      .append("path")
        .attr("d", arc)
        .style("fill", (d) => color(d.index))
        .style("stroke", (d) => d3.rgb(color(d.index)).darker(2));

    // Crear las cuerdas
    svg.append("g")
      .attr("transform", `translate(${width / 2}, ${height / 2})`)
      .selectAll("path.ribbon")
      .data(chordData)
      .enter().append("path")
        .attr("class", "ribbon")
        .attr("d", ribbon)
        .style("fill", (d) => color(d.source.index))
        .style("opacity", 0.7)
        .style("stroke", (d) => d3.rgb(color(d.source.index)).darker(2));
  }, [data.matrix]);

  return (
    <svg ref={svgRef} width={width} height={height} style={{ maxWidth: '100%', height: 'auto' }} />
  );
};

export default DirectedChordDiagram;
