import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server'

export function GET(request: NextRequest) {
  const theme = request.cookies.get("theme");
  console.log(theme)
  console.log(cookies().get("time"));
  
  cookies().set("time",new Date().toISOString());

  return NextResponse.json({message: "See your cookie section and make request again"},{
    headers: {
      "Set-Cookie": "theme=dark"
    }
  })
}
