import React, { useEffect, useRef, useState } from 'react';
import { arrowRight } from "../assets"; // Asegúrate de que la ruta sea correcta
import { ServiceCarousel } from '../components'; // Importa solo lo necesario
import 'swiper/css';
import 'swiper/css/pagination';
import { motion } from 'framer-motion';


const SimoServicios = () => {
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
    <section id="simoservicios" ref={sectionRef}>
      <div className="flex items-center justify-center w-full h-screen mt-40">
        <div
          className="max-w-[1920px] w-full relative"
          style={{ padding: 'clamp(80px, 7vw, 150px)' }}
        >

          <div className="grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-x-custom-x">

            <motion.div className="flex row-start-1 col-span-1 md:col-span-2 mb-4 mt-2"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 1 }}>
              <span className="font-nunito font-bold text-lg md:text-lg text-purpleSimo mr-2">02 </span>
              <p className="font-nunito text-base font-normal text-[clamp(16px,.9375vw,18px)] mt-0.5">
                Áreas de expertise
              </p>
            </motion.div>

            <div className="row-start-1 md:col-start-3 md:col-span-3 z-20 relative">
              <motion.h2 className="font-urbanist text-4xl font-semibold md:text-[clamp(3rem,3.5vw,4rem)] md:leading-[clamp(3.5rem,4vw,3.5rem)] mb-6"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 1 }}>
                Nuestros servicios.
              </motion.h2>
              <motion.p className="font-nunito text-lg md:text-lg leading-relaxed mb-10"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 1 }}>
                ¡Descubre cómo nuestros servicios pueden impulsar tus proyectos al siguiente nivel!
              </motion.p>

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
                <span className="font-nunito text-lg md:text-lg text-gray-700">Todos los servicios</span>
              </div>


            </div>

            {/* Div que oculta la parte izquierda del carrusel */}
            <div className="row-start-1 md:col-start-3 md:col-span-4 bg-slate-200 z-10"></div>

            {/* Carrusel */}
            <div className="row-start-1 md:row-start-1 md:col-span-8 md:col-start-5 relative z-0 flex items-center">
              <div className="w-full"
                style={{ width: 'clamp(200px, 60vw, 1000px)', height: 'clamp(100px, 40vw, 600px)' }}
              >
                  <ServiceCarousel/> {/* Ref del Swiper de tarjetas */}
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimoServicios;


{/* <div className="relative w-24">
<Swiper
  ref={dotsSwiperRef} // Ref del Swiper de dots
  className="h-8 "
  modules={[Autoplay, Pagination]}
  pagination={{
    clickable: true,
    dynamicBullets: true,
  }}
  loop={true}
  speed={speed} // Controla la velocidad de transición de deslizamiento
  autoplay={{
    delay: autoplayDelay, // Tiempo que la tarjeta está visible
    disableOnInteraction: false,
  }}
  allowTouchMove={false}  // Desactiva el deslizamiento manual
  slidesPerView={1}
>
  {Array.from({ length: 8 }).map((_, index) => (
    <SwiperSlide key={index}>
      <div></div> {/* Diapositiva vacía, solo para mostrar los dots */}
 {/*   </SwiperSlide>
  ))}
</Swiper>
</div> */}