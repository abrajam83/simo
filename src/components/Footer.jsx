import React, { useEffect, useRef, useState } from 'react';
import { logoSimoBlanco, arrowRight } from "../assets";
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

      <div className="flex items-center justify-center w-full mt-20">
        {/* Container principal con max-width y padding responsivo */}
        <div
          className="max-w-[1920px] w-full min-h-screen  relative"
          style={{ padding: 'clamp(90px, 9.375vw, 180px) clamp(60px, 7.8125vw, 150px)' }}
        >
          {/* Grid de 12 columnas con column-gap responsivo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-y-8 gap-8">

            {/* Logo */}
            <motion.div className="row-start-1 md:row-start-2 md:col-span-1 md:col-start-1 h-[125px]"
              initial={{ clipPath: 'inset(100% 0% 0% 0%)' }}
              animate={isInView ? { clipPath: 'inset(0% 0% 0% 0%)' } : {}}
              transition={{ duration: 0.5 }}>
              <img src={logoSimoBlanco} alt="Logo Simo" className=" h-full object-contain" />
            </motion.div>

            {/* Párrafo */}
            <motion.div className="row-start-2 sm:col-span-2 md:col-start-4 md:col-span-3 mb-4 mt-2 "
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 1 }}>
              <p className="font-urbanist text-base text-greenSimo200 tracking-wide font-normal text-[clamp(16px,2vw,18px)] md:leading-[clamp(28px,9px,24px)]">
                Somos una empresa líder en análisis cualitativo y cuantitativo que transforma datos en insights accionables.
                Con amplia experiencia en investigación, brindamos soluciones personalizadas que ayudan a nuestros clientes
                a tomar decisiones estratégicas con confianza y precisión.
              </p>
            </motion.div>

            {/* Listas */}
            <div className="row-start-3 md:col-start-4 sm:col-span-2 md:col-span-4">
              <div className="flex flex-wrap" style={{ gap: 'clamp(2rem, 5vw, 10rem)'}}>

                <div className="space-y-4">
                  <h4 className="font-urbanist font-medium text-base mb-4 text-white">Simo</h4>
                  <ul className="font-nunito font-light text-base text-greenSimo200">
                    <li className="mb-2"><a href="#home" className="hover:underline">Inicio</a></li>
                    <li className="mb-2"><a href="#about" className="hover:underline">Nosotros</a></li>
                    <li className="mb-2"><a href="#contact" className="hover:underline">Contáctanos</a></li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-urbanist font-medium text-base mb-4 text-white">Estudios</h4>
                  <ul className="font-nunito font-light text-base text-greenSimo200">
                    <li className="mb-2"><a href="#portafolios" className="hover:underline">Portafolios</a></li>
                    <li className="mb-2"><a href="#articulos" className="hover:underline">Artículos</a></li>
                    <li className="mb-2"><a href="#encuestas" className="hover:underline">Encuestas</a></li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h4 className="font-urbanist font-medium text-base mb-4 text-white">Servicios</h4>
                  <ul className="font-nunito font-light text-base text-greenSimo200">
                    <li className="mb-2"><a href="#mercados" className="hover:underline">Inteligencia de mercados</a></li>
                    <li className="mb-2"><a href="#electorales" className="hover:underline">Estudios electorales</a></li>
                    <li className="mb-2"><a href="#politicas" className="hover:underline">Políticas públicas</a></li>
                    <li className="mb-2"><a href="#sociedad" className="hover:underline">Sociedad Civil</a></li>
                    <li className="mb-2"><a href="#educativos" className="hover:underline">Proyectos educativos</a></li>
                    <li className="mb-2"><a href="#genero" className="hover:underline">Estudios de género</a></li>
                    <li className="mb-2"><a href="#agroindustria" className="hover:underline">Agroindustria</a></li>
                    <li className="mb-2"><a href="#diseno" className="hover:underline">Diseño de información</a></li>
                  </ul>
                </div>
              </div>
            </div>


            {/* Dirección */}
            <div className="row-start-5 sm:col-span-2 md:row-start-4 md:col-start-4 md:col-span-3">
              <h4 className="font-urbanist font-medium text-base mb-4 text-white">Contacto</h4>
              <p className="font-nunito font-light text-base text-greenSimo200">
                Gob. José Guadalupe Covarrubias 57-20 Col. San Miguel Chapultepec <br /> 1a. Secc. Alcaldía Miguel Hidalgo</p>
              <ul className="font-nunito font-light text-lg md:text-lg leading-relaxed text-greenSimo200 mt-10">
                <li className="mb-2"><a href="#phone" className="hover:underline">+52 (55) 5271 · 5112</a></li>
                <li className="mb-2"><a href="#email" className="hover:underline">info@simomexico.com</a></li>
              </ul>
            </div>

            {/* Slogan */}
            <motion.div className="row-start-6 md:row-start-4 md:col-start-1 md:col-span-2"
              style={{ fontSize: 'clamp(.5rem, 1.25rem, 1.25rem)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 1 }}>
              <h1 className="font-urbanist text-lg text-white font-normal tracking-wide md:text-[clamp(1rem,50vw,1.25rem)]">
                Ideas que impulsan el cambio
              </h1>
            </motion.div>

            {/* Divider */}
            <motion.div className="row-start-7 sm:col-span-2 md:row-start-5 md:col-start-1 md:col-span-7 bg-white h-[1px]"
              initial={{ clipPath: 'inset(0% 100% 0% 0%)' }}
              animate={isInView ? { clipPath: 'inset(0% 0% 0% 0%)' } : {}}
              transition={{ duration: 1 }}>
            </motion.div>

            {/* Derechos */}
            <motion.div className="row-start-8 md:row-start-5 md:col-start-1 sm:col-span-3"
              style={{ fontSize: 'clamp(.5rem, 1.25rem, 1.25rem)' }}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 1 }}>
              <h1 className="font-urbanist text-white font-light tracking-wide text-sm mt-5">
                © 2024 SIMO MEXICO. Todos los derechos reservados</h1>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AcercaSimo;