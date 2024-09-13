'use client';
import React from 'react';

// تعریف نوع props
interface FooterInfoProps {
    currentPage: string; // نوع prop `currentPage` به عنوان string
}

// FooterInfo component to display footer information
const FooterInfo: React.FC<FooterInfoProps> = ({ currentPage }) => (
  <div className='p-5 lg:p-10'>
    <h3 data-aos="zoom-in-up" className={`text-white text-xl font-bold border-b-2 w-fit pb-3 ${currentPage === '/' ? 'border-b-Turquoise' : 'border-b-B'}`}>
      اطلاعات
    </h3>
    <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000" className='pt-3 lg:pt-7'>
      <h4 className='text-gray-500 hover:text-white cursor-pointer transition duration-300 ease-in transform hover:translate-x-[-10px] delay-75 w-fit'>
        اطلاعات تحویل
      </h4>
      <h4 className='text-gray-500 hover:text-white cursor-pointer transition duration-300 ease-in transform hover:translate-x-[-10px] delay-75 w-fit'>
        شرایط و ضوابط
      </h4>
      <h4 className='text-gray-500 hover:text-white cursor-pointer transition duration-300 ease-in transform hover:translate-x-[-10px] delay-75 w-fit'>
        ارتباط با ما
      </h4>
      <h4 className='text-gray-500 hover:text-white cursor-pointer transition duration-300 ease-in transform hover:translate-x-[-10px] delay-75 w-fit'>
        برگشتی ها
      </h4>
    </div>
  </div>
);

export default FooterInfo;
