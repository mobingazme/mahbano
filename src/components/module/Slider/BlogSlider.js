
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'animate.css';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/grid';


// import required modules
import { Pagination, Navigation, Autoplay, Grid } from 'swiper/modules';
import { Icon } from '@iconify/react';

const data = [
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

export default function BlogSlider() {
    const [isHovered, setIsHovered] = useState(Array(data.length).fill(false));

    const handleMouseEnter = (index) => {
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
                        <div className='cursor-pointer p-3 relative overflow-hidden hover:shadow-xl animate__animated animate__fadeInUp animate__delay-2s'
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}>
                            <img
                                src={item.image}
                                className={`w-full h-auto transition-transform duration-500 transform ${isHovered[index] ? 'scale-110' : ''}`}
                                alt={item.title}
                            />
                            <div className='py-5'>
                                <h4 className='text-xl font-bold text-gr'>{item.title}</h4>
                                <p className='text-sm text-gray-600 '>{item.text}</p>
                            </div>
                            <div className='text-gr hover:text-Turquoise text-sm font-bold flex cursor-pointer duration-700 items-center'>
                                <h6 >بیشتر بخوانید</h6>
                                <Icon icon="lucide:move-left" />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}

            </Swiper>
        </>
    );
}






