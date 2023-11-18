import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import Like from "../../../models/like";

export async function POST(request) {
    const { photoId } = await request.json();
    await connectMongoDB();
    await Like.create({ photoId });
    return NextResponse.json({ message: "Like dodany" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const Likes = await Like.find();
    return NextResponse.json({ Likes });
}

export async function DELETE(request) {
    const { photoId } = await request.json();
    await connectMongoDB();
    await Like.findOneAndDelete({ photoId }); // Corrected this line
    return NextResponse.json({ message: "Like usuniety" }, { status: 200 });
}
