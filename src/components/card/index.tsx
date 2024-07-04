import { ReactNode } from "react";

type Props = {
    children: ReactNode;
}

export const Card  = ({children}:Props) => {
    return(
        <div className="border p-3 size-full bg-white">
            {children}
        </div>
    )
}