import React, { useEffect, useRef } from 'react';

const OrganicWavesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    function drawWave(amplitude, frequency, color, yOffset, time, slope) {
      ctx.beginPath();
      ctx.moveTo(0, canvas.height / 2 + yOffset);
  
      // Parámetros para líneas punteadas
      const dashLength = 3; // Longitud de las líneas punteadas
      const gapLength = 10; // Espacio entre las líneas punteadas
      ctx.setLineDash([dashLength, gapLength]); // Establecer líneas punteadas
  
      for (let x = 0; x < canvas.width; x++) {
        // Generar una variación de amplitud usando una función sinusoidal
        const varyingAmplitude = amplitude + Math.sin((x + time) * 0.002) * 90;
  
        // Añadir un desfase en la altura basado en la posición horizontal
        const yShift = (x / canvas.width) * slope; // Desfase de inicio a fin
        const y = 
          varyingAmplitude * Math.sin(x * frequency + time * 0.0002) + canvas.height / 2 + yOffset + yShift;
  
        ctx.lineTo(x, y);
      }

    ctx.strokeStyle = color;
    ctx.lineWidth = 3;
    ctx.stroke();
  }

    function draw(time) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Exageramos los valores de slope para que el efecto de desfase sea más evidente
      drawWave(0, 0.01, 'rgba(96, 178, 185, 1)', 200, time, -500); // Desfase positivo grande
      drawWave(100, 0.005, 'rgba(96, 178, 185, 1)', -100, time, -200); // Desfase negativo grande
      drawWave(30, 0.008, 'rgba(96, 178, 185, 1)', 300, time, -500); // Desfase moderado
      drawWave(50, 0.01, 'rgba(96, 178, 185, 1)', 100, time, -100); // Desfase moderado
      drawWave(30, 0.002, 'rgba(96, 178, 185, 1)', 250, time, -100); // Desfase moderado
      
      requestAnimationFrame(draw);
    }

    draw(0);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="   z-0" />
  );
};

export default OrganicWavesBackground;
