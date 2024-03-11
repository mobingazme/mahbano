'use client'
import { useState } from 'react';
import { Icon } from '@iconify/react';
import 'animate.css';

function BannerOne() {
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);

    return (
        <div className='flex justify-between p-20'>
            <div className='w-3/6 relative overflow-hidden animate__animated animate__fadeInRight shadow-4xl '
                onMouseEnter={() => setIsHovered1(true)}
                onMouseLeave={() => setIsHovered1(false)}
            >
                <img className={`w-full h-fit  transition-transform duration-1000 transform  ${isHovered1 ? 'translate-y- scale-110' : ''
                    }`} src='/images/banner-style-9-img-1.jpg' />
            </div>
            <div>
                <div className='relative overflow-hidden animate__animated animate__fadeInLeft'
                    onMouseEnter={() => setIsHovered2(true)}
                    onMouseLeave={() => setIsHovered2(false)}
                >
                    <img className={`w-fit h-fit transition-transform duration-1000 transform shadow-4xl ${isHovered2 ? 'translate-y-1 scale-110' : ''
                        }`} src='/images/banner-style-10-img-1.jpg' />
                    {isHovered2 && <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent to-transparent animate-wave"></div>}

                </div>
                <div className='p-5 py-10'>
                    <div className='flex justify-between'>
                        <h2 className='text-3xl text-gr font-bold'>طلای شاد</h2>
                        <span className='text-3xl text-gr font-bold'>تومان : 12222 </span>
                    </div>
                    <p className='text-sm text-gray-600 py-3'> - حلقه دوگانه طلای کارات با الماس های الماس 0.42 کل وزن کارات </p>
                    <div>
                        <button className='font-bold text-gray-950 border border-gray-950 hover:border-Turquoise hover:text-Turquoise rounded-md w-32 transition duration-300 h-12 '>مرور کردن </button>
                        <Icon />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerOne;

