import React,{Suspense} from 'react'
import { MiniComponent } from './miniComponent';

export default async function Page() {

  return (
    <div>
      Server Rendering Strategies - Streaming
      <Suspense fallback={<h1>Waiting...</h1>}>
        <MiniComponent/>
      </Suspense>
    </div>
  )
}
