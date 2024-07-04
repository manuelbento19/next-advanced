import { ReactNode } from "react";

export default function Layout({children}:{children: ReactNode}){

    return(
        <div>
            <header style={{backgroundColor: "#272592",color: "#fff", paddingBlock: 20,textAlign: 'center'}}>
                Header of App
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