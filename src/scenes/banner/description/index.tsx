import React from 'react';
import { Image } from 'primereact/image';

export const Description = () => {
  return (
    <div className="relative w-full">
      <img
        src="/img/banners/bannerDetails.jpg"
        alt="Image"
        className="w-full object-cover object-center"
      />
      <div className="absolute top-0 left-0 w-1/3 h-full bg-black bg-opacity-20 flex justify-center items-start text-white">
        Sección 1
      </div>
      <div className="absolute top-0 left-1/3 w-1/3 h-full bg-black bg-opacity-20 flex justify-center items-center text-white">
        Sección 2
      </div>
      <div className="absolute top-0 left-2/3 w-1/3 h-full bg-black bg-opacity-20 flex justify-center items-end text-white">
        Sección 3
      </div>
    </div>
  );
};
