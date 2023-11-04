import { notFound } from "next/navigation";

const fetchTodo = async () => {
    const res = await fetch("https://graphql.datocms.com/", {
        next: { revalidate: 60 },
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
        },
        body: JSON.stringify({
            query: "{ allReportazZChrztus { img { id url } } }",
        }),
    });
    const datocms = await res.json();
    return datocms;
};

export default async function ReportazChrzestPage() {
    const datocmsResponse = await fetchTodo();

    if (!datocmsResponse) return notFound();

    const photos = datocmsResponse.data.allReportazZChrztus;

    const handleImageClick = (photoUrl) => {
        const modal = document.getElementById("modal");
        const modalImage = document.getElementById("modal-image");
        modalImage.src = photoUrl;
        modal.classList.remove("hidden");
    };

    const closeModal = () => {
        const modal = document.getElementById("modal");
        modal.classList.add("hidden");
    };

    return (
        <div className="flex flex-wrap ml-3 mt-4">
            <div
                id="modal"
                className="hidden fixed top-0 left-0 w-full h-full items-center justify-center bg-gray-900 bg-opacity-75 z-50"
                onClick={closeModal}
            >
                <img
                    id="modal-image"
                    className="max-h-full max-w-full"
                    src=""
                    alt="Powiększone zdjęcie"
                    onClick={(e) => e.stopPropagation()}
                />
            </div>

            {photos.map((photoCollection) =>
                photoCollection.img.map((photo) => (
                    <img
                        className="p-1 object-cover h-72 opacityAnimation cursor-pointer"
                        height={250}
                        width={260}
                        key={photo.id}
                        src={photo.url}
                        onClick={handleImageClick(photo.url)}
                    />
                ))
            )}
        </div>
    );
}
