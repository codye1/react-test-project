import React, { useMemo, useRef, useState } from "react";
import { posts } from "../Pages/Posts";

type StringProps<T extends Object>={
    [key in keyof T]:T[key]extends string? key:never
}[keyof T]

export const useSortPost=(posts:posts[],sort:string,query:string)=>{

    const sortByProperty= <T extends Object, K extends StringProps<T>>(post:T[],sort:K): T[] => {
        return [...post].sort((a,b)=>(a[sort]as string).localeCompare(b[sort]as string))
        }

    let sortedpost=sortByProperty(posts,`title`)
    let sortedAndSearchpost= sortedpost.filter(post=>post.title.toLowerCase().includes(query.toLowerCase()))
    if(sort==='title'){
        sortedpost=sortByProperty(posts,`title`)
        sortedAndSearchpost=sortedpost.filter(post=>post.title.toLowerCase().includes(query.toLowerCase()))
    }else{
        sortedpost=sortByProperty(posts,'body')
        sortedAndSearchpost=sortedpost.filter(post=>post.body.toLowerCase().includes(query.toLowerCase()))
    }
      return sortedAndSearchpost;
}

export const usePosts=(posts:posts[],sort:string,query:string)=>{
    const sortedPosts = useSortPost(posts,sort,query)
    const sortedAndSearchpost=useMemo(()=>{
        return sortedPosts.filter(post=>post.title.toLowerCase().includes(query.toLowerCase()))
      },[query,sortedPosts])

      return sortedAndSearchpost;
}