import React, { useEffect, useMemo, useRef, useState } from "react";
import { BrowserRouter, Link, Route, Routes,Redirect, Navigate} from "react-router-dom";
import Navbar from "./components/UI/navbar/Navbar";

import './styles.css/syle.css'
import AppRouter from "./components/AppRouter";
import { AuthContext } from "./context/context";

function App() {
  const [isAuth,setIsAuth]= useState(false)
  const [isLoading,setIsLoading]=useState(true)

  useEffect(()=>{
    if(localStorage.getItem('auth')){
      setIsAuth(true)
      setIsLoading(false)
    }
  },[])
  return (
    <AuthContext.Provider value={{
      isAuth,
      setIsAuth,
      isLoading
    }

    }>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
export default App;
