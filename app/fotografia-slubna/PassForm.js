"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function PassForm() {
    const router = useRouter();
    const [pass, setPass] = useState();

    const handlePassSend = async () => {
        const response = await fetch("/api/passFetchingData", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ pass }),
        });

        if (response.ok) {
            pass;
        } else {
            console.error("Failed pass to add POST");
        }
        router.refresh();
        setTimeout(() => {
            fetch("/api/passFetchingData", {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ pass }),
            });
        }, 1000);
    };

    const handleInputChange = (e) => {
        setPass(e.target.value);
    };

    return (
        <div className="ml-3 mt-12 text-center">
            <p className="text-lg font-medium mb-2">Wpisz Hasło:</p>
            <div className="flex items-center justify-center">
                <input
                    type="text"
                    className="py-1.5 rounded-l-lg pl-2 hover:bg-gray-50 focus:bg-gray-50 transition-colors"
                    value={pass}
                    onInput={handleInputChange}
                />
                <button
                    className="bg-gray-500 hover:bg-gray-700 transition-colors text-white uppercase text-[11px] font-medium py-2.5 px-3 rounded-r-lg"
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
