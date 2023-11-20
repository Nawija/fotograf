import connectMongoDB from "../../../../libs/mongodb";
import Com from "../../../../models/com";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
    const { id } = params;
    const { newCom: com } = await request.json();
    await connectMongoDB();
    await Com.findByIdAndUpdate(id, { com });
    return NextResponse.json(
        { message: "Com zaktualizowany" },
        { status: 200 }
    );
}
