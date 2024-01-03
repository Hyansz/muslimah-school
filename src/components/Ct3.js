import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import Card from "./Card";
import Bag1 from "./../assets/totebag.jpeg"
import Bag2 from "./../assets/totebag2.jpeg"
import Bag3 from "./../assets/shoppingbag.png"
import Bag4 from "./../assets/botol.PNG"

export default function SwiperCard3() {
    return (
        <div>
            <div className="block sm:hidden">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    navigation={true}
                    modules={[Pagination]}
                    className="mySwiper w-11/12 m-auto rounded-3xl"
                >
                    <SwiperSlide className="p-5">
                        <Card image={Bag1} title="Totebag Dakwah" price="Rp 98.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5">
                        <Card image={Bag2} title="Totebag" price="Rp 50.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5">
                        <Card image={Bag3} title="Shopping Bag" price="Rp 50.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5">
                        <Card image={Bag4} title="Termos Hitam Putih" price="Rp 55.000" pcs="pcs"/>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="hidden sm:block md:hidden xl:block">
                <Swiper
                    slidesPerView={3}
                    spaceBetween={10}
                    navigation={true}
                    modules={[Pagination]}
                    className="mySwiper w-11/12 m-auto"
                >
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Bag1} title="Totebag Dakwah" price="Rp 79.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Bag2} title="Totebag" price="Rp 50.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Bag3} title="Shopping Bag" price="Rp 50.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Bag4} title="Termos Hitam Putih" price="Rp 55.000" pcs="pcs"/>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="hidden sm:hidden md:block xl:hidden">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    navigation={true}
                    modules={[Pagination]}
                    className="mySwiper w-11/12 m-auto"
                >
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Bag1} title="Totebag Dakwah" price="Rp 79.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Bag2} title="Totebag" price="Rp 50.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Bag3} title="Shopping Bag" price="Rp 50.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Bag4} title="Termos Hitam Putih" price="Rp 50.000" pcs="pcs"/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
