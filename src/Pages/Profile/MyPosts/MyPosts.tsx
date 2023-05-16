import {PostSend} from './PostSend/PostSend';
import {Posts} from './Posts/Posts';
import React from 'react';
import {PostsState} from '../../../store/slices/profileSlice.ts';


// interface MyPostsProps {
//     posts: PostsState
// }

export const MyPosts: React.FC<PostsState> = (props) => {
    return (
        <>
            <PostSend/>
            <Posts {...props}/>
        </>
    );
};