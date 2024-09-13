'use client';
import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { Link as ScrollLink } from 'react-scroll';

// تعریف نوع props
interface HeaderLinksProps {
    currentPage: string; // نوع prop `currentPage` به عنوان string
    setCategories: (show: boolean) => void; // نوع prop `setCategories` به عنوان تابع
    setBrand: (show: boolean) => void; // نوع prop `setBrand` به عنوان تابع
}

// HeaderLinks component to display the navigation links
const HeaderLinks: React.FC<HeaderLinksProps> = ({ currentPage, setCategories, setBrand }) => {
    return (
        <div className='lg:flex animate__animated animate__fadeInUp hidden'>
            <Link href='/'>
                <div className={`flex text-gray-900 cursor-pointer duration-700 px-5 ${currentPage === '/' ? 'hover:text-Turquoise' : 'hover:text-B'}`}>
                    <h2 className='font-bold text-sm'>خانه</h2>
                    <Icon className='w-3 h-5 pt-1' icon="mingcute:down-fill" />
                </div>
            </Link>
            <Link href='/store'>
                <div className={`flex text-gray-900 cursor-pointer duration-700 px-5 ${currentPage === '/' ? 'hover:text-Turquoise' : 'hover:text-B'}`}>
                    <h2 className='font-bold text-sm'>فروشگاه</h2>
                    <Icon className='w-3 h-5 pt-1' icon="mingcute:down-fill" />
                </div>
            </Link>
            <div className={`flex text-gray-900 cursor-pointer duration-700 px-5 ${currentPage === '/' ? 'hover:text-Turquoise' : 'hover:text-B'}`}>
                <h2 className='font-bold text-sm'>وبلاگ</h2>
                <Icon className='w-3 h-5 pt-1' icon="mingcute:down-fill" />
            </div>
            <div
                onMouseEnter={() => setBrand(true)} onMouseLeave={() => setBrand(false)}
                className={`flex text-gray-900 cursor-pointer duration-700 px-5 ${currentPage === '/' ? 'hover:text-Turquoise' : 'hover:text-B'}`}
            >
                <h2 className='font-bold text-sm'>برند</h2>
                <Icon className='w-3 h-5 pt-1' icon="mingcute:down-fill" />
            </div>
            <div
                onMouseEnter={() => setCategories(true)} onMouseLeave={() => setCategories(false)}
                className={`flex text-gray-900 cursor-pointer duration-700 px-5 ${currentPage === '/' ? 'hover:text-Turquoise' : 'hover:text-B'}`}
            >
                <h2 className='font-bold text-sm'>دسته بندی</h2>
                <Icon className='w-3 h-5 pt-1' icon="mingcute:down-fill" />
            </div>
            <ScrollLink activeClass="active" to="footer" spy={true} smooth={true} offset={-70} duration={700}>
                <div className={`flex text-gray-900 cursor-pointer duration-700 px-5 ${currentPage === '/' ? 'hover:text-Turquoise' : 'hover:text-B'}`}>
                    <h2 className='font-bold text-sm'>ارتباط باما</h2>
                    <Icon className='w-3 h-5 pt-1' icon="mingcute:down-fill" />
                </div>
            </ScrollLink>
        </div>
    );
};

export default HeaderLinks;
