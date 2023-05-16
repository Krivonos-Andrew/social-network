import {MyPosts} from './MyPosts/MyPosts';
import {ProfileCard} from './ProfileCard/ProfileCard';
import {ProfileImg} from './ProfileImg/ProfileImg';
import s from './Profile.module.scss';
import {FC} from 'react';
import {PostsState} from '../../store/slices/profileSlice.ts';


export const Profile: FC<PostsState> = (props) => {

    return (
        <>
            <div className={s.wrap}>
                <ProfileImg/>
                <ProfileCard/>
                <MyPosts {...props}/>
            </div>
        </>
    );
};