import { Image } from 'primereact/image';
import { BsInstagram } from 'react-icons/bs';
import { TbBrandBooking, TbBrandAirbnb } from 'react-icons/tb';
import { Button } from 'primereact/button';

import React from 'react';
import Link from 'next/link';

export const Contact = () => {
  return (
    <div id="contact" className="w-full grid grid-cols-2 gap-4 py-4">
      <div data-aos="fade-right" className="w-full hidden lg:block">
        <Image src="/img/contact/contact.jpeg" alt="Image" preview />
      </div>
      <div className="w-full flex items-center justify-center col-span-2 lg:col-span-1">
        <div
          className="flex flex-col w-full gap-8"
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
             
              <TbBrandBooking className="w-8 h-8 text-blue-900" />
              <Link className="h-4 w-4 justify-center" href="https://nextjs.org/docs/pages/api-reference/components/link"></Link>
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
  );
};
