import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MyLoader from '../UI/MyLoader/MyLoader';

interface Opros{

}

const Oprosnik = () => {

    const [otveti,setOtveti]=useState([
        {id:1,otvet:'Библиотека',status:false,vopros:'Что такое React?',name:'react'},
        {id:2,otvet:'Фреймворк',status:true},
        {id:3,otvet:'Язык',status:false},

    ])

    function smenaVoprosa(){

        if(otveti[0].name === 'react'){
               setOtveti([
                {id:1,otvet:'Функция',status:false,vopros:'Что такое useState',name:'useState'},
                {id:2,otvet:'Переменная',status:false},
                {id:3,otvet:'Хук',status:true},
            ])

        }else if(otveti[0].name === 'useState'){
            setOtveti([
             {id:1,otvet:'Язык',status:true,vopros:'Что такое Java Skript',name:'JS'},
             {id:2,otvet:'Фреймворк',status:false},
             {id:3,otvet:'Библиотека',status:false},
         ])
        }else if(otveti[0].name === 'JS'){
            setOtveti([
                {id:1,otvet:'Библиотека',status:false,vopros:'Что такое React?',name:'react'},
                {id:2,otvet:'Фреймворк',status:true},
                {id:3,otvet:'Язык',status:false},
            ])
        }
    }
    return (

        <div className='blockoprosa'>
            <div className='blockvoprosa'> {otveti[0].vopros} </div>
            <div>
            {
                otveti.map((otveti)=><div key={otveti.id} className='blockotvetov' onClick={()=>{otveti.status? smenaVoprosa() :console.log('Nepravilno') }}>{otveti.otvet}</div> )

            }
            </div>
        </div>
    );
};

export default Oprosnik;