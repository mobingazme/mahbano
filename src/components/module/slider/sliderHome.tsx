"use client";
import React, { useEffect, useState } from 'react';
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
import useOptionsStore from '@/stores/useOptionsStore';
import Image from 'next/image';

// Define types for the options data
interface OptionsData {
    logo: string;
    sitename: string;
    description: string;
}

export default function SliderHome() {
    const { options, isLoading, isError, getOptionsFromApi } = useOptionsStore();
    const [optionsData, setOptionsData] = useState<OptionsData>({
        logo: '',
        sitename: '',
        description: '',
    });

    useEffect(() => {
        getOptionsFromApi();
    }, [getOptionsFromApi]);

    useEffect(() => {
        if (options) {
            setOptionsData({
                logo: options.information_site?.logo2 || '',
                sitename: options.information_site?.sitename || '',
                description: options.information_site?.description || '',
            });
        }
    }, [options]);

    return (
        <div id='1' className="h-[500px] md:h-screen">
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                effect={'fade'}
                pagination={{
                    clickable: true,
                }}
                modules={[EffectFade, Navigation, Pagination]}
                className="mySwiper h-full w-full"
            >
                <SwiperSlide className='relative'>
                    <Image width={1000} height={100} alt='mahbano' className='h-full w-full cursor-pointer' src="/images/hero-slider-1.jpg" />
                    <div className='absolute bottom-3 md:top-60 right-2 md:right-20 z-10 animate__animated animate__fadeInUp animate__delay-2s'>
                        <h2 className='text-gray-950 text-sm lg:text-4xl font-bold'>{optionsData.sitename || 'HONO'}</h2>
                        <h2 className='text-gray-950 text-sm lg:text-2xl py-1 lg:py-5'>{'برای دریافت هدایای هم اکنون سفارش دهید'}</h2>
                        <button className='lg:font-bold text-gray-950 border border-gray-950 hover:border-Turquoise hover:text-Turquoise rounded-md w-20 lg:w-32 transition duration-300 h-12'>خرید کنید</button>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide className='relative'>
                    <Image width={1000} height={100} alt='mahbano' className='h-full w-full cursor-pointer' src="/images/hero-slider-2.jpg" />
                    <div className='absolute bottom-3 lg:top-60 right-2 lg:right-20 z-10 animate__animated animate__fadeInUp animate__delay-2s'>
                        <h2 className='text-gray-950 text-sm lg:text-4xl font-bold'>{optionsData.sitename || 'HONO'}</h2>
                        <h2 className='text-gray-950 text-sm lg:text-2xl py-1 lg:py-5'>{'برای دریافت هدایای هم اکنون سفارش دهید'}</h2>
                        <button className='lg:font-bold text-gray-950 border border-gray-950 hover:border-Turquoise hover:text-Turquoise rounded-md w-20 lg:w-32 transition duration-300 h-12'>خرید کنید</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
