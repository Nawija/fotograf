"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function PhotoId({
    photos,
    nextPhotoId,
    prevPhotoId,
    photoIndex,
}) {
    const router = useRouter();

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === "ArrowLeft") {
                router.push(`/strefa-klienta/${nextPhotoId}`);
            } else if (e.key === "ArrowRight") {
                router.push(`/strefa-klienta/${prevPhotoId}`);
            }
        };

        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [router, prevPhotoId, nextPhotoId]);

    const arrowBtn =
        "p-2 border font-semibold rounded-lg bg-gray-100 text-gray-900 absolute top-[80%] lg:top-1/2 hover:bg-white hover:text-red-600 transition-colors";

    return (
        <div className="flex items-start justify-center w-full mt-4 lg:mt-0">
            <div
                className={`p-1 flex items-center justify-center text-center mx-auto top-0 left-0 h-full w-full relative`}
            >
                <Link
                    href={`/strefa-klienta/${nextPhotoId}`}
                    className={`${arrowBtn} lg:left-2 left-0`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                        />
                    </svg>
                </Link>
                <div
                    className="w-full min-h-[55vh] max-h-[55vh] lg:min-h-[83vh] lg:max-h-[83vh] relative flex items-center justify-center overflow-hidden -z-10 object-fill"
                >
                    <img
                        className="w-full lg:w-auto h-auto object-fill"
                        src={photos[photoIndex].url}
                        alt="photo"
                    />
                </div>
                <Link
                    href={`/strefa-klienta/${prevPhotoId}`}
                    className={`${arrowBtn} lg:right-2 right-0`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    );
}
