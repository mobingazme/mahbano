"use client";
import 'animate.css';
import React, { useState } from 'react';

// تعریف نوع برای ویژگی‌های محصول
interface Attribute {
    key: string;
    value: string;
}

// تعریف نوع برای داده‌های ورودی کامپوننت
interface Data {
    id?: number;
    title?: string;
    brief?: string;
    cover?: string;
    inventory?: number;
    sale_price?: number;
    sku?: string;
    old_price?: number;
    value_discount?: number;
    sale_type?: string;
    attributes?: Attribute[];
}

// تعریف نوع برای props کامپوننت ShowDetails
interface ShowDetailsProps {
    Data: Data;
}

const ShowDetails: React.FC<ShowDetailsProps> = ({ Data }) => {
    const { attributes = [], brief = '' } = Data;

    const [monthlyButtonStyle, setMonthlyButtonStyle] = useState('text-gray-900 font-bold border-b-2 border-B');
    const [yearlyButtonStyle, setYearlyButtonStyle] = useState('text-gray-600 font-bold');
    const [showDetails, setShowDetails] = useState(false);

    const handleMonthlyButtonClick = () => {
        setMonthlyButtonStyle('text-gray-900 font-bold border-b-2 border-B');
        setYearlyButtonStyle('text-gray-600');
        setShowDetails(false);
    };

    const handleYearlyButtonClick = () => {
        setYearlyButtonStyle('text-gray-900 font-bold border-b-2 border-B');
        setMonthlyButtonStyle('text-gray-600');
        setShowDetails(true);
    };

    return (
        <>
            <div className='md:p-5 p-2'>
                <button
                    className={`${monthlyButtonStyle} p-2 w-28 transition-transform hover:text-gray-900 md:text-lg duration-300 hover:border-b-2 border-B font-bold`}
                    onClick={handleMonthlyButtonClick}
                >
                    توضیحات
                </button>
                <button
                    className={`${yearlyButtonStyle} p-2 w-28 transition-transform hover:text-gray-900 md:text-lg duration-300 hover:border-b-2 border-B font-bold`}
                    onClick={handleYearlyButtonClick}
                >
                    مشخصات
                </button>
            </div>
            <div className='w-full h-fit p-2 md:p-5 md:px-40'>
                <div className='border p-5'>
                    {showDetails ? (
                        <div
                            data-aos="zoom-in-up"
                            className="flex justify-start"
                        >
                            {attributes.length > 0 ? (
                                <div className="pt-5">
                                    <ul>
                                        {attributes.map((attribute, index) => (
                                            <li key={index}>
                                                <h4 className="text-gray-900 text-lg">
                                                    {`${attribute.key} - `}
                                                    <span className="text-gray-500">{attribute.value}</span>
                                                </h4>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : null}
                        </div>
                    ) : (
                        <p
                            data-aos="zoom-in-up"
                            className="text-gray-900 md:pt-5 text-center flex justify-center animate__animated animate__fadeInUp"
                        >
                            {brief || 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز'}
                        </p>
                    )}
                </div>
            </div>
        </>
    );
}

export default ShowDetails;
