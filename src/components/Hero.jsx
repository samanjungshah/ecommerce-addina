import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Hero.css';

// import required modules
import { Pagination } from 'swiper/modules';
import Slide from './Slide';
import Chair1 from '../assets/imgs/chair1.png'
import Chair2 from '../assets/imgs/chair2.png'
import Chair3 from '../assets/imgs/chair3.png'
import of1 from '../assets/imgs/off-01.png'

function Hero() {
    return (
        <div className='h-screen md:px-28 px-4 hero bg-[#f5f3ed]'>
            <Swiper
                direction={'vertical'}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='py-20 flex flex-col md:flex-row'><Slide image={Chair1}/></SwiperSlide>
                <SwiperSlide className=' py-20 flex flex-col md:flex-row'><Slide image={Chair2}/></SwiperSlide>
                <SwiperSlide className='py-20  flex flex-col md:flex-row'><Slide image={Chair3}/></SwiperSlide>
     
            </Swiper>
        </div>
    )
}

export default Hero


