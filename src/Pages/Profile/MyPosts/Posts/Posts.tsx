import {Post} from '../Post/Post.tsx';
import s from './Posts.module.scss';
import {PostsState} from '../../../../store/slices/profileSlice.ts';
import {FC} from 'react';


export const Posts: FC<PostsState> = (props) => {
    // const posts = useAppSelector(state => state.posts.list)

    return (
        <>
            <ul className={s.wrap}>
                {props.list.map((post) =>
                    <Post key={post.id}
                          {...post}
                    />
                )}
            </ul>
        </>
    );
};