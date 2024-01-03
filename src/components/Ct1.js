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
import Celamis from "./../assets/celamis.jpeg"
import Kaoskaki from "./../assets/kaoskaki.jpeg"

export default function SwiperCard1() {
    return (
        <div>
            <div className="block sm:hidden md:hidden">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    navigation={true}
                    modules={[Pagination]}
                    className="mySwiper w-11/12 m-auto rounded-3xl"
                >
                    <SwiperSlide className="p-5">
                        <Card image={Celamis} title="Celana Dalaman Gamis" price="Rp 79.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5">
                        <Card image={Kaoskaki} title="Kaos Kaki" price="Rp 50.000" pcs="4pcs"/>
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
                        <Card image={Celamis} title="Celana Dalaman Gamis" price="Rp 79.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Kaoskaki} title="Kaos Kaki" price="Rp 50.000" pcs="4pcs"/>
                    </SwiperSlide>
                </Swiper>
            </div>
            <div className="hidden sm:hidden md:block lg:hidden">
                <Swiper
                    slidesPerView={2}
                    spaceBetween={10}
                    navigation={true}
                    modules={[Pagination]}
                    className="mySwiper w-11/12 m-auto"
                >
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Celamis} title="Celana Dalaman Gamis" price="Rp 79.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Kaoskaki} title="Kaos Kaki" price="Rp 50.000" pcs="4pcs"/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
