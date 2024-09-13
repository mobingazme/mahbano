'use client';
import React from 'react';
import { Icon } from '@iconify/react';

// Define type for variety item
interface VarietyItem {
    variety_value_color_code: string;
    variety_id: number;
    variety_value_id: number;
}

// Define type for props
interface ProductOptionsProps {
    sale_type: 'simple' | 'variable';
    productCount: number;
    handleIncrement: () => void;
    handleDecrement: () => void;
    selectedColor: string;
    handleColorChange: (color: string, variant: VarietyItem) => void;
    variety?: VarietyItem[];
    inventory: number;
}

const ProductOptions: React.FC<ProductOptionsProps> = ({
    sale_type,
    productCount,
    handleIncrement,
    handleDecrement,
    selectedColor,
    handleColorChange,
    variety
}) => {
    return (
        <div data-aos="flip-up" className='flex justify-center items-center'>
            <div>
                <h4 className='text-gray-900 font-bold md:text-xl py-3'>گزینه های موجود</h4>
                <div className='md:flex justify-between items-center md:w-52 py-3'>
                    <div className='flex w-fit border h-10 items-center p-1 rounded-md'>
                        <button onClick={handleIncrement} className='text-gray-700'>+</button>
                        <p className='text-gray-700 px-5'>{productCount}</p>
                        <button onClick={handleDecrement} className='text-gray-700'>-</button>
                    </div>
                </div>
            </div>
            {sale_type === "variable" && (
                <div>
                    <h4 className='text-gray-900 font-bold md:text-xl py-3'>رنگ‌های موجود</h4>
                    <div className='flex justify-between items-center md:w-52 py-3'>
                        {variety && variety.map((variant, index) => (
                            <div
                                key={index}
                                className={`w-8 h-8 border border-gray-300 flex justify-center items-center rounded-full cursor-pointer ${selectedColor === variant.variety_value_color_code ? 'border-black' : ''}`}
                                style={{ backgroundColor: variant.variety_value_color_code }}
                                onClick={() => handleColorChange(variant.variety_value_color_code, variant)}
                            >
                                {selectedColor === variant.variety_value_color_code && (
                                    <Icon className='text-black' icon="el:ok" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductOptions;
