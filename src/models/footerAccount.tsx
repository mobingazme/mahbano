'use client';
import React from 'react';
import Link from 'next/link';

// Define the type for the props
interface FooterAccountProps {
  currentPage: string;
}

// FooterAccount component to display account-related links in the footer
const FooterAccount: React.FC<FooterAccountProps> = ({ currentPage }) => (
  <div className='p-5 lg:p-10'>
    <h3 data-aos="zoom-in-up" className={`text-white text-xl font-bold border-b-2 w-fit pb-3 ${currentPage === '/' ? 'border-b-Turquoise' : 'border-b-B'}`}>اکانت من</h3>
    <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className='pt-3 lg:pt-7'>
      <Link href='/profile'><h4 className='text-gray-500 hover:text-white cursor-pointer transition duration-300 ease-in transform hover:translate-x-[-10px] delay-75 w-fit'>اکانت من</h4></Link>
      <Link href='/interestList'><h4 className='text-gray-500 hover:text-white cursor-pointer transition duration-300 ease-in transform hover:translate-x-[-10px] delay-75 w-fit'>لیست مورد علاقه ها</h4></Link>
      <h4 className='text-gray-500 hover:text-white cursor-pointer transition duration-300 ease-in transform hover:translate-x-[-10px] delay-75 w-fit'>سیاست حفظ حریم خصوصی</h4>
      <h4 className='text-gray-500 hover:text-white cursor-pointer transition duration-300 ease-in transform hover:translate-x-[-10px] delay-75 w-fit'>سوالات پرتکرار</h4>
      <h4 className='text-gray-500 hover:text-white cursor-pointer transition duration-300 ease-in transform hover:translate-x-[-10px] delay-75 w-fit'>تاریخچه سفارش ها</h4>
    </div>
  </div>
);

export default FooterAccount;
