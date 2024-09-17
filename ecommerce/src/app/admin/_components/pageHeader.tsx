import { ReactNode } from "react";


export default function PageHeader({children}:{children:ReactNode}){
    return<h1 className="text-xl mb-2">{children}</h1>
}
