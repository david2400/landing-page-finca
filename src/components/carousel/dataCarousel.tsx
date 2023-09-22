import { Carousel } from '@scenes/carousel';
import React from 'react';

export const DataCarousel = () => {
  const data = [
    { url: '/img/exterior/exterior2.jpeg' },
    { url: '/img/exterior/exterior3.jpeg' },
    { url: '/img/exterior/exterior4.jpeg' },
    { url: '/img/exterior/exterior5.jpeg' },
    { url: '/img/exterior/exterior6.jpeg' },
    { url: '/img/exterior/exterior7.jpeg' },
    { url: '/img/exterior/exterior8.jpeg' },
  ];
  
  return <Carousel data={data}></Carousel>;
};
