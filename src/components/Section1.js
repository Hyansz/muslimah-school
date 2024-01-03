"use client";

import { Card } from "flowbite-react";
import Cek from "./../assets/cek.svg"
import Pay from "./../assets/pay.svg"
import Fast from "./../assets/fast.svg"

export default function Section1() {
    return (
        <div className="w-11/12 m-auto py-16" id="about" data-aos="fade-up" data-aos-duration="3000">
            <p className="text-center text-3xl mb-10">Mengapa Memilih Kami?</p>
            {/* <p className="text-center text-xl w-10/12 m-auto mb-16">Insya allah kami berusaha sepenuh hati untuk melayani anda</p> */}
            <div className="flex justify-center flex-col gap-4 text-center sm:flex-row align-middle">
                <Card href="#" className="max-w-sm w-80 m-auto sm:w-96 rounded-3xl my-2 sm:my-0 shadow-2xl h-80">
                    <img src={Cek} alt="" className="w-10 self-center pt-10"></img>
                    <p className="text-gray-700 dark:text-gray-400 font-bold text-xl">
                        Terpercaya
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400 text-justify">
                        Kepercayaan Anda adalah Prioritas Kami! kami hadir sebagai mitra terpercaya untuk kebutuhan Anda. Produk yang berkualitas dan layanan pelanggan yang ramah adalah jaminan kepuasan kami.
                    </p>
                </Card>
                <Card href="#" className="max-w-sm w-80 m-auto sm:w-96 rounded-3xl my-2 sm:my-0 shadow-2xl h-80">
                    <img src={Pay} alt="" className="w-10 self-center"></img>
                    <p className="text-gray-700 dark:text-gray-400 font-bold text-xl">
                        Pembayaran Yang Aman
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400 text-justify">
                        Keamanan Prioritas Kami! Nikmati kemudahan berbelanja tanpa khawatir dengan sistem pembayaran terjamin kami
                    </p>
                </Card>
                <Card href="#" className="max-w-sm w-80 p-2 m-auto sm:w-96 rounded-3xl my-2 sm:my-0 shadow-2xl h-80">
                    <img src={Fast} alt="" className="w-10 self-center"></img>
                    <p className="text-gray-700 dark:text-gray-400 font-bold text-xl">
                        Respon Cepat
                    </p>
                    <p className="font-normal text-gray-700 dark:text-gray-400 text-justify">
                        Kami memberikan layanan yang responsif dan efisien. Kami siap memberikan solusi secara cepat dan tepat untuk memastikan kepuasan Anda.
                    </p>
                </Card>
            </div>
        </div>
    );
}
