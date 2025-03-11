import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialCard from './TestimonialCard';
import { logoRotoplas, logoCna, logoUsaid } from '../assets';

import "/src/index.css"
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import { EffectCoverflow } from 'swiper/modules';


const TestimonialCarousel = ({ swiperRef }) => {


    const testimonial = [
        { cliente: "Carlos Ochoa", cargo: "Director de Estrategia y Desarrollo", testimonio: "Trabajar con SIMO fue clave para el éxito de nuestra nueva línea de productos sustentables. Su capacidad para obtener insights relevantes nos permitió comprender mejor las necesidades de nuestros consumidores y adaptar nuestras estrategias de manera eficiente. Su enfoque profesional y personalizado marcó una gran diferencia en nuestros resultados.", logo: logoRotoplas },
        { cliente: "Juan Cortina", cargo: "Vicepresidente", testimonio: "SIMO ha sido un aliado estratégico invaluable para nuestro trabajo. Su equipo de expertos no solo comprendió la complejidad del sector agropecuario, sino que también nos proporcionó información precisa y recomendaciones prácticas que nos han ayudado a optimizar nuestras decisiones. La calidad de sus estudios y su dedicación nos han dado una ventaja competitiva significativa.", logo: logoCna },
        { cliente: "Carlos Ochoa", cargo: "Director de Estrategia y Desarrollo", testimonio: "Trabajar con SIMO fue clave para el éxito de nuestra nueva línea de productos sustentables. Su capacidad para obtener insights relevantes nos permitió comprender mejor las necesidades de nuestros consumidores y adaptar nuestras estrategias de manera eficiente. Su enfoque profesional y personalizado marcó una gran diferencia en nuestros resultados.", logo: logoRotoplas },
        { cliente: "Claire Ferguson", cargo: "CEO México", testimonio: "SIMO ha sido fundamental en la ejecución de nuestros proyectos más importantes en México. Su enfoque meticuloso en la recolección y análisis, junto con su capacidad para generar informes claros y accionables, ha sido determinante en la toma de decisiones. Su profesionalismo y compromiso nos han permitido avanzar en nuestras iniciativas con mayor seguridad y eficacia.", logo: logoUsaid },
    ];

    return (

        <Swiper className='container md:w-full md:overflow-hidden lg:max-w-none'
            ref={swiperRef}
            modules={[EffectCoverflow]} 
            effect='coverflow'
            spaceBetween={10} // Aumentar el espacio entre slides
            slidesPerView={3} // Mostrar x slide por vista (ajustable en breakpoints)
            centeredSlides={true}
            loop={true}
            speed={700}
            coverflowEffect={{
                rotate: 0,  
                modifier:1,              // Evita la rotación (giro) de las tarjetas
                stretch: 0,               // Evita que las tarjetas se estiren
                depth: 100,               // Controla la profundidad 3D (más pequeño, más cercanas)
                slideShadows: false,      // Desactiva las sombras por defecto del Coverflow
              }}
              grabCursor={true}           // Cambia el cursor a "grabbing" para mayor interactividad

            breakpoints={{
                1700: {
                    slidesPerView: 2,   // Mostrar 2.5 slides en pantallas grandes para ver parte del lado izquierdo y derecho
                },
                1440: {
                    slidesPerView: 2, 
                    stretch: 30,
                    spaceBetween:20,
                    centeredSlides:false,
                 // Mostrar parcialmente los slides en pantallas medianas
                },

                1200: {
                    slidesPerView: 2, 
                    stretch: 30,
                    spaceBetween:20,
                    centeredSlides:false,
                 // Mostrar parcialmente los slides en pantallas medianas
                },

                375: {
                    slidesPerView: 1, 
                    spaceBetween:40,
                   // Mostrar 1 slide en pantallas pequeñas
                },
            }}
        >
            {testimonial.map((testimon, index) => (
                <SwiperSlide
                    key={index}
                    className="flex items-center justify-center "  // Centrar la tarjeta dentro del SwiperSlide

                >
                    <TestimonialCard
                        cliente={testimon.cliente}
                        cargo={testimon.cargo}
                        testimonio={testimon.testimonio}
                        logo={testimon.logo}
                    />
                </SwiperSlide>
            ))}
        </Swiper>

    );
};

export default TestimonialCarousel;
