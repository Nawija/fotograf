"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Categories() {
    const [fixedPosition, setFixedPosition] = useState(null);

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
        { path: "fotografia-slubna", label: "Pobierz zdjecia" },
        { path: "reportaz-z-chrztu", label: "Pobierz ulubione" },
        { path: "fotografia-komunijna", label: "Napisz komentarz" },
        { path: "wieczory-panieńskie", label: "Wyślij Wiadomość" },
        { path: "studniówki", label: "Udostępnij" },
    ];
    return (
        <div
            className={`lg:flex items-center justify-start flex-col mt-12 text-start h-full lg:pl-0 pr-2 w-52 hidden text-[15px] transition-all relative menuTransformX`}
        >
            <div
                className={`flex flex-col h-full ${
                    fixedPosition ? "fixed top-20" : "top-20"
                }`}
            >
                {categoriesLinks.map((categoriesLink) => (
                    <Link
                        key={categoriesLink.path}
                        href={`/${categoriesLink.path}`}
                        className={`transition-colors font-medium text-gray-800 p-1.5 mt-0.5 ${
                            pathname === `/${categoriesLink.path}`
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
