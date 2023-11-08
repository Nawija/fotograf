import { notFound } from "next/navigation";
import Action from "./action";

export default async function XX({ photos }) {
    const res = await fetch("https://graphql.datocms.com/", {
        next: { tags: ["collection"] },
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
    const datoCmsRes = await res.json();
    if (!datoCmsRes) return notFound();
    photos = datoCmsRes.data.allReportazZChrztus;
    
    return <Action photos={photos} />;
}
