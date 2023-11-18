"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
useRouter;

export default function MenuLeftBar({ likedPhotoIds, photoId, Likes }) {
    const router = useRouter();
    let [likedPhotos, setLikedPhotos] = useState([]);
    const [showCommentInput, setShowCommentInput] = useState(false);

    const toggleCommentInput = () => {
        setShowCommentInput(!showCommentInput);
    };

    const handleLike = async (photoId, photoUrl) => {
        const isLiked = likedPhotos.includes(photoId);
        if (isLiked) {
            const response = await fetch("/api/strefa-klienta", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ photoId, photoUrl }),
            });
            router.refresh();

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
                body: JSON.stringify({ photoId, photoUrl }),
            });
            router.refresh();

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

    useEffect(() => {
        if (Likes && Likes.Likes) {
            const likedPhotoIds = Likes.Likes.map((like) => like.photoId);
            setLikedPhotos(likedPhotoIds);
        }
    }, [Likes]);

    return (
        <div
            className={`flex items-start justify-start flex-col mt-12 text-start h-full pl-3 border-l-2 transition-all relative text-base space-y-4 w-52`}
        >
            <button
                onClick={() => handleLike(photoId)}
                className={`w-max border-2 border-white hover:bg-red-50 px-3 py-1.5  text-sm rounded-lg flex items-center justify-center font-medium cursor-pointer transition-colors ${
                    likedPhotoIds.includes(photoId) ? "bg-red-100 " : "bg-white"
                }`}
            >
                {likedPhotoIds.includes(photoId)
                    ? "Cofnij polubienie"
                    : "Polub zdjęcie"}

                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    className="w-5 h-4 ml-1 fill-red-600"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                </svg>
            </button>
            <p className="w-max border-2 border-white px-3 py-1.5 bg-white text-sm rounded-lg flex items-center justify-center font-medium cursor-pointer hover:bg-green-50 transition-colors">
                Udostepnij
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-4 ml-1"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                    />
                </svg>
            </p>
            <p className="w-max border-2 border-white px-3 py-1.5 bg-white text-sm rounded-lg flex items-center justify-center font-medium cursor-pointer hover:bg-green-50 transition-colors">
                Pobierz Zdjęcie
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-4 ml-1"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                    />
                </svg>
            </p>
            <button
                onClick={toggleCommentInput}
                className={`w-max border-2 border-white px-3 py-1.5  text-sm rounded-lg flex items-center justify-center font-medium cursor-pointer hover:bg-green-50 transition-colors ${
                    showCommentInput ? "bg-yellow-100" : "bg-white"
                }`}
            >
                Zostaw Komentarz
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-4 ml-1"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
                    />
                </svg>
            </button>
            <form
                className={`transition-all relative flex flex-col items-start ${
                    showCommentInput
                        ? "flex flex-col h-40 scale-100 "
                        : "h-0 scale-0"
                }`}
            >
                <textarea
                    type="textarea"
                    placeholder="Wpisz komentarz..."
                    className="h-32 mb-2 bg-yellow-100 border-2 p-1 border-white"
                />
                <button className="btn-main px-3 py-1">Zapisz</button>
            </form>
        </div>
    );
}
