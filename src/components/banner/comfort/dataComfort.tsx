import { Comfort } from '@scenes/banner/comfort';
import React from 'react';

export const DataComfort = () => {
  const data = [
    { url: '/img/exterior/exterior2.jpeg' },
    { url: '/img/exterior/exterior3.jpeg' },
    { url: '/img/exterior/exterior4.jpeg' },
    { url: '/img/exterior/exterior8.jpeg' },
  ];
  return <Comfort data={data}></Comfort>;
};
