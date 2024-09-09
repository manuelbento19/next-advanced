import React from 'react'

export async function MiniComponent() {
    await new Promise(resolve=>setTimeout(resolve,3000));
    return <div>MiniComponent</div>
}
