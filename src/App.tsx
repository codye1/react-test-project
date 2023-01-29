import React, { useEffect, useMemo, useRef, useState } from "react";
import { BrowserRouter, Link, Route, Routes, Navigate, Router} from "react-router-dom";
import AppRouter from "./Components/AppRouter";
import './App.css'

import {AuthProvider, useAuth } from "./context/context";
import Navbar from "./UI/Navbar";

function App() {


  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar/>
        <AppRouter/>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
