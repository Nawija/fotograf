"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Photo({ photos, Likes }) {
    let [likedPhotos, setLikedPhotos] = useState([]);

    useEffect(() => {
        if (Likes && Likes.Likes) {
            const likedPhotoIds = Likes.Likes.map((like) => like.photoId);
            setLikedPhotos(likedPhotoIds);
        }
    }, [Likes]);

    const handleLike = async (photoId) => {
        const isLiked = likedPhotos.includes(photoId);

        // Check if the photo is already liked
        if (isLiked) {
            // If liked, perform a DELETE request to remove the like
            const response = await fetch("/api/strefa-klienta", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ photoId }),
            });

            if (response.ok) {
                setLikedPhotos((prevLikedPhotos) =>
                    prevLikedPhotos.filter((id) => id !== photoId)
                );
            } else {
                console.error("Failed to remove like");
            }
        } else {
            // If not liked, perform a POST request to add the like
            const response = await fetch("/api/strefa-klienta", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ photoId }),
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
        <div className="flex items-center justify-center flex-wrap">
            {photos.map((photo) => (
                <div
                    key={photo.id}
                    className={`relative m-3 group transition-all h-56 w-56 duration-200 hover:scale-[1.015] hover:shadow-2xl cursor-pointer overflow-hidden rounded-md`}
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
                    <div className="absolute bottom-2 right-2">
                        <svg
                            onClick={() => handleLike(photo.id)}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className={`w-9 h-9 p-1.5 group-hover:opacity-100 opacity-0 transition-all duration-100 ${
                                likedPhotos.includes(photo.id)
                                    ? "text-red-500 fill-red-500/50"
                                    : "text-white fill-white/20"
                            }`}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                            />
                        </svg>
                    </div>
                </div>
            ))}
        </div>
    );
}
