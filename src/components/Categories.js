import { Tabs } from "flowbite-react";
import SwiperCard1 from "./Ct1";
import SwiperCard2 from "./Ct2";
import SwiperCard3 from "./Ct3";
import SwiperCard4 from "./Ct4";

function Categories() {
    return (
        <div className="m-auto mt-32 pt-4 md:pt-16 md:pb-16 w-96 sm:w-11/12" id="categories" data-aos="fade-up" data-aos-duration="3000">
            <p className="text-center text-3xl mb-10">Kategori</p>
            {/* <p className="text-center text-xl w-10/12 m-auto mb-16">Kami berusaha menyediakan berbagai keperluan anda</p> */}
            <Tabs aria-label="Pills" style="pills">
                <Tabs.Item active title="Busana">
                    <SwiperCard1/>
                </Tabs.Item>
                <Tabs.Item title="Kitab">
                    <SwiperCard2/>
                </Tabs.Item>
                <Tabs.Item title="Aksesoris">
                    <SwiperCard3/>
                </Tabs.Item>
                <Tabs.Item title="Makanan">
                    <SwiperCard4/>
                </Tabs.Item>
            </Tabs>
        </div>
    );
}

export default Categories;
