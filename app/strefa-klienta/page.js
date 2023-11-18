import { notFound } from "next/navigation";
import Photo from "./Photo";
import MenuBar from "./MenuBar";

const fetchLikesDB = async () => {
    try {
        const res = await fetch(
            "https://x1-git-main-nawija.vercel.app/api/strefa-klienta",
            {
                method: "GET",
                cache: "no-store",
            }
        );
        if (!res.ok) {
            throw new Error("Failed fetch likes DB");
        }
        return res.json();
    } catch (error) {
        console.log("Error loading Likes: ", error);
    }
};

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

export default async function Strefa() {
    const Likes = await fetchLikesDB();
    const FotografiaSlubna = await fetchPhotoDatoCms();
    if (!FotografiaSlubna) return notFound();
    const photos = FotografiaSlubna.data.reportazZChrztu.img;

    return (
        <div className="flex items-start justify-center mx-auto text-center lg:ml-3 mt-6 mb-20">
            <Photo photos={photos} Likes={Likes} />
            <MenuBar />
        </div>
    );
}
