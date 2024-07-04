import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Products"
}

export default function Page() {
    return (
      <main>
        <h1>
          Page Products
        </h1>
        <ul>
          <li>
            <Link href={"/products/1"}>Product 1</Link>
          </li>
          <li>
            <Link href={"/products/2"}>Product 2</Link>
          </li>
          <li>
            <Link href={"/products/3"} replace>Product 3</Link>
          </li>
          <li>
            <Link href={"/products/100"}>Product 100</Link>
          </li>
        </ul>
      </main>
    );
}
