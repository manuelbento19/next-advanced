"use client"

type Props = {
  error: Error
}

export default function Error({error}:Props) {
  return (
    <main className="flex h-screen bg-gray-600">
      <article className="bg-white flex flex-col gap-2 m-auto p-4 max-w-sm w-full rounded-md">
        <h1 className="text-2xl">{"Error"}</h1>
        <p>
          {error.message}
        </p>
      </article>
    </main>
  );
}
