"use client"


import React, { useRef, useState } from 'react';
import Image from 'next/image'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards } from 'swiper/modules';

const SliderProductDetails = ({Data}) => {
  const { cover} = Data || "";


  return (
    <>
      <Swiper
        effect={'cards'}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper "
      >
        <SwiperSlide > <img width={300} height={100} alt='' className="h-[420px] w-full" src={cover} /></SwiperSlide>
        <SwiperSlide> <img width={300} height={100} alt='' className="h-[420px] w-full"src={cover} /></SwiperSlide>
        <SwiperSlide> <img width={300} height={100} alt='' className="h-[420px] w-full" src={cover} /></SwiperSlide>


      </Swiper>
    </>
  );
}


export default SliderProductDetails





