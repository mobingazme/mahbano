'use client';
import React from 'react';

// Define the type for the props
interface FooterCategoriesProps {
  currentPage: string;
}

// FooterCategories component to display categories in the footer
const FooterCategories: React.FC<FooterCategoriesProps> = ({ currentPage }) => (
  <div className='p-5 lg:p-10'>
    <h3 data-aos="zoom-in-up" className={`text-white text-xl font-bold border-b-2 w-fit pb-3 ${currentPage === '/' ? 'border-b-Turquoise' : 'border-b-B'}`}>دسته بندی ها</h3>
    <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2000" className='pt-3 lg:pt-7'>
      <h4 className='text-gray-500 hover:text-white cursor-pointer transition duration-300 ease-in transform hover:translate-x-[-10px] delay-75 w-fit'>تزئینی</h4>
      <h4 className='text-gray-500 hover:text-white cursor-pointer transition duration-300 ease-in transform hover:translate-x-[-10px] delay-75 w-fit'>ظروف اشپزخانه</h4>
      <h4 className='text-gray-500 hover:text-white cursor-pointer transition duration-300 ease-in transform hover:translate-x-[-10px] delay-75 w-fit'>صندلی و بار فلزی</h4>
      <h4 className='text-gray-500 hover:text-white cursor-pointer transition duration-300 ease-in transform hover:translate-x-[-10px] delay-75 w-fit'>مبل و صندلی های راحتی</h4>
      <h4 className='text-gray-500 hover:text-white cursor-pointer transition duration-300 ease-in transform hover:translate-x-[-10px] delay-75 w-fit'>نور داخل</h4>
    </div>
  </div>
);

export default FooterCategories;
