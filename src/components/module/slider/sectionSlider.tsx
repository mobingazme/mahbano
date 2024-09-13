"use client";
import 'animate.css';
import CardSliderOne from './sliderCardOne';
import React, { useState } from 'react';

// تعریف نوع برای حالت انتخاب شده
type ButtonType = 'monthly' | 'yearly' | 'discount';

const SectionSlider: React.FC = () => {
    // تعریف state با تایپ ButtonType
    const [selectedButton, setSelectedButton] = useState<ButtonType>('monthly');

    // تایپ تابع handleButtonClick
    const handleButtonClick = (buttonType: ButtonType) => {
        setSelectedButton(buttonType);
    };

    return (
        <div>
            <div data-aos="zoom-in" className='py-8 text-center md:text-start'>
                <button
                    className={`md:text-2xl text-lg font-bold hover:text-gray-900 duration-700 hover:border-b-2 hover:border-Turquoise transition-transform ${selectedButton === 'monthly' ? 'text-gray-900 border-b-2 border-Turquoise' : 'text-gray-600'} ${selectedButton === 'monthly' ? 'font-bold' : ''}`}
                    onClick={() => handleButtonClick('monthly')}
                >
                    ویژه ها
                </button>
                <button
                    className={`md:text-2xl text-lg mx-4 font-bold hover:text-gray-900 duration-700 hover:border-b-2 hover:border-Turquoise transition-transform md:mx-10 ${selectedButton === 'yearly' ? 'text-gray-900 border-b-2 border-Turquoise' : 'text-gray-600'} ${selectedButton === 'yearly' ? 'font-bold' : ''}`}
                    onClick={() => handleButtonClick('yearly')}
                >
                    پرفروش ترین ها
                </button>
                <button
                    className={`md:text-2xl text-lg font-bold hover:text-gray-900 duration-700 hover:border-b-2 hover:border-Turquoise transition-transform ${selectedButton === 'discount' ? 'text-gray-900 border-b-2 border-Turquoise' : 'text-gray-600'} ${selectedButton === 'discount' ? 'font-bold' : ''}`}
                    onClick={() => handleButtonClick('discount')}
                >
                    حراجی ها
                </button>
            </div>
            <div className='animate__animated animate__fadeInUp'>
                {selectedButton === 'monthly' && <CardSliderOne />}
                {selectedButton === 'yearly' && <CardSliderOne />}
                {selectedButton === 'discount' && <CardSliderOne />}
            </div>
        </div>
    );
}

export default SectionSlider;
