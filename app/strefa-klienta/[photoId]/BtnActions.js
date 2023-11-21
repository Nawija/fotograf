"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function BtnActions({
    likedPhotoIds,
    photoId,
    Likes,
    Desc,
    photos,
    photoIndex,
}) {
    const router = useRouter();
    let [likedPhotos, setLikedPhotos] = useState([]);
    const [showCommentInput, setShowCommentInput] = useState(false);
    const [showShareMenu, setShowShareMenu] = useState(false);
    const [commentText, setCommentText] = useState("");
    const [comments, setComments] = useState(Desc.Coms || []);

    const toggleCommentInput = () => {
        setShowCommentInput(!showCommentInput);
    };
    const toggleShowShareMenu = () => {
        setShowShareMenu(!showShareMenu);
    };

    const handleClick = (platform) => {
        let shareUrl = "";
        switch (platform) {
            case "facebook":
                shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    window.location.href
                )}`;
                break;
            case "twitter":
                shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    window.location.href
                )}`;
                break;
            default:
                break;
        }
        window.open(shareUrl, "_blank");
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

            if (response.ok) {
                setLikedPhotos((prevLikedPhotos) => [
                    ...prevLikedPhotos,
                    photoId,
                ]);
                router.refresh();
            } else {
                console.error("Failed to add like");
            }
        }
    };

    const handleCom = async () => {
        const response = await fetch("/api/fotografia-slubna", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ desc: commentText }),
        });

        if (response.ok) {
            const newComment = await response.json();
            setComments([...comments, newComment]);
            console.log("Comment added successfully");
            router.refresh();
        } else {
            console.error("Failed to add like");
        }
    };
    const handleComDelete = async (commentId) => {
        console.log("Deleting comment with ID:", commentId);

        const response = await fetch(`/api/fotografia-slubna/${commentId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });

        console.log("Response:", response);

        if (response.ok) {
            setComments(
                comments.filter((comment) => comment._id !== commentId)
            );
            console.log("Comment deleted successfully");
        } else {
            console.error("Failed to delete comment");
        }
    };

    useEffect(() => {
        if (Likes && Likes.Likes) {
            const likedPhotoIds = Likes.Likes.map((like) => like.photoId);
            setLikedPhotos(likedPhotoIds);
        }
    }, [Likes]);

    const xxx = [photos[photoIndex]];
    return (
        <div
            className={`flex items-start justify-center flex-col mt-4 text-center w-full h-full pl-3 relative text-base space-x-4 bg-white`}
        >
            <div className="flex items-center justify-start w-full border-b-2 pb-4">
                <button
                    onClick={() => handleLike(photoId)}
                    className={`w-max border-2 border-white hover:bg-red-50 px-3 py-1.5  text-sm rounded-lg flex items-center justify-center font-medium cursor-pointer transition-colors ${
                        likedPhotoIds.includes(photoId)
                            ? "bg-red-100 "
                            : "bg-white"
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
                <button
                    onClick={toggleShowShareMenu}
                    className="w-max border-2 border-white px-3 py-1.5 bg-white text-sm rounded-lg flex items-center justify-center font-medium cursor-pointer hover:bg-sky-50 transition-colors"
                >
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
                </button>
                <div
                    className={`flex flex-col items-start justify-center pl-3 transition-all ${
                        showShareMenu
                            ? "flex flex-col h-20 w-32 scale-100"
                            : "h-0 w-0 scale-0"
                    }`}
                >
                    <button
                        onClick={() => handleClick("facebook")}
                        className="px-2 py-0.5 bg-blue-500 text-white rounded-lg text-sm"
                    >
                        Facebook
                    </button>
                    <button
                        onClick={() => handleClick("twitter")}
                        className="px-2 py-0.5 bg-black text-white rounded-lg text-sm mt-3"
                    >
                        Twitter "X"
                    </button>
                </div>
                <Link
                    href={`/api/pobierz-zdjecie/?images=${encodeURIComponent(
                        JSON.stringify(xxx)
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-max border-2 border-white px-3 py-1.5 bg-white text-sm rounded-lg flex items-center justify-center font-medium cursor-pointer hover:bg-green-50 transition-colors"
                >
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
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                        />
                    </svg>
                </Link>
            </div>
            <div className="w-full flex items-start justify-center flex-col">
                <p
                    onClick={toggleCommentInput}
                    className="w-max border-2 border-white text-xl flex items-center justify-center py-2"
                >
                    Zostaw komentarz
                </p>
                <form className="transition-all relative flex flex-col items-start border-b-2 pb-4 w-full">
                    <textarea
                        type="textarea"
                        placeholder="Wpisz komentarz..."
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        className="h-32 w-full lg:w-1/2 mb-2 border p-1"
                    />
                    <button onClick={handleCom} className="btn-main px-3 py-1">
                        Zapisz
                    </button>
                </form>
                {comments.map((d) => (
                    <div
                        key={d._id}
                        className="relative group mx-3 my-2 lg:m-2 bg-yellow-100 px-5 py-3 shadow-xl"
                    >
                        <button
                            onClick={() => handleComDelete(d._id)}
                            className="bg-gradient-to-tr from-red-500 to-red-300 text-white group-hover:flex hidden opacity-0 group-hover:opacity-100 rounded-full px-2 absolute -top-2 -right-2"
                        >
                            x
                        </button>
                        <p>{d.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
