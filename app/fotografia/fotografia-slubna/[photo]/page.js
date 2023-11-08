import { notFound } from "next/navigation";
import fetchPhotoDatoCms from "../../../../lib/fetchPhotoDatoCms";
import Link from "next/link";

export default async function ReportazChrzestPage(photo) {
    const datoCmsRes = await fetchPhotoDatoCms(photo);
    if (!datoCmsRes) return notFound();

    const photos = datoCmsRes.data.allReportazZChrztus;

    const selectedPhoto = photos.find((photoCollection) =>
        photoCollection.img.some((photo) => photo.id === photo.id)
    );

    if (!selectedPhoto) {
        return notFound();
    }

    const selectedPhotoUrl = selectedPhoto.img[2].url;

    return (
        <div className="ml-3 mt-3">
            <div className="flex items-center justify-center">
                <div className="flex p-10 items-center justify-center fixed top-0 left-0 w-screen h-screen z-50">
                <div className="bg-gray-900/80 w-full h-full absolute -z-10 backdrop-blur-sm" />
                    <Link href={`/fotografia/fotografia-slubna/` + selectedPhoto.img[0].id} className="px-3 py-1.5 bg-black text-white font-semibold w-max h-max m-2 rounded-full">a</Link>
                    <img
                        className="object-cover opacityAnimation"
                        key={selectedPhoto.img.id}
                        src={selectedPhotoUrl}
                    />
                    <Link href={`/fotografia/fotografia-slubna/` + selectedPhoto.img[0].id} className="px-3 py-1.5 bg-black text-white font-semibold w-max h-max m-2 rounded-full">e</Link>
                </div>
            </div>
        </div>
    );
}
