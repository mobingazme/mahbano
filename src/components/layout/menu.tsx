'use client'
import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import 'animate.css';
import useOptionsStore from '@/stores/useOptionsStore';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import AuthButton from '@/elements/authButton';

// نوع داده‌ها
interface OptionsData {
  logo: string;
  sitename: string;
  description: string;
  phone_support: string;
  email_support: string;
  address: string;
  address_2: string;
  instagram: string;
  whatsApp: string;
  telegram: string;
}

interface MenuProps {
  onClose: () => void;
}

const Menu: React.FC<MenuProps> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);
  const currentPage = usePathname();

  const handleClose = () => {
    setIsOpen(false);
    animateOut();
    setTimeout(onClose, 500);
  };

  const { options, isLoading, isError, getOptionsFromApi } = useOptionsStore();
  const [optionsData, setOptionsData] = useState<OptionsData>({
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
  });

  useEffect(() => {
    getOptionsFromApi();
  }, [getOptionsFromApi]);

  useEffect(() => {
    if (options) {
      setOptionsData({
        logo: options?.information_site?.logo2 || '',
        sitename: options?.information_site?.sitename || '',
        description: options?.information_site?.description || '',
        phone_support: options?.business_information?.phone_support || '',
        email_support: options?.business_information?.email_support || '',
        address: options?.business_information?.address || '',
        address_2: options?.business_information?.address_2 || '',
        instagram: options?.social?.instagram || '',
        whatsApp: options?.social?.whatsApp || '',
        telegram: options?.social?.telegram || '',
      });
    }
  }, [options]);

  const animateIn = () => {
    const element = document.querySelector('.menu-container');
    if (element) {
      element.classList.add('animate__animated', 'animate__fadeInRight');
    }
  };

  const animateOut = () => {
    const element = document.querySelector('.menu-container');
    if (element) {
      element.classList.remove('animate__fadeInRight');
      element.classList.add('animate__animated', 'animate__fadeOutRight');
    }
  };

  if (isOpen) {
    animateIn();
  }

  return (
    <div className={`fixed top-0 right-0 w-3/4 md:w-2/5 lg:max-w-[400px] h-full bg-gr z-50 flex flex-col items-center animate__animated animate__fadeInRight menu-container`}>
      <Icon onClick={handleClose} className='hover:text-B w-8 h-fit absolute top-0 left-0 cursor-pointer duration-300 m-4' icon="iconamoon:close-bold" />
      <div className='animate__animated animate__fadeInUp lg:hidden p-2 mt-16 w-full'>
        {/* Links and buttons */}
        {['خانه', 'فروشگاه', 'برند', 'دسته بندی', 'درباره ما', 'ارتباط باما'].map((text, index) => (
          <Link key={index} href={`/${text}`}>
            <div className={`transition duration-300 ease-in transform hover:translate-x-[-10px] delay-75 text-white flex justify-between px-5 my-3 cursor-pointer ${currentPage === '/' ? 'hover:text-Turquoise' : 'hover:text-B'}`}>
              <h2 className='font-bold'>{text}</h2>
              <Icon className='w-6 h-6' icon="mingcute:left-fill" />
            </div>
          </Link>
        ))}
        <div className='p-5'>
          <AuthButton />
        </div>
      </div>
      <div className='flex flex-col mt-5 lg:mt-20 items-center'>
        <img className='w-28' src={optionsData.logo} alt='Logo' />
        <div className='pt-10 flex flex-col'>
          <span className='text-white text-center'>آدرس : {optionsData.address}</span>
          <span className='text-white text-center text-sm md:text-md my-1'>تماس بگیرید: {optionsData.phone_support}</span>
          <span className='text-white text-center'>ایمیل : {optionsData.email_support}</span>
        </div>
        <div className="p-1 md:p-5 flex">
          {/* Social media icons */}
          {['facebook-fill', 'twitter-fill', 'instagram-line', 'telegram-2-fill'].map((icon, index) => (
            <div key={index} className='w-10 h-10 flex items-center justify-center bg-gray-600 hover:bg-white hover:text-gray-600 border-gr rounded-full cursor-pointer delay-75 transition duration-300 mx-2'>
              <Icon className='w-6 h-6' icon={`ri:${icon}`} />
            </div>
          ))}
        </div>
        <div className='hidden lg:flex'>
          {/* Additional Links */}
          {['لیست موردعلاقه ها', 'سبدخرید', 'صورت حساب'].map((text, index) => (
            <Link key={index} href={`/${text}`}>
              <h4 className={`text-white hover:text-B text-sm font-bold cursor-pointer transition-all delay-100 ${currentPage === '/' ? 'text-white hover:text-Turquoise' : 'text-white hover:text-B'} ${index !== 0 ? 'mx-2 md:mx-5' : ''}`}>{text}</h4>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Menu;
