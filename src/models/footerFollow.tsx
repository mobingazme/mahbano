'use client';
import React from 'react';
import { Icon } from '@iconify/react';

// FooterFollow component to display social media follow icons
const FooterFollow: React.FC = () => (
  <div>
    <h4 id="footer" data-aos="zoom-in-up" className='text-white font-bold text-xl mt-5 md:mt-0'>دنبال کنید</h4>
    <div data-aos="fade-up" data-aos-duration="2000" className="p-10 flex">
      <div className='w-14 md:w-10 h-14 md:h-10 flex items-center justify-center bg-gray-600 hover:bg-white hover:text-gray-600 border-gr rounded-full cursor-pointer delay-75 transition duration-300'>
        <Icon className='w-10 md:w-6 md:h-6 h-10' icon="ri:facebook-fill" />
      </div>
      <div className='w-14 md:w-10 h-14 md:h-10 flex items-center justify-center bg-gray-600 hover:bg-white hover:text-gray-600 border-gr rounded-full cursor-pointer delay-75 transition duration-300 mx-3'>
        <Icon className='w-10 md:w-6 md:h-6 h-10' icon="ri:twitter-fill" />
      </div>
      <div className='w-14 md:w-10 h-14 md:h-10 flex items-center justify-center bg-gray-600 hover:bg-white hover:text-gray-600 border-gr rounded-full cursor-pointer delay-75 transition duration-300'>
        <Icon className='w-10 md:w-6 md:h-6 h-10' icon="mdi:instagram" />
      </div>
      <div className='w-14 md:w-10 h-14 md:h-10 flex items-center justify-center bg-gray-600 hover:bg-white hover:text-gray-600 border-gr rounded-full cursor-pointer delay-75 transition duration-300 mx-3'>
        <Icon className='w-10 md:w-6 md:h-6 h-10' icon="uil:telegram-alt" />
      </div>
    </div>
  </div>
);

export default FooterFollow;
