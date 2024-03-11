"use client"
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import ShowDetails from '@/models/ShowDetails';
import SliderProductDetails from '@/module/Slider/SliderProductDetails';

function CardDetails({ data }) {
    const { id, title, brief, cover, inventory, sale_price, sku, old_price, value_discount, sale_type, variety, attributes } = data || {};
    const [productCount, setProductCount] = useState(1);
    const defaultColor = variety && variety.length > 0 ? variety[0].variety_value_color_code : '#fc0345';
    const [selectedColor, setSelectedColor] = useState(defaultColor);
    const [selectedProduct, setSelectedProduct] = useState(null);
    //console.log(inventory)
 

    const handleIncrement = () => {
        setProductCount(prevCount => prevCount + 1);
        console.log(productCount);
    };

    const handleDecrement = () => {
        if (productCount > 1) {
            setProductCount(prevCount => prevCount - 1);
        }
    };

    const handleColorChange = (color, product) => {
        setSelectedColor(color);
        setSelectedProduct(product);
        console.log(color);
    };

    const navLinks = [
        { href: '/', label: 'خانه' },
        { href: '/store', label: 'فروشگاه' },
    ];

    return (
        <div className='bg-white'>
            <div className='w-full bg-A h-80 flex justify-center items-center'>
                <div>
                    <h2 className='text-black font-bold text-5xl mb-5'> جزئیات محصول</h2>
                    <div className='flex'>
                        {navLinks.map((link, index) => (
                            <Link href={link.href} key={index}>
                                <div className='flex justify-stretch items-stretch text-black hover:text-B duration-700 px-2'>
                                    <h3 className='ml-1 cursor-pointer font-bold'>{link.label}</h3>
                                    <Icon className='mt-1' icon="mingcute:left-line" />
                                </div>
                            </Link>
                        ))}
                        <div>
                            <h3 className=' text-gray-700'> جزئیات محصول</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-5 p-10'>
                <div className='col-span-2  px-20'>
                    <SliderProductDetails Data={data} />
                </div>
                <div className='col-span-3 p-3'>
                    <h2 className='text-gray-900 text-3xl font-bold'>{title}</h2>
                    <div className='flex justify-between w-80 items-center py-3'>
                        <span className='text-gray-800 font-bold text-xl'> تومان :<span className='text-gray-600'>{sale_type === 'simple' ? sale_price : selectedProduct ? selectedProduct.sale_price : '-'}</span></span>
                        {!old_price ? (<del className='text-gray-500 font-bold text-xl '>{old_price}</del>) : null}
                    </div>
                    {sale_type === "simple"
                        ? (<span className='text-gray-800 font-bold text-xl'>
                            موجودی  :
                            <span className={`${inventory > 0 ? 'text-gray-600' : 'text-red-500'}`}>
                                {inventory > 0 ? inventory : 'اتمام موجودی'}
                            </span>
                        </span>)
                        : (<span className='text-gray-800 font-bold text-xl'>
                            موجودی  :
                            <span className={`${selectedProduct && selectedProduct.inventory > 0 ? 'text-gray-600' : 'text-red-500'}`}>
                                {selectedProduct ? (selectedProduct.inventory > 0 ? selectedProduct.inventory : 'اتمام موجودی') : 'اتمام موجودی'}
                            </span>
                        </span>)
                    }

                    <p className='text-gray-500 py-5'>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز</p>
                    <div className='border-t border-gray-200 flex justify-between items-center'>
                        <div>
                            <h4 className='text-gray-900 font-bold text-xl py-3'>گزینه هایه موجود</h4>
                            <div className='flex justify-between items-center w-52 py-3'>
                                <div className='flex w-fit border h-10 items-center p-1 rounded-md'>
                                    <button onClick={handleIncrement} className='text-gray-700 '>+</button>
                                    <p className='text-gray-700 px-5'>{productCount}</p>
                                    <button onClick={handleDecrement} className='text-gray-700'>-</button>
                                </div>
                                <button className='text-white bg-gr hover:bg-B h-10 font-bold text-sm duration-300 p-2 rounded-md'>اضافه ب سبد خرید</button>
                            </div>
                        </div>
                        {sale_type === "variable" && (
                            <div>
                                <h4 className='text-gray-900 font-bold text-xl py-3'>رنگ‌های موجود</h4>
                                <div className='flex justify-between items-center w-52 py-3'>
                                    {variety && variety.map((variant, index) => (
                                        <div
                                            key={index}
                                            className={`w-8 h-8 border border-gray-300 flex justify-center items-center rounded-full cursor-pointer ${selectedColor === variant.variety_value_color_code ? 'border-black' : ''}`}
                                            style={{ backgroundColor: variant.variety_value_color_code }}
                                            onClick={() => handleColorChange(variant.variety_value_color_code, variant)}                                       >
                                            {selectedColor === variant.variety_value_color_code && (
                                                <Icon className='text-black' icon="el:ok" />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                    <div className='text-gray-800 hover:text-B cursor-pointer flex items-center duration-700 py-3 '>
                        <Icon className='w-5 h-fit' icon="mdi-light:heart" />
                        <h4 className='text-sm font-bold'>علاقه مندی ها</h4>
                    </div>
                </div>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <ShowDetails Data={data} />
            </div>
        </div>
    );
}

export default CardDetails;
