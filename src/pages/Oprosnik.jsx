import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Oprosnik = () => {

    const [otveti,setOtveti]=useState([
        {vopros:'Что такое React?',name:'react'},
        {id:1,otvet:'Библиотека',status:false},
        {id:2,otvet:'Фреймворк',status:true},
        {id:3,otvet:'Язык',status:false},
    ])

    function smenaVoprosa(){

        if(otveti[0].name === 'react'){
               setOtveti([
                {vopros:'Что такое useState',name:'useState'},
                {id:1,otvet:'Функция',status:false},
                {id:2,otvet:'Переменная',status:false},
                {id:3,otvet:'Хук',status:true},
            ])

        }else if(otveti[0].name === 'useState'){
            setOtveti([
             {vopros:'Что такое Java Skript',name:'JS'},
             {id:1,otvet:'Язык',status:true},
             {id:2,otvet:'Фреймворк',status:false},
             {id:3,otvet:'Библиотека',status:false},
         ])
        }else if(otveti[0].name === 'JS'){
            setOtveti([
                {vopros:'Что такое React?',name:'react'},
                {id:1,otvet:'Библиотека',status:false},
                {id:2,otvet:'Фреймворк',status:true},
                {id:3,otvet:'Язык',status:false},
            ])
        }
    }
    return (
        <div>
            <div className='blockoprosa'>
                <div className='blockvoprosa'> {otveti[0].vopros} </div>
                {
                    otveti.map((otveti)=>
                    otveti.otvet? <div key={otveti.id} className='blockotvetov' onClick={()=>{otveti.status? smenaVoprosa() :console.log('Nepravilno') }} >{otveti.otvet}</div> : console.log('pon')
                )}
            </div>
        </div>
    );
};

export default Oprosnik;