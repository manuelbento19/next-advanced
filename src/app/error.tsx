"use client"

type Props = {
  error: Error;
  reset: () => void;
}

export default function Error({error,reset}:Props) {
  return (
    <main className="flex h-screen bg-gray-300">
      <article className="bg-white flex flex-col gap-2 m-auto p-4 max-w-sm w-full rounded-md">
        <h1 className="text-2xl">{"Error"}</h1>
        <p>
          {error.message}
        </p>
        <button onClick={reset} className="p-2 rounded bg-black text-white">Reset</button>
      </article>
    </main>
  );
}
