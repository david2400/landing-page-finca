import { DescriptionSection } from '@components/banner/description/container';
import { PoolSection } from '@components/pool/details';
import { Carousel } from '@components/carousel';
import { Comfort } from '@components/banner/comfort';
import { Contact } from '@components/banner/contact';

export const DataHome = () => {
  return (
    <>
      <Carousel></Carousel>
      <DescriptionSection></DescriptionSection>
      <PoolSection></PoolSection>
      <Comfort></Comfort>
      <Contact></Contact>
    </>
  );
};
