import React from 'react';
import MyButton from '../UI/MyButton/MyButton';

interface IPosts{

}

const Posts: React.FC<IPosts> = () => {
    return (
        <div>
            Работает
            <MyButton>Работает</MyButton>
        </div>
    );
};

export default Posts;