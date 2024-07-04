"use client"
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();

    const orderProduct = () => {
        console.log("Placing your order")
        router.push("/");
    }

    return (
      <main>
        <h1>
          Order Product
        </h1>
        <button className="border p-1 rounded text-sm" onClick={orderProduct}>Place order</button>
      </main>
    );
}
