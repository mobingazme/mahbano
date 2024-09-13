'use client'

import React from 'react';
import Cookies from 'js-cookie';

const LogoutButton: React.FC = () => {
  // تابعی برای خروج از حساب کاربری
  const logouthandler = () => {
    Cookies.remove('authToken'); // حذف توکن از کوکی
    window.location.replace("/"); // انتقال به صفحه اصلی
  }

  return (
    <div 
      onClick={logouthandler} 
      className='bg-gr font-bold w-full text:sm md:text-md h-10 rounded-sm hover:bg-B duration-700 flex justify-center md:justify-start items-center p-3 cursor-pointer'
    >
      خروج
    </div>
  );
}

export default LogoutButton;
