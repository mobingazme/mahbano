import Link from 'next/link';
import React from 'react';

function BannerTwo() {
  return (
    <div className='grid grid-cols-8 gap-9 '>
      <div className='col-span-2 w-full h-[300px] relative cursor-pointer overflow-hidden shadow-lg  transition-transform duration-700 delay-150 hover:scale-110 '>
        <img className='w-full h-full animate__animated animate__fadeInRight' src='/images/banner-style-11-img-1.jpg' />
        <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-700 bg-black/50'>
          <div className='bg-gr text-white p-4 rounded-lg'>
            <Link href='/store'>
              نمایش بیشتر
            </Link>
          </div>
        </div>
      </div>
      <div className='col-span-4 w-full h-[300px] relative cursor-pointer overflow-hidden shadow-lg  transition-transform duration-700 delay-150 hover:scale-110 '>
        <img className='w-full h-full animate__animated animate__fadeInUp animate__delay-2s' src='/images/banner-style-12-img-1.jpg' />
        <div className='absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-700 bg-black/50'>
          <div className='bg-gr text-white p-4 rounded-lg'>
            <Link href='/store'>
              نمایش بیشتر
            </Link>
          </div>
        </div>
      </div>
      <div className='col-span-2 w-full h-[300px] relative cursor-pointer overflow-hidden shadow-lg transition-transform duration-700 delay-150 hover:scale-110 '>
        <img className='w-full h-full animate__animated animate__fadeInLeft ' src='/images/banner-style-11-img-2.jpg' />
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