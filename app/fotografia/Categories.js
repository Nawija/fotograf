"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Categories({ showMenu, setShowMenu }) {
    const [fixedPosition, setFixedPosition] = useState(null);

    function handleMenu() {
        setShowMenu(!showMenu);
    }

    const addFixedPosition = () => {
        if (window.scrollY >= 40) {
            setFixedPosition(true);
        } else {
            setFixedPosition(false);
        }
    };

    useEffect(() => {
        addFixedPosition();
        window.addEventListener("scroll", addFixedPosition);
    });

    const pathname = usePathname();
    const categoriesLinks = [
        { path: "fotografia-slubna", label: "Fotografia ślubna" },
        { path: "reportaz-z-chrztu", label: "Reportaż z chrztu" },
        { path: "fotografia-komunijna", label: "Fotografia komunijna" },
        { path: "wieczory-panieńskie", label: "Wieczory panieńskie" },
        { path: "studniówki", label: "Studniówki" },
        { path: "18-urodziny", label: "18 - urodziny" },
        { path: "sesje-indywidualne", label: "Sesje indywidualne" },
        { path: "sesje-brzuszkowe", label: "Sesje brzuszkowe" },
        { path: "fotografia-sportowa", label: "Fotografia sportowa" },
        { path: "fotografia-klubowa", label: "Fotografia klubowa" },
        { path: "zdjęcia-wizerunkowe", label: "Zdjęcia wizerunkowe" },
        { path: "zdjęcia-przemysłowe", label: "Zdjęcia przemysłowe" },
        { path: "zdjęcia-kulinarne", label: "Zdjęcia kulinarne" },
        { path: "zdjęcia-motoryzacyjne", label: "Zdjęcia motoryzacyjne" },
        { path: "zdjęcia-produktowe", label: "Zdjęcia produktowe" },
    ];
    return (
        <div
            className={`flex items-center justify-start flex-col mt-12 text-start h-full lg:pl-0 pl-2 text-sm border-r-2 transition-all  relative ${
                showMenu
                    ? "-translate-x-[200%]"
                    : "w-48 lg:w-52 translate-x-0 "
            }`}
        >
            <button
                aria-label="Menu"
                className={`fixed lg:hidden p-2.5 h-12 rounded-lg order-1 lg:order-none transition-transform ${
                    showMenu
                        ? "left-20 h-full -top-20 bg-gray-200"
                        : "left-2 -top-11"
                }`}
                onClick={() => handleMenu()}
            >
                <div
                    className={`h-0.5 rounded-lg bg-red-600 transition-all ${
                        showMenu
                            ? "w-2 translate-y-1 translate-x-3 rotate-45"
                            : "w-2 translate-y-1 -rotate-45"
                    }`}
                ></div>
                <div
                    className={` h-0.5 rounded-lg bg-red-600 transition-all ${
                        showMenu ? "w-3 m-1" : "w-3 m-1"
                    }`}
                ></div>
                <div
                    className={` h-0.5 rounded-lg bg-red-600 transition-all ${
                        showMenu
                            ? "w-2 -translate-y-1 translate-x-3 -rotate-45"
                            : "w-2 -translate-y-1 rotate-45"
                    }`}
                ></div>
            </button>
            <div
                className={`flex flex-col transition-all ${
                    fixedPosition ? "sticky top-20" : "top-20"
                }`}
            >
                {categoriesLinks.map((categoriesLink) => (
                    <Link
                        key={categoriesLink.path}
                        href={`/fotografia/${categoriesLink.path}`}
                        className={`transition-colors p-1.5 mt-0.5 ${
                            pathname === `/fotografia/${categoriesLink.path}`
                                ? "text-red-600 underline underline-offset-2"
                                : "hover:text-red-600"
                        }`}
                    >
                        {categoriesLink.label}
                    </Link>
                ))}
            </div>
        </div>
    );
}
