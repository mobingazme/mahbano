'use client';
import React from 'react';
import 'animate.css';
import Image from 'next/image';

// تعریف نوع برای props فاکتور
interface GuaranteeHomePageProps { }

const GuaranteeHomePage: React.FC<GuaranteeHomePageProps> = () => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 items-center justify-center md:py-3'>
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className='w-full md:w-80 flex flex-col items-center justify-center md:px-5'
      >
        <Image width={100} height={100} alt='ارسال رایگان' src='/images/service-promo-5.png' />
        <h4 className='text-gr font-bold text-lg py-3'>ارسال رایگان</h4>
        <p className='text-gray-600 text-sm text-center'>
          دریافت 10% پول نقد، ارسال رایگان، بازگشت رایگان، و موارد دیگر در بیش از 1000 خرده فروش برتر!
        </p>
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
      >
        <div className='w-full md:w-80 flex flex-col items-center justify-center md:px-5'>
          <Image width={100} height={100} alt='30 روز برگشت پول' src='/images/service-promo-6.png' />
          <h4 className='text-gr font-bold text-lg py-3'>30 روز برگشت پول</h4>
          <p className='text-gray-600 text-sm text-center'>
            دریافت 10% پول نقد، ارسال رایگان، بازگشت رایگان، و موارد دیگر در بیش از 1000 خرده فروش برتر!
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="2000"
      >
        <div className='w-full md:w-80 flex flex-col items-center justify-center md:px-5'>
          <Image width={100} height={100} alt='پرداخت مطمئن' src='/images/service-promo-7.png' />
          <h4 className='text-gr font-bold text-lg py-3'>پرداخت مطمئن</h4>
          <p className='text-gray-600 text-sm text-center'>
            دریافت 10% پول نقد، ارسال رایگان، بازگشت رایگان، و موارد دیگر در بیش از 1000 خرده فروش برتر!
          </p>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="2500"
      >
        <div className='w-full md:w-80 flex flex-col items-center justify-center md:px-5'>
          <Image width={100} height={100} alt='مشتری وفادار' src='/images/service-promo-8.png' />
          <h4 className='text-gr font-bold text-lg py-3'>مشتری وفادار</h4>
          <p className='text-gray-600 text-sm text-center'>
            دریافت 10% پول نقد، ارسال رایگان، بازگشت رایگان، و موارد دیگر در بیش از 1000 خرده فروش برتر!
          </p>
        </div>
      </div>
    </div>
  );
}

export default GuaranteeHomePage;
