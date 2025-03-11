import React, { useEffect, useRef, useState } from 'react';
import { HeroSection, AcercaSimo, Asesoria, CasosEstudio, Footer, Navbar, Testimoniales, Beneficios, Servicios2} from './components'
import { motion } from 'framer-motion';
import { plecaAsesoria } from "./assets";

const App = () => {
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
    <div className='sm:snap-y sm:snap-mandatory overflow-scroll w-screen h-screen '>

      <div className="snap-start w-screen py-4 flex items-center justify-center">
        <Navbar />
      </div>

      <div className='snap-start w-screen min-h-screen'>
        <div className="flex items-center h-full"
          style={{ height: 'calc(100vh - 0px)' }}>
          <div className="w-full mx-auto">
            <HeroSection />
          </div>
        </div>
      </div>

      <div className="snap-start bg-white w-screen min-h-screen">
        <AcercaSimo />
      </div>

      <div className="snap-start bg-slate-200 w-screen min-h-screen">
        <Servicios2 />
      </div>

      <div className="snap-start bg-white w-screen min-h-screen">
        <Beneficios />
      </div>

      <div className="snap-start bg-slate-100 w-screen min-h-screen">
        <Testimoniales />
      </div>

      <div className="snap-start bg-white w-screen min-h-screen">
        <CasosEstudio />
      </div>

      <div className="snap-start bg-slate-50 w-screen relative flex items-center justify-center" ref={sectionRef}>

        <motion.div className="absolute w-full h-full flex items-center justify-center z-0 overflow-hidden"
        initial={{ clipPath: 'inset(0% 100% 0% 0%)' }}
        animate={isInView ? { clipPath: 'inset(0% 0% 0% 0%)' } : {}}
        transition={{ duration: 0.5 }}
        >
          
          <motion.div
            className="absolute h-screen left-0 z-0 w-full "
            initial={{ y: 0 }}
            animate={{ y: [0, 50, 0] }} // Efecto parallax
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}>

            <img
              src={plecaAsesoria}
              alt="Background"
              className="w-full h-full object-cover" />
          </motion.div>
        </motion.div>

        <Asesoria className="z-10"/>
      </div>

      <div className="snap-start bg-greenSimo w-screen min-h-screen">
      <Footer />
      </div>


    </div>
  );
};

export default App

// style={{ width: 'clamp(300px, 75vw, 1700px)' }}

{/* <motion.div className="absolute bg-greenSimo h-[700px] left-0 z-0 mb-10 w-full"
          style={{ zIndex: -1 }}
          initial={{ clipPath: 'inset(0% 100% 0% 0%)' }}
          animate={isInView ? { clipPath: 'inset(0% 0% 0% 0%)' } : {}}
          transition={{ duration: 0.5 }}></motion.div> */}