import React, { useEffect, useRef, useState } from 'react';
import { img_5, arrowRight, arrowRightGreen, img_6 } from "../assets";
import { motion } from 'framer-motion';

const Beneficios = () => {
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
    <section id="beneficios" ref={sectionRef}>
      <div className="flex items-center justify-center w-full min-h-screen">
        {/* Container principal con max-width y padding responsivo */}
        <div
          className="max-w-[1920px] w-full relative mt-10"
          style={{ padding: 'clamp(50px, 6vw, 100px) clamp(40px, 5vw, 80px)' }}
        >
          {/* Grid de 12 columnas con column-gap responsivo */}
          <div
            className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-y-custom-y md:gap-x-custom-x"

          >
            <motion.div className="flex row-start-1 col-span-1 md:col-span-2 mt-2 "
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 }: {}}
            transition={{ delay: 0.3, duration: 1}}>
              <span className="font-nunito font-bold text-lg md:text-lg text-purpleSimo mr-2">03 </span>
              <p className="font-nunito text-base font-normal text-[clamp(16px,.9375vw,18px)] mt-0.5">
                Porqué elegirnos
              </p>
            </motion.div>

            <div className="row-start-2 md:col-start-3 md:col-span-7 lg:col-span-5 md:row-start-1">
              <motion.h2 className="font-urbanist text-4xl font-semibold md:text-[clamp(3rem,3vw,4rem)] md:leading-[clamp(3.5rem,3.5vw,4.25rem)]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 }: {}}
              transition={{ delay: 0.3, duration: 1}}>
                Beneficios de trabajar con nosotros.
              </motion.h2>
            </div>

            <div className="row-start-4 md:row-start-2 md:col-start-9 md:col-span-4">
              <p className="font-nunito text-lg md:text-lg leading-relaxed">
                Al trabajar con nosotros, obtendrás información confiable y estrategias personalizadas que se adaptan a las necesidades
                reales de tu sector. Con nuestro enfoque en la recolección directa de datos y el análisis profundo, ayudamos a tomar
                decisiones informadas que generan resultados tangibles.</p>

                <motion.div className="flex items-center mt-7"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 }: {}}
                transition={{ delay: 0.3, duration: 1}}>
                <img src={arrowRightGreen} alt="Flecha hacia la derecha" className="w-6 h-6 mr-2"/>
                <span className="font-nunito font-bold text-lg md:text-lg text-greenSimo500 mr-2">Expertos multidisciplinarios </span>
                </motion.div>

                <motion.div className="flex items-center mt-3"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 }: {}}
                transition={{ delay: 0.5, duration: 1}}>
                <img src={arrowRightGreen} alt="Flecha hacia la derecha" className="w-6 h-6 mr-2"/>
                <span className="font-nunito font-bold text-lg md:text-lg text-greenSimo500 mr-2">Soluciones personalizadas </span>
                </motion.div>

                <motion.div className="flex items-center mt-3"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 }: {}}
                transition={{ delay: 0.7, duration: 1}}>
                <img src={arrowRightGreen} alt="Flecha hacia la derecha" className="w-6 h-6 mr-2"/>
                <span className="font-nunito font-bold text-lg md:text-lg text-greenSimo500 mr-2">Datos confiables</span>
                </motion.div>

              <div className="flex flex-row items-center mt-16">
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
                <span className="font-nunito text-lg md:text-lg text-gray-700">Conoce más</span>
              </div>

            </div>


            <motion.div className="hidden md:block row-start-3 md:row-start-2 md:col-span-5 md:col-start-4"
            initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
            animate={isInView ? { clipPath: 'inset(0% 0% 0% 0%)' } : {}}
            transition={{ duration: 1 }}>
              <img
                src={img_5}
                alt="Perspectiva Humana"
                className="w-full h-auto object-cover rounded-xl"
              />
            </motion.div>

            <motion.div className="row-start-3 md:row-start-2 md:col-span-5 md:col-start-1 mt-0 md:mt-48 border-8 border-white"
            initial={{ clipPath: 'inset(0% 100% 0% 0%)' }}
            animate={isInView ? { clipPath: 'inset(0% 0% 0% 0%)' } : {}}
            transition={{ duration: 1 }}>
              <img
                src={img_6}
                alt="Perspectiva Humana"
                className="w-full h-[300px] md:h-[400px] object-cover rounded-xl"
              />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Beneficios;