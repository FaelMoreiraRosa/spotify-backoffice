import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

export default function Layout ({ children }: Props){
    return(
        <div className="w-pull max-w-7xl max-auto p-6 space-y-6">
            {children}
        </div>
    );
}