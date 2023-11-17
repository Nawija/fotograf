import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import Like from "../../../models/like";

export async function POST(request) {
    const { like } = await request.json();
    await connectMongoDB();
    await Like.create({ like });
    return NextResponse.json({ message: "Like dodany" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const Likes = await Like.find();
    return NextResponse.json({ Likes });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Like.findByIdAndDelete(id);
    return NextResponse.json({ message: " Like usuniety" }, { status: 200 });
}
