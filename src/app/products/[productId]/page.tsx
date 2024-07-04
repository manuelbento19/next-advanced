import { notFound } from "next/navigation";

export default function Page({params}: {params: {productId: string}}) {
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
  