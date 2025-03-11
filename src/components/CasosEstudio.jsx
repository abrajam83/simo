import React, { useEffect, useRef, useState } from 'react';
import { arrowRight } from "../assets";
import { motion } from 'framer-motion';
import { StudyCarousel } from '../components'; 


const CasosEstudio = () => {
  const [isInView, setIsInView] = useState(false); // Estado para saber si la sección está en vista
  const sectionRef = useRef(null); // Referencia para la sección


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsInView(true); // Si la sección está en vista, se dispara la animación
            observer.disconnect(); // Desconecta el observer si ya se activó
          }
        });
      },
      { threshold: 0.1 } // El umbral define qué porcentaje de la sección debe estar visible para activar la animación
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="casosestudio" ref={sectionRef}>

      <div className="flex items-center justify-center w-full min-h-screen overflow-x-auto">
        {/* Container principal con max-width y padding responsivo */}
        <div
          className="max-w-[1920px] w-full relative"
          style={{ padding: 'clamp(90px, 9.375vw, 180px) clamp(60px, 7.8125vw, 150px)' }}
        >
          {/* Grid de 12 columnas con column-gap responsivo */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-8 lg:grid-cols-12 gap-y-8 md:gap-y-custom-y md:gap-x-custom-x"

          >
            <motion.div className="flex row-start-1 md:col-span-2 mb-4 mt-2 "
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 }: {}}
              transition={{ delay: 0.3, duration: 1 }}>
              <span className="font-nunito font-bold text-lg md:text-lg text-purpleSimo mr-2">05 </span>
              <p className="font-nunito text-base font-normal text-[clamp(16px,.9375vw,18px)] mt-0.5">
                Casos de estudio
              </p>
            </motion.div>

            <motion.div className="row-start-2 lg:col-start-5 md:row-start-1"
              style={{ fontSize: 'clamp(.5rem, 1.25rem, 1.25rem)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 1 }}>
              <h2 className="font-urbanist text-4xl font-semibold md:text-[clamp(3rem,3.5vw,4rem)] md:leading-[clamp(3.5rem,4vw,4.25rem)]">
                Publicaciones.
              </h2>
            </motion.div>

            <div className="row-start-4 sm:row-start-2 md:row-start-1 md:col-start-6 lg:col-start-10 col-span-3 sm:place-self-end">
              <div className="flex flex-row items-center lg:mt-3">
                <button className="w-14 h-14 flex items-center justify-center rounded-full bg-purpleSimo hover:bg-greenSimo500 transition-all duration-300 ease-in-out mr-4 group relative overflow-hidden">
                  {/* Flecha que se mueve hacia la derecha */}
                  <img
                    src={arrowRight}
                    alt="Flecha hacia la derecha"
                    className="w-8 h-8 absolute left-1/2 transform -translate-x-1/2 group-hover:translate-x-[50px] transition-all duration-500 ease-in-out" />
                  {/* Segunda flecha que entra desde la izquierda */}
                  <img
                    src={arrowRight}
                    alt="Flecha desde la izquierda"
                    className="w-8 h-8 absolute left-[-50px] group-hover:left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out" />
                </button>
                <span className="font-nunito text-lg md:text-lg text-gray-700">Todas las publicaciones</span>
              </div>
            </div>

            <div className="row-start-3 sm:row-start-3 sm:col-span-2 lg:row-start-2 md:col-span-8 lg:col-span-12 relative z-0 flex items-center">
              <div className="w-full"
                
              >
                  <StudyCarousel/> 
              
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CasosEstudio;