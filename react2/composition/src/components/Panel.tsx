import type { ReactNode } from "react";

interface PanelProps{
    title: string;
    children: ReactNode
}

const Panel = ({title,children}:PanelProps)=>{
    return (
        <>
        <h3 className="text-amber-900 text-center">{title}</h3>
        <div className="text-blue-500 text-center">{children}</div>
        </>
    )
};

export default Panel