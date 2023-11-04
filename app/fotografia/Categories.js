"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Categories() {
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
        <div className="flex flex-col pr-10 py-4 text-start h-screen overflow-y-auto border-r-2">
            {categoriesLinks.map((categoriesLink) => (
                <Link
                    key={categoriesLink.path}
                    href={`/fotografia/${categoriesLink.path}`}
                    className={`transition-colors p-1 ${
                        pathname == `/fotografia/${categoriesLink.path}`
                            ? "text-red-600 underline underline-offset-2"
                            : "hover:text-red-600"
                    }`}
                >
                    {categoriesLink.label}
                </Link>
            ))}
        </div>
    );
}
