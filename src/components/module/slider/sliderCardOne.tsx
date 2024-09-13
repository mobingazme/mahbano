"use client";
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'animate.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import { Pagination, Navigation, Autoplay, Grid } from 'swiper/modules';
import useProductsStore from '@/stores/useProductsStore';
import Card from '../card';

// تعریف نوع برای محصول
interface Product {
    id: number;
    title: string;
    description?: string;
    price?: number;
    imageUrl?: string;
    cover?: string; // پارامتر اضافه شده
    sale_price?: number; // پارامتر اضافه شده
    // افزودن دیگر ویژگی‌های محصول در صورت نیاز
}

export default function CardSliderOne() {
    const { products, fetchProducts,  paginate } = useProductsStore();

    useEffect(() => {
        fetchProducts(); // دریافت محصولات از API هنگام بارگیری کامپوننت
    }, [fetchProducts]);

    return (
        <>
            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                    450: {
                        slidesPerView: 1.5,
                        spaceBetween: 0,
                    },
                    576: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    676: {
                        slidesPerView: 2,
                        spaceBetween: 0,
                    },
                    768: {
                        slidesPerView: 2.2,
                        spaceBetween: 0,
                    },
                    900: {
                        slidesPerView: 3,
                        spaceBetween: 0,
                    },
                    1148: {
                        slidesPerView: 4,
                        spaceBetween: 0,
                    },
                }}
                slidesPerView={4}
                spaceBetween={30}
                pagination={{ clickable: true }}
                modules={[Navigation, Autoplay, Grid]}
                className="mySwiper"
            >
                {products.map((product: Product) => (
                    <SwiperSlide key={product.id}>
                        <div className='flex justify-center items-center -z-10 md:px-1'>
                            <Card
                                id={product.id}
                                cover={product.cover || ''}
                                sale_price={product.sale_price || 0}
                                title={product.title}
                                description={product.description}
                                price={product.price}
                                imageUrl={product.imageUrl}
                                sale_type={'simple'} // مقدار پیش‌فرض برای sale_type
                                productCount={1} // مقدار پیش‌فرض برای productCount
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
