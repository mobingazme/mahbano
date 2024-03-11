"use client"
import React, { useEffect, useState } from 'react'
import 'animate.css';
import { Icon } from '@iconify/react';
import useOptionsStore from '@/stores/OptionsStore';
import { usePathname } from 'next/navigation';

function Footer() {
  const currentPage = usePathname()
  const { options, isLoading, isError, getOptionsFromApi } = useOptionsStore();
    const [optionsData, setOptionsData] = useState({
        logo: '',
        sitename: '',
        description: '',
        phone_support: '',
        email_support: '',
        address: '',
        address_2: '',
        instagram: '',
        whatsApp: '',
        telegram: '',
        // اطلاعات دیگر که می‌خواهید دریافت کنید را اینجا اضافه کنید
    });

    useEffect(() => {
        getOptionsFromApi();
    }, []);

    useEffect(() => {
        if (options) {
            setOptionsData({
                logo: options?.information_site?.logo2 || '',
                sitename: options?.information_site?.sitename || '',
                description: options?.information_site?.description || '',
                short_description: options?.information_site?.short_description || '',
                phone_support: options?.business_information?.phone_support || '',
                email_support: options?.business_information?.email_support || '',
                address: options?.business_information?.address || '',
                address_2: options?.business_information?.address_2 || '',
                instagram: options?.social?.instagram || '',
                whatsApp: options?.social?.whatsApp || '',
                telegram: options?.social?.telegram || '',
                // اطلاعات دیگر که می‌خواهید دریافت کنید را اینجا اضافه کنید
            });
        }
    }, [options]);

    
 
  return (
    <div className='bg-gr  p-10'>
      <div className='grid grid-cols-4 '>
        <div className='p-10'>
          <h3 className={`text-white text-xl font-bold  border-b-2 w-fit pb-3 ${currentPage === '/' ?'border-b-Turquoise' :'border-b-B'}`}>اطلاعات</h3>
          <div className='pt-7 '>
            <h4 className='text-gray-500 hover:text-white  cursor-pointer transition duration-300 ease-in transform hover:translate-x-[-10px] delay-75  w-fit'>اطلاعات تحویل</h4>
            <h4 className='text-gray-500 hover:text-white  cursor-pointer transition duration-300 ease-in transform hover:translate-x-[-10px] delay-75  w-fit '>شرایط و ضوابط </h4>
            <h4 className='text-gray-500 hover:text-white  cursor-pointer transition duration-300 ease-in transform hover:translate-x-[-10px] delay-75  w-fit'>ارتباط با ما </h4>
            <h4 className='text-gray-500 hover:text-white  cursor-pointer transition duration-300 ease-in transform hover:translate-x-[-10px] delay-75  w-fit '> برگشتی ها</h4>
          </div>
        </div>
        <div className='p-10'>
          <h3 className={`text-white text-xl font-bold  border-b-2 w-fit pb-3 ${currentPage === '/' ?'border-b-Turquoise' :'border-b-B'}`}>اکانت من</h3>
          <div className='pt-7 '>
            <h4 className='text-gray-500 hover:text-white  cursor-pointer transition duration-300 ease-in transform hover:translate-x-[-10px] delay-75  w-fit'> اکانت من</h4>
            <h4 className='text-gray-500 hover:text-white  cursor-pointer transition duration-300 ease-in transform hover:translate-x-[-10px] delay-75  w-fit'> لیست مورد علاقه ها </h4>
            <h4 className='text-gray-500 hover:text-white  cursor-pointer transition duration-300 ease-in transform hover:translate-x-[-10px] delay-75  w-fit'>  سیاست حفظ حریم خصوصی</h4>
            <h4 className='text-gray-500 hover:text-white  cursor-pointer transition duration-300 ease-in transform hover:translate-x-[-10px] delay-75  w-fit'> سوالات پرتکرار </h4>
            <h4 className='text-gray-500 hover:text-white  cursor-pointer transition duration-300 ease-in transform hover:translate-x-[-10px] delay-75  w-fit'>  تاریخچه سفارش ها</h4>
          </div>
        </div>
        <div className='p-10'>
          <h3 className={`text-white text-xl font-bold  border-b-2 w-fit pb-3 ${currentPage==='/' ?'border-b-Turquoise' :'border-b-B'}`}>دسته بندی ها</h3>
          <div className='pt-7 '>
            <h4 className='text-gray-500 hover:text-white  cursor-pointer transition duration-300 ease-in transform hover:translate-x-[-10px] delay-75  w-fit'>تزئینی </h4>
            <h4 className='text-gray-500 hover:text-white  cursor-pointer transition duration-300 ease-in transform hover:translate-x-[-10px] delay-75  w-fit '> ظروف اشپزخانه  </h4>
            <h4 className='text-gray-500 hover:text-white  cursor-pointer transition duration-300 ease-in transform hover:translate-x-[-10px] delay-75  w-fit'>  صندلی و بار فلزی </h4>
            <h4 className='text-gray-500 hover:text-white  cursor-pointer transition duration-300 ease-in transform hover:translate-x-[-10px] delay-75  w-fit '>  مبل و صندلی های راحتی</h4>
            <h4 className='text-gray-500 hover:text-white  cursor-pointer transition duration-300 ease-in transform hover:translate-x-[-10px] delay-75  w-fit'>  نورداخل</h4>

          </div>
        </div>
        <div className='p-10'>
          <h3 className={`text-white text-xl font-bold  border-b-2 w-fit pb-3 ${currentPage === '/' ?'border-b-Turquoise' :'border-b-B'}`}>درباره ما</h3>
          <div className='pt-7 '>
            <p className='text-gray-500   w-fit'> {optionsData.description}</p>
            <h4 className='text-gray-500  w-fit mb-2'>{optionsData.short_description} </h4>
            <p className='text-gray-500  w-fit '>  آدرس: {optionsData.address} </p>
            <p className='text-gray-500  w-fit '>  آدرس: {optionsData.address_2} </p>
            <span className='text-gray-500  w-fit mt-2'>{optionsData.email_support}</span>
          </div>
        </div>
      </div >

      <div className=' border-t border-gray-600 flex justify-between p-10'>
        <div className=''>
          <h4 className='text-white font-bold text-xl'> دنبال کنید</h4>
          <div className="p-10 flex ">
            <div className='w-10 h-10 flex items-center justify-center  bg-gray-600 hover:bg-white hover:text-gray-600 border-gr rounded-full cursor-pointer delay-75 transition duration-300 '>
              <Icon className='w-6 h-6' icon="ri:facebook-fill" />
            </div>
            <div className='w-10 h-10 flex items-center justify-center  bg-gray-600 hover:bg-white hover:text-gray-600 border-gr rounded-full cursor-pointer delay-75 transition duration-300 mx-3'>
              <Icon className='w-6 h-6' icon="ri:twitter-fill" />
            </div>
            <div className='w-10 h-10 flex items-center justify-center  bg-gray-600 hover:bg-white hover:text-gray-600 border-gr rounded-full cursor-pointer delay-75 transition duration-300 '>
              <Icon className='w-6 h-6' icon="mdi:instagram" />
            </div>
            <div className='w-10 h-10 flex items-center justify-center  bg-gray-600 hover:bg-white hover:text-gray-600 border-gr rounded-full cursor-pointer delay-75 transition duration-300 mx-3'>
              <Icon className='w-6 h-6' icon="uil:telegram-alt" />
            </div>
          </div>

        </div>

        <div className=' flex  p-10'>
          <img  alt="mahbano" className='w-24 h-fit ' src='/images/images.jpg' />
          <img  alt="mahbano" className='w-24 h-fit mx-3' src='/images/Untitled.png' />
          <img alt="mahbano" className='w-24 h-fit ' src='/images/images1.jpg' />
          <img alt="mahbano" className='w-24 h-fit mx-3' src='/images/Untitled2.jpg' />

        </div>
      </div>
    </div>
  )
}

export default Footer