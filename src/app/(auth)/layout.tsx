"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

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

    return(
        <div>
            <header style={{backgroundColor: "#272592",color: "#fff", paddingBlock: 20,textAlign: 'center'}}>
                <ul className="flex items-center gap-2">
                    {links.map(item=>{
                        const active = pathName.startsWith(item.path);
                        return (
                            <li key={item.path}>
                                <Link href={item.path} className={active ? "text-red-500": "text-white"}>{item.label}</Link>
                            </li>
                        )
                    })}
                </ul>
            </header>
            <section style={{paddingBlock: 20}}>
                {children}
            </section>
            <footer style={{backgroundColor: "#272592",color: "#fff", paddingBlock: 20,textAlign: 'center'}}>
                Footer of App
            </footer>
        </div>
    )
}