import { notFound } from "next/navigation";
import { useEffect, useState } from "react";

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
    const [results, setResults] = useState([]);
    const controller = new AbortController();

    useEffect(() => {
        async function getData() {
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
        }
    });

    return <>xxxx</>;
}
