import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest){
    const response = NextResponse.next();

    const themePreference = request.cookies.get("theme");
    if(!themePreference){
        response.cookies.set("theme","light")
    }

    response.headers.set("Custom-Header","Manuel Dev");

    return response;
}

