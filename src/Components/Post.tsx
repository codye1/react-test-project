import React, { PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from '../UI/MyButton/MyButton';
import { posts } from '../Pages/Posts';

interface PropsPost{
  post: posts
  remove:(p: number | undefined ) => void
}

const Post:React.FC<PropsPost> = ({post,remove}) => {
    const router = useNavigate()

    return (
        <div className="post">
        <div className="post__content">
        <strong>{post.id}.{post.title}</strong>
          <div>
              {post.body}
          </div>

        </div>
        <div className="post__btns">
            <MyButton onClick={()=>router(`/posts/${post.id}`)}>Comments</MyButton>
            <MyButton onClick={()=>remove(post.id)}>Delete</MyButton>
        </div>
      </div>
    );
};

export default Post;