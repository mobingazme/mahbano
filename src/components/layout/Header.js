"use client"
import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useOptionsStore from '@/stores/OptionsStore';
import Cart from './Cart';
import Menu from './Menu';
import SearchInput from './SearchInput';
import InterestList from './InterestList';
import 'animate.css';
import Brands from '@/models/Brands';
import Categorys from '@/models/Categorys';

{/*window.addEventListener('scroll', function() {
  // محاسبه میزان اسکرول
  var scrollPosition = window.scrollY;

  // اگر میزان اسکرول به حد مورد نظر رسید، انیمیشن را اجرا کنید
  if (scrollPosition > 500) {
    // اجرای انیمیشن
    animateElement();
  } else {
    // توقف انیمیشن
    stopAnimation();
  }
});

function animateElement() {
  // اضافه کردن کلاس animate.css به المان مورد نظر
  document.getElementById('myElement').classList.add('animate__animated', 'animate__bounce');
}

function stopAnimation() {
  // حذف کلاس animate.css از المان مورد نظر
  document.getElementById('myElement').classList.remove('animate__animated', 'animate__bounce');
} */}
function Header() {
    const currentPage = usePathname()
    const { options, isLoading, isError, getOptionsFromApi } = useOptionsStore();
    const [isOpen, setIsOpen] = useState({
        cart: false,
        menu: false,
        search: false,
        interest: false,
    });
    const [categories, setCategories] = useState(false);
    const [brand, setBrand] = useState(false);
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

    


    const handleIconClick = (iconName) => {
        setIsOpen(prevState => ({
            ...prevState,
            [iconName]: !prevState[iconName],
        }));
    };
   
    return (
        <div className={` ${currentPage === '/'  ?'bg-white w-full   h-20 flex justify-around items-center p-3  fixed top-0 z-20 shadow' : 'bg-A w-full   h-20 flex justify-around items-center p-3  fixed top-0 z-20 shadow'}   `}>
            <img alt='mahbano' className='w-24 h-6 ' src='/images/logo_black.png' /> {/*optionsData.logo */}
            <div className='flex '>
                <Link href='/'>
                    <div className={` ${currentPage === '/'  ? 'flex text-gray-900 cursor-pointer hover:text-Turquoise duration-700 px-5' :'flex text-gray-900 cursor-pointer hover:text-B duration-700 px-5' }  `}>
                        <h2 className=' font-bold '>خانه </h2>
                        <Icon className='w-3 h-5 pt-1' icon="mingcute:down-fill" />
                    </div>
                </Link>
                <Link href='/signup'>
                    <div className={` ${currentPage === '/'  ?'flex text-gray-900 cursor-pointer hover:text-Turquoise duration-700 px-5'  : 'flex text-gray-900 cursor-pointer hover:text-B duration-700 px-5'}  `}>
                        <h2 className=' font-bold '>فروشگاه </h2>
                        <Icon className='w-3 h-5 pt-1' icon="mingcute:down-fill" />
                    </div>
                </Link>
                <div className={` ${currentPage === '/' ? 'flex text-gray-900 cursor-pointer hover:text-Turquoise duration-700 px-5' :'flex text-gray-900 cursor-pointer hover:text-B duration-700 px-5' }  `}>
                    <h2 className=' font-bold'>وبلاگ </h2>
                    <Icon className='w-3 h-5 pt-1' icon="mingcute:down-fill" />
                </div>
                <div
                    onMouseEnter={() => setBrand(true)} onMouseLeave={() => setBrand(false)}
                    className={` ${currentPage === '/'  ? 'flex text-gray-900 cursor-pointer hover:text-Turquoise duration-700 px-5' :'flex text-gray-900 cursor-pointer hover:text-B duration-700 px-5' }  `}>
                    <h2 className=' font-bold'>برند </h2>
                    <Icon className='w-3 h-5 pt-1' icon="mingcute:down-fill" />
                </div>
                <div
                    onMouseEnter={() => setCategories(true)} onMouseLeave={() => setCategories(false)}
                    className={` ${currentPage === '/'  ? 'flex text-gray-900 cursor-pointer hover:text-Turquoise duration-700 px-5' :'flex text-gray-900 cursor-pointer hover:text-B duration-700 px-5' }  `}>
                    <h2 className=' font-bold'>دسته بندی </h2>
                    <Icon className='w-3 h-5 pt-1' icon="mingcute:down-fill" />
                </div>
                <div className={` ${currentPage === '/' ? 'flex text-gray-900 cursor-pointer hover:text-Turquoise duration-700 px-5' :'flex text-gray-900 cursor-pointer hover:text-B duration-700 px-5' }  `}>
                    <h2 className=' font-bold'>درباره ما </h2>
                    <Icon className='w-3 h-5 pt-1' icon="mingcute:down-fill" />
                </div>
                <div className={` ${currentPage === '/'  ?  'flex text-gray-900 cursor-pointer hover:text-Turquoise duration-700 px-5': 'flex text-gray-900 cursor-pointer hover:text-B duration-700 px-5'}  `}>
                    <h2 className=' font-bold'>ارتباط باما </h2>
                    <Icon className='w-3 h-5 pt-1' icon="mingcute:down-fill" />
                </div>
            </div>
            <div className='flex'>
                <div onClick={() => handleIconClick('interest')} className='flex cursor-pointer'>
                    <h5 className={`${currentPage === '/'  ? 'w-5 pr-1 h-5 rounded-full -ml-4 mt-5 text-white bg-Turquoise' :'w-5 pr-1 h-5 rounded-full -ml-4 mt-5 text-white bg-B' }`}>3</h5>
                    <Icon className={` ${currentPage === '/'  ? 'text-gray-900  duration-700 w-7 h-7  hover:text-Turquoise' : 'text-gray-900  duration-700 w-7 h-7 hover:text-B'}`} icon="mdi-light:heart" />
                </div>
                <div onClick={() => handleIconClick('cart')} className='flex cursor-pointer px-3'>
                    <h5 className={`${currentPage === '/'  ? 'w-5 pr-1 h-5 rounded-full -ml-4 mt-5 text-white bg-Turquoise' : 'w-5 pr-1 h-5 rounded-full -ml-4 mt-5 text-white bg-B'}`}>3</h5>
                    <Icon className={` ${currentPage === '/'  ?'text-gray-900  duration-700 w-6 h-6  hover:text-Turquoise'  :'text-gray-900  duration-700 w-6 h-6 hover:text-B' }`} icon="teenyicons:basket-outline" />
                </div>
                <div onClick={() => handleIconClick('search')} className='flex cursor-pointer '>
                    <Icon className={` ${currentPage === '/'  ? 'text-gray-900  duration-700 w-7 h-7  hover:text-Turquoise' :'text-gray-900  duration-700 w-7 h-7 hover:text-B'}`} icon="basil:search-outline"
                    />
                </div>
                <div onClick={() => handleIconClick('menu')} className='flex cursor-pointer px-3'>
                    <Icon className={` ${currentPage === '/'  ? 'text-gray-900  duration-700 w-9 h-9  hover:text-Turquoise' :'text-gray-900  duration-700 w-9 h-9 hover:text-B' }`} icon="material-symbols-light:menu" />
                </div>
                
            </div>
            {isOpen.cart && <Cart onClose={() => handleIconClick('cart')} />}
            {isOpen.menu && <Menu onClose={() => handleIconClick('menu')} />}
            {isOpen.search && <SearchInput onClose={() => handleIconClick('search')} />}
            {isOpen.interest && <InterestList onClose={() => handleIconClick('interest')} />}


            {categories && (
                <div
                    className="  w-80 absolute top-12   z-50 "
                    onMouseEnter={() => setCategories(true)}
                    onMouseLeave={() => setCategories(false)}>
                    <Categorys />
                </div>
            )}


            {brand && (
                <div
                    className="  w-40 absolute top-12 right-[520px] z-50 "
                    onMouseEnter={() => setBrand(true)}
                    onMouseLeave={() => setBrand(false)}>
                    <Brands />
                </div>
            )}



        </div>
    )
}

export default Header