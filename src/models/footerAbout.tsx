'use client';
import React from 'react';
import { OptionsData } from '@/types/optionsStoreTypes';

// Define the type for the props
interface FooterAboutProps {
  optionsData: OptionsData;
  currentPage: string;
}

// FooterAbout component to display information about the company
const FooterAbout: React.FC<FooterAboutProps> = ({ optionsData, currentPage }) => (
  <div className='p-5 lg:p-10'>
    <h3 data-aos="zoom-in-up" className={`text-white text-xl font-bold border-b-2 w-fit pb-3 ${currentPage === '/' ? 'border-b-Turquoise' : 'border-b-B'}`}>درباره ما</h3>
    <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2500" className='pt-3 lg:pt-7'>
      <h4 className='text-gray-500 w-fit mb-2'>{optionsData.short_description}</h4>
      <p className='text-gray-500 w-fit'>آدرس: {optionsData.address}</p>
      {optionsData.address_2 && <p className='text-gray-500 w-fit'>آدرس: {optionsData.address_2}</p>}
      <span className='text-gray-500 w-fit mt-2'>{optionsData.email_support}</span>
    </div>
  </div>
);

export default FooterAbout;
