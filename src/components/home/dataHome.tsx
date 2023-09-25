import { DescriptionSection } from '@components/description/container';
import { PoolSection } from '@components/pool/details';
import { Carousel } from '@components/carousel';

export const DataHome = () => {
  return (
    <>
      <Carousel></Carousel>
      <DescriptionSection></DescriptionSection>
      <PoolSection></PoolSection>
    </>
  );
};
