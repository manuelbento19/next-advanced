import React from 'react'

type User = {
    id: number;
    name: string;                       
    username: string;
    email: string;
    phone:  string;
}

export default async function Page() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users:User[] = await response.json();
    
    return (
        <main className='h-full bg-gray-100'>
            <div className='max-w-screen-xl mx-auto grid grid-cols-1 gap-2 md:gap-4 md:grid-cols-3 p-2'>
                {users?.map(item=>(
                    <article key={item.id} className="flex flex-col gap-2 bg-white shadow-md rounded-lg p-6">
                        <header className="flex items-center gap-3">
                            <div className="flex-shrink-0 size-12 bg-gray-200 rounded-full grid place-items-center text-xl font-semibold text-gray-600">
                                {item.username[0]}
                            </div>
                            <div>
                                <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
                                <p className="text-gray-600">{item.username}</p>
                            </div>
                        </header>
                        <div className="text-gray-800">
                            <p><span className="font-semibold">Email: </span>{item.email}</p>
                            <p><span className="font-semibold">Phone: </span>{item.phone}</p>
                        </div>
                    </article>
                ))}
            </div>
        </main>

    )
}
