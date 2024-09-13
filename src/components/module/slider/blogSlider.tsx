'use client'
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'animate.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';
import { Pagination, Navigation, Autoplay, Grid } from 'swiper/modules';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import Image from 'next/image';

interface BlogPost {
    image: string;
    title: string;
    text: string;
}

const data: BlogPost[] = [
    {
        image: '/images/blog-grid-home-1-img-1.jpg',
        title: 'پست وبلاگ یک',
        text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
    },
    {
        image: '/images/blog-grid-home-1-img-2.jpg',
        title: 'پست وبلاگ دو',
        text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
    },
    {
        image: '/images/blog-grid-home-1-img-3.jpg',
        title: 'پست وبلاگ سه',
        text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
    },
    {
        image: '/images/blog-grid-home-1-img-4.jpg',
        title: 'پست وبلاگ چهار',
        text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
    },
    {
        image: '/images/blog-grid-home-1-img-5.jpg',
        title: 'پست وبلاگ پنج',
        text: 'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است',
    },
];

const BlogSlider: React.FC = () => {
    const [isHovered, setIsHovered] = useState<boolean[]>(Array(data.length).fill(false));

    const handleMouseEnter = (index: number) => {
        const newHoveredState = Array(data.length).fill(false);
        newHoveredState[index] = true;
        setIsHovered(newHoveredState);
    };

    const handleMouseLeave = () => {
        setIsHovered(Array(data.length).fill(false));
    };

    return (
        <>
            <Swiper
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    450: {
                        slidesPerView: 1.20,
                        spaceBetween: 0
                    },
                    576: {
                        slidesPerView: 1.50,
                        spaceBetween: 0
                    },
                    676: {
                        slidesPerView: 2,
                        spaceBetween: 0
                    },
                    768: {
                        slidesPerView: 2.20,
                        spaceBetween: 0
                    },
                    900: {
                        slidesPerView: 3,
                        spaceBetween: 0
                    },
                    1148: {
                        slidesPerView: 3,
                        spaceBetween: 0
                    },
                }}
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Autoplay, Grid]}
                className="mySwiper"
            >
                {data.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Link href='/blog'>
                            <div
                                data-aos="zoom-in-up"
                                className='cursor-pointer p-1 lg:p-5 relative overflow-hidden hover:shadow-xl'
                                onMouseEnter={() => handleMouseEnter(index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <Image
                                    width={1000}
                                    height={1000}
                                    src={item.image}
                                    className={`w-full h-auto transition-transform duration-500 transform ${isHovered[index] ? 'scale-110' : ''}`}
                                    alt={item.title}
                                />
                                <div className='py-5'>
                                    <h4 className='text-xl font-bold text-gr'>{item.title}</h4>
                                    <p className='text-sm text-gray-600'>{item.text}</p>
                                </div>
                                <div className='text-gr hover:text-Turquoise text-sm font-bold flex cursor-pointer duration-700 items-center'>
                                    <h6>بیشتر بخوانید</h6>
                                    <Icon icon="lucide:move-left" />
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}

export default BlogSlider;
