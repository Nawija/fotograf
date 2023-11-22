const fetchLikesDB = async (fetchUrl) => {
    try {
        const res = await fetch(`${process.env.DOMAIN_URL}${fetchUrl}`, {
            method: "GET",
            cache: "no-store",
        });
        if (!res.ok) {
            throw new Error("Failed fetch likes DB");
        }
        return res.json();
    } catch (error) {
        console.log("Error loading Likes: ", error);
    }
};

export default fetchLikesDB;
