import fetchPhotoDatoCms from "../../libs/fetchPhotoDatoCms";
import Photo from "./Photo";

export default async function FotografiaSlubna() {
    let queryFetchDatoCms = "";

    const handleButtonClick = async () => {
        const FotografiaSlubna = await fetchPhotoDatoCms(queryFetchDatoCms);

        if (!FotografiaSlubna.data) {
            return (
                <div className="ml-3 mt-12">
                    <input
                        type="text"
                        onChange={(e) => queryFetchDatoCms(e.target.value)}
                    />
                    <button onClick={handleButtonClick}>Fetch Data</button>
                </div>
            );
        }

        const photos = FotografiaSlubna.data.reportazZChrztu.img;

        return (
            <div className="ml-3 mt-12">
                <Photo photos={photos} />
            </div>
        );
    };

    return handleButtonClick();
}
