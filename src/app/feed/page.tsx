import Link from "next/link";

export default function Page(){
    return(
        <main>
            <h1 className="font-bold text-3xl">Feed Section</h1>
            <section>
                <Link href={"/feed/login"} className="text-blue-700">Login to see feed 1</Link>
            </section>
        </main>
    )
}