import { comments } from "@/constants";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const userId = searchParams.get("user_id");
    if(userId)
    return NextResponse.json(comments.filter(item=>item.user_id==Number(userId)));
    return NextResponse.json(comments);
}

export async function POST(request: NextRequest) {
    const data = await request.json();
    comments.push(data);
    return NextResponse.json(comments)
}