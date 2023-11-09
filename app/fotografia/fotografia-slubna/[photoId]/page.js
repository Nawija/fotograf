import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export const dynamicParams = true;

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
    const datoCms = await res.json();
    return datoCms;
};

export default async function PhotoPage({ showMenu, params: { photoId } }) {
    const datoCms = await fetchPhotoDatoCms(photoId);
    const photos = datoCms.data.reportazZChrztu.img;
    console.log(datoCms.data.reportazZChrztu);
    const photoIndex = photos.findIndex((photo) => photo.id === photoId);

    if (photoIndex === -1) {
        return notFound();
    }
    const nextPhotoIndex = (photoIndex - 1 + photos.length) % photos.length;
    const prevPhotoIndex = (photoIndex + 1) % photos.length;
    const nextPhotoId = photos[nextPhotoIndex].id;
    const prevPhotoId = photos[prevPhotoIndex].id;

    const arrowBtn =
        "p-2 border font-semibold rounded-lg bg-gray-800 text-white absolute top-1/2";

    return (
        <div className="flex items-start justify-center">
            <div
                className={`p-2 flex items-center justify-center top-0 left-0 h-[90vh] relative ${
                    showMenu ? "bg-red-500" : ""
                }`}
            >
                <Link
                    href={`/fotografia/fotografia-slubna/${nextPhotoId}`}
                    className={`${arrowBtn} lg:left-2 left-0`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
                        />
                    </svg>
                </Link>
                <div className="w-full h-[80vh] relative">
                    <img
                        className="w-auto h-full object-fill"
                        src={photos[photoIndex].url}
                        alt={photoId}
                    />
                </div>
                <Link
                    href={`/fotografia/fotografia-slubna/${prevPhotoId}`}
                    className={`${arrowBtn} lg:right-2 right-0`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                        />
                    </svg>
                </Link>
            </div>
            <div className="p-10 flex items-center justify-end w-52 bg-white">
                <p>Polobione</p>
            </div>
        </div>
    );
}
