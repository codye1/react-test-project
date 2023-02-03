import React, { useEffect, useMemo, useRef, useState } from 'react';
import PostList from '../Components/PostList';
import MyButton from '../UI/MyButton/MyButton';
import axios from "axios";
import Mypagination from '../Components/MyPagination';
import { getPageCount } from '../utils/indext';
import MySelect from '../UI/MySelect/MySelect';
import MyModal from '../UI/MyModal/MyModal';
import PostForm from '../UI/PostForm';
import MyFilter from '../Components/MyFilter';
import { type } from '@testing-library/user-event/dist/type';
import PostService from '../API';
import { usePosts, useSortPost } from '../hooks/useSortPost';
import { useFetching } from '../hooks/useFetching';

export interface posts{
    userId?:number
    id: number
    title: string
    body: string
}

interface IPosts{
    postLoad?:boolean

}


const Posts: React.FC<IPosts> = () => {
    const [posts,setPosts] = useState<posts[]>([])
    const [filter,setFilter]=useState({sort:'title' ,query:''});
    const [modal,setModal]=useState(false);
    const [limit,setLimit]= useState<number>(10)
    const [page,setPage]= useState<number>(1)
    const [totalPages,setTotalPages]=useState<number>(0);

    const sortedAndSearchpost= usePosts(posts,filter.sort,filter.query)

    const {fetch,load,error} = useFetching(async(limit,page)=>{
        const response = await PostService.getAll(limit,page);
        setPosts([...posts,...response.data])
        const totalCount = (response.headers['x-total-count'])
        setTotalPages(getPageCount(parseInt(totalCount),limit))
      })


    const removePost=(po:number | undefined) =>{
        setPosts(posts.filter(p=>p.id !== po))
    }

    const createPost=(newPost:posts)=>{
        setPosts([...posts,newPost])
        setModal(false)
      }

    const changePage=(page:number)=>{
        setPage(page)
      }


    useEffect(()=>{fetch(limit,page)
    },[limit,page])

    return (
        <div className="App">
                <MyButton onClick={()=>setModal(true)}>Создать Пост</MyButton>
                <hr style={{margin:'15px'}}/>
                <MyFilter filter={filter} setFilter={setFilter}/>
                <MyModal visible={modal} setVisible={setModal} ><PostForm create={createPost}/></MyModal>
                <MySelect
                    value={limit}
                    onChange={v=>setLimit(parseInt(v))}
                    defaultValue='Кол-во элементов на странице'
                option={[
                    {value: 5,name:'5'},
                    {value: 10,name:'10'},
                    {value: 20,name:'20'},
                    {value: -1,name:'Показать все посты'},
                ]}
      />
            {posts.length>0 && <PostList remove={removePost} post={sortedAndSearchpost}/>}
            <Mypagination page={page} changePage={changePage} totalPages={totalPages}/>
        </div>
    );
};

export default Posts;