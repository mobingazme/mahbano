'use client';
import 'animate.css';
import useOptionsStore from '@/stores/useOptionsStore';
import { useEffect, useState } from 'react';

// تعریف نوع برای داده‌های optionsData
interface OptionsData {
  logo: string;
  sitename: string;
  description: string;
  short_description: string;
  phone_support: string;
  email_support: string;
  address: string;
  address_2: string;
  instagram: string;
  whatsApp: string;
  telegram: string;
}

function AddressProfilePage() {
  const { options, isLoading, isError, getOptionsFromApi } = useOptionsStore();

  // استفاده از نوع OptionsData برای state
  const [optionsData, setOptionsData] = useState<OptionsData>({
    logo: '',
    sitename: '',
    description: '',
    short_description: '',
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
        logo: options.information_site?.logo2 || '',
        sitename: options.information_site?.sitename || '',
        description: options.information_site?.description || '',
        short_description: options.information_site?.short_description || '',
        phone_support: options.business_information?.phone_support || '',
        email_support: options.business_information?.email_support || '',
        address: options.business_information?.address || '',
        address_2: options.business_information?.address_2 || '',
        instagram: options.social?.instagram || '',
        whatsApp: options.social?.whatsApp || '',
        telegram: options.social?.telegram || '',
      });
    }
  }, [options]);

 

  return (
    <div className='w-full flex flex-col p-3 md:p-10 mt-3 animate__animated animate__fadeInUp'>
      <p className='text-gray-600'>آدرس های زیر در صفحه پرداخت توسط پیش فرض</p>
      <h4 className='text-gray-600 py-4'>آدرس قبض</h4>
      <h4 className='text-gray-500  w-fit mb-2'>{optionsData.short_description} </h4>
      <p className='text-gray-500   w-fit'> {optionsData.description}</p>
      <span className='text-gray-500  w-fit '>  آدرس: {optionsData.address} </span>
      <span className='text-gray-500  w-fit '>  آدرس: {optionsData.address_2} </span>

    </div>
  );
}

export default AddressProfilePage;
