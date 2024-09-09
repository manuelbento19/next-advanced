import { Metadata } from "next";
import { BlogCard } from "./_components";

export function generateMetadata(): Metadata {
  return {
    title: "Docs"
  }
}

export default function Page() {
    return (
      <main>
        <h1>
          Page Blog
        </h1>
        <BlogCard/>
      </main>
    );
}
