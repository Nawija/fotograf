"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathName = usePathname();
    const links = [
        { path: "/", label: "Start" },
        { path: "/o-mnie", label: "O Mnie" },
        { path: "/fotografia/fotografia-slubna", label: "Fotografia" },
        { path: "/oferta", label: "Oferta" },
        { path: "/kontakt", label: "Kontakt" },
    ];
    return (
        <header
            className={`text-gray-800 p-5 mb-4 fixed top-0 w-full z-50 ${
                pathName === "/" || "/oferta"
                    ? ""
                    : "shadow-lg shadow-gray-200/40"
            }`}
        >
            <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
                <Link
                    href="/"
                    className="flex font-medium items-center justify-center text-gray-900"
                >
                    <span className="ml-1 font-semibold">JAREK OLSZEWSKI</span>
                </Link>
                <button
                    aria-label="Menu"
                    className="lg:hidden p-2.5 z-50 rounded-lg order-1 lg:order-none"
                >
                    <div className="w-4 h-0.5 m-1 rounded-lg bg-red-600"></div>
                    <div className="w-3 h-0.5 m-1 rounded-lg bg-red-600"></div>
                    <div className="w-4 h-0.5 m-1 rounded-lg bg-red-600"></div>
                </button>
                <div className="items-center justify-center space-x-12 text-sm hidden lg:flex">
                    {links.map((link) => (
                        <li
                            key={link.path}
                            className={`hover:text-red-500 transition-colors ${
                                pathName === link.path ? "text-red-600 " : ""
                            }`}
                        >
                            <Link className="py-2" href={link.path}>
                                {link.label}
                            </Link>
                        </li>
                    ))}

                    <Link
                        href="/todos"
                        className="btn-main flex items-center justify-center py-1.5 px-3"
                    >
                        Strefa Klienta
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
