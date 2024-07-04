import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: {
    productId: string
  }
}

export function generateMetadata({params}:Props): Metadata {
  return {
    title: `Product ${params.productId}`
  }
}

export default function Page({params}:Props) {
  if(parseInt(params.productId)>100)
  return notFound();

  return (
    <main>
      <h1>
        Product {params.productId}
      </h1>
    </main>
  );
}
  