import clientPromise from "../../lib/ddb";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("nextjs-mongodb");
    switch (req.method) {
        case "POST":
            let bodyObject = JSON.parse(req.body);
            let myPost = await db.collection("post").insertOne(bodyObject);
            res.json(myPost.ops[0]);
            break;
        case "GET":
            const allPost = await db.collection("allPost").find({}).toArray();
            res.json({ status: 200, data: allPost });
            break;
    }
}

export async function getServerSideProps(context) {
    let res = await fetch("http://localhost:3000/api/strefa-klienta", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    let allPost = await res.json();

    return {
        props: { allPost },
    };
}
