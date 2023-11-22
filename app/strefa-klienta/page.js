import fetchPhotoDatoCms from "../../libs/fetchPhotoDatoCms";

import Photo from "./Photo";
import PassForm from "./PassForm";

const handlePassGet = async () => {
    try {
        const res = await fetch(
            `${process.env.DOMAIN_URL}api/passFetchingData`,
            {
                method: "GET",
                cache: "no-store",
            }
        );
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
    if (queryFetchDatoCms === undefined)
        return (
            <div className="lg:mt-12 flex items-center justify-center lg:h-[65vh] h-screen bg-gradient-to-tr from-black to-gray-800 lg:bg-none">
                <PassForm />
            </div>
        );
    if (PassGet && FotografiaSlubna.data.allAa121223s.length === 0)
        return (
            <div className="lg:mt-12 flex items-center justify-center lg:h-[65vh] h-screen bg-gradient-to-tr from-black to-gray-800 lg:bg-none">
                <PassForm msgError={"Błedne Hasło"} />
            </div>
        );

    let photos = FotografiaSlubna.data.allAa121223s[0].img;

    return (
        <div className="ml-3 mt-12">
            <Photo photos={photos} />
        </div>
    );
}
