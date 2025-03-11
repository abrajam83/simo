import React, { useEffect, useState } from 'react';

const CircleProgress = ({ isTransitioning, progress, speed, autoplayDelay }) => {
  const circumference = 2 * Math.PI * 20;

  return (
    <div className="top-0 right-0 m-4">
      <svg className="progress-circle" width="50" height="50">
        <circle
          className="progress-background"
          cx="25"
          cy="25"
          r="20"
          stroke="#e0e0e0"
          strokeWidth="4"
          fill="none"
        />
        <circle
          className="progress-bar"
          cx="25"
          cy="25"
          r="20"
          stroke="#007078"
          strokeWidth="4"
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={
            isTransitioning 
              ? circumference // Vaciar durante la transición
              : circumference - (progress / autoplayDelay) * circumference // Llenar mientras está visible
          }
          style={{
            transition: isTransitioning 
              ? `stroke-dashoffset ${speed}ms ease`  // Suavizar la transición de vaciado
              : 'stroke-dashoffset 0.1s linear',     // Llenar suavemente mientras está visible
            transform: 'rotate(-90deg)', // Rotar para comenzar desde arriba
            transformOrigin: '50% 50%'   // Establecer el centro como origen
          }}
        />
      </svg>
    </div>
  );
};

export default CircleProgress;
