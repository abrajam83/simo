import React, { useEffect, useRef, useState } from 'react';
import { asesoria, arrowRight } from "../assets";
import { motion } from 'framer-motion';


const Asesoria = () => {
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
    <section id="asesoria" ref={sectionRef} className="relative z-10 flex items-center justify-center min-h-screen max-w-[1920px] w-full mt-5"
    style={{ padding: 'clamp(10px, 10vw, 100px)' }}>

        {/* Grid de 12 columnas con column-gap responsivo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-x-6 gap-y-4 xl:gap-y-10 items-center">

          <motion.div className="flex row-start-1 md:row-start-1 md:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 }: {}}
            transition={{ delay: 0.3, duration: 1 }}>
            <span className="font-nunito font-bold text-lg md:text-lg text-greenSimo200 mr-2">06</span>
            <p className="font-nunito text-base font-normal text-[clamp(16px,.9375vw,18px)] mt-0.5 text-white">
              Asesoría
            </p>
          </motion.div>

          <motion.div className="row-start-2 sm:col-start-2 md:col-start-6 md:col-span-5"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 1 }}>
            <h2 className="font-urbanist text-4xl font-semibold text-white text-[clamp(2rem,3.75vw,4rem)] leading-[clamp(2.5rem,4vw,4.25rem)]">
              Obtén tu asesoría gratuita hoy mismo.
            </h2>
          </motion.div>

          {/* Párrafo */}
          <div className="row-start-3 sm:col-start-2 md:col-start-6 col-span-5 tracking-wide items-center justify-center ">
            <p className="font-nunito text-lg leading-normal xl:leading-relaxed text-white ">
              Te ofrecemos soluciones ajustadas a las necesidades específicas de tu empresa,
              diseñadas para maximizar tu impacto y alcanzar tus objetivos de manera eficiente.</p>
          </div>

          {/* Botón */}
          <div className="row-start-4 sm:col-start-2 md:col-start-6 md:col-span-4">
          <div className="flex flex-row items-center">
            <button className="w-14 h-14 flex items-center justify-center rounded-full bg-purpleSimo hover:bg-greenSimo500 transition-all duration-300 ease-in-out mr-4 group relative overflow-hidden">

              <img
                src={arrowRight}
                alt="Flecha hacia la derecha"
                className="w-8 h-8 absolute left-1/2 transform -translate-x-1/2 group-hover:translate-x-[50px] transition-all duration-500 ease-in-out"
              />

              <img
                src={arrowRight}
                alt="Flecha desde la izquierda"
                className="w-8 h-8 absolute left-[-50px] group-hover:left-1/2 transform -translate-x-1/2 transition-all duration-500 ease-in-out"
              />
            </button>
            <span className="font-nunito text-lg md:text-lg text-greenSimo200">Agenda ahora</span>
          </div>
          </div>


          {/* Imagen */}
          <motion.div className="hidden sm:block row-start-2 row-span-3 col-start-1 md:col-start-2 md:col-span-4"
            initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
            animate={isInView ? { clipPath: 'inset(0% 0% 0% 0%)' } : {}}
            transition={{ duration: 0.5 }}
          >
            <img
              src={asesoria}
              alt="Asesoría"
              className="w-full h-full object-cover rounded-xl"
              style={{ height: 'clamp(380px, 20vw, 900px)' }}
            />
          </motion.div>
        </div>
      

    </section>
  );
};

export default Asesoria;

      // {/* Pleca Verde */}
      // <motion.div className="hidden md:block bg-greenSimoV3500 row-start-4 sm:row-start-3 md:row-span-1 md:row-start-4 md:col-start-11 place-self-end w-[20px] h-[200px] md:h-[400px]"
      // initial={{ clipPath: 'inset(0% 0% 0% 100%)' }}
      // animate={isInView ? { clipPath: 'inset(0% 0% 0% 0%)' } : {}}
      // transition={{ duration: 0.5 }}></motion.div>
      // 