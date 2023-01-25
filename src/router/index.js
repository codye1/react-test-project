import About from "../pages/About";
import Converter from "../pages/Converter";
import Login from "../pages/Login";
import Oprosnik from "../pages/Oprosnik";
import Pogoda from "../pages/Pogoda";
import Posts from "../pages/Posts";
import PostsIdPage from "../pages/PostsIdPage";


export const privateroutess=[
    {path: '/aboute',element:About,exact:true},
    {path: '/posts',element:Posts,exact:true},
    {path: '/posts/:id',element:PostsIdPage,exact:true},
    {path: '/pogoda',element:Pogoda,exact:true},
    {path: '/oprosnik',element:Oprosnik,exact:true},
    {path: '/converter',element:Converter,exact:true},

]

export const publicroutess=[
    {path: '/login',element:Login,exact:true},
]