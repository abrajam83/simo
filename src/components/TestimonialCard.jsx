import React from 'react';

const TestimonialCard = ({ cliente, cargo, logo, testimonio }) => {
  return (
    <div className="grid grid-cols-1 grid-rows-3 grid-personalizada lg:grid-cols-7 gap-y-2 w-full ">
      
      <div className="row-start-1 row-end-2 md:col-span-3 flex flex-col">
        <h2 className="text-2xl font-urbanist font-semibold ">{cliente}</h2>
        <p className="text-gray-600 font-nunito text-base "
        style={{ width: 'clamp(300px, 10vw, 100px)'}}>{cargo}</p>
      </div>

      <div className="row-start-2 flex flex-row md:col-span-5" >
      <p className="text-gray-600 font-nunito text-lg "
        style={{ width: 'clamp(275px, 25vw, 600px)' }}>{testimonio}</p>
      </div>

      <img src={logo} alt={logo} className="col-span-2 row-start-3 object-contain justify-self-start  mt-2 h-[100px]" 
      style={{ width: 'clamp(150px, 10vw, 200px)', height: 'clamp(100px, 5vw, 100px)' }}/>
    </div>
  );
};

export default TestimonialCard;

