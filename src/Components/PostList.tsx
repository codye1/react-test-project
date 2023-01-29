import React from 'react';
import APIPost from '../utils';
import Post from './Post';

interface ListProps{
    post: APIPost[]
}

const PostList:React.FC<ListProps> = ({post}) => {
    console.log(post[0].title);

    return (
        <div>
            {post.map(p =>
            <div key={p.id}>
            <Post post={p}/>
            </div>
            )}
        </div>
    );
};

export default PostList