"use client";
import React, { useEffect, useState } from 'react';
import 'animate.css';
import useOptionsStore from '@/stores/useOptionsStore';
import { usePathname } from 'next/navigation';
import FooterInfo from '@/models/footerInfo';
import FooterAccount from '@/models/footerAccount';
import FooterCategories from '@/models/footerCategories';
import FooterAbout from '@/models/footerAbout';
import FooterFollow from '@/models/footerFollow';
import FooterImages from '@/models/footerImages';
import { OptionsData } from '@/types/optionsStoreTypes';


const Footer: React.FC = () => {
    const currentPage = usePathname();
    const { options, getOptionsFromApi } = useOptionsStore();
    const [optionsData, setOptionsData] = useState<OptionsData>({
      logo: '',
      sitename: '',
      description: '',
      short_description: '', // Optional field, so no need for `undefined`
      phone_support: '',
      email_support: '',
      address: '',
      address_2: '', // Optional field, so no need for `undefined`
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
          short_description: options?.information_site?.short_description || '', // Optional field
          phone_support: options?.business_information?.phone_support || '',
          email_support: options?.business_information?.email_support || '',
          address: options?.business_information?.address || '',
          address_2: options?.business_information?.address_2 || '', // Optional field
          instagram: options?.social?.instagram || '',
          whatsApp: options?.social?.whatsApp || '',
          telegram: options?.social?.telegram || '',
        });
      }
    }, [options]);
  
    return (
      <div className='bg-gr p-5 lg:p-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
          <FooterInfo currentPage={currentPage} />
          <FooterAccount currentPage={currentPage} />
          <FooterCategories currentPage={currentPage} />
          <FooterAbout optionsData={optionsData} currentPage={currentPage} />
        </div>
        <div className='border-t border-gray-600 md:flex items-center justify-between md:p-10'>
          <FooterFollow />
          <FooterImages />
        </div>
      </div>
    );
  }
  
  export default Footer;
