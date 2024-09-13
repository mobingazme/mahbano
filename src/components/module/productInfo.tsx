'use client';
import React from 'react';

// تعریف نوع برای selectedProduct
interface SelectedProduct {
    sale_price: number;
    inventory: number;
}

// تعریف نوع برای props
interface ProductInfoProps {
    title: string;
    sale_price: number;
    old_price?: number;
    inventory: number;
    sale_type: 'simple' | 'variable'; // فرض بر این است که sale_type فقط دو مقدار 'simple' یا 'complex' می‌تواند داشته باشد.
    selectedProduct?: SelectedProduct;
}

const ProductInfo: React.FC<ProductInfoProps> = ({
    title,
    sale_price,
    old_price,
    inventory,
    sale_type,
    selectedProduct,
}) => {
    return (
        <div className='col-span-3 p-3'>
            <h2 data-aos="fade-down" className='text-gray-900 text-lg md:text-3xl font-bold'>{title}</h2>
            <div data-aos="fade-down" className='flex justify-between w-80 items-center py-3'>
                <span className='text-gray-800 font-bold md:text-xl'>
                    تومان :
                    <span className='text-gray-600'>
                        {sale_type === 'simple' ? sale_price : selectedProduct ? selectedProduct.sale_price : '-'}
                    </span>
                </span>
                {old_price && <del className='text-gray-500 font-bold md:text-xl '>{old_price}</del>}
            </div>

            <span data-aos="fade-down" className='text-gray-800 font-bold md:text-xl'>
                موجودی  :
                <span className={`${inventory > 0 ? 'text-gray-600' : 'text-red-500'}`}>
                    {sale_type === 'simple' ? (inventory > 0 ? inventory : 'اتمام موجودی') : (selectedProduct ? (selectedProduct.inventory > 0 ? selectedProduct.inventory : 'اتمام موجودی') : 'اتمام موجودی')}
                </span>
            </span>
            <p data-aos="fade-right" className='text-gray-500 py-1 md:py-5'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
            </p>
        </div>
    );
};

export default ProductInfo;
