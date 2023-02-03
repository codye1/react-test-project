import React, {useState} from 'react';
import MyButton from './MyButton/MyButton';
import MyInput from './MyInput/MyInput';

interface post{
    userId?:number
    id: number
    title: string
    body: string
}

interface Form{
    create:(newPost: post) => void

}

const PostForm:React.FC<Form> = ({create}) => {

    const [post,setPost]=useState({title:'', body:''});

    function addNewPost(e:React.MouseEvent) {
        e.preventDefault()
        const newPost = {
            ...post,id: Date.now()
        }
        create(newPost)
        setPost({title:'', body:''})
      }


    return (
        <form>
            <MyInput
                value={post.title}
                type='text'
                placeholder='Название поста'
                onChange={e=>setPost({...post, title: e.target.value})}
            />
            <MyInput
            value={post.body}
            onChange={e=>setPost({...post, body: e.target.value})}
            type='text'
            placeholder='Описание поста'
            />
            <MyButton  onClick={addNewPost}>Добавить пост</MyButton>
        </form>
    );
};

export default PostForm;