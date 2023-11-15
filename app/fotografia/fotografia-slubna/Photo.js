"use client";

import Link from "next/link";
import { useState } from "react";
import { getDatabase, ref, get, set } from "firebase/database";
import { initializeApp } from "firebase/app";

// Skonfiguruj Firebase zgodnie z danymi swojego projektu
const firebaseConfig = {
    apiKey: "4349f4a8ca168f8bc4c85bc6f4378a37ea936af5",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "likephoto-1a947",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    databaseURL: "YOUR_DATABASE_URL",
};

const firebaseApp = initializeApp(firebaseConfig);

export default function Photo({ photos }) {
    const [clickedArray, setClickedArray] = useState(
        new Array(photos.length).fill(false)
    );

    const handleClick = async (index, photoId) => {
        try {
            const db = getDatabase(firebaseApp);
            const likesRef = ref(db, `likes/${photoId}`);

            // Odczytaj aktualną liczbę kliknięć (lub 0, jeśli nie istnieje)
            const snapshot = await get(likesRef);
            const currentLikes = snapshot.val() || 0;

            // Zapisz informacje o kliknięciu w bazie danych
            await set(likesRef, currentLikes + 1);

            // Zaktualizuj lokalny stan
            const newClickedArray = [...clickedArray];
            newClickedArray[index] = !newClickedArray[index];
            setClickedArray(newClickedArray);
        } catch (error) {
            console.error("Błąd podczas wysyłania kliknięcia:", error);
        }
    };

    return (
        <div className="flex flex-wrap">
            {photos.map((photo, index) => (
                <div
                    key={photo.id}
                    className={`relative m-3 group transition-all h-56 w-56 duration-200 hover:scale-[1.015] hover:shadow-2xl cursor-pointer overflow-hidden rounded-md`}
                    onClick={() => handleClick(index, photo.id)}
                >
                    <Link
                        href={`/fotografia/fotografia-slubna/${photo.id}`}
                        key={photo.id}
                    >
                        <img
                            className="object-cover opacityAnimation h-full w-full"
                            src={photo.url}
                        />
                        <div className="opacity-0 group-hover:opacity-100 absolute h-full w-full top-0 left-0 bg-gradient-to-b to-black/50 via-transparent from-transparent transition-all duration-500 delay-100" />
                    </Link>

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className={`w-7 h-7 absolute bottom-2 right-2 group-hover:opacity-100 opacity-0 transition-all  ${
                            clickedArray[index]
                                ? "text-red-600 fill-red-600"
                                : "text-white"
                        }`}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                        />
                    </svg>
                </div>
            ))}
        </div>
    );
}
