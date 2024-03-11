"use client"
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'animate.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';


// import required modules
import { Pagination,Navigation,Autoplay,Grid } from 'swiper/modules';
import useProductsStore from '@/stores/UseProductsStore';
import Card from '../Card';

export default function CardSliderOne() {
    const { products, fetchProducts, can_filter, paginate } = useProductsStore()
    const Products = products;
    useEffect(() => {
        fetchProducts(); // دریافت محصولات از API هنگام بارگیری کامپوننت
    }, [fetchProducts]);
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
               
              
                  pagination={{
                    clickable: true,
               }}
               modules={[ Navigation,Autoplay,Grid]}
                className="mySwiper"
            >


                {products.map((product) => (
                    <SwiperSlide key={product}>
                        <div className='flex  animate__animated animate__fadeInUp'>
                            <Card key={product.id} {...product} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}




