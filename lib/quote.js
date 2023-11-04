import { useEffect, useState } from "react";

export function useDatoCMSData() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://graphql.datocms.com/", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
                    },
                    body: JSON.stringify({
                        query: `{
                allReportazZChrztus {
                img {
                  id
                  url
                }
              }
            }`,
                    }),
                });

                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }

                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    return { data, loading };
}
