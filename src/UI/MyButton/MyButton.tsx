import React from "react";
import "./MyButton.css"
interface button{
    children?:React.ReactNode;
    onClick?:()=>void
}


const  MyButton: React.FC<button> = ({children, ...props})=>{
    return(
        <button {...props}className={'myBtn'}>
            {children}
        </button>
    )
}

export default MyButton;