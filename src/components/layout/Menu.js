import React, { useEffect, useState } from 'react'
import { Icon } from '@iconify/react';
import 'animate.css';
import useOptionsStore from '@/stores/OptionsStore';
import Link from 'next/link';


function Menu({ onClose }) {
    const [isOpen, setIsOpen] = useState(true);
    const handleClose = () => {
        setIsOpen(false);
        onClose();
    };
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
        <div className={`fixed top-0 left-0 w-[400px] h-full bg-gr  z-50 flex flex-col  items-center animate__animated ${isOpen ? 'animate__fadeInLeft' : 'animate__fadeInRight'}`}>
            <Icon onClick={handleClose} className='hover:text-B w-8 h-fit absolute top-0 right-0 cursor-pointer duration-300 m-4' icon="iconamoon:close-bold" />
            <div className='flex flex-col mt-32 items-center '>
                <img className='w-28' src='/images/logo_white.png' />
                <div className='pt-10 flex flex-col'>
                    <span className='text-white text-center'>آدرس : {optionsData.address} </span>
                    <span className='text-white text-center my-1'>تماس بگیرید: {optionsData.phone_support}</span>
                    <span className='text-white text-center'>ایمیل : {optionsData.email_support}</span>
                </div>
                <div className="p-5 flex ">
                    <div className='w-10 h-10 flex items-center justify-center  bg-gray-600 hover:bg-white hover:text-gray-600 border-gr rounded-full cursor-pointer delay-75 transition duration-300 '>
                        <Icon className='w-6 h-6' icon="ri:facebook-fill" />
                    </div>
                    <div className='w-10 h-10 flex items-center justify-center  bg-gray-600 hover:bg-white hover:text-gray-600 border-gr rounded-full cursor-pointer delay-75 transition duration-300 mx-5'>
                        <Icon className='w-6 h-6' icon="ri:twitter-fill" />
                    </div>
                    <div className='w-10 h-10 flex items-center justify-center  bg-gray-600 hover:bg-white hover:text-gray-600 border-gr rounded-full cursor-pointer delay-75 transition duration-300 '>
                        <Icon className='w-6 h-6' icon="mdi:instagram" />
                    </div>
                    <div className='w-10 h-10 flex items-center justify-center  bg-gray-600 hover:bg-white hover:text-gray-600 border-gr rounded-full cursor-pointer delay-75 transition duration-300 mx-5'>
                        <Icon className='w-6 h-6' icon="uil:telegram-alt" />
                    </div>
                </div>
                <div className='flex p-5'>
                    <Link href='/'>
                        <h4 className='text-white hover:text-B text-sm font-bold cursor-pointer transition-all delay-100'>لیست موردعلاقه ها</h4>
                    </Link>
                    <Link href='/'>
                        <h4 className='text-white hover:text-B text-sm font-bold cursor-pointer transition-all delay-100 mx-5'>سبدخرید</h4>
                    </Link>
                    <Link href='/'>
                        <h4 className='text-white hover:text-B text-sm font-bold cursor-pointer transition-all delay-100 '>صورت حساب</h4>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Menu