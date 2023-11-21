const fetchPhotoDatoCms = async (queryFetchDatoCms) => {
    const res = await fetch("https://graphql.datocms.com/", {
        next: { revalidate: 60 },
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
        },
        body: JSON.stringify({
            query: `{ ${queryFetchDatoCms} { img { id url } } }`,
        }),
    });
    return await res.json();
};

export default fetchPhotoDatoCms;
