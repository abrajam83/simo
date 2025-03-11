import React from 'react';
import { motion } from 'framer-motion';
import { arrowRightCircle, facebook, twitter, instagram, linkedin, img_4 } from '../assets'; 

const HeroSection = () => {

  return (
    <section id="herosection" className="relative h-screen flex flex-col justify-center overflow-hidden">

      {/* Fondo con movimiento parallax */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full bg-greenSimo"
        style={{ zIndex: -1 }}
        initial={{ y: 0 }}
        animate={{ y: [0, 50, 0] }} // Efecto parallax
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} // Repetir animación
      >
        <img 
          src={img_4} 
          alt="Background" 
          className="w-full h-full object-cover opacity-40"
        />
      </motion.div>

      {/* Contenido del HeroSection */}
      <motion.div 
        className="relative w-full h-full flex flex-col justify-center items-center px-4 md:px-52"
        initial={{ opacity: 0, y: 50 }} // Animación de entrada
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="grid md:grid-cols-4 grid-cols-1 gap-6 w-full ss:pr-20 sm:pr-0">
          <div className="flex flex-col gap-8 col-span-3 justify-center">
            
            <motion.h2
              className="text-white font-urbanist uppercase tracking-wider text-start"
              style={{ fontSize: 'clamp(1, 2vw, 1.5rem)' }}
              initial={{ opacity: 0, y: -60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1}}
            >
              Investigación disruptiva
            </motion.h2>

            <motion.h1
              className="font-urbanist font-bold text-greenSimo100 text-[clamp(2.5rem,4vw,5rem)] leading-[clamp(2.5rem,4vw,5rem)]"
              initial={{ opacity: 0, y: -60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              Respuestas claras <br /> a tus preguntas <br /> más importantes.
            </motion.h1>

            <motion.p
              className="font-nunito font-medium text-xl md:text-xl text-white max-w-[800px] mt-1 ss:mt-5 lg:leading-normal"
              initial={{ opacity: 0, y: -60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
            >
              Analizamos fenómenos sociales y económicos desde la raíz, aplicando metodologías innovadoras para replantear soluciones a problemas reales. Descubre cómo nuestra visión te ayudará a tomar decisiones más informadas y a alcanzar tus objetivos.
            </motion.p>

            <motion.button 
              className="flex ss:max-w-[350px] items-center pl-8 py-4 bg-white text-slate-800 text-xl font-semibold rounded-full hover:bg-slate-300 mt-5"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 }}
            >
              Hablemos de soluciones
              <img 
                src={arrowRightCircle} 
                alt="arrow icon" 
                className="w-8 h-8 ml-6"
              />
            </motion.button>
          </div>

          {/* Íconos de redes sociales */}
          <div className="hidden sm:flex sm:flex-row md:flex-col md:justify-end md:items-end col-span-1 gap-4 mr-8 sm:mt-20">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src={facebook} alt="Facebook icon" className="fill-slate-500" width={24} height={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src={instagram} alt="Instagram icon" className="text-slate-700" width={24} height={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <img src={linkedin} alt="Linkedin icon" className="text-slate-700" width={24} height={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src={twitter} alt="Twitter icon" className="text-slate-700" width={24} height={24} />
            </a>
          </div>
        </div>
      </motion.div>    
    </section>
  );
};

export default HeroSection;
