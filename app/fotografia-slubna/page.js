import { notFound } from "next/navigation";
import fetchPhotoDatoCms from "../../libs/fetchPhotoDatoCms";

import Photo from "./Photo";

export default async function FotografiaSlubna() {
    const FotografiaSlubna = await fetchPhotoDatoCms();
    if (!FotografiaSlubna) return notFound();

    const photos = FotografiaSlubna.data.reportazZChrztu.img;

    return (
        <div className="ml-3 mt-12 mb-20">
            <Photo photos={photos} />
        </div>
    );
}
