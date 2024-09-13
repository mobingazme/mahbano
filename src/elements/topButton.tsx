'use client';
import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import { Link as ScrollLink } from 'react-scroll';
import 'animate.css';
import { usePathname } from 'next/navigation';

// تعریف نوع‌های state
type TopButtonProps = {
  to?: string; // مقصد اسکرول
};

const TopButton: React.FC<TopButtonProps> = () => {
  const currentPage = usePathname();
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 0); // تنظیم isVisible به true اگر scrollTop بزرگتر از 0 است و به false در غیر این صورت
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <ScrollLink
      activeClass="active"
      to="1"
      spy={true}
      smooth={true}
      offset={-70}
      duration={800}
    >
      <div>
        <button
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          className={`z-40 flex items-center fixed bottom-8 left-10 justify-center w-14 duration-700 ease-in ${currentPage === '/' ? 'bg-Turquoise' : 'bg-B'} hover:w-28 h-14 rounded-full p-2 shadow-none border-none transition-all ${isVisible ? 'visible animate__bounceInUp animate__animated animate__delay-2s' : 'hidden animate__bounceOut animate__animated animate__delay-2s'}`}
        >
          <Icon
            className={`w-8 h-fit text-white z-10 ${isHovered ? 'hidden animate__animated animate__fadeOutLeft' : 'flex animate__animated animate__fadeInRight'}`}
            icon="line-md:upload-loop"
          />
          <h4
            className={`w-fit text-white font-bold border-none z-10 text-sm h-fit ${isHovered ? 'flex animate__animated animate__fadeInLeft' : 'hidden animate__animated animate__fadeOutRight'}`}
          >
            برگشت ب بالا
          </h4>
        </button>
      </div>
    </ScrollLink>
  );
};

export default TopButton;
