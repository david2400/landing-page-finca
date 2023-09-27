import React from 'react';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { openModal } from '@components/pool/modal/dataModal';
import { useAtom } from 'jotai';

export const Pool = () => {
  const [open, setOpen] = useAtom(openModal);

  return (
    <div className="grid w-full grid-cols-2 gap-4 py-4">
      <div
        data-aos="fade-right"
        data-aos-duration="3000"
        className="w-full col-span-2 sm:col-span-1 order-last lg:order-first"
      >
        <Image
          src="/img/pool/pool.png"
          zoomSrc="/img/pool/pool2.jpeg"
          preview
          alt="Jacuzi"
        />
      </div>
      <div className="w-full col-span-2 sm:col-span-1">
        <div className="w-full flex items-center justify-center">
          <div
            className="flex flex-col w-96 gap-8"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <h2 className="flex text-4xl font-bold justify-center tracking-tight italic text-black sm:text-6xl">
              Experiencias
            </h2>
            <p className="justify-center text-lg leading-8 text-gray-600 text-justify">
              Lejos de la ciudad, escuchando la naturaleza y observando un
              atardecer inolvidable capturaras momentos que no sacaras de tu
              memoria.
            </p>
            <Button
              label="Visualizar"
              severity="warning"
              outlined
              onClick={() => setOpen(!open)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
