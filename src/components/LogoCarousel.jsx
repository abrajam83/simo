import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';
import { logoAlumbra, logoAspen, logoAvina, logoBancoM, logoBbva, logoBid, logoCesij, logoCide, logoCnaGray, logoIbero, logoIpas, logoMucd, logoPnud, logoRhino, logoRotoplasGray, logoSedena, logoUcMerced, logoUcSanDiego, logoUdlap, logoUsaidGray } from "../assets";
// Importa los 20 logos

const logos = [
    logoAlumbra, logoAspen, logoAvina, logoBancoM, logoBbva, logoBid, logoCesij, logoCide, logoCnaGray, logoIbero, logoIpas, logoMucd, logoPnud, logoRhino, logoRotoplasGray, logoSedena, logoUcMerced, logoUcSanDiego, logoUdlap, logoUsaidGray /* Agrega los demás logos aquí */
];

const LogoCarousel = () => {
  return (
    <div className="w-full overflow-hidden mt-10">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={5} // Espacio entre logos
        slidesPerView={10} // Cantidad de logos visibles por pantalla
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: false,
          speed: 4000, // Velocidad del scroll
        }}
        speed={2000}
        breakpoints={{
          350: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 8,
            spaceBetween:20
          },
        }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center items-center">
            <img
              src={logo}
              alt={`Logo ${index + 1}`}
              className="w-full h-auto object-contain"
              style={{ width: 'clamp(100px, 15vw, 120px)' }} // Ajuste de tamaño responsivo
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LogoCarousel;
