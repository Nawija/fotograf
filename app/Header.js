"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
    const pathName = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    function handleMenu() {
        setShowMenu(!showMenu);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const links = [
        { path: "/", label: "Start" },
        { path: "/o-mnie", label: "O Mnie" },
        { path: "/fotografia-slubna", label: "Fotografia" },
        { path: "/oferta", label: "Oferta" },
        { path: "/kontakt", label: "Kontakt" },
    ];

    const strefaKlientaLink = {
        path: "/strefa-klienta",
        label: "Strefa Klienta",
    };

    return (
        <header
            className={`text-gray-800 fixed top-0 left-0 w-full px-5 z-50 transition-colors duration-300 ${
                pathName === "/" && !isScrolled ? "" : "bg-gray-100 shadow-lg"
            }`}
        >
            <div className="max-w-screen-2xl lg:p-5 py-3 mx-auto flex items-center justify-between">
                <Link
                    href="/"
                    className="flex font-medium items-center justify-center text-gray-900"
                >
                    <p
                        className={`ml-1 font-semibold transition-transform text-sm duration-300 ${
                            pathName === "/" && !isScrolled
                                ? "scale-110"
                                : "scale-100"
                        }`}
                    >
                        JAREK OLSZEWSKI
                    </p>
                </Link>
                <button
                    aria-label="Menu"
                    className={`lg:hidden p-2.5 z-50 h-12 rounded-lg order-1 lg:order-none transition-transform${
                        showMenu ? "" : "rotate-90"
                    }`}
                    onClick={() => handleMenu()}
                >
                    <div
                        className={`h-0.5 rounded-lg bg-red-600 transition-all ${
                            showMenu ? "w-4 -rotate-45 scale-110" : "w-4 m-1"
                        }`}
                    ></div>
                    <div
                        className={` h-0.5 rounded-lg bg-red-600 transition-all ${
                            showMenu ? "scale-0" : "w-3 m-1"
                        }`}
                    ></div>
                    <div
                        className={` h-0.5 rounded-lg bg-red-600 transition-all ${
                            showMenu
                                ? "w-4 -translate-y-1 rotate-45 scale-110"
                                : "w-4 m-1"
                        }`}
                    ></div>
                </button>
                {/* -------- Desctop -------- */}
                <div className="items-center justify-center space-x-12 text-sm hidden lg:flex">
                    {links.map((link) => (
                        <li
                            key={link.path}
                            className={`hover:text-red-500 transition-colors font-medium ${
                                pathName === link.path ? "text-red-600 " : ""
                            }`}
                        >
                            <Link className="py-2" href={link.path}>
                                {link.label}
                            </Link>
                        </li>
                    ))}

                    <Link
                        href={strefaKlientaLink.path}
                        className="btn-main flex items-center justify-center py-1.5 px-3"
                    >
                        {strefaKlientaLink.label}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            className="w-3 h-3 ml-1"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                            ></path>
                        </svg>
                    </Link>
                </div>

                {/* -------- Mobile ------------- */}
                <div
                    className={`items-center justify-center text-sm lg:hidden flex flex-col fixed top-0 w-80 bg-white shadow-2xl space-y-4 left-0 h-screen transition-transform duration-200 ${
                        showMenu ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    {links.map((link) => (
                        <li
                            key={link.path}
                            className={`hover:text-red-500 transition-colors font-semibold px-4 py-3 ${
                                pathName === link.path ? "text-red-600 " : ""
                            }`}
                        >
                            <Link
                                className="py-2"
                                href={link.path}
                                onClick={() => handleMenu()}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}

                    <Link
                        href={strefaKlientaLink.path}
                        onClick={() => handleMenu()}
                        className="btn-main flex items-center justify-center py-1.5 px-3"
                    >
                        {strefaKlientaLink.label}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="2"
                            stroke="currentColor"
                            className="w-3 h-3 ml-1"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                            ></path>
                        </svg>
                    </Link>
                </div>
            </div>
        </header>
    );
}
