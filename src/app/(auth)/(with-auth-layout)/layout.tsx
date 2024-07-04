import { ReactNode } from "react";

export default function Layout({children}:{children: ReactNode}){

    return(
        <div>
            <h1>Layout for Login and Register Page</h1>
            {children}
        </div>
    )
}