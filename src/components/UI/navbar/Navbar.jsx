import React, { useContext } from "react";
import { Link} from "react-router-dom";
import { AuthContext } from "../../../context/context";
import MyButton from "../button/MyButton";



const Navbar = () => {
    const {isAuth,setIsAuth}=useContext(AuthContext)

    const logut=()=>{
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
        <div className="navbar">
            <MyButton onClick={()=>logut()}>
                Выйти
            </MyButton>
        <div className="navbar__links">
            <Link to="/about">Эбаут</Link>
            <Link to="/posts">Посты</Link>
            <Link to='/pogoda'>Погода</Link>
            <Link to='/oprosnik'>Опрос</Link>
        </div>
    </div>
    );
};

export default Navbar;