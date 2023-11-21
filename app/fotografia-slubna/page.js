import fetchPhotoDatoCms from "../../libs/fetchPhotoDatoCms";

import Photo from "./Photo";
import PassForm from "./PassForm";

const handlePassGet = async () => {
    try {
        const res = await fetch("https://x1-git-main-nawija.vercel.app/api/passFetchingData", {
            method: "GET",
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed fetch pass DB");
        }
        let qfdc = await res.json();
        return qfdc.Passwords[0].pass;
    } catch (error) {
        console.log("Error loading pass: ", error);
    }
};

export default async function FotografiaSlubna() {
    const PassGet = await handlePassGet();
    const queryFetchDatoCms = PassGet;

    const FotografiaSlubna = await fetchPhotoDatoCms(queryFetchDatoCms);

    if (!PassGet)
        return (
            <div className="ml-3 mt-12 flex items-center justify-center h-full">
                <PassForm />
            </div>
        );
    let photos = FotografiaSlubna.data.allAa121223s[0].img;

    return (
        <div className="ml-3 mt-12">
            <Photo photos={photos} />
        </div>
    );
}
