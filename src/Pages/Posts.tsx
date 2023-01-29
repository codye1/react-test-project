import React, { useEffect, useMemo, useRef, useState } from 'react';
import PostService from '../API';
import Post from '../Components/Post';
import PostList from '../Components/PostList';
import MyButton from '../UI/MyButton/MyButton';
import APIPost from '../utils';
import axios from "axios";
interface IPosts extends APIPost{
    postLoad?:boolean

}



const Posts: React.FC<IPosts> = () => {
    const [post,setPost] = useState<APIPost[]>([])
    useEffect(()=>{
        fetchpost()
    },[])

    async function fetchpost() {
        try{

            const response = await axios.get<APIPost[]>('https://jsonplaceholder.typicode.com/posts')
            setPost(response.data)

        }catch (e){
            alert(e)
        }
    }


    return (
        <div>
            {post.length>0 && <PostList post={post}/>}

        </div>
    );
};

export default Posts;