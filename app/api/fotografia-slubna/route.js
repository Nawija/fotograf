import { connectToDatabase } from "../fotografia-slubna/route";

export default async function handler(req, res) {
    if (req.method === "POST") {
        try {
            const { newClickedArray } = req.body;

            const db = await connectToDatabase();
            const collection = db.collection("your-collection-name");

            await collection.insertOne({ clickedArray: newClickedArray });

            return res.status(200).json({ msg: "Data added to MongoDB" });
        } catch (error) {
            console.error("Error adding data to MongoDB:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    } else {
        return res.status(405).json({ error: "Method Not Allowed" });
    }
}
