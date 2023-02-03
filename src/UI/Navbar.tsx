import React, { useContext } from "react";
import { Link} from "react-router-dom";


import { useAuth } from "../context/context";
import MyButton from "./MyButton/MyButton";




const Navbar = () => {
    const {isAuth,setIsAuth}=useAuth()

    const logut=()=>{
        setIsAuth && setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <div className="navbar">
            <MyButton onClick={()=>logut()}>
                Выйти
            </MyButton>
        <div className="navbar__links">
            <Link to="/posts">Посты</Link>
            <Link to="/pogoda">Погода</Link>
            <Link to="/oprosnik">Опросник</Link>
            <Link to="/converter">Конвертер</Link>
        </div>
    </div>
    );
};

export default Navbar;