
export default async function Page() {
  await new Promise((resolve)=>{
    setTimeout(resolve,2000);
  })

  return (
    <main>
      <h1>
        Page Home
      </h1>
    </main>
  );
}
