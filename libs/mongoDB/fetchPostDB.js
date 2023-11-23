const fetchPostDB = async (fetchPostUrl, fetchPostDate) => {
    const res = await fetch(`${fetchPostUrl}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ fetchPostDate }),
    });

    if (!res.ok) {
        console.error(`Failed POST ${fetchPostDate}`);
    }
};

export default fetchPostDB;
