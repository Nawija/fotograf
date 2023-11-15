"use client";

import { useState } from "react";
import StrefaKlienta from "./StrefaKlienta";

const StrefaKlientaPage = () => {
    const [reportazZChrztu, setReportazZChrztu] = useState("");

    const handleSubmit = () => {
        console.log("Fetching data for:", reportazZChrztu);
    };

    return (
        <div className="flex items-center justify-center flex-col h-[70vh] space-y-4">
            <h1 className="text-xl">Strefa Klienta</h1>
            <input
                className="rounded-xl text-black pl-2"
                type="text"
                value={reportazZChrztu}
                onChange={(e) => setReportazZChrztu(e.target.value)}
            />
            <button className="btn-main py-2 px-4" onClick={handleSubmit}>
                Enter
            </button>
            <StrefaKlienta reportazZChrztu={reportazZChrztu} />
        </div>
    );
};

export default StrefaKlientaPage;
