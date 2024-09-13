'use client';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import 'animate.css';
import Image from 'next/image';

const BannerOne: React.FC = () => {
    const [isHovered1, setIsHovered1] = useState<boolean>(false);
    const [isHovered2, setIsHovered2] = useState<boolean>(false);

    return (
        <div className='md:flex justify-between p-3 lg:p-20'>
            <div
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                data-aos-offset="0"
                data-aos-delay="300"
                className='lg:w-3/6 h-full relative overflow-hidden shadow-lg m-1'
                onMouseEnter={() => setIsHovered1(true)}
                onMouseLeave={() => setIsHovered1(false)}
            >
                <Image 
                    width={10000} 
                    height={1000} 
                    alt='banner' 
                    className={`w-fit h-fit transition-transform duration-700 delay-150 cursor-pointer ${isHovered1 ? 'hover:scale-110' : ''} rounded-xl`} 
                    src='/images/banner-style-9-img-1.jpg' 
                />
            </div>
            <div>
                <div
                    data-aos="fade-up"
                    data-aos-easing="ease-in-sine"
                    data-aos-offset="0"
                    data-aos-delay="300"
                    className='relative overflow-hidden shadow-lg m-1'
                    onMouseEnter={() => setIsHovered2(true)}
                    onMouseLeave={() => setIsHovered2(false)}
                >
                    <Image 
                        width={10000} 
                        height={1000} 
                        alt='banner' 
                        className={`w-fit h-fit transition-transform duration-700 delay-150 cursor-pointer ${isHovered2 ? 'hover:scale-110' : ''} rounded-xl`} 
                        src='/images/banner-style-10-img-1.jpg' 
                    />
                </div>
                <div data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-offset="300" className='p-5 py-10'>
                    <div className='flex justify-between'>
                        <h2 className='text-lg md:text-3xl text-gr font-bold'>طلای شاد</h2>
                        <span className='text-lg md:text-3xl text-gr font-bold'>تومان : 12222 </span>
                    </div>
                    <p className='text-sm text-gray-600 py-3'>- حلقه دوگانه طلای کارات با الماس های الماس 0.42 کل وزن کارات</p>
                    <div>
                        <button className='font-bold text-gray-950 border border-gray-950 hover:border-Turquoise hover:text-Turquoise rounded-md w-32 transition duration-300 h-12'>مرور کردن</button>
                       {/* <Icon />*/}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BannerOne;
