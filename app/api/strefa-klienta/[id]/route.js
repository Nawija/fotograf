import connectMongoDB from "../../../../libs/mongodb";
import Like from "../../../../models/like";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const { newLike: like } = await request.json();
    await connectMongoDB();
    await Like.findByIdAndUpdate(id, { like });
    return NextResponse.json(
        { message: "Like zaktualizowany" },
        { status: 200 }
    );
}
