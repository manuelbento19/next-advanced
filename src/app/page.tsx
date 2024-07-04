import Link from "next/link";

export default function Page() {
  return (
    <main>
      <h1>
        Page Home
      </h1>
      <ul>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link href={"/docs"}>Docs</Link>
        </li>
        <li>
          <Link href={"/products"}>Products</Link>
        </li>
      </ul>
    </main>
  );
}
