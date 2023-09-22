import React from 'react';
import { Image } from 'primereact/image';

export const Pool = () => {
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
        <div ></div>
      </div>
    </div>
  );
};
