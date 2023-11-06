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

    const LinkMenu =
        "bg-gray-500/80 rounded-xl text-[12.5px] font-medium py-1.5 px-3 text-white hover:bg-gray-500 transition-colors";

    return (
        <div className="ml-3 mt-3">
            <div className="text-end mr-12 space-x-3 mb-2">
                <button className={LinkMenu}>Pobierz</button>
                <button className={LinkMenu}>Pobierz Tylko Ulubione</button>
            </div>
            <div className="flex flex-wrap ">
                {photos.map((photoCollection) =>
                    photoCollection.img.map((photo) => (
                        <div className="relative m-3 group transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl cursor-pointer overflow-hidden rounded-md">
                            <img
                                className="object-cover h-72 opacityAnimation"
                                width={230}
                                key={photo.id}
                                src={photo.url}
                            />
                            <div className="opacity-0 group-hover:opacity-100 absolute h-full w-full top-0 left-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-all duration-500 delay-100">
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
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
