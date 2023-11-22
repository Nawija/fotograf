"use client";

import { useEffect, useState } from "react";

import Link from "next/link";

const LinkStyle =
    "transition-colors py-1.5 text-white px-3 w-max text-sm bg-gray-500 rounded-xl mx-2 hover:bg-gray-200 transition-colors hover:text-red-900";

export default function MenuBar({ photos, Likes }) {
    let [likedPhotos, setLikedPhotos] = useState([]);
    useEffect(() => {
        if (Likes && Likes.Likes) {
            const likedPhotoIds = Likes.Likes.map((like) => like.photoId);
            setLikedPhotos(likedPhotoIds);
        }
    }, [Likes]);

    console.log(likedPhotos);
    return (
        <div className="flex mt-10 lg:mt-0 ml-1 items-start justify-center text-sm relative space-x-2">
            <button className={LinkStyle}>Wyczysc Serduszka</button>
            <Link
                href={`/api/pobierz-zdjecia/?images=${encodeURIComponent(
                    JSON.stringify(photos)
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={LinkStyle}
            >
                Pobierz wszystko
            </Link>

            <Link
                href={`/api/pobierz-zdjecia-ulubione/?images=${encodeURIComponent(
                    JSON.stringify(Likes.Likes)
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={LinkStyle}
            >
                Pobierz Ulubione
            </Link>
            <button className={LinkStyle}>Napisz wiadomość</button>
        </div>
    );
}
