import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MyLoader from '../UI/MyLoader/MyLoader';
import axios from "axios";
import Posts, { posts } from './Posts';
import PostService from '../API';
interface comms extends posts{
    postId: number
    id: number
    name: string
    email: string
    body: string
}

const PostsIdPage = () => {

    const params = useParams()
    const [post,setPost]=useState<posts>();
    const [comments,setComments]=useState<comms[]>([])
    const [load,setLoad]=useState<boolean>()
    const [loadcomm,setLoadcomm]=useState<boolean>()

    async function fetchPostById(id?:string) {
        try{
            setLoad(true)
            const response = await PostService.getPostById(id)
            setPost(response.data)
            setLoad(false)
        }catch (e){
            alert(e)
        }
    }

    async function fetchComments(id?:string) {
        try{
            setLoadcomm(true)
            const response = await PostService.getComsById(id)
            setComments(response.data)
            setLoadcomm(false)
        }catch (e){
            alert(e)
        }
    }



    useEffect(()=>{
        fetchPostById(params.id)
        fetchComments(params.id)
    },[])
    return (
        <div>
            <h1>Пост №{params.id}</h1>
            {load
                ? <MyLoader/>
                : <div>{post?.id}.{post?.title}</div>

                }
            <div>Коментарии</div>
            {loadcomm
                ? <MyLoader/>
                : <div>
                    {comments.map(comm =>
                        <div key={comm.id}  style={{marginTop: 15}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
        </div>
    );
};

export default PostsIdPage;