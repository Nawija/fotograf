import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import Com from "../../../models/com";

export async function POST(request) {
    const { commentId, desc } = await request.json();
    await connectMongoDB();
    await Com.create({ commentId, desc });
    return NextResponse.json({ message: "Desc dodany" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const Coms = await Com.find();
    return NextResponse.json({ Coms });
}

export async function DELETE(request) {
    const { commentId, desc } = await request.json();
    await connectMongoDB();
    await Com.deleteMany({ commentId, desc });
    return NextResponse.json({ message: "Desc usuniety" }, { status: 200 });
}
