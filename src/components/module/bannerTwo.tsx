"use client"
import Link from 'next/link';
import React, { useEffect } from 'react';
import 'animate.css';
import Image from 'next/image';

function BannerTwo() {
 

  return (
    <div className='grid grid-cols-1 md:grid-cols-8 gap-4 md:gap-9 ' >
      <div className='md:col-span-2 w-full h-[400px] md:h-[300px] relative cursor-pointer overflow-hidden  shadow-lg  transition-transform duration-700 delay-150 hover:scale-110 '>
        <Image width={1000} height={1000} alt='baner' className='w-full h-full ' data-aos="fade-left"  src='/images/banner-style-11-img-1.jpg' />
        <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-700 bg-black/50'>
          <div className='bg-gr text-white p-4 rounded-lg'>
            <Link href='/store'>
              نمایش بیشتر
            </Link>
          </div>
        </div>
      </div>
      <div className='md:col-span-4 w-full h-[400px] md:h-[300px] relative cursor-pointer overflow-hidden shadow-lg  transition-transform duration-700 delay-150 hover:scale-110 '>
        <Image width={1000} height={1000} alt='baner' className='w-full h-full 'data-aos="fade-up"  src='/images/banner-style-12-img-1.jpg' />
        <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-700 bg-black/50'>
          <div className='bg-gr text-white p-4 rounded-lg'>
            <Link href='/store'>
              نمایش بیشتر
            </Link>
          </div>
        </div>
      </div>
      <div className='md:col-span-2 w-full h-[400px] md:h-[300px] relative cursor-pointer overflow-hidden shadow-lg transition-transform duration-700 delay-150 hover:scale-110 '>
        <Image width={1000} height={1000} alt='baner' className='w-full h-full 'data-aos="fade-right" src='/images/banner-style-11-img-2.jpg' />
        <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-700 bg-black/50'>
          <div className='bg-gr text-white p-4 rounded-lg'>
            <Link href='/store'>
              نمایش بیشتر
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BannerTwo;

