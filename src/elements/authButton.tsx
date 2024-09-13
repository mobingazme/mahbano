'use client'
import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { Icon } from '@iconify/react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const AuthButton: React.FC = () => {
    const currentPage = usePathname();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [authToken, setAuthToken] = useState<string | undefined>(undefined);

    useEffect(() => {
        // اینجا authToken را از کوکی بگیرید و در state ذخیره کنید
        const token = Cookies.get('authToken');
        setAuthToken(token);
    }, []); // فقط یکبار هنگام mount شدن کامپوننت اجرا می‌شود

    useEffect(() => {
        // هر زمان authToken تغییر کند این useEffect اجرا می‌شود
        if (authToken) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [authToken]); // وابستگی به authToken

    return (
        <div>
            {isLoggedIn ? (
                <Link href='/profile'>
                    <div className={`${currentPage === '/' ? 'hover:bg-Turquoise border-Turquoise text-Turquoise' : 'hover:bg-B border-B text-B'} flex items-center   cursor-pointer  justify-center   duration-300 border hover:text-white text-sm font-bold ease-in     rounded-lg  p-1   transition-all`}>
                        اکانت من
                        <Icon icon="ic:outline-manage-accounts" className='w-6 h-fit ' />
                    </div>
                </Link>
            ) : (
                <div onClick={() => window.location.replace("/signup")} className={`${currentPage === '/' ? 'hover:bg-Turquoise border-Turquoise text-Turquoise' : 'hover:bg-B border-B text-B'} flex items-center   cursor-pointer  justify-center   duration-300 border hover:text-white  ease-in     rounded-lg  p-1   transition-all`}>
                    ورود
                    <Icon icon="line-md:login" className='w-6 h-5 ' />
                </div>
            )}
        </div>
    );
}

export default AuthButton;
