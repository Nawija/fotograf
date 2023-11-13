import { notFound } from "next/navigation";
import fetchPhotoDatoCms from "../../../lib/fetchPhotoDatoCms";
import Link from "next/link";

export default async function ReportazChrzestPage() {
    const datoCmsRes = await fetchPhotoDatoCms();
    if (!datoCmsRes) return notFound();

    const photos = datoCmsRes.data.reportazZChrztu.img;
    console.log(photos);
    const LinkMenu =
        "bg-gray-500/80 rounded-xl text-[12.5px] font-medium py-1.5 px-3 text-white hover:bg-gray-500 transition-colors";

    return (
        <div className="ml-3 mt-2 mb-20">
            <div className="text-end mr-3 lg:mr-24 space-x-3 mb-2">
                <button className={LinkMenu}>Pobierz</button>
            </div>
            <div className="flex flex-wrap">
                {photos.map((photo) => (
                    <Link
                        href={`/fotografia/fotografia-slubna/${photo.id}`}
                        className="relative m-3 group transition-all h-56 w-56 duration-200 hover:scale-[1.015] hover:shadow-2xl cursor-pointer overflow-hidden rounded-md"
                    >
                        <img
                            className="object-cover opacityAnimation h-full w-full"
                            key={photo.id}
                            src={photo.url}
                        />
                        <div className="opacity-0 group-hover:opacity-100 absolute h-full w-full top-0 left-0 bg-gradient-to-b to-black/50 via-transparent from-transparent transition-all duration-500 delay-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="2"
                                stroke="currentColor"
                                className="w-6 h-6 absolute bottom-2 right-2 text-white"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                                />
                            </svg>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
