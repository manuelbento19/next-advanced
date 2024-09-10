export async function DynamicComponent() {
    await new Promise((resolve)=>setTimeout(resolve,3000));
    return(
        <div className="border p-3 size-full bg-white">
            I am dynamic component
        </div>
    )
}