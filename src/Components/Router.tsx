import Login from "../Pages/Login"
import Posts from "../Pages/Posts"


export const privateroutess=[
    {path: '/posts',element:Posts,exact:true},
]

export const publicroutess=[
    {path: '/login',element:Login,exact:true},
]