import { DynamicComponent } from '@/components/dynamic'
import { StaticComponent } from '@/components/static'
import React, { Suspense } from 'react'

export const experimental_ppr = true

export default function Page() {
  return (
    <div>
        <StaticComponent />
        <Suspense fallback={<h1>waiting...</h1>}>
            <DynamicComponent/>
        </Suspense>
    </div>
  )
}
