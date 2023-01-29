import { type } from 'os';
import React from 'react';
import './MyInput.css'

interface InputS{
    type:string
    placeholder?:string
}

const MyInput: React.FC<InputS> = React.forwardRef((props) => {
    return (
        <input className={'myInput'} {...props}/>
    );
});

export default MyInput;
