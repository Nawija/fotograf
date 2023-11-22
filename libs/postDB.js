const postDB = async (fetchUrl, fetchDate) => {
    const response = await fetch(`${fetchUrl}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ fetchDate }),
    });

    if (response.ok) {
        fetchDate;
        console.log(fetchDate);
    } else {
        console.error(`Failed ${fetchDate} to add POST`);
    }
};

export default postDB;
