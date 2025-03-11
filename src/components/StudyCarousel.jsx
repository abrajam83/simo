import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import StudyCard from './StudyCard';
import 'swiper/css';
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { claudiaSheinbaumPortada, cnaVisionFuturoPortada, energiaPortada, estudiantesPortada, igiAmbientalPortada, meridaPortada } from '../assets';


const StudyCarousel = ({ }) => {

  const studies = [
    { date: "Febrero 19", title: "Resumen ejecutivo: Visión de Futuro para el sector agroalimentario y forestal", image: cnaVisionFuturoPortada },
    { date: "Febrero 15", title: "Encuesta | Sheinbaum aventaja 35 puntos a Gálvez rumbo al arranque de campañas", image: claudiaSheinbaumPortada },
    { date: "Noviembre 2023", title: "Índice Global de Impunidad Ambiental Latinoamérica", image: igiAmbientalPortada },
    { date: "Octubre 2021", title: "La vía rápida hacia nuevas competencias", image: estudiantesPortada },
    { date: "Julio 2021", title: "Portafolio: Medio Ambiente y energía Simo", image: energiaPortada },
    { date: "Mayo 2021", title: "Encuesta de opinión pública en Mérida, Yucatán", image: meridaPortada },
  ];

  const handleMouseEnter = (swiper) => {
    swiper.autoplay.stop();
  };

  const handleMouseLeave = (swiper) => {
    swiper.autoplay.start();
  };

  return (
    <div className="container w-full max-w-full overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectCoverflow]}
        spaceBetween={40} // Aumentar el espacio entre slides
        slidesPerView={4} // Mostrar 1 slide por vista (ajustable en breakpoints)
        centeredSlides={false}
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,          // Rotación leve para efecto 3D
          stretch: 0,        // Estiramiento negativo para separar más las tarjetas
          depth: 0,          // Profundidad del efecto 3D
          modifier: 0,         // Modificador del tamaño de las tarjetas no enfocadas
          slideShadows: false, // Sin sombras
          scale: 1,          // Escala para las tarjetas no enfocadas
        }}
        loop={true}
        speed={700}
        autoplay={{
          delay: 2500,           // Duración de la tarjeta antes de cambiar
          disableOnInteraction: false, // No pausar al interactuar
        }}
        breakpoints={{
          1700: {
            slidesPerView: 4,
            spaceBetween: 40, 
          },
          1100: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,   // Espacio entre slides
            effect: 'slide',    // Cambiar a un efecto más simple en móviles // Mostrar 1 slide por vista en pantallas más pequeñas
          },
          375: {
            slidesPerView: 1,   // Mostrar 1 slide por vista en pantallas más pequeñas
            spaceBetween: 30,   // Espacio entre slides
            effect: 'slide',    // Cambiar a un efecto más simple en móviles
          },

        }}
        onSwiper={(swiper) => {
          // Pasar la instancia de swiper a los eventos de mouse
          swiper.el.addEventListener('mouseenter', () => handleMouseEnter(swiper));
          swiper.el.addEventListener('mouseleave', () => handleMouseLeave(swiper));
        }}
      >
        {studies.map((study, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center w-full"  // Centrar la tarjeta dentro del SwiperSlide
            style={{ height: '100%', width: '100%'}}      // Asegurar que ocupen todo el espacio disponible
          >
            <StudyCard
              date={study.date}
              title={study.title}
              image={study.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default StudyCarousel;

