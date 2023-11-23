"use client";
import Link from "next/link";

import { useEffect, useState } from "react";

export default function Photo({ FotografiaSlubna, Likes }) {
    let photos = FotografiaSlubna.data.allAa121223s[0].img;
    let [likedPhotos, setLikedPhotos] = useState([]);

    useEffect(() => {
        if (Likes && Likes.Likes) {
            const likedPhotoIds = Likes.Likes.map((like) => like.photoId);
            setLikedPhotos(likedPhotoIds);
        }
    }, [Likes]);

    const handleLike = async (photoId, url) => {
        const isLiked = likedPhotos.includes(photoId);
        if (isLiked) {
            const response = await fetch("/api/strefa-klienta", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ photoId, url }),
            });

            if (response.ok) {
                setLikedPhotos((prevLikedPhotos) =>
                    prevLikedPhotos.filter((id) => id !== photoId)
                );
            } else {
                console.error("Failed to remove like");
            }
        } else {
            const response = await fetch("/api/strefa-klienta", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ photoId, url }),
            });

            if (response.ok) {
                setLikedPhotos((prevLikedPhotos) => [
                    ...prevLikedPhotos,
                    photoId,
                ]);
            } else {
                console.error("Failed to add like");
            }
        }
    };

    return (
        <div className="flex flex-wrap opacityAnimation">
            {photos.map((photo) => (
                <div className="relative group mx-3 my-2 lg:m-2">
                    <div
                        key={photo.id}
                        className={`relative transition-all w-full h-full lg:h-56 lg:w-60 duration-200 lg:hover:scale-[1.015] hover:shadow-2xl cursor-pointer overflow-hidden rounded-md`}
                    >
                        <Link
                            href={`/strefa-klienta/${photo.id}`}
                            key={photo.id}
                        >
                            <img
                                className="object-cover opacityAnimation h-full w-full"
                                src={photo.url}
                            />
                            <div className="opacity-0 group-hover:opacity-100 absolute h-full w-full top-0 left-0 bg-gradient-to-b to-black/70 via-transparent from-transparent transition-all duration-500 delay-100 lg:flex hidden" />
                        </Link>
                        <button
                            className="absolute bottom-6 lg:bottom-4 right-2 lg:right-4 z-40 w-max"
                            onClick={() => handleLike(photo.id, photo.url)}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className={`w-9 h-9 p-1.5  z-20 ${
                                    likedPhotos.includes(photo.id)
                                        ? "text-red-400/80 fill-red-500/80"
                                        : "text-white/40 fill-white/20"
                                }`}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                />
                            </svg>
                            <div
                                className={`absolute top-0 blur-lg -z-10 w-4 h-4 p-1.5  transition-all duration-300 ${
                                    likedPhotos.includes(photo.id)
                                        ? "bg-red-600"
                                        : ""
                                }`}
                            />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
