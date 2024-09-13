'use client'
import Lottie404Page from '@/components/lottie/404Page'
import React from 'react'

// تایپ برای پارامترهای ورودی کامپوننت
interface NotFoundProps {
  error?: Error; // یا تایپ دیگری که برای خطا استفاده می‌کنید
  reset?: () => void;
}

const NotFound: React.FC<NotFoundProps> = ({ error, reset }) => {
  console.log('404', error, reset);
  
  return <Lottie404Page />;
};

export default NotFound;
