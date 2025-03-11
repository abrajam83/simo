import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ServiceCard from './ServiceCard';
import 'swiper/css';
import { Autoplay, EffectCoverflow } from 'swiper/modules';

const ServiceCarousel = ({ }) => {

  const services = [
    { title: "Inteligencia de Mercados", description: "Las empresas deben adaptarse a los mercados alineando su producción y estrategia a las expectativas y necesidades de los consumidores.", icon: "./src/assets/bannerInteligenciaMercados.png" },
    { title: "Estudios Electorales", description: "Las campañas políticas exitosas vinculan al ciudadano comprendiendo los motivos y emociones que guían las decisiones de los electores.", icon: "./src/assets/bannerEstudiosElectorales.png" },
    { title: "Sociedad Civil", description: "Profundizamos en el conocimiento de grupos organizados, sus niveles de institucionalización,  sustentabilidad, fortalezas y debilidades en el ámbito público.", icon: "./src/assets/bannerSociedadCivil.png" },
    { title: "Políticas Públicas", description: "Acciones de gobierno que intervienen en áreas sociales o económicas que los mercados no son capaces de resolver de manera satisfactoria.", icon: "./src/assets/bannerPoliticasPublicas.png" },
    { title: "Agroindustria", description: "Este sector requiere de diversas estrategias que permitan incrementar su competitividad eficientizar su transformación,  comercialización y abasto.", icon: "./src/assets/bannerAgroindustria.png" },
    { title: "Proyectos Educativos", description: "Procesos de transformación social, entendidos estos como un re acomodo de grupos y actores sociales de cara al orden institucional.", icon: "./src/assets/bannerProyectosEducativos.png" },
    { title: "Estudios de Género", description: "Analizan las relaciones de género como un orden que se impone a los individuos, pero que al mismo tiempo los individuos reproducen en sus prácticas.", icon: "./src/assets/bannerEstudiosGenero.png" },
    { title: "Diseño de Información", description: "Generamos sistemas de comunicación que transforman datos en productos de diseño accesibles al público a quien va dirigido.", icon: "./src/assets/bannerDiseno.png" }
  ];

  const handleMouseEnter = (swiper) => {
    swiper.autoplay.stop();
  };

  const handleMouseLeave = (swiper) => {
    swiper.autoplay.start();
  };

  return (
    <div className="container mx-auto px-6 min-w-[400px] max-w-[1100px] overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectCoverflow]}
        spaceBetween={2} // Aumentar el espacio entre slides
        slidesPerView={1} // Mostrar 1 slide por vista (ajustable en breakpoints)
        centeredSlides={true}
        effect="coverflow"
        coverflowEffect={{
          rotate: 25,          // Rotación leve para efecto 3D
          stretch: -5,        // Estiramiento negativo para separar más las tarjetas
          depth: 350,          // Profundidad del efecto 3D
          modifier: 1,         // Modificador del tamaño de las tarjetas no enfocadas
          slideShadows: false, // Sin sombras
          scale: 0.6,          // Escala para las tarjetas no enfocadas
        }}
        loop={true}
        speed={700}
        autoplay={{
          delay: 2500,           // Duración de la tarjeta antes de cambiar
          disableOnInteraction: false, // No pausar al interactuar
        }}
        breakpoints={{
          1700: {
            slidesPerView: 2,   // Mostrar 2 slides por vista en pantallas grandes
            coverflowEffect: {
              stretch: -5,      // Ajuste del estiramiento en pantallas grandes
            },
          },
          1200: {
            slidesPerView: 2,   // Mostrar 1 slide por vista en pantallas más pequeñas
            coverflowEffect: {
              stretch: -40,    // Ajuste del estiramiento en dispositivos pequeños
            },
          },
        }}
        onSwiper={(swiper) => {
          // Pasar la instancia de swiper a los eventos de mouse
          swiper.el.addEventListener('mouseenter', () => handleMouseEnter(swiper));
          swiper.el.addEventListener('mouseleave', () => handleMouseLeave(swiper));
        }}
      >
        {services.map((service, index) => (
          <SwiperSlide
            key={index}
            className="flex items-center justify-center"  // Centrar la tarjeta dentro del SwiperSlide
            style={{ height: '100%', width: '100%' }}      // Asegurar que ocupen todo el espacio disponible
          >
            <ServiceCard
              title={service.title}
              description={service.description}
              icon={service.icon}
              url={service.url}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceCarousel;
