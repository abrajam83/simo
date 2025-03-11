import React from 'react';
import { arrowRightGray, arrowRightPurple } from "../assets";

const ServiceCard = ({ title, description, icon, url }) => {
  return (
    <div
      className="bg-gray-100 rounded-2xl flex flex-col w-full max-w-[400px] justify-between h-full max-h-[480px] cursor-pointer overflow-hidden group"
      style={{ width: 'clamp(275px, 28vw, 400px)', height: 'clamp(450px, 50vw, 600px)' }}
      onClick={() => window.location.href = url}>
      
      {/* Imagen */}
      <div className="overflow-hidden">
        <img
          src={icon}
          alt={title}
          className="w-full h-[160px] md:h-[220px] lg:h-[260px] object-cover rounded-t-2xl bg-slate-200 transition-transform duration-1000 group-hover:scale-110"
        />
      </div>
      
      {/* Contenido (título y descripción) */}
      <div className="mt-5 flex-grow">
        <h3 className="px-6 md:px-8 text-2xl font-urbanist font-semibold mb-4 group-hover:text-purpleSimo">{title}</h3>
        <p className="text-gray-600 px-6 md:px-8 font-nunito text-lg mb-6">
          {description}
        </p>
      </div>

      {/* Botón "Conoce más" */}
      <div className="px-8 md:flex flex-row items-center mb-5 hidden">
        <button className="flex items-center justify-center mr-3">
          {/* Contenedor para los íconos */}
          <div className="relative w-6 h-6">
            {/* Icono gris por defecto */}
            <img
              src={arrowRightGray}
              alt="Icono gris"
              className="absolute w-6 h-6 transition-opacity duration-300 ease-in-out group-hover:opacity-0 z-10"
            />
            {/* Icono morado en hover */}
            <img
              src={arrowRightPurple}
              alt="Icono morado"
              className="absolute w-6 h-6 opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 z-10"
            />
          </div>
        </button>
        <span className="font-nunito font-semibold text-lg text-gray-700 group-hover:text-purpleSimo">
          Conoce más
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
