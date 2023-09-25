import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ICarouselProps } from '@interfaces/carousel';
import { Image } from 'primereact/image';

export const Carousel = ({ data }: ICarouselProps) => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect="fade"
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="z-0"
      >
        {data?.map(value => (
          <SwiperSlide className="bg-black flex justify-center">
            <Image
              src={value.url}
              preview
              className="object-cover object-center"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
