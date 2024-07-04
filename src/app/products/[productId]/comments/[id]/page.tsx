import React from "react";

export default function Page({params}: {params: {productId: string,id:string}}) {
  return (
    <main>
      <h1>
        Comment {params.id} of Product {params.productId}
      </h1>
    </main>
  );
}
  