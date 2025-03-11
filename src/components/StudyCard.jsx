import React from 'react';
import { arrowRightGray, arrowRightPurple } from "../assets";

const StudyCard = ({ title, date, image }) => {
    return (
        <div className="bg-white rounded-2xl flex flex-col w-300 md:350 xl:400 justify-between overflow-hidden cursor-pointer transition group"
        
            onClick={() => window.location.href = url}>

            <div className="overflow-hidden rounded-2xl">
                <img src={image} alt={title} className="w-full h-[300px] object-cover rounded-2xl bg-slate-200 transform transition-transform duration-1000 group-hover:scale-110"
                    style={{ width: 'clamp(400px, 25vw, 300px)', height: 'clamp(225px, 12vw, 280px)' }} />
            </div>
            <div className="px-2 font-urbanist font-normal text-slate-600 mt-5">
                <span>{date}</span>
            </div>

            <div className="flex-grow px-2">
                <h3 className="text-2xl font-urbanist font-semibold mt-5 text-gray-900 line-clamp-4 group-hover:text-purpleSimo overflow-hidden"
                    style={{
                        display: '-webkit-box',
                        WebkitLineClamp: 4,  // Limitar a 2 líneas
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}
                >{title}</h3>
            </div>

            <div className="pl-1 flex mb-5 py-3">

                <button className="relative flex items-center  w-s h-14 ">
                    {/* Fondo que cambia en hover */}
                    <div className="absolute inset-0 bg-transparent transition"></div>

                    {/* Contenedor para los íconos */}
                    <div className="relative w-6 h-6 ml-2">
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
                    {/* Texto "Leer más" */}
                    <span className="relative font-urbanist text-xl font-semibold text-gray-600 group-hover:text-purpleSimo transition z-10 ml-2">Leer más</span>

                </button>




            </div>

        </div>
    );
};

export default StudyCard;

//style={{ width: '350px', height: '550px' }}