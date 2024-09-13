
"use client";

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

// تعریف نوع Props
interface SliderProductDetailsProps {
  images: string[]; // آرایه‌ای از URLهای تصاویر
}

const SliderProductDetails: React.FC<SliderProductDetailsProps> = ({ images }) => {
  return (
    <Swiper
      effect={'cards'}
      grabCursor={true}
      modules={[EffectCards]}
      className="mySwiper"
    >
      {images.map((img, index) => (
        <SwiperSlide key={index}>
          <Image width={300} height={420} alt={`Image ${index}`} className="h-[420px] w-full" src={img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SliderProductDetails;
