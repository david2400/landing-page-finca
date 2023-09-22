import { Description } from '@/scenes/banner/description';
import { Pool } from '@/scenes/banner/piscina';
import { Carousel } from '@components/carousel';

export const DataHome = () => {
  return (
    <>
      <Carousel></Carousel>
      <Description></Description>
      <Pool></Pool>
    </>
  );
};
