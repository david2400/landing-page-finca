import { DescriptionSection } from '@components/description/container';
import { PoolSection } from '@components/pool/details';
import { Carousel } from '@components/carousel';
import { Comfort } from '@components/comfort';
import { Footer } from '@components/footer';

export const DataHome = () => {
  return (
    <>
      <Carousel></Carousel>
      <DescriptionSection></DescriptionSection>
      <PoolSection></PoolSection>
      <Comfort></Comfort>
      <Footer></Footer>
    </>
  );
};
