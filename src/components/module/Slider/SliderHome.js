"use client"
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'animate.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


// import required modules
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
import useOptionsStore from '@/stores/OptionsStore';

export default function SliderHome() {

    const { options, isLoading, isError, getOptionsFromApi } = useOptionsStore();
    const [optionsData, setOptionsData] = useState({
        logo: '',
        sitename: '',
        description: '',
    });
    useEffect(() => {
        getOptionsFromApi();
    }, []);

    useEffect(() => {
        if (options) {
            setOptionsData({
                logo: options?.information_site?.logo2 || '',
                sitename: options?.information_site?.sitename || '',
                description: options?.information_site?.description || '',
            });
        }
    }, [options]);

    

    return (
        <Swiper
            spaceBetween={30}
            effect={'fade'}
            pagination={{
                clickable: true,
            }}
            modules={[EffectFade, Navigation, Pagination]}
            className="mySwiper "
        >
            <SwiperSlide className='relative'>
                <img src="/images/hero-slider-1.jpg" />
                <div className='absolute top-60 right-20 z-10 animate__animated animate__fadeInUp animate__delay-2s'>
                    <h2 className='text-gray-950 text-4xl font-bold'>{optionsData.sitename}</h2>
                    <h2 className='text-gray-950 text-2xl py-5'>{optionsData.description}</h2>
                    <button className='font-bold text-gray-950 border border-gray-950 hover:border-Turquoise hover:text-Turquoise rounded-md w-32 transition duration-300 h-12'>خرید کنید</button>
                </div>
            </SwiperSlide>
            <SwiperSlide className='relative'>
                <img src="/images/hero-slider-2.jpg" />
                <div className='absolute top-60 right-20 z-10 animate__animated animate__fadeInUp animate__delay-2s'>
                    <h2 className='text-gray-950 text-4xl font-bold'>{optionsData.sitename}</h2>
                    <h2 className='text-gray-950 text-2xl py-5'>{optionsData.description}</h2>
                    <button className='font-bold text-gray-950 border border-gray-950 hover:border-Turquoise hover:text-Turquoise rounded-md w-32 transition duration-300 h-12'>خرید کنید</button>
                </div>
            </SwiperSlide>
        </Swiper>
    );
}