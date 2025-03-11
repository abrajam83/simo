import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const SimpleD3Component = () => {
  const d3Container = useRef(null);

  useEffect(() => {
    if (d3Container.current) {
      // Limpia cualquier gráfico previo
      d3.select(d3Container.current).selectAll("*").remove();

      // Dimensiones
      const width = d3Container.current.clientWidth;
      const height = d3Container.current.clientHeight;

      // Crear SVG
      const svg = d3.select(d3Container.current)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .style('position', 'absolute')
      .style('top', 0)
      .style('left', 0);

      // Datos simulados
      const layers = d3.stack().keys([0, 1, 2])(
        d3.range(200).map(() => ({
          0: Math.random() * 50,
          1: Math.random() * -90,
          2: Math.random() * -90,
        }))
      );

      // Escalas
      const x = d3.scaleLinear().domain([0, 70]).range([0, width]);
      const y = d3.scaleLinear().domain([-90, 90]).range([height, 0]);
      const color = d3.scaleOrdinal(d3.schemePastel1);

      // Área para cada capa
      const area = d3.area()
        .x((d, i) => x(i))
        .y0(d => y(d[0]))
        .y1(d => y(d[1]))
        .curve(d3.curveCatmullRom);

      // Añadir capas
      svg.selectAll('path')
        .data(layers)
        .enter()
        .append('path')
        .attr('d', area)
        .attr('fill', (d, i) => color(i))
        .attr('opacity', 0.6);
    }
  }, []);

  return (
    <div 
      className="w-full h-full absolute top-0 left-0"
      ref={d3Container} 
    />
  );
};

export default SimpleD3Component;
