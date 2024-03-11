import React from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function Card(props) {
    const currentPage = usePathname();
    const { id, cover, sale_price, title } = props;

    return (
        <Link href={`/store/${id}`}>
            <div className='w-fit relative shadow-md'>
                <div className="relative group">
                    <img
                        className={`w-[270px] h-64 rounded-sm cursor-pointer transition duration-300 hover:scale-110`}
                        src={cover}
                        alt="محصول"
                    />
                    <div className='absolute inset-0 flex items-center justify-center hover:bg-black/50 opacity-0 hover:opacity-100 transition-opacity duration-700'>
                        <div className='bg-gr text-white flex items-center justify-between w-48 p-4 rounded-lg animate__animated animate__fadeInUp animate__delay-2s'>
                            <h4 className={`${currentPage === '/' ? 'text-white duration-700 font-bold text-sm hover:text-Turquoise' : 'text-white duration-700 font-bold text-sm hover:text-B'} `}>افزودن به سبد خرید</h4>
                            <Icon className={`${currentPage === '/' ? 'text-white duration-700 w-7 h-7 hover:text-Turquoise' : 'text-white duration-700 w-7 h-7 hover:text-B'} `} icon="mdi-light:heart" />
                        </div>
                    </div>
                </div>
                <div className='flex justify-between p-2 w-FIT'>
                    <h2 className='cursor-pointer text-black duration-700 font-bold hover:text-Turquoise'>{title}</h2>
                    <h3 className='text-gray-600'>تومان : {sale_price}</h3>
                </div>
            </div>
        </Link>
    );
}

export default Card;




