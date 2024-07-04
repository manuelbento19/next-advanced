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

const getRandomNumber = () => {
  return Math.floor(Math.random()*3);
}

export default function Page({params}:Props) {
  if(parseInt(params.productId)>100)
  return notFound();

  const randomNumber = getRandomNumber();
  console.log(randomNumber)
  if(randomNumber==2)
    throw new Error("Unexpected Error from Products")
  
  return (
    <main>
      <h1>
        Product {params.productId}
      </h1>
    </main>
  );
}
  