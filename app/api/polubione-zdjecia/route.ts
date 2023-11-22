import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import Like from "../../../models/like";

export async function POST(request) {
    const { photoId, url } = await request.json();
    await connectMongoDB();
    await Like.create({ photoId, url });
    return NextResponse.json({ message: "Like dodany" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const Likes = await Like.find();
    return NextResponse.json({ Likes });
}