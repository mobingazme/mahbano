'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

// تعریف نوع برای props
interface NavLinksProps {
    title: string;
}

// کامپوننت NavLinks با استفاده از TypeScript
const NavLinks: React.FC<NavLinksProps> = ({ title }) => {
    // تعریف لینک‌ها با استفاده از آرایه‌ای از اشیا
    const links = [
        { href: '/', label: 'خانه' },
        { href: '/store', label: 'فروشگاه' },
    ];

    return (
        <div className='w-full bg-A h-80 flex justify-center items-center'>
            <div>
                {/* نمایش عنوان */}
                <h2 data-aos="fade-down" className='text-black font-bold text-5xl mb-5'>{title}</h2>
                
                {/* نمایش لینک‌ها */}
                <div data-aos="zoom-in-up" className='flex'>
                    {links.map((link, index) => (
                        <Link href={link.href} key={index}>
                            <div className='flex justify-stretch items-stretch text-black hover:text-B duration-700 px-2'>
                                <h3 className='ml-1 cursor-pointer font-bold'>{link.label}</h3>
                                <Icon className='mt-1' icon="mingcute:left-line" />
                            </div>
                        </Link>
                    ))}
                    <div>
                        <h3 className=' text-gray-700'>{title}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavLinks;
