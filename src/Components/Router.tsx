import Converter from "../Pages/Converter"
import Login from "../Pages/Login"
import Oprosnik from "../Pages/Oprosnik"
import { Pogoda } from "../Pages/Pogoda"
import Posts from "../Pages/Posts"
import PostsIdPage from "../Pages/PostsIdPage"

export const privateroutess=[
    {path: '/posts',element:Posts,exact:true},
    {path: '/posts/:id',element:PostsIdPage,exact:true},
    {path: '/pogoda',element:Pogoda,exact:true},
    {path: '/oprosnik',element:Oprosnik,exact:true},
    {path: '/converter',element:Converter,exact:true},
]

export const publicroutess=[
    {path: '/login',element:Login,exact:true},
]