const fetchDeleteDB = async (fetchDeleteUrl, fetchPostDate) => {
    const res = await fetch(`${fetchDeleteUrl}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ fetchPostDate }),
    });

    if (!res.ok) {
        console.error(`Failed DELETE ${fetchPostDate}`);
    }
};

export default fetchDeleteDB;