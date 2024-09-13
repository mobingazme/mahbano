'use client';
import React from 'react';
import Image from 'next/image';

// FooterImages component to display a set of images in the footer
const FooterImages: React.FC = () => (
  <div data-aos="fade-up" data-aos-duration="2000" className='flex p-10'>
    <Image width={100} height={100} alt="mahbano" className='w-16 md:w-20 h-fit' src='/images/images.jpg' />
    <Image width={100} height={100} alt="mahbano" className='w-16 md:w-20 h-fit mx-3' src='/images/Untitled.png' />
    <Image width={100} height={100} alt="mahbano" className='w-16 md:w-20 h-fit' src='/images/images1.jpg' />
    <Image width={100} height={100} alt="mahbano" className='w-16 md:w-20 h-fit mx-3' src='/images/Untitled2.jpg' />
  </div>
);

export default FooterImages;
