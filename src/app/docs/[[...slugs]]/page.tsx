export default function Page({params}:{params: {slugs: string[]}}) {
  if(params.slugs?.length==2)
  return <h1>Catching all segments from Docs page - We are on docs of Linux </h1>  
  
  if(params.slugs?.length==1)
  return <h1>Catching all segments from Docs page - We are on docs of Windows </h1>  
  
  return <h1>Catching all segments from Docs page </h1>  
}
