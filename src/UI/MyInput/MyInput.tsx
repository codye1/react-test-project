import { type } from 'os';
import React,{useRef} from 'react';
import { useHref } from 'react-router-dom';
import './MyInput.css'

interface InputS{
    type?:string
    placeholder?:string
    value?:string
    onChange?:(e:React.ChangeEvent<HTMLInputElement>)=>void
    onClick?:(e:React.MouseEvent<HTMLInputElement>)=>void
    classes?:string
}

const MyInput: React.FC<InputS> = React.forwardRef((props) => {

    const ref = useRef<HTMLInputElement>(null)
    return (
        <input ref={ref} className={`myInput ${props.classes}`} {...props}/>
    );
});

export default MyInput;
