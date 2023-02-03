import React from 'react';
import {APIPost} from '../../interface';

interface Select{
    option:APIPost[]
    defaultValue:string
    value:  string | number | undefined
    onChange:(b:string)=>void
}
const MySelect:React.FC<Select> = ({option,defaultValue,value,onChange}) => {

    return (
        <select
            value={value}
            onChange={(e:React.ChangeEvent<HTMLSelectElement>) =>onChange(e.target.value)}
        >
            <option disabled value="">{defaultValue}</option>
            {option.map(o =>
            <option key={o.value} value={o.value}>
                {o.name}
            </option>)}
        </select>
    );
};

export default MySelect;