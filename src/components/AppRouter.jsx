import React, { useContext } from 'react';
import { BrowserRouter, Link, Route, Routes,Redirect, Navigate} from "react-router-dom";
import About from "../pages/About";
import Posts from "../pages/Posts";
import Error from "../pages/Error";
import PostsIdPage from '../pages/PostsIdPage';
import { privateroutess, publicroutess } from '../router';
import { AuthContext } from '../context/context';
import MyLoader from './UI/loader/MyLoader';

const AppRouter = () => {
  const {isAuth,isLoading} = useContext(AuthContext)


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