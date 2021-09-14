import React from "react";
import Link from "next/link";

export default function Header() {
    return (
        <header className="flex flex-col items-center justify-between px-10 pt-10 space-y-4 lg:space-y-0 lg:flex-row ">
            <Link href="/">
                <a className="relative overflow-hidden transition-opacity duration-300 ease-out">
                    {/* <img className="w-20 " src="/img/logo-black.svg" alt="" /> */}
                    <img className="w-24" src="/img/logo-gradient.svg" alt="" />
                </a>
            </Link>
            <nav className="flex space-x-3 text-sm font-medium tracking-wider text-black uppercase ">
                <Link href="/">
                    <a className="hover:underline">Works</a>
                </Link>
                <Link href="/about">
                    <a className="hover:underline">About</a>
                </Link>
                <Link href="/#contact">
                    <a className="hover:underline">Contact</a>
                </Link>
            </nav>
        </header>
    );
}
{
    /* <header
            className={
                className
                    ? className
                    : "top-0 flex items-center justify-between px-10 pt-10 lg:items-start lg:h-screen lg:pb-12 lg:w-1/3 lg:flex-col lg:sticky "
            }
        >
            <Link href="/">
                <a className="relative overflow-hidden transition-opacity duration-300 ease-out">
                    <img className="w-24" src="/img/logo-gradient.svg" alt="" />
                </a>
            </Link>
            <nav className="flex space-x-3 text-sm font-medium text-black lg:space-x-0 lg:space-y-4 lg:flex-col">
                <Link href="/">
                    <a className="hover:underline">Works</a>
                </Link>
                <Link href="/about">
                    <a className="hover:underline">About</a>
                </Link>
                <Link href="#contact">
                    <a className="hover:underline">Contact</a>
                </Link>
            </nav>
        </header> */
}
