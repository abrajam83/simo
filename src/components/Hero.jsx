import React from 'react'



const Hero = () => {
  return (
    <section id="hero">

  <div className="flex flex-col md:flex-row gap-10 xl:gap-28">


        <h1 className='flex-none flex-shrink font-urbanist font-medium text-grayDarkSimo text-center sm:text-left text-6xl xl:text-7xl leading-[50px] lg:leading-[75px] max-w-[800px] lg:mt-2 '>
        <span className="gradient-text">Respuestas</span> claras <br/> a tus preguntas <br/> más importantes.
        </h1>

        <div className="flex-1 flex-col text-center ss:text-left">
        <p className="font-nunito font-normal text-lg mx-16 sm:max-w-[500px] py-5 my-2 leading-normal text-grayDarkSimo text-center sm:text-left mb-5  sm:ml-28 md:ml-0 lg:mr-20 xl:mr-0">
          Analizamos fenómenos sociales y económicos desde la raíz, aplicando metodologías innovadoras para replantear soluciones a problemas reales. Descubre cómo nuestra visión te ayudará a tomar decisiones más informadas y a alcanzar tus objetivos.
        </p>

        <a href="#acerca-de-simo" className="text-center w-72 ss:px-10 py-4 bg-white text-greenSimo font-bold rounded-full hover:bg-bgButtonHoverSimoGreen transition sm:ml-28  md:ml-0">
            Hablemos de soluciones
        </a>

        </div>
  </div>

</section>
  )
}

export default Hero