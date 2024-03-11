"use client"
import 'animate.css';

import React, { useState } from 'react'

function ShowDetails({ Data }) {
    const { id, title, brief, cover, inventory, sale_price, sku, old_price, value_discount, sale_type, attributes } = Data || "";

    //console.log(Data)
    const [monthlyButtonStyle, setMonthlyButtonStyle] = useState('text-gray-900 font-bold text-lg border-b-2 border-B p-2  w-28');
    const [yearlyButtonStyle, setYearlyButtonStyle] = useState('text-gray-600 font-bold p-2 w-28 text-lg  ');
    const [showDetails, setShowDetails] = useState(false);

    const handleMonthlyButtonClick = () => {
        setMonthlyButtonStyle('text-gray-900 font-bold text-lg border-b-2 border-B p-2  w-28');
        setYearlyButtonStyle('text-gray-600  text-lg  p-2  w-28');
        setShowDetails(false);
    };

    const handleYearlyButtonClick = () => {
        setYearlyButtonStyle('text-gray-900 font-bold text-lg border-b-2 border-B p-2  w-28');
        setMonthlyButtonStyle('text-gray-600  text-lg  p-2  w-28');
        setShowDetails(true);
    };
    return (
        <>
            <div className='p-5 '>
                <button className={`${monthlyButtonStyle} transition-transform hover:text-gray-900  duration-300 hover:border-b-2 border-B font-bold`} onClick={handleMonthlyButtonClick}>توضیحات</button>
                <button className={`${yearlyButtonStyle}  transition-transform hover:text-gray-900 duration-300 hover:border-b-2 border-B font-bold`} onClick={handleYearlyButtonClick}>مشخصات</button>
            </div>
            <div className='w-full h-fit p-5 px-40'>
                <div className=' border p-5'>
                    {showDetails ? (
                        <div className="flex justify-start animate__animated animate__fadeInUp ">
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
                        </div>) : (
                        <p className="text-gray-900 pt-5 text-center flex justify-center md:text-start animate__animated animate__fadeInUp">
                            {brief}
                        </p>
                    )}
                </div>
            </div>
        </>
    )
}

export default ShowDetails