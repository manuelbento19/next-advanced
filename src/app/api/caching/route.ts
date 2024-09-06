import { headers } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server'

export function GET(request: NextRequest) {
  const requestHeader = new Headers(request.headers);
  const headerList = headers()
  console.log(requestHeader.get("Authorization"))
  console.log(headerList.get("Content-Type"))

  return NextResponse.json({
    message: "See the console"
  })
}
