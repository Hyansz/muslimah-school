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
import Doa from "./../assets/doapilihan.png"
import Note from "./../assets/notebook.jpeg"
import Dzikir from "./../assets/pagixpetang.jpeg"

export default function SwiperCard2() {
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
                        <Card image={Doa} title="Buku Doa Doa Pilihan" price="Rp 79.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5">
                        <Card image={Note} title="Notebook" price="Rp 25.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5">
                        <Card image={Dzikir} title="Buku Dzikir Pagi Petang" price="Rp 50.000" pcs="pcs"/>
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
                        <Card image={Doa} title="Buku Doa Doa Pilihan" price="Rp 79.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Note} title="Notebook" price="Rp 50.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Dzikir} title="Buku Dzikir Pagi Petang" price="Rp 50.000" pcs="pcs"/>
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
                        <Card image={Doa} title="Buku Doa Doa Pilihan" price="Rp 79.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Note} title="Notebook" price="Rp 50.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Dzikir} title="Buku Dzikir Pagi Petang" price="Rp 50.000" pcs="pcs"/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
