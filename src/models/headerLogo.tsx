'use client';
import React from 'react';
import Image from 'next/image';

// تعریف نوع props
interface HeaderLogoProps {
  logo: string; // تایپ prop `logo` به عنوان string
}

// HeaderLogo component to display the logo
const HeaderLogo: React.FC<HeaderLogoProps> = ({ logo }) => {
    return (
        <Image
            width={1000}
            height={1000}
            alt='logo'
            className='w-28 h-12 animate__animated animate__fadeInLeft'
            src={logo}
        />
    );
};

export default HeaderLogo;
