import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const BumpChart = () => {
  const svgRef = useRef(null);
  const n = 10; // Número de capas
  const m = 200; // Número de puntos en cada capa
  const k = 10; // Variabilidad
  const width = 2500;
  const height = 400;
  const z = d3.interpolateCool;

  const bumps = (n, m) => {
    const a = Array(n).fill(0);
    for (let i = 0; i < m; i++) bump(a, n);
    return a;
  };

  const bump = (a, n) => {
    const x = 1 / (0.1 + Math.random());
    const y = 2 * Math.random() - 0.5;
    const z = 10 / (0.1 + Math.random());
    for (let i = 0; i < n; i++) {
      const w = (i / n - y) * z;
      a[i] += x * Math.exp(-w * w);
    }
  };

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove(); // Limpia el SVG antes de renderizar

    const x = d3.scaleLinear([0, m - 1], [0, width]);
    const y = d3.scaleLinear([0, 1], [height, 0]);
    const stack = d3.stack().keys(d3.range(n)).order(d3.stackOrderNone);
    const area = d3.area()
      .x((d, i) => x(i))
      .y0(d => y(d[0]))
      .y1(d => y(d[1]));

    const randomize = () => {
      const layers = stack(d3.transpose(Array.from({ length: n }, () => bumps(m, k))));
      y.domain([
        d3.min(layers, l => d3.min(l, d => d[0])),
        d3.max(layers, l => d3.max(l, d => d[1]))
      ]);
      return layers;
    };

    const paths = svg.selectAll("path")
      .data(randomize())
      .join("path")
        .attr("d", area)
        .attr("fill", () => z(Math.random()));

    const updatePaths = () => {
      paths.data(randomize())
        .transition()
          .duration(1500)
          .attr("d", area);
    };

    const interval = setInterval(updatePaths, 3000); // Actualiza cada 3 segundos

    return () => clearInterval(interval); // Limpia el intervalo al desmontar el componente
  }, [width, height, n, m, k]);

  return (
    <svg ref={svgRef} width={width} height={height} style={{ maxWidth: '100%', height: '100%' }} />
  );
};

export default BumpChart;
