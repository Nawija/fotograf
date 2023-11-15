"use client";
import { useState, useEffect } from "react";

export default function MenuLeftBar() {
    const [fixedPosition, setFixedPosition] = useState(null);

    const addFixedPosition = () => {
        if (window.scrollY >= 20) {
            setFixedPosition(true);
        } else {
            setFixedPosition(false);
        }
    };

    useEffect(() => {
        addFixedPosition();
        window.addEventListener("scroll", addFixedPosition);
    });
    return (
        <div
            className={`flex items-start justify-start flex-col mt-12 text-start h-full pl-3 border-l-2 transition-all relative text-base space-y-4 ${
                fixedPosition ? "sticky top-24" : ""
            }`}
        >
            <p className="w-max border-2 border-white px-3 py-1.5 bg-white text-sm rounded-lg flex items-center justify-center font-medium cursor-pointer hover:bg-red-50 transition-colors">
                Polub Zdjęcie
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
            </p>
            <p className="w-max border-2 border-white px-3 py-1.5 bg-white text-sm rounded-lg flex items-center justify-center font-medium cursor-pointer hover:bg-green-50 transition-colors">
                Pobierz
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
                Komentarz
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
                        d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                    />
                </svg>
            </p>
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
        </div>
    );
}
