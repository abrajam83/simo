import React, { useEffect, useRef, useState } from 'react';
import { arrowRightGray, arrowLeftGray } from "../assets";
import { motion } from 'framer-motion';
import TestimonialCarousel from './TestimonialCarousel';
import LogoCarousel from './LogoCarousel';



const Testimoniales = () => {
  const [isInView, setIsInView] = useState(false); // Estado para saber si la sección está en vista
  const sectionRef = useRef(null); // Referencia para la sección
  const swiperRef = useRef(null);

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

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev(); // Método para retroceder el carrusel
    }
  };

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext(); // Método para avanzar el carrusel
    }
  };

  return (
    <section id="acercasimo" ref={sectionRef}>

      <div className="flex items-center justify-center w-full">
        {/* Container principal con max-width y padding responsivo */}
        <div
          className="max-w-[1920px] w-full relative mt-14"
          style={{ padding: 'clamp(90px, 9.375vw, 180px) clamp(60px, 7.8125vw, 150px)' }}
        >
          {/* Grid de 12 columnas con column-gap responsivo */}
          <div
            className="grid grid-cols-1 md:grid-cols-12 gap-y-8  md:gap-x-custom-x"

          >
            <motion.div className="flex row-start-1 col-span-1 md:col-span-2 mt-2 "
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 }: {}}
              transition={{ delay: 0.3, duration: 1 }}>
              <span className="font-nunito font-bold text-lg md:text-lg text-purpleSimo mr-2">04 </span>
              <p className="font-nunito text-base font-normal text-[clamp(16px,.9375vw,18px)] mt-0.5">
                Testimonios
              </p>
            </motion.div>

            <motion.div className="row-start-2 md:col-start-3 md:col-span-5 md:row-start-1"
              style={{ fontSize: 'clamp(.5rem, 1.25rem, 1.25rem)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 1 }}>
              <h2 className="font-urbanist text-4xl font-semibold md:text-[clamp(3rem,3.5vw,4rem)] md:leading-[clamp(3.5rem,4vw,4.25rem)]">
                Lo que opinan nuestros clientes.
              </h2>
            </motion.div>

            <div className="row-start-3 md:col-span-12 overflow-visible">
              <TestimonialCarousel swiperRef={swiperRef} />
            </div>


            {/* Botones de control */}
            <div className="hidden row-start-1 sm:row-start-2 md:row-start-1 col-start-11 sm:flex z-20 place-self-end space-x-2">
              <button
                onClick={handlePrevClick}
                className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-graySimo hover:bg-slate-300 transition">
                <img src={arrowLeftGray} alt="Flecha hacia la derecha" className="w-6 h-6" />
              </button>

              <button
                onClick={handleNextClick}
                className="w-14 h-14 flex items-center justify-center rounded-full border-2 border-graySimo hover:bg-slate-300 transition">
                <img src={arrowRightGray} alt="Flecha hacia la derecha" className="w-6 h-6" />
              </button>
            </div>
            
            <div className="row-start-4 md:col-span-12">
              <LogoCarousel/>
            </div>
           
      
          </div>
          
          </div>
         
        </div>
    </section>
  );
};

export default Testimoniales;