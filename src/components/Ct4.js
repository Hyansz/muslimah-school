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
import Banana from "./../assets/banana.jpeg"
import Baso from "./../assets/basoaci.jpeg"
import Basreng from "./../assets/basreng.jpeg"
import Kentang from "./../assets/kentang.jpeg"
import Madu from "./../assets/madu.jpeg"
import Mete from "./../assets/mete.jpeg"
import Rengginang from "./../assets/rengginang.jpeg"
import Teri from "./../assets/tericang.jpeg"
import Usus from "./../assets/usus.jpeg"
import Tempe from "./../assets/tempe.jpeg"

export default function SwiperCard4() {
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
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Banana} title="Choco Banana Chips" price="Rp 19.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Baso} title="Baso Aci" price="Rp 16.000" pcs="2pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Basreng} title="Basreng" price="Rp 16.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Kentang} title="Kentang Mustofa" price="Rp 23.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Madu} title="Madu" price="Rp 50.000 - Rp 88.000" pcs="btl"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Mete} title="Kacang Mete" price="Rp 50.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Rengginang} title="Rengginang" price="Rp 19.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Teri} title="Tericang" price="Rp 28.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Usus} title="Usus Crispy" price="Rp 17.000 - Rp 23.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Tempe} title="Kripik Tempe" price="Rp 19.000" pcs="pcs"/>
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
                        <Card image={Banana} title="Choco Banana Chips" price="Rp 19.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Baso} title="Baso Aci" price="Rp 16.000" pcs="2pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Basreng} title="Basreng" price="Rp 16.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Kentang} title="Kentang Mustofa" price="Rp 23.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Madu} title="Madu" price="Rp 50.000 - Rp 88.000" pcs="btl"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Mete} title="Kacang Mete" price="Rp 50.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Rengginang} title="Rengginang" price="Rp 19.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Teri} title="Tericang" price="Rp 28.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Usus} title="Usus Crispy" price="Rp 17.000 - Rp 23.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Tempe} title="Kripik Tempe" price="Rp 19.000" pcs="pcs"/>
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
                        <Card image={Banana} title="Choco Banana Chips" price="Rp 19.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Baso} title="Baso Aci" price="Rp 16.000" pcs="2pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Basreng} title="Basreng" price="Rp 16.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Kentang} title="Kentang Mustofa" price="Rp 23.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Madu} title="Madu" price="Rp 50.000 - Rp 88.000" pcs="btl"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Mete} title="Kacang Mete" price="Rp 50.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Rengginang} title="Rengginang" price="Rp 19.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Teri} title="Tericang" price="Rp 28.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Usus} title="Usus Crispy" price="Rp 17.000 - Rp 23.000" pcs="pcs"/>
                    </SwiperSlide>
                    <SwiperSlide className="p-5 rounded-3xl">
                        <Card image={Tempe} title="Kripik Tempe" price="Rp 19.000" pcs="pcs"/>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
