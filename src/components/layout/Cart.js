import React, { useState } from 'react'
import { Icon } from '@iconify/react';
import 'animate.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


function Cart({ onClose }) {
    const currentPage = usePathname()
    const [isOpen, setIsOpen] = useState(true);
    const handleClose = () => {
        setIsOpen(false);
        onClose();
    };

    return (
        <div className={`fixed top-0 left-0 w-[400px] h-full bg-white  z-50 flex flex-col  items-center animate__animated ${isOpen ? 'animate__fadeInLeft' : 'animate__fadeInRight'}`}>
            <Icon onClick={handleClose} className={`${currentPage === '/' 
            ? 'hover:text-Turquoise text-black w-8 h-fit absolute top-0 right-0 cursor-pointer duration-300 m-4' 
            :'hover:text-B text-black w-8 h-fit absolute top-0 right-0 cursor-pointer duration-300 m-4'}`} icon="iconamoon:close-bold" />
            <h4 className='text-gray-900 font-bold text-2xl items-start mt-20'>سبد خرید</h4>

            <div className='flex justify-between items-center w-full px-5 py-10'>
                <img className='w-24 border border-gray-300' src='/images/images.jpg' />
                <div className='flex flex-col '>
                    <h4 className='font-bold text-sm text-gray-500'>صندلی فلزی</h4>
                    <span className='text-sm mt-1 text-gray-500'>تومان: 5555</span>
                </div>
                <Icon className='text-red-500 w-5 h-5 cursor-pointer' icon="solar:trash-bin-trash-linear" />

            </div>

            <div className='flex justify-between items-center w-full px-5'>
                <h4 className='font-bold text-gray-500 text-xl'>مجموع</h4>
                <span className='font- text-gray-500 text-xl'> تومان:15000 </span>
            </div>

            <div className='w-full px-5 py-10'>
                <Link href='/'>
                    <button className={`${currentPage === '/' ? 'hover:text-Turquoise bg-Turquoise border-Turquoise border' : ' border hover:text-B bg-B border-B'} text-white  hover:bg-white   transition-all delay-100 font-bold w-full h-9  rounded-sm my-5`}>نمایش سبد خرید</button>
                </Link>
                <Link href='/'>
                    <button className={`${currentPage === '/' ? 'hover:text-Turquoise bg-Turquoise border-Turquoise border' : ' border hover:text-B bg-B border-B'} text-white  hover:bg-white   transition-all delay-100 font-bold w-full h-9  rounded-sm my-5`}>صورت حساب  </button>
                </Link>
            </div>
        </div>
    )
}

export default Cart
