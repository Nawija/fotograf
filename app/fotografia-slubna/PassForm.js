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
            <input
                type="text"
                className="py-1.5 rounded-l-lg"
                value={pass}
                onInput={handleInputChange}
            />
            <button
                className="bg-gray-700 text-white py-1.5 px-3 rounded-r-lg"
                onClick={handlePassSend}
            >
                Send
            </button>
        </div>
    );
}
