import React from 'react';
import { Image } from 'primereact/image';
import { Button } from 'primereact/button';
import { openModal } from '@components/pool/modal/dataModal';
import { useAtom } from 'jotai';

export const Pool = () => {
  const [open, setOpen] = useAtom(openModal);

  return (
    <div className="flex w-full">
      <div className="w-1/2">
        <Image
          src="/img/pool/pool.png"
          zoomSrc="/img/pool/pool2.jpeg"
          preview
          alt="Jacuzi"
        />
      </div>
      <div className="w-1/2">
        <div className="w-full h-full flex items-center justify-center">
          <div
            className="flex flex-col w-96 gap-8"
            data-aos="fade-left"
            data-aos-duration="3000"
          >
            <h2 className="text-4xl font-bold tracking-tight italic text-black sm:text-6xl">
              Work with us
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <Button
              label="Warning"
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
