import React from 'react';
import { Image } from 'primereact/image';

export const Description = () => {
  return (
    <div className="flex w-full">
      <div className="w-1/2">
        <Image src="/img/exterior.png" alt="Image" />
      </div>
      <div className="w-1/2">
        <Image src="/img/exterior.png" alt="Image" />
      </div>
    </div>
  );
};
