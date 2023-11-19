import connectMongoDB from "../../../../libs/mongodb";
import Com from "../../../../models/com";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
    const { id } = params;
    const { com } = await request.json();
    await connectMongoDB();
    await Com.findByIdAndDelete(id, { com });
    return NextResponse.json(
        { message: "Com zaktualizowany" },
        { status: 200 }
    );
}
