import { Image } from 'primereact/image';
import { BsInstagram } from 'react-icons/bs';
import { TbBrandBooking, TbBrandAirbnb } from 'react-icons/tb';
import { Button } from 'primereact/button';

import React from 'react';

export const Footer = () => {
  return (
    <div className="flex w-full">
      <div className="w-1/2">
        <Image
          src="/img/vino.jpeg"
          alt="Image"  preview 
        />
      </div>
      <div className="w-1/2">
        <div className="w-full h-full flex items-center justify-center">
          <div
            className="flex flex-col w-96 gap-8"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <h2 className="text-4xl font-bold tracking-tight italic text-center text-black sm:text-6xl">
              Contactenos
            </h2>
            <h3 className="italic text-center text-slate-500">
              Haz tu reserva aqui !!
            </h3>
            <div className="flex justify-center mt-6 lg:mb-0 mb-6">
              <button
                className="flex bg-white text-lightBlue-400 shadow-lg font-normal h-20 w-20 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <TbBrandBooking className="w-8 h-8 text-blue-900"  />
              </button>
              <button
                className=" flex bg-white text-lightBlue-600 shadow-lg font-normal h-20 w-20 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <TbBrandAirbnb className="w-8 h-8 text-rose-700" />
              </button>
              <button
                className=" flex bg-white text-lightBlue-600 shadow-lg font-normal h-20 w-20 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <BsInstagram className="w-8 h-8 text-rose-500" />
              </button>
              
            
            
            </div>
          </div>
        </div>
      </div>
    </div>
     );
};
