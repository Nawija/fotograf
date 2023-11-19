import connectMongoDB from "../../../../libs/mongodb";
import Com from "../../../../models/com";
import { NextResponse } from "next/server";

export async function DELETE(request, { params }) {
    const { id } = params;
    const { coms } = await request.json();
    await connectMongoDB();
    await Com.findByIdAndDelete(id, { coms });
    return NextResponse.json(
        { message: "Com zaktualizowany" },
        { status: 200 }
    );
}
