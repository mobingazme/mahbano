"use client"
import 'animate.css';
import CardSliderOne from './Slider/SliderCardOne';
import React, { useState } from 'react';

function SectionSlider() {
    const [selectedButton, setSelectedButton] = useState('monthly');

    const handleButtonClick = (buttonType) => {
        setSelectedButton(buttonType);
    };

    return (
        <div>
            <div className='p-8'>
                <button className={`text-2xl p-2  font-bold hover:text-gray-900 duration-700 hover:border-b-2 hover:border-Turquoise transition-transform ${selectedButton === 'monthly' ? 'text-gray-900 border-b-2 border-Turquoise ' : 'text-gray-600'} ${selectedButton === 'monthly' ? 'font-bold' : ''}`} onClick={() => handleButtonClick('monthly')}>ویژه ها</button>
                <button className={`text-2xl p-2  font-bold hover:text-gray-900 duration-700 hover:border-b-2 hover:border-Turquoise transition-transform mx-10 ${selectedButton === 'yearly' ? 'text-gray-900 border-b-2 border-Turquoise' : 'text-gray-600'} ${selectedButton === 'yearly' ? 'font-bold' : ''}`} onClick={() => handleButtonClick('yearly')}>پرفروش ترین ها</button>
                <button className={`text-2xl p-2  font-bold hover:text-gray-900 duration-700 hover:border-b-2 hover:border-Turquoise transition-transform ${selectedButton === 'discount' ? 'text-gray-900 border-b-2 border-Turquoise ' : 'text-gray-600'} ${selectedButton === 'discount' ? 'font-bold' : ''}`} onClick={() => handleButtonClick('discount')}>حراجی ها</button>
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