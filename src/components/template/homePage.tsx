'use client';

import React from 'react';
import BannerOne from '@/module/bannerOne';
import BannerTwo from '@/module/bannerTwo';
import GuaranteeHomePage from '@/module/guaranteeHomePage';
import SectionSlider from '@/module/slider/sectionSlider';
import BlogSlider from '@/module/slider/blogSlider';
import CardSliderOne from '@/module/slider/sliderCardOne';
import SliderHome from '@/module/slider/sliderHome';

const HomePage: React.FC = () => {
  return (
    <div className='bg-white w-full h-full py-20'>
      <div className='w-full h-fit -z-0'>
        <SliderHome />
      </div>
      <div className='lg:px-5'>
        <BannerOne />
      </div>
      <div className='px-5 md:px-20 my-20 md:my-0 -z-10'>
        <div className=''>
          <h4 data-aos="flip-up" className='text-lg md:text-3xl font-bold text-gr'>
            ورود های جدید
          </h4>
          <p
            data-aos="flip-up" data-aos-duration="300"
            className='text-sm text-gray-500 py-1 md:py-3'>
            برای دریافت معاملات و هدایای انحصاری هم اکنون پیش سفارش دهید
          </p>
        </div>
        <CardSliderOne />
        <CardSliderOne />
      </div>
      <div className='px-4 md:py-10'>
        <BannerTwo />
      </div>
      <div className='px-4 md:px-20'>
        <SectionSlider />
      </div>
      <div className='md:px-20 px-5 py-10'>
        <GuaranteeHomePage />
      </div>
      <div className='md:px-20 px-3 py-10'>
        <div className='py-3'>
          <h4 data-aos="flip-up" className='md:text-2xl text-lg font-bold text-gr'>
            آخرین مقالات و بلاگ ها
          </h4>
          <p data-aos="flip-up" data-aos-duration="300" className='text-gray-600'>
            برای برجسته کردن لحظات جالب، پست ها را به بهترین نحو ارائه دهید از وبلاگ شما
          </p>
        </div>
        <BlogSlider />
      </div>
    </div>
  );
}

export default HomePage;
