'use client'
import React, { useEffect, ReactNode } from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';
import Loading from "@/app/loading";
import Footer from "./footer";
import Header from "./header";
import TopButton from '@/elements/topButton';

// تعریف تایپ برای پروپس های کامپوننت
interface LayoutProps {
    children: ReactNode; // نوع children مشخص شده است که می‌تواند هر نوع عنصری باشد که React پشتیبانی می‌کند
    isLoading: boolean;  // تایپ برای isLoading به صورت boolean تعریف شده است
}

const Layout: React.FC<LayoutProps> = ({ children, isLoading }) => {
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false
        });
    }, []);

    return (
        <>
            <Header />
            {isLoading && <Loading />}
            <div>{children}</div>
            <TopButton />
            <Footer />
        </>
    );
}

export default Layout;
