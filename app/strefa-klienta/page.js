import { notFound } from "next/navigation";
import Z from "./Z";

const fetchPhotoDatoCms = async () => {
    const res = await fetch("https://graphql.datocms.com/", {
        next: { revalidate: 60 },
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
        },
        body: JSON.stringify({
            query: "{ reportazZChrztu { img { id url } } }",
        }),
    });
    const FotografiaSlubna = await res.json();
    return FotografiaSlubna;
};

const fetchLikesDB = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/strefa-klienta", {
            method: "GET",
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed fetch likes DB");
        }
        return res.json();
    } catch (error) {
        console.log("Error loading Likes: ", error);
    }
};

export default async function Strefa() {
    const Likes = await fetchLikesDB();
    const FotografiaSlubna = await fetchPhotoDatoCms();
    if (!FotografiaSlubna) return notFound();
    const photos = FotografiaSlubna.data.reportazZChrztu.img;

    return (
        <div className="lg:ml-3 mt-12 mb-20">
            <Z photos={photos} Likes={Likes} />
        </div>
    );
}
