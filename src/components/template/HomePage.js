"use client"
import BannerOne from '@/module/BannerOne';
import BannerTwo from '@/module/BannerTwo';
import GuaranteeHomePage from '@/module/GuaranteeHomePage';
import SectionSlider from '@/module/SectionSlider';
import BlogSlider from '@/module/Slider/BlogSlider';
import CardSliderOne from '@/module/Slider/SliderCardOne';
import SliderHome from '@/module/Slider/SliderHome'
import useOptionsStore from '@/stores/OptionsStore';
import React, { useEffect, useState } from 'react'

function HomePage() {

    return (
        <div className='bg-white w-full h-full py-20 '>
            <div>
                <SliderHome />
            </div>
            <div className='px-5'>
                <BannerOne />
            </div>
            <div className='px-20'>
                <div>
                    <h4 className='text-3xl font-bold text-gr'>ورود های جدید</h4>
                    <p className='text-sm text-gray-500 py-3'>برای دریافت معاملات و هدایای انحصاری هم اکنون پیش سفارش دهید</p>
                </div>
                <CardSliderOne/>
                <CardSliderOne/>
            </div>
            <div className='px-4 py-10'>
                <BannerTwo/>
            </div>
            <div className='px-20'>
                <SectionSlider/>
            </div>
            <div className='px-20 py-10'>
                <GuaranteeHomePage/>
            </div>
            <div className='px-20 py-10'>
                <div className='py-3'>
                    <h4 className='text-2xl font-bold text-gr'>آخرین مقالات و بلاگ ها</h4>
                    <p className='text-gray-600 '> برای برجسته کردن لحظات جالب، پست ها را به بهترین نحو ارائه دهید از وبلاگ شما </p>
                </div>
                <BlogSlider/>
            </div>
        </div>
    )
}

export default HomePage