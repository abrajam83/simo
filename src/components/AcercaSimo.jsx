import React, { useEffect, useRef, useState } from 'react';
import { img_3, arrowRight } from "../assets";
import { motion } from 'framer-motion';


const AcercaSimo = () => {
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
    <section id="acercasimo" ref={sectionRef}>

      <div className="flex items-center justify-center w-full min-h-screen">
        {/* Container principal con max-width y padding responsivo */}
        <div
          className="max-w-[1920px] w-full relative mt-10"
          style={{ padding: 'clamp(50px, 7vw, 150px)' }}
        >
          {/* Grid de 12 columnas con column-gap responsivo */}
          <div
            className="grid grid-cols-1 md:grid-cols-12 gap-y-4  md:gap-x-custom-x"

          >
            <motion.div className="flex row-start-1 col-span-1 md:col-span-2 mt-2 "
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 }: {}}
            transition={{ delay: 0.3, duration: 1}}>
              <span className="font-nunito font-bold text-lg md:text-lg text-purpleSimo mr-2">01 </span>
              <p className="font-nunito text-base font-normal text-[clamp(16px,.9375vw,18px)] mt-0.5">
                Acerca de Nosotros
              </p>
            </motion.div>

            <motion.div className="row-start-2 md:col-start-3 md:col-span-7 lg:col-span-6 md:row-start-1"
              style={{ fontSize: 'clamp(1rem, 2vw, 2rem)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 }: {}}
              transition={{ delay: 0.3, duration: 1}}>
              <h2 className="font-urbanist text-4xl font-semibold md:text-[clamp(3rem,3.5vw,4rem)] md:leading-[clamp(3.5rem,4vw,4.25rem)]">
                Metodologías integrales con perspectivas humanas.
              </h2>
            </motion.div>

            <div className="row-start-4 md:row-start-2 md:col-start-3 md:col-span-5 md:mt-10">
              <p className="font-nunito text-lg md:text-lg leading-relaxed">
                La manera de trabajar en la investigación para el cambio social disruptivo, permite conjugar estrategias provenientes
                de diversas disciplinas. Buscamos de raíz las razones que impiden el desarrollo socioeconómico y cultural de la sociedad.
                Para ello nos valemos de todos aquellos puntos de vista metodológicos que permiten clarificar problemas y plantear soluciones.</p>

              <div className="flex flex-row items-center mt-8">
                <button className="w-14 h-14 flex items-center justify-center rounded-full bg-purpleSimo hover:bg-greenSimo500 transition-all duration-300 ease-in-out mr-4 group relative overflow-hidden">

                  {/* Flecha que se mueve hacia la derecha */}
                  <img
                    src={arrowRight}
                    alt="Flecha hacia la derecha"
                    className="w-8 h-8 absolute left-1/2 transform -translate-x-1/2 group-hover:translate-x-[50px] transition-all duration-500 ease-in-out"
                  />

                  {/* Segunda flecha que entra desde la izquierda */}
                  <img
                    src={arrowRight}
                    alt="Flecha desde la izquierda"
                    className="w-8 h-8 absolute left-[-50px] group-hover:left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out"
                  />
                </button>
                <span className="font-nunito text-lg md:text-lg text-gray-700">Acerca de Simo</span>
              </div>

            </div>


            <motion.div className="row-start-3 md:row-start-2 md:col-span-4 md:col-start-9"
              initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
              animate={isInView ? { clipPath: 'inset(0% 0% 0% 0%)' } : {}}
              transition={{ duration: 0.5 }}
            >
              <img
                src={img_3}
                alt="Perspectiva Humana"
                className="w-full h-auto object-cover rounded-xl"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcercaSimo;