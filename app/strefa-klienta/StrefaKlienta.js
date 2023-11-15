"use client";
import { useEffect, useState } from "react";
import { fetchZdjecia } from "../../lib/datoCMS";

const StrefaKlienta = ({ reportazZChrztu }) => {
    const [zdjecia, setZdjecia] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchZdjecia(reportazZChrztu);
                setZdjecia(data.reportazZChrztu.img);
            } catch (error) {
                console.error("Error fetching data from datoCMS", error);
            }
        };

        if (reportazZChrztu) {
            fetchData();
        }
    }, [reportazZChrztu]);
    return (
        <div>
            {zdjecia.map((zdjecie) => (
                <img
                    key={zdjecie.id}
                    src={zdjecie.url}
                    alt={`Zdjęcie ${zdjecie.id}`}
                />
            ))}
        </div>
    );
};

export default StrefaKlienta;
