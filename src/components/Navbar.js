"use client";

// import Link from "next/link";
import { Navbar } from "flowbite-react";
import Logo from "./../assets/logo_ms.png"

function Component() {
    return (
        <Navbar fluid rounded>
            <Navbar.Brand href="https://flowbite-react.com">
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                    <img src={Logo} alt="MS" className=" w-24"></img>
                </span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Navbar.Link href="#" active>
                    Home
                </Navbar.Link>
                <Navbar.Link href="#categories" className="ease-in">
                    Kategori
                </Navbar.Link>
                <Navbar.Link href="#cs">Customer Service</Navbar.Link>
                <Navbar.Link href="#about">About</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Component;