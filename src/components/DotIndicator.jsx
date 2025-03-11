import React, { useEffect, useState } from 'react';

const DotIndicator = ({ currentSlide, totalSlides, autoplayDelay, speed }) => {
  const [activeSlide, setActiveSlide] = useState(currentSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    }, autoplayDelay + speed);

    return () => clearInterval(interval);
  }, [currentSlide, autoplayDelay, speed, totalSlides]);

  return (
    <div className="flex justify-center mt-4">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <div
          key={index}
          className={`w-2 h-2 rounded-full mx-1 ${
            activeSlide === index ? 'bg-blue-600' : 'bg-gray-300'
          }`}
        ></div>
      ))}
    </div>
  );
};

export default DotIndicator;
