import React from 'react';
import { Button } from 'primereact/button';
import { openModal } from '@components/banner/description/modal/dataModal';
import { useAtom } from 'jotai';

export const Description = () => {
  const [open, setOpen] = useAtom(openModal);
  return (
    <div id="description">
      <div className="grid grid-cols-2 w-full p-4 mx-auto">
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className="flex flex-col w-full col-span-2 sm:col-span-1 gap-4"
        >
          <h1 className="flex text-4xl font-bold max-w-2xl tracking-tight italic text-black sm:text-6xl justify-center">
            La Casita
          </h1>
          <p className="flex mt-6 text-lg leading-8 text-gray-600 text-justify mx-auto">
            La casita es un lugar único para vivir experiencias inolvidables, a
            solo 10 minutos de Filandia, Quindío. Rodeado de montañas y un
            paisaje natural impresionante, nuestro hospedaje premiun está
            diseñado con cada detalle pensado para brindarte confort y plenitud.
          </p>
        </div>
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          className="flex w-full col-span-2 sm:col-span-1 items-center justify-center"
        >
          <Button
            label="Visualizar"
            severity="warning"
            outlined
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>
      <div data-aos="fade-up" className="relative w-full">
        <img
          src="/img/banners/bannerDetails.jpg"
          alt="Image"
          className="w-full object-cover object-center"
        />
        <div className="absolute top-0 left-0 w-1/3 h-full bg-black bg-opacity-20 flex justify-center items-start text-white">
          Naturaleza
        </div>
        <div className="absolute top-0 left-1/3 w-1/3 h-full bg-black bg-opacity-20 flex justify-center items-center text-white">
          Experiencias
        </div>
        <div className="absolute top-0 left-2/3 w-1/3 h-full bg-black bg-opacity-20 flex justify-center items-end text-white">
          Confort
        </div>
      </div>
    </div>
  );
};
