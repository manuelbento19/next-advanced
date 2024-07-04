"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useState } from "react";

const links = [
    {
        label: "Register",
        path: "/register" 
    },
    {
        label: "Login",
        path: "/login" 
    },
    {
        label: "Forgot Password",
        path: "/forgot-password" 
    }
]

export default function Layout({children}:{children: ReactNode}){
    const pathName = usePathname();
    const [search,setSearch] = useState("")

    return(
        <div>
            <header className="flex items-center justify-between py-4 px-4 bg-gray-700">
                <ul className="flex items-center gap-4">
                    {links.map(item=>{
                        const active = pathName.startsWith(item.path);
                        return (
                            <li key={item.path}>
                                <Link href={item.path} className={active ? "text-red-500": "text-white"}>{item.label}</Link>
                            </li>
                        )
                    })}
                </ul>
                <div className="flex flex-col gap-2 mt-2">
                    <label htmlFor="search" className="text-white">Search</label>
                    <input value={search} onChange={(eve)=>setSearch(eve.target.value)} className="border p-1 max-w-80 w-full" type="text" id="search" />
                </div>
            </header>
            <section style={{paddingBlock: 20}}>
                {children}
            </section>
            <footer className="flex justify-center py-4 px-4 bg-gray-700 text-white">
                Footer of App
            </footer>
        </div>
    )
}