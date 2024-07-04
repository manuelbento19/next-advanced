import { Card } from "@/components/card";
import { ReactNode } from "react"

type Props = {
    clients: ReactNode;
    header: ReactNode;
    products: ReactNode;
    vendas: ReactNode;
    children: ReactNode;
}

export default function Layout({children,clients,header,products,vendas}:Props){
    return (
        <main className="h-screen flex flex-col bg-slate-100">
            {header}
            {children}
            <section className="flex-1 flex p-4 gap-2">
                <div className="flex flex-col flex-1 gap-2">
                    {vendas}
                    {products}
                </div>
                <div className="flex-1">
                   {clients}
                </div>
            </section>
        </main>
    )
}