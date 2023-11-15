import { notFound } from "next/navigation";
import fetchPhotoDatoCms from "../../../lib/fetchPhotoDatoCms";

import Photo from "./Photo"

export default async function ReportazChrzestPage({}) {
    const datoCmsRes = await fetchPhotoDatoCms();
    if (!datoCmsRes) return notFound();

    const photos = datoCmsRes.data.reportazZChrztu.img;
    const LinkMenu =
        "bg-gray-500/80 rounded-xl text-[12.5px] font-medium py-1.5 px-3 text-white hover:bg-gray-500 transition-colors";

    return (
        <div className="ml-3 mt-2 mb-20">
            <div className="text-end mr-3 lg:mr-24 space-x-3 mb-2">
                <button className={LinkMenu}>Pobierz</button>
            </div>
            <Photo photos={photos} />
        </div>
    );
}
