import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MyInput from '../UI/MyInput/MyInput';


const Converter = () => {
    const defoult = ['UAH','USD','EUR']
    const [result,setResult]=useState<number>(1)
    const [number,setNumber]=useState<number>(1)
    const [fromCurrency,setFromCurrency]=useState('UAH')
    const [toCurrency,setToCurrency]=useState('UAH')
   function converters() {
        if (fromCurrency===toCurrency) {
            setResult(number)
        }else if (fromCurrency==='UAH'){
            toCurrency==='USD'? setResult(number*0.03) : setResult(number*0.03)
        }else if (fromCurrency==='USD'){
            toCurrency==='USD'? setResult(number) : toCurrency==='EUR'? setResult(number*0.92) : setResult(number*35)
        }else if (fromCurrency==='EUR'){
            toCurrency==='EUR'? setResult(number) : toCurrency==='UAH'? setResult(number*36) : setResult(number*1.09)
        }
    }

    useEffect(()=>{converters()},[number,fromCurrency,toCurrency])


    return (
        <div className='blockoprosa'>
            <div className='blockconvert'>
                {defoult.map((cur)=>(
                    <button
                    onClick={()=>setFromCurrency(cur)}
                    className={fromCurrency===cur?'actives': ''}
                    key={cur}
                    >{cur}
                    </button>
                ))}
            <MyInput type='number' classes='convinp'value={`${number}`} onChange={(e)=>{
                setNumber(parseInt(e.target.value))
                }} ></MyInput>
            </div>
            <div className='blockconvert'>
            {defoult.map((cur)=>(
                    <button
                    onClick={()=>setToCurrency(cur)}
                    className={toCurrency===cur?'actives': ''}
                    key={cur}
                    >{cur}
                    </button>
                ))}
            <div className='convinp'>{result}</div>
            </div>
        </div>
    );
};

export default Converter;