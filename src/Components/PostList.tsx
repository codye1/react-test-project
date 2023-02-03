import React from 'react';
import Posts, { posts } from '../Pages/Posts';
import Post from './Post';

interface ListProps{
    post: posts[]
    remove:(p: number | undefined) => void
}

const PostList:React.FC<ListProps> = ({post,remove}) => {


    return (
        <div>
            {post.map(p =>
            <div key={p.id}>
            <Post remove={remove} post={p}/>
            </div>
            )}
        </div>
    );
};

export default PostList