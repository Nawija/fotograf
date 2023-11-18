"use client";

import Link from "next/link";

export default function Photo({ photos }) {
    return (
        <div className="flex flex-wrap">
            {photos.map((photo) => (
                <div
                    key={photo.id}
                    className={`relative m-2 group transition-all h-44 w-[44%] lg:w-72 lg:h-56 duration-200 hover:scale-[1.015] hover:shadow-2xl cursor-pointer overflow-hidden rounded-md`}
                >
                    <Link
                        href={`/fotografia-slubna/${photo.id}`}
                        key={photo.id}
                    >
                        <img
                            className="object-cover opacityAnimation h-full w-full"
                            src={photo.url}
                        />
                        <div className="opacity-0 group-hover:opacity-100 absolute h-full w-full top-0 left-0 bg-gradient-to-b to-black/50 via-transparent from-transparent transition-all duration-500 delay-100" />
                    </Link>
                </div>
            ))}
        </div>
    );
}
