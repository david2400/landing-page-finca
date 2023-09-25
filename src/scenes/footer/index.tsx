import { IFooterProps } from '@interfaces/footer';
import { TbBrandBooking, TbBrandAirbnb } from 'react-icons/tb';
import { BsInstagram } from 'react-icons/bs';
import { Button } from 'primereact/button';

import React from 'react';

export const Footer = () => {
  return (
    <footer className="relative from-gray-100 bg-gradient-to-t bg-gray-100 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-blueGray-700">
              Reserva a un toque !!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
            si quieres reservar da clic en el icono
            </h5>
            <div className=" flex mt-6 lg:mb-0 mb-6">
              <button
                className="flex bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <TbBrandBooking className="w-7 h-7 text-blue-900"  />
              </button>
              <button
                className=" flex bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <TbBrandAirbnb className="w-7 h-7 text-rose-700" />
              </button>
              <button
                className=" flex bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <BsInstagram className="w-6 h-6 text-rose-500" />
              </button>
              
            
            
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto"></div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2023</span>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
