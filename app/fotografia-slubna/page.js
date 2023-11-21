import { notFound } from "next/navigation";
import fetchPhotoDatoCms from "../../libs/fetchPhotoDatoCms";

import Photo from "./Photo";

export default async function FotografiaSlubna({ reportazZChrztu }) {
    const FotografiaSlubna = await fetchPhotoDatoCms(reportazZChrztu);
    console.log(FotografiaSlubna);
    if (!FotografiaSlubna) return notFound();

    const photos = FotografiaSlubna.data.reportazZChrztu.img;

    return (
        <div className="ml-3 mt-12">
            {" "}
            <Photo photos={photos} />{" "}
        </div>
    );
}
