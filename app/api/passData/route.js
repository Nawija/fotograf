import { NextResponse } from "next/server";
import connectMongoDB from "../../../libs/mongodb";
import Password from "../../../models/password";

export async function POST(request) {
    const { fetchPostDate } = await request.json();
    await connectMongoDB();
    await Password.create({ fetchPostDate });
    return NextResponse.json({ message: "Pass dodany" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const Passwords = await Password.find();
    return NextResponse.json({ Passwords });
}

export async function DELETE(request) {
    const { fetchPostDate } = await request.json();
    await connectMongoDB();
    await Password.findOneAndDelete({ fetchPostDate });
    return NextResponse.json({ message: "Pass usuniety" }, { status: 200 });
}

// export async function PUT(request, { params }) {
//     const { id } = params;
//     const { newLike: like } = await request.json();
//     await connectMongoDB();
//     await Like.findByIdAndUpdate(id, { like });
//     return NextResponse.json(
//         { message: "Like zaktualizowany" },
//         { status: 200 }
//     );
// }
