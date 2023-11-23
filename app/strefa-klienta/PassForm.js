"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import fetchPostDB from "../../libs/mongoDB/fetchPostDB";
import fetchDeleteDB from "../../libs/mongoDB/fetchDeleteDB";

export default function PassForm({ msgError }) {
    const [pass, setPass] = useState();
    const router = useRouter();

    const fetchPostUrl = "/api/passData";
    const fetchPostDate = pass;
    const fetchDeleteUrl = "/api/passData";
    // const fetchDeleteDate = pass;

    const handlePassSend = async () => {
        fetchPostDB(fetchPostUrl, fetchPostDate);
        router.refresh();
        setTimeout(() => {
            fetchDeleteDB(fetchDeleteUrl, fetchPostDate);
        }, 2000);
    };

    const handleInputChange = (e) => {
        setPass(e.target.value);
    };

    return (
        <div className="text-center relative">
            <p className="text-lg font-medium mb-2 text-gray-800">
                Wpisz Hasło:
            </p>
            <div className="flex items-center justify-center shadow-xl">
            <p className="text-red-600 text-sm opacityAnimation">{msgError}</p>
                <input
                    type="text"
                    className="py-1.5 rounded-l-lg pl-2 hover:bg-gray-50 focus:bg-gray-50 transition-colors border"
                    inputmode="numeric"
                    value={pass}
                    onInput={handleInputChange}
                />
                <button
                title="Wyślij"
                    className="bg-gray-500 hover:bg-gray-700 transition-colors text-white uppercase text-[11px] font-medium py-3 px-3 rounded-r-lg"
                    onClick={handlePassSend}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-4 h-4 fill-white"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
