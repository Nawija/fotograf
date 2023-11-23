const fetchDeleteDB = async (fetchDeleteUrl, fetchDeleteDate) => {
    const res = await fetch(`${fetchDeleteUrl}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ fetchDeleteDate }),
    });

    if (!res.ok) {
        console.error(`Failed DELETE ${fetchDeleteDate}`);
    }
};

export default fetchDeleteDB;