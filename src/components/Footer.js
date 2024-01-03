"use client";

import { Footer } from "flowbite-react";
import {
    BsDribbble,
    BsTelegram,
    BsGithub,
    BsInstagram,
    BsTwitter,
} from "react-icons/bs";
import Logo from "./../assets/logo_ms.png"

function Footers() {
    return (
        <Footer container>
            <div className="w-11/12 m-auto">
                <div className="w-full sm:flex sm:items-center flex justify-center sm:justify-between">
                    <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                        <div>
                            <img src={Logo} alt="MS" className="w-24"></img>
                        </div>
                    </div>
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon href="https://t.me/katalogprodukmuslimahschoolstore" icon={BsTelegram} />
                        <Footer.Icon href="https://www.instagram.com/muslimahschoolstore" icon={BsInstagram} />
                        {/* <Footer.Icon href="#" icon={BsTwitter} />
                        <Footer.Icon href="#" icon={BsGithub} />
                        <Footer.Icon href="#" icon={BsDribbble} /> */}
                    </div>
                </div>
                <Footer.Divider />
                <Footer.Copyright className="text-center" href="#" by="Muslimah School™" year={2023} />
            </div>
        </Footer>
    );
}

export default Footers;