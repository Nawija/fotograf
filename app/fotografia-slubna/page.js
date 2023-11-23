import { notFound } from "next/navigation";
import Photo from "./Photo";
import MenuBar from "./MenuBar";

import fetchPhotoDatoCms from "../../libs/fetchPhotoDatoCms";
import fetchLikesDB from "../../libs/fetchLikesDB"

const fetchUrl = "api/strefa-klienta";
const queryFetchDatoCms = 121212;
const FotografiaSlubna = await fetchPhotoDatoCms(queryFetchDatoCms);
const photos = FotografiaSlubna.data.allAa121223s[0].img;

export default async function Strefa() {
    const Likes = await fetchLikesDB(fetchUrl);

    if (!FotografiaSlubna) return notFound();

    return (
        <div className="flex flex-col items-start justify-center mt-3 mb-20 max-w-screen-2xl mx-auto relative">
            <MenuBar photos={photos} Likes={Likes} />
            <Photo photos={photos} Likes={Likes} />
        </div>
    );
}
