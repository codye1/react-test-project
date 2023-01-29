import { type } from 'os';
import React, { useContext, useState } from 'react';
import {  useAuth } from '../context/context';
import MyButton from '../UI/MyButton/MyButton';
import MyInput from '../UI/MyInput/MyInput';



interface Logins{
    type?:string
    submit?: ()=>void

}


const Login: React.FC<Logins>= () => {

    let {isAuth,stIsAuth} = useAuth()


    const sumbit = (event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()
        stIsAuth && stIsAuth(true)
        localStorage.setItem('auth','true')
    }


    return (
        <div>
            <h1>Вход</h1>
            <form onSubmit={sumbit}>
                <MyInput type='text' placeholder='Логин'/>
                <MyInput type='password' placeholder='Пароль'/>
                <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;