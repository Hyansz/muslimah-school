// src/LandingPage.js
import React from "react";
import Brand from "./../assets/hero.jpeg"

const Hero = () => {
    return (
        <div className="w-11/12 m-auto" data-aos="zoom-in" data-aos-duration="3000">
            <div className="flex items-center justify-between gap-4 flex-col sm:flex-row sm:pt-32">
                <div className=" p-8 rounded self-center order-2 sm:order-1 text-center sm:text-left">
                    <h1 className="text-2xl font-semibold">
                        Welcome to 
                    </h1>
                    <h1 className="text-3xl font-bold md:text-5xl mb-4">
                        Muslimah School
                    </h1>
                    <p className="text-gray-600 mb-4 text-lg">
                        This is a simple landing page built with React and Tailwind
                        CSS.
                    </p>
                    <a href="https://t.me/katalogprodukmuslimahschoolstore">
                        <button className="bg-teal-500 text-white p-4 px-6 mt-4 rounded-xl text-lg">
                            Kunjungi
                        </button>
                    </a>
                </div>
                <div className=" p-8 rounded order-1 sm:order-2">
                    <img src={Brand} alt="" className="w-96 shadow-2xl rounded-2xl"></img>
                </div>
            </div>
        </div>
    );
};

export default Hero;
