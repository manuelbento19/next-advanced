import { comments } from "@/constants";
import { NextRequest, NextResponse } from "next/server";

type Props = {
    params:{
        id:string
    }
}

export async function GET(_request: NextRequest,{params}:Props) {
    const comment = comments.find(item=>item.id==params.id)
    if(comment)
    return NextResponse.json(comment);
    return NextResponse.json({error: "Comment not found"},{
        status: 404
    });
}

export async function PUT(request: NextRequest,{params}:Props) {
    const indexOfComment = comments.findIndex(item=>item.id==params.id);
    if(indexOfComment==-1)
    return NextResponse.json({error: "Comment doesn't exists"},{
        status: 400
    });
    const body = await request.json();
    comments[indexOfComment] = {...comments[indexOfComment],message: body.message};
    return NextResponse.json(comments)
}

export async function DELETE(_request: NextRequest,{params}:Props) {
    const indexOfComment = comments.findIndex(item=>item.id==params.id);
    if(indexOfComment==-1)
    return NextResponse.json({error: "Comment doesn't exists"},{
        status: 400
    });
    comments.splice(indexOfComment,1);
    return NextResponse.json(comments)
}