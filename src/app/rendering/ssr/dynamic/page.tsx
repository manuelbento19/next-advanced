import { cookies } from 'next/headers'
import React from 'react'

export default function Page() {
  const _cookies = cookies();
  const theme = _cookies.get("theme");

  console.log(theme);
  return (
    <div>
      Server Rendering Strategies - Dynamic
      <p>{new Date().toLocaleString()}</p>
    </div>
  )
}
