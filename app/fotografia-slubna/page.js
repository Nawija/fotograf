import fetchPhotoDatoCms from "../../libs/fetchPhotoDatoCms";

import Photo from "./Photo";
import PassForm from "./PassForm";

const handlePassGet = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/passFetchingData", {
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

    if (!FotografiaSlubna.data)
        return (
            <div className="ml-3 mt-12 flex items-center justify-center h-full">
                <PassForm />
            </div>
        );
    // reportazZChrztu
    let photos = FotografiaSlubna.data[queryFetchDatoCms].img;

    return (
        <div className="ml-3 mt-12">
            <Photo photos={photos} />
        </div>
    );
}
