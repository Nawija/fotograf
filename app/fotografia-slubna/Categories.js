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
            className={`lg:flex items-center justify-start flex-col mt-12 text-start h-full lg:pl-0 pr-2 w-52 hidden text-sm border-r-2 transition-all relative`}
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
                        className={`transition-colors p-1.5 mt-0.5 ${
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
