"use client";

import { notFound } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export const dynamicParams = true;
const arrowBtn = "p-2 bg-white font-medium text-black mx-7";

export default async function modelPhoto(photoId) {
    const photos = data.reportazZChrztu.img;
    const photoIndex = photos.findIndex((photo) => photo.id === photoId);

    if (photoIndex === -1) {
        return notFound();
    }
    const nextPhotoIndex = (photoIndex + 1) % photos.length;
    const prevPhotoIndex = (photoIndex - 1 + photos.length) % photos.length;
    const nextPhotoId = photos[nextPhotoIndex].id;
    const prevPhotoId = photos[prevPhotoIndex].id;

    const navigateToNextPhoto = () => {
        window.location.href = `/fotografia/fotografia-slubna/${nextPhotoId}`;
    };

    const navigateToPrevPhoto = () => {
        window.location.href = `/fotografia/fotografia-slubna/${prevPhotoId}`;
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "ArrowLeft") {
                navigateToPrevPhoto();
            } else if (event.key === "ArrowRight") {
                navigateToNextPhoto();
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);
    return (
        <div className="p-2 flex items-center justify-center fixed top-0 left-0 z-50 w-full h-screen">
            <div className="bg-black/80 absolute w-full h-full top-0 left-0 -z-10" />
            <Link
                href={`/fotografia/fotografia-slubna/${nextPhotoId}`}
                className={arrowBtn}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                    />
                </svg>
            </Link>
            <img src={photos[photoIndex].url} alt={photoId} />
            <Link
                href={`/fotografia/fotografia-slubna/${prevPhotoId}`}
                className={arrowBtn}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                </svg>
            </Link>
        </div>
    );
}
