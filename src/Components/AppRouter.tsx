import React, { useContext,useEffect,useState } from 'react';
import { BrowserRouter, Link, Route, Routes, Navigate} from "react-router-dom";

import { privateroutess, publicroutess } from './Router';
import {useAuth } from '../context/context';
import MyLoader from '../UI/MyLoader/MyLoader';
import Post from './Post';

interface AppR{

}


const AppRouter: React.FC<AppR> = () => {
  const {isAuth,isLoading} = useAuth()

  const {setIsAuth,setIsLoading}=useAuth()

  useEffect(()=>{
    if(localStorage.getItem('auth')){
      setIsAuth && setIsAuth(true)
      setIsLoading && setIsLoading(false)
    }
  },[])

  if(isLoading){
    return <MyLoader/>
  }

    return (
      isAuth
        ?<Routes>
        {privateroutess.map((route, index) => {
            return (
                <Route key = {index} path = {route.path} element={<route.element />}/>
            )})}
        <Route path = "*" element = {<Navigate to = "/posts" replace/>}/>
        </Routes>
        :<Routes>
        {publicroutess.map((route, index) => {
          return (
              <Route key = {index} path = {route.path} element={<route.element />}/>
          )})}
        <Route path = "*" element = {<Navigate to = "/login" replace/>}/>
        </Routes>
    );
};

export default AppRouter;