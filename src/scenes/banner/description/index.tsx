import React from 'react';
import { Button } from 'primereact/button';
import { openModal } from '@components/description/modal/dataModal';
import { useAtom } from 'jotai';

export const Description = () => {
  const [open, setOpen] = useAtom(openModal);
  return (
    <>
      <div className="flex w-full justify-around items-center mx-auto py-8">
        <div data-aos="fade-right" data-aos-duration="2000" className="w-1/2">
          <h2 className="text-4xl font-bold max-w-2xl tracking-tight italic text-black sm:text-6xl">
            Work with us
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
        </div>
        <div data-aos="fade-left" data-aos-duration="2000">
          <Button
            label="Warning"
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
          Sección 1
        </div>
        <div className="absolute top-0 left-1/3 w-1/3 h-full bg-black bg-opacity-20 flex justify-center items-center text-white">
          Sección 2
        </div>
        <div className="absolute top-0 left-2/3 w-1/3 h-full bg-black bg-opacity-20 flex justify-center items-end text-white">
          Sección 3
        </div>
      </div>
    </>
  );
};
