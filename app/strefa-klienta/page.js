import fetchPhotoDatoCms from "../../libs/fetchPhotoDatoCms";
import fetchLikesDB from "../../libs/fetchLikesDB";

import Photo from "./Photo";
import PassForm from "./PassForm";
import Categories from "./Categories";

const handlePassGet = async () => {
    try {
        const res = await fetch(`${process.env.DOMAIN_URL}api/passData`, {
            method: "GET",
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed fetch pass DB");
        }
        let qfdc = await res.json();
        return qfdc.Passwords[0].fetchPostDate;
    } catch (error) {
        console.log("Error loading pass: ", error);
    }
};

export default async function FotografiaSlubna() {
    const fetchUrl = "api/strefa-klienta";

    const PassGet = await handlePassGet();
    const queryFetchDatoCms = PassGet;
    const FotografiaSlubna = await fetchPhotoDatoCms(queryFetchDatoCms);
    const Likes = await fetchLikesDB(fetchUrl);

    if (queryFetchDatoCms === undefined)
        return (
            <div className="lg:mt-12 flex items-center justify-center lg:h-[65vh] h-screen">
                <PassForm />
            </div>
        );
    if (PassGet && FotografiaSlubna.data.allAa121223s.length === 0)
        return (
            <div className="lg:mt-12 flex items-center justify-center lg:h-[65vh] h-screen bg-gradient-to-tr from-black to-gray-800 lg:bg-none">
                <PassForm msgError={"Błedne Hasło"} />
            </div>
        );

    if (PassGet && FotografiaSlubna.data.allAa121223s.length > 0)
        return (
            <div className="flex items-start justify-center max-w-screen-2xl mx-auto mb-20">
                <div>
                    <Categories />
                </div>
                <div className="pl-3 mt-12 border-l-2">
                    <Photo FotografiaSlubna={FotografiaSlubna} Likes={Likes} />
                </div>
            </div>
        );
}
